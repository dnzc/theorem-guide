
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


export default function BezoutEgcd () {
    return (
        <Layout>
            <Head>
                <title>Bezout Egcd | Daniel C</title>
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
                        
                    
                        
                            <Accordion title="3-bezout-egcd" href="/maths/number-theory/FTA-proof/3-bezout-egcd" isFolder={false} isSelected={ true } />
                        
                    
                        
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
            <h1 id="bezouts-lemma-and-the-extended-euclidean-algorithm-linear-combinations">Bezout's Lemma and the Extended Euclidean Algorithm: Linear Combinations</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p>This is part 3, where we discover and prove <DiscreetLink href="https://brilliant.org/wiki/bezouts-identity/">Bezout's lemma</DiscreetLink> using the division algorithm. In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.</p>

<h2 id="puzzle-water-jug-problem" className="group flex">Puzzle: water-jug problem&nbsp;<Link href="#puzzle-water-jug-problem" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/3-bezout-egcd#puzzle-water-jug-problem", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>You might have heard this one before:</p>

<blockquote>
  <p>There are two water jugs A and B, of size 8 and 5 litres respectively. They have no markings, so it is impossible to tell how much water is in a jug unless it is completely full or completely empty. There is a sink with a water tap and a drain. How can exactly one litre of water be obtained from the tap using the two jugs?</p>
</blockquote>

<p>It's a fun puzzle - definitely worth playing around with it before reading the solution below.</p>

<Spoiler>

<p><em>Solution:</em></p>

<p>Let <Latex>$(a,b)$</Latex> denote that there are <Latex>$a$</Latex> litres in jug A, and <Latex>$b$</Latex> litres in jug B.</p>

<p><Latex>$(0,0)$</Latex> -&gt; <Latex>$(8,0)$</Latex> -&gt; <Latex>$(3,5)$</Latex> -&gt; <Latex>$(3,0)$</Latex> -&gt; <Latex>$(0,3)$</Latex> -&gt; <Latex>$(8,3)$</Latex> -&gt; <Latex>$(6,5)$</Latex> -&gt; <Latex>$(6,0)$</Latex> -&gt; <Latex>$(1,5)$</Latex> -&gt; <Latex>$(1,0)$</Latex></p>

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

<h2 id="numerical-evidence" className="group flex">Numerical Evidence&nbsp;<Link href="#numerical-evidence" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/3-bezout-egcd#numerical-evidence", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>The first thing we might note is that, <Latex>$ax+by$</Latex> will always by divisible by <Latex>$gcd(a,b)$</Latex>, no matter what integers <Latex>$x$</Latex> and <Latex>$y$</Latex> we choose (see Lemma 5 in part 1). For example if <Latex>$a$</Latex> is even (divisible by 2) and <Latex>$b$</Latex> is even, then <Latex>$ax$</Latex> and <Latex>$by$</Latex> will both be even, so <Latex>$ax+by$</Latex> will be even.</p>

<p>Therefore, if we want <Latex>$ax+by$</Latex> to equal 1, we need <Latex>$gcd(a,b)$</Latex> to be 1, i.e. <Latex>$a$</Latex> and <Latex>$b$</Latex> share no common factors (are "<strong>coprime</strong>").</p>

<p>Now what if they <em>are</em> coprime, say, a=5 and b=8?</p>

<p>The key is to write 8 = 5+3. Then a linear combination as 8 and 5 can be rewritten as a linear combination of 3 and 5, and vice versa. Because <Latex>$8\cdot x + 5 \cdot y$</Latex> <Latex>$= (3 + 5) \cdot x + 5 \cdot y$</Latex> <Latex>$= 3 \cdot x + 5 \cdot (x+y)$</Latex>. Similarly, a linear combination of 3 and 5 can be transformed into a combination of 3 and 2, which can be transformed into a combination of 1 and 2. But we can always write 1 as a linear combination of 1 and 2, i.e. <Latex>$1 = 1\cdot 1 + 2\cdot 0$</Latex>. So theoretically, we should be able to "undo" our sequence of transformations to get back to the combination of 5 and 8!</p>

<p>Let's try:</p>

<blockquote>
  <p><Latex>$$1 = 1\cdot 1 + 2\cdot 0$$</Latex>
  <Latex>$$ = (3-2)\cdot 1 + 2\cdot 0$$</Latex>
  <Latex>$$ = 3\cdot 1 + 2\cdot (0-1)$$</Latex>
  <Latex>$$ = 3\cdot 1 + (5-3)\cdot (-1)$$</Latex>
  <Latex>$$ = 3\cdot (1+1) + 5\cdot (-1)$$</Latex>
  <Latex>$$ = (8-5)\cdot 2 + 5\cdot (-1)$$</Latex>
  <Latex>$$ = 8\cdot 2 + 5\cdot (-1-2)$$</Latex>
  <Latex>$$ = 8\cdot 2 - 5\cdot 3$$</Latex></p>
</blockquote>

<p>Which is a linear combination of 5 and 8!</p>

<p>Now what about <Latex>$a=155$</Latex> and <Latex>$b=27$</Latex>?</p>

<p>Let's do the same thing. Note that a linear combination of 155 and 27 is a linear combination of (27*5 + 20) and 27, which is a linear combination of 20 and 27 because <Latex>$155x + 27y$</Latex> <Latex>$ = (27\cdot 5 + 20)x + 27y$</Latex> <Latex>$= 27(5x+y) + 20x$</Latex>. And so on, this is a linear combination of 7 and 20, which is a combination of 7 and 6 (because 20 divided by 7 has remainder 6), which is a combination of 7-6=1 and 6. We've hit 1, so we can start building up the desired combination by going backwards.</p>

<blockquote>
  <p><Latex>$$1 = 1\cdot 1 + 6\cdot 0$$</Latex>
  <Latex>$$ = (7-6)\cdot 1 + 6\cdot 0$$</Latex>
  <Latex>$$ = 7\cdot 1 + 6\cdot (0-1)$$</Latex>
  <Latex>$$ = 7\cdot 1 + (20-2\cdot 7)\cdot (-1)$$</Latex>
  <Latex>$$ = 7\cdot (1+2\cdot 1) + 20\cdot (-1)$$</Latex>
  <Latex>$$ = (27-20)\cdot 3 + 20\cdot (-1)$$</Latex>
  <Latex>$$ = 27\cdot 3 + 20\cdot (-1-3)$$</Latex>
  <Latex>$$ = 27\cdot 3 + (155-5\cdot 27)\cdot (-4)$$</Latex>
  <Latex>$$ = 27\cdot (3+5\cdot 4) + (155\cdot (-4)$$</Latex>
  <Latex>$$ = 27\cdot 23 - 155\cdot 4$$</Latex></p>
</blockquote>

<p>Are you starting to get the idea? Let's do one more example (I also strongly recommend trying some on your own). This time, we'll write out the divisions that we're doing at the start, as well as the reconstruction steps.</p>

<blockquote>
  <p><em><Latex>$a = 259, b = 443$</Latex></em></p>
  
  <p>First, our division steps that "reduce" the problem:</p>
  
  <p><Latex>$$443 = 259 \cdot 1 + 184 \text&#123;, new pair is (259,184)&#125;$$</Latex></p>
  
  <p><Latex>$$259 = 184 \cdot 1 + 75 \text&#123;, new pair is (184,75)&#125;$$</Latex></p>
  
  <p><Latex>$$184 = 75 \cdot 2 + 34 \text&#123;, new pair is (75,34)&#125;$$</Latex></p>
  
  <p><Latex>$$75 = 34 \cdot 2 + 7 \text&#123;, new pair is (34,7)&#125;$$</Latex></p>
  
  <p><Latex>$$34 = 7 \cdot 4 + 6 \text&#123;, new pair is (7,6)&#125;$$</Latex></p>
  
  <p><Latex>$$7 = 6 \cdot 1 + 1 \text&#123;, new pair is (6,1)&#125;$$</Latex></p>
  
  <p><Latex>$$6 = 1 \cdot 6 + 0 \text&#123;, new pair is (1,0)&#125;$$</Latex></p>
  
  <p>We stop once we hit (1,0). Now, <Latex>$1 = 1\cdot 1 - 0\cdot 0$</Latex> so we can start reconstructing, by travelling back up the list of divisions.</p>
  
  <p><Latex>$$1 = 1\cdot 1 - 0 \cdot 0$$</Latex></p>
  
  <p><Latex>$$ = 1\cdot 1 - (6 - 1\cdot 6) \cdot 0 \text&#123; (see last line of the division list)&#125;$$</Latex></p>
  
  <p><Latex>$$ = 1\cdot (1+6\cdot 0) - 6 \cdot 0$$</Latex></p>
  
  <p><Latex>$$ = (7-6 \cdot 1)\cdot 1 - 6 \cdot 0 \text&#123; (see penultimate line)&#125;$$</Latex></p>
  
  <p><Latex>$$ = 7\cdot 1 - 6 \cdot (0+1\cdot 1)$$</Latex></p>
  
  <p><Latex>$$ = 7\cdot 1 - (34 - 7 \cdot 4) \cdot 1 \text&#123; (see... etc)&#125;$$</Latex></p>
  
  <p><Latex>$$ = 7\cdot (1+4\cdot 1) - 34 \cdot 1$$</Latex></p>
  
  <p><Latex>$$ = (75 - 34\cdot 2)\cdot 5 - 34 \cdot 1$$</Latex></p>
  
  <p><Latex>$$ = 75\cdot 5 - 34 \cdot (1+2\cdot 5)$$</Latex></p>
  
  <p><Latex>$$ = 75\cdot 5 - (184 - 75 \cdot 2) \cdot 11$$</Latex></p>
  
  <p><Latex>$$ = 75\cdot (5 + 2\cdot 11) - 184 \cdot 11$$</Latex></p>
  
  <p><Latex>$$ = (259-184\cdot 1)\cdot 27 - 184 \cdot 11$$</Latex></p>
  
  <p><Latex>$$ = 259\cdot 27 - 184 \cdot (11 + 1\cdot 27)$$</Latex></p>
  
  <p><Latex>$$ = 259\cdot 27 - (443 - 259 \cdot 1) \cdot 38$$</Latex></p>
  
  <p><Latex>$$ = 259\cdot (27 + 1\cdot 38) - 443 \cdot 38$$</Latex></p>
  
  <p><Latex>$$ = 259\cdot 65 - 443 \cdot 38$$</Latex></p>
  
  <p>which is a solution.</p>
</blockquote>

<p>Note that I kept the sign in the middle to be negative, which looks like it made all the coefficients positive<sup className="footnote-ref" id="fnref-4"><a href="#fn-4">4</a></sup>.</p>

<p>By the way, this repeated division process (not including the reconstructing) is called <strong>Euclid's Algorithm</strong>, and is used to find the gcd of two numbers efficiently<sup className="footnote-ref" id="fnref-5"><a href="#fn-5">5</a></sup>. In our case we were finding the gcd of 259 and 443, which is 1, so we ended up with (1,0). Feel free to experiment with what would happen if we had <Latex>$gcd(a,b) \gt 1$</Latex>. If we include the reconstructing, then the process of finding a solution to <Latex>$ax+by=1$</Latex> is called the <em>extended</em> Euclidean algorithm (<strong>egcd</strong>). There are different ways to construct the solution, one of which is exactly as we've done here. (Feel free to try and generalize what we've been doing).</p>

<p>As long as the initial repeated division (Euclid's algorithm) ends with the pair (1,0), we can perform the reconstruction to find a solution to <Latex>$ax + by = 1$</Latex>. In general, Euclid's algorithm ends with the pair being <Latex>$(gcd(a,b),0)$</Latex>, so if we do the reconstruction process, we will be able to find a solution to <Latex>$ax + by = gcd(a,b)$</Latex>.</p>

<h2 id="bezouts-lemma-proof" className="group flex">Bezout's Lemma: Proof&nbsp;<Link href="#bezouts-lemma-proof" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/3-bezout-egcd#bezouts-lemma-proof", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Let's switch to our axiom world for a second, to formalize the lemma and prove it.</p>

<blockquote>
  <p><em>Bezout's Lemma.</em> For any two positive integers <Latex>$a,b$</Latex>, there exist integers <Latex>$x,y$</Latex> such that <Latex>$ax + by = gcd(a,b)$</Latex>.</p>
</blockquote>

<p>Given that we want to use the well-ordering principle as a proof technique (since it's one of our axioms), we could try to consider the set of all possible <Latex>$ax+by$</Latex> (a,b fixed, x,y vary) and take the smallest one, <Latex>$e$</Latex>. Then, if <Latex>$e \neq gcd(a,b)$</Latex> we somehow want to generate an element of the set that is smaller than <Latex>$e$</Latex>, so that we can show a contradiction. </p>

<p>Let's think about this on the number line. Suppose <Latex>$a,b$</Latex> coprime for simplicity; then we want to show that there is a solution to <Latex>$ax+by = 1$</Latex>. If we start at 0 and are allowed to jump left or right by <Latex>$a$</Latex> or <Latex>$b$</Latex>, can we get to 1?</p>

<p>Well, if we can't, i.e. if the smallest positive number we could reach was <Latex>$e$</Latex> where <Latex>$e\gt 1$</Latex>, then we can essentially think of "going from 0 to e" as one operation. Then we can go from 0 to e, e to 2e, 2e to 3e, etc., until we get close to <Latex>$a$</Latex> on the number line. By the division algorithm, we can always land in the region between <Latex>$a,a+e-1$</Latex> inclusive. But then we can travel left by a, and we will be in the region between <Latex>$0, e-1$</Latex> inclusive, which is a contradiction because we'd be able to reach a smaller number than <Latex>$e$</Latex>.</p>

<blockquote>
  <p><em>Proof.</em> Let <Latex>$a,b \in \mathbb&#123;N&#125;$</Latex>. Consider the set
  <Latex>$$S = \&#123;n \in \mathbb&#123;N&#125; \mid n = ax + by,\; x,y \in \mathbb&#123;Z&#125;\&#125;$$</Latex></p>
  
  <p>This set is nonempty (since, for example, <Latex>$a \in S$</Latex>) and a subset of the naturals by construction. Thus by the <strong>well-ordering principle</strong>, S has a least element, say <Latex>$e = ax_0 + by_0$</Latex>.</p>
  
  <p><em>Claim.</em> <Latex>$e \mid a$</Latex>. <br />
  <em>Proof.</em> By the <strong>Divison Algorithm</strong>, write <Latex>$a = qe + r$</Latex> with <Latex>$q \in \mathbb&#123;Z&#125;$</Latex> and <Latex>$0 \leq r \lt e$</Latex>. Then <Latex>$r = a - q(ax_0 + by_0)$</Latex> is a linear combination of <Latex>$a$</Latex> and <Latex>$b$</Latex>. But <Latex>$0 \leq r \lt e$</Latex>, thus either <Latex>$r=0$</Latex>, or <Latex>$r \in S$</Latex> with <Latex>$r \lt e$</Latex>. Since the second option contradicts the minimality of <Latex>$e$</Latex>, we must have <Latex>$r=0$</Latex>, and so <Latex>$a = qe + 0$</Latex> i.e. <Latex>$e \mid a$</Latex>.</p>
  
  <p>Now by the claim, <Latex>$e \mid a$</Latex>. Similarly, repeating the above argument analogously for <Latex>$b$</Latex>, we have <Latex>$e \mid b$</Latex>. Thus <Latex>$e$</Latex> is a common divisor of <Latex>$a$</Latex> and <Latex>$b$</Latex>, so <Latex>$e \leq gcd(a,b)$</Latex> by definition of "greatest".</p>
  
  <p>But also, recall that <Latex>$e = ax_0 + by_0$</Latex>. Since the gcd of a and b divides the RHS by <strong>Lemma 4</strong> of the lemma list from part 1, we have that <Latex>$gcd(a,b) \mid e$</Latex>, and so <Latex>$e \geq gcd(a,b)$</Latex> by <strong>Lemma 19</strong>.</p>
  
  <p>Overall, since <Latex>$e \leq gcd(a,b)$</Latex> and <Latex>$e \geq gcd(a,b)$</Latex>, we have <Latex>$e = gcd(a,b)$</Latex>. So <Latex>$gcd(a,b) = e = ax_0 + by_0$</Latex>, so <Latex>$gcd(a,b)$</Latex> can be written as a linear combination of <Latex>$a$</Latex> and <Latex>$b$</Latex>. Done.</p>
</blockquote>

<h2 id="magic-box" className="group flex">Magic box&nbsp;<Link href="#magic-box" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/3-bezout-egcd#magic-box", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Let's try another concrete example: finding a solution to <Latex>$29x + 11y = 1$</Latex>.</p>

<p>We could do what we did before, which was the Euclidean Algorithm and then building a solution <strong>in reverse</strong><sup className="footnote-ref" id="fnref-6"><a href="#fn-6">6</a></sup>. But what if we try the same thing but going forwards?</p>

<blockquote>
  <p><Latex>$$29x + 11y = 1$$</Latex>
  <Latex>$$(2\cdot 11 + 7)x + 11y = 1$$</Latex>
  <Latex>$$7x + 11(2x+y) = 1$$</Latex>
  <Latex>$$7x + (7\cdot 1+4)(2x+y) = 1$$</Latex>
  <Latex>$$7(3x+y) + 4(2x+y) = 1$$</Latex>
  <Latex>$$(4+3)(3x+y) + 4(2x+y) = 1$$</Latex>
  <Latex>$$3(3x+y) + 4(5x+2y) = 1$$</Latex>
  <Latex>$$3(3x+y) + (3+1)(5x+2y) = 1$$</Latex>
  <Latex>$$3(8x+3y) + 1(5x+2y) = 1$$</Latex>
  <Latex>$$(3\cdot 1 + 0)(8x+3y) + 1(5x+2y) = 1$$</Latex>
  <Latex>$$0(8x+3y) + 1(29x + 11y) = 1$$</Latex></p>
</blockquote>

<p>Uh, oh, it looks like we started with <Latex>$29x + 11y = 1$</Latex> and ended up with <Latex>$0 + 1(29x+11y) = 1$</Latex>. Did we go in a circle? It certainly looks like it, apart from one thing - why did we get <Latex>$(8x+3y)$</Latex> in that bracket? Surely there's something special about it.</p>

<p>Recall that, when we built up the solution in reverse, we started with "<Latex>$0\cdot0 + 1\cdot 1 = 1$</Latex>" then built it up.
So here, looking at the last line of the above, why don't we set <Latex>$8x + 3y = 0$</Latex>?<sup className="footnote-ref" id="fnref-7"><a href="#fn-7">7</a></sup> This is easy to find a solution to, e.g. <Latex>$x=-3, y=8$</Latex>.</p>

<p>What is <Latex>$29x+11y$</Latex> when <Latex>$x=3$</Latex> and <Latex>$y=-8$</Latex>?</p>

<p>It's <em>one</em>!!
So could it be that the significance of <Latex>$(8x+3y)$</Latex> is that it gives a solution?</p>

<p>In fact, it looks like something even better is true: for convenience, I'll write a compressed version of what we did again:</p>

<blockquote>
  <p><Latex>$$29x + 11y = 1$$</Latex>
  <Latex>$$7x + 11(2x+y) = 1$$</Latex>
  <Latex>$$7(3x+y) + 4(2x+y) = 1$$</Latex>
  <Latex>$$3(3x+y) + 4(5x+2y) = 1$$</Latex>
  <Latex>$$3(8x+3y) + 1(5x+2y) = 1$$</Latex>
  <Latex>$$0(8x+3y) + 1(29x + 11y) = 1$$</Latex></p>
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

<p><Latex>$$m(ax + by) + n(cx + dy)$$</Latex>
<Latex>$$ = (qn+m')(ax + by) + n(cx + dy)$$</Latex>
<Latex>$$ = m'(ax + by) + n(q(ax+by)+(cx + dy))$$</Latex>
<Latex>$$ = m'(ax + by) + n((qa+c)x+(qb+d)y)$$</Latex></p>

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
  <Latex>$$M_&#123;i+1&#125; = \begin&#123;pmatrix&#125; p_&#123;i+1&#125; &amp; t_i p_&#123;i+1&#125; + p_i \\ q_&#123;i+1&#125; &amp; t_i q_&#123;i+1&#125; + q_i\end&#123;pmatrix&#125;$$</Latex>
  Now we can write this in terms of <Latex>$M_i$</Latex> like so:
  <Latex>$$M_&#123;i+1&#125; = \begin&#123;pmatrix&#125; p_&#123;i+1&#125; &amp;  p_i \\ q_&#123;i+1&#125; &amp; q_i\end&#123;pmatrix&#125; + \begin&#123;pmatrix&#125; 0 &amp; t_i p_&#123;i+1&#125; \\ 0 &amp; t_i q_&#123;i+1&#125;\end&#123;pmatrix&#125;$$</Latex>
  <Latex>$$= M_i \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; 0 \end&#123;pmatrix&#125; + M_i\begin&#123;pmatrix&#125; 0 &amp; 0 \\ 0 &amp; t_i \end&#123;pmatrix&#125;$$</Latex>
  <Latex>$$= M_i \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i \end&#123;pmatrix&#125;$$</Latex></p>
  
  <p>Now, using this recurrence, we have that the last 2x2 square in the magic box, the one that gives the solution to <Latex>$ax + by = \pm 1$</Latex>, is:
  <Latex>$$\begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; 0\end&#123;pmatrix&#125; \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_1\end&#123;pmatrix&#125; \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_2\end&#123;pmatrix&#125; (\cdots) \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_n\end&#123;pmatrix&#125;$$</Latex>
  <Latex>$$ = \prod_&#123;0 \leq i \leq n&#125; \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i\end&#123;pmatrix&#125;$$</Latex>
  Where we extend the definition of the <Latex>$t_i$</Latex> to include <Latex>$t_0 = 0$</Latex>.</p>
  
  <p>Note: this recurrence also justifies that the determinant of each 2x2 square in the magic box alternates between 1 and -1, because:
  <Latex>$$det(M_&#123;i+1&#125;)$$</Latex>
  <Latex>$$= det\left(M_i \begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i \end&#123;pmatrix&#125;\right)$$</Latex>
  <Latex>$$= det(M_i) \, det\left(\begin&#123;pmatrix&#125; 0 &amp; 1 \\ 1 &amp; t_i \end&#123;pmatrix&#125;\right)$$</Latex>
  <Latex>$$ = -det(M_i)$$</Latex></p>
</blockquote>

<h2 id="remarks-first-unobvious-result" className="group flex">Remarks: first unobvious result?&nbsp;<Link href="#remarks-first-unobvious-result" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/3-bezout-egcd#remarks-first-unobvious-result", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

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
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#puzzle-water-jug-problem" className="text-primary">Puzzle: water-jug problem</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#numerical-evidence" className="text-primary">Numerical Evidence</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#bezouts-lemma-proof" className="text-primary">Bezout's Lemma: Proof</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#magic-box" className="text-primary">Magic box</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#remarks-first-unobvious-result" className="text-primary">Remarks: first unobvious result?</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    