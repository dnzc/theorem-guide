import SvgWorkflow from '@/components/AUTOSVG/root/svgWorkflow'

import Layout from '@/components/layout'
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


export default function CourseNotes () {
    return (
        <Layout>
            <Head>
                <title>Course Notes | Daniel C</title>
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
                                
                                    
                                        
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                        
                        
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
            <div className="space-y-6">

    <p className="mt-2 text-3xl font-bold break-all text-articleh1">
        tripos.rocks
    </p>

    <p>
        This site is a collection of notes I've written for various courses, as well as some original notes explaining topics I find interesting. The primary goal is to be able to provide intuition for topics that were presented to me very abstractly.
        <br/>
        Most of the courses are from Part IB of the Mathematical Tripos. Each course is denoted as
            <span className="text-course-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]"><FaBook size={18}/></span>
        in the sidebar, containing articles 
            <span className="text-article-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]"><GrArticle size={20}/></span>
        and folders 
            <span className="text-folder-icon inline-flex mx-1 align-middle relative bottom-[0.1rem]"><AiFillFolder size={20}/></span>
        which can be viewed once inside the course.
    </p>

    <p>
        For some of my favourite articles, check out the <DiscreetLink internal href="/maths/proving-FTA/3-bezout-egcd">magic box</DiscreetLink> or explore how to <DiscreetLink internal href="/maths/research/cube-tilings">tile a cube</DiscreetLink>.
        <br/>
        I also have a <ProminentLink href="https://danielc.rocks">homepage</ProminentLink> with links to my other projects.
    </p>

    <div className="pt-2 pb-4">

        <h1>Course List</h1>

        <ul className="space-y-6">
            
                <li>
                    <div className="flex items-center">
                        <h2 className="text-xl">
                            <ProminentLink href="/maths/Analysis-Topology" internal>
                            IB Analysis and Topology
                            </ProminentLink>
                        </h2>
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
            
        </ul>

    </div>

    <h1>About</h1>

    <div className="space-y-2">
        <p>If you're curious, here is the summary of how I maintain the site, and what technologies I use:</p>
        <ul className="space-y-2">
            <li className="list-disc ml-8">
                I use <ProminentLink href="https://nextjs.org/">Next.js</ProminentLink> as the framework, with styling from <DiscreetLink href="https://tailwindcss.com/">Tailwind</DiscreetLink>. The web app is hosted on <DiscreetLink href="https://vercel.com/">Vercel</DiscreetLink>.
            </li>
            <li className="list-disc ml-8">
                A private Github repository contains a master folder with all the content, written in markdown. When I want to update the website, I edit the files in the master folder, using <ProminentLink href="https://inkscape.org/">Inkscape</ProminentLink> for math diagrams.
            </li>
            <li className="list-disc ml-8">
                I wrote a static site generator (SSG) in Python to transform the markdown in the master folder into Next.js pages, and extract metadata. The SSG works by first running <DiscreetLink href="https://pypi.org/project/markdown2/">markdown2</DiscreetLink>, then injecting the result into my own <ProminentLink href="https://palletsprojects.com/p/jinja/">Jinja2</ProminentLink> templates, then wrapping in boilerplate <DiscreetLink href="https://react.dev/">React</DiscreetLink>. Since I'm a maths purist:
                <div className="flex justify-center my-4">
                    <SvgWorkflow width={ 250 } height={ 100 }/>
                </div>
            </li>
            <li className="list-disc ml-8">
                I configured a VSCode shortcut to seamlessly run the SSG and preview content. When I am happy with my changes, I push them to the repository, and I added a hook to automatically deploy the public site whenever this happens.
            </li>
        </ul>
    </div>

    <p>Feel free to <MailLink>email me</MailLink>. Enjoy exploring!</p>

    <h1>Changelog</h1>
    <div>
        <div className="changelog">
            <h2>19/06/25</h2>

<h3>Added</h3>

<ul>
<li>selectable color schemes:
<ul>
<li><DiscreetLink href="https://github.com/jdanielmourao/obsidian-sanctum/tree/main">sanctum</DiscreetLink> (adapted)</li>
<li><DiscreetLink href="https://catppuccin.com/palette/">catppuccin</DiscreetLink></li>
<li><DiscreetLink href="https://github.com/morhetz/gruvbox?tab=readme-ov-file#palette">gruvbox</DiscreetLink> (my favourite :D)</li>
</ul></li>
</ul>

<h2>19/12/24</h2>

<h3>Changed</h3>

<ul>
<li>primary purpose of the site is now storage of course notes; blog moved elsewhere</li>
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
<li>this website</li>
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
        </Layout>
    )
}
    