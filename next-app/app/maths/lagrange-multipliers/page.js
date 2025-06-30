import Svg10Compact from '@/components/AUTOSVG/lagrange-mult/svg10Compact'
import Svg11Closedball from '@/components/AUTOSVG/lagrange-mult/svg11Closedball'
import Svg12Cube from '@/components/AUTOSVG/lagrange-mult/svg12Cube'
import Svg13Notboundary from '@/components/AUTOSVG/lagrange-mult/svg13Notboundary'
import Svg1Closedball01 from '@/components/AUTOSVG/lagrange-mult/svg1Closedball01'
import Svg2Openset from '@/components/AUTOSVG/lagrange-mult/svg2Openset'
import Svg3Notopenset from '@/components/AUTOSVG/lagrange-mult/svg3Notopenset'
import Svg4Closure from '@/components/AUTOSVG/lagrange-mult/svg4Closure'
import Svg5Closedopencomplement from '@/components/AUTOSVG/lagrange-mult/svg5Closedopencomplement'
import Svg6Openintandunion from '@/components/AUTOSVG/lagrange-mult/svg6Openintandunion'
import Svg7Closedintandunion from '@/components/AUTOSVG/lagrange-mult/svg7Closedintandunion'
import Svg8Bounded from '@/components/AUTOSVG/lagrange-mult/svg8Bounded'
import Svg9Notcompact from '@/components/AUTOSVG/lagrange-mult/svg9Notcompact'

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
import Pilcrow from '@/components/pilcrow'
import { Thm, Lemma, Proof, Defn, Example } from '@/components/math'


export const metadata = {title:"Lagrange Multipliers"}

export default function LagrangeMultipliers () {
    return (
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
                                
                                    
                                        
                        
                            <Accordion title="Analysis-and-Topology" href="/maths/Analysis-and-Topology" type="course" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="lagrange-multipliers" href="/maths/lagrange-multipliers" type="file" relDepth={ 2 } isSelected={ true } />
                        
                    
                                    
                                        
                        
                            <Accordion title="proving-FTA" href="/maths/proving-FTA" type="folder" relDepth={ 2 } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="1-integer-axioms" href="/maths/proving-FTA/1-integer-axioms" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="2-division-algo" href="/maths/proving-FTA/2-division-algo" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="3-bezout-egcd" href="/maths/proving-FTA/3-bezout-egcd" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
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

    
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] min-h-10 h-[30vh] md:h-[calc(60vh-8.5rem)] xl:hidden shrink-0 px-4 py-2 border-t-2 md:border-t-0 md:border-b-2 border-border-subtle">
            <h1 className="text-text-secondary text-lg">Table of contents</h1>
            <ul>
                
                    <li className="pt-1 font-bold"><Link href="#background-theory" className="tocentry text-link [@media(hover:hover)]:hover:underline">Background Theory</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#partial-derivatives" className="tocentry text-link [@media(hover:hover)]:hover:underline">Partial Derivatives</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#the-big-theorem" className="tocentry text-link [@media(hover:hover)]:hover:underline">The Big Theorem</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#example-problem-1" className="tocentry text-link [@media(hover:hover)]:hover:underline">Example Problem 1</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#example-problem-2" className="tocentry text-link [@media(hover:hover)]:hover:underline">Example Problem 2</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#example-problem-3" className="tocentry text-link [@media(hover:hover)]:hover:underline">Example problem 3</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#homogenous-trick" className="tocentry text-link [@media(hover:hover)]:hover:underline">Homogenous Trick</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#practice-problem-jbmo" className="tocentry text-link [@media(hover:hover)]:hover:underline">Practice problem (JBMO)</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#when-it-fails" className="tocentry text-link [@media(hover:hover)]:hover:underline">When It Fails</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#conclusion" className="tocentry text-link [@media(hover:hover)]:hover:underline">Conclusion</Link></li>
                
            </ul>
        </div>
    

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        <div className="flex flex-wrap items-center space-x-2 mb-3">
            
                <div className="flex flex-wrap items-center align-middle space-x-1 mr-2">
                    
                        <span className="font-bold text-text-secondary">/</span>
                        <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths">maths</Link></p>
                    
                </div>
            

            
                
                <Badge color="purple">olympiad</Badge>
                
                <Badge color="indigo">analysis-intro</Badge>
                
            
        </div>

        
            <p className="text-text-secondary mb-2">Created 14 Jul 2023. Last updated 20 Dec 2024</p>
        

        <div className="article mb-4">
            <h1 id="revenge-of-analysis-using-lagrange-multipliers-to-destroy-olympiad-inequalities">Revenge of Analysis: Using Lagrange Multipliers to Destroy Olympiad Inequalities</h1>

<p>Goal: learn how to use Lagrange multipliers in olympiads.</p>

<p>Lagrange multipliers are a nice tool to solve inequalities, but they are rarely seen in olympiad solutions. Once you are comfortable with it, it can be an overpowered way smash open inequalities without much insight. (So economists love them!) For this reason, we need to approach it rigorously, to ensure we can justify earning marks.</p>

<p>I really recommend watching <ProminentLink href='https://youtu.be/5A39Ht9Wcu0'>this video</ProminentLink> to get some intuition first.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="background-theory" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Background Theory</h2><Pilcrow href="#background-theory" text="https://tripos.guru/maths/lagrange-multipliers#background-theory"/></div>

<p>All of this is covered in my <ProminentLink href="/maths/Analysis-and-Topology" internal>course notes for IB Analysis and Topology</ProminentLink>, in the relevant sections. The results and definitions in this article are correct only for <Latex>$\mathbb&#123;R&#125;^n$</Latex> (e.g. compactness is something different, but the Heine-Borel theorem says that in <Latex>$\mathbb&#123;R&#125;^n$</Latex> it's equivalent to being closed and bounded). For the more general definitions and a deeper understanding, check out the course notes.</p>

<Defn>

<p>Consider a set <Latex>$M$</Latex> together with a function <Latex>$d : M \times M \to \mathbb&#123;R&#125;$</Latex>.</p>

<p><Latex>$(M, d)$</Latex> is a <strong>metric space</strong> if:</p>

<ul>
<li><Latex>$d(x,y) \geq 0$</Latex>, equality if and only if (<em>"iff"</em>) <Latex>$x=y$</Latex> ("positive semi-definite")</li>
<li><Latex>$d(x,y) = d(y,x)$</Latex> ("symmetric")</li>
<li><Latex>$d(x,y) + d(y,z) \geq d(x,z)$</Latex> ("triangle inequality")</li>
</ul>

</Defn>

<Example>

<p><Latex>$(\mathbb&#123;R&#125;^n, d)$</Latex> is a metric space, where:</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\mathbb&#123;R&#125;^n = \&#123;(x_1, \cdots, x_n) \mid x_i \in \mathbb&#123;R&#125;\&#125;$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$d(x,y) = \sqrt&#123;\sum_&#123;i=1&#125;^n (x_i-y_i)^2&#125;$$</Latex></span>

</Example>

<p><br/></p>

<Defn name="balls">

<p>The <strong>open ball</strong> in <Latex>$\mathbb&#123;R&#125;^n$</Latex> with centre <Latex>$p \in \mathbb&#123;R^n&#125;$</Latex> and radius <Latex>$r$</Latex> is</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$B(p,r) := \&#123;x \in \mathbb&#123;\mathbb&#123;R&#125;^n&#125; \mid d(p,x) \lt r \&#125;$$</Latex></span>

<p>Similarly, the <strong>closed ball</strong> <Latex>$B[p,r]$</Latex> is<sup className="footnote-ref" id="fnref-1"><a href="#fn-1">1</a></sup> the set:</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\&#123;x \in \mathbb&#123;R&#125;^n \mid d(p,x) \leq r\&#125;$$</Latex></span>

</Defn>

<Example plural>

<ul>
<li>Any finite open interval in <Latex>$\mathbb&#123;R&#125;$</Latex> is an open ball (<Latex>$n=1$</Latex>), because for any open interval <Latex>$(a,b) \subset \mathbb&#123;R&#125;$</Latex>, it is equal to <Latex>$B(\frac&#123;a+b&#125;&#123;2&#125;, \frac&#123;b-a&#125;&#123;2&#125;)$</Latex>.</li>
<li><div className='flex flex-wrap items-center space-x-4'><p><Latex>$B[0,1]$</Latex> in <Latex>$\mathbb&#123;R&#125;^2$</Latex> is</p> <Svg1Closedball01 width={ 100 } height={ 100 }/></div></li>
</ul>

</Example>

<Defn>

<p><Latex>$U \subseteq \mathbb&#123;R&#125;^n$</Latex> is <strong>open</strong> iff for every <Latex>$p \in U$</Latex>, <Latex>$\exists r\gt 0$</Latex> s.t. <Latex>$B(p,r) \subset U$</Latex>.</p>

<div className='flex flex-wrap justify-center space-x-8'>
    <Svg2Openset width={ 150 } height={ 160 }/>
    <Svg3Notopenset width={ 150 } height={ 160 }/>
</div>

</Defn>

<p>Informally: an 'open set' is a set such that for any point <Latex>$x$</Latex> in the set, we can fit a ball ball around <Latex>$x$</Latex>, while staying inside the set.</p>

<p><br/></p>

<Defn name="limits">

<p>Let <Latex>$(x_k)_&#123;k=1&#125;^\infty$</Latex> be a sequence in <Latex>$\mathbb&#123;R&#125;^n$</Latex>.</p>

<p>The sequence <strong>converges</strong> to the point <Latex>$x_\infty$</Latex> iff <Latex>$\forall \epsilon \gt 0, \exists n_0 \in \mathbb&#123;N&#125;$</Latex> such that:</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$n \geq n_0 \implies d(x_n, x_\infty) \lt \epsilon$$</Latex></span>

<p>Then <Latex>$x_\infty$</Latex> is denoted <Latex>$\lim_&#123;n \to \infty&#125;(x_n)$</Latex>.</p>

</Defn>

<Example plural>

<ul>
<li>Let <Latex>$x_n = \left(\frac&#123;1&#125;&#123;n&#125;, \frac&#123;1&#125;&#123;n&#125;\right)$</Latex>, then <Latex>$\lim_&#123;n \to \infty&#125; x_n = (0,0)$</Latex>.</li>
<li><Latex>$\lim_&#123;n \to \infty&#125; \left(1-\frac&#123;1&#125;&#123;n&#125;\;,\; \frac&#123;1&#125;&#123;n^2&#125;\right) = (1,0)$</Latex></li>
</ul>

</Example>

<p><br/></p>

<Defn>

<p>Let <Latex>$S \subseteq \mathbb&#123;R&#125;^n$</Latex>. <Latex>$S$</Latex> is <strong>closed</strong> iff for every sequence of points <Latex>$(x_k)_&#123;k=1&#125;^\infty$</Latex> that satisfies <Latex>$x_k \in S \;\forall\; k$</Latex>, we have <Latex>$\left( \lim_&#123;k \to \infty&#125; x_k \right) \in S$</Latex>.</p>

</Defn>

<Example plural>

<ul>
<li><Latex>$B(0,1)$</Latex> is not closed because we can take <Latex>$x_k = (1 - \frac&#123;1&#125;&#123;k&#125;, 0, \cdots, 0).$</Latex></li>
<li>Any open ball together with one point on the boundary, is neither closed nor open.</li>
</ul>

</Example>

<p><br/></p>

<Defn>

<p>Let <Latex>$A \in \mathbb&#123;R&#125;^n$</Latex>. The <strong>closure</strong> of <Latex>$A$</Latex>, denoted <Latex>$\bar A$</Latex>, is the smallest closed set containing <Latex>$A$</Latex>.</p>

<div className='w-full flex justify-center'>
    <Svg4Closure width={ 250 } height={ 125 }/>
</div>

</Defn>

<p><br/></p>

<hr/>

<Thm type="Fact">

<p><Latex>$A \subseteq \mathbb&#123;R&#125;^n$</Latex> is closed if and only if <Latex>$\mathbb&#123;R&#125;^n \setminus A$</Latex> is open.</p>

<div className='w-full flex justify-center'>
    <Svg5Closedopencomplement width={ 300 } height={ 150 }/>
</div>

</Thm>

<Thm type="Fact">

<p>Let <Latex>$U,V$</Latex> be open sets. Then <Latex>$U \cap V$</Latex> and <Latex>$U \cup V$</Latex> are also open sets. This extends to finite intersections<sup className="footnote-ref" id="fnref-2"><a href="#fn-2">2</a></sup> and infinite unions.</p>

<div className='w-full flex justify-center'>
    <Svg6Openintandunion width={ 150 } height={ 150 }/>
</div>

</Thm>

<Thm type="Fact">

<p>Let <Latex>$S,T$</Latex> be closed sets. Then <Latex>$S \cap T$</Latex> and <Latex>$S \cup T$</Latex> are also closed sets. This extends to infinite intersections and finite unions.</p>

<div className='w-full flex justify-center'>
    <Svg7Closedintandunion width={ 150 } height={ 150 }/>
</div>

</Thm>

<p><br/></p>

<hr/>

<Defn>

<p><Latex>$A \subseteq \mathbb&#123;R&#125;^n$</Latex> is <strong>bounded</strong> iff <Latex>$\exists\, R \in \mathbb&#123;R&#125;, R\gt 0$</Latex> such that <Latex>$A \subseteq B(0, R)$</Latex>.</p>

<div className='w-full flex justify-center mt-2'>
    <Svg8Bounded width={ 150 } height={ 150 }/>
</div>

</Defn>

<Defn>

<p>A subset <Latex>$K \subseteq \mathbb&#123;R&#125;^n$</Latex> is <strong>compact</strong> if it is closed and bounded.</p>

<div className='flex flex-wrap justify-around'><Svg9Notcompact width={ 200 } height={ 200 }/> <Svg10Compact width={ 200 } height={ 200 }/></div>

</Defn>

<Defn>

<p>Let <Latex>$D \subseteq \mathbb&#123;R&#125;^n$</Latex> and let <Latex>$f : D \to \mathbb&#123;R&#125;$</Latex>.</p>

<p><Latex>$f$</Latex> is <strong>continuous at the point</strong> <Latex>$p \in D$</Latex> iff <Latex>$\forall \epsilon \gt 0$</Latex>, <Latex>$\exists \delta \gt 0$</Latex> such that <Latex>$\forall x \in D$</Latex> we have:</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$d(p,x) \lt \delta \implies \lvert f(x) - f(p) \rvert \lt \epsilon$$</Latex></span>

<p><Latex>$f$</Latex> is <strong>continuous</strong> iff it is continuous at every point.</p>

</Defn>

<p>Informally, no matter how small <Latex>$\epsilon$</Latex> you pick, I can always find a region around <Latex>$p$</Latex> where the change in <Latex>$f$</Latex> is smaller than <Latex>$\epsilon$</Latex>. So, a small change in input causes a small change in ouput.</p>

<Example>

<p><Latex>$f : \mathbb&#123;R&#125;^n \to \mathbb&#123;R&#125;$</Latex>, <Latex>$f(x_1, \cdots, x_n) = x_1 + \cdots + x_n$</Latex> </p>

</Example>

<p><br/></p>

<hr/>

<Thm name="extreme value thm" outofline>

<p>Let <Latex>$f : K \to \mathbb&#123;R&#125;$</Latex> be a continuous function, where <Latex>$K \subseteq \mathbb&#123;R&#125;^n$</Latex> is a nonempty compact set.</p>

<p>Then <Latex>$f$</Latex> has both a global maximum value and a global minimum value<sup className="footnote-ref" id="fnref-3"><a href="#fn-3">3</a></sup>:</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\exists\, x \in K \text&#123; s.t. &#125; f(x) \geq f(y) \;\forall\, y \in K$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\exists\, x' \in K \text&#123; s.t. &#125; f(x') \leq f(y) \;\forall\, y \in K$$</Latex></span>

</Thm>

<Example outofline>

<div className='flex flex-wrap space-x-4 justify-start'>
    <div className='flex-[1_1_200px] min-w-[200px] space-y-2'>
        <p>Let <Latex>$K$</Latex> be a closed ball in <Latex>$\mathbb&#123;R&#125;^2$</Latex>, then <Latex>$K$</Latex> is compact. Let <Latex>$f : K \to \mathbb&#123;R&#125;, f(x) = d(x,(0,0))$</Latex> which is continuous.</p>
        <p>Then the theorem says that there is a point(s) on <Latex>$K$</Latex> which is closest to <Latex>$(0,0)$</Latex>, and a point(s) which is furthest.</p>
    </div>
    <Svg11Closedball width={ 200 } height={ 200 }/>
</div>

</Example>

<p>Note: We need to assume <Latex>$K$</Latex> is closed for this theorem, else we can construct a counterexample where <Latex>$f$</Latex> increases to infinity the closer you get to the edge.</p>

<Thm type="Fact">

<p>Let <Latex>$g : \mathbb&#123;R&#125;^n \to \mathbb&#123;R&#125;$</Latex> be continuous. Then for a fixed <Latex>$c \in \mathbb&#123;R&#125;$</Latex>, the set</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\&#123; x \in \mathbb&#123;R&#125;^n \mid g(x) = c \&#125;$$</Latex></span>

<p>is closed in <Latex>$\mathbb&#123;R&#125;^n$</Latex>.</p>

</Thm>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="partial-derivatives" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Partial Derivatives</h2><Pilcrow href="#partial-derivatives" text="https://tripos.guru/maths/lagrange-multipliers#partial-derivatives"/></div>

<p>I'm assuming you've already met these, so I'll recap.</p>

<Example plural outofline>

<ul>
<li><Latex>$f : \mathbb&#123;R&#125;^3 \to \mathbb&#123;R&#125;, f(x,y,z) = x^2 + y^2 + z^2$</Latex></li>
</ul>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta x&#125; = 2x, \frac&#123;\delta f&#125;&#123;\delta y&#125; = 2y, \frac&#123;\delta f&#125;&#123;\delta z&#125; = 2z, \nabla f = (2x,2y,2z)$$</Latex></span>

<ul>
<li><Latex>$f : (0, +\infty) \times (0, +\infty) \to \mathbb&#123;R&#125;, f(x,y) = \sqrt&#123;xy&#125;$</Latex>.</li>
</ul>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\nabla f = (\frac&#123;\sqrt y&#125;&#123;2 \sqrt x&#125;, \frac&#123;\sqrt x&#125;&#123;2 \sqrt y&#125;)$$</Latex></span>

</Example>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="the-big-theorem" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">The Big Theorem</h2><Pilcrow href="#the-big-theorem" text="https://tripos.guru/maths/lagrange-multipliers#the-big-theorem"/></div>

<p>Finally!</p>

<Thm name='Lagrange Multipliers, "LM"' outofline>

<p>Let <Latex>$U \subset \mathbb&#123;R&#125;^n$</Latex> be an open set<sup className="footnote-ref" id="fnref-4"><a href="#fn-4">4</a></sup> and let <Latex>$f,g : U \to \mathbb&#123;R&#125;$</Latex> be continuous functions with continuous partial derivatives of the first order.</p>

<p>Let <Latex>$c \in \mathbb&#123;R&#125;$</Latex> and <Latex>$S = \&#123;x \in U \mid g(x) = c\&#125;$</Latex>. (Note: <Latex>$S$</Latex> doesn't have to be open or closed, that's <Latex>$U$</Latex>!)</p>

<p>Then, if <Latex>$x_0 \in S$</Latex> is a local max or min, then either:</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\left( \frac&#123;\delta g&#125;&#123;\delta x&#125;, \frac&#123;\delta g&#125;&#123;\delta y&#125;, \frac&#123;\delta g&#125;&#123;\delta z&#125;,\cdots\right) = (0,0,0,\cdots)$$</Latex></span>

<p>Or <Latex>$\exists \lambda \in \mathbb&#123;R&#125;$</Latex> such that:</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta x&#125;(x_0) = \lambda \frac&#123;\delta g&#125;&#123;\delta x&#125;(x_0),$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta y&#125;(x_0) = \lambda \frac&#123;\delta g&#125;&#123;\delta y&#125;(x_0),$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta z&#125;(x_0) = \lambda \frac&#123;\delta g&#125;&#123;\delta y&#125;(x_0),$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\text&#123;etc.&#125;$$</Latex></span>

</Thm>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="example-problem-1" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Example Problem 1</h2><Pilcrow href="#example-problem-1" text="https://tripos.guru/maths/lagrange-multipliers#example-problem-1"/></div>

<blockquote>
  <p>Let <Latex>$x,y,z \geq 0$</Latex> such that <Latex>$x+y+z = 1$</Latex>. Find the min and max of <Latex>$xyz$</Latex>.</p>
</blockquote>

<Proof type="Solution" outofline unquoted>

<p>Let <Latex>$f(x,y,z) = xyz$</Latex> and <Latex>$g(x,y,z)=x+y+z$</Latex>; these are polynomial functions and so are continuous. We are maximizing and minimizing <Latex>$f$</Latex>, subject to a condition on <Latex>$g$</Latex>.</p>

<p><Latex>$0 \leq x,y,z \leq 1$</Latex> so we're only interested in the cube <Latex>$[0,1] \times [0,1] \times [0,1]$</Latex>.</p>

<div className='flex flex-wrap justify-center items-center space-x-4'>
    <Svg12Cube width={ 250 } height={ 200 }/><p><Latex>$x+y+z=1$</Latex> is a plane</p>
</div>

<p>Let <Latex>$U = (0,1)^3$</Latex>, then <Latex>$\bar U = [0,1]^3$</Latex>.</p>

<p>Let <Latex>$S = \&#123;x \in U \mid g(x)=1\&#125;$</Latex>, then <Latex>$\bar S$</Latex> is bounded hence compact.</p>

<p>Hence <Latex>$f$</Latex> has a global max and min in <Latex>$\bar S$</Latex>.</p>

<p>The global extrema might be on the boundary of <Latex>$\bar S$</Latex>. If so then we cannot apply LM, because the extrema will not be in <Latex>$S$</Latex>.</p>

<ul>
<li><p>If we are on the boundary, then one of <Latex>$x,y,z$</Latex> is <Latex>$0$</Latex>, so <Latex>$f(x,y,z) = xyz = 0$</Latex>. Thus <Latex>$f$</Latex> is zero everywhere on the boundary, so <Latex>$0$</Latex> would be an extremum.</p></li>
<li><p>If we are not on the boundary, then we are in <Latex>$S$</Latex>, so we can apply LM.</p></li>
</ul>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\frac&#123;\delta g&#125;&#123;\delta x&#125; = 1, \frac&#123;\delta g&#125;&#123;\delta y&#125; = 1, \frac&#123;\delta g&#125;&#123;\delta z&#125; = 1$$</Latex></span>

<p>So we are in the second case of the theorem, because <Latex>$(1,1,1) \neq (0,0,0)$</Latex>.</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta x&#125; = yz, \frac&#123;\delta f&#125;&#123;\delta y&#125; = xz, \frac&#123;\delta f&#125;&#123;\delta z&#125; = xy$$</Latex></span>

<p>So <Latex>$yz = \lambda \cdot 1$</Latex>, <Latex>$xz = \lambda \cdot 1$</Latex>, <Latex>$xy = \lambda \cdot 1$</Latex>. <br />
This implies <Latex>$xy = yz = zx$</Latex> so <Latex>$x=y=z$</Latex>, and finally <Latex>$x+y+z = 1$</Latex> <Latex>$\implies$</Latex> <Latex>$x=y=z=\frac&#123;1&#125;&#123;3&#125;$</Latex>, so an extremal value of <Latex>$f$</Latex> is <Latex>$\frac&#123;1&#125;&#123;27&#125;$</Latex>.</p>

<p>Overall, all extreme values of <Latex>$f$</Latex> on <Latex>$\bar S$</Latex> are <Latex>$0$</Latex> or <Latex>$\frac&#123;1&#125;&#123;27&#125;$</Latex>.</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\therefore 0 \leq xyz \leq \frac&#123;1&#125;&#123;27&#125;$$</Latex></span>

</Proof>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="example-problem-2" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Example Problem 2</h2><Pilcrow href="#example-problem-2" text="https://tripos.guru/maths/lagrange-multipliers#example-problem-2"/></div>

<blockquote>
  <p>Let <Latex>$x,y,z \geq 0$</Latex> such that <Latex>$x+y+z = 1$</Latex>. Show that
  <span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$0 \leq yz+zx+xy-2xyz \leq \frac&#123;7&#125;&#123;27&#125;$$</Latex></span></p>
</blockquote>

<Proof type="Solution" unquoted>

<p>Note <Latex>$0 \leq x,y,z \leq 1$</Latex>.</p>

<p>Let <Latex>$U = (0,1)^3$</Latex> and <Latex>$S = \&#123; x \in U \mid g(x) = 1\&#125;$</Latex>.</p>

<p>Let <Latex>$f(x,y,z) = yz+zx+xy-2xyz$</Latex> and <Latex>$g(x,y,z) = x+y+z$</Latex>, where <Latex>$f,g : U \to \mathbb&#123;R&#125;$</Latex>. Then <Latex>$f,g$</Latex> are continuous and have continous partial derivatives (because polynomial on open set).</p>

<p>Now, <Latex>$\bar U = [0,1]^3$</Latex> and <Latex>$\bar S = \bar U \cap \&#123;x \in \mathbb&#123;R&#125;^3 \mid g(x)=1\&#125;$</Latex> which is closed and bounded hence compact.</p>

<p>Hence <Latex>$f$</Latex> has a global max and min on <Latex>$\bar S$</Latex>.</p>

<p>Let <Latex>$x_0 = (x,y,z)$</Latex> be a global extremum.</p>

<ul>
<li>If <Latex>$x_0$</Latex> is on the boundary: <br />
Then one of <Latex>$x,y,z$</Latex> is <Latex>$0$</Latex>, WLOG <Latex>$z=0$</Latex>. Then <Latex>$x+y=1$</Latex> and we wish to show that <Latex>$0 \leq xy \leq \frac&#123;7&#125;&#123;27&#125;$</Latex>.</li>
</ul>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$x \geq 0, y \geq 0 \implies xy \geq 0$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$xy \leq \left(\frac&#123;x+y&#125;&#123;2&#125;\right)^2 = \frac&#123;1&#125;&#123;4&#125; \lt \frac&#123;7&#125;&#123;27&#125; \;\;\checkmark$$</Latex></span>

<p>Else, <Latex>$x_0$</Latex> is not on the boundary.</p>

<p>Then <Latex>$S$</Latex> has a global extremum in <Latex>$f$</Latex>, namely <Latex>$x_0$</Latex>. So I can apply LM.  </p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$g(x,y,z)=x+y+z$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\nabla g = \left(\frac&#123;\delta g&#125;&#123;\delta x&#125;, \frac&#123;\delta g&#125;&#123;\delta y&#125;, \frac&#123;\delta g&#125;&#123;\delta z&#125;\right)=(1,1,1)$$</Latex></span>

<p>Since <Latex>$\nabla g \neq (0,0,0)$</Latex>, the only possibility is <Latex>$\nabla f = \lambda \cdot \nabla g$</Latex>.</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$f(x,y,z) = yz + zx + xy - 2xyz$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta x&#125; = z+y-2yz$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta y&#125; = x+z-2xz$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\frac&#123;\delta f&#125;&#123;\delta z&#125; = y+x-2yx$$</Latex></span>

<p>So, <Latex>$z+y-2yz = \lambda \cdot 1$</Latex>, <br />
<Latex>$x+z-2xz = \lambda \cdot 1$</Latex>, <br />
<Latex>$y+x-2yx = \lambda \cdot 1$</Latex></p>

<p>Solving for <Latex>$x,y,z$</Latex>:</p>

<blockquote>
  <p><em>First case</em> : <Latex>$x,y,z \neq \frac&#123;1&#125;&#123;2&#125;$</Latex></p>
  
  <ul>
  <li><Latex>$z+y-2yz=\lambda$</Latex> <Latex>$\implies y(1-2z) = \lambda - z$</Latex> <Latex>$\implies y = \frac&#123;\lambda - z&#125;&#123;1-2z&#125;$</Latex></li>
  <li>Similarly, <Latex>$x = \frac&#123;\lambda - z&#125;&#123;1-2z&#125;$</Latex></li>
  <li>So <Latex>$x=y$</Latex>, and similarly <Latex>$x=y=z$</Latex>.</li>
  <li><Latex>$x+y+z = 1$</Latex> <Latex>$\implies x=y=z=\frac&#123;1&#125;&#123;3&#125;$</Latex></li>
  </ul>
  
  <p><em>Second case</em> : one of <Latex>$x,y,z$</Latex> is <Latex>$\frac&#123;1&#125;&#123;2&#125;$</Latex></p>
  
  <ul>
  <li>WLOG <Latex>$z = \frac&#123;1&#125;&#123;2&#125;$</Latex>, then <Latex>$\frac&#123;1&#125;&#123;2&#125; + y - 2y\cdot \frac&#123;1&#125;&#123;2&#125; = \lambda$</Latex> <Latex>$\implies \lambda = \frac&#123;1&#125;&#123;2&#125;$</Latex></li>
  <li><Latex>$x+y = 1-z$</Latex> <Latex>$\implies x+y=\frac&#123;1&#125;&#123;2&#125;$</Latex></li>
  <li><Latex>$x+y-2xy = \lambda$</Latex> <Latex>$\implies \frac&#123;1&#125;&#123;2&#125; - 2xy = \frac&#123;1&#125;&#123;2&#125;$</Latex> <Latex>$\implies xy = 0$</Latex>, but this cannot happen in the interior.</li>
  </ul>
</blockquote>

<p>Thus overall, The extremum <Latex>$x_0$</Latex> must equal <Latex>$(\frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;)$</Latex>.</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$f\left(\frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;\right) = \frac&#123;1&#125;&#123;9&#125; + \frac&#123;1&#125;&#123;9&#125; + \frac&#123;1&#125;&#123;9&#125; - \frac&#123;2&#125;&#123;27&#125; = \frac&#123;7&#125;&#123;27&#125; \;\; \checkmark$$</Latex></span>

</Proof>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="example-problem-3" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Example problem 3</h2><Pilcrow href="#example-problem-3" text="https://tripos.guru/maths/lagrange-multipliers#example-problem-3"/></div>

<blockquote>
  <p>Given that <Latex>$x,y \in \mathbb&#123;R&#125;$</Latex> with <Latex>$x^2 + y^2 = 1$</Latex>, Find the max and min values of <Latex>$8x^2 - 2y$</Latex>.</p>
</blockquote>

<p>Note: the "normal" way to do this would be to write it as <Latex>$8(1-y^2)-2y$</Latex> and bound this quadratic. But we can do it with LM too. I'll let you decide which way is easier.</p>

<Proof type="Solution" unquoted>

<p>Let <Latex>$f,g : \mathbb&#123;R&#125;^2 \to \mathbb&#123;R&#125;$</Latex> with:</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$f(x,y) = 8x^2-2y$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$g(x,y) = x^2 + y^2$$</Latex></span>

<p>Then <Latex>$f,g$</Latex> are continuous and have continuous partial derivatives.</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$U := \mathbb&#123;R&#125;^2$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$S := \&#123;x \in U \mid g(x) = 1\&#125;$$</Latex></span>

<p><Latex>$S$</Latex> is closed and bounded, hence <Latex>$S$</Latex> is compact.</p>

<p>Hence <Latex>$f$</Latex> attains a global max and min on <Latex>$S$</Latex>.</p>

<p>We can apply LM, because there is no boundary case to check<sup className="footnote-ref" id="fnref-5"><a href="#fn-5">5</a></sup>.</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\nabla g = (2x,2y)$$</Latex></span>

<p>So <Latex>$\nabla g \neq (0,0)$</Latex> since <Latex>$x^2 + y^2 = 1$</Latex>.</p>

<p>Hence we are in the second case:</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\nabla f = \lambda \nabla g$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\implies \begin&#123;bmatrix&#125; 16x \\ -2 \end&#123;bmatrix&#125; = \lambda \begin&#123;bmatrix&#125; 2x \\ 2y \end&#123;bmatrix&#125;$$</Latex></span>

<p>Thus we need to solve the following 3 simultaneous equations:</p>

<blockquote>
  <p><span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$16x = 2x\lambda$$</Latex></span>
  <span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$-2 = 2y\lambda$$</Latex></span>
  <span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$x^2 + y^2 = 1$$</Latex></span></p>
</blockquote>

<ul>
<li><p>If <Latex>$x=0$</Latex>, then <Latex>$y^2 = 1$</Latex>, so <Latex>$(x,y) = (0,1)$</Latex> or <Latex>$(0,-1)$</Latex>.</p></li>
<li><p>If <Latex>$x\neq 0$</Latex>, then <Latex>$\lambda = 8$</Latex>, so <Latex>$-2 = 16y$</Latex>. Hence <Latex>$y=-\frac&#123;1&#125;&#123;8&#125;$</Latex> and so <Latex>$x^2 = 1 - \frac&#123;1&#125;&#123;64&#125;$</Latex>, so <Latex>$x = \pm \frac&#123;\sqrt&#123;63&#125;&#125;&#123;8&#125;$</Latex>.</p></li>
</ul>

<p>Hence we need to check <Latex>$(0,1)$</Latex>,<Latex>$(0,-1)$</Latex>, <Latex>$(\frac&#123;\sqrt&#123;63&#125;&#125;&#123;8&#125;, -\frac&#123;1&#125;&#123;8&#125;)$</Latex>, <Latex>$(-\frac&#123;\sqrt&#123;63&#125;&#125;&#123;8&#125;, -\frac&#123;1&#125;&#123;8&#125;)$</Latex>.</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$f(0, \pm 1) = \mp 2$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$f(\pm \frac&#123;\sqrt&#123;63&#125;&#125;&#123;8&#125;, -\frac&#123;1&#125;&#123;8&#125;) = \frac&#123;65&#125;&#123;8&#125;$$</Latex></span>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\therefore -2 \leq 8x^2 - 2y \leq \frac&#123;65&#125;&#123;8&#125;$$</Latex></span>

</Proof>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="homogenous-trick" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Homogenous Trick</h2><Pilcrow href="#homogenous-trick" text="https://tripos.guru/maths/lagrange-multipliers#homogenous-trick"/></div>

<p>Suppose we want to prove some inequality, but there are no constraints.</p>

<p>If the inequality is homogenous, then we can impose a condition e.g. <Latex>$a+b+c=1$</Latex> or <Latex>$abc = 1$</Latex> or <Latex>$a^2+b^2+c^2=1$</Latex>, because we can scale each variable to make the condition true.</p>

<Example>

<p>Prove that <Latex>$\forall a,b,c \in \mathbb&#123;R&#125;$</Latex>,</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$a^2 + b^2 + c^2 \geq ab + bc + ca$$</Latex></span>

</Example>

<Proof type="Solution" unquoted>

<p>If <Latex>$a=b=c=0$</Latex>, the result is obvious.  </p>

<p>Otherwise, let <Latex>$k = \sqrt&#123;a^2 + b^2 + c^2&#125; \gt 0$</Latex>. The inequality is equivalent to:</p>

<span className="scrollshadow-horizontal latex-display-wrapper"><Latex>$$\left(\frac&#123;a&#125;&#123;k&#125;\right)^2 + \left(\frac&#123;b&#125;&#123;k&#125;\right)^2 + \left(\frac&#123;c&#125;&#123;k&#125;\right)^2 \geq \frac&#123;a&#125;&#123;k&#125; \cdot \frac&#123;b&#125;&#123;k&#125; + \frac&#123;b&#125;&#123;k&#125;\cdot \frac&#123;c&#125;&#123;k&#125; + \frac&#123;c&#125;&#123;k&#125; \cdot \frac&#123;a&#125;&#123;k&#125;$$</Latex></span>

<p>And so, letting <Latex>$x=\frac&#123;a&#125;&#123;k&#125;$</Latex>, <Latex>$y = \frac&#123;b&#125;&#123;k&#125;$</Latex>, <Latex>$z = \frac&#123;c&#125;&#123;k&#125;$</Latex>, we have that <Latex>$x^2 + y^2 + z^2 = 1$</Latex>.</p>

<p>So it is enough to prove that <Latex>$xy + yz + zx \leq 1$</Latex> when <Latex>$x^2 + y^2 + z^2 = 1$</Latex> (we chose this condition because of compactness).</p>

<p>We can now solve this as in the examples above, using Lagrange multipliers.</p>

</Proof>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="practice-problem-jbmo" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Practice problem (JBMO)</h2><Pilcrow href="#practice-problem-jbmo" text="https://tripos.guru/maths/lagrange-multipliers#practice-problem-jbmo"/></div>

<blockquote>
  <p>For <Latex>$x,y \in \mathbb&#123;R&#125;, (x,y) \neq (0,0)$</Latex>, prove that:
  <span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\frac&#123;x+y&#125;&#123;x^2-xy+y^2&#125; \leq \frac&#123;2\sqrt 2&#125;&#123;\sqrt &#123;x^2 + y^2&#125;&#125;$$</Latex></span></p>
</blockquote>

<p>(Note: much easier to fix <Latex>$y$</Latex> and use normal derivatives, but we want to solve with LM)</p>

<Spoiler>

<Proof type="Solution" unquoted outofline>

<p>The inequality is homogenous, so we can impose the condition <Latex>$x^2 + y^2 = 1$</Latex> by scaling the variables. Thus it is sufficient to show that <Latex>$\frac&#123;x+y&#125;&#123;x^2-xy+y^2&#125; \leq 2\sqrt 2$</Latex> when <Latex>$x^2 + y^2 = 1$</Latex>.</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\text&#123;Goal: &#125; \frac&#123;x+y&#125;&#123;x^2-xy+y^2&#125; \leq 2\sqrt 2$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\iff 0 \leq 2\sqrt2(x^2-xy+y^2) -x - y$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\iff 0 \leq 2\sqrt2(1-xy) -x - y$$</Latex></span>

<p>Note that we didn't have to clear the <Latex>$x^2 + y^2$</Latex> term, but it makes the computation easier - always look for tricks!</p>

<p>Now as usual, define:</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$f,g: \mathbb&#123;R&#125;^2 \to \mathbb&#123;R&#125;$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$f(x,y) = 2\sqrt2(1-xy)-x-y$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$g(x,y) = x^2 + y^2$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$S = \&#123;x \in \mathbb&#123;R&#125;^2 \mid g(x,y) = 1\&#125;$$</Latex></span>

<p>Then <Latex>$S$</Latex> is closed. Since <Latex>$S$</Latex> is also bounded, we have that <Latex>$S$</Latex> is compact.</p>

<p>Also <Latex>$f,g$</Latex> are continuous with continuous partial derivatives, since they are polynomials.</p>

<p>Hence <Latex>$f$</Latex> has a global max and min on <Latex>$S$</Latex>.</p>

<p><Latex>$\nabla g = (2x,2y) \neq (0,0)$</Latex> since <Latex>$a^2 + b^2 = 1$</Latex>.</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\therefore \nabla f = \lambda \nabla g$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\implies \begin&#123;bmatrix&#125; -2\sqrt2 y - 1 \\ -2\sqrt2 x - 1\end&#123;bmatrix&#125; = \lambda \begin&#123;bmatrix&#125; 2x \\ 2y\end&#123;bmatrix&#125;$$</Latex></span>

<p>Hence,</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$-2y\sqrt2 - 1 = 2x\lambda$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$-2x\sqrt2 - 1 = 2y\lambda$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$x^2 + y^2 = 1$$</Latex></span>

<p>Solving these to find <Latex>$f(x,y)$</Latex>:</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$y(-2y\sqrt2 - 1) = 2xy\lambda$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$x(-2x\sqrt2 - 1) = 2yx\lambda$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\therefore -2y^2\sqrt2 - y = -2x^2\sqrt2 - x$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\implies 2\sqrt2(x^2 - y^2) + (x-y) = 0$$</Latex></span>

<p>Thus either <Latex>$x=y$</Latex> or <Latex>$2\sqrt2(x+y) + 1 = 0$</Latex>.</p>

<ul>
<li>If <Latex>$x = y$</Latex>: <br />
Then, since <Latex>$x^2 + y^2 = 1$</Latex>, we have that <Latex>$x = y = \pm \frac&#123;1&#125;&#123;\sqrt2&#125;$</Latex>. In this case:</li>
</ul>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$f(x,y) = f\left(\pm \frac&#123;1&#125;&#123;\sqrt2&#125;, \pm \frac&#123;1&#125;&#123;\sqrt2&#125;\right)$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$= 2\sqrt2(1 - \frac&#123;1&#125;&#123;2&#125;) - (\pm \sqrt 2)$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$= \sqrt2 \mp \sqrt2$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$= 0, 2\sqrt2$$</Latex></span>

<ul>
<li>If <Latex>$2\sqrt2(x+y) + 1 = 0$</Latex>: <br />
Then <Latex>$x + y = -\frac&#123;1&#125;&#123;2\sqrt2&#125;$</Latex>.  </li>
</ul>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\implies (x+y)^2 = \frac&#123;1&#125;&#123;8&#125;$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\implies 2xy = \frac&#123;1&#125;&#123;8&#125; - (x^2+y^2) = \frac&#123;1&#125;&#123;8&#125; - 1$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\implies xy = -\frac&#123;7&#125;&#123;16&#125;$$</Latex></span>

<p>So in this case:</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$f(x,y) = 2\sqrt2(1-xy)-(x+y)$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$= 2\sqrt2\left(1+ \frac&#123;7&#125;&#123;16&#125;\right) + \frac&#123;1&#125;&#123;2\sqrt2&#125;$$</Latex></span>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$= \frac&#123;25\sqrt2&#125;&#123;8&#125;$$</Latex></span>

<p>Overall, the possible extremal values of <Latex>$f$</Latex> are <Latex>$0, 2\sqrt2, \frac&#123;25\sqrt2&#125;&#123;8&#125;$</Latex>.</p>

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$\therefore 0 \leq f(x,y) \leq \frac&#123;25\sqrt2&#125;&#123;8&#125;$$</Latex></span>

<p>In particular, <Latex>$f(x,y) \geq 0$</Latex> as required.</p>

</Proof>

</Spoiler>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="when-it-fails" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">When It Fails</h2><Pilcrow href="#when-it-fails" text="https://tripos.guru/maths/lagrange-multipliers#when-it-fails"/></div>

<blockquote>
  <p>Let <Latex>$a,b,c \gt 0$</Latex> such that <Latex>$a+b+c=3$</Latex>. Find the minimum value of:
  <span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$f(a,b,c) = \frac&#123;2-a^3&#125;&#123;a&#125; + \frac&#123;2-b^3&#125;&#123;b&#125; + \frac&#123;2-c^3&#125;&#123;c&#125;$$</Latex></span></p>
</blockquote>

<p>If we attempt to use LM:</p>

<div className='flex justify-center'>
    <Svg13Notboundary width={ 250 } height={ 200 }/>
</div>

<p>The problem is that <Latex>$f$</Latex> is not defined on the boundary, so we cannot say <Latex>$f$</Latex> has a global max and min in the area we're looking at (indeed <Latex>$f$</Latex> can be arbitrarily large if we let <Latex>$a$</Latex> approach zero for example). Boo, we can't use LM.</p>

<p>Actually, in this specific case we can fix it with the following approach:</p>

<Spoiler>

<p>Make the triangle a bit smaller on all sides, then it is compact and we can use LM. For the region of that we didn't consider, we can assume that "one of the variables is at least this small", so "<Latex>$f$</Latex> is at least this large", and get it to be larger than a value we already know.</p>

</Spoiler>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="conclusion" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Conclusion</h2><Pilcrow href="#conclusion" text="https://tripos.guru/maths/lagrange-multipliers#conclusion"/></div>

<p>As you've seen, it takes careful consideration and background knowledge to use Lagrange multipliers in olympiads correctly. Best of luck!</p>

<div className="footnotes">
<hr />
<ol>
<li id="fn-1">
<p><Latex>$B[p,r]$</Latex> is a closed set.&#160;<a href="#fnref-1" className="footnoteBackLink" title="Jump back to footnote 1 in the text.">&#8617;</a></p>
</li>

<li id="fn-2">
<p>If <Latex>$U_n = \left(-\frac&#123;1&#125;&#123;n&#125;, \frac&#123;1&#125;&#123;n&#125;\right)$</Latex>, then <Latex>$\bigcup_&#123;n=1&#125;^\infty U_n = \&#123;0\&#125;$</Latex> which is not open.&#160;<a href="#fnref-2" className="footnoteBackLink" title="Jump back to footnote 2 in the text.">&#8617;</a></p>
</li>

<li id="fn-3">
<p>This is not true in the reverse direction, for example consider <Latex>$B(0,1)$</Latex> and <Latex>$f(x) = d(x,0)$</Latex>, then there is a global min at 0.&#160;<a href="#fnref-3" className="footnoteBackLink" title="Jump back to footnote 3 in the text.">&#8617;</a></p>
</li>

<li id="fn-4">
<p>This is so that partial derivatives are defined.&#160;<a href="#fnref-4" className="footnoteBackLink" title="Jump back to footnote 4 in the text.">&#8617;</a></p>
</li>

<li id="fn-5">
<p>Note that we could have also let <Latex>$U$</Latex> be something like <Latex>$\&#123;(x,y) \in \mathbb&#123;R&#125;^2 \mid x^2+y^2 \lt 1000\&#125;$</Latex>, so that <Latex>$U$</Latex> actually has a boundary, and when we check that case, we would conclude impossibility by "if on the boundary, then <Latex>$x^2 + y^2$</Latex> would have to be <Latex>$1$</Latex> and <Latex>$1000$</Latex> at the same time". But it is nicer to let <Latex>$U = \mathbb&#123;R&#125;^2$</Latex>, because then <Latex>$\bar S = S$</Latex> so we get that the global extrema are in <Latex>$S$</Latex> straight away.&#160;<a href="#fnref-5" className="footnoteBackLink" title="Jump back to footnote 5 in the text.">&#8617;</a></p>
</li>
</ol>
</div>

        </div>

        
            <div className="border-t-2 border-border-subtle pt-4 flex items-top justify-between">
                
                    <div className="flex justify-start">
                        <Link href="/maths">
                            <div className="flex items-center justify-center space-x-1 text-text-secondary underline">
                                <RiArrowGoBackFill/>
                                <p>up a level</p>
                            </div>
                        </Link>
                    </div>
                

                
                    <div className="">
                        <CopyButton text="Goal: learn how to use Lagrange multipliers in olympiads. Lagrange multipliers are a nice tool to solve inequalities, but they are rarely seen in olympiad solutions. Once you are comfortable with it, it can be an overpowered way smash open inequalities without much insight. (So economists love them!) For this reason, we need to approach it rigorously, to ensure we can justify earning marks. I really recommend watching this video to get some intuition first. Background Theory All of this is covered in my course notes for IB Analysis and Topology, in the relevant sections. The results and definitions in this article are correct only for $\mathbb&#123;R&#125;^n$ (e.g. compactness is something different, but the Heine-Borel theorem says that in $\mathbb&#123;R&#125;^n$ it&#x27;s equivalent to being closed and bounded). For the more general definitions and a deeper understanding, check out the course notes. Consider a set $M$ together with a function $d : M \times M \to \mathbb&#123;R&#125;$. $(M, d)$ is a metric space if: $d(x,y) \geq 0$, equality if and only if (&quot;iff&quot;) $x=y$ (&quot;positive semi-definite&quot;) $d(x,y) = d(y,x)$ (&quot;symmetric&quot;) $d(x,y) + d(y,z) \geq d(x,z)$ (&quot;triangle inequality&quot;) $(\mathbb&#123;R&#125;^n, d)$ is a metric space, where: $$\mathbb&#123;R&#125;^n = \&#123;(x_1, \cdots, x_n) \mid x_i \in \mathbb&#123;R&#125;\&#125;$$ $$d(x,y) = \sqrt&#123;\sum_&#123;i=1&#125;^n (x_i-y_i)^2&#125;$$ The open ball in $\mathbb&#123;R&#125;^n$ with centre $p \in \mathbb&#123;R^n&#125;$ and radius $r$ is $$B(p,r) := \&#123;x \in \mathbb&#123;\mathbb&#123;R&#125;^n&#125; \mid d(p,x) \lt r \&#125;$$ Similarly, the closed ball $B[p,r]$ is the set: $$\&#123;x \in \mathbb&#123;R&#125;^n \mid d(p,x) \leq r\&#125;$$ Any finite open interval in $\mathbb&#123;R&#125;$ is an open ball ($n=1$), because for any open interval $(a,b) \subset \mathbb&#123;R&#125;$, it is equal to $B(\frac&#123;a+b&#125;&#123;2&#125;, \frac&#123;b-a&#125;&#123;2&#125;)$. $B[0,1]$ in $\mathbb&#123;R&#125;^2$ is $U \subseteq \mathbb&#123;R&#125;^n$ is open iff for every $p \in U$, $\exists r\gt 0$ s.t. $B(p,r) \subset U$. Informally: an &#x27;open set&#x27; is a set such that for any point $x$ in the set, we can fit a ball ball around $x$, while staying inside the set. Let $(x_k)_&#123;k=1&#125;^\infty$ be a sequence in $\mathbb&#123;R&#125;^n$. The sequence converges to the point $x_\infty$ iff $\forall \epsilon \gt 0, \exists n_0 \in \mathbb&#123;N&#125;$ such that: $$n \geq n_0 \implies d(x_n, x_\infty) \lt \epsilon$$ Then $x_\infty$ is denoted $\lim_&#123;n \to \infty&#125;(x_n)$. Let $x_n = \left(\frac&#123;1&#125;&#123;n&#125;, \frac&#123;1&#125;&#123;n&#125;\right)$, then $\lim_&#123;n \to \infty&#125; x_n = (0,0)$. $\lim_&#123;n \to \infty&#125; \left(1-\frac&#123;1&#125;&#123;n&#125;\;,\; \frac&#123;1&#125;&#123;n^2&#125;\right) = (1,0)$ Let $S \subseteq \mathbb&#123;R&#125;^n$. $S$ is closed iff for every sequence of points $(x_k)_&#123;k=1&#125;^\infty$ that satisfies $x_k \in S \;\forall\; k$, we have $\left( \lim_&#123;k \to \infty&#125; x_k \right) \in S$. $B(0,1)$ is not closed because we can take $x_k = (1 - \frac&#123;1&#125;&#123;k&#125;, 0, \cdots, 0).$ Any open ball together with one point on the boundary, is neither closed nor open. Let $A \in \mathbb&#123;R&#125;^n$. The closure of $A$, denoted $\bar A$, is the smallest closed set containing $A$. $A \subseteq \mathbb&#123;R&#125;^n$ is closed if and only if $\mathbb&#123;R&#125;^n \setminus A$ is open. Let $U,V$ be open sets. Then $U \cap V$ and $U \cup V$ are also open sets. This extends to finite intersections and infinite unions. Let $S,T$ be closed sets. Then $S \cap T$ and $S \cup T$ are also closed sets. This extends to infinite intersections and finite unions. $A \subseteq \mathbb&#123;R&#125;^n$ is bounded iff $\exists\, R \in \mathbb&#123;R&#125;, R\gt 0$ such that $A \subseteq B(0, R)$. A subset $K \subseteq \mathbb&#123;R&#125;^n$ is compact if it is closed and bounded. Let $D \subseteq \mathbb&#123;R&#125;^n$ and let $f : D \to \mathbb&#123;R&#125;$. $f$ is continuous at the point $p \in D$ iff $\forall \epsilon \gt 0$, $\exists \delta \gt 0$ such that $\forall x \in D$ we have: $$d(p,x) \lt \delta \implies \lvert f(x) - f(p) \rvert \lt \epsilon$$ $f$ is continuous iff it is continuous at every point. Informally, no matter how small $\epsilon$ you pick, I can always find a region around $p$ where the change in $f$ is smaller than $\epsilon$. So, a small change in input causes a small change in ouput. $f : \mathbb&#123;R&#125;^n \to \mathbb&#123;R&#125;$, $f(x_1, \cdots, x_n) = x_1 + \cdots + x_n$ Let $f : K \to \mathbb&#123;R&#125;$ be a continuous function, where $K \subseteq \mathbb&#123;R&#125;^n$ is a nonempty compact set. Then $f$ has both a global maximum value and a global minimum value: $$\exists\, x \in K \text&#123; s.t. &#125; f(x) \geq f(y) \;\forall\, y \in K$$ $$\exists\, x&#x27; \in K \text&#123; s.t. &#125; f(x&#x27;) \leq f(y) \;\forall\, y \in K$$ Let $K$ be a closed ball in $\mathbb&#123;R&#125;^2$, then $K$ is compact. Let $f : K \to \mathbb&#123;R&#125;, f(x) = d(x,(0,0))$ which is continuous. Then the theorem says that there is a point(s) on $K$ which is closest to $(0,0)$, and a point(s) which is furthest. Note: We need to assume $K$ is closed for this theorem, else we can construct a counterexample where $f$ increases to infinity the closer you get to the edge. Let $g : \mathbb&#123;R&#125;^n \to \mathbb&#123;R&#125;$ be continuous. Then for a fixed $c \in \mathbb&#123;R&#125;$, the set $$\&#123; x \in \mathbb&#123;R&#125;^n \mid g(x) = c \&#125;$$ is closed in $\mathbb&#123;R&#125;^n$. Partial Derivatives I&#x27;m assuming you&#x27;ve already met these, so I&#x27;ll recap. $f : \mathbb&#123;R&#125;^3 \to \mathbb&#123;R&#125;, f(x,y,z) = x^2 + y^2 + z^2$ $$\frac&#123;\delta f&#125;&#123;\delta x&#125; = 2x, \frac&#123;\delta f&#125;&#123;\delta y&#125; = 2y, \frac&#123;\delta f&#125;&#123;\delta z&#125; = 2z, \\nabla f = (2x,2y,2z)$$ $f : (0, +\infty) \times (0, +\infty) \to \mathbb&#123;R&#125;, f(x,y) = \sqrt&#123;xy&#125;$. $$\\nabla f = (\frac&#123;\sqrt y&#125;&#123;2 \sqrt x&#125;, \frac&#123;\sqrt x&#125;&#123;2 \sqrt y&#125;)$$ The Big Theorem Finally! Let $U \subset \mathbb&#123;R&#125;^n$ be an open set and let $f,g : U \to \mathbb&#123;R&#125;$ be continuous functions with continuous partial derivatives of the first order. Let $c \in \mathbb&#123;R&#125;$ and $S = \&#123;x \in U \mid g(x) = c\&#125;$. (Note: $S$ doesn&#x27;t have to be open or closed, that&#x27;s $U$!) Then, if $x_0 \in S$ is a local max or min, then either: $$\left( \frac&#123;\delta g&#125;&#123;\delta x&#125;, \frac&#123;\delta g&#125;&#123;\delta y&#125;, \frac&#123;\delta g&#125;&#123;\delta z&#125;,\cdots\right) = (0,0,0,\cdots)$$ Or $\exists \lambda \in \mathbb&#123;R&#125;$ such that: $$\frac&#123;\delta f&#125;&#123;\delta x&#125;(x_0) = \lambda \frac&#123;\delta g&#125;&#123;\delta x&#125;(x_0),$$ $$\frac&#123;\delta f&#125;&#123;\delta y&#125;(x_0) = \lambda \frac&#123;\delta g&#125;&#123;\delta y&#125;(x_0),$$ $$\frac&#123;\delta f&#125;&#123;\delta z&#125;(x_0) = \lambda \frac&#123;\delta g&#125;&#123;\delta y&#125;(x_0),$$ $$\text&#123;etc.&#125;$$ Example Problem 1 Let $x,y,z \geq 0$ such that $x+y+z = 1$. Find the min and max of $xyz$. Let $f(x,y,z) = xyz$ and $g(x,y,z)=x+y+z$; these are polynomial functions and so are continuous. We are maximizing and minimizing $f$, subject to a condition on $g$. $0 \leq x,y,z \leq 1$ so we&#x27;re only interested in the cube $[0,1] \times [0,1] \times [0,1]$. $x+y+z=1$ is a plane Let $U = (0,1)^3$, then $\bar U = [0,1]^3$. Let $S = \&#123;x \in U \mid g(x)=1\&#125;$, then $\bar S$ is bounded hence compact. Hence $f$ has a global max and min in $\bar S$. The global extrema might be on the boundary of $\bar S$. If so then we cannot apply LM, because the extrema will not be in $S$. If we are on the boundary, then one of $x,y,z$ is $0$, so $f(x,y,z) = xyz = 0$. Thus $f$ is zero everywhere on the boundary, so $0$ would be an extremum. If we are not on the boundary, then we are in $S$, so we can apply LM. $$\frac&#123;\delta g&#125;&#123;\delta x&#125; = 1, \frac&#123;\delta g&#125;&#123;\delta y&#125; = 1, \frac&#123;\delta g&#125;&#123;\delta z&#125; = 1$$ So we are in the second case of the theorem, because $(1,1,1) \\neq (0,0,0)$. $$\frac&#123;\delta f&#125;&#123;\delta x&#125; = yz, \frac&#123;\delta f&#125;&#123;\delta y&#125; = xz, \frac&#123;\delta f&#125;&#123;\delta z&#125; = xy$$ So $yz = \lambda \cdot 1$, $xz = \lambda \cdot 1$, $xy = \lambda \cdot 1$. This implies $xy = yz = zx$ so $x=y=z$, and finally $x+y+z = 1$ $\implies$ $x=y=z=\frac&#123;1&#125;&#123;3&#125;$, so an extremal value of $f$ is $\frac&#123;1&#125;&#123;27&#125;$. Overall, all extreme values of $f$ on $\bar S$ are $0$ or $\frac&#123;1&#125;&#123;27&#125;$. $$\therefore 0 \leq xyz \leq \frac&#123;1&#125;&#123;27&#125;$$ Example Problem 2 Let $x,y,z \geq 0$ such that $x+y+z = 1$. Show that $$0 \leq yz+zx+xy-2xyz \leq \frac&#123;7&#125;&#123;27&#125;$$ Note $0 \leq x,y,z \leq 1$. Let $U = (0,1)^3$ and $S = \&#123; x \in U \mid g(x) = 1\&#125;$. Let $f(x,y,z) = yz+zx+xy-2xyz$ and $g(x,y,z) = x+y+z$, where $f,g : U \to \mathbb&#123;R&#125;$. Then $f,g$ are continuous and have continous partial derivatives (because polynomial on open set). Now, $\bar U = [0,1]^3$ and $\bar S = \bar U \cap \&#123;x \in \mathbb&#123;R&#125;^3 \mid g(x)=1\&#125;$ which is closed and bounded hence compact. Hence $f$ has a global max and min on $\bar S$. Let $x_0 = (x,y,z)$ be a global extremum. If $x_0$ is on the boundary: Then one of $x,y,z$ is $0$, WLOG $z=0$. Then $x+y=1$ and we wish to show that $0 \leq xy \leq \frac&#123;7&#125;&#123;27&#125;$. $$x \geq 0, y \geq 0 \implies xy \geq 0$$ $$xy \leq \left(\frac&#123;x+y&#125;&#123;2&#125;\right)^2 = \frac&#123;1&#125;&#123;4&#125; \lt \frac&#123;7&#125;&#123;27&#125; \;\;\checkmark$$ Else, $x_0$ is not on the boundary. Then $S$ has a global extremum in $f$, namely $x_0$. So I can apply LM. $$g(x,y,z)=x+y+z$$ $$\\nabla g = \left(\frac&#123;\delta g&#125;&#123;\delta x&#125;, \frac&#123;\delta g&#125;&#123;\delta y&#125;, \frac&#123;\delta g&#125;&#123;\delta z&#125;\right)=(1,1,1)$$ Since $\\nabla g \\neq (0,0,0)$, the only possibility is $\\nabla f = \lambda \cdot \\nabla g$. $$f(x,y,z) = yz + zx + xy - 2xyz$$ $$\frac&#123;\delta f&#125;&#123;\delta x&#125; = z+y-2yz$$ $$\frac&#123;\delta f&#125;&#123;\delta y&#125; = x+z-2xz$$ $$\frac&#123;\delta f&#125;&#123;\delta z&#125; = y+x-2yx$$ So, $z+y-2yz = \lambda \cdot 1$, $x+z-2xz = \lambda \cdot 1$, $y+x-2yx = \lambda \cdot 1$ Solving for $x,y,z$: First case : $x,y,z \\neq \frac&#123;1&#125;&#123;2&#125;$ $z+y-2yz=\lambda$ $\implies y(1-2z) = \lambda - z$ $\implies y = \frac&#123;\lambda - z&#125;&#123;1-2z&#125;$ Similarly, $x = \frac&#123;\lambda - z&#125;&#123;1-2z&#125;$ So $x=y$, and similarly $x=y=z$. $x+y+z = 1$ $\implies x=y=z=\frac&#123;1&#125;&#123;3&#125;$ Second case : one of $x,y,z$ is $\frac&#123;1&#125;&#123;2&#125;$ WLOG $z = \frac&#123;1&#125;&#123;2&#125;$, then $\frac&#123;1&#125;&#123;2&#125; + y - 2y\cdot \frac&#123;1&#125;&#123;2&#125; = \lambda$ $\implies \lambda = \frac&#123;1&#125;&#123;2&#125;$ $x+y = 1-z$ $\implies x+y=\frac&#123;1&#125;&#123;2&#125;$ $x+y-2xy = \lambda$ $\implies \frac&#123;1&#125;&#123;2&#125; - 2xy = \frac&#123;1&#125;&#123;2&#125;$ $\implies xy = 0$, but this cannot happen in the interior. Thus overall, The extremum $x_0$ must equal $(\frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;)$. $$f\left(\frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;3&#125;\right) = \frac&#123;1&#125;&#123;9&#125; + \frac&#123;1&#125;&#123;9&#125; + \frac&#123;1&#125;&#123;9&#125; - \frac&#123;2&#125;&#123;27&#125; = \frac&#123;7&#125;&#123;27&#125; \;\; \checkmark$$ Example problem 3 Given that $x,y \in \mathbb&#123;R&#125;$ with $x^2 + y^2 = 1$, Find the max and min values of $8x^2 - 2y$. Note: the &quot;normal&quot; way to do this would be to write it as $8(1-y^2)-2y$ and bound this quadratic. But we can do it with LM too. I&#x27;ll let you decide which way is easier. Let $f,g : \mathbb&#123;R&#125;^2 \to \mathbb&#123;R&#125;$ with: $$f(x,y) = 8x^2-2y$$ $$g(x,y) = x^2 + y^2$$ Then $f,g$ are continuous and have continuous partial derivatives. $$U := \mathbb&#123;R&#125;^2$$ $$S := \&#123;x \in U \mid g(x) = 1\&#125;$$ $S$ is closed and bounded, hence $S$ is compact. Hence $f$ attains a global max and min on $S$. We can apply LM, because there is no boundary case to check. $$\\nabla g = (2x,2y)$$ So $\\nabla g \\neq (0,0)$ since $x^2 + y^2 = 1$. Hence we are in the second case: $$\\nabla f = \lambda \\nabla g$$ $$\implies \begin&#123;bmatrix&#125; 16x \\ -2 \end&#123;bmatrix&#125; = \lambda \begin&#123;bmatrix&#125; 2x \\ 2y \end&#123;bmatrix&#125;$$ Thus we need to solve the following 3 simultaneous equations: $$16x = 2x\lambda$$ $$-2 = 2y\lambda$$ $$x^2 + y^2 = 1$$ If $x=0$, then $y^2 = 1$, so $(x,y) = (0,1)$ or $(0,-1)$. If $x\\neq 0$, then $\lambda = 8$, so $-2 = 16y$. Hence $y=-\frac&#123;1&#125;&#123;8&#125;$ and so $x^2 = 1 - \frac&#123;1&#125;&#123;64&#125;$, so $x = \pm \frac&#123;\sqrt&#123;63&#125;&#125;&#123;8&#125;$. Hence we need to check $(0,1)$,$(0,-1)$, $(\frac&#123;\sqrt&#123;63&#125;&#125;&#123;8&#125;, -\frac&#123;1&#125;&#123;8&#125;)$, $(-\frac&#123;\sqrt&#123;63&#125;&#125;&#123;8&#125;, -\frac&#123;1&#125;&#123;8&#125;)$. $$f(0, \pm 1) = \mp 2$$ $$f(\pm \frac&#123;\sqrt&#123;63&#125;&#125;&#123;8&#125;, -\frac&#123;1&#125;&#123;8&#125;) = \frac&#123;65&#125;&#123;8&#125;$$ $$\therefore -2 \leq 8x^2 - 2y \leq \frac&#123;65&#125;&#123;8&#125;$$ Homogenous Trick Suppose we want to prove some inequality, but there are no constraints. If the inequality is homogenous, then we can impose a condition e.g. $a+b+c=1$ or $abc = 1$ or $a^2+b^2+c^2=1$, because we can scale each variable to make the condition true. Prove that $\forall a,b,c \in \mathbb&#123;R&#125;$, $$a^2 + b^2 + c^2 \geq ab + bc + ca$$ If $a=b=c=0$, the result is obvious. Otherwise, let $k = \sqrt&#123;a^2 + b^2 + c^2&#125; \gt 0$. The inequality is equivalent to: $$\left(\frac&#123;a&#125;&#123;k&#125;\right)^2 + \left(\frac&#123;b&#125;&#123;k&#125;\right)^2 + \left(\frac&#123;c&#125;&#123;k&#125;\right)^2 \geq \frac&#123;a&#125;&#123;k&#125; \cdot \frac&#123;b&#125;&#123;k&#125; + \frac&#123;b&#125;&#123;k&#125;\cdot \frac&#123;c&#125;&#123;k&#125; + \frac&#123;c&#125;&#123;k&#125; \cdot \frac&#123;a&#125;&#123;k&#125;$$ And so, letting $x=\frac&#123;a&#125;&#123;k&#125;$, $y = \frac&#123;b&#125;&#123;k&#125;$, $z = \frac&#123;c&#125;&#123;k&#125;$, we have that $x^2 + y^2 + z^2 = 1$. So it is enough to prove that $xy + yz + zx \leq 1$ when $x^2 + y^2 + z^2 = 1$ (we chose this condition because of compactness). We can now solve this as in the examples above, using Lagrange multipliers. Practice problem (JBMO) For $x,y \in \mathbb&#123;R&#125;, (x,y) \\neq (0,0)$, prove that: $$\frac&#123;x+y&#125;&#123;x^2-xy+y^2&#125; \leq \frac&#123;2\sqrt 2&#125;&#123;\sqrt &#123;x^2 + y^2&#125;&#125;$$ (Note: much easier to fix $y$ and use normal derivatives, but we want to solve with LM) The inequality is homogenous, so we can impose the condition $x^2 + y^2 = 1$ by scaling the variables. Thus it is sufficient to show that $\frac&#123;x+y&#125;&#123;x^2-xy+y^2&#125; \leq 2\sqrt 2$ when $x^2 + y^2 = 1$. $$\text&#123;Goal: &#125; \frac&#123;x+y&#125;&#123;x^2-xy+y^2&#125; \leq 2\sqrt 2$$ $$\iff 0 \leq 2\sqrt2(x^2-xy+y^2) -x - y$$ $$\iff 0 \leq 2\sqrt2(1-xy) -x - y$$ Note that we didn&#x27;t have to clear the $x^2 + y^2$ term, but it makes the computation easier - always look for tricks! Now as usual, define: $$f,g: \mathbb&#123;R&#125;^2 \to \mathbb&#123;R&#125;$$ $$f(x,y) = 2\sqrt2(1-xy)-x-y$$ $$g(x,y) = x^2 + y^2$$ $$S = \&#123;x \in \mathbb&#123;R&#125;^2 \mid g(x,y) = 1\&#125;$$ Then $S$ is closed. Since $S$ is also bounded, we have that $S$ is compact. Also $f,g$ are continuous with continuous partial derivatives, since they are polynomials. Hence $f$ has a global max and min on $S$. $\\nabla g = (2x,2y) \\neq (0,0)$ since $a^2 + b^2 = 1$. $$\therefore \\nabla f = \lambda \\nabla g$$ $$\implies \begin&#123;bmatrix&#125; -2\sqrt2 y - 1 \\ -2\sqrt2 x - 1\end&#123;bmatrix&#125; = \lambda \begin&#123;bmatrix&#125; 2x \\ 2y\end&#123;bmatrix&#125;$$ Hence, $$-2y\sqrt2 - 1 = 2x\lambda$$ $$-2x\sqrt2 - 1 = 2y\lambda$$ $$x^2 + y^2 = 1$$ Solving these to find $f(x,y)$: $$y(-2y\sqrt2 - 1) = 2xy\lambda$$ $$x(-2x\sqrt2 - 1) = 2yx\lambda$$ $$\therefore -2y^2\sqrt2 - y = -2x^2\sqrt2 - x$$ $$\implies 2\sqrt2(x^2 - y^2) + (x-y) = 0$$ Thus either $x=y$ or $2\sqrt2(x+y) + 1 = 0$. If $x = y$: Then, since $x^2 + y^2 = 1$, we have that $x = y = \pm \frac&#123;1&#125;&#123;\sqrt2&#125;$. In this case: $$f(x,y) = f\left(\pm \frac&#123;1&#125;&#123;\sqrt2&#125;, \pm \frac&#123;1&#125;&#123;\sqrt2&#125;\right)$$ $$= 2\sqrt2(1 - \frac&#123;1&#125;&#123;2&#125;) - (\pm \sqrt 2)$$ $$= \sqrt2 \mp \sqrt2$$ $$= 0, 2\sqrt2$$ If $2\sqrt2(x+y) + 1 = 0$: Then $x + y = -\frac&#123;1&#125;&#123;2\sqrt2&#125;$. $$\implies (x+y)^2 = \frac&#123;1&#125;&#123;8&#125;$$ $$\implies 2xy = \frac&#123;1&#125;&#123;8&#125; - (x^2+y^2) = \frac&#123;1&#125;&#123;8&#125; - 1$$ $$\implies xy = -\frac&#123;7&#125;&#123;16&#125;$$ So in this case: $$f(x,y) = 2\sqrt2(1-xy)-(x+y)$$ $$= 2\sqrt2\left(1+ \frac&#123;7&#125;&#123;16&#125;\right) + \frac&#123;1&#125;&#123;2\sqrt2&#125;$$ $$= \frac&#123;25\sqrt2&#125;&#123;8&#125;$$ Overall, the possible extremal values of $f$ are $0, 2\sqrt2, \frac&#123;25\sqrt2&#125;&#123;8&#125;$. $$\therefore 0 \leq f(x,y) \leq \frac&#123;25\sqrt2&#125;&#123;8&#125;$$ In particular, $f(x,y) \geq 0$ as required. When It Fails Let $a,b,c \gt 0$ such that $a+b+c=3$. Find the minimum value of: $$f(a,b,c) = \frac&#123;2-a^3&#125;&#123;a&#125; + \frac&#123;2-b^3&#125;&#123;b&#125; + \frac&#123;2-c^3&#125;&#123;c&#125;$$ If we attempt to use LM: The problem is that $f$ is not defined on the boundary, so we cannot say $f$ has a global max and min in the area we&#x27;re looking at (indeed $f$ can be arbitrarily large if we let $a$ approach zero for example). Boo, we can&#x27;t use LM. Actually, in this specific case we can fix it with the following approach: Make the triangle a bit smaller on all sides, then it is compact and we can use LM. For the region of that we didn&#x27;t consider, we can assume that &quot;one of the variables is at least this small&quot;, so &quot;$f$ is at least this large&quot;, and get it to be larger than a value we already know. Conclusion As you&#x27;ve seen, it takes careful consideration and background knowledge to use Lagrange multipliers in olympiads correctly. Best of luck! $B[p,r]$ is a closed set. ↩ If $U_n = \left(-\frac&#123;1&#125;&#123;n&#125;, \frac&#123;1&#125;&#123;n&#125;\right)$, then $\bigcup_&#123;n=1&#125;^\infty U_n = \&#123;0\&#125;$ which is not open. ↩ This is not true in the reverse direction, for example consider $B(0,1)$ and $f(x) = d(x,0)$, then there is a global min at 0. ↩ This is so that partial derivatives are defined. ↩ Note that we could have also let $U$ be something like $\&#123;(x,y) \in \mathbb&#123;R&#125;^2 \mid x^2+y^2 \lt 1000\&#125;$, so that $U$ actually has a boundary, and when we check that case, we would conclude impossibility by &quot;if on the boundary, then $x^2 + y^2$ would have to be $1$ and $1000$ at the same time&quot;. But it is nicer to let $U = \mathbb&#123;R&#125;^2$, because then $\bar S = S$ so we get that the global extrema are in $S$ straight away. ↩">Copy article plaintext</CopyButton>
                    </div>
                
            </div>
        

    </article>

    
        <nav className="hidden xl:flex w-[270px] xl:shrink-0 xl:justify-start h-100% min-h-screen border-l-2 border-border-subtle px-6 py-4">
            <div className="fixed text-text-secondary">
                <h1 className="text-lg">Table of contents</h1>
                <ul>
                    
                        <li className="pt-1 font-bold"><Link href="#background-theory" className="text-link [@media(hover:hover)]:hover:underline">Background Theory</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#partial-derivatives" className="text-link [@media(hover:hover)]:hover:underline">Partial Derivatives</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#the-big-theorem" className="text-link [@media(hover:hover)]:hover:underline">The Big Theorem</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#example-problem-1" className="text-link [@media(hover:hover)]:hover:underline">Example Problem 1</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#example-problem-2" className="text-link [@media(hover:hover)]:hover:underline">Example Problem 2</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#example-problem-3" className="text-link [@media(hover:hover)]:hover:underline">Example problem 3</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#homogenous-trick" className="text-link [@media(hover:hover)]:hover:underline">Homogenous Trick</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#practice-problem-jbmo" className="text-link [@media(hover:hover)]:hover:underline">Practice problem (JBMO)</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#when-it-fails" className="text-link [@media(hover:hover)]:hover:underline">When It Fails</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#conclusion" className="text-link [@media(hover:hover)]:hover:underline">Conclusion</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
        </>
    )
}
    