
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'
import { ToastContainer } from 'react-toastify'
import { FaChevronRight, FaSearch } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { CiLogout } from 'react-icons/ci'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '@/components/copyButton'
import 'react-toastify/dist/ReactToastify.css'
import { Thm, Lemma, Prop, Proof, Defn, Example } from '@/components/math'


export default function Basics () {
    return (
        <Layout>
            <Head>
                <title>Basics | Daniel C</title>
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
                    
                    
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" relDepth={ 0 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="A-metric-spaces" href="/maths/Analysis-Topology/A-metric-spaces" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="1-basics" href="/maths/Analysis-Topology/A-metric-spaces/1-basics" type="file" relDepth={ 2 } isSelected={ true } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
            </div>
        </div>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="font-bold text-text-secondary">/</span>
                    <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths">maths</Link></p>
                
                    <span className="font-bold text-text-secondary">/</span>
                    <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths/Analysis-Topology">Analysis-Topology</Link></p>
                
                    <span className="font-bold text-text-secondary">/</span>
                    <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths/Analysis-Topology/A-metric-spaces">A-metric-spaces</Link></p>
                
            </div>
        

        
            <p className="text-text-secondary mb-2">Created 16 Dec 2024</p>
        

        <div className="article mb-4">
            <h1 id="1-basics">§1 Basics</h1>

<p>We want to formalise our intuition about distances in the real world, and try to generalise.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-2 pb-2 mt-4"><h2 id="11-definitions-and-examples" className="underline underline-offset-2">1.1 Definitions and Examples</h2><Link href="#11-definitions-and-examples" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology/A-metric-spaces/1-basics#11-definitions-and-examples", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-subtle">¶</Link></div>

<Defn name="metric space">

<p>Let <Latex>$X$</Latex> be any set.</p>

<p>A <strong>metric</strong> on <Latex>$X$</Latex> is a function <Latex>$d:X \times X \rightarrow \mathbb&#123;R&#125;$</Latex> such that:</p>

<ul>
<li><Latex>$d(x,y) \geq 0$</Latex>, equality iff <Latex>$x=y$</Latex> ("positive semi-definite")</li>
<li><Latex>$d(x,y) = d(y,x)$</Latex> ("symmetric")</li>
<li><Latex>$d(x,y) + d(y,z) \geq d(x,z)$</Latex> ("triangle inequality")</li>
</ul>

<p>We say <Latex>$(X,d)$</Latex> is a <strong>metric space</strong>.</p>

</Defn>

<p><IncompleteMessage/></p>

        </div>

        
            <div className="border-t-2 border-border-strong pt-4 flex items-top justify-between">
                
                    <div className="flex justify-start">
                        <Link href="/maths/Analysis-Topology/A-metric-spaces">
                            <div className="flex items-center justify-center space-x-1 text-text-secondary underline">
                                <RiArrowGoBackFill/>
                                <p>up a level</p>
                            </div>
                        </Link>
                    </div>
                

                
            </div>
        

    </article>

    
        <nav className="hidden xl:flex w-[300px] xl:shrink-0 xl:justify-start h-100% min-h-screen border-l-2 border-border-subtle px-6 py-4">
            <div className="fixed text-text-secondary">
                <h1 className="text-lg">Table of contents</h1>
                <ul>
                    
                        <li className="pt-1 font-bold"><Link href="#11-definitions-and-examples" className="text-link [@media(hover:hover)]:hover:underline">1.1 Definitions and Examples</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    