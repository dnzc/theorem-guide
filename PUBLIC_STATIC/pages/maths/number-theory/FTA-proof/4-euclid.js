
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


export default function Euclid () {
    return (
        <Layout>
            <Head>
                <title>Euclid | Daniel C</title>
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
                        
                    
                        
                            <Accordion title="4-euclid" href="/maths/number-theory/FTA-proof/4-euclid" isFolder={false} isSelected={ true } />
                        
                    
                        
                            <Accordion title="5-fta" href="/maths/number-theory/FTA-proof/5-fta" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="olympiad" href="/maths/olympiad" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="techniques" href="/maths/olympiad/techniques" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/techniques/lagrange-multipliers" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="research" href="/maths/research" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="writeups" href="/writeups" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="terminal" href="/writeups/terminal" isFolder={false} isSelected={ false } />
                        
                    
                                
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
            <h1 id="proving-euclids-lemma">Proving Euclid's Lemma</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p>This is part 4, where we use what we have so far to finally prove <DiscreetLink href="https://brilliant.org/wiki/bezouts-identity/">Euclid's Lemma</DiscreetLink> (technically, the generalized version). In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.</p>

<h2 id="what-its-argh" className="group flex"><em>What? It's... argh!</em>&nbsp;<Link href="#what-its-argh" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/4-euclid#what-its-argh", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

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

<p><Latex>$$x = (3-2)x = 3x-2x$$</Latex></p>

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
  <Latex>$$x = (11 \cdot 51 - 20 \cdot 28)x$$</Latex>
  <Latex>$$ = 51 \cdot (11x) + 28x \cdot (-20)$$</Latex></p>
  
  <p>Hence, if <Latex>$51 \mid 28x$</Latex>, then <Latex>$51 \mid x$</Latex>, because we wrote <Latex>$x$</Latex> as a linear combination of things that were divisible by 51.</p>
</blockquote>

<p>I think we're ready to generalize now.</p>

<blockquote>
  <p><em>Claim.</em> If <Latex>$a \mid bc$</Latex> and <Latex>$gcd(a,b)=1$</Latex>, then <Latex>$a \mid c$</Latex>. True in <Latex>$\mathbb&#123;Z&#125;$</Latex>.</p>
  
  <p><em>Proof.</em> Suppose <Latex>$a \mid bc$</Latex> and <Latex>$gcd(a,b) = 1$</Latex>. <br />
  Then by <strong>Bezout's Lemma</strong>, there exist integers <Latex>$x,y$</Latex> such that <Latex>$ax + by = 1$</Latex>.
  Hence, <Latex>$c = (ax+by)c = a(cx) + y(bc)$</Latex>. <br />
  Since <Latex>$a \mid bc$</Latex> and <Latex>$a \mid a(cx)$</Latex>, we have that <Latex>$a \mid a(cx) + y(bc)$</Latex>, so <Latex>$a \mid c$</Latex>, as required.</p>
</blockquote>

<p>Nice - surprisingly simple proof, right?</p>

<h2 id="the-actual-euclids-lemma" className="group flex">The actual Euclid's Lemma&nbsp;<Link href="#the-actual-euclids-lemma" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/4-euclid#the-actual-euclids-lemma", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Actually, Euclid's Lemma states that if <Latex>$p$</Latex> is a prime and <Latex>$p \mid ab$</Latex> (where <Latex>$a,b$</Latex> are two integers), then <Latex>$p \mid a$</Latex> or <Latex>$p \mid b$</Latex>. I hope you can see how what we've already proved is pretty much a generalized version of this: the only extra thing we need to prove is that if <Latex>$p$</Latex> doesn't divide <Latex>$a$</Latex>, then <Latex>$gcd(p, a) = 1$</Latex>. But this is true by definition of prime - if <Latex>$gcd(p,a) &gt; 1$</Latex> then <Latex>$p$</Latex> has a factor that isn't <Latex>$1$</Latex> or <Latex>$p$</Latex> (namely, this factor is <Latex>$gcd(p,a)$</Latex>); contradiction.</p>

<blockquote>
  <p><em>Euclid's Lemma.</em> If <Latex>$p$</Latex> is prime and <Latex>$p \mid ab$</Latex>, then <Latex>$p \mid a$</Latex> or <Latex>$p \mid b$</Latex>.</p>
  
  <p><em>Proof</em>. See above. :)</p>
</blockquote>

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
                <h1 className="font-bold text-xl">In this Article</h1>
                <ul className="text-elevated">
                    
                        <li className="pt-2 text-lg font-bold flex items-center justify-start space-x-1"><FaChevronRight size={12}/><Link href="#what-its-argh" className="text-link"><em>What? It's... argh!</em></Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-center justify-start space-x-1"><FaChevronRight size={12}/><Link href="#the-actual-euclids-lemma" className="text-link">The actual Euclid's Lemma</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    