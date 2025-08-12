from jinja2 import Environment, FileSystemLoader
import os

# detect if running on Vercel by checking for VERCEL environment variable
if os.environ.get('VERCEL'):
    # on Vercel, the build runs from the next-app directory
    # so we need to go up one level to reach the project root
    ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + '/'
else:
    # local development path
    ROOT_DIR = '/Users/daniel/Github/tripos-guru/'

SOURCE_DIR = ROOT_DIR + 'STATIC/content'
TARGET_DIR = ROOT_DIR + 'next-app/app'
TEMPLATES_DIR = ROOT_DIR + 'ssg/templates'
CHANGELOG_FILE = ROOT_DIR + 'changelog.md'
ARTICLE_DATA_FILE = ROOT_DIR + 'next-app/article_data.json' # also referenced in components/search.js
CONTENT_CHECKSUMS_FILE = ROOT_DIR + 'ssg/content_checksums.json'
SVG_CHECKSUMS_FILE = ROOT_DIR + 'ssg/svg_checksums.json'
WARNINGS_FILE = ROOT_DIR + 'ssg/warnings.txt'

AUTOSVG_SOURCE_DIR = ROOT_DIR + 'STATIC/themeable-svgs'
AUTOSVG_TARGET_DIR = ROOT_DIR + 'next-app/components/AUTOSVG'
AUTOSVG_IMPORT_STRING = '@/components/AUTOSVG'

TEMPLATE_ENV = Environment(loader=FileSystemLoader(searchpath=TEMPLATES_DIR), autoescape=False)
TEMPLATE = TEMPLATE_ENV.get_template('template.jinja')
HOME_TEMPLATE = TEMPLATE_ENV.get_template('home.jinja')
FOLDER_TEMPLATE = TEMPLATE_ENV.get_template('folder_overview.jinja')
NEXT_APP_TEMPLATE_DIR = TEMPLATES_DIR + '/app'

PLACEHOLDER_TIMESTAMP = -1 # for files without a timestamp
COURSE_INDICATOR = '[COURSE] '

COMPILE_ALL_MD = 1
COMPILE_ALL_SVGS = 0

# components where content should be processed as markdown
BLOCK_COMPONENTS = ['Defn', 'Thm', 'Lemma', 'Proof', 'Example', 'Spoiler']
# components that should be preserved as-is
INLINE_COMPONENTS = ['ProminentLink', 'DiscreetLink', 'MailLink', 'Badge', 
                        'Latex', 'AUTOSVG', 'CopyButton', 'Pilcrow', 
                        'IncompleteMessage', 'Folder']