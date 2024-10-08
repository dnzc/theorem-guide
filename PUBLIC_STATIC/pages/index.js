
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'

import { FaChevronRight, FaSearch, FaBook } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import { MdArticle } from 'react-icons/md'
import Folder from '@/components/folder'

import { copyToClipboard, CopyButton } from '@/components/copyButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Blog () {
    return (
        <Layout>
            <Head>
                <title>Blog | Daniel C</title>
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

        <ul className="dirtree px-4 pt-1 border-elevated scrollbar-thin scrollbar-thumb-elevated scrollbar-track-body overflow-y-scroll w-full md:w-[calc(300px-2px)] h-full md:h-auto md:max-h-[calc(100vh-15rem)] break-all">
            <li className="relative bottom-0 pl-4">
                <div className="text-secondary mb-0.5">
                    <Link href="/" className="flex items-center space-x-1.5 max-w-fit">
                        <FaBook/>
                        <span>root</span>
                    </Link>
                </div>
                <ul className="mb-4 md:mb-0">
                    
                        
                            <Accordion title="comp-sci" href="/comp-sci" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="algorithms" href="/comp-sci/algorithms" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="binary-search" href="/comp-sci/algorithms/binary-search" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="web-dev" href="/comp-sci/web-dev" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="story-of-the-site" href="/comp-sci/web-dev/story-of-the-site" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="maths" href="/maths" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="number-theory" href="/maths/number-theory" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="FTA-proof" href="/maths/number-theory/FTA-proof" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="1-integer-axioms" href="/maths/number-theory/FTA-proof/1-integer-axioms" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="2-division-algo" href="/maths/number-theory/FTA-proof/2-division-algo" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="3-bezout-egcd" href="/maths/number-theory/FTA-proof/3-bezout-egcd" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="4-euclid" href="/maths/number-theory/FTA-proof/4-euclid" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="5-fta" href="/maths/number-theory/FTA-proof/5-fta" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="olympiad" href="/maths/olympiad" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="techniques" href="/maths/olympiad/techniques" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/techniques/lagrange-multipliers" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="research" href="/maths/research" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="writeups" href="/writeups" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="terminal" href="/writeups/terminal" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                </ul>
            </li>
        </ul>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        

        

        

        <div className="article mb-4">
            <div className="space-y-6 border-b-[1px] border-elevated mb-6 pb-8">

    <div className="text-xs font-mono leading-[0.8rem] flex flex-col">
        <div className="hidden sm:block">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;</span></span><span className="text-green-800">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span>&nbsp;<span className="font-bold text-green-400">&amp;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400"><span className="text-green-800">&amp;&amp;&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">&amp;</span></span><span className="text-yellow-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400"><span className="font-bold text-yellow-800">&amp;</span></span></span><span className="text-yellow-400">&amp;</span><span className="font-bold"><span className="font-bold text-yellow-800">&amp;</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;<span className="text-yellow-400">&amp;&amp;<span className="text-green-800">&amp;&amp;</span></span></span></span><span className="font-bold"><span className="font-bold text-yellow-800">\</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;<span className="text-yellow-400">\<span className="text-green-800">&amp;&amp;</span></span></span>&nbsp;&nbsp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;<span className="font-bold text-yellow-800">/</span></span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span>&nbsp;<span className="text-green-800">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold text-green-400">&amp;</span><span className="text-green-800">&amp;&amp;&amp;&amp;<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;&amp;&amp;<span className="font-bold text-green-400">&amp;<span className="text-yellow-400">/<span className="text-green-800">&amp;</span></span></span></span></span></span><span className="font-bold text-green-400">&amp;<span className="font-bold text-green-400">&amp;</span></span><span className="text-green-800">&amp;</span><br/><span className="text-green-800">&amp;</span>&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span>&nbsp;<span className="font-bold text-green-400">&amp;&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400"><span className="text-green-800">&amp;&amp;&amp;<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;&amp;&amp;</span></span></span></span><span className="font-bold text-green-400">&amp;</span><span className="text-yellow-400">~</span><span className="font-bold"><span className="font-bold text-yellow-800">\<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;&amp;</span></span></span></span></span><span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-yellow-800">/</span></span><span className="text-green-800">&amp;&amp;<span className="font-bold text-green-400">&amp;</span></span>&nbsp;<span className="font-bold text-green-400">&amp;</span><br/>&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">&amp;&amp;</span></span>&nbsp;<span className="text-yellow-400">&amp;</span>&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">\_</span><span className="font-bold"><span className="font-bold text-yellow-800">|</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-yellow-800"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">|\<span className="text-green-800">&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">\/|\</span></span><span className="text-yellow-400">/<span className="text-green-800">&amp;&amp;&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">|</span></span><span className="text-yellow-400">/~</span><br/>&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span><span className="text-green-800">&amp;&amp;</span><span className="font-bold text-green-400">&amp;<span className="font-bold text-green-400">&amp;</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">\__</span><span className="font-bold"><span className="font-bold text-yellow-800">\__</span></span><span className="text-yellow-400">\<span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">\<span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">|/~</span></span><span className="text-green-800">&amp;&amp;&amp;</span>&nbsp;<span className="text-yellow-400">|/</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-yellow-800">/</span></span><span className="text-yellow-400">|//</span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;<span className="font-bold text-yellow-800">|/</span></span></span></span></span><span className="font-bold text-green-400">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">\|</span></span><span className="text-yellow-400">|/</span><span className="font-bold"><span className="font-bold text-yellow-800">~</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">|/</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">|/</span></span><span className="text-yellow-400">\</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">\|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400"><span className="text-green-800">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;&amp;</span></span><span className="text-yellow-400">&amp;<span className="font-bold text-green-400">&amp;</span></span>&nbsp;<span className="font-bold"><span className="text-green-800"><span className="font-bold">&amp;<br/></span></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">|//</span><span className="font-bold"><span className="font-bold text-yellow-800">|\</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/~</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">_&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400"><span className="font-bold text-yellow-800">\|</span></span></span><span className="text-yellow-400">//|\</span>&nbsp;&nbsp;<span className="text-yellow-400">|/_</span><span className="font-bold"><span className="font-bold text-yellow-800">__/</span></span><span className="text-yellow-400">_/</span><span className="font-bold"><span className="font-bold text-green-400">&amp;<span className="font-bold text-yellow-800">_/</span></span></span>&nbsp;<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;</span></span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400"><span className="text-green-800"><span className="font-bold text-green-400"><span className="text-yellow-400">\</span></span></span></span><span className="font-bold"><span className="font-bold text-yellow-800">/~\</span></span><span className="text-yellow-400">|</span>&nbsp;&nbsp;<span className="text-yellow-400">\|</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">/~</span></span>&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">|/</span></span><span className="text-yellow-400">/|</span><span className="font-bold"><span className="font-bold text-yellow-800">/~</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/|/</span><span className="font-bold"><span className="font-bold text-yellow-800">/~</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/</span><span className="font-bold"><span className="font-bold text-yellow-800">|/~</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/~</span><span className="font-bold"><span className="font-bold text-yellow-800">/</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">//</span></span><span className="text-yellow-400">/~</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-yellow-800">./~~~\.</span>
        </div>

        <div className="hidden md:block text-primary font-bold">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;__|&nbsp;|&nbsp;__&nbsp;_&nbsp;_&nbsp;__&nbsp;&#40;_&#41;&nbsp;___|&nbsp;|&nbsp;___&nbsp;&nbsp;&nbsp;_&nbsp;__&nbsp;___&nbsp;&nbsp;&nbsp;___|&nbsp;|&nbsp;_____&nbsp;<br/>&nbsp;/&nbsp;_`&nbsp;|/&nbsp;_`&nbsp;|&nbsp;'_&nbsp;\|&nbsp;|/&nbsp;_&nbsp;\&nbsp;|/&nbsp;__|&nbsp;|&nbsp;'__/&nbsp;_&nbsp;\&nbsp;/&nbsp;__|&nbsp;|/&nbsp;/&nbsp;__|<br/>|&nbsp;&#40;_|&nbsp;|&nbsp;&#40;_|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;&nbsp;__/&nbsp;|&nbsp;&#40;__&nbsp;_|&nbsp;|&nbsp;|&nbsp;&#40;_&#41;&nbsp;|&nbsp;&#40;__|&nbsp;&nbsp;&nbsp;&lt;\__&nbsp;\<br/>&nbsp;\__,_|\__,_|_|&nbsp;|_|_|\___|_|\___&#40;_&#41;_|&nbsp;&nbsp;\___/&nbsp;\___|_|\_\___/
        </div>
    </div>

    <p className="block md:hidden text-3xl font-bold text-primary break-all">blog.danielc.rocks</p>

    <p>
        This site is a personal blog, as well as a collection of notes and explanations of topics I find interesting.
        <br/>
        It began as a summer project in July 2023.
    </p>
    <p>
        For some of my favourite articles, check out my <DiscreetLink href="https://blog.danielc.rocks/maths/number-theory/FTA-proof/1-integer-axioms">journey through arithmetic</DiscreetLink> or exploration of <DiscreetLink href="https://blog.danielc.rocks/maths/research/cube-tilings">cube tilings</DiscreetLink>.
        <br/>
        I also have a <ProminentLink href="https://danielc.rocks">homepage</ProminentLink> with links to my other projects.
    </p>

    <div className="pt-2 pb-4">

        <h1>Recent Articles</h1>

        <div className="space-y-5">

            
                <div>
                    <div className="flex flex-wrap items-center align-middle space-x-1 mb-0 text-base">
                        <p className="text-elevated mr-2">
                            
                                Coming soon
                            
                        </p>
                        
                            <p className="text-italic italic">comp-sci</p>
                            <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                            <p className="text-italic italic">web-dev</p>
                        
                    </div>
                    <p className="text-xl font-bold text-primary underline"><Link href="/comp-sci/web-dev/story-of-the-site" className="hover:underline">How I Created blog.danielc.rocks</Link></p>
                </div>
            
                <div>
                    <div className="flex flex-wrap items-center align-middle space-x-1 mb-0 text-base">
                        <p className="text-elevated mr-2">
                            
                                08 Jun 2024
                            
                        </p>
                        
                            <p className="text-italic italic">writeups</p>
                        
                    </div>
                    <p className="text-xl font-bold text-primary underline"><Link href="/writeups/terminal" className="hover:underline">Terminal Challenge</Link></p>
                </div>
            
                <div>
                    <div className="flex flex-wrap items-center align-middle space-x-1 mb-0 text-base">
                        <p className="text-elevated mr-2">
                            
                                27 Jul 2023
                            
                        </p>
                        
                            <p className="text-italic italic">comp-sci</p>
                            <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                            <p className="text-italic italic">algorithms</p>
                        
                    </div>
                    <p className="text-xl font-bold text-primary underline"><Link href="/comp-sci/algorithms/binary-search" className="hover:underline">Binary Search: an Intuitive Algorithm</Link></p>
                </div>
            
                <div>
                    <div className="flex flex-wrap items-center align-middle space-x-1 mb-0 text-base">
                        <p className="text-elevated mr-2">
                            
                                27 Jul 2023
                            
                        </p>
                        
                            <p className="text-italic italic">maths</p>
                            <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                            <p className="text-italic italic">...</p>
                            <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                            <p className="text-italic italic">FTA-proof</p>
                        
                    </div>
                    <p className="text-xl font-bold text-primary underline"><Link href="/maths/number-theory/FTA-proof/5-fta" className="hover:underline">The Fundamental Theorem of Arithmetic: Our Journey's End</Link></p>
                </div>
            

        </div>

    </div>

    <h1>About</h1>

    <div className="space-y-2">
        <h2 id="how-is-this-site-maintained" className="group flex">How is this site maintained?&nbsp;<Link href="#how-is-this-site-maintained" onClick={() => copyToClipboard("https://blog.danielc.rocks#how-is-this-site-maintained", true)} className="hidden group-hover:block text-primary">¶</Link></h2>
        <p>I wrote an in-depth explanation <ProminentLink href="/comp-sci/web-dev/story-of-the-site">here</ProminentLink>. If you're curious, here is the summary of my workflow:</p>
        <ul className="space-y-2">
            <li className="list-disc ml-8">
                I use <ProminentLink href="https://nextjs.org/">Next.js</ProminentLink> as the framework, with styling from <DiscreetLink href="https://tailwindcss.com/">Tailwind</DiscreetLink>. The web app is hosted publicly on <DiscreetLink href="https://vercel.com/">Vercel</DiscreetLink>.
            </li>
            <li className="list-disc ml-8">
                I maintain a private <DiscreetLink href="https://github.com/">Github</DiscreetLink> repository containing the master folder with all the contents of this blog, in <DiscreetLink href="https://www.markdownguide.org/getting-started/">Markdown</DiscreetLink> format. When I want to update the website, I edit the master folder with a markdown editor, using <ProminentLink href="https://inkscape.org/">Inkscape</ProminentLink> for math diagrams.
            </li>
            <li className="list-disc ml-8">
                I wrote a static site generator in <DiscreetLink href="https://www.python.org/">Python</DiscreetLink> to generate html content out of the markdown in the master folder. It injects into <ProminentLink href="https://palletsprojects.com/p/jinja/">Jinja2</ProminentLink> templates, then wraps it in boilerplate <DiscreetLink href="https://react.dev/">React</DiscreetLink>. I run the python script to preview new content.
            </li>
            <li className="list-disc ml-8">
                When I am happy with my changes, I push them to the github repository. I added a <ProminentLink href="https://vercel.com/docs/deployments/deploy-hooks">Vercel hook</ProminentLink> to automatically deploy the public site whenever this happens.
            </li>
        </ul>
    </div>

    <p>Feel free to <MailLink>email me</MailLink>. Enjoy exploring!</p>

    <p className="text-sm text-elevated">P.S. if you think the ascii tree is cool (not visible on small screens), I generated it using <DiscreetLink href="https://gitlab.com/jallbrit/cbonsai">cbonsai</DiscreetLink>, <DiscreetLink href="https://github.com/pixelb/scripts/blob/master/scripts/ansi2html.sh">ansi2html</DiscreetLink> and some regex!</p>

    <div>
        <h2 id="changelog" className="group flex">Changelog&nbsp;<Link href="#changelog" onClick={() => copyToClipboard("https://blog.danielc.rocks#changelog", true)} className="hidden group-hover:block text-primary">¶</Link></h2>
        <div className="changelog">
            <h2>30/09/24</h2>

<h3>Changed</h3>

<ul>
<li>Renamed wiki -&gt; blog</li>
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
<li>filetree now toggleable</li>
<li>site more responsively designed and mobile-friendly</li>
</ul>

<h2>11/07/23</h2>

<h3>Added</h3>

<ul>
<li>this website</li>
</ul>

        </div>
    </div>

</div>
    <p className="italic pb-4">Contains 0 articles and 3 folders</p>

    <Folder contents_by_date={
        <>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/comp-sci">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">comp-sci</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/writeups">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">writeups</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">08 Jun 2024</p>
            </li>
        
        </>
    } contents_by_name={
        <>
        
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
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/writeups">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">writeups</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">08 Jun 2024</p>
            </li>
        
        </>
    } />

        </div>

        

    </article>

    
</div>
                </>
        </Layout>
    )
}
    