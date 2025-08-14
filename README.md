# Tripos Guru

Interactive maths notes, including for Cambridge Mathematical Tripos courses.

[FAQ](https://tripos.guru/#faq)

## Static Site Generator (SSG)

The site uses a Python-based static site generator that converts Markdown content into Next.js pages.

### How it works

1. Reads Markdown files from `SOURCE_DIR` defined in `ssg/constants.py`
2. Processes them with [mistune](https://github.com/lepture/mistune) with custom handling of certain specially defined math tags, and custom templates
3. Generates Next.js pages in `next-app/app/`

### Running locally

First change the value of `ROOT_DIR` in `ssg/constants.py` to match the project location, then run:

```bash
cd ssg
pip install -r requirements.txt
python3 run.py
```

### Deployment

The SSG runs automatically during Vercel deployment via the build script. The `next-app/app/` directory is not tracked in git and is generated fresh on each deployment.

## Website Information

### Accessibility Features
- Scrollshadow indicators for overflowing maths equations
- Visual indicators for external links

## Content Authoring Information

### Markdown Custom Features

- Custom tags e.g. `<CopyButton>`
- Math tags: Defn, Thm, Lemma, Proof, Example, Spoiler
    - Each of these comes with defaults, can specify e.g. "unbolded", "unquoted"
    - Write text on same line as opening tag to make that sentence inline with the declaration text
- Ease-of-use tags: ProminentLink, DiscreetLink, MailLink, Badge, CopyButton, IncompleteMessage
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

### Content Naming

- Any folders starting with `[BOOK]` are marked as a book (for clarity nested books are not allowed)

- webpage title = sidebar filename; set to `pagename` frontmatter attribute if it exists, else set to a formatted version of the .md filename or foldername:
    - and -> & (case-insensitive)
    - replace dashes with spaces
    - case of filename/foldername is kept

- Slugs are lowercase version of the .md filename

- Optionally, add a README.md file inside of a folder (that isn't root) to give it a description

- Filenames should contain only alphanumeric or dashes, words separated by dashes. for more granular control, specify the `pagename` frontmatter attribute

## License

This project uses dual licensing:

- **Code**: All source code (Next.js app, Python SSG, components, etc.) is licensed under the [MIT License](LICENSE)
- **Content**: The educational content in `/source/` and all generated derived content displayed on the website is licensed under [CC BY 4.0](LICENSE-CONTENT)