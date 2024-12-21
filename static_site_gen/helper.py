import re
from datetime import datetime
import hashlib
import os
import shutil
import html
from markdown2 import markdown
from constants import *

articles = []
warnings = set()
math_tags = ['Thm', 'Lemma', 'Prop', 'Proof', 'Defn', 'Example']

def warn(message):
    warnings.add(message)

def wrap_in_js(jinja, name, isFolder, isReadmeOrHome):
    imports = ''
    if isFolder: imports += f'''
import {{ FaBook }} from 'react-icons/fa'
import {{ MdArticle }} from 'react-icons/md'
import Folder from '@/components/folder'
'''
    if isReadmeOrHome or not isFolder: imports += f'''
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import {{ copyToClipboard, CopyButton }} from '@/components/copyButton'
import {{ ToastContainer }} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {{ {', '.join(math_tags)} }} from '@/components/math'
'''

    toastContainer = f'''
                        <ToastContainer
                            position='top-right'
                            autoClose={{5000}}
                            hideProgressBar={{false}}
                            newestOnTop={{false}}
                            closeOnClick
                            rtl={{false}}
                            pauseOnFocusLoss={{false}}
                            pauseOnHover={{false}}
                            theme='dark'
                        />
    ''' if isReadmeOrHome or not isFolder else ''

    return f'''
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'

import {{ FaChevronRight, FaSearch }} from 'react-icons/fa'
import {{ RiArrowGoBackFill }} from 'react-icons/ri'
{imports}

export default function {name.replace(' ', '')} () {{
    return (
        <Layout>
            <Head>
                <title>{name} | Daniel C</title>
            </Head>
                <>
                    {toastContainer}
                    {jinja}
                </>
        </Layout>
    )
}}
    '''

# find h2 tags with an id, add link anchor to them (each h2 in a markdown file is given a unique id by the header-ids extension)
# this is an external function so that it can also be applied to the homepage (but the header ids must be manually put there)
def add_link_anchors(page, cur_target_dir): 
    return re.sub(r'<h2 id="(.*?)">(.*?)</h2>', r'<h2 id="\1" className="group flex">\2&nbsp;<Link href="#\1" onClick={() => copyToClipboard("https://notes.danielc.rocks'+cur_target_dir+r'#\1", true)} className="hidden group-hover:block text-primary">¶</Link></h2>', page, flags=re.DOTALL)

def timestamp_to_str(timestamp):
    return '' if timestamp==PLACEHOLDER_TIMESTAMP else datetime.fromtimestamp(timestamp).strftime('%d %b %Y')

# turn path found in content into path to be used on the website
def beautify(path):
    return path.replace(COURSE_INDICATOR, '').removesuffix('.md')

# remove illegal chars
def sanitize(path):
    return re.sub(r'[^a-zA-Z0-9-/]', '', path)

def checksum(path):
    if not os.path.isdir(path):
        with open(path, 'r') as f:
            return hashlib.md5(bytes(f.read(),'u8')).hexdigest()
    concat = ''.join(checksum(path+'/'+child) for child in os.listdir(path))
    return hashlib.md5(bytes(concat,'u8')).hexdigest()
    
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
    # delete first occurrence of title (guaranteed to be title itself, since title extraction extracted the first title)
    content = content.replace(title, '', 1)
    # format as json string
    content = content.replace('\\','\\\\').replace('\n',' ').replace('\'', '\\\'').strip()
    content = re.sub(r' +', ' ', content)
    return content

def get_timestamp_and_filecount(cur_dir):
    timestamp = PLACEHOLDER_TIMESTAMP
    if cur_dir.endswith('.md'):
        try:
            with open(SOURCE_DIR+cur_dir, 'r') as f:
                timestamp = datetime.strptime(f.readline().strip(), '%d/%m/%Y %H:%M').timestamp()
        except ValueError: pass
        return timestamp, 1
    filecount = 0
    for child in os.listdir(SOURCE_DIR+cur_dir):
        if child.endswith('__IMAGES__'): continue # exclude the special images directory
        child_timestamp, child_filecount = get_timestamp_and_filecount(cur_dir+'/'+child)
        timestamp = max(timestamp, child_timestamp)
        filecount += child_filecount
    return timestamp, filecount

def get_folder_contents(cur_dir):
    folder_contents = []
    for child in os.listdir(SOURCE_DIR+cur_dir):
        if child.endswith('__IMAGES__'): continue # exclude the special images directory
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
        item['timestamp'], item['filecount'] = get_timestamp_and_filecount(child_dir)
        item['date_time'] = timestamp_to_str(item['timestamp'])
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
            if child.endswith('__IMAGES__'): continue # exclude the special images directory
            if child.endswith('README.md'): continue # exclude readmes
            children.append(construct_tree(cur_dir+'/'+child, depth+1))
        d['children'] = children
    else:
        assert COURSE_INDICATOR not in name
    if depth == 0:
        d['name'] = "root"
        return d
    name = beautify(name)
    if name != sanitize(name):
        warn(f'{d["path"]} name contains illegal characters, filtering them out...')
    d['name'] = sanitize(name)
    return d

def parse_md_file_to_react(path, target_dir, file, extract_date=True):
    article_data = {}

    # extract article date from first line
    article_data['coming_soon'] = False
    if extract_date:
        try:
            date, truncated_file = file.split('\n', 1)
            date = datetime.strptime(date, '%d/%m/%Y %H:%M')
            article_data['timestamp'] = date.timestamp()
            article_data['date_time'] = timestamp_to_str(date.timestamp())
            file = truncated_file
        except ValueError:
            warn(f'no date found on first line of {path}, marking as "coming soon"')
            article_data['timestamp'] = PLACEHOLDER_TIMESTAMP
            article_data['date_time'] = ''
            article_data['coming_soon'] = True
    else:
        article_data['timestamp'] = PLACEHOLDER_TIMESTAMP
        article_data['date_time'] = ''

    # extract article title from markdown
    titles = re.findall(r'```.*?\n# .*?\n```|\n# (.*?)\n', '\n'+file, re.DOTALL) # extract lines starting with '# ' that aren't inside a code block (might be first line, so prepend \n)
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
    # replace images directory inside image tags, to be the public one
    file = re.sub('CONTENT_ROOT/__IMAGES__', 'images', file)
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
    for tag in ['Thm', 'Lemma', 'Prop']:
        for m in [*re.finditer(r'(<'+tag+r'[^>]*?>)(.*?)(</'+tag+r'>)', file, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
            modified = re.sub(r'(<Proof[^>]*?)(>.*?)(</Proof>)', r'\1 unquoted unbolded\2\3', m[2], flags=re.DOTALL)
            file = file[:m.span()[0]] + m[1] + modified + m[3] + file[m.span()[1]:]

    page = markdown(file, extras=['fenced-code-blocks', 'code-friendly', 'header-ids', 'footnotes', 'wiki-tables'])

    # replace curly braces with html character codes, so that react ignores them
    page = re.sub('{', '&#123;', page)
    page = re.sub('}', '&#125;', page)

    # pre doesn't work in nextjs, so find all whitespace inside pre tags and replace with character codes
    for m in [i.span() for i in re.finditer(r'(?<=<pre>)(.*?)(?=</pre>)', page, re.DOTALL)][::-1]: # reverse so can edit the string without indices changing
        target = page[m[0]:m[1]]
        target = re.sub('    ', '<span>&nbsp;</span>'*4, target) # replace indents
        target = re.sub('\n', '<br/>', target) # replace newlines
        page = page[:m[0]] + target + page[m[1]:]

    # add <Latex> tags
    # if not inline, make overflow hidden (assume inline latex is short enough to not overflow)
    page = re.sub(r'<p>\$\$(.*?)\$\$</p>', r'<Latex>\1</Latex>', page) # remove <p> tags that markdown added
    page = re.sub(r'\$\$(.*?)\$\$', r'<Latex>\1</Latex>', page)
    page = re.sub(r'\$(.+?)\$', r'<Latex>$\1$</Latex>', page)
    page = re.sub(r'<Latex>([^$].*?[^$])</Latex>', r'<span className="block overflow-auto latex-display-wrapper"><Latex>$$\1$$</Latex></span>', page) # need block span instead of div so that doesn't trigger hydration error

    # <p> tags will have been placed around the following tags (on purpose), remove them
    for i in ['CopyButton', 'Spoiler', 'hr'] + math_tags:
        page = re.sub(r'<p>(</?' + i + r'[^>]*?>)</p>', r'\1', page)

    # find h2 tags, add link anchor to them, and generate table of contents from h2 tags (each h2 tag is given a unique id by the header-ids extension)
    table_of_contents = [[i.group(2),'#'+i.group(1)] for i in re.finditer(r'<h2 id="(.*?)">(.*?)</h2>', page, re.DOTALL)]
    page = add_link_anchors(page, target_dir)

    # markdown added class attributes, replace with "className" for react
    page = page.replace('class=','className=')

    # move copy buttons generated above (i.e. in code blocks marked __COPIABLE__) into their containers
    page = re.sub(r'<p>__COPIABLE__</p>\n\n<CopyButton(.*?)/>\n\n<div className="codehilite">\n<pre>(.*?)</pre>\n</div>', r'<div className="codehilite relative">\n<div className="absolute top-2 right-2"><CopyButton\1/></div>\n<pre>\2</pre>\n</div>', page)
    page = re.sub(r'<p>__COPIABLE__</p>\n\n<CopyButton(.*?)/>\n\n<pre>(.*?)</pre>', r'<pre className="relative">\n<div className="absolute top-2 right-2"><CopyButton\1/></div>\n\2</pre>', page)

    article_data['content'] = flatten_content(page, article_data['title'])
    article_data['id'] = checksum(SOURCE_DIR+path)

    path_list = sanitize(beautify(path)).split('/')[1:-1] # path to parent folder
    article_data['dir'] = path_list

    article_name = target_dir.split('/')[-1]
    article_data['name'] = article_name

    page_title = []
    for word in article_name.split('-'):
        if not word.isdigit(): page_title.append(word[0].upper() + word[1:])
    page_title = ' '.join(page_title)

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

# parse the source files into jsx
# returns a list of all the markdown files and their info (for "recent articles" and search functionality)
# the root of dir_tree is the current node
# the root of displayed_dir_tree is the closest parent folder marked as a course
def gen_content(cur_dir, depth, article_list, dir_tree, displayed_dir_tree, checksum_tree): 
    cur_path = SOURCE_DIR+cur_dir
    cur_target_dir = sanitize(beautify(cur_dir))

    # skip if nothing changed since last compile
    if not COMPILE_EVERYTHING and bool(checksum_tree) and checksum(cur_path) == checksum_tree['checksum']:
        print('\033[2m'+'skipped '+ cur_dir.rjust(1,'/') +'\033[0m')
        return
    print(cur_dir)
    course_parent_path = '/'.join(displayed_dir_tree['path'].split('/')[:-1])

    # exclude readmes
    if cur_dir.endswith('README.md'): return

    # the images directory
    if cur_dir.endswith('__IMAGES__'): 
        # move contents into public images dir
        if os.path.exists(IMAGES_DIR):
            shutil.rmtree(IMAGES_DIR)
        shutil.copytree(SOURCE_DIR+cur_dir, IMAGES_DIR)
        return

    # markdown file
    elif cur_dir.endswith('.md'):
        with open(cur_path, 'r') as markdown_file:
            file = markdown_file.read()
            page, article_data, page_title, copiable_article_plaintext, table_of_contents = parse_md_file_to_react(cur_dir, cur_target_dir, file)

        with open(TARGET_DIR+cur_target_dir+'.js', 'w') as output_file:
            react = wrap_in_js(
                TEMPLATE.render(content=page, path_str=cur_target_dir, folder_path_list=article_data['dir'], parent_path='/'+'/'.join(article_data['dir']), course_parent_path=course_parent_path, dir_tree=displayed_dir_tree, date_time=article_data['date_time'], copiable_article_plaintext=copiable_article_plaintext, table_of_contents=table_of_contents),
                page_title, False, False
            )
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

        gen_content(child_dir, depth+1, article_list, child_dir_tree, child_displayed_dir_tree, child_checksum_tree)

    with open(TARGET_DIR+cur_target_dir+'/index.js', 'w') as output_file:
        folder_contents = get_folder_contents(cur_dir)

        if cur_dir == '':
            path_list = None
            parent_path = None
            page_title = 'Course Notes'
        else:
            path_list = cur_target_dir.split('/')[1:]
            parent_path = '/'+'/'.join(path_list[:-1])
            page_title = []
            for word in path_list[-1].split('-'):
                if not word.isdigit(): page_title.append(word[0].upper() + word[1:])
            page_title = ' '.join(page_title)

        folder_mainpage = ''
        separator = '<br/><div className="border-t-[1px] border-elevated pb-2"></div>'
        readme_exists = os.path.exists(cur_path+'/README.md')
        if readme_exists: # render folder readme
            with open(cur_path+'/README.md', 'r') as f:
                readme_file = f.read()
            page, article_data, page_title, *_ = parse_md_file_to_react(cur_dir+'/README.md', cur_target_dir, readme_file, extract_date=False)
            article_list.append(article_data)
            folder_mainpage = page + separator
        elif cur_dir == '': # render homepage
            # articles will have been populated, since root page is rendered last
            recent_articles = list(filter(lambda x: x['timestamp']!=PLACEHOLDER_TIMESTAMP or x['coming_soon'], articles)) # remove articles without date
            recent_articles.sort(key=lambda x:10000000000000000000000 if x['timestamp']==PLACEHOLDER_TIMESTAMP else x['timestamp'],reverse=True)
            recent_articles = recent_articles[:3]
            with open(CHANGELOG_FILE, 'r') as f:
                changelog = markdown(f.read())
            folder_mainpage = add_link_anchors(HOME_TEMPLATE.render(recentArticles=recent_articles, changelog=changelog), '/') + separator

        output_file.write(
            wrap_in_js(
                TEMPLATE.render(
                    content=folder_mainpage+FOLDER_TEMPLATE.render(
                        contents_by_time=sorted(folder_contents,key=lambda x:x['timestamp'], reverse=True),
                        contents_by_name=sorted(folder_contents,key=lambda x:x['name']),
                        file_count=sum(item['filecount'] for item in folder_contents),
                    ),
                    path_str=cur_target_dir, folder_path_list=path_list, parent_path=parent_path, course_parent_path=course_parent_path, dir_tree=displayed_dir_tree),
                page_title, True, cur_dir=='' or readme_exists
            )
        )

# generate checksums of all the files, so that unchanged content doesn't have to be regenerated
def gen_checksum_tree(path):
    d = {}
    d['is_dir'] = os.path.isdir(path)
    d['path'] = path
    d['checksum'] = checksum(path)
    if os.path.isdir(path):
        d['children'] = [gen_checksum_tree(path+'/'+child) for child in os.listdir(path)]
    return d

def handle_warnings():
    for i in warnings:
        print('\033[1;33mWarning: ' + i + '\033[0m')

    old_warnings = set()
    if os.path.exists(WARNINGS_FILE):
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