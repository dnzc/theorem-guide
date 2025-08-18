import os, shutil
import json
import subprocess
import sys
from builder import *


# construct sidebar tree
DIR_TREE = construct_tree('', 0)

# prepare target folder and copy assets
deployment_root = os.path.dirname(TARGET_DIR)
os.makedirs(TARGET_DIR, exist_ok=True)

# track all files that should exist in the deployment
expected_files = set()

print('\033[0;34mcopying shared assets\033[0m')

# copy everything from shared assets to deployment root
for item in os.listdir(SHARED_ASSETS_DIR):
    src = os.path.join(SHARED_ASSETS_DIR, item)
    if item == 'app':
        # special handling for app directory - copy its contents to TARGET_DIR
        if os.path.isdir(src):
            shutil.copytree(src, TARGET_DIR, dirs_exist_ok=True)
            # track all copied app files
            for root, dirs, files in os.walk(TARGET_DIR):
                for file in files:
                    rel_path = os.path.relpath(os.path.join(root, file), deployment_root)
                    expected_files.add(rel_path)
    else:
        # copy everything else to deployment root
        target = os.path.join(deployment_root, item)
        if os.path.isdir(src):
            shutil.copytree(src, target, dirs_exist_ok=True)
            # track all copied directory files
            for root, dirs, files in os.walk(target):
                for file in files:
                    rel_path = os.path.relpath(os.path.join(root, file), deployment_root)
                    expected_files.add(rel_path)
        else:
            shutil.copy2(src, deployment_root)
            expected_files.add(item)

# copy site-specific assets
if os.path.exists(SITE_ASSETS_DIR):
    print(f'\033[0;34mcopying site-specific assets for {CONFIG.SITE_ID}\033[0m')
    # copy app directory (layout.js, favicon files, etc.)
    app_source = os.path.join(SITE_ASSETS_DIR, 'app')
    if os.path.exists(app_source):
        for item in os.listdir(app_source):
            src = os.path.join(app_source, item)
            target = os.path.join(TARGET_DIR, item)
            if os.path.isfile(src):
                shutil.copy2(src, target)
                expected_files.add(f'app/{item}')
    # copy public directory (overwriting shared assets)
    public_source = os.path.join(SITE_ASSETS_DIR, 'public')
    if os.path.exists(public_source):
        public_target = os.path.join(deployment_root, 'public')
        for root, dirs, files in os.walk(public_source):
            for file in files:
                src_file = os.path.join(root, file)
                rel_path = os.path.relpath(src_file, public_source)
                target_file = os.path.join(public_target, rel_path)
                os.makedirs(os.path.dirname(target_file), exist_ok=True)
                shutil.copy2(src_file, target_file)
                expected_files.add(f'public/{rel_path}')
    # copy site-specific theme files
    themes_source = os.path.join(SITE_ASSETS_DIR, 'themes')
    if os.path.exists(themes_source):
        themes_target = os.path.join(deployment_root, 'styles/themes')
        shutil.copytree(themes_source, themes_target, dirs_exist_ok=True)
        for root, dirs, files in os.walk(themes_target):
            for file in files:
                rel_path = os.path.relpath(os.path.join(root, file), deployment_root)
                expected_files.add(rel_path)
    # copy site-specific components
    components_source = os.path.join(SITE_ASSETS_DIR, 'components')
    if os.path.exists(components_source):
        components_target = os.path.join(deployment_root, 'components')
        shutil.copytree(components_source, components_target, dirs_exist_ok=True)
        for root, dirs, files in os.walk(components_target):
            for file in files:
                rel_path = os.path.relpath(os.path.join(root, file), deployment_root)
                expected_files.add(rel_path)
    # copy site-specific app files (like globals.css)
    app_source = os.path.join(SITE_ASSETS_DIR, 'app')
    if os.path.exists(app_source):
        shutil.copytree(app_source, TARGET_DIR, dirs_exist_ok=True)
        for root, dirs, files in os.walk(TARGET_DIR):
            for file in files:
                rel_path = os.path.relpath(os.path.join(root, file), deployment_root)
                expected_files.add(rel_path)
    
    # copy root-level site-specific files (like vercel.json, package.json, etc.)
    for item in os.listdir(SITE_ASSETS_DIR):
        src = os.path.join(SITE_ASSETS_DIR, item)
        if os.path.isfile(src):
            target = os.path.join(deployment_root, item)
            shutil.copy2(src, target)
            expected_files.add(item)

print('\033[92mdone copying assets\033[0m')


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
book_list = []
info_string = 'compiling all content' if COMPILE_ALL_MD else 'compiling content (skipping unchanged)'
print('\033[0;34m' + info_string + '\033[0m')
gen_content('', 1, articles, book_list, stored_articles, DIR_TREE, DIR_TREE, content_checksums, expected_files)
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
expected_files.add(os.path.relpath(ARTICLE_DATA_FILE, os.path.dirname(TARGET_DIR)))

# clean up unexpected files
print('\033[0;34mcleaning up old files\033[0m')
for root, dirs, files in os.walk(os.path.dirname(TARGET_DIR)):
    # skip node_modules and .next directories
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.next']]
    
    for file in files:
        file_path = os.path.join(root, file)
        rel_path = os.path.relpath(file_path, os.path.dirname(TARGET_DIR))
        
        if rel_path not in expected_files:
            os.remove(file_path)
            print(f'  removed {rel_path}')

# print and store warnings
handle_warnings()

print('\n\033[1;92mdone\033[0m\n')