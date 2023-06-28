from markdown2 import markdown
from jinja2 import Environment, FileSystemLoader
import os, shutil

template_env = Environment(loader=FileSystemLoader(searchpath='./'))
template = template_env.get_template('layout.jinja')

def gen_content(cur, parent_dir, DIR_TREE):
    if cur[-3:] == ".md":
        with open('./root/'+parent_dir+cur, 'r') as markdown_file:
            page = markdown(markdown_file.read(), extras=['fenced-code-blocks', 'code-friendly'])
        if not os.path.exists('./generated_content'+parent_dir):
            os.makedirs('./generated_content'+parent_dir)
        with open('./generated_content'+parent_dir+cur, 'w+') as output_file:
            output_file.write(template.render(article=page, dirtree=DIR_TREE))
    else:
        for child in os.listdir('./root/'+parent_dir+cur):
            gen_content(child, parent_dir+cur+'/', DIR_TREE)

shutil.rmtree("./generated_content/")
os.makedirs("./generated_content/")
gen_content('', '', 1)