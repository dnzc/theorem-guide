import re
from datetime import datetime
import hashlib
import os
import html
import subprocess
import frontmatter
from mistune_processor import process_markdown
from constants import *

warnings = set()

def warn(message):
    warnings.add(message)

def ensure_dir_with_correct_case(target_path):
    """create directory and ensure it has the correct case on case-insensitive filesystems"""
    os.makedirs(target_path, exist_ok=True)
    
    # ensure correct case on case-insensitive filesystems
    parent_dir = os.path.dirname(target_path)
    desired_name = os.path.basename(target_path)
    if parent_dir and os.path.exists(parent_dir):
        actual_name = next((item for item in os.listdir(parent_dir) 
                           if item.lower() == desired_name.lower()), None)
        if actual_name and actual_name != desired_name:
            os.rename(os.path.join(parent_dir, actual_name), target_path)

def get_sidebar_display_name(filepath, metadata=None):
    """get display name for sidebar and HTML title either from frontmatter pagename, or by formatting the filename"""
    if metadata and 'pagename' in metadata:
        return metadata['pagename']
    
    targetpath = filepath
    if filepath.endswith('/README.md'): # readmes should be elevated
        targetpath = os.path.dirname(filepath)

    name = beautify(os.path.basename(targetpath), lower=False)
    name = name.replace('-', ' ')
    name = re.sub(r'\band\b', '&', name, flags=re.IGNORECASE)
    return name

def wrap_in_js(jinja, title=''):
    titleMetadata = 'export const metadata = {title:"'+title+'"}' if title else ''

    all_imports = {
        'FaBook': 'import { FaBook } from "react-icons/fa"',
        'GrArticle': 'import { GrArticle } from "react-icons/gr"',
        'AiFillFolder': 'import { AiFillFolder } from "react-icons/ai"',
        'Link': 'import Link from "next/link"',
        'Latex': 'import Latex from "react-latex-next"\nimport "katex/dist/katex.min.css"',
        'Image': 'import Image from "next/image"',
        'FaChevronRight': 'import { FaChevronRight } from "react-icons/fa"',
        'FaSearch': 'import { FaSearch } from "react-icons/fa"',
        'RiArrowGoBackFill': 'import { RiArrowGoBackFill } from "react-icons/ri"',
        'CiLogout': 'import { CiLogout } from "react-icons/ci"',
    }
    # add component imports
    for name, _, import_string in COMPONENTS:
        all_imports[name] = import_string

    imports = [all_imports[i] for i in all_imports if f'<{i}' in jinja]

    return f'''
import "react-toastify/dist/ReactToastify.css"
import {{ ToastContainer }} from "react-toastify"
{'\n'.join(imports)}

{titleMetadata}


export default function Page () {{
    return (
        <>
            <ToastContainer
                position='top-right'
                autoClose={{5000}}
                hideProgressBar={{false}}
                newestOnTop={{false}}
                closeOnClick
                rtl={{false}}
                pauseOnFocusLoss={{false}}
                pauseOnHover={{false}}
                theme='light'
            />
            {jinja}
        </>
    )
}}
    '''

def add_link_anchors(page, cur_target_dir, h1=False): 
    """
    find h2 (or h1) with an id, add link anchor to them (each heading in a markdown file is (by default) given a unique id by the processor)
    can also be applied to the homepage (but the header ids must be manually put there)
    """
    page = re.sub(r'<h2 id="(.*?)">(.*?)</h2>', r'<h2 className="group flex space-x-1 items-baseline"><span id="\1">\2</span><Pilcrow href="#\1" text="https://tripos.guru'+cur_target_dir+r'#\1"/></h2>', page, flags=re.DOTALL)
    if h1: page = re.sub(r'<h1 id="(.*?)">(.*?)</h1>', r'<h1 className="group flex space-x-1 items-baseline"><span id="\1">\2</span><Pilcrow href="#\1" text="https://tripos.guru'+cur_target_dir+r'#\1"/></h1>', page, flags=re.DOTALL)
    return page

def timestamp_to_str(timestamp):
    return '' if timestamp==PLACEHOLDER_TIMESTAMP else datetime.fromtimestamp(timestamp).strftime('%d %b %Y')

def beautify(path, lower=True):
    """turn path found in content into path to be used on the website"""
    temp = path.replace(BOOK_INDICATOR, '').removesuffix('.md')
    if lower: temp = temp.lower()
    return re.sub(r'[^a-zA-Z0-9-/]', '', temp) # remove illegal chars

def checksum(path):
    hash = lambda plaintext: hashlib.md5(bytes(plaintext,'u8')).hexdigest()
    if not os.path.isdir(path):
        with open(path, 'r') as f:
            return hash(f.read())
    concat = []
    for child in os.listdir(path):
        concat.append(checksum(path+'/'+child)) # detect changes in children
    concat.append(hash(path.removeprefix(ROOT_DIR))) # detect new folders
    return hash(''.join(concat))
    
def flatten_content(content, title):
    """turn html article content into plaintext"""
    # replace <br/> with newlines, so that text on newlines remains separated after removing all html tags
    content = content.replace('<br/>', '\n')
    # remove footnote references
    content = re.sub(r'<sup[^<>]*?footnote-ref[^<>]*?>.*?</sup>', '', content, flags=re.DOTALL)
    # remove copy buttons (because weird characters e.g. <> might be in the text to be copied i.e. inside the tag)
    content = re.sub(r'<CopyButton.*?/>', '', content, flags=re.DOTALL)
    content = re.sub(r'<CopyButton.*?>(.*?)</CopyButton>', f'\1', content, flags=re.DOTALL)
    # < or > might occur inside a tag; assume the only time this happens is when you have "=>" in something like "<button onClick={() => {...}}>"
    content = re.sub(r'<[^/][^<>]*?=>[^<>]*?>', '', content, flags=re.DOTALL) # deal with the special case
    content = re.sub(r'<.*?>', '', content, flags=re.DOTALL) # now remove tags without issue
    # replace html literals e.g. &nbsp;
    content = html.unescape(content)
    content = re.sub(r'\s', ' ', content)
    # remove link anchors
    content = re.sub(r'¶', r'', content, flags=re.DOTALL) 
    # delete first occurrence of title (guaranteed to be title itself, since title identification identified the first title)
    content = content.replace(title, '', 1)
    # format as json string
    content = content.replace('\\','\\\\').replace('\n',' ').replace('\'', '\\\'').strip()
    content = re.sub(r' +', ' ', content)
    return content

def get_updation_timestamp_and_filecount(cur_dir):
    timestamp = PLACEHOLDER_TIMESTAMP
    if cur_dir.endswith('.md'):
        with open(SOURCE_DIR+cur_dir, 'r') as f:
            try:
                post = frontmatter.load(f)
                # use modified date if available, otherwise use created date
                if 'modified' in post.metadata:
                    timestamp = datetime.strptime(post.metadata['modified'], '%d/%m/%Y %H:%M').timestamp()
                elif 'created' in post.metadata:
                    timestamp = datetime.strptime(post.metadata['created'], '%d/%m/%Y %H:%M').timestamp()
            except (ValueError, TypeError): pass
        # exclude README files from article count
        article_count = 0 if cur_dir.endswith('README.md') else 1
        
        # exclude folder README files from timestamp (but keep book README timestamps)
        if cur_dir.endswith('README.md'):
            parent_dir = '/'.join(cur_dir.split('/')[:-1])  # get parent directory
            is_book = BOOK_INDICATOR in parent_dir.split('/')[-1] if parent_dir else False
            if not is_book:  # folder README, don't use its timestamp
                timestamp = PLACEHOLDER_TIMESTAMP
                
        return timestamp, article_count
    filecount = 0
    for child in os.listdir(SOURCE_DIR+cur_dir):
        child_timestamp, child_filecount = get_updation_timestamp_and_filecount(cur_dir+'/'+child)
        timestamp = max(timestamp, child_timestamp)
        filecount += child_filecount
    return timestamp, filecount

def get_folder_contents(cur_dir):
    folder_contents = []
    for child in os.listdir(SOURCE_DIR+cur_dir):
        if child.endswith('README.md'): continue # exclude readmes
        item = {}
        type = 'folder'
        if child.endswith('.md'):
            type = 'file'
        elif BOOK_INDICATOR in child:
            type = 'book'
        item['type'] = type
        child_dir = cur_dir+'/'+child
        
        # get display name for sidebar
        if type == 'file':
            try:
                with open(SOURCE_DIR+child_dir, 'r') as f:
                    post = frontmatter.load(f)
                    item['name'] = get_sidebar_display_name(child_dir, post.metadata)
            except:
                item['name'] = get_sidebar_display_name(child_dir)
        else:
            # for folders/books, check if README exists and get pagename from its metadata
            readme_path = SOURCE_DIR + child_dir + '/README.md'
            if os.path.exists(readme_path):
                try:
                    with open(readme_path, 'r') as f:
                        post = frontmatter.load(f)
                        item['name'] = get_sidebar_display_name(child_dir, post.metadata)
                except:
                    item['name'] = get_sidebar_display_name(child_dir)
            else:
                item['name'] = get_sidebar_display_name(child_dir)
        item['path'] = beautify(cur_dir + '/' + child)
        item['mod_timestamp'], item['filecount'] = get_updation_timestamp_and_filecount(child_dir)
        item['mod_date_time'] = timestamp_to_str(item['mod_timestamp'])
        folder_contents.append(item)
    return folder_contents

def construct_tree(cur_dir, depth):
    """
    construct a representation of the directory tree that will be generated
    so that it can be passed to the template to be displayed as a sidebar
    """
    cur_path = SOURCE_DIR+cur_dir
    name = os.path.basename(cur_path)
    d = {}
    d['depth'] = depth
    
    # check for nested books and prevent them
    is_book = BOOK_INDICATOR in name
    if is_book:
        # check if we're inside another book by examining parent path
        parent_path = cur_dir.replace('/'+name, '')
        path_parts = parent_path.strip('/').split('/')
        inside_book = any(BOOK_INDICATOR in part for part in path_parts if part)
        if inside_book:
            warn(f"Nested book detected: {cur_dir}. Books cannot be nested inside other books.")
            is_book = False  # treat as regular folder
    
    d['is_marked_as_book'] = is_book
    d['is_dir'] = os.path.isdir(cur_path)
    d['path'] = beautify(cur_dir)
    if d['is_dir']:
        children = []
        for child in os.listdir(cur_path):
            if child.endswith('README.md'): continue # exclude readmes
            children.append(construct_tree(cur_dir+'/'+child, depth+1))
        # sort children alphabetically by their display names
        children.sort(key=lambda x: x['name'].lower())
        d['children'] = children
    else:
        assert BOOK_INDICATOR not in name
    if depth == 0:
        d['name'] = 'root'
        return d
    
    # get display name for sidebar
    if not d['is_dir'] and cur_dir.endswith('.md'):
        try:
            with open(cur_path, 'r') as f:
                post = frontmatter.load(f)
                d['name'] = get_sidebar_display_name(cur_dir, post.metadata)
        except:
            d['name'] = get_sidebar_display_name(cur_dir)
    else:
        # for directories, check if README exists and get pagename from its metadata
        readme_path = cur_path + '/README.md'
        if os.path.exists(readme_path):
            try:
                with open(readme_path, 'r') as f:
                    post = frontmatter.load(f)
                    d['name'] = get_sidebar_display_name(cur_dir, post.metadata)
            except:
                d['name'] = get_sidebar_display_name(cur_dir)
        else:
            d['name'] = get_sidebar_display_name(cur_dir)
    return d

def parse_md_file_to_react(path, target_dir, file, is_folder_readme=False, is_book_readme=False):
    article_data = {}
    is_readme = is_folder_readme or is_book_readme

    # set article type (article, folder readme, book readme)
    article_data['type'] = 'article'
    if is_folder_readme: article_data['type'] = 'folder'
    if is_book_readme: article_data['type'] = 'book'

    # parse front-matter and content
    post = frontmatter.loads(file)
    metadata = post.metadata
    file = post.content
    
    # extract dates from front-matter
    article_data['coming_soon'] = False
    # parse dates from metadata
    def parse_date(field_name):
        if field_name in metadata:
            try:
                return datetime.strptime(metadata[field_name], '%d/%m/%Y %H:%M').timestamp()
            except (ValueError, TypeError):
                warn(f'invalid {field_name} date in {path}')
        return None
    
    mod_date = parse_date('modified')
    cr_date = parse_date('created')
    
    # at least one must be supplied (except for READMEs)
    if mod_date is None and cr_date is None:
        if not is_readme:
            warn(f'no date (created or modified) found in front-matter of {path}, marking as "coming soon"')
        article_data['mod_timestamp'] = PLACEHOLDER_TIMESTAMP
        article_data['mod_date_time'] = ''
        article_data['cr_timestamp'] = PLACEHOLDER_TIMESTAMP
        article_data['cr_date_time'] = ''
        article_data['coming_soon'] = True
    else:
        # use what we have, defaulting to the other if one is missing
        article_data['mod_timestamp'] = mod_date or cr_date
        article_data['mod_date_time'] = timestamp_to_str(mod_date or cr_date)
        article_data['cr_timestamp'] = cr_date or mod_date
        article_data['cr_date_time'] = timestamp_to_str(cr_date or mod_date)

    # extract article tags from front-matter
    article_data['tags'] = []
    if 'tags' in metadata:
        tags = metadata['tags']
        if isinstance(tags, list):
            for tag in tags:
                if isinstance(tag, dict) and 'name' in tag and 'colour' in tag:
                    article_data['tags'].append(tag)
                elif isinstance(tag, str):
                    # parse "name colour" format
                    split_tag = tag.strip().split()
                    if len(split_tag) == 2:
                        article_data['tags'].append({'name': split_tag[0], 'colour': split_tag[1]})
                    else:
                        warn(f'invalid tag format "{tag}" in {path}')
        else:
            warn(f'tags should be a list in {path}')

    # identify article title
    titles = re.findall(r'```.*?\n# .*?\n```|\n# (.*?)\n', '\n'+file, re.DOTALL) # identify lines starting with '# ' that aren't inside a code block (might be first line, so prepend \n)
    titles = [t for t in titles if t != ''] # for invalid titles, the capture group is empty but still exists, so need to remove them
    if len(titles) == 0:
        article_data['title'] = 'no_title'
        if not is_folder_readme and not is_book_readme:
            warn(f'no article title found in {path}')
    else:
        article_data['title'] = titles[0]
        if len(titles) > 1:
            warn(f'multiple article titles found in {path}, using first one')

    # replace \\ with \\\\, because for some reason later \\ is replaced with \
    file = file.replace('\\\\','\\\\\\\\') 
    # ensure hr tags are preceded+followed by two newlines
    file = re.sub(r'<(/?)hr(/?)>\n?([^\n])', r'<\1hr\2>\n\n\3', file)
    file = re.sub(r'([^\n])\n?<(/?)hr(/?)>', r'\1\n\n<\2hr\3>', file)
    
    # find literal braces, for latex (so that the backslash doesn't die when being parsed)
    file = re.sub('\\\\{', '\\&#123;', file)
    file = re.sub('\\\\}', '\\&#125;', file)
    # escape < and > in LaTeX for JSX (but only inside the math delimiters)
    # match $...$ and $$...$$ patterns  
    def escape_latex_brackets(match):
        full_match = match.group(0)
        # extract the content between the dollar signs
        if full_match.startswith('$$'):
            content = match.group(1)
            # only escape < and > within the LaTeX content itself
            content = content.replace('<', '&lt;').replace('>', '&gt;')
            return f'$${content}$$'
        else:
            content = match.group(1) 
            # only escape < and > within the LaTeX content itself
            content = content.replace('<', '&lt;').replace('>', '&gt;')
            return f'${content}$'
    file = re.sub(r'\$\$(.*?)\$\$', escape_latex_brackets, file, flags=re.DOTALL)
    file = re.sub(r'(?<!\$)\$([^$\n]+?)\$(?!\$)', escape_latex_brackets, file)
    # in copiable code blocks, add copy buttons
    for m in [*re.finditer(r':::COPIABLE\n```(.*?)\n(.*?)\n```', file, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
        lang, code = m[1], m[2]
        copiable = code.replace('\\n', '\\\\n').replace('\n','\\n') # copy button component takes newlines as literals
        copiable = copiable.replace('"', '&quot;')
        copiable = copiable.replace('<', '&lt;').replace('>', '&gt;')  # escape < and > for JSX
        modified = ':::COPIABLE\n\n<CopyButton text="' + copiable + '"/>\n\n```' + lang + '\n' + code + '\n```'
        file = file[:m.span()[0]] + modified + file[m.span()[1]:]
    # set proofs inside theorem blocks to be unquoted and unbolded
    for tag in ['Thm', 'Lemma']:
        for m in [*re.finditer(r'(<'+tag+r'[^>]*?>)(.*?)(</'+tag+r'>)', file, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
            modified = re.sub(r'(<Proof[^>]*?)(>.*?)(</Proof>)', r'\1 unquoted unbolded\2\3', m[2], flags=re.DOTALL)
            file = file[:m.span()[0]] + m[1] + modified + m[3] + file[m.span()[1]:]

    # add <Latex> tags
    file = re.sub(r'\$\$(.*?)\$\$', r'<Latex>\1</Latex>', file, flags=re.DOTALL)
    file = re.sub(r'(?<!\$)\$([^$\n]+?)\$(?!\$)', r'<Latex>$\1$</Latex>', file)

    page = process_markdown(file)
    
    # add scrollshadow wrappers to display latex
    # for blocks inside blockquotes, the background is not white (so add scrollshadow-horizontal-blockquote instead of scrollshadow-horizontal)
    # need block span instead of div so that doesn't trigger hydration error
    for tag in [('Thm',''), ('Lemma',''), ('Proof',''), ('Defn',''), ('Example','quoted'), ('blockquote',''), ('Spoiler', '')]:
        tag,quoted = tag
        for m in [i.span() for i in re.finditer(r'<'+tag+r'[^>]*?'+quoted+r'.*?>.*?</'+tag+r'>', page, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
            target = page[m[0]:m[1]]
            # unquoted blocks aren't grey, so skip
            if 'unquoted' in re.findall(r'<.*?>',target)[0]: continue
            # replace $$
            target = re.sub(r'<Latex>([^$].*?[^$])</Latex>', r'<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\1$$</Latex></span>', target)
            page = page[:m[0]] + target + page[m[1]:]
    page = re.sub(r'<Latex>([^$].*?[^$])</Latex>', r'<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\1$$</Latex></span>', page)

    # find h2 tags, add link anchor to them, and generate table of contents from h2 tags (each h2 tag is given a unique id by the header-ids extension)
    table_of_contents = [[i.group(2),'#'+i.group(1)] for i in re.finditer(r'<h2 id="(.*?)">(.*?)</h2>', page, re.DOTALL)]
    page = add_link_anchors(page, target_dir)

    # move copy buttons generated above (i.e. in code blocks marked __COPIABLE__) into their containers
    page = re.sub(r'<p>:::COPIABLE</p>\n<CopyButton(.*?)/>\n<div className="codehilite"><pre>(.*?)</pre></div>', r'<div className="codehilite relative">\n<div className="absolute top-2 right-2"><CopyButton\1/></div>\n<pre>\2</pre></div>', page, flags=re.DOTALL)
    page = re.sub(r'<p>:::COPIABLE</p>\n<CopyButton(.*?)/>\n<pre>(.*?)</pre>', r'<pre className="relative">\n<div className="absolute top-2 right-2"><CopyButton\1/></div>\n\2</pre>', page, flags=re.DOTALL)

    article_data['content'] = flatten_content(page, article_data['title'])
    article_data['id'] = hash(path.removeprefix(ROOT_DIR))

    path_list = beautify(path).split('/')[1:-1] # path to parent folder
    article_data['dir'] = path_list if not is_readme else path_list[:-1] # readmes should be elevated
    article_data['is_book_member'] = BOOK_INDICATOR in path

    article_name = target_dir.split('/')[-1]
    article_data['name'] = article_name

    page_title = get_sidebar_display_name(path, metadata)

    # add "copy article plaintext" button
    copiable_article_plaintext = None
    plaintext = article_data['content']
    plaintext = eval('"'+ plaintext.replace('"','\\"')+'"')
    plaintext = html.escape(plaintext)
    plaintext = plaintext.replace('"', '&quot;')
    # replace braces for nextjs
    plaintext = plaintext.replace('{', '&#123;').replace('}', '&#125;')
    plaintext = plaintext.replace('\\n', '\\\\n').replace('\n', '\\n') # copy button component takes newlines as literals
    copiable_article_plaintext = plaintext
    
    return page, article_data, page_title, copiable_article_plaintext, table_of_contents

def get_path(article_data):
    return '/'+'/'.join(article_data['dir'])+'/'+article_data['name']

def gen_content(cur_dir, depth, article_list, book_list, stored_articles, dir_tree, displayed_dir_tree, checksum_tree): 
    """
    parse the source files into jsx (depth first search)
    returns a list of all the markdown files and their info (for "recent articles" and search functionality)
    the root of dir_tree is the current node
    the root of displayed_dir_tree is the closest parent folder marked as a book
    """
    cur_path = SOURCE_DIR+cur_dir
    cur_target_dir = beautify(cur_dir)

    # exclude readmes
    if cur_dir.endswith('README.md'): return

    # skip if nothing changed since last compile
    if not COMPILE_ALL_MD and cur_dir.endswith('.md') and bool(checksum_tree) and checksum(cur_path) == checksum_tree['checksum']:
        # load old article data
        old_article = [i for i in stored_articles if get_path(i) == cur_target_dir]
        assert len(old_article) == 1
        article_list.append(old_article[0])
        print('\033[2m'+'skipped '+ cur_dir.rjust(1,'/') +'\033[0m')
        return
    book_parent_path = '/'.join(displayed_dir_tree['path'].split('/')[:-1])
    # If book is at root level, parent should be '/'
    if book_parent_path == '' and displayed_dir_tree['depth'] == 1:
        book_parent_path = '/'

    # markdown file
    if cur_dir.endswith('.md'):
        print(cur_dir)
        with open(cur_path, 'r') as markdown_file:
            file = markdown_file.read()
            page, article_data, page_title, copiable_article_plaintext, table_of_contents = parse_md_file_to_react(cur_dir, cur_target_dir, file)

        ensure_dir_with_correct_case(TARGET_DIR+cur_target_dir)
        page_file_path = TARGET_DIR+cur_target_dir+'/page.js'
        with open(page_file_path, 'w') as output_file:
            react = wrap_in_js(
                TEMPLATE.render(content=page, path_str=cur_target_dir, folder_path_list=article_data['dir'], parent_path='/'+'/'.join(article_data['dir']), book_parent_path=book_parent_path, dir_tree=displayed_dir_tree, mod_date_time=article_data['mod_date_time'], cr_date_time=article_data['cr_date_time'], copiable_article_plaintext=copiable_article_plaintext, table_of_contents=table_of_contents, tags=article_data['tags']),
                title=page_title
            )
            react = inject_autosvg_tags(react)
            output_file.write(react)
            # add article data to article list
            article_list.append(article_data)
        return

    # book or directory
    ensure_dir_with_correct_case(TARGET_DIR+cur_target_dir)
    for child in os.listdir(cur_path):
        child_dir = cur_dir+'/'+child

        child_checksum_tree = {}
        if bool(checksum_tree): # an old tree entry exists
            child_checksum_tree = [i for i in checksum_tree['children'] if i['path'].endswith(child_dir)]
            assert len(child_checksum_tree) <= 1
            if len(child_checksum_tree): child_checksum_tree = child_checksum_tree[0]

        child_dir_tree = {}
        if bool(dir_tree):
            child_dir_tree = [i for i in dir_tree['children'] if i['path'].endswith(beautify(child))]
            assert len(child_dir_tree) <= 1
            if len(child_dir_tree): child_dir_tree = child_dir_tree[0]
        child_displayed_dir_tree = displayed_dir_tree
        if bool(child_dir_tree) and child_dir_tree['is_marked_as_book']: child_displayed_dir_tree = child_dir_tree

        gen_content(child_dir, depth+1, article_list, book_list, stored_articles, child_dir_tree, child_displayed_dir_tree, child_checksum_tree)

    page_file_path = TARGET_DIR+cur_target_dir+'/page.js'
    with open(page_file_path, 'w') as output_file:
        folder_contents = get_folder_contents(cur_dir)

        if cur_dir == '':
            path_list = None
            parent_path = None
            page_title = ''
        else:
            path_list = cur_target_dir.split('/')[1:]
            parent_path = '/'+'/'.join(path_list[:-1])
            # use same formatting logic for folder titles
            page_title = get_sidebar_display_name(cur_dir)

        folder_mainpage = ''
        readme_exists = os.path.exists(cur_path+'/README.md')
        has_content = False  # track if we actually have content to show
        is_book = BOOK_INDICATOR in cur_dir.split('/')[-1]
        tags_to_render = []
        table_of_contents = None
        
        # handle book data creation for all books (with or without README)
        if is_book:
            book_data = {}
            book_data['mod_timestamp'] = max(i['mod_timestamp'] for i in folder_contents) if folder_contents else PLACEHOLDER_TIMESTAMP
            book_data['mod_date_time'] = timestamp_to_str(book_data['mod_timestamp'])
            book_data['tags'] = []
            
            if path_list:
                book_data['path'] = '/' + '/'.join(path_list)
            else:
                book_data['path'] = '/' + cur_target_dir.split('/')[-1]
        
        if readme_exists: # render folder/book readme
            with open(cur_path+'/README.md', 'r') as f:
                readme_file = f.read()
            # parse frontmatter to check if content is empty
            post = frontmatter.loads(readme_file)
            content_without_frontmatter = post.content.strip()
            
            page, article_data, page_title, _, table_of_contents = parse_md_file_to_react(cur_dir+'/README.md', cur_target_dir, readme_file, is_folder_readme=not is_book, is_book_readme=is_book)
            if is_book:
                article_list.append(article_data)
            
            if is_book:
                # update book data with README info
                book_data['name'] = article_data['title']
                book_data['mod_timestamp'] = max(book_data['mod_timestamp'], article_data['mod_timestamp']) # include readme time
                book_data['mod_date_time'] = timestamp_to_str(book_data['mod_timestamp'])
                book_data['tags'] = article_data['tags'] # tags from readme are elevated to folder
                tags_to_render = book_data['tags']
            
            # only add the readme content if it's not empty and it's a book
            if content_without_frontmatter and is_book:
                readme_content = page
                folder_mainpage = readme_content if cur_dir != '' else ''
                has_content = True
            else:
                folder_mainpage = ''
        
        # add book to book list (happens for all books, regardless of README)
        if is_book:
            if not readme_exists:
                # for books without README, use the folder name as title
                book_data['name'] = get_sidebar_display_name(cur_dir)
            book_list.append(book_data)
            book_list.sort(key=lambda x: x['mod_timestamp'], reverse=True)
        elif cur_dir == '': # render homepage
            # article_list and book_list will have been populated, since root page is rendered last
            article_count = sum(1 for i in article_list if i['type'] == 'article')
            word_count = sum(len(i['content'].split()) for i in article_list)
            
            # generate random content paths for CTA button
            random_content_paths = []
            for article in article_list:
                # only include standalone articles, not articles inside books
                if article['type'] == 'article' and not article['is_book_member']:
                    random_content_paths.append(get_path(article))
            for book in book_list:
                random_content_paths.append(book['path'])
            
            folder_mainpage = add_link_anchors(
                HOME_TEMPLATE.render(
                    book_list=book_list, 
                    article_count=article_count, 
                    word_count=word_count, 
                    random_content_paths=random_content_paths,
                ),
                '/', h1=True
            )

        # render folder template content and add pilcrows
        folder_content = FOLDER_TEMPLATE.render(
            contents_by_time=sorted(folder_contents,key=lambda x:x['mod_timestamp'], reverse=True),
            contents_by_name=sorted(folder_contents,key=lambda x:x['name']),
            file_count=sum(item['filecount'] for item in folder_contents),
            should_include_info_section=readme_exists and is_book,
            show_separator=cur_dir == '' or has_content,
        )
        # add guide for new visitors to table of contents
        if readme_exists and is_book:
            if table_of_contents is None:
                table_of_contents = []
            # extract table of contents entries
            folder_toc_entries = [[i.group(2),'#'+i.group(1)] for i in re.finditer(r'<h2 id="(.*?)">(.*?)</h2>', folder_content, re.DOTALL)]
            table_of_contents.extend(folder_toc_entries)
        folder_content = add_link_anchors(folder_content, cur_target_dir)

        react = wrap_in_js(
            TEMPLATE.render(
                content= folder_mainpage + folder_content,
                path_str=cur_target_dir, folder_path_list=path_list, parent_path=parent_path, book_parent_path=book_parent_path, dir_tree=displayed_dir_tree, table_of_contents=table_of_contents, tags=tags_to_render),
            title=page_title
        )
        react = inject_autosvg_tags(react)
        output_file.write(react)

def gen_react_svgs(cur_dir, depth, checksum_tree):
    """parse auto svg files into react components"""
    cur_path = AUTOSVG_SOURCE_DIR+cur_dir

    # skip if nothing changed since last compile
    if not COMPILE_ALL_SVGS and cur_dir.endswith('.svg') and bool(checksum_tree) and checksum(cur_path) == checksum_tree['checksum']:
        print('\033[2m'+'skipped '+ cur_dir.rjust(1,'/') +'\033[0m')
        return

    # svg
    if cur_dir.endswith('.svg'):
        print(cur_dir)
        result = subprocess.run(['npx', '@svgr/cli', cur_path], capture_output=True, text=True)
        if result.returncode != 0:
            print('Error:', result.stderr)
            raise Exception

        component = result.stdout
        # remove width and height (will be passed by user as attribute of AUTOSVG tag)
        component = re.sub(r'(<svg[^>]*?)width={[^>]*?}([^>]*?>)', r'\1 \2', component, re.DOTALL)
        component = re.sub(r'(<svg[^>]*?)height={[^>]*?}([^>]*?>)', r'\1 \2', component, re.DOTALL)
        # remove fontFamily (so that matched to theme)
        component = re.sub(r'^.*?fontFamily:.*$', '', component, flags=re.MULTILINE)
        # replace placeholder colours (see conventions.txt)
        component = component.replace('#000', 'var(--color-Svg-text)')
        component = component.replace('#808080', 'var(--color-Svg-gray)')
        component = component.replace('gray', 'var(--color-Svg-gray)')
        component = component.replace('#fff', 'var(--color-background)')
        component = component.replace('#00f', 'var(--color-Svg-text-highlight)')
        component = component.replace('#0f0', 'var(--color-Svg-line-highlight-1)')
        component = component.replace('#0ff', 'var(--color-Svg-line-highlight-2)')
        component = component.replace('#f00', 'var(--color-Svg-fill-highlight-1)')
        component = component.replace('red', 'var(--color-Svg-fill-highlight-1)')
        component = component.replace('#f0f', 'var(--color-Svg-fill-highlight-2)')
        component = component.replace('#ff0', 'var(--color-Svg-fill-highlight-3)')

        filename = cur_dir.split('/')[-1]
        targetname = 'svg' + filename.removesuffix('.svg').title().replace('-','') + '.js'
        targetpath = AUTOSVG_TARGET_DIR + cur_dir.removesuffix(filename) + targetname
        with open(targetpath, 'w') as f:
            f.write(component)
        return

    # directory
    ensure_dir_with_correct_case(AUTOSVG_TARGET_DIR+cur_dir)
    for child in sorted(os.listdir(cur_path)):
        child_dir = cur_dir+'/'+child

        child_checksum_tree = {}
        if bool(checksum_tree): # an old tree entry exists
            child_checksum_tree = [i for i in checksum_tree['children'] if i['path'].endswith(child_dir)]
            assert len(child_checksum_tree) <= 1
            if len(child_checksum_tree): child_checksum_tree = child_checksum_tree[0]

        gen_react_svgs(child_dir, depth+1, child_checksum_tree)

def inject_autosvg_tags(page):
    """replace AUTOSVG tags with react components, and add imports"""
    imports = []
    for m in [i.span() for i in re.finditer(r'<AUTOSVG[^>]*?(>.*?</AUTOSVG>|/>)', page, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
        target = page[m[0]:m[1]]
        src = re.search(r'src=((\'|").*?(\'|"))', target, re.DOTALL)[0].removeprefix('src=')[1:-1] # [1:-1] to remove surrounding quotes
        width = re.search(r'width=((\'|").*?(\'|"))', target, re.DOTALL)[0].removeprefix('width=')[1:-1] # [1:-1] to remove surrounding quotes
        height = re.search(r'height=((\'|").*?(\'|"))', target, re.DOTALL)[0].removeprefix('height=')[1:-1] # [1:-1] to remove surrounding quotes
        filename = src.split('/')[-1]
        location = src.removesuffix(filename)
        titlecase = filename.removesuffix('.svg').title().replace('-','')
        reactComponentName = 'Svg' + titlecase
        target = '<'+reactComponentName+f' width={{ {width} }} height={{ {height} }}/>'
        page = page[:m[0]] + target + page[m[1]:]
        imports.append(f"import {reactComponentName} from '{AUTOSVG_IMPORT_STRING}/{location}{'svg'+titlecase}'\n")
    return ''.join(sorted(list(set(imports)))) + page

def gen_checksum_tree(path):
    """generate checksums of all the files, so that unchanged content doesn't have to be regenerated"""
    d = {}
    d['is_dir'] = os.path.isdir(path)
    d['path'] = path.removeprefix(ROOT_DIR)
    d['checksum'] = checksum(path)
    if os.path.isdir(path):
        d['children'] = [gen_checksum_tree(path+'/'+child) for child in os.listdir(path)]
    return d

def handle_warnings():
    for i in warnings:
        print('\033[1;33mWarning: ' + i + '\033[0m')

    old_warnings = set()
    if not COMPILE_ALL_MD and os.path.exists(WARNINGS_FILE):
        with open(WARNINGS_FILE, 'r') as f:
            for line in f.readlines():
                if line.strip() == '': continue
                old_warnings.add(line.strip())

    old_warnings -= warnings

    if old_warnings:
        print('\033[1;33mOld warnings exist\033[0m following on the lines below. They can be manually removed from \033[1;34m' + WARNINGS_FILE.removeprefix(ROOT_DIR) + '\033[0m')
        for i in old_warnings:
            print('\033[93m' + i + '\033[0m')

    warnings.update(old_warnings)
    with open(WARNINGS_FILE, 'w') as f:
        f.write('\n'.join(warnings))