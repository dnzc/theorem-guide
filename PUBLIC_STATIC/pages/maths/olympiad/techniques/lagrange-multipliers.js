
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'

import { FaChevronRight, FaSearch, FaBook } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '@/components/copyButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function LagrangeMultipliers () {
    return (
        <Layout>
            <Head>
                <title>Lagrange Multipliers | Daniel C</title>
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
    
                    <div className="relative w-full flex h-full">
    <Sidebar>

        <ul className="dirtree md:fixed px-4 pt-1 border-elevated scrollbar-thin scrollbar-thumb-elevated scrollbar-track-body top-[7rem] bottom-[5.5rem] overflow-y-scroll w-full md:w-[calc(300px-2px)] break-all h-full md:h-auto">
            <li className="relative bottom-4 pl-4">
                <div className="text-primary mt-3 mb-0.5">
                    <Link href="/" className="flex items-center space-x-1.5 max-w-fit">
                        <FaBook/>
                        <span>root</span>
                    </Link>
                </div>
                <ul className="mb-4">
                    
                        
                            <Accordion title="comp-sci" href="/comp-sci" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="algorithms" href="/comp-sci/algorithms" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="binary-search" href="/comp-sci/algorithms/binary-search" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="maths" href="/maths" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="number-theory" href="/maths/number-theory" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="FTA-proof" href="/maths/number-theory/FTA-proof" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="1-integer-axioms" href="/maths/number-theory/FTA-proof/1-integer-axioms" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="2-division-algo" href="/maths/number-theory/FTA-proof/2-division-algo" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="3-bezout-egcd" href="/maths/number-theory/FTA-proof/3-bezout-egcd" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="4-euclid" href="/maths/number-theory/FTA-proof/4-euclid" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="5-fta" href="/maths/number-theory/FTA-proof/5-fta" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="olympiad" href="/maths/olympiad" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="techniques" href="/maths/olympiad/techniques" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/techniques/lagrange-multipliers" isFolder={false} isSelected={ true } />
                        
                    
                                
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

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3">

        <div className="h-[4.5rem] md:h-0"/>

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths">maths</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths/olympiad">olympiad</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths/olympiad/techniques">techniques</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-3">Last modified on 03 Aug 2023</p>
        

        <div className="article mb-4">
            <h1 id="revenge-of-analysis-using-lagrange-multipliers-to-destroy-inequalities">Revenge of Analysis: Using Lagrange Multipliers to Destroy Inequalities</h1>

<p>Lagrange multipliers are a nice tool to solve inequalities, but they are rarely seen in olympiad solutions. Once you get to grips with it, it can be an overpowered way smash open inequalities without much insight. For this reason, economists love them, but most contest problem setters hate seeing it and so they will often assume that you don't actually understand the technique, giving you 0 points.</p>

<p>So, we have to approach this rigorously, and prove to the markers that we really know what's going on!</p>

<p>I really recommend watching <ProminentLink href='https://youtu.be/5A39Ht9Wcu0'>this video</ProminentLink> to get some intuition first.</p>

<h2 id="background-theory" className="group flex">Background Theory&nbsp;<Link href="#background-theory" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#background-theory", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p><em>Defn.</em> Consider a set <Latex>$M$</Latex> together with a function <Latex>$d : M \times M \to \mathbb&#123;R&#125;$</Latex>.</p>

<p><Latex>$(M, d)$</Latex> is a <strong>metric space</strong> if and only if ('iff'):</p>

<ul>
<li><Latex>$d(x,y) = d(y,x)$</Latex></li>
<li><Latex>$d(x,y) \geq 0$</Latex>, equality iff <Latex>$x=y$</Latex></li>
<li><Latex>$d(x,y) + d(y,z) \geq d(x,z)$</Latex> (triangle inequality)</li>
</ul>

<p><em>Example.</em> <Latex>$(\mathbb&#123;R&#125;^n, d)$</Latex> is a metric space, where:
<span className="block overflow-scroll no-scrollbar"><Latex>$$\mathbb&#123;R&#125;^n = \&#123;(x_1, \cdots, x_n) \mid x_i \in \mathbb&#123;R&#125;\&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$d(x,y) = \sqrt&#123;\sum_&#123;i=1&#125;^n (x_i-y_i)^2&#125;$$</Latex></span></p>

<p><br/></p>

<hr/>

<p><br/></p>

<p><em>Defn.</em> The <strong>open ball</strong> in <Latex>$\mathbb&#123;R&#125;^n$</Latex> with centre <Latex>$p \in \mathbb&#123;R^n&#125;$</Latex> and radius <Latex>$r$</Latex> is
<span className="block overflow-scroll no-scrollbar"><Latex>$$B(p,r) := \&#123;x \in \mathbb&#123;\mathbb&#123;R&#125;^n&#125; \mid d(p,x) \lt r \&#125;$$</Latex></span></p>

<p><em>Example.</em> Any finite open interval in <Latex>$\mathbb&#123;R&#125;$</Latex> is an open ball (<Latex>$n=1$</Latex>), because for any open interval <Latex>$(a,b) \subset \mathbb&#123;R&#125;$</Latex>, it is equal to <Latex>$B(\frac&#123;a+b&#125;&#123;2&#125;, \frac&#123;b-a&#125;&#123;2&#125;)$</Latex>.</p>

<p><br/></p>

<hr/>

<p><br/></p>

<p><em>Defn.</em> <Latex>$u \subseteq \mathbb&#123;R&#125;^n$</Latex> is <strong>open</strong> iff for every <Latex>$p \in u$</Latex>, <Latex>$\exists r\gt 0$</Latex> s.t. <Latex>$B(p,r) \subset u$</Latex>.</p>

<p>Informally: an 'open set' is a set such that for any point in the set, there exists an open ball around that point with arbitrarily small radius, that is completely inside the set.</p>

<div className='flex flex-wrap justify-around'><Image src='/images/lm1.svg' width='250' height='250' alt='open set' /> <Image src='/images/lm2.svg' width='250' height='250' alt='diagram' /></div>

<p><br/></p>

<hr/>

<p><br/></p>

<p><em>Defn.</em> Let <Latex>$(x_k)_&#123;k=1&#125;^\infty$</Latex> be a sequence in <Latex>$\mathbb&#123;R&#125;^n$</Latex>. The sequence <strong>converges</strong> to the point <Latex>$x_\infty$</Latex> iff <Latex>$\forall \epsilon \gt 0, \exists n_0 \in \mathbb&#123;N&#125;$</Latex> such that:
<span className="block overflow-scroll no-scrollbar"><Latex>$$n \geq n_0 \implies d(x_n, x_\infty) \lt \epsilon$$</Latex></span>
Then <Latex>$x_\infty$</Latex> is denoted <Latex>$\lim_&#123;n \to \infty&#125;(x_n)$</Latex>.</p>

<p><em>Example.</em> Let <Latex>$x_n = \left(\frac&#123;1&#125;&#123;n&#125;, \frac&#123;1&#125;&#123;n&#125;\right)$</Latex>.
<span className="block overflow-scroll no-scrollbar"><Latex>$$\lim_&#123;n \to \infty&#125; x_n = x_\infty = (0,0)$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\lim_&#123;n \to \infty&#125; \left(1-\frac&#123;1&#125;&#123;n&#125;\;,\; \frac&#123;1&#125;&#123;n^2&#125;\right) = (1,0)$$</Latex></span></p>

<p><br/></p>

<hr/>

<p><br/></p>

<p><em>Defn.</em> Let <Latex>$S \subseteq \mathbb&#123;R&#125;^n$</Latex>. <Latex>$S$</Latex> is <strong>closed</strong> iff for every sequence of points <Latex>$(x_k)_&#123;k=1&#125;^\infty$</Latex> that satisfies <Latex>$x_k \in S \;\forall\; k$</Latex>, we have:
<span className="block overflow-scroll no-scrollbar"><Latex>$$\left( \lim_&#123;k \to \infty&#125; x_k \right) \in S$$</Latex></span></p>

<p><em>Example.</em> <Latex>$B(0,1)$</Latex> is not closed because we can take <Latex>$x_k = (1 - \frac&#123;1&#125;&#123;k&#125;, 0, \cdots, 0).$</Latex></p>

<p><em>Example.</em> Any open ball together with one point on the boundary, is neither closed nor open.</p>

<p><br/></p>

<hr/>

<p><br/></p>

<p><em>Defn.</em> Let <Latex>$p \in \mathbb&#123;R&#125;^n$</Latex> and <Latex>$r\gt 0$</Latex>. The <strong>closed ball</strong> <Latex>$B[p,r]$</Latex> is<sup className="footnote-ref" id="fnref-1"><a href="#fn-1">4</a></sup> the set:
<span className="block overflow-scroll no-scrollbar"><Latex>$$\&#123;x \in \mathbb&#123;R&#125;^n \mid d(p,x) \leq r\&#125;$$</Latex></span></p>

<div className='flex flex-wrap items-center space-x-4'>
    <p><em>Example.</em> <Latex>$B[0,1]$</Latex> in <Latex>$\mathbb&#123;R&#125;^2$</Latex> is</p>
    <Image src='/images/lm3.svg' width='100' height='100' alt='diagram' />
</div>

<p><br/></p>

<hr/>

<p><br/></p>

<p><em>Defn.</em> Let <Latex>$A \in \mathbb&#123;R&#125;^n$</Latex>. The <strong>closure</strong> of <Latex>$A$</Latex>, denoted <Latex>$\bar A$</Latex>, is the smallest closed set containing <Latex>$A$</Latex>.</p>

<div className='w-full flex justify-center'>
    <Image src='/images/lm4.svg' width='300' height='150' alt='diagram'/>
</div>

<p><br/></p>

<hr/>

<blockquote>
  <p><em>Thm.</em> <Latex>$A \subseteq \mathbb&#123;R&#125;^n$</Latex> is closed iff <Latex>$\mathbb&#123;R&#125;^n \setminus A$</Latex> is open.</p>
  
  <div className='w-full flex justify-center'>
     <Image src='/images/lm5.svg' width='400' height='200' alt='diagram'/>
  </div>
</blockquote>

<blockquote>
  <p><em>Thm.</em> Let <Latex>$U,V$</Latex> be open sets. Then <Latex>$U \cap V$</Latex> and <Latex>$U \cup V$</Latex> are also open sets. This extends to finite intersections<sup className="footnote-ref" id="fnref-2"><a href="#fn-2">1</a></sup> and infinite unions.</p>
  
  <div className='w-full flex justify-center'>
     <Image src='/images/lm6.svg' width='400' height='400' alt='diagram'/>
  </div>
</blockquote>

<blockquote>
  <p><em>Thm.</em> Let <Latex>$S,T$</Latex> be closed sets. Then <Latex>$S \cap T$</Latex> and <Latex>$S \cup T$</Latex> are also closed sets (note: the empty set and the whole set are considered both open and closed). This extends to infinite intersections and finite unions.</p>
  
  <div className='w-full flex justify-center'>
     <Image src='/images/lm7.svg' width='200' height='200' alt='diagram'/>
  </div>
</blockquote>

<hr/>

<p><br/></p>

<p><em>Defn.</em> <Latex>$A \subseteq \mathbb&#123;R&#125;^n$</Latex> is <strong>bounded</strong> iff <Latex>$\exists\, R \in \mathbb&#123;R&#125;, R\gt 0$</Latex> such that <Latex>$A \subseteq B(0, R)$</Latex>.</p>

<p><br/></p>

<div className='w-full flex justify-center'>
    <Image src='/images/lm8.svg' width='250' height='250' alt='diagram'/>
</div>

<p><br/></p>

<hr/>

<p><br/></p>

<p><em>Defn.</em> A subset <Latex>$K \subseteq \mathbb&#123;R&#125;^n$</Latex> is <strong>compact</strong> if it is closed and bounded.</p>

<div className='flex flex-wrap justify-around'><Image src='/images/lm9.svg' width='250' height='250' alt='open set' /> <Image src='/images/lm10.svg' width='250' height='250' alt='diagram' /></div>

<p><br/></p>

<hr/>

<p><br/></p>

<p><em>Defn.</em> Let <Latex>$D \subseteq \mathbb&#123;R&#125;^n$</Latex> and let <Latex>$f : D \to \mathbb&#123;R&#125;$</Latex>.</p>

<p><Latex>$f$</Latex> is <strong>continuous at the point</strong> <Latex>$p \in D$</Latex> iff <Latex>$\forall \epsilon \gt 0$</Latex>, <Latex>$\exists \delta \gt 0$</Latex> such that <Latex>$\forall x \in D$</Latex> we have:</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$d(p,x) \lt \delta =\implies \lvert f(x) - f(p) \rvert \lt \epsilon$$</Latex></span></p>

<p>Informally, no matter how small <Latex>$\epsilon$</Latex> you pick, I can always find a region around <Latex>$p$</Latex> where the change in <Latex>$f$</Latex> is smaller than <Latex>$\epsilon$</Latex>. So, a small change in input causes a small change in ouput.</p>

<p><Latex>$f$</Latex> is <strong>continuous</strong> iff it is continuous at every point.</p>

<p><em>Example.</em> <Latex>$f : \mathbb&#123;R&#125;^n \to \mathbb&#123;R&#125;$</Latex>, <Latex>$f(x_1, \cdots, x_n) = x_1 + \cdots + x_n$</Latex></p>

<p><br/></p>

<hr/>

<blockquote>
  <p><strong>Thm.</strong> Let <Latex>$f : K \to \mathbb&#123;R&#125;$</Latex> be a continuous function, where <Latex>$K \subseteq \mathbb&#123;R&#125;^n$</Latex> is a compact set. Then <Latex>$f$</Latex> has both a global maximum value and a global minimum value<sup className="footnote-ref" id="fnref-3"><a href="#fn-3">2</a></sup>:
  <span className="block overflow-scroll no-scrollbar"><Latex>$$\exists\, x \in K \text&#123; s.t. &#125; f(x) \geq f(y) \;\forall\, y \in K$$</Latex></span>
  <span className="block overflow-scroll no-scrollbar"><Latex>$$\exists\, x' \in K \text&#123; s.t. &#125; f(x') \leq f(y) \;\forall\, y \in K$$</Latex></span></p>
</blockquote>

<hr/>

<p><br/></p>

<blockquote>
  <p><em>Example.</em></p>
  
  <div className='flex flex-wrap justify-around'>
    <Image src='/images/lm11.svg' width='300' height='300'/>
    <div className='w-[250px]'>
  <p>Let <Latex>$f : K \to \mathbb&#123;R&#125;$</Latex>,<br/><Latex>$x \mapsto d(x,(0,0))$</Latex>.</p><br/>
  <p><Latex>$f$</Latex> is continuous and <Latex>$K$</Latex> is compact (a closed ball in <Latex>$\mathbb&#123;R&#125;^2$</Latex>).</p><br/>
  <p>Then by the theorem, there is a point(s) on <Latex>$K$</Latex> which is closest to <Latex>$(0,0)$</Latex>, and a point(s) which is furthest.</p>
    </div>
  </div>
  
  <p><br/></p>
</blockquote>

<hr/>

<p><br/>
&gt;</p>

<blockquote>
  <p>Note: We need to assume <Latex>$K$</Latex> is closed for this theorem, else we can construct a counterexample where <Latex>$f$</Latex> increases the closer you get to the edge.</p>
</blockquote>

<blockquote>
  <p><em>Thm.</em></p>
  
  <p>Let <Latex>$g : \mathbb&#123;R&#125;^n \to \mathbb&#123;R&#125;$</Latex> be a continuous function. Then for a fixed <Latex>$c \in \mathbb&#123;R&#125;$</Latex>, the set
  <span className="block overflow-scroll no-scrollbar"><Latex>$$\&#123; x \in \mathbb&#123;R&#125;^n \mid g(x) = c \&#125;$$</Latex></span>
  Is closed in <Latex>$\mathbb&#123;R&#125;^n$</Latex>.</p>
</blockquote>

<h2 id="partial-derivatives" className="group flex">Partial Derivatives&nbsp;<Link href="#partial-derivatives" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#partial-derivatives", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>I'm assuming you've already met these, so I'll recap.</p>

<p><em>Example.</em>
<span className="block overflow-scroll no-scrollbar"><Latex>$$f : \mathbb&#123;R&#125;^3 \to \mathbb&#123;R&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$f(x,y,z) = x^2 + y^2 + z^2$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta x&#125; = 2x, \frac&#123;\delta f&#125;&#123;\delta y&#125; = 2y, \frac&#123;\delta f&#125;&#123;\delta z&#125; = 2z$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\therefore \nabla f = (2x,2y,2z)$$</Latex></span></p>

<p><em>Example.</em>
<span className="block overflow-scroll no-scrollbar"><Latex>$$f : (0, +\infty) \times (0, +\infty) \to \mathbb&#123;R&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$f(x,y) = \sqrt&#123;xy&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta x&#125; = \frac&#123;\delta&#125;&#123;\delta x&#125; (\sqrt y \sqrt x) = \frac&#123;\sqrt y&#125;&#123;2 \sqrt x&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta y&#125; = \frac&#123;\sqrt x&#125;&#123;2 \sqrt y&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\therefore \nabla f = (\frac&#123;\sqrt y&#125;&#123;2 \sqrt x&#125;, \frac&#123;\sqrt x&#125;&#123;2 \sqrt y&#125;)$$</Latex></span></p>

<h2 id="the-big-theorem" className="group flex">The Big Theorem&nbsp;<Link href="#the-big-theorem" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#the-big-theorem", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Finally!</p>

<blockquote>
  <p><em>Theorem (Lagrange Multipliers, "LM").</em></p>
  
  <p>Let <Latex>$U \subset \mathbb&#123;R&#125;^n$</Latex> be an open set<sup className="footnote-ref" id="fnref-4"><a href="#fn-4">3</a></sup> and let <Latex>$f,g : U \to \mathbb&#123;R&#125;$</Latex> be continuous functions with continuous partial derivatives of the first order.</p>
  
  <p>Let <Latex>$c \in \mathbb&#123;R&#125;$</Latex> and <Latex>$S = \&#123;x \in U \mid g(x) = c\&#125;$</Latex>. (Note: <Latex>$S$</Latex> doesn't have to be open or closed, that's <Latex>$U$</Latex>!)</p>
  
  <p>Then, if <Latex>$x_0 \in S$</Latex> is a local max or min, then either:
  <span className="block overflow-scroll no-scrollbar"><Latex>$$\left( \frac&#123;\delta g&#125;&#123;\delta x&#125;, \frac&#123;\delta g&#125;&#123;\delta y&#125;, \frac&#123;\delta g&#125;&#123;\delta z&#125;,\cdots\right) = (0,0,0,\cdots)$$</Latex></span>
  Or <Latex>$\exists \lambda \in \mathbb&#123;R&#125;$</Latex> such that:
  <span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta x&#125;(x_0) = \lambda \frac&#123;\delta g&#125;&#123;\delta x&#125;(x_0),$$</Latex></span>
  <span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta y&#125;(x_0) = \lambda \frac&#123;\delta g&#125;&#123;\delta y&#125;(x_0),$$</Latex></span>
  <span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta z&#125;(x_0) = \lambda \frac&#123;\delta g&#125;&#123;\delta y&#125;(x_0),$$</Latex></span>
  <span className="block overflow-scroll no-scrollbar"><Latex>$$\text&#123;etc.&#125;$$</Latex></span></p>
</blockquote>

<h2 id="example-problem-1" className="group flex">Example Problem 1&nbsp;<Link href="#example-problem-1" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#example-problem-1", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<blockquote>
  <p>Let <Latex>$x,y,z \geq 0$</Latex> such that <Latex>$x+y+z = 1$</Latex>. Find the min and max of <Latex>$xyz$</Latex>.</p>
</blockquote>

<p><em>Solution.</em></p>

<p>Let <Latex>$f(x,y,z) = xyz$</Latex> and <Latex>$g(x,y,z)=x+y+z$</Latex>; these are polynomial functions and so are continuous. We are maximizing and minimizing <Latex>$f$</Latex>, subject to a condition on <Latex>$g$</Latex>.</p>

<p><Latex>$0 \leq x,y,z \leq 1$</Latex> so we're only interested in the cube <Latex>$[0,1] \times [0,1] \times [0,1]$</Latex>.</p>

<div className='flex flex-wrap justify-center items-center space-x-4'>
    <Image src='/images/lm12.svg' width='300' height='240' alt='diagram'/><p><Latex>$x+y+z=1$</Latex> is a plane (coloured green)</p>
</div>

<p>The cube is closed and bounded.</p>

<p>Let <Latex>$U = (0,1)^3$</Latex>, then <Latex>$\bar U = [0,1]^3$</Latex>.</p>

<p>Let <Latex>$S = \&#123;x \in U \mid g(x)=1\&#125;$</Latex>, then its closure is <Latex>$\bar S = \bar U \cap \&#123;x \in \mathbb&#123;R&#125;^3 \mid g(x)=1\&#125;$</Latex> (which is the intersection of two closed sets).</p>

<p><Latex>$\bar S$</Latex> is also bounded, thus <Latex>$\bar S$</Latex> is compact.</p>

<p>Hence <Latex>$f$</Latex> has a global max and min in <Latex>$\bar S$</Latex>.</p>

<p>The global extrema might be on the boundary of <Latex>$\bar S$</Latex>. If so then we cannot apply LM, because the extrema will not be in <Latex>$S$</Latex>.</p>

<ul>
<li><p>If we are on the boundary, then one of <Latex>$x,y,z$</Latex> is <Latex>$0$</Latex>, so <Latex>$f(x,y,z) = xyz = 0$</Latex>. Thus <Latex>$f$</Latex> is zero everywhere on the boundary, so <Latex>$0$</Latex> would be an extremum.</p></li>
<li><p>If we are not on the boundary, then we are in <Latex>$S$</Latex>, so we can apply LM.
<span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta g&#125;&#123;\delta x&#125; = 1, \frac&#123;\delta g&#125;&#123;\delta y&#125; = 1, \frac&#123;\delta g&#125;&#123;\delta z&#125; = 1$$</Latex></span>
So we are in the second case of the theorem, because <Latex>$(1,1,1) \neq (0,0,0)$</Latex>.
<span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta x&#125; = yz, \frac&#123;\delta f&#125;&#123;\delta y&#125; = xz, \frac&#123;\delta f&#125;&#123;\delta z&#125; = xy$$</Latex></span>
So <Latex>$yz = \lambda \cdot 1$</Latex>, <Latex>$xz = \lambda \cdot 1$</Latex>, <Latex>$xy = \lambda \cdot 1$</Latex>. <br />
This implies <Latex>$xy = yz = zx$</Latex> so <Latex>$x=y=z$</Latex>, and finally <Latex>$x+y+z = 1$</Latex> <Latex>$\implies$</Latex> <Latex>$x=y=z=\frac&#123;1&#125;&#123;3&#125;$</Latex>, so an extremal value of <Latex>$f$</Latex> is <Latex>$\frac&#123;1&#125;&#123;27&#125;$</Latex>.</p></li>
</ul>

<p>Overall, all extreme values of <Latex>$f$</Latex> on <Latex>$\bar S$</Latex> are <Latex>$0$</Latex> or <Latex>$\frac&#123;1&#125;&#123;27&#125;$</Latex>.
<span className="block overflow-scroll no-scrollbar"><Latex>$$\therefore 0 \leq xyz \leq \frac&#123;1&#125;&#123;27&#125;$$</Latex></span></p>

<h2 id="example-problem-2" className="group flex">Example Problem 2&nbsp;<Link href="#example-problem-2" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#example-problem-2", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<blockquote>
  <p>Let <Latex>$x,y,z \geq 0$</Latex> such that <Latex>$x+y+z = 1$</Latex>. Show that
  <span className="block overflow-scroll no-scrollbar"><Latex>$$0 \leq yz+zx+xy-2xyz \leq \frac&#123;7&#125;&#123;27&#125;$$</Latex></span></p>
</blockquote>

<p><em>Solution.</em></p>

<p>Note <Latex>$0 \leq x,y,z \leq 1$</Latex>. Let <Latex>$U = (0,1)^3$</Latex> and <Latex>$S = \&#123; x \in U \mid g(x) = 1\&#125;$</Latex>.</p>

<p>Let <Latex>$f(x,y,z) = yz+zx+xy-2xyz$</Latex> and <Latex>$g(x,y,z) = x+y+z$</Latex>, where <Latex>$f,g : U \to \mathbb&#123;R&#125;$</Latex>. Then <Latex>$f,g$</Latex> are continuous and have continous partial derivatives (because polynomial on open set).</p>

<p>Now, <Latex>$\bar U = [0,1]^3$</Latex> and <Latex>$\bar S = \bar U \cap \&#123;x \in \mathbb&#123;R&#125;^3 \mid g(x)=1\&#125;$</Latex> which is closed and bounded, hence <Latex>$\bar S$</Latex> is compact.</p>

<p>Hence <Latex>$f$</Latex> has a global max and min on <Latex>$\bar S$</Latex>.</p>

<p>Let <Latex>$x_0 = (x,y,z)$</Latex> be a global extremum.</p>

<ul>
<li><p>If <Latex>$x_0$</Latex> is on the boundary: <br />
Then one of <Latex>$x,y,z$</Latex> is <Latex>$0$</Latex>, WLOG <Latex>$z=0$</Latex>. Then <Latex>$x+y=1$</Latex> and we wish to show that <Latex>$0 \leq xy \leq \frac&#123;7&#125;&#123;27&#125;$</Latex>.
<span className="block overflow-scroll no-scrollbar"><Latex>$$x \geq 0, y \geq 0 \implies xy \geq 0$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$xy \leq \left(\frac&#123;x+y&#125;&#123;2&#125;\right)^2 = \frac&#123;1&#125;&#123;4&#125; \lt \frac&#123;7&#125;&#123;27&#125; \;\;\checkmark$$</Latex></span></p></li>
<li><p>If <Latex>$x_0$</Latex> is not on the boundary: <br />
Then <Latex>$S$</Latex> has a global extremum in <Latex>$f$</Latex>, namely <Latex>$x_0$</Latex>. So I can apply LM. <br />
<span className="block overflow-scroll no-scrollbar"><Latex>$$g(x,y,z)=x+y+z$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\nabla g = \left(\frac&#123;\delta g&#125;&#123;\delta x&#125;, \frac&#123;\delta g&#125;&#123;\delta y&#125;, \frac&#123;\delta g&#125;&#123;\delta z&#125;\right)=(1,1,1)$$</Latex></span>
Since <Latex>$\nabla g \neq (0,0,0)$</Latex>, the only possibility is <Latex>$\nabla f = \lambda \cdot \nabla g$</Latex>.</p></li>
</ul>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$f(x,y,z) = yz + zx + xy - 2xyz$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta x&#125; = z+y-2yz$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta y&#125; = x+z-2xz$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta z&#125; = y+x-2yx$$</Latex></span></p>

<p>So, <Latex>$z+y-2yz = \lambda \cdot 1$</Latex>, <br />
<Latex>$x+z-2xz = \lambda \cdot 1$</Latex>, <br />
<Latex>$y+x-2yx = \lambda \cdot 1$</Latex></p>

<p>Solving for <Latex>$x,y,z$</Latex>:</p>

<blockquote>
  <p>First case: <Latex>$x,y,z \neq \frac&#123;1&#125;&#123;2&#125;$</Latex></p>
  
  <ul>
  <li><Latex>$z+y-2yz=\lambda$</Latex> <Latex>$\implies y(1-2z) = \lambda - z$</Latex> <Latex>$\implies y = \frac&#123;\lambda - z&#125;&#123;1-2z&#125;$</Latex></li>
  <li>Similarly, <Latex>$x = \frac&#123;\lambda - z&#125;&#123;1-2z&#125;$</Latex></li>
  <li>So <Latex>$x=y$</Latex>, and similarly <Latex>$x=y=z$</Latex>.</li>
  <li><Latex>$x+y+z = 1$</Latex> <Latex>$\implies x=y=z=\frac&#123;1&#125;&#123;3&#125;$</Latex></li>
  </ul>
  
  <p>Second case: one of <Latex>$x,y,z$</Latex> is <Latex>$\frac&#123;1&#125;&#123;2&#125;$</Latex></p>
  
  <ul>
  <li>WLOG <Latex>$z = \frac&#123;1&#125;&#123;2&#125;$</Latex>, then <Latex>$\frac&#123;1&#125;&#123;2&#125; + y - 2y\cdot \frac&#123;1&#125;&#123;2&#125; = \lambda$</Latex> <Latex>$\implies \lambda = \frac&#123;1&#125;&#123;2&#125;$</Latex></li>
  <li><Latex>$x+y = 1-z$</Latex> <Latex>$\implies x+y=\frac&#123;1&#125;&#123;2&#125;$</Latex></li>
  <li><Latex>$x+y-2xy = \lambda$</Latex> <Latex>$\implies \frac&#123;1&#125;&#123;2&#125; - 2xy = \frac&#123;1&#125;&#123;2&#125;$</Latex> <Latex>$\implies xy = 0$</Latex>, but this cannot happen in the interior.</li>
  </ul>
  
  <p>Thus overall, The extremum <Latex>$x_0$</Latex> must equal <Latex>$(\frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;)$</Latex>.</p>
</blockquote>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$f\left(\frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;\right) = \frac&#123;1&#125;&#123;9&#125; + \frac&#123;1&#125;&#123;9&#125; + \frac&#123;1&#125;&#123;9&#125; - \frac&#123;2&#125;&#123;27&#125; = \frac&#123;7&#125;&#123;27&#125; \;\; \checkmark$$</Latex></span></p>

<h2 id="example-problem-3" className="group flex">Example problem 3&nbsp;<Link href="#example-problem-3" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#example-problem-3", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<blockquote>
  <p>Given that <Latex>$x,y \in \mathbb&#123;R&#125;$</Latex> with <Latex>$x^2 + y^2 = 1$</Latex>, Find the max and min values of <Latex>$8x^2 - 2y$</Latex>.</p>
</blockquote>

<p>Note: the "normal" way to do this would be to write it as <Latex>$8(1-y^2)-2y$</Latex> and bound this quadratic. But we can do it with LM too. I'll let you decide which way is easier.</p>

<p><em>Solution.</em></p>

<p>Let <Latex>$f,g : \mathbb&#123;R&#125;^2 \to \mathbb&#123;R&#125;$</Latex> with:
<span className="block overflow-scroll no-scrollbar"><Latex>$$f(x,y) = 8x^2-2y$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$g(x,y) = x^2 + y^2$$</Latex></span>
Then <Latex>$f,g$</Latex> are continuous and have continuous partial derivatives.</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$U := \mathbb&#123;R&#125;^2$$</Latex></span></p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$S := \&#123;x \in U \mid g(x) = 1\&#125;$$</Latex></span></p>

<p><Latex>$S$</Latex> is closed and bounded, hence <Latex>$S$</Latex> is compact.</p>

<p>Hence <Latex>$f$</Latex> attains a global max and min on <Latex>$S$</Latex>.</p>

<p>We can apply LM, because there is no boundary case to check<sup className="footnote-ref" id="fnref-5"><a href="#fn-5">5</a></sup>.</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$\nabla g = (2x,2y)$$</Latex></span></p>

<p>So <Latex>$\nabla g \neq (0,0)$</Latex> since <Latex>$x^2 + y^2 = 1$</Latex>.</p>

<p>Hence we are in the second case:</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$\nabla f = \lambda \nabla g$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\implies \begin&#123;bmatrix&#125; 16x \\ -2 \end&#123;bmatrix&#125; = \lambda \begin&#123;bmatrix&#125; 2x \\ 2y \end&#123;bmatrix&#125;$$</Latex></span></p>

<p>Thus we need to solve the following 3 simultaneous equations:</p>

<blockquote>
  <p><span className="block overflow-scroll no-scrollbar"><Latex>$$16x = 2x\lambda$$</Latex></span>
  <span className="block overflow-scroll no-scrollbar"><Latex>$$-2 = 2y\lambda$$</Latex></span>
  <span className="block overflow-scroll no-scrollbar"><Latex>$$x^2 + y^2 = 1$$</Latex></span></p>
</blockquote>

<ul>
<li><p>If <Latex>$x=0$</Latex>, then <Latex>$y^2 = 1$</Latex>, so <Latex>$(x,y) = (0,1)$</Latex> or <Latex>$(0,-1)$</Latex>.</p></li>
<li><p>If <Latex>$x\neq 0$</Latex>, then <Latex>$\lambda = 8$</Latex>, so <Latex>$-2 = 16y$</Latex>. Hence <Latex>$y=-\frac&#123;1&#125;&#123;8&#125;$</Latex> and so <Latex>$x^2 = 1 - \frac&#123;1&#125;&#123;64&#125;$</Latex>, so <Latex>$x = \pm \frac&#123;\sqrt 63&#125;&#123;8&#125;$</Latex>.</p></li>
</ul>

<p>Hence we need to check <Latex>$(0,1)$</Latex>,<Latex>$(0,-1)$</Latex>, <Latex>$(\frac&#123;\sqrt 63&#125;&#123;8&#125;, -\frac&#123;1&#125;&#123;8&#125;)$</Latex>, <Latex>$(-\frac&#123;\sqrt 63&#125;&#123;8&#125;, -\frac&#123;1&#125;&#123;8&#125;)$</Latex>.</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$f(0, \pm 1) = \mp 2$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$f(\pm \frac&#123;\sqrt 63&#125;&#123;8&#125;, -\frac&#123;1&#125;&#123;8&#125;) = \frac&#123;65&#125;&#123;8&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\therefore -2 \leq 8x^2 - 2y \leq \frac&#123;65&#125;&#123;8&#125;$$</Latex></span></p>

<h2 id="homogenous-trick" className="group flex">Homogenous Trick&nbsp;<Link href="#homogenous-trick" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#homogenous-trick", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Suppose we want to prove some inequality, but there are no constraints.</p>

<p>If the inequality is homogenous, then we can impose a condition e.g. <Latex>$a+b+c=1$</Latex> or <Latex>$abc = 1$</Latex> or <Latex>$a^2+b^2+c^2=1$</Latex>, because we can scale each variable to make the condition true.</p>

<p><em>Example.</em></p>

<blockquote>
  <p>Prove that <Latex>$\forall a,b,c \in \mathbb&#123;R&#125;$</Latex>,
  <span className="block overflow-scroll no-scrollbar"><Latex>$$a^2 + b^2 + c^2 \geq ab + bc + ca$$</Latex></span></p>
</blockquote>

<p><em>Solution.</em></p>

<p>If <Latex>$a=b=c=0$</Latex>, the result is obvious. <br />
Otherwise, let <Latex>$k = \sqrt&#123;a^2 + b^2 + c^2&#125; \gt 0$</Latex>. The inequality is equivalent to:
<span className="block overflow-scroll no-scrollbar"><Latex>$$\left(\frac&#123;a&#125;&#123;k&#125;\right)^2 + \left(\frac&#123;b&#125;&#123;k&#125;\right)^2 + \left(\frac&#123;c&#125;&#123;k&#125;\right)^2 \geq \frac&#123;a&#125;&#123;k&#125; \cdot \frac&#123;b&#125;&#123;k&#125; + \frac&#123;b&#125;&#123;k&#125;\cdot \frac&#123;c&#125;&#123;k&#125; + \frac&#123;c&#125;&#123;k&#125; \cdot \frac&#123;a&#125;&#123;k&#125;$$</Latex></span></p>

<p>And so, letting <Latex>$x=\frac&#123;a&#125;&#123;k&#125;$</Latex>, <Latex>$y = \frac&#123;b&#125;&#123;k&#125;$</Latex>, <Latex>$z = \frac&#123;c&#125;&#123;k&#125;$</Latex>, we have that <Latex>$x^2 + y^2 + z^2 = 1$</Latex>.</p>

<p>So it is enough to prove that <Latex>$xy + yz + zx \leq 1$</Latex> when <Latex>$x^2 + y^2 + z^2 = 1$</Latex> (we chose this condition because of compactness).</p>

<p>We can now solve this as in the examples above, using Lagrange multipliers.</p>

<h2 id="practice-problem-jbmo" className="group flex">Practice problem (JBMO)&nbsp;<Link href="#practice-problem-jbmo" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#practice-problem-jbmo", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<blockquote>
  <p>For <Latex>$x,y \in \mathbb&#123;R&#125;, (x,y) \neq (0,0)$</Latex>, prove that:
  <span className="block overflow-scroll no-scrollbar"><Latex>$$\frac&#123;x+y&#125;&#123;x^2-xy+y^2&#125; \leq \frac&#123;2\sqrt 2&#125;&#123;\sqrt &#123;x^2 + y^2&#125;&#125;$$</Latex></span></p>
</blockquote>

<p>(Note: much easier to fix <Latex>$y$</Latex> and use normal derivatives, but we want to solve with LM)</p>

<p><em>Solution.</em></p>

<Spoiler>

<p>The inequality is homogenous, so we can impose the condition <Latex>$x^2 + y^2 = 1$</Latex> by scaling the variables. Thus it is sufficient to show that <Latex>$\frac&#123;x+y&#125;&#123;x^2-xy+y^2&#125; \leq 2\sqrt 2$</Latex> when <Latex>$x^2 + y^2 = 1$</Latex>.</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$\text&#123;Goal: &#125; \frac&#123;x+y&#125;&#123;x^2-xy+y^2&#125; \leq 2\sqrt 2$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\iff 0 \leq 2\sqrt2(x^2-xy+y^2) -x - y$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\iff 0 \leq 2\sqrt2(1-xy) -x - y$$</Latex></span></p>

<p>Note that we didn't have to clear the <Latex>$x^2 + y^2$</Latex> term, but it makes the computation easier - always look for tricks!</p>

<p><br/></p>

<p>Now as usual, define:
<span className="block overflow-scroll no-scrollbar"><Latex>$$U = \mathbb&#123;R&#125;^2$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$f,g: U \to \mathbb&#123;R&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$f(x,y) = 2\sqrt2(1-xy)-x-y$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$g(x,y) = x^2 + y^2$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$S = \&#123;x \in U \mid g(x,y) = 1\&#125;$$</Latex></span>
Then <Latex>$\bar U = U$</Latex> so <Latex>$\bar S = S$</Latex>, so <Latex>$S$</Latex> is closed. Since <Latex>$S$</Latex> is also bounded, we have that <Latex>$S$</Latex> is compact.</p>

<p>Also <Latex>$f,g$</Latex> are continuous with continuous partial derivatives, since they are polynomials.</p>

<p>Hence <Latex>$f$</Latex> has a global max and min on <Latex>$S$</Latex>.</p>

<p><br/></p>

<p><Latex>$\nabla g = (2x,2y) \neq (0,0)$</Latex> since <Latex>$a^2 + b^2 = 1$</Latex>.</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$\therefore \nabla f = \lambda \nabla g$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\implies \begin&#123;bmatrix&#125; -2\sqrt2 y - 1 \\ -2\sqrt2 x - 1\end&#123;bmatrix&#125; = \lambda \begin&#123;bmatrix&#125; 2x \\ 2y\end&#123;bmatrix&#125;$$</Latex></span></p>

<p>Hence,</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$-2y\sqrt2 - 1 = 2x\lambda$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$-2x\sqrt2 - 1 = 2y\lambda$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$x^2 + y^2 = 1$$</Latex></span></p>

<p>Solving these to find <Latex>$f(x,y)$</Latex>:</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$y(-2y\sqrt2 - 1) = 2xy\lambda$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$x(-2x\sqrt2 - 1) = 2yx\lambda$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\therefore -2y^2\sqrt2 - y = -2x^2\sqrt2 - x$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\implies 2\sqrt2(x^2 - y^2) + (x-y) = 0$$</Latex></span></p>

<p>Thus either <Latex>$x=y$</Latex> or <Latex>$2\sqrt2(x+y) + 1 = 0$</Latex>.</p>

<p><br/></p>

<ul>
<li><p>If <Latex>$x = y$</Latex>: <br />
Then, since <Latex>$x^2 + y^2 = 1$</Latex>, we have that <Latex>$x = y = \pm \frac&#123;1&#125;&#123;\sqrt2&#125;$</Latex>. In this case:
<span className="block overflow-scroll no-scrollbar"><Latex>$$f(x,y) = f\left(\pm \frac&#123;1&#125;&#123;\sqrt2&#125;, \pm \frac&#123;1&#125;&#123;\sqrt2&#125;\right)$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$= 2\sqrt2(1 - \frac&#123;1&#125;&#123;2&#125;) - (\pm \sqrt 2)$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$= \sqrt2 \mp \sqrt2$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$= 0, 2\sqrt2$$</Latex></span></p></li>
<li><p>If <Latex>$2\sqrt2(x+y) + 1 = 0$</Latex>: <br />
Then <Latex>$x + y = -\frac&#123;1&#125;&#123;2\sqrt2&#125;$</Latex>. <br />
<span className="block overflow-scroll no-scrollbar"><Latex>$$\implies (x+y)^2 = \frac&#123;1&#125;&#123;8&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\implies 2xy = \frac&#123;1&#125;&#123;8&#125; - (x^2+y^2) = \frac&#123;1&#125;&#123;8&#125; - 1$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$\implies xy = -\frac&#123;7&#125;&#123;16&#125;$$</Latex></span>
So in this case:
<span className="block overflow-scroll no-scrollbar"><Latex>$$f(x,y) = 2\sqrt2(1-xy)-(x+y)$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$= 2\sqrt2\left(1+ \frac&#123;7&#125;&#123;16&#125;\right) + \frac&#123;1&#125;&#123;2\sqrt2&#125;$$</Latex></span>
<span className="block overflow-scroll no-scrollbar"><Latex>$$= \frac&#123;25\sqrt2&#125;&#123;8&#125;$$</Latex></span></p></li>
</ul>

<p><br/></p>

<p>Overall, the possible extremal values of <Latex>$f$</Latex> are <Latex>$0, 2\sqrt2, \frac&#123;25\sqrt2&#125;&#123;8&#125;$</Latex>.</p>

<p><span className="block overflow-scroll no-scrollbar"><Latex>$$\therefore 0 \leq f(x,y) \leq \frac&#123;25\sqrt2&#125;&#123;8&#125;$$</Latex></span></p>

<p>In particular, <Latex>$f(x,y) \geq 0$</Latex> as required.</p>

</Spoiler>

<h2 id="when-it-fails" className="group flex">When It Fails&nbsp;<Link href="#when-it-fails" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#when-it-fails", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<blockquote>
  <p>Let <Latex>$a,b,c \gt 0$</Latex> such that <Latex>$a+b+c=3$</Latex>. Find the minimum value of:
  <span className="block overflow-scroll no-scrollbar"><Latex>$$f(a,b,c) = \frac&#123;2-a^3&#125;&#123;a&#125; + \frac&#123;2-b^3&#125;&#123;b&#125; + \frac&#123;2-c^3&#125;&#123;c&#125;$$</Latex></span></p>
</blockquote>

<p>If we attempt to use LM:</p>

<div className='flex justify-center'>
    <Image src='/images/lm13.svg' width='300' height='240' alt='diagram'/>
</div>

<p>The problem is that <Latex>$f$</Latex> is not defined on the boundary, so we cannot say <Latex>$f$</Latex> has a global max and min in the area we're looking at (indeed <Latex>$f$</Latex> can be arbitrarily large if we let <Latex>$a$</Latex> approach zero for example). Boo, we can't use LM.</p>

<p><br/></p>

<p><em>Actually</em>, in this specific case we can fix it with the following approach:</p>

<Spoiler>

<p>Make the triangle a bit smaller on all sides, then it is compact and we can use LM. For the region of that we didn't consider, we can assume that "one of the variables is at least this small", so "<Latex>$f$</Latex> is at least this large", and get it to be larger than a value we already know.</p>

<p>I leave it as an exercise for the reader, but a hint is to shrink the cube to be something like <Latex>$[0.1,3]\times [0.1,3]\times[0.1,3]$</Latex>.</p>

</Spoiler>

<hr/>

<h2 id="conclusion" className="group flex">Conclusion&nbsp;<Link href="#conclusion" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/olympiad/techniques/lagrange-multipliers#conclusion", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>As you've seen, it takes careful consideration to use Lagrange multipliers correctly. I wish you the best of luck using LM in olympiad problems!</p>

<div className="footnotes">
<hr />
<ol>
<li id="fn-2">
<p>If <Latex>$U_n = \left(-\frac&#123;1&#125;&#123;n&#125;, \frac&#123;1&#125;&#123;n&#125;\right)$</Latex>, then <Latex>$\bigcup_&#123;n=1&#125;^\infty U_n = \&#123;0\&#125;$</Latex> which is not open.&#160;<a href="#fnref-2" className="footnoteBackLink" title="Jump back to footnote 1 in the text.">&#8617;</a></p>
</li>

<li id="fn-3">
<p>This is not true in the reverse direction, for example consider <Latex>$B(0,1)$</Latex> and <Latex>$f(x) = d(x,0)$</Latex>, then there is a global min at 0.&#160;<a href="#fnref-3" className="footnoteBackLink" title="Jump back to footnote 2 in the text.">&#8617;</a></p>
</li>

<li id="fn-4">
<p>This is so that partial derivatives are defined.&#160;<a href="#fnref-4" className="footnoteBackLink" title="Jump back to footnote 3 in the text.">&#8617;</a></p>
</li>

<li id="fn-1">
<p><Latex>$B[p,r]$</Latex> is always a closed set.&#160;<a href="#fnref-1" className="footnoteBackLink" title="Jump back to footnote 4 in the text.">&#8617;</a></p>
</li>

<li id="fn-5">
<p>Note that we could have also let <Latex>$U$</Latex> be something like <Latex>$\&#123;(x,y) \in \mathbb&#123;R&#125;^2 \mid x^2+y^2 \lt 1000\&#125;$</Latex>, so that <Latex>$U$</Latex> actually has a boundary, and when we check that case, we would conclude impossibility by "if on the boundary, then <Latex>$x^2 + y^2$</Latex> would have to be <Latex>$1$</Latex> and <Latex>$1000$</Latex> at the same time". But it is nicer to let <Latex>$U = \mathbb&#123;R&#125;^2$</Latex>, because then <Latex>$\bar S = S$</Latex> so we get that the global extrema are in <Latex>$S$</Latex> straight away.&#160;<a href="#fnref-5" className="footnoteBackLink" title="Jump back to footnote 5 in the text.">&#8617;</a></p>
</li>
</ol>
</div>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths/olympiad/techniques">
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
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#background-theory" className="text-link">Background Theory</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#partial-derivatives" className="text-link">Partial Derivatives</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#the-big-theorem" className="text-link">The Big Theorem</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#example-problem-1" className="text-link">Example Problem 1</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#example-problem-2" className="text-link">Example Problem 2</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#example-problem-3" className="text-link">Example problem 3</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#homogenous-trick" className="text-link">Homogenous Trick</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#practice-problem-jbmo" className="text-link">Practice problem (JBMO)</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#when-it-fails" className="text-link">When It Fails</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#conclusion" className="text-link">Conclusion</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    