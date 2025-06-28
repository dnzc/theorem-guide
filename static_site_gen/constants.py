from jinja2 import Environment, FileSystemLoader

ROOT_DIR = '/home/dnzc/Github/Notes/'

SOURCE_DIR = ROOT_DIR + '_CONTENT'
TARGET_DIR = ROOT_DIR + 'APP/pages'
TEMPLATES_DIR = ROOT_DIR + 'templates'
CHANGELOG_FILE = ROOT_DIR + 'changelog.md'
ARTICLE_DATA_FILE = ROOT_DIR + 'APP/article_data.json'
CONTENT_CHECKSUMS_FILE = ROOT_DIR + 'static_site_gen/content_checksums.json'
SVG_CHECKSUMS_FILE = ROOT_DIR + 'static_site_gen/svg_checksums.json'
WARNINGS_FILE = ROOT_DIR + 'static_site_gen/warnings.txt'

AUTOSVG_SOURCE_DIR = ROOT_DIR + '_AUTOSVG_SOURCE'
AUTOSVG_TARGET_DIR = ROOT_DIR + 'APP/components/AUTOSVG'
AUTOSVG_IMPORT_STRING = '@/components/AUTOSVG'

TEMPLATE_ENV = Environment(loader=FileSystemLoader(searchpath=TEMPLATES_DIR))
TEMPLATE = TEMPLATE_ENV.get_template('template.jinja')
HOME_TEMPLATE = TEMPLATE_ENV.get_template('home.jinja')
FOLDER_TEMPLATE = TEMPLATE_ENV.get_template('folder_overview.jinja')

PLACEHOLDER_TIMESTAMP = -1 # for files without a timestamp
COURSE_INDICATOR = '[COURSE] '

COMPILE_ALL_MD = 1
COMPILE_ALL_SVGS = 0