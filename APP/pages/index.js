
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'

import { FaChevronRight, FaSearch } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import { FaBook } from 'react-icons/fa'
import { MdArticle } from 'react-icons/md'
import Folder from '@/components/folder'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '@/components/copyButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Thm, Lemma, Prop, Proof, Defn, Example } from '@/components/math'


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
                            theme='dark'
                        />
    
                    <div className="relative w-full 2xl:max-w-[90%] flex h-full"> {/* whole thing (including large-screen left space filler, which is 10%) is max 90%; so 10% each side */}
    <Sidebar>

        <div className="border-elevated scrollbar-thin scrollbar-thumb-elevated scrollbar-track-body overflow-y-scroll w-full md:w-[calc(300px-2px)] h-full md:h-auto md:max-h-[calc(100vh-15rem)] break-all">
            <div className="relative bottom-0 pl-4">
                <ul className="dirtree mb-4 md:mb-0">
                    
                    

                    
                    
                        
                            <Accordion title="root" href="" type="folder" isRoot={ true } isSelected={ true } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="comp-sci" href="/comp-sci" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="binary-search" href="/comp-sci/binary-search" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="maths" href="/maths" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="olympiad" href="/maths/olympiad" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/lagrange-multipliers" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="proving-FTA" href="/maths/proving-FTA" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="1-integer-axioms" href="/maths/proving-FTA/1-integer-axioms" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="2-division-algo" href="/maths/proving-FTA/2-division-algo" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="3-bezout-egcd" href="/maths/proving-FTA/3-bezout-egcd" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="4-euclid" href="/maths/proving-FTA/4-euclid" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="5-fta" href="/maths/proving-FTA/5-fta" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="research" href="/maths/research" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
            </div>
        </div>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        

        

        

        <div className="article mb-4">
            <div className="space-y-6">

    <div className="text-xs font-mono leading-[0.8rem] flex flex-col">
        <div className="hidden sm:block">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;</span></span><span className="text-green-800">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span>&nbsp;<span className="font-bold text-green-400">&amp;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400"><span className="text-green-800">&amp;&amp;&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">&amp;</span></span><span className="text-yellow-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400"><span className="font-bold text-yellow-800">&amp;</span></span></span><span className="text-yellow-400">&amp;</span><span className="font-bold"><span className="font-bold text-yellow-800">&amp;</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;<span className="text-yellow-400">&amp;&amp;<span className="text-green-800">&amp;&amp;</span></span></span></span><span className="font-bold"><span className="font-bold text-yellow-800">\</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;<span className="text-yellow-400">\<span className="text-green-800">&amp;&amp;</span></span></span>&nbsp;&nbsp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;<span className="font-bold text-yellow-800">/</span></span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span>&nbsp;<span className="text-green-800">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold text-green-400">&amp;</span><span className="text-green-800">&amp;&amp;&amp;&amp;<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;&amp;&amp;<span className="font-bold text-green-400">&amp;<span className="text-yellow-400">/<span className="text-green-800">&amp;</span></span></span></span></span></span><span className="font-bold text-green-400">&amp;<span className="font-bold text-green-400">&amp;</span></span><span className="text-green-800">&amp;</span><br/><span className="text-green-800">&amp;</span>&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span>&nbsp;<span className="font-bold text-green-400">&amp;&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400"><span className="text-green-800">&amp;&amp;&amp;<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;&amp;&amp;</span></span></span></span><span className="font-bold text-green-400">&amp;</span><span className="text-yellow-400">~</span><span className="font-bold"><span className="font-bold text-yellow-800">\<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;&amp;</span></span></span></span></span><span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-yellow-800">/</span></span><span className="text-green-800">&amp;&amp;<span className="font-bold text-green-400">&amp;</span></span>&nbsp;<span className="font-bold text-green-400">&amp;</span><br/>&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">&amp;&amp;</span></span>&nbsp;<span className="text-yellow-400">&amp;</span>&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">\_</span><span className="font-bold"><span className="font-bold text-yellow-800">|</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-yellow-800"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">|\<span className="text-green-800">&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">\/|\</span></span><span className="text-yellow-400">/<span className="text-green-800">&amp;&amp;&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">|</span></span><span className="text-yellow-400">/~</span><br/>&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span><span className="text-green-800">&amp;&amp;</span><span className="font-bold text-green-400">&amp;<span className="font-bold text-green-400">&amp;</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">\__</span><span className="font-bold"><span className="font-bold text-yellow-800">\__</span></span><span className="text-yellow-400">\<span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">\<span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">|/~</span></span><span className="text-green-800">&amp;&amp;&amp;</span>&nbsp;<span className="text-yellow-400">|/</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-yellow-800">/</span></span><span className="text-yellow-400">|//</span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;<span className="font-bold text-yellow-800">|/</span></span></span></span></span><span className="font-bold text-green-400">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">\|</span></span><span className="text-yellow-400">|/</span><span className="font-bold"><span className="font-bold text-yellow-800">~</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">|/</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">|/</span></span><span className="text-yellow-400">\</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">\|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400"><span className="text-green-800">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;&amp;</span></span><span className="text-yellow-400">&amp;<span className="font-bold text-green-400">&amp;</span></span>&nbsp;<span className="font-bold"><span className="text-green-800"><span className="font-bold">&amp;<br/></span></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">|//</span><span className="font-bold"><span className="font-bold text-yellow-800">|\</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/~</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">_&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400"><span className="font-bold text-yellow-800">\|</span></span></span><span className="text-yellow-400">//|\</span>&nbsp;&nbsp;<span className="text-yellow-400">|/_</span><span className="font-bold"><span className="font-bold text-yellow-800">__/</span></span><span className="text-yellow-400">_/</span><span className="font-bold"><span className="font-bold text-green-400">&amp;<span className="font-bold text-yellow-800">_/</span></span></span>&nbsp;<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;</span></span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400"><span className="text-green-800"><span className="font-bold text-green-400"><span className="text-yellow-400">\</span></span></span></span><span className="font-bold"><span className="font-bold text-yellow-800">/~\</span></span><span className="text-yellow-400">|</span>&nbsp;&nbsp;<span className="text-yellow-400">\|</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">/~</span></span>&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">|/</span></span><span className="text-yellow-400">/|</span><span className="font-bold"><span className="font-bold text-yellow-800">/~</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/|/</span><span className="font-bold"><span className="font-bold text-yellow-800">/~</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/</span><span className="font-bold"><span className="font-bold text-yellow-800">|/~</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/~</span><span className="font-bold"><span className="font-bold text-yellow-800">/</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">//</span></span><span className="text-yellow-400">/~</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-yellow-800">./~~~\.</span>
        </div>

        <div className="hidden md:block text-primary font-bold">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;__|&nbsp;|&nbsp;__&nbsp;_&nbsp;_&nbsp;__&nbsp;&#40;_&#41;&nbsp;___|&nbsp;|&nbsp;___&nbsp;&nbsp;&nbsp;_&nbsp;__&nbsp;___&nbsp;&nbsp;&nbsp;___|&nbsp;|&nbsp;_____&nbsp;<br/>&nbsp;/&nbsp;_`&nbsp;|/&nbsp;_`&nbsp;|&nbsp;'_&nbsp;\|&nbsp;|/&nbsp;_&nbsp;\&nbsp;|/&nbsp;__|&nbsp;|&nbsp;'__/&nbsp;_&nbsp;\&nbsp;/&nbsp;__|&nbsp;|/&nbsp;/&nbsp;__|<br/>|&nbsp;&#40;_|&nbsp;|&nbsp;&#40;_|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;&nbsp;__/&nbsp;|&nbsp;&#40;__&nbsp;_|&nbsp;|&nbsp;|&nbsp;&#40;_&#41;&nbsp;|&nbsp;&#40;__|&nbsp;&nbsp;&nbsp;&lt;\__&nbsp;\<br/>&nbsp;\__,_|\__,_|_|&nbsp;|_|_|\___|_|\___&#40;_&#41;_|&nbsp;&nbsp;\___/&nbsp;\___|_|\_\___/
        </div>
    </div>

    <p className="block md:hidden text-3xl font-bold text-primary break-all">notes.danielc.rocks</p>

    <p>
        This site is a collection of in-depth notes I've written for various courses, including some in Part IB of the Mathematical Tripos.
        <br/>
        I've also added intuition-based explanations of topics I find interesting.
        <br/>
        It began as a summer project in July 2023.
    </p>
    <p>
        For some of my favourite articles, check out the <DiscreetLink internal href="/maths/proving-FTA/3-bezout-egcd">magic box</DiscreetLink> or explore how to <DiscreetLink internal href="/maths/research/cube-tilings">tile a cube</DiscreetLink>.
        <br/>
        I also have a <ProminentLink href="https://danielc.rocks">homepage</ProminentLink> with links to my other projects.
    </p>

    <div className="pt-2 pb-4">

        <h1>Recent Articles</h1>

        <div className="space-y-5">

            
                <div>
                    <div className="flex flex-wrap items-center align-middle space-x-1 mb-0 text-base">
                        <p className="text-elevated mr-2">
                            
                                20 Dec 2024
                            
                        </p>
                        
                            <p className="text-italic italic">maths</p>
                            <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                            <p className="text-italic italic">olympiad</p>
                        
                    </div>
                    <p className="text-xl font-bold text-primary underline"><Link href="/maths/olympiad/lagrange-multipliers" className="hover:underline">Revenge of Analysis: Using Lagrange Multipliers to Destroy Inequalities</Link></p>
                </div>
            
                <div>
                    <div className="flex flex-wrap items-center align-middle space-x-1 mb-0 text-base">
                        <p className="text-elevated mr-2">
                            
                                20 Dec 2024
                            
                        </p>
                        
                            <p className="text-italic italic">maths</p>
                            <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                            <p className="text-italic italic">Analysis-Topology</p>
                        
                    </div>
                    <p className="text-xl font-bold text-primary underline"><Link href="/maths/Analysis-Topology/example-sheets" className="hover:underline">Example Sheet Questions</Link></p>
                </div>
            
                <div>
                    <div className="flex flex-wrap items-center align-middle space-x-1 mb-0 text-base">
                        <p className="text-elevated mr-2">
                            
                                19 Dec 2024
                            
                        </p>
                        
                            <p className="text-italic italic">maths</p>
                            <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                            <p className="text-italic italic">proving-FTA</p>
                        
                    </div>
                    <p className="text-xl font-bold text-primary underline"><Link href="/maths/proving-FTA/1-integer-axioms" className="hover:underline">Developing the Axioms</Link></p>
                </div>
            

        </div>

    </div>

    <h1>About</h1>

    <div className="space-y-2">
        <h2 id="how-is-this-site-maintained" className="group flex">How is this site maintained?&nbsp;<Link href="#how-is-this-site-maintained" onClick={() => copyToClipboard("https://notes.danielc.rocks/#how-is-this-site-maintained", true)} className="hidden group-hover:block text-primary">¶</Link></h2>
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
        <h2 id="features" className="group flex">Features&nbsp;<Link href="#features" onClick={() => copyToClipboard("https://notes.danielc.rocks/#features", true)} className="hidden group-hover:block text-primary">¶</Link></h2>
        <ul className="space-y-0">
            <li className="list-disc ml-8">
                Toggleable sidebar with keyboard shortcuts, containing collapsible filetree
            </li>
            <li className="list-disc ml-8">
                Fully indexed search with result highlighting
            </li>
            <li className="list-disc ml-8">
                Mobile-friendly
            </li>
            <li className="list-disc ml-8">
                Miscellaneous:
                <li className="list-disc ml-8">
                    Spoiler blocks
                </li>
                <li className="list-disc ml-8">
                    Copiable code blocks and articles (but not course notes :D)
                </li>
                <li className="list-disc ml-8">
                    Links to headings
                </li>
                <li className="list-disc ml-8">
                    LaTeX rendering; consistent presentation across all pages
                </li>
                <li className="list-disc ml-8">
                    Folder sorting
                </li>
            </li>
        </ul>
    </div>

    <p>Feel free to <MailLink>email me</MailLink>. Enjoy exploring!</p>

    <p className="text-sm text-elevated">P.S. if you think the ascii tree is cool (not visible on small screens), I generated it using <DiscreetLink href="https://gitlab.com/jallbrit/cbonsai">cbonsai</DiscreetLink>, <DiscreetLink href="https://github.com/pixelb/scripts/blob/master/scripts/ansi2html.sh">ansi2html</DiscreetLink> and some regex!</p>

    <h1>Changelog</h1>
    <div>
        <div className="changelog">
            <h2>19/12/24</h2>

<h3>Changed</h3>

<ul>
<li>primary purpose of the site is now storage of course notes; blog moved elsewhere</li>
<li>consistent styling of theorems, defns, examples etc</li>
<li>smaller text size</li>
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

</div><br/><div className="border-t-[1px] border-elevated pb-2"></div><div>

    <p className="italic pb-4">Contains 12 articles</p>

    
    <Folder
        contents_by_date={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">20 Dec 2024</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/comp-sci">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">comp-sci</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">27 Jul 2023</p>
            </li>
        
     </>}
        contents_by_name={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/comp-sci">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">comp-sci</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">20 Dec 2024</p>
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
    