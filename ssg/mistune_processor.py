"""
Custom mistune-based markdown processor that preserves custom tags.
"""

import re
import mistune
import warnings
from mistune import HTMLRenderer
from pygments import highlight
from pygments.lexers import get_lexer_by_name, guess_lexer
from pygments.formatters import HtmlFormatter

from constants import COMPONENTS

class ReactComponentProcessor:
    """handles React components in markdown"""
    
    def __init__(self):
        self.placeholders = {}
        self.counter = 0
    
    def protect_components(self, text):
        """extract and protect React components before markdown processing."""
        
        # first protect ALL Latex components (both inline and block)
        # to prevent their content from being processed as markdown
        latex_pattern = r'<Latex>(.*?)</Latex>'
        text = re.sub(latex_pattern, self._store_component, text, flags=re.DOTALL)
        
        # process components whose content is markdown
        for component, are_contents_markdown, _ in COMPONENTS:
            if not are_contents_markdown: continue
            # handle opening/closing tags with content
            pattern = rf'<{component}([^>]*?)>(.*?)</{component}>'
            text = re.sub(pattern, self._process_block_component, text, flags=re.DOTALL)
            # handle self-closing tags for block components
            pattern = rf'<{component}([^>]*?)/>'
            text = re.sub(pattern, self._store_block_selfclosing, text)
        
        # protect remaining components (preserve as-is)
        for component, are_contents_markdown, _ in COMPONENTS:
            if are_contents_markdown: continue
            # self-closing tags
            pattern = rf'<{component}([^>]*?)/>'
            text = re.sub(pattern, self._store_component, text)
            # tags with content
            pattern = rf'<{component}([^>]*?)>(.*?)</{component}>'
            text = re.sub(pattern, self._store_component, text, flags=re.DOTALL)
        
        # protect div tags with class/className attributes (for flex layouts etc)
        # these are valid HTML that we want to preserve
        div_pattern = r'<div\s+(?:class|className)=["\'][^"\']*?["\'][^>]*?>.*?</div>'
        text = re.sub(div_pattern, self._store_component, text, flags=re.DOTALL)
        
        # also protect standalone opening div tags with class/className
        div_open_pattern = r'<div\s+(?:class|className)=["\'][^"\']*?["\'][^>]*?>'
        text = re.sub(div_open_pattern, self._store_component, text)
        
        # protect closing div tags
        text = re.sub(r'</div>', self._store_component, text)
        
        return text
    
    def _process_block_component(self, match):
        """process block component content as markdown."""
        component = match.group(0).split('>')[0].split('<')[1].split()[0]
        attrs = match.group(1) or ''
        content = match.group(2)
        
        # special handling for Quiz components
        if component == 'Quiz':
            return self._process_quiz_component(attrs, content)
        
        # recursively protect components in the content
        protected_content = self.protect_components(content.strip())
        
        # store the complete component with protected content
        placeholder = f'REACTBLOCK{self.counter:04d}'
        self.placeholders[placeholder] = (component, attrs, protected_content)
        self.counter += 1
        return placeholder
    
    def _process_quiz_component(self, attrs, content):
        """process Quiz component with special checkbox handling."""
        import json
        
        # generate unique quiz ID for this quiz instance
        quiz_id = f"quiz_{self.counter}"
        
        # extract checkboxes and other content
        quiz_items = []
        lines = content.strip().split('\n')
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
                
            # check for checkbox pattern
            checkbox_match = re.match(r'^-\s*\[([ x])\]\s*(.+)$', line, re.IGNORECASE)
            if checkbox_match:
                state = checkbox_match.group(1).lower()
                text = checkbox_match.group(2).strip()
                quiz_items.append({
                    'type': 'checkbox',
                    'checked': state == 'x',
                    'text': text
                })
            else:
                # regular text content
                if line.startswith('- '):
                    # regular list item (non-checkbox)
                    quiz_items.append({
                        'type': 'text',
                        'content': line[2:].strip()  # remove "- " prefix
                    })
                else:
                    # paragraph or other content
                    quiz_items.append({
                        'type': 'text', 
                        'content': line
                    })
        
        # check if multi attribute is present (default is single-select)
        is_multi = 'multi' in (attrs or '')
        quiz_type = 'multi' if is_multi else 'single'
        
        # validate quiz: check for multiple correct answers in single-select quiz
        if quiz_type == 'single':
            correct_count = sum(1 for item in quiz_items if item.get('type') == 'checkbox' and item.get('checked'))
            if correct_count > 1:
                # get current file location for the warning
                import inspect
                frame = inspect.currentframe()
                try:
                    # try to get the file being processed from the call stack
                    caller_frame = frame.f_back.f_back  # go up the stack to find the actual file being processed
                    while caller_frame and not hasattr(caller_frame.f_locals, 'get') and 'filename' not in caller_frame.f_locals:
                        caller_frame = caller_frame.f_back
                    
                    location = "unknown location"
                    if caller_frame and 'filename' in caller_frame.f_locals:
                        location = caller_frame.f_locals['filename']
                    
                    warnings.warn(f"Single-select quiz has {correct_count} correct answers marked with [x]. Only one answer should be correct in single-select quizzes. Location: {location}")
                finally:
                    del frame
        
        # generate static HTML content for quiz items
        quiz_content_html = self._generate_quiz_content_html(quiz_items, quiz_type, quiz_id)
        
        # generate the Quiz component with both static content and data
        placeholder = f'QUIZ{self.counter:04d}'
        
        quiz_component = f'''<Quiz{attrs}>
{quiz_content_html}
</Quiz>'''
        
        self.placeholders[placeholder] = quiz_component
        self.counter += 1
        return placeholder
    
    def _generate_quiz_content_html(self, quiz_items, quiz_type, quiz_id):
        """generate static HTML for quiz content."""
        html_parts = []
        checkbox_index = 0
        
        for item in quiz_items:
            if item['type'] == 'checkbox':
                input_id = f'{quiz_id}-option-{checkbox_index}'
                input_type = 'checkbox' if quiz_type == 'multi' else 'radio'
                input_name = f'name="{quiz_id}-options"' if quiz_type == 'single' else ''
                correct_class = 'data-correct="true"' if item['checked'] else 'data-correct="false"'
                
                html_parts.append(f'''
                <div className="quiz-option" data-type="{input_type}" data-index="{checkbox_index}">
                    <input
                        type="{input_type}"
                        id="{input_id}"
                        {input_name}
                        {correct_class}
                        className="quiz-input-tag"
                    />
                    <label htmlFor="{input_id}" className="quiz-option-label">
                        {item['text']}
                    </label>
                </div>''')
                checkbox_index += 1
            elif item['type'] == 'text' and item['content'].strip():
                html_parts.append(f'''
                <p className="quiz-text">{item['content']}</p>''')
        
        return '\n'.join(html_parts)
    
    def _store_component(self, match):
        """store inline component for later restoration."""
        placeholder = f'REACTINLINE{self.counter:04d}'
        self.placeholders[placeholder] = match.group(0)
        self.counter += 1
        return placeholder
    
    def _store_block_selfclosing(self, match):
        """store self-closing block component for later restoration."""
        placeholder = f'REACTBLOCK{self.counter:04d}'
        component_tag = match.group(0)
        # for self-closing block components, store the tag directly (no content to process)
        self.placeholders[placeholder] = ('selfclosing', '', component_tag)
        self.counter += 1
        return placeholder
    
    def restore_components(self, html):
        """restore all protected components."""
        # keep replacing until no more placeholders are found
        max_iterations = 100  # prevent infinite loops
        iteration = 0
        
        while iteration < max_iterations:
            replaced = False
            for placeholder, value in self.placeholders.items():
                if placeholder in html:
                    if placeholder.startswith('REACTBLOCK'):
                        # process block component content
                        if len(value) == 3 and value[0] == 'selfclosing':
                            # self-closing block component - use the stored tag directly
                            replacement = value[2]
                        else:
                            # regular block component with content
                            component, attrs, protected_content = value
                            
                            # create markdown processor
                            md = create_markdown_processor()
                            processed_content = md(protected_content)
                            
                            # for math components, wrap content in span instead of allowing p tags which will mess with the <p> removal later
                            if component in [c for c,_,i in COMPONENTS if 'math' in i]:
                                processed_content = re.sub(r'<p>(.*?)</p>', r'<span className="block">\1</span>', processed_content, flags=re.DOTALL)
                            
                            replacement = f'<{component}{attrs}>{processed_content}</{component}>'
                        
                        # if the placeholder is wrapped in <p> tags, remove them
                        # since block components shouldn't be inside paragraphs
                        if f'<p>{placeholder}</p>' in html:
                            html = html.replace(f'<p>{placeholder}</p>', replacement)
                        else:
                            html = html.replace(placeholder, replacement)
                    elif placeholder.startswith('QUIZ'):
                        # special handling for Quiz components - they're already processed
                        replacement = value
                        if f'<p>{placeholder}</p>' in html:
                            html = html.replace(f'<p>{placeholder}</p>', replacement)
                        else:
                            html = html.replace(placeholder, replacement)
                    else:
                        # inline component - restore as-is
                        html = html.replace(placeholder, value)
                    replaced = True
            
            if not replaced:
                break
            iteration += 1
        else:
            raise RuntimeError("max iterations exceeded")
        
        return html


class Renderer(HTMLRenderer):
    
    def __init__(self, *args, add_heading_ids=True, **kwargs):
        self.add_heading_ids = add_heading_ids
        super().__init__(*args, **kwargs)

    def heading(self, text, level, **attrs):
        """generate heading with id for anchors."""
        if self.add_heading_ids:
            id_text = re.sub(r'[^\w\s-]', '', text.lower())
            id_text = re.sub(r'[\s]+', '-', id_text)
            return f'<h{level} id="{id_text}">{text}</h{level}>\n'
        else: 
            return f'<h{level}>{text}</h{level}>\n'
    
    def block_code(self, text, info=None):
        """render code block with syntax highlighting."""
        if info:
            try:
                lexer = get_lexer_by_name(info, stripall=True)
            except:
                lexer = guess_lexer(text)
        else:
            try:
                lexer = guess_lexer(text)
            except:
                # plain text if can't guess
                return f'<pre><code>{mistune.escape(text)}</code></pre>\n'
        
        formatter = HtmlFormatter(cssclass='codehilite')
        return highlight(text, lexer, formatter)


def create_markdown_processor(add_heading_ids=True):
    renderer = Renderer(add_heading_ids=add_heading_ids, escape=False)
    md = mistune.create_markdown(renderer=renderer, plugins=[
        'table',
        'strikethrough',
        'url',
    ])
    return md


class BlockquoteTableProcessor:
    """handles tables inside blockquotes by extracting and processing them separately."""
    
    def __init__(self):
        self.table_placeholders = {}
        self.counter = 0
    
    def extract_blockquote_tables(self, text):
        """extract tables from blockquotes and replace with placeholders."""
        import re
        
        # pattern to match tables within blockquotes
        table_in_blockquote_pattern = r'(^>\s*\|.*?\|.*?$\n^>\s*\|[-:|\s]+\|.*?$(?:\n^>\s*\|.*?\|.*?$)*)'
        
        def replace_with_placeholder(match):
            table_lines = match.group(1).split('\n')
            # remove the '> ' or '>' prefix from each line
            clean_table_lines = []
            for line in table_lines:
                if line.startswith('> '):
                    clean_table_lines.append(line[2:])
                elif line.startswith('>'):
                    clean_table_lines.append(line[1:])
            
            clean_table = '\n'.join(clean_table_lines)
            
            # process this table separately to get the HTML
            md = create_markdown_processor(add_heading_ids=False)
            table_html = md(clean_table).strip()
            
            # create placeholder
            placeholder = f'BLOCKQUOTETABLE{self.counter:04d}'
            self.table_placeholders[placeholder] = table_html
            self.counter += 1
            
            # return placeholder within blockquote structure
            return f'> {placeholder}'
        
        # find and replace all tables in blockquotes with placeholders
        text = re.sub(table_in_blockquote_pattern, replace_with_placeholder, text, flags=re.MULTILINE)
        
        return text
    
    def restore_blockquote_tables(self, html):
        """restore the processed tables in place of placeholders."""
        for placeholder, table_html in self.table_placeholders.items():
            # the placeholder should be inside a <p> tag within a <blockquote>
            # replace the entire <p> tag containing the placeholder
            pattern = f'<p>{placeholder}</p>'
            if pattern in html:
                html = html.replace(pattern, table_html)
            else:
                # fallback: just replace the placeholder directly
                html = html.replace(placeholder, table_html)
        
        return html


def preprocess_footnotes(text):
    """convert markdown footnotes to HTML before other processing."""
    import re
    
    # collect all footnote definitions
    footnote_defs = {}
    footnote_def_pattern = r'^\[\^(\w+)\]:\s*(.+?)(?=\n\[\^|\n\n|\Z)'
    
    # find all footnote definitions (multiline support)
    for match in re.finditer(footnote_def_pattern, text, re.MULTILINE | re.DOTALL):
        footnote_id = match.group(1)
        footnote_text = match.group(2).strip()
        footnote_defs[footnote_id] = footnote_text
    
    # remove footnote definitions from text
    text = re.sub(footnote_def_pattern, '', text, flags=re.MULTILINE | re.DOTALL)
    
    # replace footnote references with HTML
    def replace_ref(match):
        ref_id = match.group(1)
        if ref_id in footnote_defs:
            return f'<sup className="footnote-ref" id="fnref-{ref_id}"><a href="#fn-{ref_id}">{ref_id}</a></sup>'
        return match.group(0)  # leave unchanged if no definition found
    
    text = re.sub(r'\[\^(\w+)\]', replace_ref, text)
    
    # add footnote section at the end if there are any footnotes
    if footnote_defs:
        text += '\n\n<section className="footnotes">\n<ol>\n'
        for ref_id, content in sorted(footnote_defs.items(), key=lambda x: (x[0].isdigit(), int(x[0]) if x[0].isdigit() else 0, x[0])):
            # keep latex as-is in footnotes, it will be processed later
            # no need to wrap in <Latex> tags since $ delimiters are preserved
            text += f'<li id="fn-{ref_id}"><p>{content}<a href="#fnref-{ref_id}" className="footnote">&#8617;</a></p></li>\n'
        text += '</ol>\n</section>\n'
    
    return text


def process_markdown(content, add_heading_ids=True):
    """main processing function."""
    # preprocess footnotes first
    content = preprocess_footnotes(content)
    
    # handle tables in blockquotes
    blockquote_table_processor = BlockquoteTableProcessor()
    content = blockquote_table_processor.extract_blockquote_tables(content)
    
    processor = ReactComponentProcessor()
    protected = processor.protect_components(content) # protect React components
    md = create_markdown_processor(add_heading_ids=add_heading_ids)
    html = md(protected)
    html = processor.restore_components(html) # restore React components
    html = blockquote_table_processor.restore_blockquote_tables(html) # restore blockquote tables
    html = nextjs_replacements(html)
    return html


def nextjs_replacements(html):
    component_names = [comp[0] for comp in COMPONENTS]
    
    for tag in component_names + ['div']:
        # find <p> tags that wrap this tag and remove them (don't ask me what the hell this regex does, claude did it)
        html = re.sub(rf'<p>([^<]*(?:<(?!/?p\b)[^<]*)*<{tag}[^>]*?>.*?</{tag}>[^<]*(?:<(?!/?p\b)[^<]*)*)</p>', r'\1', html, flags=re.DOTALL)
        # handle self-closing tags
        html = re.sub(rf'<p>([^<]*(?:<(?!/?p\b)[^<]*)*<{tag}[^>]*?/>[^<]*(?:<(?!/?p\b)[^<]*)*)</p>', r'\1', html, flags=re.DOTALL)
    
    # also remove <p> tags that directly contain <div> elements (invalid HTML)
    html = re.sub(r'<p>(\s*<div[^>]*>.*?</div>\s*)</p>', r'\1', html, flags=re.DOTALL)

    # markdown added class attributes, replace with "className" for react
    html = html.replace(' class=', ' className=')

    # replace curly braces with html character codes, so that react ignores them
    html = re.sub('{', '&#123;', html)
    html = re.sub('}', '&#125;', html)

    # pre doesn't work in nextjs, so find all whitespace inside pre tags and replace with character codes
    for m in [i.span() for i in re.finditer(r'(?<=<pre>)(.*?)(?=</pre>)', html, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
        target = html[m[0]:m[1]]
        target = re.sub('span ', 'span#', target) # temp
        target = re.sub(' ', '&nbsp;', target) # replace whitespace
        target = re.sub('span#', 'span ', target)
        target = re.sub('\n', '<br/>', target) # replace newlines
        html = html[:m[0]] + target + html[m[1]:]
    
    return html