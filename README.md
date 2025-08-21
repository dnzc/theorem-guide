# tripos-guru

This repository contains the source content for [tripos.guru](https://tripos.guru), which contains mathematical insights and my Tripos course notes.

## Static Site Generator (SSG)

This project uses a Python-based static site generator that converts Markdown content into Next.js pages.

### Architecture

- Python codebase in `ssg/` generates both sites
- Markdown content stored in `source/`
- Standalone Next.js app in `next-app/`, containing the generated content pages

### How it works

1. Reads Markdown files from site-specific source directories
2. Processes them with [mistune](https://github.com/lepture/mistune) with custom math tags and jinja templates
3. Generates Next.js pages in respective deployment directories

### Running locally

```bash
cd ssg
pip install -r requirements.txt
python3 run.py

# Start development server for either site
cd next-app && npm run dev
```


### Vercel Deployment

A Vercel project listens to this repository and has `next-app/` as the project root. The SSG runs automatically during deployment, via the configuration in `next-app/vercel.json`. `next-app/app` is not tracked in git - instead it is built fresh on each deployment.

## Content Authoring Information

### Markdown Custom Features

- Custom tags e.g. `<CopyButton>`
- Math tags: Defn, Thm, Lemma, Proof, Example, KeyIdea, Warning, Quiz (look for examples in source to see how they are used)
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