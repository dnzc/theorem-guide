from markdown2 import markdown
from jinja2 import Environment, FileSystemLoader
import os, shutil, re
from datetime import datetime

SOURCE_DIR = '/home/dnzc/Github/wiki/CONTENT_ROOT/'
TARGET_DIR = '/home/dnzc/Github/wiki/PUBLIC_STATIC/pages/'
TEMPLATES_DIR = '/home/dnzc/Github/wiki/templates/'

template_env = Environment(loader=FileSystemLoader(searchpath=TEMPLATES_DIR))
template = template_env.get_template('template.jinja')
home_template = template_env.get_template('home.jinja')
folder_template = template_env.get_template('folder_overview.jinja')

def wrap_in_js(jinja, name, depth, isFolder):
    components_dir = ('./' if depth==0 else '../'*depth) + 'components'
    folder_imports = f'''
import {{ MdArticle }} from 'react-icons/md'
import Folder from '{components_dir}/folder'
''' if isFolder else f'''
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '{components_dir}/spoiler'
import IncompleteMessage from '{components_dir}/incompleteMessage'
'''
    return f'''
import Layout from '{components_dir}/layout'
import Accordion from '{components_dir}/accordion'
import Link from 'next/link'
import ProminentLink from '{components_dir}/prominentLink'
import DiscreetLink from '{components_dir}/discreetLink'

import {{ FaChevronRight }} from 'react-icons/fa'
import {{ RiArrowGoBackFill }} from 'react-icons/ri'
{folder_imports}

export default function {name.title()} () {{
    return (
        <Layout>
            {jinja}
        </Layout>
    )
}}
    '''

def timestamp_to_str(timestamp):
    return '' if timestamp==-1 else datetime.utcfromtimestamp(timestamp).strftime('%d %b %Y')

def get_folder_contents(cur_dir):
    folder_contents = []
    for child in os.listdir(SOURCE_DIR+cur_dir):
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
        d['children'] = [construct_tree(os.path.join(path,x), depth+1) for x in sorted(os.listdir(path))]
    else:
        d['name'] = name[:-3] # remove .md file extension
        d['path'] = path[len(SOURCE_DIR)-1:][:-3]
    return d

DIR_TREE = construct_tree(SOURCE_DIR, 0)

# parse the source files into jsx

def gen_content(cur_dir, depth):
    if cur_dir[-3:] == '.md':
        with open(SOURCE_DIR+cur_dir, 'r') as markdown_file:

            file = markdown_file.read()

            # replace \\ with \\\\, because for some reason later \\ is replaced with \ (probably by markdown2)
            file = file.replace('\\\\','\\\\\\\\') 
            # ensure that <Spoiler> and </Spoiler> are preceded+followed by two newlines, so that markdown2 will wrap them in p tags (i.e. there won't be junk between spoiler tag and p tag)
            file = re.sub(r'<(/?)Spoiler>\n?([^\n])', r'<\1Spoiler>\n\n\2', file)
            file = re.sub(r'([^\n])\n?<(/)?Spoiler>', r'\1\n\n<\2Spoiler>', file)

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

            # find latex
            page = re.sub(r'(\$\$?.*?\$\$?)', r'<Latex>\1</Latex>', page)

            # <p> tags will have been placed around <Spoiler>, remove them
            page = re.sub('<p><Spoiler></p>', '<p><Spoiler>', page) # if opening spoiler tag was on separated line
            page = re.sub('<p></Spoiler></p>', '</Spoiler></p>', page) # if closing tag was separated
            page = re.sub(r'<p>(<Spoiler>.*?</Spoiler>)</p>', r'\1', page, flags=re.DOTALL) # remove surrounding <p>

            # find h2 tags, add link anchor to them, and generate table of contents from h2 tags (each h2 tag is given a unique id by the header-ids extension)
            tableOfContents = [[i.group(2),'#'+i.group(1)] for i in re.finditer(r'<h2 id="(.*?)">(.*?)</h2>', page, re.DOTALL)]
            page = re.sub(r'<h2 id="(.*?)">(.*?)</h2>', r'<h2 id="\1" class="group flex">\2&nbsp;<Link href="#\1" class="hidden group-hover:block text-primary">¶</Link></h2>', page, flags=re.DOTALL) # if opening spoiler tag was on separated line

        with open(TARGET_DIR+cur_dir[:-3]+'.js', 'w+') as output_file:
            path_list = cur_dir.split('/')[1:-1] # path to parent folder
            time = timestamp_to_str(os.path.getmtime(SOURCE_DIR+cur_dir))
            react = wrap_in_js(
                    template.render(content=page.replace('class=', 'className='), pathStr=cur_dir[:-3], pathList=path_list, parent_path='/'+'/'.join(cur_dir[1:].split('/')[:-1]), dirTree=DIR_TREE, time=time, tableOfContents=tableOfContents),
                    re.sub(r'[^a-zA-Z]', '', path_list[-1]),
                    depth-1,
                    False
                    )
            output_file.write(react)
    else:
        if not os.path.exists(TARGET_DIR+cur_dir):
            os.makedirs(TARGET_DIR+cur_dir)
        for child in os.listdir(SOURCE_DIR+cur_dir):
            gen_content(cur_dir+'/'+child, depth+1)
        if cur_dir != '':
            with open(TARGET_DIR+cur_dir+'/index.js', 'w+') as output_file:
                path_list = cur_dir.split('/')[1:]
                folder_contents = get_folder_contents(cur_dir)
                output_file.write(
                    wrap_in_js(
                        template.render(
                            content=folder_template.render(
                                contents_by_time=sorted(folder_contents,key=lambda x:x['timestamp'], reverse=True),
                                contents_by_name=sorted(folder_contents,key=lambda x:x['name']),
                                file_count=sum(1 for i in folder_contents if i['is_file']=='yes'),
                                folder_count=sum(1 for i in folder_contents if i['is_file']=='no'),
                            ), pathStr=cur_dir, pathList=path_list, parent_path='/'+'/'.join(cur_dir[1:].split('/')[:-1]), dirTree=DIR_TREE),
                        re.sub(r'[^a-zA-Z]', '', path_list[-1]),
                        depth,
                        True
                    )
                )

if os.path.exists(TARGET_DIR):
    shutil.rmtree(TARGET_DIR)

os.makedirs(TARGET_DIR)
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
            'root',
            1,
            True
        )
    )


# add _app.js and _document.js

shutil.copyfile(TEMPLATES_DIR+'_app.js', TARGET_DIR+'_app.js')
shutil.copyfile(TEMPLATES_DIR+'_document.js', TARGET_DIR+'_document.js')

print('done')