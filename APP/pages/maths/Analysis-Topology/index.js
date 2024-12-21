
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


export default function AnalysisTopology () {
    return (
        <Layout>
            <Head>
                <title>Analysis Topology | Daniel C</title>
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

        <div className="border-elevated overflow-y-auto w-full md:w-[calc(300px-2px)] h-full md:h-auto md:max-h-[calc(100vh-15rem)] break-all">
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
                    
                    
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" isRoot={ true } isSelected={ true } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="A-metric-spaces" href="/maths/Analysis-Topology/A-metric-spaces" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="1-basics" href="/maths/Analysis-Topology/A-metric-spaces/1-basics" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="example-sheets" href="/maths/Analysis-Topology/example-sheets" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
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
        

        

        

        <div className="article mb-4">
            <h1 id="ib-analysis-and-topology">IB Analysis and Topology</h1>

<p>Notes I took for IB Analysis and Topology in the Cambridge Mathematical Tripos in 2024. I was inspired to make these notes because a lot of the lectured material was taught badly...</p>

<h2 id="course-prerequisites" className="group flex">Course Prerequisites&nbsp;<Link href="#course-prerequisites" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology#course-prerequisites", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Surprisingly not much! Familiarity with mathematical symbols (e.g. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">here</DiscreetLink>). Proofs of theorems from <ProminentLink href="https://gowers.wordpress.com/2014/01/11/introduction-to-cambridge-ia-analysis-i-2014/">IA Analysis I</ProminentLink> are good to know but not needed; the theorem statements themselves are useful but easily googleable.</p>

<h2 id="glossary-and-style" className="group flex">Glossary and Style&nbsp;<Link href="#glossary-and-style" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology#glossary-and-style", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>In definitions, the phrase that we define is highlighted like <strong>this</strong>.</p>

<p>Abbreviations:</p>

<ul>
<li>defn = definition</li>
<li>iff = if and only if</li>
<li><Latex>$\subset$</Latex> means the same thing as <Latex>$\subseteq$</Latex></li>
</ul>

<p><IncompleteMessage/></p>
<br/><div className="border-t-[1px] border-elevated pb-2"></div><div>

    <p className="italic pb-4">Contains 2 articles</p>

    
    <Folder
        contents_by_date={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/Analysis-Topology/example-sheets">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle className="shrink-0"/>
                        
                        <p className="relative bottom-[1px]">example-sheets</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">20 Dec 2024</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/Analysis-Topology/A-metric-spaces">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">A-metric-spaces</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
     </>}
        contents_by_name={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/Analysis-Topology/A-metric-spaces">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">A-metric-spaces</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/Analysis-Topology/example-sheets">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle className="shrink-0"/>
                        
                        <p className="relative bottom-[1px]">example-sheets</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">20 Dec 2024</p>
            </li>
        
     </>}
    />

</div>
        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths">
                    <div className="flex items-center justify-center space-x-1 text-primary">
                        <RiArrowGoBackFill/>
                        <p>up a level</p>
                    </div>
                </Link>
            </div>
        

    </article>

    
</div>
                </>
        </Layout>
    )
}
    