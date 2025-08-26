from jinja2 import Environment, FileSystemLoader
import os
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + '/'

SOURCE_DIR = ROOT_DIR + f'source/content'
AUTOSVG_SOURCE_DIR = ROOT_DIR + f'source/themeable-svgs'
TARGET_DIR = ROOT_DIR + f'next-app/app'
AUTOSVG_TARGET_DIR = ROOT_DIR + f'next-app/components/AUTOSVG'

ARTICLE_DATA_FILE = ROOT_DIR + f'next-app/article_data.json'
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


# list of react components; tuple of:
# 1. name
# 2. whether we should process their contents as markdown or preserve them as-is
# 3. the react "import" statement for that component
# for components that we process contents as markdown for, we remove surrounding <p> tags in the mistune processor
# autodetect component list (whether their contents are markdown, is hardcoded below)
COMPONENTS = []
for root, dirs, files in os.walk(ROOT_DIR + 'next-app/components'):
    if 'AUTOSVG' in root: continue # autosvg is special
    for file in files:
        if file.endswith('.js'):
            with open(os.path.join(root, file)) as f:
                content = f.read()
            relative_path = os.path.relpath(os.path.join(root, file), ROOT_DIR + 'next-app/components')
            import_path = '@/components/' + relative_path.replace('\\', '/').removesuffix('.js')
            
            # determine which components have markdown content (or should have surrounding p tags removed)
            process_contents_as_markdown = (file in ['math.js', 'spoiler.js', 'quiz.js'] or 'bespoke' in root)
            
            # detect all exports
            default_exports = re.findall(r'export default function (\w+)', content)
            default_exports += re.findall(r'export default ([A-Z]\w+)', content)
            named_exports = re.findall(r'export function (\w+)', content)
            # handle "export { ... }"
            export_braces = re.findall(r'export\s*\{\s*([^}]+)\s*\}', content)

            if export_braces:
                brace_exports = []
                for match in export_braces:
                    brace_exports.extend([name.strip() for name in match.split(',')])
                # if there are JSX components (starts with uppercase letter), create combined import
                jsx_components = [name for name in brace_exports if name[0].isupper()]
                if jsx_components:
                    combined_import = f'import {{ {", ".join(brace_exports)} }} from "{import_path}"'
                    for jsx_comp in jsx_components:
                        COMPONENTS.append((jsx_comp, process_contents_as_markdown, combined_import))
                else:
                    named_exports.extend(brace_exports)
            
            # add regular exports
            for name in default_exports:
                COMPONENTS.append((name, process_contents_as_markdown, f'import {name} from "{import_path}"'))
            for name in named_exports:
                COMPONENTS.append((name, process_contents_as_markdown, f'import {{ {name} }} from "{import_path}"'))