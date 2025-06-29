import SvgWorkflow from '@/components/AUTOSVG/root/svgWorkflow'

import Head from 'next/head'
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
import { ImPilcrow } from 'react-icons/im'
import { Thm, Lemma, Proof, Defn, Example } from '@/components/math'


export default function TriposGuru () {
    return (
        <>
            <Head>
                <title>Tripos Guru</title>
            </Head>
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
                                
                                    
                                        
                        
                            <Accordion title="comp-sci" href="/comp-sci" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="binary-search" href="/comp-sci/binary-search" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="maths" href="/maths" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Analysis-and-Topology" href="/maths/Analysis-and-Topology" type="course" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="lagrange-multipliers" href="/maths/lagrange-multipliers" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="proving-FTA" href="/maths/proving-FTA" type="folder" relDepth={ 2 } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="1-integer-axioms" href="/maths/proving-FTA/1-integer-axioms" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="2-division-algo" href="/maths/proving-FTA/2-division-algo" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="3-bezout-egcd" href="/maths/proving-FTA/3-bezout-egcd" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="4-euclid" href="/maths/proving-FTA/4-euclid" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="5-fta" href="/maths/proving-FTA/5-fta" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="research" href="/maths/research" type="folder" relDepth={ 2 } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="writeups" href="/writeups" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="terminal" href="/writeups/terminal" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
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
            <section class="hero">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hero-text mr-auto place-self-center lg:col-span-7 md:ml-4">
            <p class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-Hero-text">The prettiest maths notes on the internet</p>
            <p class="max-w-2xl mb-4 md:text-lg lg:text-xl">Read colourful, interactive lecture notes I wrote for courses from the Cambridge Mathematical Tripos, full of extra intuition and explanation.</p>
            <p class="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl font-bold text-text-emph"> 11 articles, 14892 words</p>
            <Link href="/maths/Analysis-and-Topology" class="inline-flex items-center justify-center px-5 py-3 text-lg text-center font-bold rounded-lg bg-button hover:bg-button-hover focus:ring-4 focus:ring-gray-100">
                Go to my favourite course
            </Link> 
        </div>
        <div class="hero-image hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div class="w-[300px] h-[300px] bg-cover"/>
        </div>                
    </div>
</section>

<div class="pt-6 space-y-6">

    <div class="pt-2 pb-4">

        <h1>Course List</h1>

        <ul class="space-y-6">
            
                <li>
                    <div class="flex items-center">
                        <h2 class="text-xl">
                            <ProminentLink href="/maths/Analysis-and-Topology" internal>
                            IB Analysis and Topology
                            </ProminentLink>
                        </h2>
                        <p class="hidden xs:flex flex-wrap gap-x-2 gap-y-1 pl-2 align-middle h-fit">
                            
                                <span class="h-min">
                                <Badge color="indigo">pure-maths</Badge>
                                </span>
                            
                                <span class="h-min">
                                <Badge color="red">TODO</Badge>
                                </span>
                            
                        </p>
                    </div>
                    <p class="text-sm text-text-secondary pt-2">
                        Last updated
                        16 Dec 2024
                    </p>
                </li>
            
        </ul>

    </div>

    <h1>Frequently Asked Questions</h1>

    <div class="flex flex-col divide-y divide-border-strong">
        <details class="faq-question">
            <summary>How does the sidebar work?</summary>
            <div>
                It's just like a filetree! Each folder is expandable and denoted with the icon
                <span class="text-folder-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]">
                    <AiFillFolder size={20} />
                </span>
                , containing courses
                <span class="text-course-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]">
                    <FaBook size={18} />
                </span>
                and articles
                <span class="text-article-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]">
                    <GrArticle size={20} />
                </span>
                . Courses themselves contain more folders and articles, which can be viewed once inside the course. You can also use keyboard shortcuts to toggle the sidebar / to search.
            </div>
        </details>
        <details class="faq-question">
            <summary>
                Why are there some articles that <em>aren't</em> part of a course?
            </summary>
            <div>
                They're basically blog entries - I wanted a place to put explanations of topics I find interesting.
            </div>
        </details>
        <details class="faq-question">
            <summary>
                What makes these notes better than <DiscreetLink href="https://dec41.user.srcf.net/notes/">Dexter</DiscreetLink>, <DiscreetLink href="https://zeramorphic.uk/maths.html">zeramorphic</DiscreetLink> or <DiscreetLink href="https://danielnaylor.uk/notes/">Daniel Naylor</DiscreetLink>?
            </summary>
            <div>
                After my fair share of browsing tripos notes online, I realized that everything's written in LaTeX. Booo, boring! I like <em>colours</em> and <em>diagrams!</em> If you want bog-standard soulless LaTeX notes though, this is not the website for you :)
            </div>
        </details>
        <details class="faq-question">
            <summary>How do you write these lecture notes?</summary>
            <div>
                <ul class="space-y-2">
                    <li>
                        A private Github repository contains all of the content, written in markdown. I use <ProminentLink href="https://inkscape.org/">Inkscape</ProminentLink> to draw diagrams.
                    </li>
                    <li>
                        I configured a VSCode shortcut to compile the markdown files into webpages and preview the result.
                    </li>
                    <li>
                        When I am happy with my changes, I push them to the repository, and the public site automatically redeploys (I added a hook).
                    </li>
                </ul>
            </div>
        </details>
        <details class="faq-question">
            <summary>How did you make this website?</summary>
            <div>
                <ul class="space-y-2">
                    <li>
                        I use <ProminentLink href="https://nextjs.org/">Next.js</ProminentLink> as the framework, with styling from <DiscreetLink href="https://tailwindcss.com/">Tailwind</DiscreetLink>. The web app is hosted on <DiscreetLink href="https://vercel.com/">Vercel</DiscreetLink>.
                    </li>
                    <li>
                        I wrote a static site generator (SSG) in Python to transform my lecture note files (.md) into Next.js pages, and extract metadata. The SSG works by first running <DiscreetLink href="https://pypi.org/project/markdown2/">markdown2</DiscreetLink>, then injecting the result into my own <ProminentLink href="https://palletsprojects.com/p/jinja/">Jinja2</ProminentLink> templates, then wrapping in boilerplate <DiscreetLink href="https://react.dev/">React</DiscreetLink>. This is a great opportunity to shove a diagram in your face:
                        <div class="flex justify-center mt-2">
                            <SvgWorkflow width={ 250 } height={ 100 }/>
                        </div>
                        The SSG is about 400 lines of spaghetti code - <ProminentLink href="https://teal-yeot-92b7a7.netlify.app/">here's</ProminentLink> a "little" sample.
                    </li>
                </ul>


            </div>
        </details>
        <details class="faq-question">
            <summary>What are some cool features this site has?</summary>
            <div>
                <ul>
                    <li>
                        Colour schemes (select in sidebar) - persistent via local storage
                    </li>
                    <li>
                        Math diagrams that match the colour scheme
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
                        Copy buttons like this one <CopyButton text="Hello there"/>
                    </li>
                </ul>
            </div>
        </details>
    </div>

    <p>
        Have a new topic idea? Want me to add a new feature / colour scheme? Feel free to <MailLink>email me</MailLink> or visit my <DiscreetLink href="https://danielc.rocks">homepage</DiscreetLink>.
        <br/>
        Enjoy exploring!
    </p>

    <p class="text-sm text-text-secondary">Hero image on sanctum theme <DiscreetLink href="https://inkscape.org/~Inkonic/%E2%98%85inkscapes-path-artists-blossom">"Artist's blossom"</DiscreetLink> by <DiscreetLink href="https://inkscape.org/~Inkonic/">Inkonic</DiscreetLink> (modified here) is licensed under <DiscreetLink href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</DiscreetLink>.</p>
    <h1>Changelog</h1>
    <div>
        <div class="changelog">
            <h2>28/06/25</h2>

<h3>Added</h3>

<ul>
<li>selectable colour schemes:
<ul>
<li><DiscreetLink href="https://github.com/jdanielmourao/obsidian-sanctum/tree/main">sanctum</DiscreetLink> (adapted)</li>
<li><DiscreetLink href="https://catppuccin.com/palette/">catppuccin</DiscreetLink></li>
<li><DiscreetLink href="https://github.com/morhetz/gruvbox?tab=readme-ov-file#palette">gruvbox</DiscreetLink> (my favourite :D)</li>
</ul></li>
</ul>

<h3>Changed</h3>

<ul>
<li>Homepage revamp:
<ul>
<li>added hero section (different for different themes)</li>
<li>About section -&gt; FAQ section</li>
</ul></li>
<li>changed domain to tripos.guru</li>
</ul>

<h2>19/12/24</h2>

<h3>Changed</h3>

<ul>
<li>changed domain blog.danielc.rocks -&gt; notes.danielc.rocks; primary purpose of the site is now storage of course notes</li>
<li>consistent styling of theorems, defns, examples etc</li>
<li>replace dark theme with light theme for easier readability</li>
</ul>

<h2>08/07/24</h2>

<h3>Added</h3>

<ul>
<li>highlighting in search results</li>
<li>copy buttons for code</li>
<li>"copy article plaintext" option</li>
</ul>

<h2>12/06/24</h2>

<h3>Added</h3>

<ul>
<li>this changelog</li>
<li>list of recent articles</li>
<li>search and filetree modals</li>
<li>keyboard shortcuts</li>
</ul>

<h3>Changed</h3>

<ul>
<li>sidebar now toggleable</li>
<li>site more responsively designed and mobile-friendly</li>
</ul>

<h2>11/07/23</h2>

<h3>Added</h3>

<ul>
<li>this website (domain blog.danielc.rocks)</li>
</ul>

        </div>
    </div>

</div><br/><div className="border-t-[1px] border-border-strong pb-2"></div><div>

    <p className="italic pb-4">Contains 12 articles</p>

    
    <Folder
        contents_by_date={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">20 Dec 2024</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/writeups">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">writeups</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">08 Jun 2024</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/comp-sci">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">comp-sci</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">27 Jul 2023</p>
            </li>
        
     </>}
        contents_by_name={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/comp-sci">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">comp-sci</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">20 Dec 2024</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/writeups">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">writeups</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">08 Jun 2024</p>
            </li>
        
     </>}
    />

</div>
        </div>

        

    </article>

    
</div>
                </>
        </>
    )
}
    