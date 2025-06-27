
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

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '@/components/copyButton'
import 'react-toastify/dist/ReactToastify.css'
import { ImPilcrow } from 'react-icons/im'
import { Thm, Lemma, Proof, Defn, Example } from '@/components/math'


export default function Fta () {
    return (
        <Layout>
            <Head>
                <title>Fta | Daniel C</title>
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

        
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] min-h-10 h-[40vh] md:h-[40vh] xl:h-[calc(100vh-8.5rem)] break-all bg-background pt-3 md:pt-0 md:border-y-2 border-border-subtle">
                <ul className="scrollshadow-vertical dirtree mb-4 md:mb-0 group">
                    
                    

                    
                    
                        
                            <Accordion title="root" href="" type="folder" relDepth={ 0 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="comp-sci" href="/comp-sci" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="binary-search" href="/comp-sci/binary-search" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="maths" href="/maths" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="lagrange-multipliers" href="/maths/lagrange-multipliers" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="proving-FTA" href="/maths/proving-FTA" type="folder" relDepth={ 2 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="1-integer-axioms" href="/maths/proving-FTA/1-integer-axioms" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="2-division-algo" href="/maths/proving-FTA/2-division-algo" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="3-bezout-egcd" href="/maths/proving-FTA/3-bezout-egcd" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="4-euclid" href="/maths/proving-FTA/4-euclid" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="5-fta" href="/maths/proving-FTA/5-fta" type="file" relDepth={ 3 } isSelected={ true } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="research" href="/maths/research" type="folder" relDepth={ 2 } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="writeups" href="/writeups" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="terminal" href="/writeups/terminal" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
        </div>

    
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] min-h-10 h-[30vh] md:h-[calc(60vh-8.5rem)] xl:hidden shrink-0 px-4 py-2 border-t-2 md:border-t-0 md:border-b-2 border-border-subtle">
            <h1 className="text-text-secondary text-lg">Table of contents</h1>
            <ul>
                
                    <li className="pt-1 font-bold"><Link href="#existence-of-a-prime-factorization" className="tocentry text-link [@media(hover:hover)]:hover:underline">Existence of a prime factorization</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#uniqueness" className="tocentry text-link [@media(hover:hover)]:hover:underline">Uniqueness</Link></li>
                
            </ul>
        </div>
    

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        <div className="flex flex-wrap items-center space-x-2 mb-3">
            
                <div className="flex flex-wrap items-center align-middle space-x-1 mr-2">
                    
                        <span className="font-bold text-text-secondary">/</span>
                        <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths">maths</Link></p>
                    
                        <span className="font-bold text-text-secondary">/</span>
                        <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths/proving-FTA">proving-FTA</Link></p>
                    
                </div>
            

            
                
                <Badge color="pink">number-theory</Badge>
                
                <Badge color="green">theorem</Badge>
                
            
        </div>

        
            <p className="text-text-secondary mb-2">Created 27 Jul 2023. Last updated 19 Dec 2024</p>
        

        <div className="article mb-4">
            <h1 id="the-fundamental-theorem-of-arithmetic-our-journeys-end">The Fundamental Theorem of Arithmetic: Our Journey's End</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p>This is part 5, where we stand on what we've built from axioms so far, and finally prove the <DiscreetLink href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic">fundamental theorem of arithmetic</DiscreetLink> (technically, the generalized version). In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="existence-of-a-prime-factorization" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Existence of a prime factorization</h2><Link href="#existence-of-a-prime-factorization" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/5-fta#existence-of-a-prime-factorization", true)} className="hidden group-hover:block text-linkanchor"><ImPilcrow size={20}/></Link></div>

<p>Armed with everything we've done so far, we're ready to prove that every integer greater than 1 can be uniquely written as a product of positive primes.</p>

<p>Intitively, we want to be able to use induction: if <Latex>$n$</Latex> is prime we're done, and if it's not then <Latex>$n = ab$</Latex> with <Latex>$a,b \lt n$</Latex> - but by inductive hypothesis, <Latex>$a$</Latex> and <Latex>$b$</Latex> can both be written as a product of primes, thus <Latex>$ab$</Latex> is a product of primes.</p>

<p>We can flip this to use the well-ordering principle, because I think it's nicer (and we haven't actually proved that induction works).</p>

<Lemma>

<p>Every integer greater than 1 is a prime or a product of positive primes.</p>

<Proof unquoted unbolded>

<p>Suppose not, we will show a contradiction.  </p>

<p>Then the set <Latex>$\&#123;n \in \mathbb&#123;N&#125; \mid n\gt 1$</Latex> and <Latex>$n$</Latex> is not prime or a product of positive primes<Latex>$\&#125;$</Latex> is nonempty. But this set is also a subset of <Latex>$\mathbb&#123;N&#125;$</Latex>, by definition. Hence by the <strong>well-ordering principle</strong>, it has a least element, say <Latex>$e$</Latex>. Then <Latex>$e \gt 1$</Latex> and <Latex>$e$</Latex> is not prime of a product of positive primes.</p>

<p>Since <Latex>$e$</Latex> is not prime, there exist integers <Latex>$a,b$</Latex> such that <Latex>$e = ab$</Latex> and <Latex>$1 \lt a \leq b \lt n$</Latex>.<sup className="footnote-ref" id="fnref-1"><a href="#fn-1">1</a></sup></p>

<p>Now, because <Latex>$e$</Latex> is minimal, <Latex>$a$</Latex> and <Latex>$b$</Latex> must both be positive primes or a product of positive primes (else they would be in the set). Hence we can write <Latex>$a = p_1 p_2\cdots p_k$</Latex> and <Latex>$b = q_1 q_2\cdots q_j$</Latex> where these are all positive primes.</p>

<p>But, then <Latex>$e = ab = (p_1p_2\cdots p_k)(q_1q_2\cdots q_j)$</Latex>, thus <Latex>$e$</Latex> is a product of positive primes, contradiction.</p>

</Proof>

</Lemma>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="uniqueness" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Uniqueness</h2><Link href="#uniqueness" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/5-fta#uniqueness", true)} className="hidden group-hover:block text-linkanchor"><ImPilcrow size={20}/></Link></div>

<p>So, we've shown that every integer greater than 1 can be factored into positive primes.</p>

<p>But can we show that it can be factored <em>in only one way</em> (up to permutation) ? This is where we need to use what we've built up (i.e. Euclid's Lemma).</p>

<p>Let's try using minimality again.</p>

<p>If there's an integer that has two distinct factorizations, then take the minimal example, use Euclid's Lemma to cancel a common prime factor from both factorizations to obtain a smaller example, and we have a contradiction.</p>

<Thm name="Fundamental Theorem of Arithmetic" outofline>

<p>Every integer greater than 1 can be factored into positive primes in exactly one way, up to permutations.</p>

<Proof outofline unquoted unbolded>

<p>First, note that we showed every integer greater than 1 can be factored into positive primes.</p>

<p>Suppose there is an integer greater than 1 with two distinct factorizations. Then the set of natural numbers greater than 1 with two distinct factorizations is nonempty, so by the <strong>well-ordering principle</strong>, the set has a least element, say <Latex>$e$</Latex>.  </p>

<p>Write <Latex>$e = p_1 p_2 \cdots p_k = q_1 q_2 \cdots q_j$</Latex> as two distinct factorizations of <Latex>$e$</Latex> (up to permutation).<br/></p>

<p>Note that <Latex>$k \gt 1$</Latex>, else <Latex>$e = p_1$</Latex> and <Latex>$j=1$</Latex> (since a prime cannot have two prime factors) so <Latex>$e = p_1 = q_1$</Latex> and the factorizations would be the same. Similarly <Latex>$j \gt 1$</Latex>.</p>

<p>Then, <Latex>$p_1$</Latex> divides <Latex>$q_1 \cdots q_j$</Latex>, so by <strong>Euclid's Lemma</strong>, <Latex>$p_1$</Latex> divides some <Latex>$q_i$</Latex> <sup className="footnote-ref" id="fnref-2"><a href="#fn-2">2</a></sup>, say <Latex>$q_n$</Latex>. Without loss of generality (because of permutation), let <Latex>$n = 1$</Latex>. Since <Latex>$q_1$</Latex> is prime, we have that <Latex>$q_1 = p_1$</Latex>.</p>

<p>Thus, we may cancel<sup className="footnote-ref" id="fnref-3"><a href="#fn-3">3</a></sup> this common prime factor from both factorizations to obtain  </p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$p_2 \cdots p_k = q_2 \cdots q_j$$</Latex></span>

<p>which are two distinct factorizations of an integer that is strictly smaller than <Latex>$e$</Latex>.</p>

<p>Also recall that <Latex>$k \gt 1$</Latex> and <Latex>$j \gt 1$</Latex>, thus this new integer is bigger than 1. This contradicts the minimality of <Latex>$e$</Latex>, and we are done.</p>

</Proof>

</Thm>

<p>Woop woop, we've finally proved the fundamental theorem of arithmetic! To recap, our path to the proof was:</p>

<p><em>Division algorithm =&gt; Bezout's lemma =&gt; Euclid's lemma =&gt; FTA</em></p>

<p>Do you think you can remember it all?</p>

<div className="footnotes">
<hr />
<ol>
<li id="fn-1">
<p>Proof: not prime and <Latex>$&gt;1$</Latex> means there is a factorization with neither being <Latex>$\pm 1$</Latex>.&#160;<a href="#fnref-1" className="footnoteBackLink" title="Jump back to footnote 1 in the text.">&#8617;</a></p>
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

        
            <div className="border-t-2 border-border-subtle pt-4 flex items-top justify-between">
                
                    <div className="flex justify-start">
                        <Link href="/maths/proving-FTA">
                            <div className="flex items-center justify-center space-x-1 text-text-secondary underline">
                                <RiArrowGoBackFill/>
                                <p>up a level</p>
                            </div>
                        </Link>
                    </div>
                

                
                    <div className="">
                        <CopyButton text="tl;dr: A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored. This is part 5, where we stand on what we&#x27;ve built from axioms so far, and finally prove the fundamental theorem of arithmetic (technically, the generalized version). In general, the level of rigor will decrease as the parts go on, so that the reader doesn&#x27;t get bored to death. But it should be obvious how to fill out everything with complete rigor. Here is a glossary of math symbols. Existence of a prime factorization Armed with everything we&#x27;ve done so far, we&#x27;re ready to prove that every integer greater than 1 can be uniquely written as a product of positive primes. Intitively, we want to be able to use induction: if $n$ is prime we&#x27;re done, and if it&#x27;s not then $n = ab$ with $a,b \lt n$ - but by inductive hypothesis, $a$ and $b$ can both be written as a product of primes, thus $ab$ is a product of primes. We can flip this to use the well-ordering principle, because I think it&#x27;s nicer (and we haven&#x27;t actually proved that induction works). Every integer greater than 1 is a prime or a product of positive primes. Suppose not, we will show a contradiction. Then the set $\&#123;n \in \mathbb&#123;N&#125; \mid n\gt 1$ and $n$ is not prime or a product of positive primes$\&#125;$ is nonempty. But this set is also a subset of $\mathbb&#123;N&#125;$, by definition. Hence by the well-ordering principle, it has a least element, say $e$. Then $e \gt 1$ and $e$ is not prime of a product of positive primes. Since $e$ is not prime, there exist integers $a,b$ such that $e = ab$ and $1 \lt a \leq b \lt n$. Now, because $e$ is minimal, $a$ and $b$ must both be positive primes or a product of positive primes (else they would be in the set). Hence we can write $a = p_1 p_2\cdots p_k$ and $b = q_1 q_2\cdots q_j$ where these are all positive primes. But, then $e = ab = (p_1p_2\cdots p_k)(q_1q_2\cdots q_j)$, thus $e$ is a product of positive primes, contradiction. Uniqueness So, we&#x27;ve shown that every integer greater than 1 can be factored into positive primes. But can we show that it can be factored in only one way (up to permutation) ? This is where we need to use what we&#x27;ve built up (i.e. Euclid&#x27;s Lemma). Let&#x27;s try using minimality again. If there&#x27;s an integer that has two distinct factorizations, then take the minimal example, use Euclid&#x27;s Lemma to cancel a common prime factor from both factorizations to obtain a smaller example, and we have a contradiction. Every integer greater than 1 can be factored into positive primes in exactly one way, up to permutations. First, note that we showed every integer greater than 1 can be factored into positive primes. Suppose there is an integer greater than 1 with two distinct factorizations. Then the set of natural numbers greater than 1 with two distinct factorizations is nonempty, so by the well-ordering principle, the set has a least element, say $e$. Write $e = p_1 p_2 \cdots p_k = q_1 q_2 \cdots q_j$ as two distinct factorizations of $e$ (up to permutation). Note that $k \gt 1$, else $e = p_1$ and $j=1$ (since a prime cannot have two prime factors) so $e = p_1 = q_1$ and the factorizations would be the same. Similarly $j \gt 1$. Then, $p_1$ divides $q_1 \cdots q_j$, so by Euclid&#x27;s Lemma, $p_1$ divides some $q_i$ , say $q_n$. Without loss of generality (because of permutation), let $n = 1$. Since $q_1$ is prime, we have that $q_1 = p_1$. Thus, we may cancel this common prime factor from both factorizations to obtain $$p_2 \cdots p_k = q_2 \cdots q_j$$ which are two distinct factorizations of an integer that is strictly smaller than $e$. Also recall that $k \gt 1$ and $j \gt 1$, thus this new integer is bigger than 1. This contradicts the minimality of $e$, and we are done. Woop woop, we&#x27;ve finally proved the fundamental theorem of arithmetic! To recap, our path to the proof was: Division algorithm =&gt; Bezout&#x27;s lemma =&gt; Euclid&#x27;s lemma =&gt; FTA Do you think you can remember it all? Proof: not prime and $&gt;1$ means there is a factorization with neither being $\pm 1$. ↩ We could do this more rigorously, but essentially $p_1 \mid q_1(q_2\cdots q_j) \implies p_1 \mid q_1$ or $p_1 \mid q_2q_3 \cdots q_j$, and so on. Have a go at proving this rigorously with the well-ordering principle (with $j$ fixed) if you want. ↩ Why can we cancel? We need to prove the lemma that if $ac = bc$, then $a = b$ (true for all $a,b,c \in \mathbb&#123;Z&#125;, c \\neq 0$). But this is doable, because if $ac = bc$, then $c(a-b) = 0$, so $c=0$ or $a-b=0$, so $a=b$. ↩">Copy article plaintext</CopyButton>
                    </div>
                
            </div>
        

    </article>

    
        <nav className="hidden xl:flex w-[270px] xl:shrink-0 xl:justify-start h-100% min-h-screen border-l-2 border-border-subtle px-6 py-4">
            <div className="fixed text-text-secondary">
                <h1 className="text-lg">Table of contents</h1>
                <ul>
                    
                        <li className="pt-1 font-bold"><Link href="#existence-of-a-prime-factorization" className="text-link [@media(hover:hover)]:hover:underline">Existence of a prime factorization</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#uniqueness" className="text-link [@media(hover:hover)]:hover:underline">Uniqueness</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    