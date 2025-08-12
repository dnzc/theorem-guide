# Tripos Guru

Interactive maths notes, including for Cambridge Mathematical Tripos courses.

[FAQ](https://tripos.guru/#faq)

## Website Information

### Accessibility Features
- scrollshadow indicators for overflowing maths equations
- visual indicators for external links

## Content Authoring Information

### Markdown Custom Features

- Custom tags e.g. `<CopyButton>`
- Math tags: Defn, Thm, Lemma, Proof, Example, Spoiler
    - each of these comes with defaults, can specify e.g. "unbolded", "unquoted"
    - write text on same line as opening tag to make that sentence inline with the declaration text
- Ease-of-use tags: ProminentLink, DiscreetLink, MailLink, Badge, CopyButton, IncompleteMessage
- AUTOSVG tag: put instead of img/Image tag to be converted to inline svg with dynamic theme colours using svgr
    - all fonts in the svg should be Fira Code (automatically converts to match page font) (Fira Code chosen as default since it's the widest)
    - the following colours are replaced:
        - black   #000000 -> Svg-text
        - 50%gray #808080 -> Svg-gray
        - blue    #0000ff -> Svg-text-highlight
        - green   #00ff00 -> Svg-line-highlight-1
        - cyan    #00ffff -> Svg-line-highlight-2
        - red     #ff0000 -> Svg-fill-highlight-1
        - pink    #ff00ff -> Svg-fill-highlight-2
        - yellow  #ffff00 -> Svg-fill-highlight-3
- frontmatter for metadata
- mark a code block with ":::COPIABLE" on the previous line, to add a copy button to the block

### Naming

- Any folders starting with `[COURSE]` are marked as a course

- webpage title = sidebar filename; set to `pagename` frontmatter attribute if it exists, else set to a formatted version of the .md filename or foldername:
    - and -> & (case-insensitive)
    - replace dashes with spaces
    - case of filename/foldername is kept

- slugs are lowercase version of the .md filename

- optionally, add a README.md file inside of a folder (that isn't root) to give it a description

- filenames should contain only alphanumeric or dashes, words separated by dashes. for more granular control, specify the `pagename` frontmatter attribute

Static markdown content is in `STATIC/content`. The static-site generator is in `ssg/`.

Like how the website looks? Maybe if I get enough stars, I can consider refactoring the horrible mess of an SSG into a pip package :P

## License

This project uses dual licensing:

- **Code**: All source code (Next.js app, Python SSG, components, etc.) is licensed under the [MIT License](LICENSE)
- **Content**: The folder `/STATIC/` contains educational content, and everything in `/STATIC/` is licensed under [CC BY 4.0](LICENSE-CONTENT)
