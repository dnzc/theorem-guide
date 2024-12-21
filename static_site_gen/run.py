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
        content_checksums = json.loads(f.read())
# parse the source files into jsx
gen_content('', 1, articles, DIR_TREE, DIR_TREE, content_checksums)
# store content checksums (in order to skip compiling unchanged content)
with open(CONTENT_CHECKSUMS_FILE, 'w') as f:
    json.dump(gen_checksum_tree(SOURCE_DIR), f)


# write to article data file (for indexing search)
if not COMPILE_EVERYTHING:
    # add stored articles that were not overwritten
    with open(ARTICLE_DATA_FILE, 'r') as f:
        article_data = json.loads(f.read())
        collapse = lambda a: '/'.join(a['dir'])+'/'+a['name']
        for stored_article in article_data:
            if collapse(stored_article) in [collapse(i) for i in articles]: continue
            articles.append(stored_article)
with open(ARTICLE_DATA_FILE, 'w') as f:
    json.dump(articles, f)


# add _app.js and custom 404
shutil.copyfile(TEMPLATES_DIR+'/_app.js', TARGET_DIR+'/_app.js')
shutil.copyfile(TEMPLATES_DIR+'/404.js', TARGET_DIR+'/404.js')


# print and store warnings
handle_warnings()


print('\033[92mdone\033[0m')