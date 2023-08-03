
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'

import { FaChevronRight } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '@/components/copyButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Fta () {
    return (
        <Layout>
            <Head>
                <title>Fta | Daniel C</title>
            </Head>
                <>
                    
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss={false}
                            pauseOnHover={false}
                            theme="dark"
                        />
    
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
                        
                    
                        
                            <Accordion title="2-division-algo" href="/maths/number-theory/FTA-proof/2-division-algo" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="3-bezout-egcd" href="/maths/number-theory/FTA-proof/3-bezout-egcd" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="4-euclid" href="/maths/number-theory/FTA-proof/4-euclid" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="5-fta" href="/maths/number-theory/FTA-proof/5-fta" isFolder={false} isSelected={ true } />
                        
                    
                                
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
            <h1 id="the-fundamental-theorem-of-arithmetic-our-journeys-end">The Fundamental Theorem of Arithmetic: Our Journey's End</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p>This is part 5, where we stand on what we've built from axioms so far, and finally prove the <DiscreetLink href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic">fundamental theorem of arithmetic</DiscreetLink> (technically, the generalized version). In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.</p>

<h2 id="existence-of-a-prime-factorization" className="group flex">Existence of a prime factorization&nbsp;<Link href="#existence-of-a-prime-factorization" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/5-fta#existence-of-a-prime-factorization", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Armed with everything we've done so far, we're ready to prove that every integer greater than 1 can be written as a product of primes (or is prime). Note: this doesn't imply that factorizations are unique, but we'll prove this later.</p>

<p>Intitively, we want to be able to use induction: if <Latex>$n$</Latex> is prime we're done, and if it's not then <Latex>$n = ab$</Latex> with <Latex>$a,b \lt n$</Latex> - but by inductive hypothesis, <Latex>$a$</Latex> and <Latex>$b$</Latex> can both be written as a product of primes, thus <Latex>$ab$</Latex> is a product of primes.</p>

<p>We can flip this to use the well-ordering principle, because I think it's nicer (and we haven't actually proved that induction works).</p>

<blockquote>
  <p><em>Claim.</em> Every integer greater than 1 is a prime or a product of primes.</p>
  
  <p><em>Proof.</em> Suppose not, we will show a contradiction. <br />
  Then the set <Latex>$\&#123;n \in \mathbb&#123;N&#125; \mid n\gt 1$</Latex> and <Latex>$n$</Latex> is not prime or a product of primes <Latex>$\&#125;$</Latex> is nonempty. But this set is also a subset of <Latex>$\mathbb&#123;N&#125;$</Latex>, by definition. Hence by the <strong>well-ordering principle</strong>, it has a least element, say <Latex>$e$</Latex>. Then <Latex>$e \gt 1$</Latex> and <Latex>$e$</Latex> is not prime of a product of primes.</p>
  
  <p>Since <Latex>$e$</Latex> is not prime, there exist integers <Latex>$a,b$</Latex> such that <Latex>$e = ab$</Latex> and <Latex>$1 \lt a \leq b \lt n$</Latex>.</p>
  
  <p>Now, becase <Latex>$e$</Latex> is minimal, <Latex>$a$</Latex> and <Latex>$b$</Latex> must both be prime or a product of primes (else they would be in the set). Hence we can write <Latex>$a = p_1p_2\cdots p_k$</Latex> and <Latex>$b = q_1q_2\cdots q_j$</Latex> where these are all primes<sup className="footnote-ref" id="fnref-1"><a href="#fn-1">1</a></sup>.</p>
  
  <p>But, then <Latex>$e = ab = (p_1p_2\cdots p_k)(q_1q_2\cdots q_j)$</Latex>, thus <Latex>$e$</Latex> is a product of primes, contradiction.</p>
</blockquote>

<p>But wait: there's a small problem here, can you spot it?</p>

<p>The problem is that, using our definition of prime, it's not entirely obvious that if <Latex>$e$</Latex> is not prime then has a factor strictly between <Latex>$1$</Latex> and <Latex>$e$</Latex>. This needs some justification - try to see if you can prove it. Recall that our defintion was:</p>

<blockquote>
  <p><em>p</em> is <strong>"prime"</strong> iff for all ways of writing <Latex>$p = u \cdot v$</Latex> with <Latex>$u,v \in \mathbb&#123;Z&#125;$</Latex>, exactly one of <Latex>$u,v$</Latex> is 1 or -1.</p>
</blockquote>

<p>Here's the fix:</p>

<Spoiler>

<p><em>Claim.</em> If <Latex>$n \in \mathbb&#123;N&#125;$</Latex> is not prime, then <Latex>$\exists a,b \in \mathbb&#123;N&#125;$</Latex> with <Latex>$n = ab$</Latex> and <Latex>$1 \lt a \lt n$</Latex> and <Latex>$1 \lt b \lt n$</Latex>.</p>

<p><em>Proof.</em> Suppose <Latex>$n \in \mathbb&#123;N&#125;$</Latex> is not prime, and that there do not exist <Latex>$a,b \in \mathbb&#123;N&#125;$</Latex> with <Latex>$n = ab$</Latex> and <Latex>$1 \lt a \lt n$</Latex> and <Latex>$1 \lt b \lt n$</Latex>. We will show a contradiction.</p>

<p>Consider the set <Latex>$S = \&#123;(a,b) \in \mathbb&#123;N&#125;^2\mid n = ab\&#125;$</Latex>. Since <Latex>$n = 1 \cdot n$</Latex>, this set is nonempty.</p>

<p>Now take an arbitrary element <Latex>$(x,y)$</Latex> of <Latex>$S$</Latex>. Then <Latex>$n = xy$</Latex>, so by assumption, it is not true that both <Latex>$1 \lt x \lt n$</Latex> and <Latex>$1 \lt y \lt n$</Latex>.</p>

<blockquote>
  <p><em>Sub-claim:</em> <Latex>$x = 1$</Latex> or <Latex>$y = 1$</Latex> <br />
  <em>Proof:</em> Suppose <Latex>$x \neq 1$</Latex> and <Latex>$y \neq 1$</Latex>, we will show a contradiction. Then <Latex>$1 \lt x$</Latex> and <Latex>$1 \lt y$</Latex>, by <strong>Lemma 17</strong> in part 1. <br />
  However, note that <Latex>$x \leq n$</Latex> and <Latex>$y \leq n$</Latex> (<strong>Lemma 19</strong>). But <Latex>$x$</Latex> cannot be equal to <Latex>$n$</Latex>, else <Latex>$y = 1$</Latex> (<strong>Lemma 20</strong>), and similarly <Latex>$y \neq n$</Latex>. Thus <Latex>$x \lt n$</Latex> and <Latex>$y \lt n$</Latex>. <br />
  Hence overall, <Latex>$1 \lt x \lt n$</Latex> and <Latex>$1 \lt y \lt n$</Latex>; contradiction.</p>
</blockquote>

<p>Now by the sub-claim, for all elements <Latex>$(x,y)$</Latex> of <Latex>$S$</Latex>, we have that <Latex>$x = 1$</Latex> or <Latex>$y = 1$</Latex>. Hence <Latex>$n$</Latex> is prime, by definition. Contradiction.</p>

</Spoiler>

<h2 id="uniqueness" className="group flex">Uniqueness&nbsp;<Link href="#uniqueness" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/5-fta#uniqueness", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>So, we've shown that every integer greater than 1 can be factored into primes.</p>

<p>But can we show that it can be factored <em>in only one way</em> (up to permutation) ?</p>

<p>Well we can try the same thing as above: use minimality.</p>

<p>If there's an integer that has two distinct factorizations, then take the minimal example, use Euclid's Lemma to cancel a common prime factor from both factorizations to obtain a smaller example, and we have a contradiction.</p>

<blockquote>
  <p><em>Claim.</em> Every integer greater than 1 can be factored into primes in exactly one way, up to permutations.</p>
  
  <p><em>Proof.</em> First, note that we showed every integer  greater than 1 can be factored into primes. <br />
  Suppose there is an integer greater than 1 with two distinct factorizations. Then the set of natural numbers greater than 1 with two distinct factorizations is nonempty, so by the <strong>well-ordering principle</strong>, the set has a least element, say <Latex>$e$</Latex>. <br />
  Write <Latex>$e = p_1 p_2 \cdots p_k = q_1 q_2 \cdots q_j$</Latex> as two distinct prime factorizations of <Latex>$e$</Latex> (up to permutation). Note that <Latex>$k \gt 1$</Latex>, else <Latex>$e = p_1$</Latex> and <Latex>$j=1$</Latex> (since a prime cannot have two prime factors) so <Latex>$e = p_1 = q_1$</Latex> and the factorizations would be the same. Similarly <Latex>$j \gt 1$</Latex>.
  Then, <Latex>$p_1$</Latex> divides <Latex>$q_1 \cdots q_j$</Latex>, so by <strong>Euclid's Lemma</strong>, <Latex>$p_1$</Latex> divides some <Latex>$q_i$</Latex> <sup className="footnote-ref" id="fnref-2"><a href="#fn-2">2</a></sup>, say <Latex>$q_n$</Latex>. Without loss of generality (because of permutation), let <Latex>$n = 1$</Latex>.
  So, there exists some integer <Latex>$x$</Latex> such that <Latex>$q_1 = x \cdot p_1$</Latex> (by <strong>defn. of "divides"</strong>). <br />
  However, by <strong>defn. of prime</strong>, we have that <Latex>$x = \pm 1$</Latex> (because <Latex>$p_1 \neq \pm 1$</Latex>). <br />
  By <strong>Lemma 12</strong>, <Latex>$x \in \mathbb&#123;N&#125;$</Latex>, and so <Latex>$x = 1$</Latex> (<strong>Lemma 9</strong> and <strong>Trichotomy</strong>). So <Latex>$q_1 = p_1$</Latex>.
  Thus, we may cancel<sup className="footnote-ref" id="fnref-3"><a href="#fn-3">3</a></sup> this common prime factor from both factorizations to obtain <br />
  <Latex>$p_2 \cdots p_k = q_2 \cdots q_j$</Latex>
  Which are two distinct factorizations of an integer that is strictly smaller than <Latex>$e$</Latex>.
  Also recall that <Latex>$k \gt 1$</Latex> and <Latex>$j \gt 1$</Latex>, thus this new integer is bigger than 1. This contradicts the minimality of <Latex>$e$</Latex>, and we are done.</p>
</blockquote>

<p>Woop woop, we've finally proved the fundamental theorem of arithmetic! To recap, our path to the proof was:</p>

<p><em>Division algorithm =&gt; Bezout's lemma =&gt; Euclid's lemma =&gt; FTA</em></p>

<p>Do you think you can remember it all?</p>

<div className="footnotes">
<hr />
<ol>
<li id="fn-1">
<p>You might object that the "<Latex>$\cdots$</Latex>" is not well-defined, since it's mentioned nowhere in our axioms. You'd be right!&#160;<a href="#fnref-1" className="footnoteBackLink" title="Jump back to footnote 1 in the text.">&#8617;</a></p>
</li>

<li id="fn-2">
<p>We could do this more rigorously, but essentially <Latex>$p_1 \mid q_1(q_2\cdots q_j) \implies p_1 \mid q_1$</Latex> or <Latex>$p_1 \mid q_2q_3 \cdots q_j$</Latex>, and so on. Have a go at proving this rigorously with the well-ordering principle (with <Latex>$j$</Latex> fixed) if you want.&#160;<a href="#fnref-2" className="footnoteBackLink" title="Jump back to footnote 2 in the text.">&#8617;</a></p>
</li>

<li id="fn-3">
<p>Why can we cancel? We need to prove the lemma that if <Latex>$ac = bc$</Latex>, then <Latex>$a = b$</Latex> (true for all <Latex>$a,b,c \in \mathbb&#123;Z&#125;, c \neq 0$</Latex>). But this is doable, because if <Latex>$ac = bc$</Latex>, then <Latex>$c(a-b) = 0$</Latex>, so <Latex>$c=0$</Latex> or <Latex>$a-b=0$</Latex>, so <Latex>$a=b$</Latex>.&#160;<a href="#fnref-3" className="footnoteBackLink" title="Jump back to footnote 3 in the text.">&#8617;</a></p>
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
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#existence-of-a-prime-factorization" className="text-primary">Existence of a prime factorization</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#uniqueness" className="text-primary">Uniqueness</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    