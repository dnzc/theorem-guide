SITE_ID = 'tripos'
DOMAIN = 'tripos.guru'

# terminology (displayed to users)
TERMINOLOGY = {
    'book_singular': 'course',
    'book_plural': 'courses',
    'book_icon_class': 'text-course-icon'
}

HERO = {
    'title': 'The prettiest maths notes on the internet',
    'subtitle': 'Read colourful, interactive lecture notes I wrote for courses from the Cambridge Mathematical Tripos, full of extra intuition and explanation.',
    'cta_text': 'Go to my favourite course',
    'cta_link': '/part-ib/analysis-and-topology'
}

FAQ = [
    {
        'question': 'How does the sidebar work?',
        'answer': f'''It's just like a filetree! Each folder is expandable and denoted with the icon
                    <span className="text-folder-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]">
                        <AiFillFolder size={{20}} />
                    </span>
                    , containing {TERMINOLOGY['book_plural']}
                    <span className="{TERMINOLOGY['book_icon_class']} inline-flex mx-1 align-middle relative bottom-[0.1rem]">
                        <FaBook size={{18}} />
                    </span>
                    and articles
                    <span className="text-article-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]">
                        <GrArticle size={{20}} />
                    </span>
                    . {TERMINOLOGY['book_plural'].title()} represent a chunk of teachable content (e.g. a Tripos course), and they further contain more folders and articles, which can be viewed once inside the {TERMINOLOGY['book_singular']}. (Don't worry, there are no nested {TERMINOLOGY['book_plural']}!)'''
    },
    {
        'question': 'What makes these notes better than <DiscreetLink href="https://dec41.user.srcf.net/notes/">Dexter</DiscreetLink>, <DiscreetLink href="https://zeramorphic.uk/maths.html">zeramorphic</DiscreetLink> or <DiscreetLink href="https://danielnaylor.uk/notes/">Daniel Naylor</DiscreetLink>?',
        'answer': '''After my fair share of browsing tripos notes online, I realized that everything's written in LaTeX. Booo, boring! I like <em>colours</em> and <em>diagrams!</em> If you want bog-standard soulless LaTeX notes though, this is not the website for you :)'''
    },
    {
        'question': 'How do you write these lecture notes? <ProminentLink href="https://github.com/dnzc/notes">[github]</ProminentLink>',
        'answer': '''<ul className="space-y-2">
                        <li>
                            The Github repository contains all of the content, written in markdown. I use <ProminentLink href="https://inkscape.org/">Inkscape</ProminentLink> to draw diagrams.
                        </li>
                        <li>
                            I configured a VSCode shortcut to compile the markdown files into webpages. When I am happy with my changes, I push them to the main branch of the repository, and the public site automatically redeploys.
                            
                        </li>
                    </ul>
                    <p className="my-2">For a more technical overview:</p>
                    <ul className="space-y-2">
                        <li>
                            I use <ProminentLink href="https://nextjs.org/">Next.js</ProminentLink> as the framework, with styling from <DiscreetLink href="https://tailwindcss.com/">Tailwind</DiscreetLink>. The web app is hosted on <DiscreetLink href="https://vercel.com/">Vercel</DiscreetLink>.
                        </li>
                        <li>
                            I wrote a static site generator (SSG) in Python to transform my lecture note files (.md) into Next.js webpages, and extract metadata. The SSG works by first running <DiscreetLink href="https://pypi.org/project/markdown2/">markdown2</DiscreetLink>, then injecting the result into my own <ProminentLink href="https://palletsprojects.com/p/jinja/">Jinja2</ProminentLink> templates, then wrapping in boilerplate <DiscreetLink href="https://react.dev/">React</DiscreetLink>. This is a great opportunity to shove a diagram in your face:
                            <div className="flex justify-center">
                                <AUTOSVG src='root/workflow' width='250' height='100'/>
                            </div>
                        </li>
                    </ul>
                    If you're interested, all the code can be found in the Github repository.'''
    },
    {
        'question': 'What are some cool features this site has?',
        'answer': '''<ul>
                        <li>
                            Colour schemes (select in sidebar) - persistent via local storage
                        </li>
                        <li>
                            Maths diagrams that match the colour scheme
                        </li>
                        <li>
                            Keyboard shortcuts to toggle filetree and to search
                        </li>
                        <li>
                            Spoilers like this one
                            <Spoiler>
                                Hello there
                            </Spoiler>
                        </li>
                        <li>
                            Copy buttons like this one <CopyButton text="You just lost the game."/>
                        </li>
                    </ul>'''
    },
    {
        'question': 'Hey, this website looks familiar...',
        'answer': '''You're thinking of your other favourite website, <DiscreetLink href="https://notes.danielc.rocks">notes.danielc.rocks</DiscreetLink>! I generate both sites using the same code <ProminentLink href="https://github.com/dnzc/notes">[github]</ProminentLink>. This leads to consistent, maths-first styling across both sites.'''
    }
]