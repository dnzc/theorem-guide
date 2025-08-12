"""
Custom mistune-based markdown processor that preserves custom tags.
"""

import re
import mistune
from mistune import HTMLRenderer
from pygments import highlight
from pygments.lexers import get_lexer_by_name, guess_lexer
from pygments.formatters import HtmlFormatter
from constants import BLOCK_COMPONENTS, INLINE_COMPONENTS


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
        
        # process block components FIRST (content as markdown)
        # this must happen before protecting standalone tags
        for component in BLOCK_COMPONENTS:
            pattern = rf'<{component}([^>]*?)>(.*?)</{component}>'
            text = re.sub(pattern, self._process_block_component, text, flags=re.DOTALL)
        
        # protect remaining inline components (preserve as-is)
        for component in INLINE_COMPONENTS:
            if component == 'Latex':
                continue  # Already handled
            
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
        
        # protect any remaining unmatched opening/closing tags for all components
        # this handles cases where tags might be split or appear standalone
        all_components = INLINE_COMPONENTS + BLOCK_COMPONENTS
        for component in all_components:
            # protect any remaining opening tags that weren't caught
            pattern = rf'<{component}([^>]*?)>'
            text = re.sub(pattern, self._store_component, text)
            # protect any remaining closing tags
            pattern = rf'</{component}>'
            text = re.sub(pattern, self._store_component, text)
        
        return text
    
    def _process_block_component(self, match):
        """process block component content as markdown."""
        component = match.group(0).split('>')[0].split('<')[1].split()[0]
        attrs = match.group(1) or ''
        content = match.group(2)
        
        # recursively protect components in the content
        protected_content = self.protect_components(content.strip())
        
        # store the complete component with protected content
        placeholder = f'REACTBLOCK{self.counter:04d}'
        self.placeholders[placeholder] = (component, attrs, protected_content)
        self.counter += 1
        return placeholder
    
    def _store_component(self, match):
        """store inline component for later restoration."""
        placeholder = f'REACTINLINE{self.counter:04d}'
        self.placeholders[placeholder] = match.group(0)
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
                        component, attrs, protected_content = value
                        
                        # create markdown processor
                        md = create_markdown_processor()
                        processed_content = md(protected_content)
                        
                        replacement = f'<{component}{attrs}>{processed_content}</{component}>'
                        
                        # if the placeholder is wrapped in <p> tags, remove them
                        # since block components shouldn't be inside paragraphs
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
        # 'footnotes',  # disabled - we handle footnotes in preprocessor
        'table',
        'strikethrough',
        'url',
    ])
    return md


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
    
    processor = ReactComponentProcessor()
    protected = processor.protect_components(content) # protect React components
    md = create_markdown_processor(add_heading_ids=add_heading_ids)
    html = md(protected)
    html = processor.restore_components(html) # restore React components
    html = nextjs_replacements(html)
    return html


def nextjs_replacements(html):
    # remove <p> tags that wrap block-level React components
    for component in BLOCK_COMPONENTS:
        # remove <p> before and </p> after the component
        html = re.sub(rf'<p>(<{component}[^>]*?>)', r'\1', html)
        html = re.sub(rf'(</{component}>)</p>', r'\1', html)
    
    # remove <p> tags that wrap <div> elements (divs are block-level and shouldn't be in p tags)
    html = re.sub(r'<p>(<div[^>]*?>)', r'\1', html)
    html = re.sub(r'(</div>)</p>', r'\1', html)
    
    # fix unclosed <p> tags before <div> elements (mistune sometimes doesn't close them)
    # this handles cases like <p>text<div>...</div> which should be <p>text</p><div>...</div>
    html = re.sub(r'(<p>(?:(?!</p>|<div).)*?)(<div[^>]*?>)', r'\1</p>\2', html, flags=re.DOTALL)

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