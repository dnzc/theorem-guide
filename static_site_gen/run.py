import os, shutil
import json
from helper import *


# construct sidebar tree
DIR_TREE = construct_tree('', 0)


# prepare target folder
os.makedirs(TARGET_DIR, exist_ok=True)


# load content checksums 
content_checksums = {}
if os.path.exists(CONTENT_CHECKSUMS_FILE):
    with open(CONTENT_CHECKSUMS_FILE, 'r') as f:
        try:
            content_checksums = json.loads(f.read())
        except json.decoder.JSONDecodeError: pass

# load stored articles (so that if skipping compilation, can reuse the article data)
stored_articles = []
if not COMPILE_EVERYTHING:
    with open(ARTICLE_DATA_FILE, 'r') as f:
        stored_articles = json.loads(f.read())

# parse the source files into jsx and populate article info
articles = []
course_list = []
gen_content('', 1, articles, course_list, stored_articles, DIR_TREE, DIR_TREE, content_checksums)

# store content checksums (in order to skip compiling unchanged content)
with open(CONTENT_CHECKSUMS_FILE, 'w') as f:
    json.dump(gen_checksum_tree(SOURCE_DIR), f)

# store article data (for indexing search)
with open(ARTICLE_DATA_FILE, 'w') as f:
    json.dump(articles, f)


# add _app.js, _document.js and custom 404
shutil.copyfile(TEMPLATES_DIR+'/_app.js', TARGET_DIR+'/_app.js')
shutil.copyfile(TEMPLATES_DIR+'/_document.js', TARGET_DIR+'/_document.js')
shutil.copyfile(TEMPLATES_DIR+'/404.js', TARGET_DIR+'/404.js')


# print and store warnings
handle_warnings()


print('\033[92mdone\033[0m')