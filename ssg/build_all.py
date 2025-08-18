#!/usr/bin/env python3
"""
build all sites sequentially
"""

import subprocess
import sys
import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + '/'

def build_single_site(site_name):
    """build a single site by calling run.py with the site argument"""
    print(f'\n\033[1;34m=== building {site_name} ===\033[0m')
    result = subprocess.run([sys.executable, 'run.py', site_name], cwd=os.path.join(ROOT_DIR, 'ssg'))
    if result.returncode != 0:
        print(f'\033[91mfailed to build {site_name}\033[0m')
        sys.exit(1)

if __name__ == "__main__":
    build_single_site('tripos')
    build_single_site('danielc')
    print(f'\n\033[1;92m=== done building all sites ===\033[0m')