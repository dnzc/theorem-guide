
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


export default function CNATs () {
    return (
        <Layout>
            <Head>
                <title>CNATs | Daniel C</title>
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
                    
                    

                    
                    
                        
                            <Accordion title="root" href="" type="folder" isRoot={ true } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
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
                        
                    
                                    
                                        
                        
                            <Accordion title="research" href="/maths/research" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" type="file" isRoot={false} isSelected={ true } />
                        
                    
                                    
                                        
                        
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

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/maths">maths</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/maths/research">research</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-4">Last updated 14 Jul 2023</p>
        

        
            <div className="mb-4">
                <CopyButton text="View on arXiV Not much on this page, I just needed somewhere to note down a seemingly magical but random conjecture that we felt wasn&#x27;t relevant enough to make it into the final paper. Let $h(n,k)$ be the number of Prufer sequences ending in $k$ that represent a tree whose adjacency matrix is a valid CNAT of size $n$. Then: $$h(n,k) = \begin&#123;cases&#125; \frac&#123;(n-1)!&#125;&#123;k(k+1)&#125; &amp; \text&#123;if &#125; 1\leq k &lt; n-1\\0 &amp; \text&#123;if &#125; k=n-1\\(n-2)! &amp; \text&#123;if &#125; k=n \end&#123;cases&#125;$$ We were only able to prove the last two cases.">Copy article plaintext</CopyButton>
            </div>
        

        <div className="article mb-4">
            <h1 id="associated-permutations-of-complete-non-ambiguous-trees">Associated Permutations of Complete Non-Ambiguous Trees</h1>

<p><ProminentLink href="https://arxiv.org/abs/2210.11117">View on arXiV</ProminentLink></p>

<p>Not much on this page, I just needed somewhere to note down a seemingly magical but random conjecture that we felt wasn't relevant enough to make it into the final paper.</p>

<Thm type="Conjecture">

<p>Let <Latex>$h(n,k)$</Latex> be the number of Prufer sequences ending in <Latex>$k$</Latex> that represent a tree whose adjacency matrix is a valid CNAT of size <Latex>$n$</Latex>. Then:</p>

<span className="block overflow-auto latex-display-wrapper"><Latex>$$h(n,k) = \begin&#123;cases&#125; \frac&#123;(n-1)!&#125;&#123;k(k+1)&#125; &amp; \text&#123;if &#125; 1\leq k &lt; n-1\\0 &amp; \text&#123;if &#125; k=n-1\\(n-2)! &amp; \text&#123;if &#125; k=n \end&#123;cases&#125;$$</Latex></span>

<p>We were only able to prove the last two cases.</p>

</Thm>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths/research">
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
    