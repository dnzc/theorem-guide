
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

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '@/components/copyButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Thm, Lemma, Prop, Proof, Defn, Example } from '@/components/math'


export default function ExampleSheets () {
    return (
        <Layout>
            <Head>
                <title>Example Sheets | Daniel C</title>
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
                    
                    

                    
                        <li className="max-w-fit">
                            <Link href="/maths">
                                <div className="flex items-center justify-center space-x-1 text-elevated text-base">
                                    <RiArrowGoBackFill/>
                                    <p>exit course</p>
                                </div>
                            </Link>
                        </li>
                    
                    
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" isRoot={ true } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="A-metric-spaces" href="/maths/Analysis-Topology/A-metric-spaces" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="1-basics" href="/maths/Analysis-Topology/A-metric-spaces/1-basics" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="example-sheets" href="/maths/Analysis-Topology/example-sheets" type="file" isRoot={false} isSelected={ true } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
            </div>
        </div>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/maths">maths</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/maths/Analysis-Topology">Analysis-Topology</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-4">Last updated 20 Dec 2024</p>
        

        

        <div className="article mb-4">
            <h1 id="example-sheet-questions">Example Sheet Questions</h1>

<p><IncompleteMessage/></p>

<h2 id="example-sheet-1" className="group flex">Example Sheet 1&nbsp;<Link href="#example-sheet-1" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology/example-sheets#example-sheet-1", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<h2 id="example-sheet-2" className="group flex">Example Sheet 2&nbsp;<Link href="#example-sheet-2" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology/example-sheets#example-sheet-2", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<h2 id="example-sheet-3" className="group flex">Example Sheet 3&nbsp;<Link href="#example-sheet-3" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology/example-sheets#example-sheet-3", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<h2 id="example-sheet-4" className="group flex">Example Sheet 4&nbsp;<Link href="#example-sheet-4" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology/example-sheets#example-sheet-4", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths/Analysis-Topology">
                    <div className="flex items-center justify-center space-x-1 text-primary">
                        <RiArrowGoBackFill/>
                        <p>up a level</p>
                    </div>
                </Link>
            </div>
        

    </article>

    
        <nav className="hidden xl:flex w-[300px] xl:shrink-0 xl:justify-start h-100% min-h-screen border-l-2 border-elevated px-6 py-4">
            <div className="fixed">
                <h1 className="font-bold text-xl">In this Article</h1>
                <ul className="text-elevated">
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#example-sheet-1" className="text-link [@media(hover:hover)]:hover:underline">Example Sheet 1</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#example-sheet-2" className="text-link [@media(hover:hover)]:hover:underline">Example Sheet 2</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#example-sheet-3" className="text-link [@media(hover:hover)]:hover:underline">Example Sheet 3</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#example-sheet-4" className="text-link [@media(hover:hover)]:hover:underline">Example Sheet 4</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    