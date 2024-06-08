from markdown2 import markdown
from jinja2 import Environment, FileSystemLoader
import os, shutil, re
from datetime import datetime

SOURCE_DIR = '/home/dnzc/Github/wiki/CONTENT_ROOT/'
TARGET_DIR = '/home/dnzc/Github/wiki/PUBLIC_STATIC/pages/'
TEMPLATES_DIR = '/home/dnzc/Github/wiki/templates/'
IMAGES_DIR = '/home/dnzc/Github/wiki/PUBLIC_STATIC/public/images/'

template_env = Environment(loader=FileSystemLoader(searchpath=TEMPLATES_DIR))
template = template_env.get_template('template.jinja')
home_template = template_env.get_template('home.jinja')
folder_template = template_env.get_template('folder_overview.jinja')

def wrap_in_js(jinja, name, isFolder):
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

    toastContainer = f'''
                        <ToastContainer
                            position="top-right"
                            autoClose={{5000}}
                            hideProgressBar={{false}}
                            newestOnTop={{false}}
                            closeOnClick
                            rtl={{false}}
                            pauseOnFocusLoss={{false}}
                            pauseOnHover={{false}}
                            theme="dark"
                        />
    ''' if not isFolder else ''

    return f'''
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'

import {{ FaChevronRight }} from 'react-icons/fa'
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

def timestamp_to_str(timestamp):
    return '' if timestamp==-1 else datetime.utcfromtimestamp(timestamp).strftime('%d %b %Y')

def get_folder_contents(cur_dir):
    folder_contents = []
    for child in os.listdir(SOURCE_DIR+cur_dir):
        if child.endswith('__IMAGES__'): continue # exclude the special images directory
        item = {}
        is_file = child[-3:] == '.md'
        child_dir = SOURCE_DIR+cur_dir+'/'+child
        item['is_file'] = 'yes' if is_file else 'no' # bools are uppercase in python but lowercase in js, need this instead
        item['name'] = child[:-3] if is_file else child
        item['path'] = cur_dir + '/' + item['name']
        # is dfs so guaranteed to be youngest timestamp of files (not folders, since will have already been resolved)
        timestamp = os.path.getmtime(child_dir) if is_file else max([-1] + [os.path.getmtime(child_dir+'/'+i) for i in os.listdir(child_dir)])
        item['timestamp'] = timestamp
        item['date'] = timestamp_to_str(timestamp)
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
        d['name'] = name
        d['path'] = path[len(SOURCE_DIR)-1:]
        # sort alphabetically
        d['children'] = [construct_tree(os.path.join(path,x), depth+1) for x in sorted(os.listdir(path)) if not x.endswith('__IMAGES__')] # exclude the special images directory
    else:
        d['name'] = name[:-3] # remove .md file extension
        d['path'] = path[len(SOURCE_DIR)-1:][:-3]
    return d

DIR_TREE = construct_tree(SOURCE_DIR, 0)

# parse the source files into jsx

def gen_content(cur_dir, depth):
    if cur_dir[-3:] == '.md': # markdown file
        with open(SOURCE_DIR+cur_dir, 'r') as markdown_file:

            file = markdown_file.read()

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
            page = re.sub(r'(\$\$?.*?\$\$?)', r'<Latex>\1</Latex>', page)

            # <p> tags will have been placed around <CopyButton>, remove them
            page = re.sub(r'<p><CopyButton(.*?)</CopyButton></p>', r'<CopyButton\1</CopyButton>', page)

            # <p> tags will have been placed around <Spoiler>, remove them
            page = re.sub('<p><Spoiler></p>', '<Spoiler>', page)
            page = re.sub('<p></Spoiler></p>', '</Spoiler>', page)

            # <p> tags will have been placed around <hr>, remove them
            page = re.sub('<p><hr></p>', '<hr>', page)
            page = re.sub('<p></hr></p>', '</hr>', page)

            # find h2 tags, add link anchor to them, and generate table of contents from h2 tags (each h2 tag is given a unique id by the header-ids extension)
            tableOfContents = [[i.group(2),'#'+i.group(1)] for i in re.finditer(r'<h2 id="(.*?)">(.*?)</h2>', page, re.DOTALL)]
            page = re.sub(r'<h2 id="(.*?)">(.*?)</h2>', r'<h2 id="\1" class="group flex">\2&nbsp;<Link href="#\1" onClick={() => copyToClipboard("https://wiki.danielc.rocks'+cur_dir[:-3]+r'#\1", true)} class="hidden group-hover:block text-primary">¶</Link></h2>', page, flags=re.DOTALL) # if opening spoiler tag was on separated line


        with open(TARGET_DIR+cur_dir[:-3]+'.js', 'w+') as output_file:
            path_list = cur_dir.split('/')[1:-1] # path to parent folder
            time = timestamp_to_str(os.path.getmtime(SOURCE_DIR+cur_dir))

            pageTitle = cur_dir.split('/')[-1][:-3]
            # assume the markdown filenames consist of [a-zA-Z0-9-]
            if(re.sub(r'[^a-zA-Z0-9-]', '', pageTitle) != pageTitle):
                print(f"Warning: {cur_dir} filename contains illegal characters")
            parsedPageTitle = []
            for word in pageTitle.split('-'):
                if not word.isdigit(): parsedPageTitle += [word[0].upper() + word[1:]]
            pageTitle = ' '.join(parsedPageTitle)

            react = wrap_in_js(
                    template.render(content=page.replace('class=', 'className='), pathStr=cur_dir[:-3], pathList=path_list, parent_path='/'+'/'.join(cur_dir[1:].split('/')[:-1]), dirTree=DIR_TREE, time=time, tableOfContents=tableOfContents),
                    pageTitle,
                    False
                    )
            output_file.write(react)
    elif cur_dir.endswith('__IMAGES__'): # special: the images directory
        # move contents into public images dir
        shutil.copytree(SOURCE_DIR+cur_dir, IMAGES_DIR)
    else: # directory
        if not os.path.exists(TARGET_DIR+cur_dir):
            os.makedirs(TARGET_DIR+cur_dir)
        for child in os.listdir(SOURCE_DIR+cur_dir):
            gen_content(cur_dir+'/'+child, depth+1)
        if cur_dir != '':
            with open(TARGET_DIR+cur_dir+'/index.js', 'w+') as output_file:
                path_list = cur_dir.split('/')[1:]
                folder_contents = get_folder_contents(cur_dir)

                pageTitle = cur_dir.split('/')[-1]
                # assume the markdown filenames consist of [a-zA-Z0-9-]
                if(re.sub(r'[^a-zA-Z0-9-]', '', pageTitle) != pageTitle):
                    print(f"Warning: {cur_dir} filename contains illegal characters")
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
                        pageTitle,
                        True
                    )
                )

if os.path.exists(IMAGES_DIR):
    shutil.rmtree(IMAGES_DIR)

os.makedirs(TARGET_DIR, exist_ok=True)
gen_content('', 1)


# root page is special (readme)

with open(TARGET_DIR+'index.js', 'w+') as output_file:
    folder_contents = get_folder_contents('')
    output_file.write(
        wrap_in_js(
            template.render(
                content=home_template.render() + folder_template.render(
                    contents_by_time=sorted(folder_contents,key=lambda x:x['timestamp']),
                    contents_by_name=sorted(folder_contents,key=lambda x:x['name']),
                    file_count=sum(1 for i in folder_contents if i['is_file']=='yes'),
                    folder_count=sum(1 for i in folder_contents if i['is_file']=='no'),
                ), dirTree=DIR_TREE),
            'Wiki',
            True
        )
    )


# add _app.js and custom 404

shutil.copyfile(TEMPLATES_DIR+'_app.js', TARGET_DIR+'_app.js')
shutil.copyfile(TEMPLATES_DIR+'404.js', TARGET_DIR+'404.js')

print('done')