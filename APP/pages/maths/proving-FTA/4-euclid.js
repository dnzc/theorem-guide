
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


export default function Euclid () {
    return (
        <Layout>
            <Head>
                <title>Euclid | Daniel C</title>
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
                        
                    
                                    
                                        
                        
                            <Accordion title="4-euclid" href="/maths/proving-FTA/4-euclid" type="file" relDepth={ 3 } isSelected={ true } />
                        
                    
                                    
                                        
                        
                            <Accordion title="5-fta" href="/maths/proving-FTA/5-fta" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                
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
        </div>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="font-bold text-text-secondary">/</span>
                    <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths">maths</Link></p>
                
                    <span className="font-bold text-text-secondary">/</span>
                    <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths/proving-FTA">proving-FTA</Link></p>
                
            </div>
        

        
            <p className="text-text-secondary mb-2">Created 27 Jul 2023</p>
        

        <div className="article mb-4">
            <h1 id="proving-euclids-lemma">Proving Euclid's Lemma</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p>This is part 4, where we use what we have so far to finally prove <DiscreetLink href="https://brilliant.org/wiki/bezouts-identity/">Euclid's Lemma</DiscreetLink> (technically, the generalized version). In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-2 pb-2 mt-4"><h2 id="what-its-argh" className="underline underline-offset-2">What? It's... argh!</h2><Link href="#what-its-argh" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/4-euclid#what-its-argh", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-subtle">¶</Link></div>

<p>Ask anyone to prove this:</p>

<blockquote>
  <p>If <Latex>$2x$</Latex> is divisible by <Latex>$3$</Latex>, then so is <Latex>$x$</Latex>.</p>
</blockquote>

<p>I bet that almost everyone would attempt to use prime factorization: "in the prime factorization of <Latex>$2x$</Latex>, there must be a 3. But 2 is a prime, thus the 3 must occur in the prime factorization of <Latex>$x$</Latex>."</p>

<p>Ok... but we're trying to prove prime factorization, so we can't use it!</p>

<p>Actually, we can do something smart in this case: if <Latex>$3 \mid 2x$</Latex>, then <Latex>$3 \mid (3x - x)$</Latex>. But <Latex>$3 \mid 3x$</Latex>, therefore <Latex>$3 \mid x$</Latex>, by Lemma 4 in part 1 (i.e. that if <Latex>$a \mid b, a \mid c$</Latex> then <Latex>$a$</Latex> divides any linear combination of <Latex>$b$</Latex> and <Latex>$c$</Latex>). In other words, if <Latex>$2x$</Latex> is divisible by 3 then so is <Latex>$-2x$</Latex>, therefore so is <Latex>$-2x + 3x$</Latex>.</p>

<p>Now ask them to prove the generalized version:</p>

<blockquote>
  <p>If <Latex>$a \mid bc$</Latex> and <Latex>$gcd(a,b) = 1$</Latex>, then <Latex>$a \mid c$</Latex>.</p>
</blockquote>

<p>Here's where most people would <em>really</em> like to appeal to prime factorization: "the set of prime factors of b must be completely different to the set of prime factors of a, else they would share a common factor. So in the prime factorization of bc, removing the factorization of b will not affect any primes that divide a. So a divides c."</p>

<p>So, how do we prove this using only the things we've built out of axioms?</p>

<p>We can actually <em>generalize the trick</em> from before!</p>

<p>In the "if <Latex>$3 \mid 2x$</Latex> then <Latex>$3 \mid x$</Latex>" case, the trick was to write 1 (the desired coefficient of <Latex>$x$</Latex>) as a <em>linear combination</em> of 2 and 3:</p>

<span className="block overflow-auto latex-display-wrapper"><Latex>$$x = (3-2)x = 3x-2x$$</Latex></span>

<p>And this let us deduce that if <Latex>$3 \mid 2x$</Latex>, then <Latex>$3 \mid 3x - 2x$</Latex> because both <Latex>$3x$</Latex> and <Latex>$2x$</Latex> are divisible by 3.</p>

<p>Let's try with a different pair of numbers.</p>

<blockquote>
  <p>If <Latex>$51 \mid 28x$</Latex>, does <Latex>$51 \mid x$</Latex> ?</p>
  
  <p>TRICK: Try to write 1 as a linear combination of 51 and 28. But we know we can do this, by Bezout's Lemma, which we proved in the last part! To find a concrete solution, use the magic box (see the last part if you are unfamiliar):</p>
  
  <table>
      <tbody>
          <tr>
              <td></td>
              <td></td>
              <td>1</td>
              <td>1</td>
              <td>4</td>
              <td>1</td>
              <td>1</td>
              <td>2</td>
          </tr>
          <tr>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>9</td>
              <td>11</td>
              <td>20</td>
              <td>51</td>
          </tr>
          <tr>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>5</td>
              <td>6</td>
              <td>11</td>
              <td>28</td>
          </tr>
      </tbody>
  </table>
  
  <p>So, <Latex>$11 \cdot 51 - 20 \cdot 28 = 1$</Latex>.
  Now to use the trick:
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$x = (11 \cdot 51 - 20 \cdot 28)x$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 51 \cdot (11x) + 28x \cdot (-20)$$</Latex></span></p>
  
  <p>Hence, if <Latex>$51 \mid 28x$</Latex>, then <Latex>$51 \mid x$</Latex>, because we wrote <Latex>$x$</Latex> as a linear combination of things that were divisible by 51.</p>
</blockquote>

<p>I think we're ready to generalize now.</p>

<Prop>

<p>If <Latex>$a \mid bc$</Latex> and <Latex>$gcd(a,b)=1$</Latex>, then <Latex>$a \mid c$</Latex>. True in <Latex>$\mathbb&#123;Z&#125;$</Latex>.</p>

<Proof unquoted unbolded>

<p>Suppose <Latex>$a \mid bc$</Latex> and <Latex>$gcd(a,b) = 1$</Latex>.  </p>

<p>Then by <strong>Bezout's Lemma</strong>, there exist integers <Latex>$x,y$</Latex> such that <Latex>$ax + by = 1$</Latex>.</p>

<p>Hence, <Latex>$c = (ax+by)c = a(cx) + y(bc)$</Latex>.  </p>

<p>Since <Latex>$a \mid bc$</Latex> and <Latex>$a \mid a(cx)$</Latex>, we have that <Latex>$a \mid a(cx) + y(bc)$</Latex>, so <Latex>$a \mid c$</Latex>, as required.</p>

</Proof>

</Prop>

<p>Nice - surprisingly simple proof, right?</p>

<div className="text-2xl font-bold group flex space-x-1 pt-2 pb-2 mt-4"><h2 id="the-actual-euclids-lemma" className="underline underline-offset-2">The actual Euclid's Lemma</h2><Link href="#the-actual-euclids-lemma" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/4-euclid#the-actual-euclids-lemma", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-subtle">¶</Link></div>

<p>Actually, Euclid's Lemma states that if <Latex>$p$</Latex> is a prime and <Latex>$p \mid ab$</Latex> (where <Latex>$a,b$</Latex> are two integers), then <Latex>$p \mid a$</Latex> or <Latex>$p \mid b$</Latex>. But what we've already proved is pretty much a generalized version of this: the only extra thing we need to prove is that if <Latex>$p$</Latex> doesn't divide <Latex>$a$</Latex>, then <Latex>$gcd(p, a) = 1$</Latex>. But this is true by definition of prime - if <Latex>$gcd(p,a) &gt; 1$</Latex> then <Latex>$p$</Latex> has a factor that isn't <Latex>$1$</Latex> or <Latex>$p$</Latex> (namely, this factor is <Latex>$gcd(p,a)$</Latex>); contradiction.</p>

        </div>

        
            <div className="border-t-2 border-border-strong pt-4 flex items-top justify-between">
                
                    <div className="flex justify-start">
                        <Link href="/maths/proving-FTA">
                            <div className="flex items-center justify-center space-x-1 text-text-secondary underline">
                                <RiArrowGoBackFill/>
                                <p>up a level</p>
                            </div>
                        </Link>
                    </div>
                

                
                    <div className="">
                        <CopyButton text="tl;dr: A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored. This is part 4, where we use what we have so far to finally prove Euclid&#x27;s Lemma (technically, the generalized version). In general, the level of rigor will decrease as the parts go on, so that the reader doesn&#x27;t get bored to death. But it should be obvious how to fill out everything with complete rigor. Here is a glossary of math symbols. What? It&#x27;s... argh! Ask anyone to prove this: If $2x$ is divisible by $3$, then so is $x$. I bet that almost everyone would attempt to use prime factorization: &quot;in the prime factorization of $2x$, there must be a 3. But 2 is a prime, thus the 3 must occur in the prime factorization of $x$.&quot; Ok... but we&#x27;re trying to prove prime factorization, so we can&#x27;t use it! Actually, we can do something smart in this case: if $3 \mid 2x$, then $3 \mid (3x - x)$. But $3 \mid 3x$, therefore $3 \mid x$, by Lemma 4 in part 1 (i.e. that if $a \mid b, a \mid c$ then $a$ divides any linear combination of $b$ and $c$). In other words, if $2x$ is divisible by 3 then so is $-2x$, therefore so is $-2x + 3x$. Now ask them to prove the generalized version: If $a \mid bc$ and $gcd(a,b) = 1$, then $a \mid c$. Here&#x27;s where most people would really like to appeal to prime factorization: &quot;the set of prime factors of b must be completely different to the set of prime factors of a, else they would share a common factor. So in the prime factorization of bc, removing the factorization of b will not affect any primes that divide a. So a divides c.&quot; So, how do we prove this using only the things we&#x27;ve built out of axioms? We can actually generalize the trick from before! In the &quot;if $3 \mid 2x$ then $3 \mid x$&quot; case, the trick was to write 1 (the desired coefficient of $x$) as a linear combination of 2 and 3: $$x = (3-2)x = 3x-2x$$ And this let us deduce that if $3 \mid 2x$, then $3 \mid 3x - 2x$ because both $3x$ and $2x$ are divisible by 3. Let&#x27;s try with a different pair of numbers. If $51 \mid 28x$, does $51 \mid x$ ? TRICK: Try to write 1 as a linear combination of 51 and 28. But we know we can do this, by Bezout&#x27;s Lemma, which we proved in the last part! To find a concrete solution, use the magic box (see the last part if you are unfamiliar): 1 1 4 1 1 2 0 1 1 2 9 11 20 51 1 0 1 1 5 6 11 28 So, $11 \cdot 51 - 20 \cdot 28 = 1$. Now to use the trick: $$x = (11 \cdot 51 - 20 \cdot 28)x$$ $$ = 51 \cdot (11x) + 28x \cdot (-20)$$ Hence, if $51 \mid 28x$, then $51 \mid x$, because we wrote $x$ as a linear combination of things that were divisible by 51. I think we&#x27;re ready to generalize now. If $a \mid bc$ and $gcd(a,b)=1$, then $a \mid c$. True in $\mathbb&#123;Z&#125;$. Suppose $a \mid bc$ and $gcd(a,b) = 1$. Then by Bezout&#x27;s Lemma, there exist integers $x,y$ such that $ax + by = 1$. Hence, $c = (ax+by)c = a(cx) + y(bc)$. Since $a \mid bc$ and $a \mid a(cx)$, we have that $a \mid a(cx) + y(bc)$, so $a \mid c$, as required. Nice - surprisingly simple proof, right? The actual Euclid&#x27;s Lemma Actually, Euclid&#x27;s Lemma states that if $p$ is a prime and $p \mid ab$ (where $a,b$ are two integers), then $p \mid a$ or $p \mid b$. But what we&#x27;ve already proved is pretty much a generalized version of this: the only extra thing we need to prove is that if $p$ doesn&#x27;t divide $a$, then $gcd(p, a) = 1$. But this is true by definition of prime - if $gcd(p,a) &gt; 1$ then $p$ has a factor that isn&#x27;t $1$ or $p$ (namely, this factor is $gcd(p,a)$); contradiction.">Copy article plaintext</CopyButton>
                    </div>
                
            </div>
        

    </article>

    
        <nav className="hidden xl:flex w-[300px] xl:shrink-0 xl:justify-start h-100% min-h-screen border-l-2 border-border-subtle px-6 py-4">
            <div className="fixed text-text-secondary">
                <h1 className="text-lg">Table of contents</h1>
                <ul>
                    
                        <li className="pt-1 font-bold"><Link href="#what-its-argh" className="text-link [@media(hover:hover)]:hover:underline">What? It's... argh!</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#the-actual-euclids-lemma" className="text-link [@media(hover:hover)]:hover:underline">The actual Euclid's Lemma</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    