
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
import { GrArticle } from "react-icons/gr";
import { AiFillFolder } from 'react-icons/ai'
import Folder from '@/components/folder'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '@/components/copyButton'
import 'react-toastify/dist/ReactToastify.css'
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

        <div className="overflow-y-auto w-full md:w-[calc(300px-2px)] h-full md:h-[calc(100vh-15rem)] break-all bg-background pt-3 md:pt-0 md:border-y-2 border-border-subtle">
            <div className="relative bottom-0">
                <ul className="dirtree mb-4 md:mb-0 group">
                    
                    

                    
                    
                        
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
        </div>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        <div className="flex flex-wrap items-center space-x-2 mb-3">
            

            
        </div>

        

        <div className="article mb-4">
            <div className="space-y-6">

    <p className="mt-2 text-3xl font-bold break-all">
        <span className="text-highlight-pink">notes.</span>
        <span className="text-link">daniel</span>
        <span className="text-highlight-orange">c.</span>
        <span className="text-black">rocks</span>
    </p>

    <p>
        This site is a collection of notes I've written for various courses, as well as explanations of topics I find interesting. Everything is written in my own words - the primary goal is to be able to provide intuition for topics that were presented to me very abstractly.
        <br/>
        Most of the courses are from Part IB of the Mathematical Tripos. Each course is denoted as
            <span className="text-course-icon inline-flex mx-1"><FaBook/></span>
        in the sidebar, containing articles
            <span className="text-text-secondary inline-flex mx-1 relative top-[0.1rem]"><GrArticle/></span>
        and folders
            <span className="text-folder-icon inline-flex mx-1 relative top-[0.2rem]"><AiFillFolder size={20}/></span>
        which can be viewed once inside the course.
    </p>

    <p>
        For some of my favourite articles, check out the <DiscreetLink internal href="/maths/proving-FTA/3-bezout-egcd">magic box</DiscreetLink> or explore how to <DiscreetLink internal href="/maths/research/cube-tilings">tile a cube</DiscreetLink>.
        <br/>
        I also have a <ProminentLink href="https://danielc.rocks">homepage</ProminentLink> with links to my other projects.
    </p>

    <div className="pt-2 pb-4">

        <h1>Course List</h1>

        <div className="overflow-x-auto shadow-lg rounded-t-lg">
            <table className="notmdtable w-full text-left text-text-secondary whitespace-nowrap">
                <thead className="bg-layer">
                    <tr>
                        <th className="px-3 py-2">
                            Name
                        </th>
                        <th className="px-3 py-2">
                            Updated
                        </th>
                        <th className="px-3 py-2">
                            Tags
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr className="border-t-2">
                        <td className="px-3 py-2">
                            <ProminentLink href="/maths/Analysis-Topology" internal>
                            IB Analysis and Topology
                            </ProminentLink>
                        </td>
                        <td className="px-3 space-x-2 py-2 text-sm">
                            16 Dec 2024
                        </td>
                        <td className="px-3 space-x-2 py-2">
                            
                                <Badge color="indigo">pure-maths</Badge>
                            
                                <Badge color="red">TODO</Badge>
                            
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

    </div>

    <h1>About</h1>

    <div className="space-y-2">
        <div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="how-is-this-site-maintained" className="underline underline-offset-2">How is this site maintained?</h2><Link href="#how-is-this-site-maintained" onClick={() => copyToClipboard("https://notes.danielc.rocks/#how-is-this-site-maintained", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-orange">¶</Link></div>
        <p>If you're curious, here is the summary of my workflow:</p>
        <ul className="space-y-2">
            <li className="list-disc ml-8">
                I use <ProminentLink href="https://nextjs.org/">Next.js</ProminentLink> as the framework, with styling from <DiscreetLink href="https://tailwindcss.com/">Tailwind</DiscreetLink>. The web app is hosted on <DiscreetLink href="https://vercel.com/">Vercel</DiscreetLink>.
            </li>
            <li className="list-disc ml-8">
                A private Github repository contains a master folder with all the content, written in markdown. When I want to update the website, I edit the files in the master folder, using <ProminentLink href="https://inkscape.org/">Inkscape</ProminentLink> for math diagrams.
            </li>
            <li className="list-disc ml-8">
                I wrote a static site generator in Python to generate html out of the markdown in the master folder. It injects into <ProminentLink href="https://palletsprojects.com/p/jinja/">Jinja2</ProminentLink> templates, then wraps it in boilerplate <DiscreetLink href="https://react.dev/">React</DiscreetLink>. I configured a VSCode shortcut to seamlessly run this and preview content.
            </li>
            <li className="list-disc ml-8">
                When I am happy with my changes, I push them to the repository. I added a hook to automatically deploy the public site whenever this happens.
            </li>
        </ul>
    </div>

    <p>Feel free to <MailLink>email me</MailLink>. Enjoy exploring!</p>

    <h1>Changelog</h1>
    <div>
        <div className="changelog">
            <h2>19/12/24</h2>

<h3>Changed</h3>

<ul>
<li>primary purpose of the site is now storage of course notes; blog moved elsewhere</li>
<li>consistent styling of theorems, defns, examples etc</li>
<li>revamp to light theme for easier readability: inspiration taken from <DiscreetLink href="https://github.com/jdanielmourao/obsidian-sanctum/tree/main">Sanctum theme for Obsidian</DiscreetLink></li>
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
        
            <li className="folder-li w-full flex justify-between items-center border-border-subtle border-b-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">20 Dec 2024</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-subtle border-b-2 py-2 px-3">
                <Link href="/writeups">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">writeups</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">08 Jun 2024</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-subtle  py-2 px-3">
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
        
            <li className="folder-li w-full flex justify-between items-center border-border-subtle border-b-2 py-2 px-3">
                <Link href="/comp-sci">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">comp-sci</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-subtle border-b-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">20 Dec 2024</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-border-subtle  py-2 px-3">
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
    