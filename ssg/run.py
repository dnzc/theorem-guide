import os, shutil
import json
from helper import *


# construct sidebar tree
DIR_TREE = construct_tree('', 0)


# prepare target folder
os.makedirs(TARGET_DIR, exist_ok=True)
shutil.copytree(NEXT_APP_TEMPLATE_DIR, TARGET_DIR, dirs_exist_ok=True)


# load content checksums 
content_checksums = {}
if os.path.exists(CONTENT_CHECKSUMS_FILE):
    with open(CONTENT_CHECKSUMS_FILE, 'r') as f:
        try:
            content_checksums = json.loads(f.read())
        except json.decoder.JSONDecodeError:
            warn('Error loading content checksums, all content will be recompiled')
# load svg checksums
svg_checksums = {}
if os.path.exists(SVG_CHECKSUMS_FILE):
    with open(SVG_CHECKSUMS_FILE, 'r') as f:
        try:
            svg_checksums = json.loads(f.read())
        except json.decoder.JSONDecodeError:
            warn('Error loading svg checksums, all svgs will be recompiled')

# load stored articles (so that if skipping compilation, can reuse the article data)
stored_articles = []
if not COMPILE_ALL_MD:
    with open(ARTICLE_DATA_FILE, 'r') as f:
        stored_articles = json.loads(f.read())

# parse the source files into jsx and populate article info
articles = []
course_list = []
info_string = 'compiling all content' if COMPILE_ALL_MD else 'compiling content (skipping unchanged)'
print('\033[0;34m' + info_string + '\033[0m')
gen_content('', 1, articles, course_list, stored_articles, DIR_TREE, DIR_TREE, content_checksums)
print('\033[92mdone compiling content\033[0m')


# parse auto svg files into react components
info_string = 'compiling all svgs' if COMPILE_ALL_SVGS else 'compiling svgs (skipping unchanged)'
print('\n\033[0;34m' + info_string + '\033[0m')
gen_react_svgs('', 1, svg_checksums)
print('\033[92mdone compiling svgs\033[0m')


# store checksums (in order to skip compiling unchanged content)
with open(CONTENT_CHECKSUMS_FILE, 'w') as f:
    json.dump(gen_checksum_tree(SOURCE_DIR), f)
with open(SVG_CHECKSUMS_FILE, 'w') as f:
    json.dump(gen_checksum_tree(AUTOSVG_SOURCE_DIR), f)

# store article data (for indexing search)
with open(ARTICLE_DATA_FILE, 'w') as f:
    json.dump(articles, f)


# print and store warnings
handle_warnings()


print('\n\033[1;92mdone\033[0m\n')