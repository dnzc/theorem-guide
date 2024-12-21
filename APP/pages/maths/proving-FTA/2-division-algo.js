
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


export default function DivisionAlgo () {
    return (
        <Layout>
            <Head>
                <title>Division Algo | Daniel C</title>
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
                    
                    

                    
                    
                        
                            <Accordion title="root" href="" type="folder" isRoot={ true } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="comp-sci" href="/comp-sci" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="binary-search" href="/comp-sci/binary-search" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="components" href="/components" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="maths" href="/maths" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="olympiad" href="/maths/olympiad" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/lagrange-multipliers" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="proving-FTA" href="/maths/proving-FTA" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="1-integer-axioms" href="/maths/proving-FTA/1-integer-axioms" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="2-division-algo" href="/maths/proving-FTA/2-division-algo" type="file" isRoot={false} isSelected={ true } />
                        
                    
                                    
                                        
                        
                            <Accordion title="3-bezout-egcd" href="/maths/proving-FTA/3-bezout-egcd" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="4-euclid" href="/maths/proving-FTA/4-euclid" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="5-fta" href="/maths/proving-FTA/5-fta" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="research" href="/maths/research" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="writeups" href="/writeups" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="terminal" href="/writeups/terminal" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
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
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/maths/proving-FTA">proving-FTA</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-4">Last updated 25 Jul 2023</p>
        

        
            <div className="mb-4">
                <CopyButton text="tl;dr: A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored. This is part 2, where we use the rigorous foundation we developed in part 1 to establish the division algorithm. In general, the level of rigor will decrease as the parts go on, so that the reader doesn&#x27;t get bored to death. But it should be obvious how to fill out everything with complete rigor. Here is a glossary of math symbols. Back to School Children tend to get taught division as repeated subtraction - for example, 14 divided by 3 is 4 remainder 2, because: $14 - 3 = 11$ $11 - 3 = 8$ $8 - 3 = 5$ $5 - 3 = 2$ And we stop because if we subtract again, the remainder becomes negative. In particular, 2&lt;3, and in general the remainder is always less than the divisor, because if it was at least as big then we could always subtract off another copy. That would definitely be enough justification to any high schooler as to why the division algorithm works. But, how do we prove it from our axioms and lemmas that we&#x27;ve developed so far? How do we make infinite descent rigorous? Let&#x27;s first formalize the statement we want to prove: For any $a \in \mathbb&#123;Z&#125;, b \in \mathbb&#123;N&#125;$, there exist integers $q,r$ such that $a = bq + r$, and $0 \leq r \lt b$. Now... how do we attempt a proof? The key is the well-ordering principle that we introduced, stating that every non-empty subset of the naturals has a least element. To use this, we can consider the set of all possible remainders, i.e. all the possible numbers we can obtain by starting with $a$ and adding or subtracting $b$. Then we can consider those remainders that are natural, and take the smallest element. If it&#x27;s at least $b$, then we can subtract $b$ again to get a smaller element of the set, contradiction. In other words, &quot;choose the smallest possible remainder, if it&#x27;s at least $b$ then subtract $b$&quot;. Do you see how this is equivalent to the infinite descent argument? Let $a$ be a fixed integer and $b$ be a fixed natural. Consider the set: $$S = \&#123;n \in \mathbb&#123;N&#125; \mid n = a - bq + 1, q \in \mathbb&#123;Z&#125;\&#125;$$ Then S is a subset of the naturals. Furthermore, it is nonempty, because: if $a \in \mathbb&#123;N&#125;$ or $a=0$, then when $q=0$, $n = a - b \cdot 0 + 1 = a+1$ which is natural and so it is an element of S. if $-a \in \mathbb&#123;N&#125;$, then when $q = -a$, $n = a-b(-a) + 1$ $ = (-a)(b-1) + 1$ which is natural since $(-a), (b-1)$ are nonnegative, and so it is an element of S. By Trichotomy, we considered all cases, thus S is always non-empty. Hence by the well-ordering principle, S has a least element (say $e$), occuring when $q = q_0$, so that $e = a - bq_0+1$. $e \leq b$ Suppose not, we will show a contradiction. Then $e\gt b$, so $e-b \in \mathbb&#123;N&#125;$ (defn. &quot;$\gt$&quot;). But $e-b = (a-bq_0+1)-b$ $ = a-b(q_0+1)+1$, and so $e-b \in S$. But $e-b \lt e$, contradicting the minimality of $e$. Now at last, letting $r = e-1$, we have $a = bq_0 + r$ (since $e = a-bq_0+1$). Since $0 \lt e \leq b$, we have $0 \leq r \lt b$, which is what we wanted, and we are done. Note that I stopped writing the multiply symbol in between two letters, as per normal convention. Also, I stopped being as rigorous as in part 1 (for example writing &quot;$a-bq+1$&quot; instead of &quot;$(a-bq)+1$&quot; due to associativity), because I don&#x27;t think anyone would want to read such a long tedious proof. BUT, it should be clear (if not monotonous) how to fill out this proof into one as rigorous as in part 1. And that&#x27;s it! We&#x27;ve now proved the division algorithm. High schoolers would be very impressed (not). Can you come up with an analogous division algorithm for the complex numbers? Can you prove that it works? ↩">Copy article plaintext</CopyButton>
            </div>
        

        <div className="article mb-4">
            <h1 id="discovering-division">Discovering Division</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p>This is part 2, where we use the rigorous foundation we developed in part 1 to establish the <DiscreetLink href="https://brilliant.org/wiki/division-algorithm/">division algorithm</DiscreetLink>. In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.</p>

<h2 id="back-to-school" className="group flex">Back to School&nbsp;<Link href="#back-to-school" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/2-division-algo#back-to-school", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Children tend to get taught division as <em>repeated subtraction</em> - for example, 14 divided by 3 is 4 remainder 2, because:</p>

<p><Latex>$14 - 3 = 11$</Latex></p>

<p><Latex>$11 - 3 = 8$</Latex></p>

<p><Latex>$8 - 3 = 5$</Latex></p>

<p><Latex>$5 - 3 = 2$</Latex></p>

<p>And we stop because if we subtract again, the remainder becomes negative.
In particular, 2&lt;3, and in general the remainder is always less than the divisor, because if it was at least as big then we could always subtract off another copy.</p>

<p>That would definitely be enough justification to any high schooler as to why the division algorithm works.<sup className="footnote-ref" id="fnref-1"><a href="#fn-1">1</a></sup> But, how do we prove it from our axioms and lemmas that we've developed so far? How do we make infinite descent <em>rigorous</em>?</p>

<p>Let's first formalize the statement we want to prove:</p>

<Thm name="Divison Algorithm" outofline>

<p>For any <Latex>$a \in \mathbb&#123;Z&#125;, b \in \mathbb&#123;N&#125;$</Latex>, there exist integers <Latex>$q,r$</Latex> such that <Latex>$a = bq + r$</Latex>, and <Latex>$0 \leq r \lt b$</Latex>.</p>

</Thm>

<p>Now... how do we attempt a proof?</p>

<p>The key is the <em>well-ordering principle</em> that we introduced, stating that every non-empty subset of the naturals has a least element.</p>

<p>To use this, we can consider the set of all possible remainders, i.e. all the possible numbers we can obtain by starting with <Latex>$a$</Latex> and adding or subtracting <Latex>$b$</Latex>. Then we can consider those remainders that are natural, and take the smallest element. If it's at least <Latex>$b$</Latex>, then we can subtract <Latex>$b$</Latex> again to get a smaller element of the set, contradiction. In other words, "choose the smallest possible remainder, if it's at least <Latex>$b$</Latex> then subtract <Latex>$b$</Latex>". Do you see how this is equivalent to the infinite descent argument?</p>

<Proof name="of the Division Algorithm" outofline>

<p>Let <Latex>$a$</Latex> be a fixed integer and <Latex>$b$</Latex> be a fixed natural. Consider the set:</p>

<span className="block overflow-auto latex-display-wrapper"><Latex>$$S = \&#123;n \in \mathbb&#123;N&#125; \mid n = a - bq + 1, q \in \mathbb&#123;Z&#125;\&#125;$$</Latex></span>

<p>Then S is a subset of the naturals. Furthermore, it is nonempty, because:</p>

<ul>
<li><p>if <Latex>$a \in \mathbb&#123;N&#125;$</Latex> or <Latex>$a=0$</Latex>, then when <Latex>$q=0$</Latex>, <Latex>$n = a - b \cdot 0 + 1 = a+1$</Latex> which is natural and so it is an element of S.  </p></li>
<li><p>if <Latex>$-a \in \mathbb&#123;N&#125;$</Latex>, then when <Latex>$q = -a$</Latex>, <Latex>$n = a-b(-a) + 1$</Latex> <Latex>$ = (-a)(b-1) + 1$</Latex> which is natural since <Latex>$(-a), (b-1)$</Latex> are nonnegative, and so it is an element of S.</p></li>
</ul>

<p>By Trichotomy, we considered all cases, thus S is always non-empty.</p>

<p>Hence by the well-ordering principle, S has a least element (say <Latex>$e$</Latex>), occuring when <Latex>$q = q_0$</Latex>, so that <Latex>$e = a - bq_0+1$</Latex>.</p>

<Thm type="Claim" unquoted>

<p><Latex>$e \leq b$</Latex></p>

<Proof unquoted unbolded>

<p>Suppose not, we will show a contradiction.</p>

<p>Then <Latex>$e\gt b$</Latex>, so <Latex>$e-b \in \mathbb&#123;N&#125;$</Latex> (<strong>defn. "<Latex>$\gt$</Latex>"</strong>).</p>

<p>But <Latex>$e-b = (a-bq_0+1)-b$</Latex> <Latex>$ = a-b(q_0+1)+1$</Latex>, and so <Latex>$e-b \in S$</Latex>. But <Latex>$e-b \lt e$</Latex>, contradicting the minimality of <Latex>$e$</Latex>.</p>

</Proof>

</Thm>

<p>Now at last, letting <Latex>$r = e-1$</Latex>, we have <Latex>$a = bq_0 + r$</Latex> (since <Latex>$e = a-bq_0+1$</Latex>). Since <Latex>$0 \lt e \leq b$</Latex>, we have <Latex>$0 \leq r \lt b$</Latex>, which is what we wanted, and we are done.</p>

</Proof>

<p>Note that I stopped writing the multiply symbol in between two letters, as per normal convention. Also, I stopped being as rigorous as in part 1 (for example writing "<Latex>$a-bq+1$</Latex>" instead of "<Latex>$(a-bq)+1$</Latex>" due to associativity), because I don't think anyone would want to read such a long tedious proof. BUT, it should be clear (if not monotonous) how to fill out this proof into one as rigorous as in part 1.</p>

<p>And that's it! We've now proved the division algorithm. High schoolers would be very impressed (not).</p>

<div className="footnotes">
<hr />
<ol>
<li id="fn-1">
<p>Can you come up with an analogous division algorithm for the complex numbers? Can you prove that it works?&#160;<a href="#fnref-1" className="footnoteBackLink" title="Jump back to footnote 1 in the text.">&#8617;</a></p>
</li>
</ol>
</div>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths/proving-FTA">
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
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#back-to-school" className="text-link [@media(hover:hover)]:hover:underline">Back to School</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    