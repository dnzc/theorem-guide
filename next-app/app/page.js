import SvgWorkflow from '@/components/AUTOSVG/root/svgWorkflow'

import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'
import Badge from '@/components/badge'
import { ToastContainer } from 'react-toastify'
import { FaChevronRight, FaSearch } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { CiLogout } from 'react-icons/ci'

import { FaBook } from 'react-icons/fa'
import { GrArticle } from 'react-icons/gr'
import { AiFillFolder } from 'react-icons/ai'
import Folder from '@/components/folder'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '@/components/copyButton'
import 'react-toastify/dist/ReactToastify.css'
import Pilcrow from '@/components/pilcrow'
import { Thm, Lemma, Proof, Defn, Example } from '@/components/math'




export default function Page () {
    return (
        <>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
                theme='light'
            />
            <div className="relative w-full 2xl:max-w-[90%] flex h-full"> {/* whole thing (including large-screen left space filler, which is 10%) is max 90%; so 10% each side */}
    <Sidebar>

        
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] min-h-10 h-[70vh] md:h-[calc(100vh-12rem)] break-all bg-background pt-3 md:pt-0 md:border-y-2 border-border-subtle">
                <ul className="scrollshadow-vertical dirtree mb-4 md:mb-0 group">
                    
                    

                    
                    
                        
                            <Accordion title="root" href="" type="folder" relDepth={ 0 } isSelected={ true } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Daniel's Notes" href="/dnzc" type="course" relDepth={ 1 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="maths" href="/maths" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Analysis & Topology" href="/maths/analysis-and-topology" type="course" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
        </div>

    

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        <div className="flex flex-wrap items-center space-x-2 mb-3">
            

            
        </div>

        

        <div className="article mb-4">
            <section className="hero">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hero-text mr-auto place-self-center lg:col-span-7 md:ml-4">
            <p className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-Hero-text">The prettiest maths notes on the internet</p>
            <p className="max-w-2xl mb-4 md:text-lg lg:text-xl">Read colourful, interactive lecture notes I wrote for courses from the Cambridge Mathematical Tripos, full of extra intuition and explanation.</p>
            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl font-bold text-text-emph"> 11 articles, 14977 words</p>
            <Link href="/maths/analysis-and-topology" className="inline-flex items-center justify-center px-5 py-3 text-lg text-center font-bold rounded-lg bg-button hover:bg-button-hover focus:ring-4 focus:ring-gray-100">
                Go to my favourite course
            </Link> 
        </div>
        <div className="hero-image hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div className="w-[300px] h-[300px] bg-cover"/>
        </div>                
    </div>
</section>

<div className="pt-6 space-y-6">

    <div className="pt-2 pb-4">

        <h1 className="group flex space-x-1 items-baseline"><span id="course-list">Course List</span><Pilcrow href="#course-list" text="https://tripos.guru/#course-list"/></h1>

        <ul className="space-y-6 list-disc">
            
                <li>
                    <div className="flex items-center">
                        <p className="text-xl">
                            <ProminentLink href="/maths/analysis-and-topology" internal>
                            IB Analysis and Topology
                            </ProminentLink>
                        </p>
                        <p className="hidden xs:flex flex-wrap gap-x-2 gap-y-1 pl-2 align-middle h-fit">
                            
                                <span className="h-min">
                                <Badge color="indigo">pure-maths</Badge>
                                </span>
                            
                                <span className="h-min">
                                <Badge color="red">TODO</Badge>
                                </span>
                            
                        </p>
                    </div>
                    <p className="text-sm text-text-secondary pt-2">
                        Last updated
                        16 Dec 2024
                    </p>
                </li>
            
                <li>
                    <div className="flex items-center">
                        <p className="text-xl">
                            <ProminentLink href="//dnzc" internal>
                            Daniel's Notes
                            </ProminentLink>
                        </p>
                        <p className="hidden xs:flex flex-wrap gap-x-2 gap-y-1 pl-2 align-middle h-fit">
                            
                                <span className="h-min">
                                <Badge color="indigo">blog</Badge>
                                </span>
                            
                        </p>
                    </div>
                    <p className="text-sm text-text-secondary pt-2">
                        Last updated
                        12 Aug 2025
                    </p>
                </li>
            
        </ul>

    </div>

    <h1 className="group flex space-x-1 items-baseline"><span id="faq">Frequently Asked Questions</span><Pilcrow href="#faq" text="https://tripos.guru/#faq"/></h1>

    <div className="flex flex-col divide-y divide-border-strong">
        <details className="faq-question">
            <summary>How does the sidebar work?</summary>
            <div>
                It's just like a filetree! Each folder is expandable and denoted with the icon
                <span className="text-folder-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]">
                    <AiFillFolder size={20} />
                </span>
                , containing courses
                <span className="text-course-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]">
                    <FaBook size={18} />
                </span>
                and articles
                <span className="text-article-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]">
                    <GrArticle size={20} />
                </span>
                . Courses themselves contain more folders and articles, which can be viewed once inside the course. You can also use keyboard shortcuts to toggle the sidebar / to search.
            </div>
        </details>
        <details className="faq-question">
            <summary>
                What makes these notes better than <DiscreetLink href="https://dec41.user.srcf.net/notes/">Dexter</DiscreetLink>, <DiscreetLink href="https://zeramorphic.uk/maths.html">zeramorphic</DiscreetLink> or <DiscreetLink href="https://danielnaylor.uk/notes/">Daniel Naylor</DiscreetLink>?
            </summary>
            <div>
                After my fair share of browsing tripos notes online, I realized that everything's written in LaTeX. Booo, boring! I like <em>colours</em> and <em>diagrams!</em> If you want bog-standard soulless LaTeX notes though, this is not the website for you :)
            </div>
        </details>
        <details className="faq-question">
            <summary>How do you write these lecture notes? <ProminentLink href="https://github.com/dnzc/tripos-guru">[github]</ProminentLink></summary>
            <div>
                <ul className="space-y-2">
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
                            <SvgWorkflow width={ 250 } height={ 100 }/>
                        </div>
                    </li>
                </ul>
                If you're interested, all the code can be found in the Github repository.
            </div>
        </details>
        <details className="faq-question">
            <summary>
                What is "Daniel's Notes"?
            </summary>
            <div>
                That's my personal collection of explanations and blog posts, separate from actual Tripos course content. All the other courses contain Tripos notes, but this one is a place for my own content.
            </div>
        </details>
        <details className="faq-question">
            <summary>What are some cool features this site has?</summary>
            <div>
                <ul>
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
                </ul>
            </div>
        </details>
        <details className="faq-question">
            <summary>
                How can I contact you?
            </summary>
            <div>
                Have a new topic idea? Want me to add a new feature / colour scheme? Feel free to <MailLink>email me</MailLink> or visit my <DiscreetLink href="https://danielc.rocks">homepage</DiscreetLink>.
            </div>
        </details>

    </div>

    <h1 className="group flex space-x-1 items-baseline"><span id="changelog">Changelog</span><Pilcrow href="#changelog" text="https://tripos.guru/#changelog"/></h1>
    <div>
        <div className="changelog">
            <h2>11/08/25</h2>
<h3>Changed</h3>
<ul>
<li>Project now <DiscreetLink href="https://github.com/dnzc/tripos-guru">open source</DiscreetLink></li>
</ul>
<h2>28/06/25</h2>
<h3>Added</h3>
<ul>
<li>Selectable colour schemes:<ul>
<li><DiscreetLink href="https://github.com/jdanielmourao/obsidian-sanctum/tree/main">sanctum</DiscreetLink> (adapted)</li>
<li><DiscreetLink href="https://catppuccin.com/palette/">catppuccin</DiscreetLink></li>
<li><DiscreetLink href="https://github.com/morhetz/gruvbox?tab=readme-ov-file#palette">gruvbox</DiscreetLink> (my favourite :D)</li>
</ul>
</li>
</ul>
<h3>Changed</h3>
<ul>
<li>Homepage revamp:<ul>
<li>New &quot;hero&quot; section (different for different themes)</li>
<li>&quot;About&quot; section -&gt; FAQ section</li>
</ul>
</li>
<li>New domain, tripos.guru</li>
</ul>
<h2>19/12/24</h2>
<h3>Changed</h3>
<ul>
<li>New domain notes.danielc.rocks; primary purpose of the site is now storage of course notes</li>
<li>Consistent styling of theorems, defns, examples etc</li>
<li>Replace dark theme with light theme for easier readability</li>
</ul>
<h2>08/07/24</h2>
<h3>Added</h3>
<ul>
<li>Highlighting in search results</li>
<li>Copy buttons for code</li>
<li>Button to copy article plaintext</li>
</ul>
<h2>12/06/24</h2>
<h3>Added</h3>
<ul>
<li>This changelog</li>
<li>List of recent articles</li>
<li>Search and filetree modals</li>
<li>Keyboard shortcuts</li>
</ul>
<h3>Changed</h3>
<ul>
<li>Sidebar now toggleable</li>
<li>Site more responsively designed and mobile-friendly</li>
</ul>
<h2>11/07/23</h2>
<h3>Added</h3>
<ul>
<li>This website</li>
</ul>

        </div>
    </div>

    <p className="text-sm text-text-secondary">Hero image on sanctum theme <DiscreetLink href="https://inkscape.org/~Inkonic/%E2%98%85inkscapes-path-artists-blossom">"Artist's blossom"</DiscreetLink> by Inkonic (modified here) is licensed under <DiscreetLink href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</DiscreetLink>.</p>

</div><br/><div className="border-t-[1px] border-border-strong pb-2"></div><div>

    <p className="italic pb-4">Contains 14 articles</p>

    
    <Folder
        contents_by_date={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/dnzc">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <FaBook className="shrink-0 text-course-icon"/>
                        
                        <p className="relative bottom-[1px]">Daniel's Notes</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">12 Aug 2025</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
     </>}
        contents_by_name={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/dnzc">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <FaBook className="shrink-0 text-course-icon"/>
                        
                        <p className="relative bottom-[1px]">Daniel's Notes</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">12 Aug 2025</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
     </>}
    />

</div>
        </div>

        

        <div className="border-t-2 border-border-subtle pt-4 mt-8 text-sm text-text-secondary">
            <p>This educational content is licensed under <DiscreetLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</DiscreetLink>. You may share and adapt with attribution.</p>
        </div>

    </article>

    
</div>
        </>
    )
}
    