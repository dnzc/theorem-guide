'''
variables which won't often change during development - variables that will are set in ssg/configs
'''

from jinja2 import Environment, FileSystemLoader
import os
import sys
import importlib.util

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + '/'

# load site configuration
def load_site_config(site_name):
    """load site-specific configuration"""
    config_path = os.path.join(ROOT_DIR, 'ssg', 'configs', f'{site_name}.py')
    spec = importlib.util.spec_from_file_location(f"config_{site_name}", config_path)
    config_module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(config_module)
    return config_module

# auto-detect site based on context (similar to .vscode/detect-site.js)
def detect_site():
    """detect which site to build based on current working directory and recent files"""
    cwd = os.getcwd()
    
    # check if we're in a site-specific directory
    if '/sources/tripos/' in cwd or '/deployments/tripos/' in cwd:
        return 'tripos'
    elif '/sources/danielc/' in cwd or '/deployments/danielc/' in cwd:
        return 'danielc'
    
    # check which source directory was modified most recently
    try:
        tripos_path = os.path.join(ROOT_DIR, 'sources/tripos')
        danielc_path = os.path.join(ROOT_DIR, 'sources/danielc')
        
        if os.path.exists(tripos_path) and os.path.exists(danielc_path):
            tripos_mtime = os.path.getmtime(tripos_path)
            danielc_mtime = os.path.getmtime(danielc_path)
            
            # return the most recently modified
            return 'tripos' if tripos_mtime > danielc_mtime else 'danielc'
    except:
        # ignore errors
        pass
    
    # default to tripos
    return 'tripos'

if len(sys.argv) < 2:
    print("usage: python run.py <site>")
    print("available sites: tripos, danielc")
    sys.exit(1)

SITE = sys.argv[1]
CONFIG = load_site_config(SITE)

# site-specific paths
SOURCE_DIR = ROOT_DIR + f'sources/{CONFIG.SITE_ID}/content'
AUTOSVG_SOURCE_DIR = ROOT_DIR + f'sources/{CONFIG.SITE_ID}/themeable-svgs'
TARGET_DIR = ROOT_DIR + f'deployments/{CONFIG.SITE_ID}/app'
AUTOSVG_TARGET_DIR = ROOT_DIR + f'deployments/{CONFIG.SITE_ID}/components/AUTOSVG'

# site-specific output files
ARTICLE_DATA_FILE = ROOT_DIR + f'data/article_data_{CONFIG.SITE_ID}.json'
CONTENT_CHECKSUMS_FILE = ROOT_DIR + f'ssg/log-files/content-checksums-{CONFIG.SITE_ID}.json'
SVG_CHECKSUMS_FILE = ROOT_DIR + f'ssg/log-files/svg-checksums-{CONFIG.SITE_ID}.json'
WARNINGS_FILE = ROOT_DIR + f'ssg/log-files/warnings-{CONFIG.SITE_ID}.txt'

# shared paths and constants
TEMPLATES_DIR = ROOT_DIR + 'ssg/templates'
SHARED_ASSETS_DIR = ROOT_DIR + 'ssg/shared-assets'
SITE_ASSETS_DIR = ROOT_DIR + f'ssg/site-assets/{CONFIG.SITE_ID}'
AUTOSVG_IMPORT_STRING = '@/components/AUTOSVG'
BOOK_INDICATOR = '[BOOK] '
PLACEHOLDER_TIMESTAMP = -1
COMPILE_ALL_MD = 1 # can toggle to zero or one
COMPILE_ALL_SVGS = 0 # best leave this as 0, compiling all svgs takes a long time, better to manually generate each one individually

# template setup
def get_template(template_name):
    """get template, trying site-specific first, then falling back to shared"""
    site_template_path = f'{CONFIG.SITE_ID}/{template_name}'
    try:
        return TEMPLATE_ENV.get_template(site_template_path)
    except:
        return TEMPLATE_ENV.get_template(template_name)

TEMPLATE_ENV = Environment(loader=FileSystemLoader(searchpath=TEMPLATES_DIR), autoescape=False)
TEMPLATE = get_template('template.jinja')
HOME_TEMPLATE = get_template('home.jinja') 
FOLDER_TEMPLATE = get_template('folder_overview.jinja')

# math components used in articles
MATH_TAGS = ['Thm', 'Lemma', 'Proof', 'Defn', 'Example', 'KeyIdea', 'Warning']
# components where content should be processed as markdown
BLOCK_COMPONENTS = MATH_TAGS + ['Spoiler', 'Quiz']
# components that should be preserved as-is
INLINE_COMPONENTS = ['ProminentLink', 'DiscreetLink', 'MailLink', 'Badge', 
                        'Latex', 'AUTOSVG', 'CopyButton', 'Pilcrow', 
                        'IncompleteMessage', 'Folder', 'RandomLink']