from jinja2 import Environment, FileSystemLoader
import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + '/'

SOURCE_DIR = ROOT_DIR + f'source/content'
AUTOSVG_SOURCE_DIR = ROOT_DIR + f'source/themeable-svgs'
TARGET_DIR = ROOT_DIR + f'next-app/app'
AUTOSVG_TARGET_DIR = ROOT_DIR + f'next-app/components/AUTOSVG'

ARTICLE_DATA_FILE = ROOT_DIR + f'ssg/log-files/article_data.json'
CONTENT_CHECKSUMS_FILE = ROOT_DIR + f'ssg/log-files/content-checksums.json'
SVG_CHECKSUMS_FILE = ROOT_DIR + f'ssg/log-files/svg-checksums.json'
WARNINGS_FILE = ROOT_DIR + f'ssg/log-files/warnings.txt'

TEMPLATES_DIR = ROOT_DIR + 'ssg/templates'
NEXT_APP_TEMPLATE_DIR = TEMPLATES_DIR + '/app'
AUTOSVG_IMPORT_STRING = '@/components/AUTOSVG'
BOOK_INDICATOR = '[BOOK] '
PLACEHOLDER_TIMESTAMP = -1
COMPILE_ALL_MD = 1 # can toggle to zero or one
COMPILE_ALL_SVGS = 0 # best leave this as 0, compiling all svgs takes a long time, better to manually generate each one individually

TEMPLATE_ENV = Environment(loader=FileSystemLoader(searchpath=TEMPLATES_DIR), autoescape=False)
TEMPLATE = TEMPLATE_ENV.get_template('template.jinja')
HOME_TEMPLATE = TEMPLATE_ENV.get_template('home.jinja') 
FOLDER_TEMPLATE = TEMPLATE_ENV.get_template('folder_overview.jinja')

# math components used in articles
MATH_TAGS = ['Thm', 'Lemma', 'Proof', 'Defn', 'Example', 'KeyIdea', 'Warning']
# components where content should be processed as markdown
BLOCK_COMPONENTS = MATH_TAGS + ['Spoiler', 'Quiz']
# components that should be preserved as-is
INLINE_COMPONENTS = ['ProminentLink', 'DiscreetLink', 'MailLink', 'Badge', 
                        'Latex', 'AUTOSVG', 'CopyButton', 'Pilcrow', 
                        'IncompleteMessage', 'Folder', 'RandomLink']