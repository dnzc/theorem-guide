
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
import { Thm, Lemma, Proof, Defn, Example } from '@/components/math'


export default function CubeTilings () {
    return (
        <Layout>
            <Head>
                <title>Cube Tilings | Daniel C</title>
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

        
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] h-[40vh] md:h-[35vh] break-all bg-background pt-3 md:pt-0 md:border-y-2 border-border-subtle">
                <ul className="scrollshadow-vertical dirtree mb-4 md:mb-0 group">
                    
                    

                    
                    
                        
                            <Accordion title="root" href="" type="folder" relDepth={ 0 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="comp-sci" href="/comp-sci" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="binary-search" href="/comp-sci/binary-search" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="maths" href="/maths" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="lagrange-multipliers" href="/maths/lagrange-multipliers" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="proving-FTA" href="/maths/proving-FTA" type="folder" relDepth={ 2 } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="1-integer-axioms" href="/maths/proving-FTA/1-integer-axioms" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="2-division-algo" href="/maths/proving-FTA/2-division-algo" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="3-bezout-egcd" href="/maths/proving-FTA/3-bezout-egcd" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="4-euclid" href="/maths/proving-FTA/4-euclid" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="5-fta" href="/maths/proving-FTA/5-fta" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="research" href="/maths/research" type="folder" relDepth={ 2 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" type="file" relDepth={ 3 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" type="file" relDepth={ 3 } isSelected={ true } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="writeups" href="/writeups" type="folder" relDepth={ 1 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="terminal" href="/writeups/terminal" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
        </div>

    
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] h-[30vh] md:h-[25vh] xl:hidden shrink-0 px-4 py-2 border-t-2 md:border-t-0 md:border-b-2 border-border-subtle">
            <h1 className="text-text-secondary text-lg">Table of contents</h1>
            <ul>
                
                    <li className="pt-1 font-bold"><Link href="#getting-a-foothold" className="tocentry text-link [@media(hover:hover)]:hover:underline">Getting a foothold</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#construction-tools" className="tocentry text-link [@media(hover:hover)]:hover:underline">Construction Tools</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#finding-a-base-case" className="tocentry text-link [@media(hover:hover)]:hover:underline">Finding a base case</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#reducing-the-bound-with-code" className="tocentry text-link [@media(hover:hover)]:hover:underline">Reducing the bound with code</Link></li>
                
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
                        <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths/research">research</Link></p>
                    
                </div>
            

            
                
                <Badge color="blue">coding</Badge>
                
                <Badge color="green">diagrams</Badge>
                
            
        </div>

        
            <p className="text-text-secondary mb-2">Created 17 Jul 2023</p>
        

        <div className="article mb-4">
            <h1 id="filling-a-cube-with-123-cuboids">Filling a cube with 1:2:3 Cuboids</h1>

<blockquote>
  <p>A positive integer <Latex>$n$</Latex> is 'lucky' if it is possible to fill a cube with <Latex>$n$</Latex> cuboids, each of whom has side ratio 1:2:3. Which numbers are lucky?</p>
</blockquote>

<p>I encountered this problem while applying to <DiscreetLink href='https://mathsbeyondlimits.eu/'>MBL-Balkans 2023</DiscreetLink>. It's essentially a 3D version of the problem discussed in <DiscreetLink href='https://youtu.be/VZ25tZ9z6uI'>this numberphile video</DiscreetLink>.</p>

<p>It's more interesting to ask this version of the question:</p>

<blockquote>
  <p>Let <Latex>$C$</Latex> be the minimal positive integer such that all integers <Latex>$ \geq C$</Latex> are lucky. Find an upper bound on <Latex>$C$</Latex>.</p>
</blockquote>

<p>For example, if we managed to show that all integers greater than 100 are lucky, then an upper bound on <Latex>$C$</Latex> would be 101. Of course, it might be very hard to find the actual value of <Latex>$C$</Latex>.</p>

<p>Below is the best upper bound on <Latex>$C$</Latex> that I could get - do try the problem yourself and <MailLink>let me know</MailLink> your result.</p>

<Spoiler>

<span className="block overflow-auto scrollshadow-horizontal latex-display-wrapper"><Latex>$$C \leq 18$$</Latex></span>

</Spoiler>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="getting-a-foothold" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] underline underline-offset-2">Getting a foothold</h2><Link href="#getting-a-foothold" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/research/cube-tilings#getting-a-foothold", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-orange">¶</Link></div>

<p>Before we actually find a lucky number, we can try to find some rules of inference, for example "if <Latex>$n$</Latex> is lucky then so is <Latex>$n+1000$</Latex>". If we can find lots of these, and at least one lucky number, then hopefully we can mark many integers as lucky.</p>

<p>We might first notice that if we have a filling of a cube with <Latex>$n$</Latex>  cuboids of side ratio 1:2:3, then we can split one of them into 8 new cuboids by halving along each edge. The new number of cuboids is <Latex>$n+8-1 = n+7$</Latex> (minus one because of the cuboid we replaced). So we have that:</p>

<blockquote>
  <p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+7$</Latex>.</p>
</blockquote>

<p>This sort of feels like trying to build a cube out of wooden blocks, but the only blocks we have access to are cubes and 1:2:3 cuboids.</p>

<p>With this mental imagery, we can find another construction:</p>

<p><Image src='/images/cubetilings/cubetilings1.svg' width='320' height='240' alt='construction' /></p>

<p>We used 2 cubes and 3 cuboids, thus if <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, we can scale two cubes tiled with <Latex>$n$</Latex> and <Latex>$m$</Latex> cuboids to fit inside this construction. Hence we know that:</p>

<blockquote>
  <p>If <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, then so is <Latex>$n+m+3$</Latex>.</p>
</blockquote>

<p>We can continue to try constructions like this.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="construction-tools" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] underline underline-offset-2">Construction Tools</h2><Link href="#construction-tools" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/research/cube-tilings#construction-tools", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-orange">¶</Link></div>

<Thm type="Claim" num="1">

<p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+7$</Latex>.</p>

<Proof unquoted unbolded>

<p>See above.</p>

</Proof>

</Thm>

<Thm type="Claim" num="2">

<p>If <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, then so is <Latex>$n+m+3$</Latex>.</p>

<Proof unquoted unbolded>

<p>See above.</p>

</Proof>

</Thm>

<Thm type="Claim" num="3">

<p>If <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, then so is <Latex>$n+m+8$</Latex>.</p>

<Proof unquoted unbolded>

<p><Image src='/images/cubetilings/cubetilings2.svg' width='280' height='300' alt='construction'/></p>

</Proof>

</Thm>

<Thm type="Claim" num="4">

<p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+15$</Latex>.</p>

<Proof unquoted unbolded>

<p><Image src='/images/cubetilings/cubetilings3.svg' width='240' height='300' alt='construction'/></p>

<p>We can make a 6x6x3 cuboid with eleven 1:2:3 cuboids, as shown. Then, we can make another 6x6x3 cuboid using the same construction as in the proof of claim 3, where we wrap 4 cuboids around a cube. Thus we can combine these two 6x6x3 cuboids to form a 6x6x6 cube, using fifteen 1:2:3 cuboids and one smaller cube.</p>

</Proof>

</Thm>

<Thm type="Claim" num="5">

<p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+13$</Latex>.</p>

<Proof unquoted unbolded>

<p><Image src='/images/cubetilings/cubetilings4.svg' width='288' height='400' alt='construction'/></p>

</Proof>

</Thm>

<Thm type="Claim" num="6">

<p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+12$</Latex>.</p>

<Proof unquoted unbolded>

<p><Image src='/images/cubetilings/cubetilings5.svg' width='300' height='300' alt='construction'/></p>

</Proof>

</Thm>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="finding-a-base-case" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] underline underline-offset-2">Finding a base case</h2><Link href="#finding-a-base-case" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/research/cube-tilings#finding-a-base-case", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-orange">¶</Link></div>

<p>To actually find a lucky number, we remove cubes from our lego building blocks and only use 1:2:3 cuboids.</p>

<Thm type="Claim" num="7">

<p>8 is lucky.</p>

<Proof unquoted unbolded>

<p><Image src='/images/cubetilings/cubetilings6.svg' width='200' height='200' alt='construction'/></p>

</Proof>

</Thm>

<p>Now, let's see what numbers we can conquer with what we have so far.</p>

<p>By Claim 1, we know that 8, 15, 22, 29, 36 etc. are all lucky.</p>

<table>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td><p className="font-bold text-highlight-strong">8</p></td>
            <td>9</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td><p className="font-bold text-highlight-strong">15</p></td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
        </tr>
        <tr>
            <td>21</td>
            <td><p className="font-bold text-highlight-strong">22</p></td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td><p className="font-bold text-highlight-strong">29</p></td>
            <td>30</td>
        </tr>
        <tr>
            <td>31</td>
            <td>32</td>
            <td>33</td>
            <td>34</td>
            <td>35</td>
            <td><p className="font-bold text-highlight-strong">36</p></td>
            <td>37</td>
            <td>38</td>
            <td>39</td>
            <td>40</td>
        </tr>
        <tr>
            <td>etc.</td>
        </tr>
    </tbody>
</table>

<p>Now we can use Claim 2 to conquer 8+8+3=19, 8+15+3=26, 15+15+3=33, 15+22+3=40, etc.</p>

<table>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td><p className="font-bold text-highlight-strong">8</p></td>
            <td>9</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td><p className="font-bold text-highlight-strong">15</p></td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td><p className="font-bold text-highlight-strong">19</p></td>
            <td>20</td>
        </tr>
        <tr>
            <td>21</td>
            <td><p className="font-bold text-highlight-strong">22</p></td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td><p className="font-bold text-highlight-strong">26</p></td>
            <td>27</td>
            <td>28</td>
            <td><p className="font-bold text-highlight-strong">29</p></td>
            <td>30</td>
        </tr>
        <tr>
            <td>31</td>
            <td>32</td>
            <td><p className="font-bold text-highlight-strong">33</p></td>
            <td>34</td>
            <td>35</td>
            <td><p className="font-bold text-highlight-strong">36</p></td>
            <td>37</td>
            <td>38</td>
            <td>39</td>
            <td><p className="font-bold text-highlight-strong">40</p></td>
        </tr>
        <tr>
            <td>etc.</td>
        </tr>
    </tbody>
</table>

<p>And so on, utilising all of the Claims. In the end, we conquer the following numbers up to 40:</p>

<table>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td><p className="font-bold text-highlight-strong">8</p></td>
            <td>9</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td><p className="font-bold text-highlight-strong">15</p></td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td><p className="font-bold text-highlight-strong">19</p></td>
            <td><p className="font-bold text-highlight-strong">20</p></td>
        </tr>
        <tr>
            <td><p className="font-bold text-highlight-strong">21</p></td>
            <td><p className="font-bold text-highlight-strong">22</p></td>
            <td><p className="font-bold text-highlight-strong">23</p></td>
            <td><p className="font-bold text-highlight-strong">24</p></td>
            <td>25</td>
            <td><p className="font-bold text-highlight-strong">26</p></td>
            <td><p className="font-bold text-highlight-strong">27</p></td>
            <td><p className="font-bold text-highlight-strong">28</p></td>
            <td><p className="font-bold text-highlight-strong">29</p></td>
            <td><p className="font-bold text-highlight-strong">30</p></td>
        </tr>
        <tr>
            <td><p className="font-bold text-highlight-strong">31</p></td>
            <td><p className="font-bold text-highlight-strong">32</p></td>
            <td><p className="font-bold text-highlight-strong">33</p></td>
            <td><p className="font-bold text-highlight-strong">34</p></td>
            <td><p className="font-bold text-highlight-strong">35</p></td>
            <td><p className="font-bold text-highlight-strong">36</p></td>
            <td><p className="font-bold text-highlight-strong">37</p></td>
            <td><p className="font-bold text-highlight-strong">38</p></td>
            <td><p className="font-bold text-highlight-strong">39</p></td>
            <td><p className="font-bold text-highlight-strong">40</p></td>
        </tr>
        <tr>
            <td>etc.</td>
        </tr>
    </tbody>
</table>

<p>OK - great! Now we have seven consecutive numbers (26 to 32) all being lucky. Since <Latex>$n \implies n+7$</Latex> (Claim 1), this means every integer greater than or equal to 26 is lucky. So <Latex>$C$</Latex> is at most 26.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="reducing-the-bound-with-code" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] underline underline-offset-2">Reducing the bound with code</h2><Link href="#reducing-the-bound-with-code" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/research/cube-tilings#reducing-the-bound-with-code", true)} className="hidden relative bottom-0.5 group-hover:block text-highlight-orange">¶</Link></div>

<p>Have you noticed that in the table above, 25 sticks out like a sore thumb? If we could just show that 25 is lucky, we could add the numbers from 19 to 24 to our chain of consecutive numbers... and C would be at most <Latex>$19$</Latex> - and that would be a good place to stop, because conquering 25 feels like such a bargain (we would reduce C by a lot, not just by 1). But 25 = 18 + 7, so can we show that 18 is lucky? Then we'd have <Latex>$C \leq 18$</Latex>. 18 feels too big to manually try and search for, so can we write some code to brute force it?</p>

<p>Yes we can - if we assume that we can build up tilings by repeatedly joining two cuboids at a time into a larger cuboid, then we can store the side ratios that can be constructed like this.</p>

<p>The side ratio is stored as a 3-tuple <Latex>$(x,y,z)$</Latex> with x always equal to 1. To see if we can combine two ratios, we check if the <Latex>$z$</Latex>-values are the same, and if so we add their <Latex>$y$</Latex>-values (assuming we always join them by placing one cuboid on top of the other - thus for each 3-tuple, we must store all of its 6 permutations). For example, <Latex>$(1,2,3) + (1,2,3) = (1,4,3)$</Latex>.</p>

<p>We can denote by <Latex>$S_k$</Latex> the set of all side ratios that can be constructed using exactly <Latex>$k$</Latex> 1:2:3 cuboids. We generate <Latex>$S_k$</Latex> by trying to comine all aspect ratios which have <Latex>$k$</Latex> total cuboids, which we can do dynamically (i.e. generate <Latex>$S_1$</Latex>, then <Latex>$S_2$</Latex>, then <Latex>$S_3$</Latex>, etc.). Then, we look at which <Latex>$S_k$</Latex> contain <Latex>$(1,1,1)$</Latex>.</p>

<div className="codehilite">
<pre><span></span><code><span className="ch">#!/usr/bin/python3</span><br/><br/><span className="kn">from</span>&nbsp;<span className="nn">fractions</span>&nbsp;<span className="kn">import</span>&nbsp;<span className="n">Fraction</span>&nbsp;<span className="k">as</span>&nbsp;<span className="n">F</span><br/><span className="kn">from</span>&nbsp;<span className="nn">collections</span>&nbsp;<span className="kn">import</span>&nbsp;<span className="n">defaultdict</span><br/><br/><span className="n">S</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">&#123;&#125;</span><br/><br/><span className="c1">#&nbsp;normalized&nbsp;fractions:&nbsp;x&nbsp;:=&nbsp;1</span><br/><span className="n">S</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">&#123;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">1</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">1</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">2</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">2</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">2</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">2</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">3</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">3</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">3</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">3</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">&#125;</span><br/><br/><span className="k">for</span>&nbsp;<span className="n">k</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="nb">range</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">22</span><span className="p">):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="n">k</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c1">#&nbsp;compute&nbsp;S_k</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">]</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">defaultdict</span><span className="p">(</span><span className="k">lambda</span><span className="p">:</span>&nbsp;<span className="p">((</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">),</span>&nbsp;<span className="p">(</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">)))</span>&nbsp;<span className="c1">#&nbsp;(n,key),&nbsp;(m,key)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">for</span>&nbsp;<span className="n">n</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="nb">range</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span>&nbsp;<span className="n">k</span><span className="o">//</span><span className="mi">2</span><span className="o">+</span><span className="mi">1</span><span className="p">):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">m</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">k</span><span className="o">-</span><span className="n">n</span>&nbsp;<span className="c1">#&nbsp;m+n&nbsp;=&nbsp;k</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">for</span>&nbsp;<span className="n">a</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">n</span><span className="p">]</span><span className="o">.</span><span className="n">keys</span><span className="p">():</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">for</span>&nbsp;<span className="n">b</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">m</span><span className="p">]</span><span className="o">.</span><span className="n">keys</span><span className="p">():</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">a</span><span className="p">[</span><span className="mi">2</span><span className="p">]</span>&nbsp;<span className="o">==</span>&nbsp;<span className="n">b</span><span className="p">[</span><span className="mi">2</span><span className="p">]:</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">x</span><span className="p">,</span><span className="n">y</span><span className="p">,</span><span className="n">z</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span>&nbsp;<span className="n">a</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span><span className="o">+</span><span className="n">b</span><span className="p">[</span><span className="mi">1</span><span className="p">],</span>&nbsp;<span className="n">a</span><span className="p">[</span><span className="mi">2</span><span className="p">])</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">newratios</span>&nbsp;<span className="o">=</span>&nbsp;<span className="nb">list</span><span className="p">(</span><span className="nb">set</span><span className="p">([</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">y</span><span className="o">/</span><span className="n">x</span><span className="p">,</span><span className="n">z</span><span className="o">/</span><span className="n">x</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">z</span><span className="o">/</span><span className="n">x</span><span className="p">,</span><span className="n">y</span><span className="o">/</span><span className="n">x</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">x</span><span className="o">/</span><span className="n">y</span><span className="p">,</span><span className="n">z</span><span className="o">/</span><span className="n">y</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">z</span><span className="o">/</span><span className="n">y</span><span className="p">,</span><span className="n">x</span><span className="o">/</span><span className="n">y</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">x</span><span className="o">/</span><span className="n">z</span><span className="p">,</span><span className="n">y</span><span className="o">/</span><span className="n">z</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">y</span><span className="o">/</span><span className="n">z</span><span className="p">,</span><span className="n">x</span><span className="o">/</span><span className="n">z</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">]))</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">newratios</span><span className="p">[</span><span className="mi">0</span><span className="p">]]</span>&nbsp;<span className="o">==</span>&nbsp;<span className="p">((</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">),(</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">)):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">newratios</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span>&nbsp;<span className="o">==</span>&nbsp;<span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="sa">f</span><span className="s2">&quot;FOUND&nbsp;CUBE&nbsp;FOR&nbsp;S_</span><span className="si">&#123;</span><span className="n">k</span><span className="si">&#125;</span><span className="s2">&quot;</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">for</span>&nbsp;<span className="n">newratio</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="n">newratios</span><span className="p">:</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">newratio</span><span className="p">]</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">((</span><span className="n">n</span><span className="p">,</span><span className="n">a</span><span className="p">),(</span><span className="n">m</span><span className="p">,</span><span className="n">b</span><span className="p">))</span><br/><br/><span className="k">def</span>&nbsp;<span className="nf">print_construction</span><span className="p">(</span><span className="n">k</span><span className="p">,</span>&nbsp;<span className="n">r</span><span className="p">,</span>&nbsp;<span className="n">depth</span><span className="p">):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">k</span>&nbsp;<span className="o">==</span>&nbsp;<span className="mi">1</span><span className="p">:</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c1">#&nbsp;terminal&nbsp;nodes&nbsp;displayed&nbsp;with&nbsp;a&nbsp;colon</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="s2">&quot;&nbsp;&nbsp;&quot;</span><span className="o">*</span><span className="n">depth</span><span className="p">,</span>&nbsp;<span className="sa">f</span><span className="s2">&quot;:(</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">,&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">,&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">2</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">)&quot;</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">return</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="s2">&quot;&nbsp;&nbsp;&quot;</span><span className="o">*</span><span className="n">depth</span><span className="p">,</span>&nbsp;<span className="sa">f</span><span className="s2">&quot;(</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">,&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">,&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">2</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">)&quot;</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">((</span><span className="n">n</span><span className="p">,</span><span className="n">a</span><span className="p">),(</span><span className="n">m</span><span className="p">,</span><span className="n">b</span><span className="p">))</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">r</span><span className="p">]</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">print_construction</span><span className="p">(</span><span className="n">n</span><span className="p">,</span>&nbsp;<span className="n">a</span><span className="p">,</span>&nbsp;<span className="n">depth</span><span className="o">+</span><span className="mi">1</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">print_construction</span><span className="p">(</span><span className="n">m</span><span className="p">,</span>&nbsp;<span className="n">b</span><span className="p">,</span>&nbsp;<span className="n">depth</span><span className="o">+</span><span className="mi">1</span><span className="p">)</span><br/><br/><span className="n">r</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">(</span><span className="mi">1</span><span className="p">,</span>&nbsp;<span className="mi">1</span><span className="p">,</span>&nbsp;<span className="mi">1</span><span className="p">)</span><br/><br/><span className="k">for</span>&nbsp;<span className="n">k</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="n">S</span><span className="o">.</span><span className="n">keys</span><span className="p">():</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">k</span><span className="o">==</span><span className="mi">1</span><span className="p">:</span>&nbsp;<span className="k">continue</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">r</span><span className="p">]</span>&nbsp;<span className="o">!=</span>&nbsp;<span className="p">((</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">),(</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">)):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="sa">f</span><span className="s2">&quot;found&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="si">&#125;</span><span className="s2">&nbsp;in&nbsp;S_</span><span className="si">&#123;</span><span className="n">k</span><span className="si">&#125;</span><span className="s2">:&quot;</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">print_construction</span><span className="p">(</span><span className="n">k</span><span className="p">,</span>&nbsp;<span className="n">r</span><span className="p">,</span>&nbsp;<span className="mi">0</span><span className="p">)</span><br/></code></pre>
</div>

<p>If the program finds <Latex>$(1,1,1)$</Latex> in <Latex>$S_k$</Latex> (i.e. a cube, although you can search for any ratio you want by changing r), then it will print out the way it found to construct it, in a tree-like manner using the recursive <code>print_construction</code> function.</p>

<p><strong>The program found the following construction</strong>, proving that 18 is lucky:</p>

<p><Image src='/images/cubetilings/cubetilings7.svg' width='480' height='640' alt='construction'/></p>

<p>Thus, 18+7=25 is also lucky, and so <strong><Latex>$C \leq 18$</Latex></strong>.</p>

        </div>

        
            <div className="border-t-2 border-border-strong pt-4 flex items-top justify-between">
                
                    <div className="flex justify-start">
                        <Link href="/maths/research">
                            <div className="flex items-center justify-center space-x-1 text-text-secondary underline">
                                <RiArrowGoBackFill/>
                                <p>up a level</p>
                            </div>
                        </Link>
                    </div>
                

                
                    <div className="">
                        <CopyButton text="A positive integer $n$ is &#x27;lucky&#x27; if it is possible to fill a cube with $n$ cuboids, each of whom has side ratio 1:2:3. Which numbers are lucky? I encountered this problem while applying to MBL-Balkans 2023. It&#x27;s essentially a 3D version of the problem discussed in this numberphile video. It&#x27;s more interesting to ask this version of the question: Let $C$ be the minimal positive integer such that all integers $ \geq C$ are lucky. Find an upper bound on $C$. For example, if we managed to show that all integers greater than 100 are lucky, then an upper bound on $C$ would be 101. Of course, it might be very hard to find the actual value of $C$. Below is the best upper bound on $C$ that I could get - do try the problem yourself and let me know your result. $$C \leq 18$$ Getting a foothold Before we actually find a lucky number, we can try to find some rules of inference, for example &quot;if $n$ is lucky then so is $n+1000$&quot;. If we can find lots of these, and at least one lucky number, then hopefully we can mark many integers as lucky. We might first notice that if we have a filling of a cube with $n$ cuboids of side ratio 1:2:3, then we can split one of them into 8 new cuboids by halving along each edge. The new number of cuboids is $n+8-1 = n+7$ (minus one because of the cuboid we replaced). So we have that: If $n$ is lucky, then so is $n+7$. This sort of feels like trying to build a cube out of wooden blocks, but the only blocks we have access to are cubes and 1:2:3 cuboids. With this mental imagery, we can find another construction: We used 2 cubes and 3 cuboids, thus if $n$ and $m$ are lucky, we can scale two cubes tiled with $n$ and $m$ cuboids to fit inside this construction. Hence we know that: If $n$ and $m$ are lucky, then so is $n+m+3$. We can continue to try constructions like this. Construction Tools If $n$ is lucky, then so is $n+7$. See above. If $n$ and $m$ are lucky, then so is $n+m+3$. See above. If $n$ and $m$ are lucky, then so is $n+m+8$. If $n$ is lucky, then so is $n+15$. We can make a 6x6x3 cuboid with eleven 1:2:3 cuboids, as shown. Then, we can make another 6x6x3 cuboid using the same construction as in the proof of claim 3, where we wrap 4 cuboids around a cube. Thus we can combine these two 6x6x3 cuboids to form a 6x6x6 cube, using fifteen 1:2:3 cuboids and one smaller cube. If $n$ is lucky, then so is $n+13$. If $n$ is lucky, then so is $n+12$. Finding a base case To actually find a lucky number, we remove cubes from our lego building blocks and only use 1:2:3 cuboids. 8 is lucky. Now, let&#x27;s see what numbers we can conquer with what we have so far. By Claim 1, we know that 8, 15, 22, 29, 36 etc. are all lucky. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 etc. Now we can use Claim 2 to conquer 8+8+3=19, 8+15+3=26, 15+15+3=33, 15+22+3=40, etc. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 etc. And so on, utilising all of the Claims. In the end, we conquer the following numbers up to 40: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 etc. OK - great! Now we have seven consecutive numbers (26 to 32) all being lucky. Since $n \implies n+7$ (Claim 1), this means every integer greater than or equal to 26 is lucky. So $C$ is at most 26. Reducing the bound with code Have you noticed that in the table above, 25 sticks out like a sore thumb? If we could just show that 25 is lucky, we could add the numbers from 19 to 24 to our chain of consecutive numbers... and C would be at most $19$ - and that would be a good place to stop, because conquering 25 feels like such a bargain (we would reduce C by a lot, not just by 1). But 25 = 18 + 7, so can we show that 18 is lucky? Then we&#x27;d have $C \leq 18$. 18 feels too big to manually try and search for, so can we write some code to brute force it? Yes we can - if we assume that we can build up tilings by repeatedly joining two cuboids at a time into a larger cuboid, then we can store the side ratios that can be constructed like this. The side ratio is stored as a 3-tuple $(x,y,z)$ with x always equal to 1. To see if we can combine two ratios, we check if the $z$-values are the same, and if so we add their $y$-values (assuming we always join them by placing one cuboid on top of the other - thus for each 3-tuple, we must store all of its 6 permutations). For example, $(1,2,3) + (1,2,3) = (1,4,3)$. We can denote by $S_k$ the set of all side ratios that can be constructed using exactly $k$ 1:2:3 cuboids. We generate $S_k$ by trying to comine all aspect ratios which have $k$ total cuboids, which we can do dynamically (i.e. generate $S_1$, then $S_2$, then $S_3$, etc.). Then, we look at which $S_k$ contain $(1,1,1)$. #!/usr/bin/python3 from fractions import Fraction as F from collections import defaultdict S = &#123;&#125; # normalized fractions: x := 1 S[1] = &#123; (F(1,1),F(2,1),F(3,1)): (), (F(1,1),F(3,1),F(2,1)): (), (F(1,1),F(1,2),F(3,2)): (), (F(1,1),F(3,2),F(1,2)): (), (F(1,1),F(1,3),F(2,3)): (), (F(1,1),F(2,3),F(1,3)): (), &#125; for k in range(2,22): print(k) # compute S_k S[k] = defaultdict(lambda: ((0,0), (0,0))) # (n,key), (m,key) for n in range(1, k//2+1): m = k-n # m+n = k for a in S[n].keys(): for b in S[m].keys(): if a[2] == b[2]: x,y,z = (F(1,1), a[1]+b[1], a[2]) newratios = list(set([ (F(1,1),y/x,z/x), (F(1,1),z/x,y/x), (F(1,1),x/y,z/y), (F(1,1),z/y,x/y), (F(1,1),x/z,y/z), (F(1,1),y/z,x/z), ])) if S[k][newratios[0]] == ((0,0),(0,0)): if newratios[0] == (1,1,1): print(f&quot;FOUND CUBE FOR S_&#123;k&#125;&quot;) for newratio in newratios: S[k][newratio] = ((n,a),(m,b)) def print_construction(k, r, depth): if k == 1: # terminal nodes displayed with a colon print(&quot; &quot;*depth, f&quot;:(&#123;r[0]&#125;, &#123;r[1]&#125;, &#123;r[2]&#125;)&quot;) return print(&quot; &quot;*depth, f&quot;(&#123;r[0]&#125;, &#123;r[1]&#125;, &#123;r[2]&#125;)&quot;) ((n,a),(m,b)) = S[k][r] print_construction(n, a, depth+1) print_construction(m, b, depth+1) r = (1, 1, 1) for k in S.keys(): if k==1: continue if S[k][r] != ((0,0),(0,0)): print(f&quot;found &#123;r&#125; in S_&#123;k&#125;:&quot;) print_construction(k, r, 0) If the program finds $(1,1,1)$ in $S_k$ (i.e. a cube, although you can search for any ratio you want by changing r), then it will print out the way it found to construct it, in a tree-like manner using the recursive print_construction function. The program found the following construction, proving that 18 is lucky: Thus, 18+7=25 is also lucky, and so $C \leq 18$.">Copy article plaintext</CopyButton>
                    </div>
                
            </div>
        

    </article>

    
        <nav className="hidden xl:flex w-[270px] xl:shrink-0 xl:justify-start h-100% min-h-screen border-l-2 border-border-subtle px-6 py-4">
            <div className="fixed text-text-secondary">
                <h1 className="text-lg">Table of contents</h1>
                <ul>
                    
                        <li className="pt-1 font-bold"><Link href="#getting-a-foothold" className="text-link [@media(hover:hover)]:hover:underline">Getting a foothold</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#construction-tools" className="text-link [@media(hover:hover)]:hover:underline">Construction Tools</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#finding-a-base-case" className="text-link [@media(hover:hover)]:hover:underline">Finding a base case</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#reducing-the-bound-with-code" className="text-link [@media(hover:hover)]:hover:underline">Reducing the bound with code</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    