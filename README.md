# Notes

This repository contains the source content for two websites generated using a shared static site generator:

- **[tripos.guru](https://tripos.guru)** - Cambridge Mathematical Tripos course notes
- **[notes.danielc.rocks](https://notes.danielc.rocks)** - Mathematical insights and explanations

## Static Site Generator (SSG)

The sites use a Python-based static site generator that converts Markdown content into Next.js pages with site-specific configuration.

### Architecture

- **Shared SSG**: Single Python codebase in `ssg/` generates both sites
- **Site-specific content**: Content stored in `sources/tripos/` and `sources/danielc/`
- **Site-specific configs**: `ssg/configs/tripos.py` and `ssg/configs/danielc.py`
- **Deployments**: Standalone generated Next.js apps in `deployments/tripos/` and `deployments/danielc/`

### How it works

1. Reads Markdown files from site-specific source directories
2. Processes them with [mistune](https://github.com/lepture/mistune) with custom math tags and jinja templates
3. Applies site-specific configuration (terminology, themes, hero content)
4. Generates Next.js pages in respective deployment directories

### Running locally

```bash
cd ssg
pip install -r requirements.txt

# Build both sites
python3 build_all.py

# Or build individual sites
python3 run.py tripos
python3 run.py danielc

# Start development server for either site
cd deployments/tripos && npm run dev
cd deployments/danielc && npm run dev
```

### Site Configuration

Each site has its own configuration in `ssg/configs/`:

- **Site identity**: Domain, site ID, hero content
- **Terminology**: Custom naming (e.g., "books" vs "courses")  
- **FAQ content**: Site-specific questions and answers
- **Icon classes**: Theme-specific styling

### Deployment

Each site deploys independently:
- **tripos.guru**: Vercel deployment from `deployments/tripos/`
- **notes.danielc.rocks**: Vercel deployment from `deployments/danielc/`

The SSG runs automatically during deployment. Generated directories are not tracked in git and are built fresh on each deployment. The folders in `deployments/` are completely auto-generated, including the vercel.json files (these are included solely for the vercel build process, which runs `ssg/run.py` then `npm run build`, but it unfortunately needs the boilerplate files like package.json to deterine what stuff to install before running the ssg, therefore we still need to track these)

## Website Information

### Accessibility Features
- Scrollshadow indicators for overflowing maths equations
- Visual indicators for external links

## Content Authoring Information

### Markdown Custom Features

- Custom tags e.g. `<CopyButton>`
- Math tags: Defn, Thm, Lemma, Proof, Example, KeyIdea, Warning
    - Each of these comes with defaults, can specify e.g. "unbolded", "unquoted"
    - Write text on same line as opening tag to make that sentence inline with the declaration text
- Ease-of-use components: Spoiler, ProminentLink, DiscreetLink, MailLink, Badge, CopyButton, IncompleteMessage
- AUTOSVG tag: put instead of img/Image tag to be converted to inline svg with dynamic theme colours using svgr
    - All fonts in the svg should be Fira Code (automatically converts to match page font) (Fira Code chosen as default since it's the widest)
    - The following colours are replaced:
        - black   #000000 -> Svg-text
        - 50%gray #808080 -> Svg-gray
        - blue    #0000ff -> Svg-text-highlight
        - green   #00ff00 -> Svg-line-highlight-1
        - cyan    #00ffff -> Svg-line-highlight-2
        - red     #ff0000 -> Svg-fill-highlight-1
        - pink    #ff00ff -> Svg-fill-highlight-2
        - yellow  #ffff00 -> Svg-fill-highlight-3
- Frontmatter for metadata
- Mark a code block with ":::COPIABLE" on the previous line, to add a copy button to the block

### Content Organization

- **Site-specific content**: Store content in `sources/tripos/` or `sources/danielc/`
- **Books**: Folders starting with `[BOOK]` are marked as books/courses (nested books not allowed)
- **Book homepages**: Add `README.md` to book folders to appear on site homepage with metadata
- **Webpage titles**: Use `pagename` frontmatter attribute, or auto-generated from filename:
    - "and" → "&" (case-insensitive)  
    - Dashes → spaces
    - Original case preserved
- **URL slugs**: Lowercase version of filename
- **Folder descriptions**: Optional `README.md` files provide folder overviews
- **Naming convention**: Alphanumeric + dashes only, words separated by dashes

## Changelog

### 18/08/25

#### Changed

- The content is now split across two separate sites, the SSG works for both

### 28/06/25

#### Added

- Selectable colour schemes:
  - [sanctum](https://github.com/jdanielmourao/obsidian-sanctum/tree/main) (adapted)
  - [catppuccin](https://catppuccin.com/palette/)
  - [gruvbox](https://github.com/morhetz/gruvbox?tab=readme-ov-file#palette)

#### Changed

- Homepage revamp:
  - New "hero" section (different for different themes)
  - "About" section -> FAQ section
- New domain, tripos.guru

### 19/12/24

#### Changed

- New domain notes.danielc.rocks; primary purpose of the site is now storage of course notes
- Consistent styling of theorems, defns, examples etc
- Replace dark theme with light theme for easier readability

### 08/07/24

#### Added

- Highlighting in search results
- Copy buttons for code
- Button to copy article plaintext

### 12/06/24

#### Added

- This changelog
- List of recent articles
- Search and filetree modals
- Keyboard shortcuts

#### Changed

- Sidebar now toggleable
- Site more responsively designed and mobile-friendly

### 11/07/23

#### Added

- This website

## License

This project uses dual licensing:

- **Code**: All source code (Next.js app, Python SSG, components, etc.) is licensed under the [MIT License](LICENSE)
- **Content**: The educational content in `/source/` and all generated derived content displayed on the website is licensed under [CC BY 4.0](LICENSE-CONTENT)