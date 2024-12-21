
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
                    
                    
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" isRoot={ true } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="A-metric-spaces" href="/maths/Analysis-Topology/A-metric-spaces" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="1-basics" href="/maths/Analysis-Topology/A-metric-spaces/1-basics" type="file" isRoot={false} isSelected={ true } />
                        
                    
                                    
                                
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
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/maths/Analysis-Topology/A-metric-spaces">A-metric-spaces</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-4">Last updated 16 Dec 2024</p>
        

        

        <div className="article mb-4">
            <h1 id="1-basics">1 - Basics</h1>

<p>We want to formalise our intuition about distances in the real world, and try to generalise.</p>

<h2 id="11-definitions-and-examples" className="group flex">1.1 Definitions and Examples&nbsp;<Link href="#11-definitions-and-examples" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/Analysis-Topology/A-metric-spaces/1-basics#11-definitions-and-examples", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Defn name="metric space">

<p>Let <Latex>$X$</Latex> be any set.</p>

<p>A <strong>metric</strong> on <Latex>$X$</Latex> is a function <Latex>$d:X \times X \rightarrow \mathbb&#123;R&#125;$</Latex> such that:</p>

<ul>
<li><Latex>$d(x,y) \geq 0$</Latex>, equality iff <Latex>$x=y$</Latex> ("positive semi-definite")</li>
<li><Latex>$d(x,y) = d(y,x)$</Latex> ("symmetric")</li>
<li><Latex>$d(x,y) + d(y,z) \geq d(x,z)$</Latex> ("triangle inequality")</li>
</ul>

</Defn>

<p><IncompleteMessage/></p>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths/Analysis-Topology/A-metric-spaces">
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
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#11-definitions-and-examples" className="text-link [@media(hover:hover)]:hover:underline">1.1 Definitions and Examples</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    