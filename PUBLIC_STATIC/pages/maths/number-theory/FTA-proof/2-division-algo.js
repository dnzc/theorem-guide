
import Layout from '../../../../components/layout'
import Accordion from '../../../../components/accordion'
import Link from 'next/link'
import ProminentLink from '../../../../components/prominentLink'
import DiscreetLink from '../../../../components/discreetLink'

import { FaChevronRight } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '../../../../components/spoiler'
import IncompleteMessage from '../../../../components/incompleteMessage'


export default function Ftaproof () {
    return (
        <Layout>
            <div className="relative w-full max-w-screen-2xl flex h-full justify-around">
    <nav className="dirtree hidden md:flex w-[300px] md:shrink-0 md:justify-center h-100% min-h-screen border-r-2 border-elevated">
        <ul>
            <li>
                <span>
                    <Link href="/"> wiki.danielc.rocks </Link>
                </span>
                <ul>
                    
                        
                            <Accordion title="comp-sci" href="/comp-sci" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="algorithms" href="/comp-sci/algorithms" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="binary-search" href="/comp-sci/algorithms/binary-search" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="maths" href="/maths" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="number-theory" href="/maths/number-theory" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="FTA-proof" href="/maths/number-theory/FTA-proof" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="1-integer-axioms" href="/maths/number-theory/FTA-proof/1-integer-axioms" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="2-division-algo" href="/maths/number-theory/FTA-proof/2-division-algo" isFolder={false} isSelected={ true } />
                        
                    
                        
                            <Accordion title="3-bezout-egcd" href="/maths/number-theory/FTA-proof/3-bezout-egcd" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="4-euclid" href="/maths/number-theory/FTA-proof/4-euclid" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="5-fta" href="/maths/number-theory/FTA-proof/5-fta" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="olympiad" href="/maths/olympiad" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="problems" href="/maths/olympiad/problems" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="IMO23" href="/maths/olympiad/problems/IMO23" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="techniques" href="/maths/olympiad/techniques" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="generating-funcs" href="/maths/olympiad/techniques/generating-funcs" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/techniques/lagrange-multipliers" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="moving-points" href="/maths/olympiad/techniques/moving-points" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="research" href="/maths/research" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                </ul>
            </li>
        </ul>
    </nav>

    <article className="w-full min-w-0 max-w-6xl px-6 pt-3">

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths">maths</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths/number-theory">number-theory</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths/number-theory/FTA-proof">FTA-proof</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-3">Last modified on 27 Jul 2023</p>
        

        <div className="article mb-4">
            <h1 id="discovering-division">Discovering Division</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p>This is part 2, where we use the rigorous foundation we developed in part 1 to establish the <DiscreetLink href="https://brilliant.org/wiki/division-algorithm/">division algorithm</DiscreetLink>. In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.</p>

<h2 id="back-to-school" className="group flex">Back to School&nbsp;<Link href="#back-to-school" className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Children tend to get taught division as <em>repeated subtraction</em> - for example, 14 divided by 3 is 4 remainder 2, because:</p>

<p><Latex>$14 - 3 = 11$</Latex></p>

<p><Latex>$11 - 3 = 8$</Latex></p>

<p><Latex>$8 - 3 = 5$</Latex></p>

<p><Latex>$5 - 3 = 2$</Latex></p>

<p>And we stop because if we subtract again, the remainder becomes negative.
In particular, 2&lt;3, and in general the remainder is always less than the divisor, because if it was at least as big then we could always subtract off another copy.</p>

<p>That would definitely be enough justification to any high schooler as to why the division algorithm works.<sup className="footnote-ref" id="fnref-1"><a href="#fn-1">1</a></sup> But, how do we prove it from our axioms and lemmas that we've developed so far? How do we make infinite descent <em>rigorous</em>?</p>

<p>Let's first formalize the statement we want to prove:</p>

<blockquote>
  <p><em>Division Algorithm.</em> For any <Latex>$a \in \mathbb&#123;Z&#125;, b \in \mathbb&#123;N&#125;$</Latex>, there exist integers <Latex>$q,r$</Latex> such that <Latex>$a = bq + r$</Latex>, and <Latex>$0 \leq r \lt b$</Latex>.</p>
</blockquote>

<p>Now... how do we attempt a proof?</p>

<p>The key is the <em>well-ordering principle</em> that we introduced, stating that every non-empty subset of the naturals has a least element.</p>

<p>To use this, we can consider the set of all possible remainders, i.e. all the possible numbers we can obtain by starting with <Latex>$a$</Latex> and adding or subtracting <Latex>$b$</Latex>. Then we can consider those remainders that are natural, and take the smallest element. If it's at least <Latex>$b$</Latex>, then we can subtract <Latex>$b$</Latex> again to get a smaller element of the set, contradiction. In other words, "choose the smallest possible remainder, if it's at least <Latex>$b$</Latex> then subtract <Latex>$b$</Latex>". Do you see how this is equivalent to the infinite descent argument?</p>

<blockquote>
  <p><em>Proof of the Division Algorithm.</em></p>
  
  <p>Let <Latex>$a$</Latex> be a fixed integer and <Latex>$b$</Latex> be a fixed natural. Consider the set:</p>
  
  <p><Latex>$$S = &#123;n \in \mathbb&#123;N&#125; \mid n = a - bq + 1, q \in \mathbb&#123;Z&#125;&#125;$$</Latex></p>
  
  <p>Then S is a subset of the naturals. Furthermore, it is nonempty, because:</p>
  
  <ul>
  <li><p>if <Latex>$a \in \mathbb&#123;N&#125;$</Latex> or <Latex>$a=0$</Latex>, then when <Latex>$q=0$</Latex>, <Latex>$n = a - b \cdot 0 + 1 = a+1$</Latex> which is natural and so it is an element of S.  </p></li>
  <li><p>if <Latex>$-a \in \mathbb&#123;N&#125;$</Latex>, then when <Latex>$q = -a$</Latex>, <Latex>$n = a-b(-a) + 1$</Latex> <Latex>$ = (-a)(b-1) + 1$</Latex> which is natural since <Latex>$(-a), (b-1)$</Latex> are nonnegative, and so it is an element of S.</p></li>
  </ul>
  
  <p>By Trichotomy, we considered all cases, thus S is always non-empty.</p>
  
  <p>Hence by the well-ordering principle, S has a least element (say <Latex>$e$</Latex>), occuring when <Latex>$q = q_0$</Latex>, so that <Latex>$e = a - bq_0+1$</Latex>.</p>
  
  <p><em>Claim</em>: <Latex>$e \leq b$</Latex></p>
  
  <p><em>P.f.</em>: Suppose not, we will show a contradiction. Then <Latex>$e\gt b$</Latex>, so <Latex>$e-b \in \mathbb&#123;N&#125;$</Latex> (<strong>defn. "<Latex>$\gt$</Latex>"</strong>). But <Latex>$e-b = (a-bq_0+1)-b$</Latex> <Latex>$ = a-b(q_0+1)+1$</Latex>, and so <Latex>$e-b \in S$</Latex>. But <Latex>$e-b \lt e$</Latex>, contradicting the minimality of <Latex>$e$</Latex>.</p>
  
  <p>Now at last, letting <Latex>$r = e-1$</Latex>, we have <Latex>$a = bq_0 + r$</Latex> (since <Latex>$e = a-bq_0+1$</Latex>). Since <Latex>$0 \lt e \leq b$</Latex>, we have <Latex>$0 \leq r \lt b$</Latex>, which is what we wanted, and we are done.</p>
</blockquote>

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
                <Link href="/maths/number-theory/FTA-proof">
                    <div className="flex items-center justify-center space-x-1 text-primary">
                        <RiArrowGoBackFill/>
                        <p>up a level</p>
                    </div>
                </Link>
            </div>
        

    </article>

    
        <nav className="hidden xl:flex w-[300px] xl:shrink-0 xl:justify-start h-100% min-h-screen border-l-2 border-elevated px-6 py-4">
            <div className="fixed">
                <h1 className="font-bold text-lg">In this Article</h1>
                <ul className="text-elevated">
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#back-to-school" className="text-primary">Back to School</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
        </Layout>
    )
}
    