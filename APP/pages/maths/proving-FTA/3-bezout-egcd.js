
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


export default function BezoutEgcd () {
    return (
        <Layout>
            <Head>
                <title>Bezout Egcd | Daniel C</title>
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
                        
                    
                                    
                                        
                        
                            <Accordion title="olympiad" href="/maths/olympiad" type="folder" relDepth={ 2 } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/lagrange-multipliers" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="proving-FTA" href="/maths/proving-FTA" type="folder" relDepth={ 2 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="1-integer-axioms" href="/maths/proving-FTA/1-integer-axioms" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="2-division-algo" href="/maths/proving-FTA/2-division-algo" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="3-bezout-egcd" href="/maths/proving-FTA/3-bezout-egcd" type="file" relDepth={ 3 } isSelected={ true } />
                        
                    
                                    
                                        
                        
                            <Accordion title="4-euclid" href="/maths/proving-FTA/4-euclid" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
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
        

        
            <p className="text-text-secondary mb-2">Created 26 Jul 2023</p>
        

        <div className="article mb-4">
            <h1 id="bezouts-lemma-and-the-extended-euclidean-algorithm-linear-combinations">Bezout's Lemma and the Extended Euclidean Algorithm: Linear Combinations</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p>This is part 3, where we discover and prove <DiscreetLink href="https://brilliant.org/wiki/bezouts-identity/">Bezout's lemma</DiscreetLink> using the division algorithm. In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-2 pb-2 mt-4"><h2 id="puzzle-water-jug-problem" className="underline underline-offset-2">Puzzle: water-jug problem</h2><Link href="#puzzle-water-jug-problem" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/3-bezout-egcd#puzzle-water-jug-problem", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-subtle">¶</Link></div>

<p>You might have heard this one before:</p>

<blockquote>
  <p>There are two water jugs A and B, of size 8 and 5 litres respectively. They have no markings, so it is impossible to tell how much water is in a jug unless it is completely full or completely empty. There is a sink with a water tap and a drain. How can exactly one litre of water be obtained from the tap using the two jugs?</p>
</blockquote>

<p>It's a fun puzzle - definitely worth playing around with it before reading the solution below.</p>

<Spoiler>

<Proof type="Solution" unquoted>

<p>Let <Latex>$(a,b)$</Latex> denote that there are <Latex>$a$</Latex> litres in jug A, and <Latex>$b$</Latex> litres in jug B.</p>

<p><Latex>$(0,0)$</Latex> -&gt; <Latex>$(8,0)$</Latex> -&gt; <Latex>$(3,5)$</Latex> -&gt; <Latex>$(3,0)$</Latex> -&gt; <Latex>$(0,3)$</Latex> -&gt; <Latex>$(8,3)$</Latex> -&gt; <Latex>$(6,5)$</Latex> -&gt; <Latex>$(6,0)$</Latex> -&gt; <Latex>$(1,5)$</Latex> -&gt; <Latex>$(1,0)$</Latex></p>

</Proof>

</Spoiler>

<p>Now it's time for every mathematician's favourite question: can we generalize it?</p>

<p>We start in the state <Latex>$(0,0)$</Latex> and want to end in the state <Latex>$(1,0)$</Latex> (goal state)<sup className="footnote-ref" id="fnref-1"><a href="#fn-1">1</a></sup>. Notice how <strong>one jug must always be empty or full</strong>, due to the rules of the question ("it is impossible to tell how much water is in a jug unless it is completely full or empty"). Therefore we can deduce that in a valid solution that uses as few operations as possible<sup className="footnote-ref" id="fnref-2"><a href="#fn-2">2</a></sup>, the total amount of water <strong>only changes by 5 or 8</strong>. This is because:</p>

<ul>
<li>transferring water from one jug to another does not change the total amount</li>
<li>filling an empty jug will change the total amount by 5 or 8.</li>
<li>filling a non-empty but non-full jug is pointless, because the other jug must be empty or full, thus we would obtain the state of both jugs full, or one jug full and one empty, which is backwards progress because those states can be easily reached from <Latex>$(0,0)$</Latex> in 1 or 2 moves.</li>
<li>filling a full jug does nothing</li>
</ul>

<p>So now, we have traction on the problem: the total amount of water is initially 0, finally 1, and only changes by 5 or 8. In the general case of the jug capacities being <Latex>$a$</Latex> and <Latex>$b$</Latex>, the total must start at 0, end at 1, and change by <Latex>$a$</Latex> or <Latex>$b$</Latex> at each step.</p>

<p>Therefore, if we can solve the problem then <em>we must be able to write 1 as a linear combination of <Latex>$a$</Latex> and <Latex>$b$</Latex></em>, i.e. we must be able to find integers <Latex>$x,y$</Latex> such that <Latex>$ax + by = 1$</Latex>, because multiplication is repeated addition.</p>

<p>In the case of 5 and 8, we can write <Latex>$1 = 8 \cdot 2 - 5 \cdot 3$</Latex>, i.e. <Latex>$1 = 8 + 8 - 5 - 5 - 5$</Latex>.</p>

<p>And so, we've motivated the main question:</p>

<blockquote>
  <p>Given integers <Latex>$a,b$</Latex>, do there exist integers <Latex>$x,y$</Latex> such that <Latex>$ax+by=1$</Latex>?</p>
</blockquote>

<p>If there do not, then the puzzle can't be solved.<sup className="footnote-ref" id="fnref-3"><a href="#fn-3">3</a></sup></p>

<div className="text-2xl font-bold group flex space-x-1 pt-2 pb-2 mt-4"><h2 id="numerical-evidence" className="underline underline-offset-2">Numerical Evidence</h2><Link href="#numerical-evidence" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/3-bezout-egcd#numerical-evidence", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-subtle">¶</Link></div>

<p>The first thing we might note is that, <Latex>$ax+by$</Latex> will always by divisible by <Latex>$gcd(a,b)$</Latex>, no matter what integers <Latex>$x$</Latex> and <Latex>$y$</Latex> we choose (see Lemma 5 in part 1). For example if <Latex>$a$</Latex> is even (divisible by 2) and <Latex>$b$</Latex> is even, then <Latex>$ax$</Latex> and <Latex>$by$</Latex> will both be even, so <Latex>$ax+by$</Latex> will be even.</p>

<p>Therefore, if we want <Latex>$ax+by$</Latex> to equal 1, we need <Latex>$gcd(a,b)$</Latex> to be 1, i.e. <Latex>$a$</Latex> and <Latex>$b$</Latex> share no common factors (are "<strong>coprime</strong>").</p>

<p>Now what if they <em>are</em> coprime, say, a=5 and b=8?</p>

<p>The key is to write 8 = 5+3. Then a linear combination as 8 and 5 can be rewritten as a linear combination of 3 and 5, and vice versa. Because <Latex>$8\cdot x + 5 \cdot y$</Latex> <Latex>$= (3 + 5) \cdot x + 5 \cdot y$</Latex> <Latex>$= 3 \cdot x + 5 \cdot (x+y)$</Latex>. Similarly, a linear combination of 3 and 5 can be transformed into a combination of 3 and 2, which can be transformed into a combination of 1 and 2. But we can always write 1 as a linear combination of 1 and 2, i.e. <Latex>$1 = 1\cdot 1 + 2\cdot 0$</Latex>. So theoretically, we should be able to "undo" our sequence of transformations to get back to the combination of 5 and 8!</p>

<p>Let's try:</p>

<blockquote>
  <p><span className="block overflow-auto latex-display-wrapper"><Latex>$$1 = 1\cdot 1 + 2\cdot 0$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = (3-2)\cdot 1 + 2\cdot 0$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 3\cdot 1 + 2\cdot (0-1)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 3\cdot 1 + (5-3)\cdot (-1)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 3\cdot (1+1) + 5\cdot (-1)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = (8-5)\cdot 2 + 5\cdot (-1)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 8\cdot 2 + 5\cdot (-1-2)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 8\cdot 2 - 5\cdot 3$$</Latex></span></p>
</blockquote>

<p>Which is a linear combination of 5 and 8!</p>

<p>Now what about <Latex>$a=155$</Latex> and <Latex>$b=27$</Latex>?</p>

<p>Let's do the same thing. Note that a linear combination of 155 and 27 is a linear combination of (27*5 + 20) and 27, which is a linear combination of 20 and 27 because <Latex>$155x + 27y$</Latex> <Latex>$ = (27\cdot 5 + 20)x + 27y$</Latex> <Latex>$= 27(5x+y) + 20x$</Latex>. And so on, this is a linear combination of 7 and 20, which is a combination of 7 and 6 (because 20 divided by 7 has remainder 6), which is a combination of 7-6=1 and 6. We've hit 1, so we can start building up the desired combination by going backwards.</p>

<blockquote>
  <p><span className="block overflow-auto latex-display-wrapper"><Latex>$$1 = 1\cdot 1 + 6\cdot 0$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = (7-6)\cdot 1 + 6\cdot 0$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 7\cdot 1 + 6\cdot (0-1)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 7\cdot 1 + (20-2\cdot 7)\cdot (-1)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 7\cdot (1+2\cdot 1) + 20\cdot (-1)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = (27-20)\cdot 3 + 20\cdot (-1)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 27\cdot 3 + 20\cdot (-1-3)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 27\cdot 3 + (155-5\cdot 27)\cdot (-4)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 27\cdot (3+5\cdot 4) + (155\cdot (-4)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 27\cdot 23 - 155\cdot 4$$</Latex></span></p>
</blockquote>

<p>Are you starting to get the idea? Let's do one more example (I also strongly recommend trying some on your own). This time, we'll write out the divisions that we're doing at the start, as well as the reconstruction steps.</p>

<blockquote>
  <p><em><Latex>$a = 259, b = 443$</Latex></em></p>
  
  <p>First, our division steps that "reduce" the problem:</p>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$443 = 259 \cdot 1 + 184 \text&#123;, new pair is (259,184)&#125;$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$259 = 184 \cdot 1 + 75 \text&#123;, new pair is (184,75)&#125;$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$184 = 75 \cdot 2 + 34 \text&#123;, new pair is (75,34)&#125;$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$75 = 34 \cdot 2 + 7 \text&#123;, new pair is (34,7)&#125;$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$34 = 7 \cdot 4 + 6 \text&#123;, new pair is (7,6)&#125;$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$7 = 6 \cdot 1 + 1 \text&#123;, new pair is (6,1)&#125;$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$6 = 1 \cdot 6 + 0 \text&#123;, new pair is (1,0)&#125;$$</Latex></span>
  
  <p>We stop once we hit (1,0). Now, <Latex>$1 = 1\cdot 1 - 0\cdot 0$</Latex> so we can start reconstructing, by travelling back up the list of divisions.</p>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$1 = 1\cdot 1 - 0 \cdot 0$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 1\cdot 1 - (6 - 1\cdot 6) \cdot 0 \text&#123; (see last line of the division list)&#125;$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 1\cdot (1+6\cdot 0) - 6 \cdot 0$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = (7-6 \cdot 1)\cdot 1 - 6 \cdot 0 \text&#123; (see penultimate line)&#125;$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 7\cdot 1 - 6 \cdot (0+1\cdot 1)$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 7\cdot 1 - (34 - 7 \cdot 4) \cdot 1 \text&#123; (see... etc)&#125;$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 7\cdot (1+4\cdot 1) - 34 \cdot 1$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = (75 - 34\cdot 2)\cdot 5 - 34 \cdot 1$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 75\cdot 5 - 34 \cdot (1+2\cdot 5)$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 75\cdot 5 - (184 - 75 \cdot 2) \cdot 11$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 75\cdot (5 + 2\cdot 11) - 184 \cdot 11$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = (259-184\cdot 1)\cdot 27 - 184 \cdot 11$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 259\cdot 27 - 184 \cdot (11 + 1\cdot 27)$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 259\cdot 27 - (443 - 259 \cdot 1) \cdot 38$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 259\cdot (27 + 1\cdot 38) - 443 \cdot 38$$</Latex></span>
  
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = 259\cdot 65 - 443 \cdot 38$$</Latex></span>
  
  <p>which is a solution.</p>
</blockquote>

<p>Note that I kept the sign in the middle to be negative, which looks like it made all the coefficients positive<sup className="footnote-ref" id="fnref-4"><a href="#fn-4">4</a></sup>.</p>

<p>By the way, this repeated division process (not including the reconstructing) is called <strong>Euclid's Algorithm</strong>, and is used to find the gcd of two numbers efficiently<sup className="footnote-ref" id="fnref-5"><a href="#fn-5">5</a></sup>. In our case we were finding the gcd of 259 and 443, which is 1, so we ended up with (1,0). Feel free to experiment with what would happen if we had <Latex>$gcd(a,b) \gt 1$</Latex>. If we include the reconstructing, then the process of finding a solution to <Latex>$ax+by=1$</Latex> is called the <em>extended</em> Euclidean algorithm (<strong>egcd</strong>). There are different ways to construct the solution, one of which is exactly as we've done here. (Feel free to try and generalize what we've been doing).</p>

<p>As long as the initial repeated division (Euclid's algorithm) ends with the pair (1,0), we can perform the reconstruction to find a solution to <Latex>$ax + by = 1$</Latex>. In general, Euclid's algorithm ends with the pair being <Latex>$(gcd(a,b),0)$</Latex>, so if we do the reconstruction process, we will be able to find a solution to <Latex>$ax + by = gcd(a,b)$</Latex>.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-2 pb-2 mt-4"><h2 id="bezouts-lemma-proof" className="underline underline-offset-2">Bezout's Lemma: Proof</h2><Link href="#bezouts-lemma-proof" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/3-bezout-egcd#bezouts-lemma-proof", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-subtle">¶</Link></div>

<p>Let's switch to our axiom world for a second, to formalize the lemma and prove it.</p>

<Thm name="Bezout's Lemma" outofline>

<p>For any two positive integers <Latex>$a,b$</Latex>, there exist integers <Latex>$x,y$</Latex> such that <Latex>$ax + by = gcd(a,b)$</Latex>.</p>

</Thm>

<p>Given that we want to use the well-ordering principle as a proof technique (since it's one of our axioms), we could try to consider the set of all possible <Latex>$ax+by$</Latex> (a,b fixed, x,y vary) and take the smallest one, <Latex>$e$</Latex>. Then, if <Latex>$e \neq gcd(a,b)$</Latex> we somehow want to generate an element of the set that is smaller than <Latex>$e$</Latex>, so that we can show a contradiction. </p>

<p>Let's think about this on the number line. Suppose <Latex>$a,b$</Latex> coprime for simplicity; then we want to show that there is a solution to <Latex>$ax+by = 1$</Latex>. If we start at 0 and are allowed to jump left or right by <Latex>$a$</Latex> or <Latex>$b$</Latex>, can we get to 1?</p>

<p>Well, if we can't, i.e. if the smallest positive number we could reach was <Latex>$e$</Latex> where <Latex>$e\gt 1$</Latex>, then we can essentially think of "going from 0 to e" as one operation. Then we can go from 0 to e, e to 2e, 2e to 3e, etc., until we get close to <Latex>$a$</Latex> on the number line. By the division algorithm, we can always land in the region between <Latex>$a,a+e-1$</Latex> inclusive. But then we can travel left by a, and we will be in the region between <Latex>$0, e-1$</Latex> inclusive, which is a contradiction because we'd be able to reach a smaller number than <Latex>$e$</Latex>.</p>

<Proof name="of Bezout's Lemma" outofline>

<p>Let <Latex>$a,b \in \mathbb&#123;N&#125;$</Latex>. Consider the set</p>

<span className="block overflow-auto latex-display-wrapper"><Latex>$$S = \&#123;n \in \mathbb&#123;N&#125; \mid n = ax + by,\; x,y \in \mathbb&#123;Z&#125;\&#125;$$</Latex></span>

<p>This set is nonempty (since, for example, <Latex>$a \in S$</Latex>) and a subset of the naturals by construction. Thus by the <strong>well-ordering principle</strong>, S has a least element, say <Latex>$e = ax_0 + by_0$</Latex>.</p>

<Thm type="Claim" unquoted>

<p><Latex>$e \mid a$</Latex>.</p>

<Proof unquoted unbolded>

<p>By the <strong>Divison Algorithm</strong>, write <Latex>$a = qe + r$</Latex> with <Latex>$q \in \mathbb&#123;Z&#125;$</Latex> and <Latex>$0 \leq r \lt e$</Latex>. Then <Latex>$r = a - q(ax_0 + by_0)$</Latex> is a linear combination of <Latex>$a$</Latex> and <Latex>$b$</Latex>. But <Latex>$0 \leq r \lt e$</Latex>, thus either <Latex>$r=0$</Latex>, or <Latex>$r \in S$</Latex> with <Latex>$r \lt e$</Latex>. Since the second option contradicts the minimality of <Latex>$e$</Latex>, we must have <Latex>$r=0$</Latex>, and so <Latex>$a = qe + 0$</Latex> i.e. <Latex>$e \mid a$</Latex>.</p>

</Proof>

</Thm>

<p>Now by the claim, <Latex>$e \mid a$</Latex>. Similarly, repeating the above argument analogously for <Latex>$b$</Latex>, we have <Latex>$e \mid b$</Latex>. Thus <Latex>$e$</Latex> is a common divisor of <Latex>$a$</Latex> and <Latex>$b$</Latex>, so <Latex>$e \leq gcd(a,b)$</Latex> by definition of "greatest".</p>

<p>But also, recall that <Latex>$e = ax_0 + by_0$</Latex>. Since the gcd of a and b divides the RHS by <strong>Lemma 4</strong> of the lemma list from part 1, we have that <Latex>$gcd(a,b) \mid e$</Latex>, and so <Latex>$e \geq gcd(a,b)$</Latex> by <strong>Lemma 19</strong>.</p>

<p>Overall, since <Latex>$e \leq gcd(a,b)$</Latex> and <Latex>$e \geq gcd(a,b)$</Latex>, we have <Latex>$e = gcd(a,b)$</Latex>. So <Latex>$gcd(a,b) = e = ax_0 + by_0$</Latex>, so <Latex>$gcd(a,b)$</Latex> can be written as a linear combination of <Latex>$a$</Latex> and <Latex>$b$</Latex>. Done.</p>

</Proof>

<div className="text-2xl font-bold group flex space-x-1 pt-2 pb-2 mt-4"><h2 id="magic-box" className="underline underline-offset-2">Magic box</h2><Link href="#magic-box" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/3-bezout-egcd#magic-box", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-subtle">¶</Link></div>

<p>Let's try another concrete example: finding a solution to <Latex>$29x + 11y = 1$</Latex>.</p>

<p>We could do what we did before, which was the Euclidean Algorithm and then building a solution <strong>in reverse</strong><sup className="footnote-ref" id="fnref-6"><a href="#fn-6">6</a></sup>. But what if we try the same thing but going forwards?</p>

<blockquote>
  <p><span className="block overflow-auto latex-display-wrapper"><Latex>$$29x + 11y = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$(2\cdot 11 + 7)x + 11y = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$7x + 11(2x+y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$7x + (7\cdot 1+4)(2x+y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$7(3x+y) + 4(2x+y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$(4+3)(3x+y) + 4(2x+y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$3(3x+y) + 4(5x+2y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$3(3x+y) + (3+1)(5x+2y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$3(8x+3y) + 1(5x+2y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$(3\cdot 1 + 0)(8x+3y) + 1(5x+2y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$0(8x+3y) + 1(29x + 11y) = 1$$</Latex></span></p>
</blockquote>

<p>Uh, oh, it looks like we started with <Latex>$29x + 11y = 1$</Latex> and ended up with <Latex>$0 + 1(29x+11y) = 1$</Latex>. Did we go in a circle? It certainly looks like it, apart from one thing - why did we get <Latex>$(8x+3y)$</Latex> in that bracket? Surely there's something special about it.</p>

<p>Recall that, when we built up the solution in reverse, we started with "<Latex>$0\cdot0 + 1\cdot 1 = 1$</Latex>" then built it up.
So here, looking at the last line of the above, why don't we set <Latex>$8x + 3y = 0$</Latex>?<sup className="footnote-ref" id="fnref-7"><a href="#fn-7">7</a></sup> This is easy to find a solution to, e.g. <Latex>$x=-3, y=8$</Latex>.</p>

<p>What is <Latex>$29x+11y$</Latex> when <Latex>$x=3$</Latex> and <Latex>$y=-8$</Latex>?</p>

<p>It's <em>one</em>!!
So could it be that the significance of <Latex>$(8x+3y)$</Latex> is that it gives a solution?</p>

<p>In fact, it looks like something even better is true: for convenience, I'll write a compressed version of what we did again:</p>

<blockquote>
  <p><span className="block overflow-auto latex-display-wrapper"><Latex>$$29x + 11y = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$7x + 11(2x+y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$7(3x+y) + 4(2x+y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$3(3x+y) + 4(5x+2y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$3(8x+3y) + 1(5x+2y) = 1$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$0(8x+3y) + 1(29x + 11y) = 1$$</Latex></span></p>
</blockquote>

<p>Look at the coefficients of <Latex>$x$</Latex> and <Latex>$y$</Latex> in the last line: it fits the pattern that <Latex>$11\cdot 8 - 29\cdot 3 = 1$</Latex></p>

<p>Look at the coefficients in the penultimate line: it fits the pattern that <Latex>$2\cdot 8 - 5\cdot 3 = 1$</Latex></p>

<p>Look at the coefficients in the third-to-last line: it fits the pattern that <Latex>$3\cdot 2 - 5\cdot 1 = 1$</Latex></p>

<p>Etc.: <strong>it's true for all the lines!</strong></p>

<p>If we look at these brackets, and list them out in order:</p>

<p><Latex>$(0x+1y)$</Latex>, <Latex>$(1x+0y)$</Latex>, <Latex>$(2x+y)$</Latex>, <Latex>$(3x+y)$</Latex>, <Latex>$(5x+2y)$</Latex>, <Latex>$(8x+3y)$</Latex>, <Latex>$(29x+11y)$</Latex></p>

<p>Let's stop writing the x and y, and put these in a table instead, where each column represents a bracket:</p>

<table>
    <tbody>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>5</td>
            <td>8</td>
            <td>29</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>11</td>
        </tr>
    </tbody>
</table>

<p>Then, arranged like this, the <ProminentLink href='https://brilliant.org/wiki/expansion-of-determinants/'>determinant</ProminentLink> of each 2x2 square alternates between 1 and -1.</p>

<p>Now, let's think about how we generated these brackets.</p>

<p>Let's say we have written the line <Latex>$m(ax+by) + n(cx+dy)$</Latex> , with <Latex>$m \gt n$</Latex>.
For example, if <Latex>$m=3$</Latex>, <Latex>$a=8$</Latex>, <Latex>$b=3$</Latex>, <Latex>$n=1$</Latex>, <Latex>$c=5$</Latex>, <Latex>$d=2$</Latex> then we have the penultimate line of the above.</p>

<p>So what's the next line? Well, we reduce: write <Latex>$m = qn + m'$</Latex>, so <Latex>$q$</Latex> is the next quotient in the Euclidean algorithm, and <Latex>$m'$</Latex> is the remainder.</p>

<span className="block overflow-auto latex-display-wrapper"><Latex>$$m(ax + by) + n(cx + dy)$$</Latex></span>

<span className="block overflow-auto latex-display-wrapper"><Latex>$$ = (qn+m')(ax + by) + n(cx + dy)$$</Latex></span>

<span className="block overflow-auto latex-display-wrapper"><Latex>$$ = m'(ax + by) + n(q(ax+by)+(cx + dy))$$</Latex></span>

<span className="block overflow-auto latex-display-wrapper"><Latex>$$ = m'(ax + by) + n((qa+c)x+(qb+d)y)$$</Latex></span>

<p>And so, if we have the two brackets <Latex>$(cx+dy)$</Latex> and <Latex>$(ax+by)$</Latex>, then the next bracket is <Latex>$((qa+c)x + (qb+d)y)$</Latex>.</p>

<p>Writing this in the table form, if we currently have two adjacent columns like this:</p>

<table>
    <tbody>
        <tr>
            <td>...</td>
            <td><Latex>$c$</Latex></td>
            <td><Latex>$a$</Latex></td>
        </tr>
        <tr>
            <td>...</td>
            <td><Latex>$d$</Latex></td>
            <td><Latex>$b$</Latex></td>
        </tr>
    </tbody>
</table>

<p>Then the next column is like this:</p>

<table>
    <tbody>
        <tr>
            <td>...</td>
            <td><Latex>$c$</Latex></td>
            <td><Latex>$a$</Latex></td>
            <td><Latex>$qa+c$</Latex></td>
        </tr>
        <tr>
            <td>...</td>
            <td><Latex>$d$</Latex></td>
            <td><Latex>$b$</Latex></td>
            <td><Latex>$qb+d$</Latex></td>
        </tr>
    </tbody>
</table>

<p>And so, if we put the quotients in a row on top:</p>

<table>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td><Latex>$q_0$</Latex></td>
            <td>...</td>
            <td><Latex>$q_&#123;i-2&#125;$</Latex></td>
            <td><Latex>$q_&#123;i-1&#125;$</Latex></td>
            <td><Latex>$q_i$</Latex></td>
            <td>...</td>
        </tr>
        <tr>
            <td><Latex>$0$</Latex></td>
            <td><Latex>$1$</Latex></td>
            <td><Latex>$q_0\cdot 1 + 0$</Latex></td>
            <td>...</td>
            <td><Latex>$c$</Latex></td>
            <td><Latex>$a$</Latex></td>
            <td><Latex>$q_ia+c$</Latex></td>
            <td>...</td>
        </tr>
        <tr>
            <td><Latex>$1$</Latex></td>
            <td><Latex>$0$</Latex></td>
            <td><Latex>$q_0 \cdot 0 + 1$</Latex></td>
            <td>...</td>
            <td><Latex>$d$</Latex></td>
            <td><Latex>$b$</Latex></td>
            <td><Latex>$q_ib+d$</Latex></td>
            <td>...</td>
        </tr>
    </tbody>
</table>

<p>Wow, so now we have an efficient, convenient way to compute solutions!</p>

<p>It's almost... <em>magic!</em> So magic, it's called the <strong>magic box!</strong></p>

<p>Let's do a couple of examples. First, let's summarize how we found a solution to <Latex>$29x + 11y = 1$</Latex>:</p>

<blockquote>
  <p>We first do Euclid's Algorithm to find the quotients:</p>
  
  <p><Latex>$29 =$</Latex> <em><Latex>$2$</Latex></em> <Latex>$\cdot 11 + 7$</Latex></p>
  
  <p><Latex>$11 =$</Latex> <em><Latex>$1$</Latex></em> <Latex>$\cdot 7 + 4$</Latex></p>
  
  <p><Latex>$7 =$</Latex> <em><Latex>$1$</Latex></em> <Latex>$\cdot 4 + 3$</Latex></p>
  
  <p><Latex>$4 =$</Latex> <em><Latex>$1$</Latex></em> <Latex>$\cdot 3 + 1$</Latex></p>
  
  <p><Latex>$3 =$</Latex> <em><Latex>$3$</Latex></em> <Latex>$\cdot 1 + 0$</Latex></p>
  
  <p>And so the quotients are <Latex>$[2, 1, 1, 1, 3]$</Latex>.</p>
  
  <p>Then we draw out the start of the magic box:</p>
  
  <table>
      <tbody>
          <tr>
              <td></td>
              <td></td>
              <td><Latex>$2$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$3$</Latex></td>
          </tr>
          <tr>
              <td><Latex>$0$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$0$</Latex></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
      </tbody>
  </table>
  
  <p>Now we fill out each row from left to right: each number is equal to the quotient above it in the top row,  multiplied by the number to the left of it, plus the number two squares to the left of it.</p>
  
  <table>
      <tbody>
          <tr>
              <td></td>
              <td></td>
              <td><Latex>$2$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$3$</Latex></td>
          </tr>
          <tr>
              <td><Latex>$0$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><em><Latex>$2\cdot1 + 0 = 2$</Latex></em></td>
              <td><em><Latex>$1\cdot 2 + 1 = 3$</Latex></em></td>
              <td>etc.</td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$0$</Latex></td>
              <td><em><Latex>$2\cdot 0 + 1 = 1$</Latex></em></td>
              <td><em><Latex>$1 \cdot 1 + 0 = 1$</Latex></em></td>
              <td>etc.</td>
              <td></td>
              <td></td>
          </tr>
      </tbody>
  </table>
  
  <p>Then, when we get the whole magic box:</p>
  
  <table>
      <tbody>
          <tr>
              <td></td>
              <td></td>
              <td><Latex>$2$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$3$</Latex></td>
          </tr>
          <tr>
              <td><Latex>$0$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$2$</Latex></td>
              <td><Latex>$3$</Latex></td>
              <td><Latex>$5$</Latex></td>
              <td><Latex>$8$</Latex></td>
              <td><Latex>$29$</Latex></td>
          </tr>
          <tr>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$0$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$1$</Latex></td>
              <td><Latex>$2$</Latex></td>
              <td><Latex>$3$</Latex></td>
              <td><Latex>$11$</Latex></td>
          </tr>
      </tbody>
  </table>
  
  <p>The last 2x2 square gives us a solution to <Latex>$29x - 11y = 1$</Latex>, namely <Latex>$x = 3$</Latex>, <Latex>$y=8$</Latex>.</p>
</blockquote>

<p>Now try if yourself! Compute the magic box for <Latex>$121x + 43y = 1$</Latex>, and hence find an integer solution. Check against the answer below.</p>

<Spoiler>

<table>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td><Latex>$2$</Latex></td>
            <td><Latex>$1$</Latex></td>
            <td><Latex>$4$</Latex></td>
            <td><Latex>$2$</Latex></td>
            <td><Latex>$1$</Latex></td>
            <td><Latex>$2$</Latex></td>
        </tr>
        <tr>
            <td><Latex>$0$</Latex></td>
            <td><Latex>$1$</Latex></td>
            <td><Latex>$2$</Latex></td>
            <td><Latex>$3$</Latex></td>
            <td><Latex>$14$</Latex></td>
            <td><Latex>$31$</Latex></td>
            <td><Latex>$45$</Latex></td>
            <td><Latex>$121$</Latex></td>
        </tr>
        <tr>
            <td><Latex>$1$</Latex></td>
            <td><Latex>$0$</Latex></td>
            <td><Latex>$1$</Latex></td>
            <td><Latex>$1$</Latex></td>
            <td><Latex>$5$</Latex></td>
            <td><Latex>$11$</Latex></td>
            <td><Latex>$16$</Latex></td>
            <td><Latex>$43$</Latex></td>
        </tr>
    </tbody>
</table>

<p>The determinant of the last 2x2 box is <Latex>$\pm 1$</Latex>, and we can figure out which one by counting the number of columns (since the determinant of each 2x2 box <em>alternates</em> between 1 and -1). There are 6 columns (excluding the first 2) and so the determinant flips 6 times. It starts at <Latex>$0\cdot0 = 1\cdot1 = -1$</Latex> and so the determinant of the last 2x2 box is <Latex>$-1$</Latex>.</p>

<p>Hence <Latex>$45 \cdot 43 - 121 \cdot 16 = -1$</Latex>, so <Latex>$121 \cdot 16 + 43 \cdot (-45) = 1$</Latex>. We've found our solution, namely <Latex>$x = 16$</Latex>, <Latex>$y = -45$</Latex>.</p>

</Spoiler>

<p>The magic box also relates to <ProminentLink href="https://brilliant.org/wiki/continued-fractions/">continued fractions</ProminentLink>: we actually computed the convergents of <Latex>$121/43$</Latex>, i.e. (best possible) rational approximations using smaller integers. Really, the "magic" of it is that it feels inside-out: originally we were using the quotients in reverse order, but now, we're using them in the same order that we compute them<sup className="footnote-ref" id="fnref-8"><a href="#fn-8">8</a></sup>.</p>

<p>I won't prove that the magic box works, because this article is quite long already. But feel free to try yourself (hint: induction).</p>

<p>Finally, it will feel satisfying to actually write the magic box in terms of 2x2 matrices, since we're talking about determinants:</p>

<blockquote>
  <p>Let's say the list of quotients is <Latex>$t_1, t_2, \cdots, t_n$</Latex> .</p>
  
  <p>Then we build a sequence of matrices (which are the 2x2 squares in the magic box, from left to right): the first is <Latex>$M_1 = \begin&#123;pmatrix&#125;0 &amp; 1\\1 &amp; 0\end&#123;pmatrix&#125;$</Latex>, and for any matrix <Latex>$M_i$</Latex> in the sequence with <Latex>$M_i = \begin&#123;pmatrix&#125; p_i &amp; p_&#123;i+1&#125; \\ q_i &amp; q_&#123;i+1&#125; \end&#123;pmatrix&#125;$</Latex>, we have that:
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$M_&#123;i+1&#125; = \begin&#123;pmatrix&#125; p_&#123;i+1&#125; &amp; t_i p_&#123;i+1&#125; + p_i \\ q_&#123;i+1&#125; &amp; t_i q_&#123;i+1&#125; + q_i\end&#123;pmatrix&#125;$$</Latex></span>
  Now we can write this in terms of <Latex>$M_i$</Latex> like so:
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$M_&#123;i+1&#125; = \begin&#123;pmatrix&#125; p_&#123;i+1&#125; &amp;  p_i \\ q_&#123;i+1&#125; &amp; q_i\end&#123;pmatrix&#125; + \begin&#123;pmatrix&#125; 0 &amp; t_i p_&#123;i+1&#125; \\ 0 &amp; t_i q_&#123;i+1&#125;\end&#123;pmatrix&#125;$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$= M_i \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; 0 \end&#123;pmatrix&#125; + M_i\begin&#123;pmatrix&#125; 0 &amp; 0 \\ 0 &amp; t_i \end&#123;pmatrix&#125;$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$= M_i \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i \end&#123;pmatrix&#125;$$</Latex></span></p>
  
  <p>Now, using this recurrence, we have that the last 2x2 square in the magic box, the one that gives the solution to <Latex>$ax + by = \pm 1$</Latex>, is:
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$\begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; 0\end&#123;pmatrix&#125; \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_1\end&#123;pmatrix&#125; \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_2\end&#123;pmatrix&#125; (\cdots) \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_n\end&#123;pmatrix&#125;$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = \prod_&#123;0 \leq i \leq n&#125; \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i\end&#123;pmatrix&#125;$$</Latex></span>
  Where we extend the definition of the <Latex>$t_i$</Latex> to include <Latex>$t_0 = 0$</Latex>.</p>
  
  <p>Note: this recurrence also justifies that the determinant of each 2x2 square in the magic box alternates between 1 and -1, because:
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$det(M_&#123;i+1&#125;)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$= det\left(M_i \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i \end&#123;pmatrix&#125;\right)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$= det(M_i) \, det\left(\begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i \end&#123;pmatrix&#125;\right)$$</Latex></span>
  <span className="block overflow-auto latex-display-wrapper"><Latex>$$ = -det(M_i)$$</Latex></span></p>
</blockquote>

<div className="text-2xl font-bold group flex space-x-1 pt-2 pb-2 mt-4"><h2 id="remarks-first-unobvious-result" className="underline underline-offset-2">Remarks: first unobvious result?</h2><Link href="#remarks-first-unobvious-result" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/proving-FTA/3-bezout-egcd#remarks-first-unobvious-result", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-subtle">¶</Link></div>

<p>Bezout's lemma is interesting because it is the first thing we've come across that wouldn't be obvious to an average high-school student. Indeed, most people would say, "why so much rigor?" when we're proving things like the division algorithm that just already <em>feel</em> obvious to everyone.</p>

<p>But that's what a lot of maths is about - ensuring we have rigorous foundations to stand on. In this case, we are all convinced that what we are trying to prove is true, and it does indeed turn out to be provably true, but what about when we're trying to prove something we believe, and it's <em>not</em> true? We need to <em>ensure</em> that all proofs are rigorous (enough), otherwise holes could creep in, and one false assumption would render mathematics ostensibly <DiscreetLink href="https://www.ias.edu/video/voevodsky-80th">inconsistent</DiscreetLink>.</p>

<div className="footnotes">
<hr />
<ol>
<li id="fn-1">
<p>There are technically two goal states: <Latex>$(0,1)$</Latex> and <Latex>$(1,0)$</Latex>, but if we reach one of these then we can reach the other by transferring the water, so it doesn't really matter.&#160;<a href="#fnref-1" className="footnoteBackLink" title="Jump back to footnote 1 in the text.">&#8617;</a></p>
</li>

<li id="fn-2">
<p>This assumption is important, because it lets us deduce that we never fill a non-empty but non-full jug (as that would create unnecessary steps).&#160;<a href="#fnref-2" className="footnoteBackLink" title="Jump back to footnote 2 in the text.">&#8617;</a></p>
</li>

<li id="fn-3">
<p>This is the contrapositive statement of "if the puzzle can be solved, then there do exist integers...".&#160;<a href="#fnref-3" className="footnoteBackLink" title="Jump back to footnote 3 in the text.">&#8617;</a></p>
</li>

<li id="fn-4">
<p>Why?&#160;<a href="#fnref-4" className="footnoteBackLink" title="Jump back to footnote 4 in the text.">&#8617;</a></p>
</li>

<li id="fn-5">
<p>Why does the repeated division process end up finding the gcd? Isn't that magical? Hint: <Latex>$gcd(a,b) = gcd(a-b,b)$</Latex> because something divides both <Latex>$a$</Latex> and <Latex>$b$</Latex> if and only if it divides both <Latex>$a-b$</Latex> and <Latex>$b$</Latex>.&#160;<a href="#fnref-5" className="footnoteBackLink" title="Jump back to footnote 5 in the text.">&#8617;</a></p>
</li>

<li id="fn-6">
<p>This would be quite inconvenient for a computer algorithm, because we use the quotients in the opposite order to which they are generated, which means we have to store all the quotients rather than working with each quotient as it is generated.&#160;<a href="#fnref-6" className="footnoteBackLink" title="Jump back to footnote 6 in the text.">&#8617;</a></p>
</li>

<li id="fn-7">
<p>Actually, we can set it to be anything, because it's multiplied by 0: and we always get an integer solution <Latex>$(x,y)$</Latex> from the two simultaneous equations, because the matrix <Latex>$\begin&#123;pmatrix&#125;8 &amp; 3 \\ 29 &amp; 11\end&#123;pmatrix&#125;$</Latex> has an integral inverse due to its determinant!&#160;<a href="#fnref-7" className="footnoteBackLink" title="Jump back to footnote 7 in the text.">&#8617;</a></p>
</li>

<li id="fn-8">
<p>This is good because a computer can fill in the table at the same time as generating the quotients, so it's very memory efficient.&#160;<a href="#fnref-8" className="footnoteBackLink" title="Jump back to footnote 8 in the text.">&#8617;</a></p>
</li>
</ol>
</div>

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
                        <CopyButton text="tl;dr: A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored. This is part 3, where we discover and prove Bezout&#x27;s lemma using the division algorithm. In general, the level of rigor will decrease as the parts go on, so that the reader doesn&#x27;t get bored to death. But it should be obvious how to fill out everything with complete rigor. Here is a glossary of math symbols. Puzzle: water-jug problem You might have heard this one before: There are two water jugs A and B, of size 8 and 5 litres respectively. They have no markings, so it is impossible to tell how much water is in a jug unless it is completely full or completely empty. There is a sink with a water tap and a drain. How can exactly one litre of water be obtained from the tap using the two jugs? It&#x27;s a fun puzzle - definitely worth playing around with it before reading the solution below. Let $(a,b)$ denote that there are $a$ litres in jug A, and $b$ litres in jug B. $(0,0)$ -&gt; $(8,0)$ -&gt; $(3,5)$ -&gt; $(3,0)$ -&gt; $(0,3)$ -&gt; $(8,3)$ -&gt; $(6,5)$ -&gt; $(6,0)$ -&gt; $(1,5)$ -&gt; $(1,0)$ Now it&#x27;s time for every mathematician&#x27;s favourite question: can we generalize it? We start in the state $(0,0)$ and want to end in the state $(1,0)$ (goal state). Notice how one jug must always be empty or full, due to the rules of the question (&quot;it is impossible to tell how much water is in a jug unless it is completely full or empty&quot;). Therefore we can deduce that in a valid solution that uses as few operations as possible, the total amount of water only changes by 5 or 8. This is because: transferring water from one jug to another does not change the total amount filling an empty jug will change the total amount by 5 or 8. filling a non-empty but non-full jug is pointless, because the other jug must be empty or full, thus we would obtain the state of both jugs full, or one jug full and one empty, which is backwards progress because those states can be easily reached from $(0,0)$ in 1 or 2 moves. filling a full jug does nothing So now, we have traction on the problem: the total amount of water is initially 0, finally 1, and only changes by 5 or 8. In the general case of the jug capacities being $a$ and $b$, the total must start at 0, end at 1, and change by $a$ or $b$ at each step. Therefore, if we can solve the problem then we must be able to write 1 as a linear combination of $a$ and $b$, i.e. we must be able to find integers $x,y$ such that $ax + by = 1$, because multiplication is repeated addition. In the case of 5 and 8, we can write $1 = 8 \cdot 2 - 5 \cdot 3$, i.e. $1 = 8 + 8 - 5 - 5 - 5$. And so, we&#x27;ve motivated the main question: Given integers $a,b$, do there exist integers $x,y$ such that $ax+by=1$? If there do not, then the puzzle can&#x27;t be solved. Numerical Evidence The first thing we might note is that, $ax+by$ will always by divisible by $gcd(a,b)$, no matter what integers $x$ and $y$ we choose (see Lemma 5 in part 1). For example if $a$ is even (divisible by 2) and $b$ is even, then $ax$ and $by$ will both be even, so $ax+by$ will be even. Therefore, if we want $ax+by$ to equal 1, we need $gcd(a,b)$ to be 1, i.e. $a$ and $b$ share no common factors (are &quot;coprime&quot;). Now what if they are coprime, say, a=5 and b=8? The key is to write 8 = 5+3. Then a linear combination as 8 and 5 can be rewritten as a linear combination of 3 and 5, and vice versa. Because $8\cdot x + 5 \cdot y$ $= (3 + 5) \cdot x + 5 \cdot y$ $= 3 \cdot x + 5 \cdot (x+y)$. Similarly, a linear combination of 3 and 5 can be transformed into a combination of 3 and 2, which can be transformed into a combination of 1 and 2. But we can always write 1 as a linear combination of 1 and 2, i.e. $1 = 1\cdot 1 + 2\cdot 0$. So theoretically, we should be able to &quot;undo&quot; our sequence of transformations to get back to the combination of 5 and 8! Let&#x27;s try: $$1 = 1\cdot 1 + 2\cdot 0$$ $$ = (3-2)\cdot 1 + 2\cdot 0$$ $$ = 3\cdot 1 + 2\cdot (0-1)$$ $$ = 3\cdot 1 + (5-3)\cdot (-1)$$ $$ = 3\cdot (1+1) + 5\cdot (-1)$$ $$ = (8-5)\cdot 2 + 5\cdot (-1)$$ $$ = 8\cdot 2 + 5\cdot (-1-2)$$ $$ = 8\cdot 2 - 5\cdot 3$$ Which is a linear combination of 5 and 8! Now what about $a=155$ and $b=27$? Let&#x27;s do the same thing. Note that a linear combination of 155 and 27 is a linear combination of (27*5 + 20) and 27, which is a linear combination of 20 and 27 because $155x + 27y$ $ = (27\cdot 5 + 20)x + 27y$ $= 27(5x+y) + 20x$. And so on, this is a linear combination of 7 and 20, which is a combination of 7 and 6 (because 20 divided by 7 has remainder 6), which is a combination of 7-6=1 and 6. We&#x27;ve hit 1, so we can start building up the desired combination by going backwards. $$1 = 1\cdot 1 + 6\cdot 0$$ $$ = (7-6)\cdot 1 + 6\cdot 0$$ $$ = 7\cdot 1 + 6\cdot (0-1)$$ $$ = 7\cdot 1 + (20-2\cdot 7)\cdot (-1)$$ $$ = 7\cdot (1+2\cdot 1) + 20\cdot (-1)$$ $$ = (27-20)\cdot 3 + 20\cdot (-1)$$ $$ = 27\cdot 3 + 20\cdot (-1-3)$$ $$ = 27\cdot 3 + (155-5\cdot 27)\cdot (-4)$$ $$ = 27\cdot (3+5\cdot 4) + (155\cdot (-4)$$ $$ = 27\cdot 23 - 155\cdot 4$$ Are you starting to get the idea? Let&#x27;s do one more example (I also strongly recommend trying some on your own). This time, we&#x27;ll write out the divisions that we&#x27;re doing at the start, as well as the reconstruction steps. $a = 259, b = 443$ First, our division steps that &quot;reduce&quot; the problem: $$443 = 259 \cdot 1 + 184 \text&#123;, new pair is (259,184)&#125;$$ $$259 = 184 \cdot 1 + 75 \text&#123;, new pair is (184,75)&#125;$$ $$184 = 75 \cdot 2 + 34 \text&#123;, new pair is (75,34)&#125;$$ $$75 = 34 \cdot 2 + 7 \text&#123;, new pair is (34,7)&#125;$$ $$34 = 7 \cdot 4 + 6 \text&#123;, new pair is (7,6)&#125;$$ $$7 = 6 \cdot 1 + 1 \text&#123;, new pair is (6,1)&#125;$$ $$6 = 1 \cdot 6 + 0 \text&#123;, new pair is (1,0)&#125;$$ We stop once we hit (1,0). Now, $1 = 1\cdot 1 - 0\cdot 0$ so we can start reconstructing, by travelling back up the list of divisions. $$1 = 1\cdot 1 - 0 \cdot 0$$ $$ = 1\cdot 1 - (6 - 1\cdot 6) \cdot 0 \text&#123; (see last line of the division list)&#125;$$ $$ = 1\cdot (1+6\cdot 0) - 6 \cdot 0$$ $$ = (7-6 \cdot 1)\cdot 1 - 6 \cdot 0 \text&#123; (see penultimate line)&#125;$$ $$ = 7\cdot 1 - 6 \cdot (0+1\cdot 1)$$ $$ = 7\cdot 1 - (34 - 7 \cdot 4) \cdot 1 \text&#123; (see... etc)&#125;$$ $$ = 7\cdot (1+4\cdot 1) - 34 \cdot 1$$ $$ = (75 - 34\cdot 2)\cdot 5 - 34 \cdot 1$$ $$ = 75\cdot 5 - 34 \cdot (1+2\cdot 5)$$ $$ = 75\cdot 5 - (184 - 75 \cdot 2) \cdot 11$$ $$ = 75\cdot (5 + 2\cdot 11) - 184 \cdot 11$$ $$ = (259-184\cdot 1)\cdot 27 - 184 \cdot 11$$ $$ = 259\cdot 27 - 184 \cdot (11 + 1\cdot 27)$$ $$ = 259\cdot 27 - (443 - 259 \cdot 1) \cdot 38$$ $$ = 259\cdot (27 + 1\cdot 38) - 443 \cdot 38$$ $$ = 259\cdot 65 - 443 \cdot 38$$ which is a solution. Note that I kept the sign in the middle to be negative, which looks like it made all the coefficients positive. By the way, this repeated division process (not including the reconstructing) is called Euclid&#x27;s Algorithm, and is used to find the gcd of two numbers efficiently. In our case we were finding the gcd of 259 and 443, which is 1, so we ended up with (1,0). Feel free to experiment with what would happen if we had $gcd(a,b) \gt 1$. If we include the reconstructing, then the process of finding a solution to $ax+by=1$ is called the extended Euclidean algorithm (egcd). There are different ways to construct the solution, one of which is exactly as we&#x27;ve done here. (Feel free to try and generalize what we&#x27;ve been doing). As long as the initial repeated division (Euclid&#x27;s algorithm) ends with the pair (1,0), we can perform the reconstruction to find a solution to $ax + by = 1$. In general, Euclid&#x27;s algorithm ends with the pair being $(gcd(a,b),0)$, so if we do the reconstruction process, we will be able to find a solution to $ax + by = gcd(a,b)$. Bezout&#x27;s Lemma: Proof Let&#x27;s switch to our axiom world for a second, to formalize the lemma and prove it. For any two positive integers $a,b$, there exist integers $x,y$ such that $ax + by = gcd(a,b)$. Given that we want to use the well-ordering principle as a proof technique (since it&#x27;s one of our axioms), we could try to consider the set of all possible $ax+by$ (a,b fixed, x,y vary) and take the smallest one, $e$. Then, if $e \\neq gcd(a,b)$ we somehow want to generate an element of the set that is smaller than $e$, so that we can show a contradiction. Let&#x27;s think about this on the number line. Suppose $a,b$ coprime for simplicity; then we want to show that there is a solution to $ax+by = 1$. If we start at 0 and are allowed to jump left or right by $a$ or $b$, can we get to 1? Well, if we can&#x27;t, i.e. if the smallest positive number we could reach was $e$ where $e\gt 1$, then we can essentially think of &quot;going from 0 to e&quot; as one operation. Then we can go from 0 to e, e to 2e, 2e to 3e, etc., until we get close to $a$ on the number line. By the division algorithm, we can always land in the region between $a,a+e-1$ inclusive. But then we can travel left by a, and we will be in the region between $0, e-1$ inclusive, which is a contradiction because we&#x27;d be able to reach a smaller number than $e$. Let $a,b \in \mathbb&#123;N&#125;$. Consider the set $$S = \&#123;n \in \mathbb&#123;N&#125; \mid n = ax + by,\; x,y \in \mathbb&#123;Z&#125;\&#125;$$ This set is nonempty (since, for example, $a \in S$) and a subset of the naturals by construction. Thus by the well-ordering principle, S has a least element, say $e = ax_0 + by_0$. $e \mid a$. By the Divison Algorithm, write $a = qe + r$ with $q \in \mathbb&#123;Z&#125;$ and $0 \leq r \lt e$. Then $r = a - q(ax_0 + by_0)$ is a linear combination of $a$ and $b$. But $0 \leq r \lt e$, thus either $r=0$, or $r \in S$ with $r \lt e$. Since the second option contradicts the minimality of $e$, we must have $r=0$, and so $a = qe + 0$ i.e. $e \mid a$. Now by the claim, $e \mid a$. Similarly, repeating the above argument analogously for $b$, we have $e \mid b$. Thus $e$ is a common divisor of $a$ and $b$, so $e \leq gcd(a,b)$ by definition of &quot;greatest&quot;. But also, recall that $e = ax_0 + by_0$. Since the gcd of a and b divides the RHS by Lemma 4 of the lemma list from part 1, we have that $gcd(a,b) \mid e$, and so $e \geq gcd(a,b)$ by Lemma 19. Overall, since $e \leq gcd(a,b)$ and $e \geq gcd(a,b)$, we have $e = gcd(a,b)$. So $gcd(a,b) = e = ax_0 + by_0$, so $gcd(a,b)$ can be written as a linear combination of $a$ and $b$. Done. Magic box Let&#x27;s try another concrete example: finding a solution to $29x + 11y = 1$. We could do what we did before, which was the Euclidean Algorithm and then building a solution in reverse. But what if we try the same thing but going forwards? $$29x + 11y = 1$$ $$(2\cdot 11 + 7)x + 11y = 1$$ $$7x + 11(2x+y) = 1$$ $$7x + (7\cdot 1+4)(2x+y) = 1$$ $$7(3x+y) + 4(2x+y) = 1$$ $$(4+3)(3x+y) + 4(2x+y) = 1$$ $$3(3x+y) + 4(5x+2y) = 1$$ $$3(3x+y) + (3+1)(5x+2y) = 1$$ $$3(8x+3y) + 1(5x+2y) = 1$$ $$(3\cdot 1 + 0)(8x+3y) + 1(5x+2y) = 1$$ $$0(8x+3y) + 1(29x + 11y) = 1$$ Uh, oh, it looks like we started with $29x + 11y = 1$ and ended up with $0 + 1(29x+11y) = 1$. Did we go in a circle? It certainly looks like it, apart from one thing - why did we get $(8x+3y)$ in that bracket? Surely there&#x27;s something special about it. Recall that, when we built up the solution in reverse, we started with &quot;$0\cdot0 + 1\cdot 1 = 1$&quot; then built it up. So here, looking at the last line of the above, why don&#x27;t we set $8x + 3y = 0$? This is easy to find a solution to, e.g. $x=-3, y=8$. What is $29x+11y$ when $x=3$ and $y=-8$? It&#x27;s one!! So could it be that the significance of $(8x+3y)$ is that it gives a solution? In fact, it looks like something even better is true: for convenience, I&#x27;ll write a compressed version of what we did again: $$29x + 11y = 1$$ $$7x + 11(2x+y) = 1$$ $$7(3x+y) + 4(2x+y) = 1$$ $$3(3x+y) + 4(5x+2y) = 1$$ $$3(8x+3y) + 1(5x+2y) = 1$$ $$0(8x+3y) + 1(29x + 11y) = 1$$ Look at the coefficients of $x$ and $y$ in the last line: it fits the pattern that $11\cdot 8 - 29\cdot 3 = 1$ Look at the coefficients in the penultimate line: it fits the pattern that $2\cdot 8 - 5\cdot 3 = 1$ Look at the coefficients in the third-to-last line: it fits the pattern that $3\cdot 2 - 5\cdot 1 = 1$ Etc.: it&#x27;s true for all the lines! If we look at these brackets, and list them out in order: $(0x+1y)$, $(1x+0y)$, $(2x+y)$, $(3x+y)$, $(5x+2y)$, $(8x+3y)$, $(29x+11y)$ Let&#x27;s stop writing the x and y, and put these in a table instead, where each column represents a bracket: 0 1 2 3 5 8 29 1 0 1 1 2 3 11 Then, arranged like this, the determinant of each 2x2 square alternates between 1 and -1. Now, let&#x27;s think about how we generated these brackets. Let&#x27;s say we have written the line $m(ax+by) + n(cx+dy)$ , with $m \gt n$. For example, if $m=3$, $a=8$, $b=3$, $n=1$, $c=5$, $d=2$ then we have the penultimate line of the above. So what&#x27;s the next line? Well, we reduce: write $m = qn + m&#x27;$, so $q$ is the next quotient in the Euclidean algorithm, and $m&#x27;$ is the remainder. $$m(ax + by) + n(cx + dy)$$ $$ = (qn+m&#x27;)(ax + by) + n(cx + dy)$$ $$ = m&#x27;(ax + by) + n(q(ax+by)+(cx + dy))$$ $$ = m&#x27;(ax + by) + n((qa+c)x+(qb+d)y)$$ And so, if we have the two brackets $(cx+dy)$ and $(ax+by)$, then the next bracket is $((qa+c)x + (qb+d)y)$. Writing this in the table form, if we currently have two adjacent columns like this: ... $c$ $a$ ... $d$ $b$ Then the next column is like this: ... $c$ $a$ $qa+c$ ... $d$ $b$ $qb+d$ And so, if we put the quotients in a row on top: $q_0$ ... $q_&#123;i-2&#125;$ $q_&#123;i-1&#125;$ $q_i$ ... $0$ $1$ $q_0\cdot 1 + 0$ ... $c$ $a$ $q_ia+c$ ... $1$ $0$ $q_0 \cdot 0 + 1$ ... $d$ $b$ $q_ib+d$ ... Wow, so now we have an efficient, convenient way to compute solutions! It&#x27;s almost... magic! So magic, it&#x27;s called the magic box! Let&#x27;s do a couple of examples. First, let&#x27;s summarize how we found a solution to $29x + 11y = 1$: We first do Euclid&#x27;s Algorithm to find the quotients: $29 =$ $2$ $\cdot 11 + 7$ $11 =$ $1$ $\cdot 7 + 4$ $7 =$ $1$ $\cdot 4 + 3$ $4 =$ $1$ $\cdot 3 + 1$ $3 =$ $3$ $\cdot 1 + 0$ And so the quotients are $[2, 1, 1, 1, 3]$. Then we draw out the start of the magic box: $2$ $1$ $1$ $1$ $3$ $0$ $1$ $1$ $0$ Now we fill out each row from left to right: each number is equal to the quotient above it in the top row, multiplied by the number to the left of it, plus the number two squares to the left of it. $2$ $1$ $1$ $1$ $3$ $0$ $1$ $2\cdot1 + 0 = 2$ $1\cdot 2 + 1 = 3$ etc. $1$ $0$ $2\cdot 0 + 1 = 1$ $1 \cdot 1 + 0 = 1$ etc. Then, when we get the whole magic box: $2$ $1$ $1$ $1$ $3$ $0$ $1$ $2$ $3$ $5$ $8$ $29$ $1$ $0$ $1$ $1$ $2$ $3$ $11$ The last 2x2 square gives us a solution to $29x - 11y = 1$, namely $x = 3$, $y=8$. Now try if yourself! Compute the magic box for $121x + 43y = 1$, and hence find an integer solution. Check against the answer below. $2$ $1$ $4$ $2$ $1$ $2$ $0$ $1$ $2$ $3$ $14$ $31$ $45$ $121$ $1$ $0$ $1$ $1$ $5$ $11$ $16$ $43$ The determinant of the last 2x2 box is $\pm 1$, and we can figure out which one by counting the number of columns (since the determinant of each 2x2 box alternates between 1 and -1). There are 6 columns (excluding the first 2) and so the determinant flips 6 times. It starts at $0\cdot0 = 1\cdot1 = -1$ and so the determinant of the last 2x2 box is $-1$. Hence $45 \cdot 43 - 121 \cdot 16 = -1$, so $121 \cdot 16 + 43 \cdot (-45) = 1$. We&#x27;ve found our solution, namely $x = 16$, $y = -45$. The magic box also relates to continued fractions: we actually computed the convergents of $121/43$, i.e. (best possible) rational approximations using smaller integers. Really, the &quot;magic&quot; of it is that it feels inside-out: originally we were using the quotients in reverse order, but now, we&#x27;re using them in the same order that we compute them. I won&#x27;t prove that the magic box works, because this article is quite long already. But feel free to try yourself (hint: induction). Finally, it will feel satisfying to actually write the magic box in terms of 2x2 matrices, since we&#x27;re talking about determinants: Let&#x27;s say the list of quotients is $t_1, t_2, \cdots, t_n$ . Then we build a sequence of matrices (which are the 2x2 squares in the magic box, from left to right): the first is $M_1 = \begin&#123;pmatrix&#125;0 &amp; 1\\1 &amp; 0\end&#123;pmatrix&#125;$, and for any matrix $M_i$ in the sequence with $M_i = \begin&#123;pmatrix&#125; p_i &amp; p_&#123;i+1&#125; \\ q_i &amp; q_&#123;i+1&#125; \end&#123;pmatrix&#125;$, we have that: $$M_&#123;i+1&#125; = \begin&#123;pmatrix&#125; p_&#123;i+1&#125; &amp; t_i p_&#123;i+1&#125; + p_i \\ q_&#123;i+1&#125; &amp; t_i q_&#123;i+1&#125; + q_i\end&#123;pmatrix&#125;$$ Now we can write this in terms of $M_i$ like so: $$M_&#123;i+1&#125; = \begin&#123;pmatrix&#125; p_&#123;i+1&#125; &amp; p_i \\ q_&#123;i+1&#125; &amp; q_i\end&#123;pmatrix&#125; + \begin&#123;pmatrix&#125; 0 &amp; t_i p_&#123;i+1&#125; \\ 0 &amp; t_i q_&#123;i+1&#125;\end&#123;pmatrix&#125;$$ $$= M_i \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; 0 \end&#123;pmatrix&#125; + M_i\begin&#123;pmatrix&#125; 0 &amp; 0 \\ 0 &amp; t_i \end&#123;pmatrix&#125;$$ $$= M_i \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i \end&#123;pmatrix&#125;$$ Now, using this recurrence, we have that the last 2x2 square in the magic box, the one that gives the solution to $ax + by = \pm 1$, is: $$\begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; 0\end&#123;pmatrix&#125; \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_1\end&#123;pmatrix&#125; \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_2\end&#123;pmatrix&#125; (\cdots) \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_n\end&#123;pmatrix&#125;$$ $$ = \prod_&#123;0 \leq i \leq n&#125; \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i\end&#123;pmatrix&#125;$$ Where we extend the definition of the $t_i$ to include $t_0 = 0$. Note: this recurrence also justifies that the determinant of each 2x2 square in the magic box alternates between 1 and -1, because: $$det(M_&#123;i+1&#125;)$$ $$= det\left(M_i \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i \end&#123;pmatrix&#125;\right)$$ $$= det(M_i) \, det\left(\begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i \end&#123;pmatrix&#125;\right)$$ $$ = -det(M_i)$$ Remarks: first unobvious result? Bezout&#x27;s lemma is interesting because it is the first thing we&#x27;ve come across that wouldn&#x27;t be obvious to an average high-school student. Indeed, most people would say, &quot;why so much rigor?&quot; when we&#x27;re proving things like the division algorithm that just already feel obvious to everyone. But that&#x27;s what a lot of maths is about - ensuring we have rigorous foundations to stand on. In this case, we are all convinced that what we are trying to prove is true, and it does indeed turn out to be provably true, but what about when we&#x27;re trying to prove something we believe, and it&#x27;s not true? We need to ensure that all proofs are rigorous (enough), otherwise holes could creep in, and one false assumption would render mathematics ostensibly inconsistent. There are technically two goal states: $(0,1)$ and $(1,0)$, but if we reach one of these then we can reach the other by transferring the water, so it doesn&#x27;t really matter. ↩ This assumption is important, because it lets us deduce that we never fill a non-empty but non-full jug (as that would create unnecessary steps). ↩ This is the contrapositive statement of &quot;if the puzzle can be solved, then there do exist integers...&quot;. ↩ Why? ↩ Why does the repeated division process end up finding the gcd? Isn&#x27;t that magical? Hint: $gcd(a,b) = gcd(a-b,b)$ because something divides both $a$ and $b$ if and only if it divides both $a-b$ and $b$. ↩ This would be quite inconvenient for a computer algorithm, because we use the quotients in the opposite order to which they are generated, which means we have to store all the quotients rather than working with each quotient as it is generated. ↩ Actually, we can set it to be anything, because it&#x27;s multiplied by 0: and we always get an integer solution $(x,y)$ from the two simultaneous equations, because the matrix $\begin&#123;pmatrix&#125;8 &amp; 3 \\ 29 &amp; 11\end&#123;pmatrix&#125;$ has an integral inverse due to its determinant! ↩ This is good because a computer can fill in the table at the same time as generating the quotients, so it&#x27;s very memory efficient. ↩">Copy article plaintext</CopyButton>
                    </div>
                
            </div>
        

    </article>

    
        <nav className="hidden xl:flex w-[300px] xl:shrink-0 xl:justify-start h-100% min-h-screen border-l-2 border-border-subtle px-6 py-4">
            <div className="fixed text-text-secondary">
                <h1 className="text-lg">Table of contents</h1>
                <ul>
                    
                        <li className="pt-1 font-bold"><Link href="#puzzle-water-jug-problem" className="text-link [@media(hover:hover)]:hover:underline">Puzzle: water-jug problem</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#numerical-evidence" className="text-link [@media(hover:hover)]:hover:underline">Numerical Evidence</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#bezouts-lemma-proof" className="text-link [@media(hover:hover)]:hover:underline">Bezout's Lemma: Proof</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#magic-box" className="text-link [@media(hover:hover)]:hover:underline">Magic box</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#remarks-first-unobvious-result" className="text-link [@media(hover:hover)]:hover:underline">Remarks: first unobvious result?</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    