from markdown2 import markdown
from jinja2 import Environment, FileSystemLoader
import os, shutil, re
from datetime import datetime
import html

SOURCE_DIR = '/home/dnzc/Github/blog/CONTENT_ROOT/'
TARGET_DIR = '/home/dnzc/Github/blog/PUBLIC_STATIC/pages/'
ARTICLE_DATA_FILE = '/home/dnzc/Github/blog/PUBLIC_STATIC/articles.js'
TEMPLATES_DIR = '/home/dnzc/Github/blog/templates/'
IMAGES_DIR = '/home/dnzc/Github/blog/PUBLIC_STATIC/public/images/'
CHANGELOG_FILE = '/home/dnzc/Github/blog/changelog.md'

template_env = Environment(loader=FileSystemLoader(searchpath=TEMPLATES_DIR))
template = template_env.get_template('template.jinja')
home_template = template_env.get_template('home.jinja')
folder_template = template_env.get_template('folder_overview.jinja')

def wrap_in_js(jinja, name, isFolder, isHome):
    folder_imports = f'''
import {{ MdArticle }} from 'react-icons/md'
import Folder from '@/components/folder'
''' if isFolder else f'''
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import {{ copyToClipboard, CopyButton }} from '@/components/copyButton'
import {{ ToastContainer }} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
'''
    if isHome: folder_imports += f'''
import {{ copyToClipboard, CopyButton }} from '@/components/copyButton'
import {{ ToastContainer }} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
    ''' if isHome or not isFolder else ''

    return f'''
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'

import {{ FaChevronRight, FaSearch, FaBook }} from 'react-icons/fa'
import {{ RiArrowGoBackFill }} from 'react-icons/ri'
{folder_imports}

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
def add_link_anchors(page, cur_dir): 
    return re.sub(r'<h2 id="(.*?)">(.*?)</h2>', r'<h2 id="\1" className="group flex">\2&nbsp;<Link href="#\1" onClick={() => copyToClipboard("https://blog.danielc.rocks'+cur_dir[:-3]+r'#\1", true)} className="hidden group-hover:block text-primary">¶</Link></h2>', page, flags=re.DOTALL)

def timestamp_to_str(timestamp):
    return '' if timestamp==-1 else datetime.utcfromtimestamp(timestamp).strftime('%d %b %Y')

def sanitize(path):
    return re.sub(r'[^a-zA-Z0-9-/.]', '', path)
    
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

def get_folder_contents(cur_dir):
    folder_contents = []
    for child in os.listdir(SOURCE_DIR+cur_dir):
        if child.endswith('__IMAGES__'): continue # exclude the special images directory
        item = {}
        is_file = child[-3:] == '.md'
        child_dir = SOURCE_DIR+cur_dir+'/'+child
        item['is_file'] = 'yes' if is_file else 'no' # bools are uppercase in python but lowercase in js, need this instead
        item['name'] = sanitize(child[:-3] if is_file else child)
        item['path'] = cur_dir + '/' + item['name']
        # is dfs so guaranteed to be youngest timestamp of files (not folders, since will have already been resolved)
        timestamp = os.path.getmtime(child_dir) if is_file else max([-1] + [os.path.getmtime(child_dir+'/'+i) for i in os.listdir(child_dir)])
        item['timestamp'] = timestamp
        item['date_time'] = timestamp_to_str(timestamp)
        folder_contents.append(item)
    return folder_contents

# construct a representation of the directory tree that will be generated
# so that it can be passed to the template to be displayed as a sidebar
def construct_tree(path, depth):
    name = os.path.basename(path)
    d = {}
    d['depth'] = depth
    d['is_dir'] = os.path.isdir(path)
    if os.path.isdir(path):
        d['path'] = sanitize(path[len(SOURCE_DIR)-1:])
        # sort alphabetically
        d['children'] = [construct_tree(os.path.join(path,x), depth+1) for x in sorted(os.listdir(path)) if not x.endswith('__IMAGES__')] # exclude the special images directory
    else:
        name = name[:-3] # remove .md file extension
        d['path'] = sanitize(path[len(SOURCE_DIR)-1:][:-3])
    if name != sanitize(name):
        print(f'Warning: {d["path"]} name contains illegal characters, filtering them out...')
    d['name'] = sanitize(name)
    return d

DIR_TREE = construct_tree(SOURCE_DIR, 0)

# parse the source files into jsx
# returns a list of all the markdown files and their info (for "recently added articles" and search functionality)
def gen_content(cur_dir, depth, article_list): 
    if cur_dir[-3:] == '.md': # markdown file
        article_data = {}
        with open(SOURCE_DIR+cur_dir, 'r') as markdown_file:

            file = markdown_file.read()
            # extract article title from markdown
            titles = re.findall(r'```.*?\n# .*?\n```|\n# (.*?)\n', '\n'+file, re.DOTALL) # extract lines starting with '# ' that aren't inside a code block (might be first line, so prepend \n)
            titles = [t for t in titles if t != ''] # for invalid titles, the capture group is empty but still exists, so need to remove them
            if len(titles) == 0:
                article_data['title'] = 'no_title'
                print(f'Warning: no article title found in {cur_dir}')
            else:
                article_data['title'] = titles[0]
                if len(titles) > 1:
                    print(f'Warning: multiple article titles found in {cur_dir}, using first one')

            # replace \\ with \\\\, because for some reason later \\ is replaced with \ (probably by markdown2)
            file = file.replace('\\\\','\\\\\\\\') 
            # ensure that <Spoiler> and </Spoiler> (and <Spoiler/>) are preceded+followed by two newlines, so that markdown2 will wrap them in p tags (i.e. there won't be junk between spoiler tag and p tag)
            file = re.sub(r'<(/?)Spoiler(/?)>\n?([^\n])', r'<\1Spoiler\2>\n\n\3', file)
            file = re.sub(r'([^\n])\n?<(/?)Spoiler(/?)>', r'\1\n\n<\2Spoiler\3>', file)
            # ensure that <hr> and </hr> are preceded+followed by two newlines, so that markdown2 will wrap them in p tags (i.e. there won't be junk between hr tag and p tag)
            file = re.sub(r'<(/?)hr(/?)>\n?([^\n])', r'<\1hr\2>\n\n\3', file)
            file = re.sub(r'([^\n])\n?<(/?)hr(/?)>', r'\1\n\n<\2hr\3>', file)
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
            page = re.sub(r'\$\$(.*?)\$\$', r'<span className="block max-w-full overflow-auto"><Latex>\1</Latex></span>', page)
            page = re.sub(r'(\$.+?\$)', r'<Latex>\1</Latex>', page)
            page = re.sub(r'(<span className="block max-w-full overflow-auto"><Latex>)(.*?)(</Latex></span>)', r'\1$$\2$$\3', page)

            # <p> tags will have been placed around <CopyButton>, remove them
            page = re.sub(r'<p><CopyButton(.*?)</CopyButton></p>', r'<CopyButton\1</CopyButton>', page)
            page = re.sub(r'<p><CopyButton(.*?)/></p>', r'<CopyButton\1/>', page)

            # <p> tags will have been placed around <Spoiler>, remove them
            page = re.sub('<p><Spoiler></p>', '<Spoiler>', page)
            page = re.sub('<p></Spoiler></p>', '</Spoiler>', page)

            # <p> tags will have been placed around <hr>, remove them
            page = re.sub('<p><hr></p>', '<hr>', page)
            page = re.sub('<p></hr></p>', '</hr>', page)

            # find h2 tags, add link anchor to them, and generate table of contents from h2 tags (each h2 tag is given a unique id by the header-ids extension)
            tableOfContents = [[i.group(2),'#'+i.group(1)] for i in re.finditer(r'<h2 id="(.*?)">(.*?)</h2>', page, re.DOTALL)]
            page = add_link_anchors(page, cur_dir)

            # markdown added class attributes, replace with "className" for react
            page = page.replace('class=','className=')

            # move copy buttons generated above (i.e. in code blocks marked __COPIABLE__) into their containers
            page = re.sub(r'<p>__COPIABLE__</p>\n\n<CopyButton(.*?)/>\n\n<div className="codehilite">\n<pre>(.*?)</pre>\n</div>', r'<div className="codehilite relative">\n<div className="absolute top-2 right-2"><CopyButton\1/></div>\n<pre>\2</pre>\n</div>', page)
            page = re.sub(r'<p>__COPIABLE__</p>\n\n<CopyButton(.*?)/>\n\n<pre>(.*?)</pre>', r'<pre className="relative">\n<div className="absolute top-2 right-2"><CopyButton\1/></div>\n\2</pre>', page)

            article_data['content'] = flatten_content(page, article_data['title'])


        with open(TARGET_DIR+sanitize(cur_dir[:-3])+'.js', 'w') as output_file:
            path_list = sanitize(cur_dir).split('/')[1:-1] # path to parent folder
            article_data['dir'] = path_list
            timestamp = os.path.getmtime(SOURCE_DIR+cur_dir)
            article_data['timestamp'] = timestamp
            date_time = timestamp_to_str(timestamp)
            article_data['date_time'] = date_time

            filename = sanitize(cur_dir).split('/')[-1][:-3] # ignore file extension
            article_data['name'] = filename
            parsedFilename = []
            for word in filename.split('-'):
                if not word.isdigit(): parsedFilename += [word[0].upper() + word[1:]]
            pageTitle = ' '.join(parsedFilename)

            plaintext = article_data['content']
            plaintext = eval('"'+ plaintext.replace('"','\\"')+'"')
            plaintext = html.escape(plaintext)
            plaintext = plaintext.replace('"', '&quot;')
            # replace braces for nextjs
            plaintext = plaintext.replace('{', '&#123;').replace('}', '&#125;')
            plaintext = plaintext.replace('\\n', '\\\\n').replace('\n', '\\n') # copy button component takes newlines as literals

            react = wrap_in_js(
                    template.render(content=page, pathStr=cur_dir[:-3], pathList=path_list, parent_path='/'+'/'.join(cur_dir[1:].split('/')[:-1]), dirTree=DIR_TREE, dateTime=date_time, copiableArticlePlaintext=plaintext, tableOfContents=tableOfContents),
                    pageTitle, False, False
                    )

            output_file.write(react)

            article_list.append(article_data)

            #add article data to article list
    elif cur_dir.endswith('__IMAGES__'): # special: the images directory
        # move contents into public images dir
        shutil.copytree(SOURCE_DIR+cur_dir, IMAGES_DIR)
    else: # directory
        cur_dir = sanitize(cur_dir)
        if not os.path.exists(TARGET_DIR+cur_dir):
            os.makedirs(TARGET_DIR+cur_dir)
        for child in os.listdir(SOURCE_DIR+cur_dir):
            gen_content(cur_dir+'/'+child, depth+1, article_list)
        if cur_dir != '':
            with open(TARGET_DIR+cur_dir+'/index.js', 'w') as output_file:
                path_list = cur_dir.split('/')[1:]
                folder_contents = get_folder_contents(cur_dir)

                pageTitle = cur_dir.split('/')[-1]
                # assume the markdown filenames consist of [a-zA-Z0-9-]
                if(re.sub(r'[^a-zA-Z0-9-]', '', pageTitle) != pageTitle):
                    print(f'Warning: {cur_dir} filename contains illegal characters')
                parsedPageTitle = []
                for word in pageTitle.split('-'):
                    if not word.isdigit(): parsedPageTitle += [word[0].upper() + word[1:]]
                pageTitle = ' '.join(parsedPageTitle)

                output_file.write(
                    wrap_in_js(
                        template.render(
                            content=folder_template.render(
                                contents_by_time=sorted(folder_contents,key=lambda x:x['timestamp'], reverse=True),
                                contents_by_name=sorted(folder_contents,key=lambda x:x['name']),
                                file_count=sum(1 for i in folder_contents if i['is_file']=='yes'),
                                folder_count=sum(1 for i in folder_contents if i['is_file']=='no'),
                            ), pathStr=cur_dir, pathList=path_list, parent_path='/'+'/'.join(cur_dir[1:].split('/')[:-1]), dirTree=DIR_TREE),
                        pageTitle, True, False
                    )
                )

if os.path.exists(IMAGES_DIR):
    shutil.rmtree(IMAGES_DIR)

os.makedirs(TARGET_DIR, exist_ok=True)

articles = []
gen_content('', 1, articles)

# for indexing search
with open(ARTICLE_DATA_FILE, 'w') as data_file:
    data_file.write('const articles = [')
    for i,article in enumerate(articles):
        title = article['title'].replace('\'','\\\'')
        content = article['content']
        data_file.write(f'''
    {{
        id: {i},
        title: '{title}',
        name: '{article['name']}',
        dir: {article['dir']},
        content: '{article['content']}',
    }},''')
    data_file.write('\n]\n\nexport default articles')



# root page is special

with open(TARGET_DIR+'index.js', 'w') as output_file:
    folder_contents = get_folder_contents('')

    recent_articles = sorted(articles, key=lambda x:x['timestamp'],reverse=True)[:4]

    with open(CHANGELOG_FILE, 'r') as f:
        changelog = markdown(f.read())

    output_file.write(
        wrap_in_js(
            template.render(
                content=add_link_anchors(home_template.render(recentArticles=recent_articles, changelog=changelog), '/') + folder_template.render(
                    contents_by_time=sorted(folder_contents,key=lambda x:x['timestamp']),
                    contents_by_name=sorted(folder_contents,key=lambda x:x['name']),
                    file_count=sum(1 for i in folder_contents if i['is_file']=='yes'),
                    folder_count=sum(1 for i in folder_contents if i['is_file']=='no'),
                ), pathStr='', dirTree=DIR_TREE),
            'Blog',
            True, True
        )
    )


# add _app.js and custom 404

shutil.copyfile(TEMPLATES_DIR+'_app.js', TARGET_DIR+'_app.js')
shutil.copyfile(TEMPLATES_DIR+'404.js', TARGET_DIR+'404.js')

print('done')