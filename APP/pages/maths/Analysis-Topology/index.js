
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
                        theme='light'
                    />
                    <div className="relative w-full 2xl:max-w-[90%] flex h-full"> {/* whole thing (including large-screen left space filler, which is 10%) is max 90%; so 10% each side */}
    <Sidebar>

        <div className="overflow-y-auto w-full md:w-[calc(300px-2px)] h-full md:h-[calc(100vh-15rem)] break-all bg-background pt-3 md:pt-0 md:border-y-2 border-border-subtle">
            <div className="relative bottom-0">
                <ul className="dirtree mb-4 md:mb-0 group">
                    
                    

                    
                        <Link href="/maths">
                            <li className="w-full flex justify-start p-1 pl-2 hover:bg-background-hover">
                                <div className="flex items-center justify-center space-x-1 text-text-secondary text-base">
                                    <CiLogout size="19"/>
                                    <p>exit course</p>
                                </div>
                            </li>
                        </Link>
                    
                    
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" relDepth={ 0 } isSelected={ true } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="A-metric-spaces" href="/maths/Analysis-Topology/A-metric-spaces" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="1-basics" href="/maths/Analysis-Topology/A-metric-spaces/1-basics" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
            </div>
        </div>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        <div className="flex flex-wrap items-center space-x-2 mb-3">
            
                <div className="flex flex-wrap items-center align-middle space-x-1 mr-2">
                    
                        <span className="font-bold text-text-secondary">/</span>
                        <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths">maths</Link></p>
                    
                        <span className="font-bold text-text-secondary">/</span>
                        <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths/Analysis-Topology">Analysis-Topology</Link></p>
                    
                </div>
            

            
                
                <Badge color="indigo">pure-maths</Badge>
                
                <Badge color="red">TODO</Badge>
                
            
        </div>

        

        <div className="article mb-4">
            <h1 id="ib-analysis-and-topology">IB Analysis and Topology</h1>

<p>Notes I took for IB Analysis and Topology in the Cambridge Mathematical Tripos in 2024. Aimed at second-year undergraduates. Hopefully I can provide some inutition that might not be present elsewhere.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="course-prerequisites" className="underline underline-offset-2">Course Prerequisites</h2><Link href="#course-prerequisites" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology#course-prerequisites", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-orange">¶</Link></div>

<p>Surprisingly not much! Familiarity with mathematical symbols (e.g. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">here</DiscreetLink>). Basic set theory, for example definition and results regarding function preimage (e.g. preimage of union is union of preimages). Proofs of theorems from <ProminentLink href="https://gowers.wordpress.com/2014/01/11/introduction-to-cambridge-ia-analysis-i-2014/">IA Analysis I</ProminentLink> are good to know but not needed; the theorem statements themselves are useful but easily googleable.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="resources" className="underline underline-offset-2">Resources</h2><Link href="#resources" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology#resources", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-orange">¶</Link></div>

<ul>
<li><DiscreetLink href="https://www.dpmms.cam.ac.uk/study/IB/AnalysisandTopology/">Example sheet questions</DiscreetLink></li>
</ul>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="glossary-and-style" className="underline underline-offset-2">Glossary and Style</h2><Link href="#glossary-and-style" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology#glossary-and-style", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-orange">¶</Link></div>

<p>In definitions, the phrase that we define is highlighted like <span className="font-bold text-highlight-blue">this</span>.</p>

<p>Abbreviations:</p>

<ul>
<li>defn = definition</li>
<li>iff = if and only if</li>
<li><Latex>$\subset$</Latex> means the same thing as <Latex>$\subseteq$</Latex> (i.e. "is a subset of, could be equal to")</li>
</ul>

<p><IncompleteMessage/></p>
<br/><div className="border-t-[1px] border-border-strong pb-2"></div><div>

    <p className="italic pb-4">Contains 1 article</p>

    
    <Folder
        contents_by_date={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-subtle  py-2 px-3">
                <Link href="/maths/Analysis-Topology/A-metric-spaces">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">A-metric-spaces</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
     </>}
        contents_by_name={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-subtle  py-2 px-3">
                <Link href="/maths/Analysis-Topology/A-metric-spaces">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0 text-folder-icon"/>
                        
                        <p className="relative bottom-[1px]">A-metric-spaces</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
     </>}
    />

</div>
        </div>

        
            <div className="border-t-2 border-border-strong pt-4 flex items-top justify-between">
                
                    <div className="flex justify-start">
                        <Link href="/maths">
                            <div className="flex items-center justify-center space-x-1 text-text-secondary underline">
                                <RiArrowGoBackFill/>
                                <p>up a level</p>
                            </div>
                        </Link>
                    </div>
                

                
            </div>
        

    </article>

    
</div>
                </>
        </Layout>
    )
}
    