#!/usr/bin/env python3
"""
find all hardcoded links in the project and print them
"""

import os
import re
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'ssg'))

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) + '/'

def find_links_in_file(file_path):
    """find all links in a single file"""
    # TODO: also relative links
    links = []
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # find http/https links
            http_pattern = r'https?://[^\s\'">\)]+[^\s\'">\)\.]'
            http_links = re.findall(http_pattern, content)
            
            # find markdown links [text](url)
            md_pattern = r'\[([^\]]*)\]\(([^)]+)\)'
            md_matches = re.findall(md_pattern, content)
            md_links = [match[1] for match in md_matches if match[1].startswith(('http', '/'))]
            
            # find html href links
            href_pattern = r'href=["\']([^"\']+)["\']'
            href_links = re.findall(href_pattern, content)
            
            # combine and deduplicate
            all_links = list(set(http_links + md_links + href_links))
            return [i for i in all_links if not i.startswith('#') and not i.startswith('{')]
    except:
        return []

def scan_directory(directory, extensions):
    """recursively scan directory for files with given extensions"""
    links_by_file = {}
    
    for root, dirs, files in os.walk(directory):
        # skip hidden directories and node_modules
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']
        
        for file in files:
            if any(file.endswith(ext) for ext in extensions):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, ROOT_DIR)
                
                links = find_links_in_file(file_path)
                if links:
                    links_by_file[rel_path] = links
    
    return links_by_file

def main():
    """find all hardcoded links in the project"""
    print('Scanning entire project for hardcoded links...\n')
    
    # file extensions to scan
    extensions = ['.md', '.py', '.js', '.jinja', '.html', '.css']
    
    # directories to scan
    directories = [
        ROOT_DIR + 'sources',
        ROOT_DIR + 'ssg',
    ]
    
    all_links = {}
    
    for directory in directories:
        if os.path.exists(directory):
            dir_links = scan_directory(directory, extensions)
            all_links.update(dir_links)
    
    # print results
    if not all_links:
        print('no hardcoded links found')
        return
    
    total_links = sum(len(links) for links in all_links.values())
    print(f'found {total_links} links in {len(all_links)} files:\n')
    
    for file_path, links in sorted(all_links.items()):
        print(f'\033[1m{file_path}\033[0m')
        for link in sorted(set(links)):
            print(f'  {link}')
        print()

if __name__ == "__main__":
    main()