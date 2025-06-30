import re
from datetime import datetime
import hashlib
import os
import html
import subprocess
from markdown2 import markdown
from constants import *

warnings = set()
math_tags = ['Thm', 'Lemma', 'Proof', 'Defn', 'Example']

def warn(message):
    warnings.add(message)

def wrap_in_js(jinja, isFolder, isReadmeOrHome, isHome, title=''):
    componentName = re.sub(r'(\d+| )', '', title)
    # replace and with &
    title = ' '.join('&' if i.lower()=='and' else i for i in title.split())
    titleMetadata = 'export const metadata = {title:"'+title+'"}' if title else ''
    imports = ''
    if isFolder: imports += f'''
import {{ FaBook }} from 'react-icons/fa'
import {{ GrArticle }} from 'react-icons/gr'
import {{ AiFillFolder }} from 'react-icons/ai'
import Folder from '@/components/folder'
'''
    if isReadmeOrHome or not isFolder: imports += f'''
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import {{ copyToClipboard, CopyButton }} from '@/components/copyButton'
import 'react-toastify/dist/ReactToastify.css'
import Pilcrow from '@/components/pilcrow'
import {{ {', '.join(math_tags)} }} from '@/components/math'
'''
    return f'''
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'
import Badge from '@/components/badge'
import {{ ToastContainer }} from 'react-toastify'
import {{ FaChevronRight, FaSearch }} from 'react-icons/fa'
import {{ RiArrowGoBackFill }} from 'react-icons/ri'
import {{ CiLogout }} from 'react-icons/ci'
{imports}

{titleMetadata}

export default function {componentName} () {{
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

# find h2 tags with an id, add link anchor to them (each h2 in a markdown file is given a unique id by the header-ids extension)
# this is an external function so that it can also be applied to the homepage (but the header ids must be manually put there)
def add_link_anchors(page, cur_target_dir): 
    return re.sub(r'<h2 id="(.*?)">(.*?)</h2>', r'<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="\1" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">\2</h2><Pilcrow href="#\1" text="https://tripos.guru'+cur_target_dir+r'#\1"/></div>', page, flags=re.DOTALL)

def timestamp_to_str(timestamp):
    return '' if timestamp==PLACEHOLDER_TIMESTAMP else datetime.fromtimestamp(timestamp).strftime('%d %b %Y')

# turn path found in content into path to be used on the website
def beautify(path):
    return path.replace(COURSE_INDICATOR, '').removesuffix('.md')

# remove illegal chars
def sanitize(path):
    return re.sub(r'[^a-zA-Z0-9-/]', '', path)

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
    
# turn html article content into plaintext
def flatten_content(content, title):
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
                first = f.readline().strip()
                timestamp = datetime.strptime(first, '%d/%m/%Y %H:%M').timestamp()
            except ValueError: pass
        return timestamp, 1
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
        elif COURSE_INDICATOR in child:
            type = 'course'
        item['type'] = type
        child_dir = cur_dir+'/'+child
        item['name'] = sanitize(beautify(child))
        item['path'] = sanitize(beautify(cur_dir + '/' + item['name']))
        item['mod_timestamp'], item['filecount'] = get_updation_timestamp_and_filecount(child_dir)
        item['mod_date_time'] = timestamp_to_str(item['mod_timestamp'])
        folder_contents.append(item)
    return folder_contents

# construct a representation of the directory tree that will be generated
# so that it can be passed to the template to be displayed as a sidebar
def construct_tree(cur_dir, depth):
    cur_path = SOURCE_DIR+cur_dir
    name = os.path.basename(cur_path)
    d = {}
    d['depth'] = depth
    d['is_marked_as_course'] = COURSE_INDICATOR in name
    d['is_dir'] = os.path.isdir(cur_path)
    d['path'] = sanitize(beautify(cur_dir))
    if d['is_dir']:
        children = []
        for child in sorted(os.listdir(cur_path)): # sort alphabetically
            if child.endswith('README.md'): continue # exclude readmes
            children.append(construct_tree(cur_dir+'/'+child, depth+1))
        d['children'] = children
    else:
        assert COURSE_INDICATOR not in name
    if depth == 0:
        d['name'] = 'root'
        return d
    name = beautify(name)
    if name != sanitize(name):
        warn(f'{d["path"]} name contains illegal characters, filtering them out...')
    d['name'] = sanitize(name)
    return d

def parse_md_file_to_react(path, target_dir, file, is_folder_readme=False, is_course_readme=False):
    article_data = {}
    is_readme = is_folder_readme or is_course_readme

    # set article type (article, folder readme, course readme)
    article_data['type'] = 'article'
    if is_folder_readme: article_data['type'] = 'folder'
    if is_course_readme: article_data['type'] = 'course'

    # extract article date from first line
    article_data['coming_soon'] = False
    if not is_readme: # don't extract date from readmes
        try:
            first, second, rest = file.split('\n', 2)
            if second.startswith('created '):
                mod_date = datetime.strptime(first, '%d/%m/%Y %H:%M').timestamp()
                article_data['mod_timestamp'] = mod_date
                article_data['mod_date_time'] = timestamp_to_str(mod_date)
                cr_date = datetime.strptime(second.split(' ', 1)[1], '%d/%m/%Y %H:%M').timestamp()
                article_data['cr_timestamp'] = cr_date
                article_data['cr_date_time'] = timestamp_to_str(cr_date)
                file = rest
            else: # no creation date supplied
                mod_date = datetime.strptime(first, '%d/%m/%Y %H:%M').timestamp()
                article_data['mod_timestamp'] = mod_date
                article_data['mod_date_time'] = timestamp_to_str(mod_date)
                article_data['cr_timestamp'] = mod_date
                article_data['cr_date_time'] = timestamp_to_str(mod_date)
                file = second + '\n' + rest
                
        except ValueError:
            warn(f'no date found on first line of {path}, marking as "coming soon"')
            article_data['mod_timestamp'] = PLACEHOLDER_TIMESTAMP
            article_data['mod_date_time'] = ''
            article_data['cr_timestamp'] = PLACEHOLDER_TIMESTAMP
            article_data['cr_date_time'] = ''
            article_data['coming_soon'] = True
    else:
        article_data['mod_timestamp'] = PLACEHOLDER_TIMESTAMP
        article_data['mod_date_time'] = ''
        article_data['cr_timestamp'] = PLACEHOLDER_TIMESTAMP
        article_data['cr_date_time'] = ''

    # extract article tags, if they exist
    first, rest = file.split('\n', 1)
    article_data['tags'] = []
    if first.startswith('[TAGS]'):
        for tag in first.removeprefix('[TAGS]').split(','):
            split_tag = tag.strip().split()
            if len(split_tag) == 2:
                article_data['tags'] .append({'name': split_tag[0], 'colour': split_tag[1]})
            else:
                warn(f'something wrong with the tags specified in {path}, skipping tag extraction')
        file = rest

    # identify article title
    titles = re.findall(r'```.*?\n# .*?\n```|\n# (.*?)\n', '\n'+file, re.DOTALL) # identify lines starting with '# ' that aren't inside a code block (might be first line, so prepend \n)
    titles = [t for t in titles if t != ''] # for invalid titles, the capture group is empty but still exists, so need to remove them
    if len(titles) == 0:
        article_data['title'] = 'no_title'
        warn(f'no article title found in {path}')
    else:
        article_data['title'] = titles[0]
        if len(titles) > 1:
            warn(f'multiple article titles found in {path}, using first one')

    # replace \\ with \\\\, because for some reason later \\ is replaced with \ (probably by markdown2)
    file = file.replace('\\\\','\\\\\\\\') 
    # ensure displayed latex is preceded+followed by two newlines (only for lines that start with $$, so we can still have e.g. "> $$asdf$$"), so that markdown2 will wrap it in <p>, so that it gets registered as not the first child in theorems/props etc.
    file = re.sub(r'(\n\$\$.*?\$\$)', r'\n\n\1\n\n', file, flags=re.DOTALL)
    # ensure that <Spoiler> and </Spoiler> are preceded+followed by two newlines, so that markdown2 will wrap them in p tags (i.e. there won't be junk between spoiler tag and p tag)
    file = re.sub(r'<(/?)Spoiler(/?)>\n?([^\n])', r'<\1Spoiler\2>\n\n\3', file)
    file = re.sub(r'([^\n])\n?<(/?)Spoiler(/?)>', r'\1\n\n<\2Spoiler\3>', file)
    # do the same for <hr> and </hr>
    file = re.sub(r'<(/?)hr(/?)>\n?([^\n])', r'<\1hr\2>\n\n\3', file)
    file = re.sub(r'([^\n])\n?<(/?)hr(/?)>', r'\1\n\n<\2hr\3>', file)
    # do the same for math tags
    for tag in math_tags:
        file = re.sub(r'<(/?)' + tag + r'([^>]*?)>\n?([^\n])', r'<\1' + tag + r'\2>\n\n\3', file)
        file = re.sub(r'([^\n])\n?<(/?)' + tag + r'([^>]*?)>', r'\1\n\n<\2' + tag + r'\3>', file)
    # find literal braces, for latex (so that the backslash doesn't die when being parsed)
    file = re.sub('\\\\{', '\\&#123;', file)
    file = re.sub('\\\\}', '\\&#125;', file)
    # in copiable code blocks, add copy buttons
    for m in [*re.finditer(r'__COPIABLE__\n```(.*?)\n(.*?)\n```', file, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
        lang, code = m[1], m[2]
        copiable = code.replace('\\n', '\\\\n').replace('\n','\\n') # copy button component takes newlines as literals
        copiable = copiable.replace('"', '&quot;')
        modified = '__COPIABLE__\n\n<CopyButton text="' + copiable + '"/>\n\n```' + lang + '\n' + code + '\n```'
        file = file[:m.span()[0]] + modified + file[m.span()[1]:]
    # set proofs inside theorem blocks to be unquoted and unbolded
    for tag in ['Thm', 'Lemma']:
        for m in [*re.finditer(r'(<'+tag+r'[^>]*?>)(.*?)(</'+tag+r'>)', file, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
            modified = re.sub(r'(<Proof[^>]*?)(>.*?)(</Proof>)', r'\1 unquoted unbolded\2\3', m[2], flags=re.DOTALL)
            file = file[:m.span()[0]] + m[1] + modified + m[3] + file[m.span()[1]:]

    page = markdown(file, extras=['fenced-code-blocks', 'codehilite', 'code-friendly', 'header-ids', 'footnotes', 'wiki-tables'])

    # replace curly braces with html character codes, so that react ignores them
    page = re.sub('{', '&#123;', page)
    page = re.sub('}', '&#125;', page)

    # pre doesn't work in nextjs, so find all whitespace inside pre tags and replace with character codes
    for m in [i.span() for i in re.finditer(r'(?<=<pre>)(.*?)(?=</pre>)', page, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
        target = page[m[0]:m[1]]
        target = re.sub('span ', 'span#', target) # temp
        target = re.sub(' ', '&nbsp;', target) # replace whitespace
        target = re.sub('span#', 'span ', target)
        target = re.sub('\n', '<br/>', target) # replace newlines
        page = page[:m[0]] + target + page[m[1]:]

    # add <Latex> tags
    # for blocks inside blockquotes, the background is not white (so add scrollshadow-horizontal-blockquote instead of scrollshadow-horizontal)
    page = re.sub(r'<p>\$\$(.*?)\$\$</p>', r'<Latex>\1</Latex>', page) # remove <p> tags that markdown added
    page = re.sub(r'\$\$(.*?)\$\$', r'<Latex>\1</Latex>', page) # temporarily remove double dollar signs, so that can deal with single dollar signs first
    page = re.sub(r'\$(.+?)\$', r'<Latex>$\1$</Latex>', page)
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

    # <p> tags will have been placed around the following tags (on purpose), remove them
    for i in ['CopyButton', 'Spoiler', 'hr'] + math_tags:
        page = re.sub(r'<p>(</?' + i + r'.*?>)</p>', r'\1', page)

    # find h2 tags, add link anchor to them, and generate table of contents from h2 tags (each h2 tag is given a unique id by the header-ids extension)
    table_of_contents = [[i.group(2),'#'+i.group(1)] for i in re.finditer(r'<h2 id="(.*?)">(.*?)</h2>', page, re.DOTALL)]
    page = add_link_anchors(page, target_dir)

    # markdown added class attributes, replace with "className" for react
    page = page.replace('class=','className=')

    # move copy buttons generated above (i.e. in code blocks marked __COPIABLE__) into their containers
    page = re.sub(r'<p>__COPIABLE__</p>\n\n<CopyButton(.*?)/>\n\n<div className="codehilite">\n<pre>(.*?)</pre>\n</div>', r'<div className="codehilite relative">\n<div className="absolute top-2 right-2"><CopyButton\1/></div>\n<pre>\2</pre>\n</div>', page)
    page = re.sub(r'<p>__COPIABLE__</p>\n\n<CopyButton(.*?)/>\n\n<pre>(.*?)</pre>', r'<pre className="relative">\n<div className="absolute top-2 right-2"><CopyButton\1/></div>\n\2</pre>', page)

    article_data['content'] = flatten_content(page, article_data['title'])
    article_data['id'] = hash(path.removeprefix(ROOT_DIR))

    path_list = sanitize(beautify(path)).split('/')[1:-1] # path to parent folder
    article_data['dir'] = path_list if not is_readme else path_list[:-1] # readmes should be elevated

    article_name = target_dir.split('/')[-1]
    article_data['name'] = article_name

    page_title = article_name.title().replace('-',' ')

    copiable_article_plaintext = None
    if COURSE_INDICATOR not in path: # don't add "copy article plaintext" button to course content
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

# parse the source files into jsx (depth first search)
# returns a list of all the markdown files and their info (for "recent articles" and search functionality)
# the root of dir_tree is the current node
# the root of displayed_dir_tree is the closest parent folder marked as a course
def gen_content(cur_dir, depth, article_list, course_list, stored_articles, dir_tree, displayed_dir_tree, checksum_tree): 
    cur_path = SOURCE_DIR+cur_dir
    cur_target_dir = sanitize(beautify(cur_dir))

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
    course_parent_path = '/'.join(displayed_dir_tree['path'].split('/')[:-1])

    # markdown file
    if cur_dir.endswith('.md'):
        print(cur_dir)
        with open(cur_path, 'r') as markdown_file:
            file = markdown_file.read()
            page, article_data, page_title, copiable_article_plaintext, table_of_contents = parse_md_file_to_react(cur_dir, cur_target_dir, file)

        if not os.path.exists(TARGET_DIR+cur_target_dir):
            os.makedirs(TARGET_DIR+cur_target_dir)
        with open(TARGET_DIR+cur_target_dir+'/page.js', 'w') as output_file:
            react = wrap_in_js(
                TEMPLATE.render(content=page, path_str=cur_target_dir, folder_path_list=article_data['dir'], parent_path='/'+'/'.join(article_data['dir']), course_parent_path=course_parent_path, dir_tree=displayed_dir_tree, mod_date_time=article_data['mod_date_time'], cr_date_time=article_data['cr_date_time'], copiable_article_plaintext=copiable_article_plaintext, table_of_contents=table_of_contents, tags=article_data['tags']),
                False, False, False, title=page_title
            )
            react = inject_autosvg_tags(react)
            output_file.write(react)
            #add article data to article list
            article_list.append(article_data)
        return

    # course or directory
    if not os.path.exists(TARGET_DIR+cur_target_dir):
        os.makedirs(TARGET_DIR+cur_target_dir)
    for child in os.listdir(cur_path):
        child_dir = cur_dir+'/'+child

        child_checksum_tree = {}
        if bool(checksum_tree): # an old tree entry exists
            child_checksum_tree = [i for i in checksum_tree['children'] if i['path'].endswith(child_dir)]
            assert len(child_checksum_tree) <= 1
            if len(child_checksum_tree): child_checksum_tree = child_checksum_tree[0]

        child_dir_tree = {}
        if bool(dir_tree):
            child_dir_tree = [i for i in dir_tree['children'] if i['path'].endswith(sanitize(beautify(child)))]
            assert len(child_dir_tree) <= 1
            if len(child_dir_tree): child_dir_tree = child_dir_tree[0]
        child_displayed_dir_tree = displayed_dir_tree
        if bool(child_dir_tree) and child_dir_tree['is_marked_as_course']: child_displayed_dir_tree = child_dir_tree

        gen_content(child_dir, depth+1, article_list, course_list, stored_articles, child_dir_tree, child_displayed_dir_tree, child_checksum_tree)

    with open(TARGET_DIR+cur_target_dir+'/page.js', 'w') as output_file:
        folder_contents = get_folder_contents(cur_dir)

        if cur_dir == '':
            path_list = None
            parent_path = None
            page_title = ''
        else:
            path_list = cur_target_dir.split('/')[1:]
            parent_path = '/'+'/'.join(path_list[:-1])
            page_title = []
            for word in path_list[-1].split('-'):
                if not word.isdigit(): page_title.append(word[0].upper() + word[1:])
            page_title = ' '.join(page_title)

        folder_mainpage = ''
        separator = '<br/><div className="border-t-[1px] border-border-strong pb-2"></div>'
        readme_exists = os.path.exists(cur_path+'/README.md')
        is_course = COURSE_INDICATOR in cur_dir.split('/')[-1]
        tags_to_render = []
        table_of_contents = None
        if readme_exists: # render folder/course readme
            with open(cur_path+'/README.md', 'r') as f:
                readme_file = f.read()
            page, article_data, page_title, _, table_of_contents = parse_md_file_to_react(cur_dir+'/README.md', cur_target_dir, readme_file, is_folder_readme=not is_course, is_course_readme=is_course)
            article_list.append(article_data)
            if is_course:
                course_data = {}
                course_data['name'] = article_data['title']
                course_data['path'] = '/' + '/'.join(article_data['dir']) + '/' + article_data['name']
                course_data['mod_timestamp'] = max(i['mod_timestamp'] for i in folder_contents)
                course_data['mod_date_time'] = timestamp_to_str(course_data['mod_timestamp'])
                course_data['tags'] = article_data['tags'] # tags from readme are elevated to folder
                tags_to_render = course_data['tags']
                course_list.append(course_data)
            folder_mainpage = page + separator
        elif cur_dir == '': # render homepage
            # article_list and course_list will have been populated, since root page is rendered last
            with open(CHANGELOG_FILE, 'r') as f:
                changelog = markdown(f.read())
            article_count = sum(1 for i in article_list if i['type'] == 'article')
            word_count = sum(len(i['content'].split()) for i in article_list)
            folder_mainpage = add_link_anchors(HOME_TEMPLATE.render(course_list=course_list, changelog=changelog, article_count=article_count, word_count=word_count), '/') + separator

        react = wrap_in_js(
            TEMPLATE.render(
                content=folder_mainpage+FOLDER_TEMPLATE.render(
                    contents_by_time=sorted(folder_contents,key=lambda x:x['mod_timestamp'], reverse=True),
                    contents_by_name=sorted(folder_contents,key=lambda x:x['name']),
                    file_count=sum(item['filecount'] for item in folder_contents),
                ),
                path_str=cur_target_dir, folder_path_list=path_list, parent_path=parent_path, course_parent_path=course_parent_path, dir_tree=displayed_dir_tree, table_of_contents=table_of_contents, tags=tags_to_render),
            True, cur_dir=='' or readme_exists, cur_dir=='', title=page_title
        )
        react = inject_autosvg_tags(react)
        output_file.write(react)

# parse auto svg files into react components
def gen_react_svgs(cur_dir, depth, checksum_tree):
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
    if not os.path.exists(AUTOSVG_TARGET_DIR+cur_dir):
        os.makedirs(AUTOSVG_TARGET_DIR+cur_dir)
    for child in sorted(os.listdir(cur_path)):
        child_dir = cur_dir+'/'+child

        child_checksum_tree = {}
        if bool(checksum_tree): # an old tree entry exists
            child_checksum_tree = [i for i in checksum_tree['children'] if i['path'].endswith(child_dir)]
            assert len(child_checksum_tree) <= 1
            if len(child_checksum_tree): child_checksum_tree = child_checksum_tree[0]

        gen_react_svgs(child_dir, depth+1, child_checksum_tree)

# replace AUTOSVG tags with react components, and add imports
def inject_autosvg_tags(page):
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

# generate checksums of all the files, so that unchanged content doesn't have to be regenerated
def gen_checksum_tree(path):
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