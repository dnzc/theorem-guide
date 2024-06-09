
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


export default function CubeTilings () {
    return (
        <Layout>
            <Head>
                <title>Cube Tilings | Daniel C</title>
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
                                
                                    
                        
                            <Accordion title="number-theory" href="/maths/number-theory" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="FTA-proof" href="/maths/number-theory/FTA-proof" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="1-integer-axioms" href="/maths/number-theory/FTA-proof/1-integer-axioms" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="2-division-algo" href="/maths/number-theory/FTA-proof/2-division-algo" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="3-bezout-egcd" href="/maths/number-theory/FTA-proof/3-bezout-egcd" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="4-euclid" href="/maths/number-theory/FTA-proof/4-euclid" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="5-fta" href="/maths/number-theory/FTA-proof/5-fta" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="olympiad" href="/maths/olympiad" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="techniques" href="/maths/olympiad/techniques" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/techniques/lagrange-multipliers" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="research" href="/maths/research" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" isFolder={false} isSelected={ true } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="writeups" href="/writeups" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="terminal" href="/writeups/terminal" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                </ul>
            </li>
        </ul>
    </nav>

    <article className="w-full min-w-0 px-6 pt-3">

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths">maths</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths/research">research</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-3">Last modified on 01 Aug 2023</p>
        

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

<p>Below is the best upper bound on <Latex>$C$</Latex> that I could get - do try the problem yourself and compare solutions. I'd <MailLink>love to know</MailLink> if you improve the bound.</p>

<Spoiler>

<p><Latex>$$C \leq 18$$</Latex></p>

</Spoiler>

<h2 id="getting-a-foothold" className="group flex">Getting a foothold&nbsp;<Link href="#getting-a-foothold" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/research/cube-tilings#getting-a-foothold", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Before we actually find a lucky number, we can try to find some rules of inference, for example "if <Latex>$n$</Latex> is lucky then so is <Latex>$n+1000$</Latex>". If we can find lots of these, and at least one lucky number, then hopefully we can mark many integers as lucky.</p>

<p>We might first notice that if we have a filling of a cube with <Latex>$n$</Latex>  cuboids of side ratio 1:2:3, then we can split one of them into 8 new cuboids by halving along each edge. The new number of cuboids is <Latex>$n+8-1 = n+7$</Latex> (minus one because of the cuboid we replaced). So we have that:</p>

<blockquote>
  <p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+7$</Latex>.</p>
</blockquote>

<p>This sort of feels like trying to build a cube out of wooden blocks, but the only blocks we have access to are cubes and 1:2:3 cuboids.</p>

<p>With this mental imagery, we can find another construction:</p>

<p><Image src='/images/cubetilings1.svg' width='400' height='300' alt='construction' /></p>

<p>We used 2 cubes and 3 cuboids, thus if <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, we can scale two cubes tiled with <Latex>$n$</Latex> and <Latex>$m$</Latex> cuboids to fit inside this construction. Hence we know that:</p>

<blockquote>
  <p>If <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, then so is <Latex>$n+m+3$</Latex>.</p>
</blockquote>

<p>We can continue to try constructions like this.</p>

<h2 id="constructive-lemmas" className="group flex">Constructive Lemmas&nbsp;<Link href="#constructive-lemmas" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/research/cube-tilings#constructive-lemmas", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<blockquote>
  <p><em>Claim 1.</em> If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+7$</Latex>.</p>
  
  <p><em>Proof.</em> Proved above.</p>
</blockquote>

<blockquote>
  <p><em>Claim 2.</em> If <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, then so is <Latex>$n+m+3$</Latex>.</p>
  
  <p><em>Proof.</em> Proved above.</p>
</blockquote>

<blockquote>
  <p><em>Claim 3.</em> If <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, then so is <Latex>$n+m+8$</Latex>.</p>
  
  <p><em>Proof.</em></p>
  
  <p><Image src='/images/cubetilings2.svg' width='260' height='300' alt='construction'/></p>
</blockquote>

<blockquote>
  <p><em>Claim 4.</em> If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+15$</Latex>.</p>
  
  <p><em>Proof.</em></p>
  
  <p><Image src='/images/cubetilings3.svg' width='320' height='400' alt='construction'/></p>
  
  <p>We can make a 6x6x3 cuboid with eleven 1:2:3 cuboids, as shown. Then, we can make another 6x6x3 cuboid using the same construction as in the proof of claim 3, where we wrap 4 cuboids around a cube. Thus we can combine these two 6x6x3 cuboids to form a 6x6x6 cube, using fifteen 1:2:3 cuboids and one smaller cube.</p>
</blockquote>

<blockquote>
  <p><em>Claim 5.</em> If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+13$</Latex>.</p>
  
  <p><em>Proof.</em></p>
  
  <p><Image src='/images/cubetilings4.svg' width='360' height='500' alt='construction'/></p>
</blockquote>

<blockquote>
  <p><em>Claim 6.</em> If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+12$</Latex>.</p>
  
  <p><em>Proof.</em></p>
  
  <p><Image src='/images/cubetilings5.svg' width='400' height='400' alt='construction'/></p>
</blockquote>

<h2 id="finding-a-base-case" className="group flex">Finding a base case&nbsp;<Link href="#finding-a-base-case" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/research/cube-tilings#finding-a-base-case", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>To actually find a lucky number, we remove cubes from our lego building blocks and only use 1:2:3 cuboids.</p>

<blockquote>
  <p><em>Claim 7.</em> 8 is lucky.</p>
  
  <p><em>Proof.</em></p>
  
  <p><Image src='/images/cubetilings6.svg' width='200' height='200' alt='construction'/></p>
</blockquote>

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
            <td><strong>8</strong></td>
            <td>9</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td><strong>15</strong></td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
        </tr>
        <tr>
            <td>21</td>
            <td><strong>22</strong></td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td><strong>29</strong></td>
            <td>30</td>
        </tr>
        <tr>
            <td>31</td>
            <td>32</td>
            <td>33</td>
            <td>34</td>
            <td>35</td>
            <td><strong>36</strong></td>
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
            <td><strong>8</strong></td>
            <td>9</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td><strong>15</strong></td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td><strong>19</strong></td>
            <td>20</td>
        </tr>
        <tr>
            <td>21</td>
            <td><strong>22</strong></td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td><strong>26</strong></td>
            <td>27</td>
            <td>28</td>
            <td><strong>29</strong></td>
            <td>30</td>
        </tr>
        <tr>
            <td>31</td>
            <td>32</td>
            <td><strong>33</strong></td>
            <td>34</td>
            <td>35</td>
            <td><strong>36</strong></td>
            <td>37</td>
            <td>38</td>
            <td>39</td>
            <td><strong>40</strong></td>
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
            <td><strong>8</strong></td>
            <td>9</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td><strong>15</strong></td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td><strong>19</strong></td>
            <td><strong>20</strong></td>
        </tr>
        <tr>
            <td><strong>21</strong></td>
            <td><strong>22</strong></td>
            <td><strong>23</strong></td>
            <td><strong>24</strong></td>
            <td>25</td>
            <td><strong>26</strong></td>
            <td><strong>27</strong></td>
            <td><strong>28</strong></td>
            <td><strong>29</strong></td>
            <td><strong>30</strong></td>
        </tr>
        <tr>
            <td><strong>31</strong></td>
            <td><strong>32</strong></td>
            <td><strong>33</strong></td>
            <td><strong>34</strong></td>
            <td><strong>35</strong></td>
            <td><strong>36</strong></td>
            <td><strong>37</strong></td>
            <td><strong>38</strong></td>
            <td><strong>39</strong></td>
            <td><strong>40</strong></td>
        </tr>
        <tr>
            <td>etc.</td>
        </tr>
    </tbody>
</table>

<p>OK - great! Now we have seven consecutive numbers (26 to 32) all being lucky. Since <Latex>$n \implies n+7$</Latex> (Claim 1), this means every integer greater than or equal to 26 is lucky. So <Latex>$C$</Latex> is at most 26.</p>

<h2 id="reducing-the-bound-with-code" className="group flex">Reducing the bound with code&nbsp;<Link href="#reducing-the-bound-with-code" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/research/cube-tilings#reducing-the-bound-with-code", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Have you noticed that in the table above, 25 sticks out like a sore thumb? If we could just show that 25 is lucky, we could add the numbers from 19 to 24 to our chain of consecutive numbers... and C would be at most <Latex>$19$</Latex> - and that would be a good place to stop, because conquering 25 feels like such a bargain (we would reduce C by a lot, not just by 1). But 25 = 18 + 7, so can we show that 18 is lucky? Then we'd have <Latex>$C \leq 18$</Latex>. 18 feels too big to manually try and search for, so can we write some code to brute force it?</p>

<p>Yes we can - if we assume that we can build up tilings by repeatedly joining two cuboids at a time into a larger cuboid, then we can store the side ratios that can be constructed like this.</p>

<p>The side ratio is stored as a 3-tuple <Latex>$(x,y,z)$</Latex> with x always equal to 1. To see if we can combine two ratios, we check if the <Latex>$z$</Latex>-values are the same, and if so we add their <Latex>$y$</Latex>-values (assuming we always join them by placing one cuboid on top of the other - thus for each 3-tuple, we must store all of its 6 permutations). For example, <Latex>$(1,2,3) + (1,2,3) = (1,4,3)$</Latex>.</p>

<p>We can denote by <Latex>$S_k$</Latex> the set of all side ratios that can be constructed using exactly <Latex>$k$</Latex> 1:2:3 cuboids. We generate <Latex>$S_k$</Latex> by trying to comine all aspect ratios which have <Latex>$k$</Latex> total cuboids, which we can do dynamically (i.e. generate <Latex>$S_1$</Latex>, then <Latex>$S_2$</Latex>, then <Latex>$S_3$</Latex>, etc.). Then, we look at which <Latex>$S_k$</Latex> contain <Latex>$(1,1,1)$</Latex>.</p>

<div className="codehilite">
<pre><span></span><code><span className="ch">#!/usr/bin/python3</span><br/><br/><span className="kn">from</span> <span className="nn">fractions</span> <span className="kn">import</span> <span className="n">Fraction</span> <span className="k">as</span> <span className="n">F</span><br/><span className="kn">from</span> <span className="nn">collections</span> <span className="kn">import</span> <span className="n">defaultdict</span><br/><br/><span className="n">S</span> <span className="o">=</span> <span className="p">&#123;&#125;</span><br/><br/><span className="c1"># normalized fractions: x := 1</span><br/><span className="n">S</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span> <span className="o">=</span> <span className="p">&#123;</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">1</span><span className="p">)):</span> <span className="p">(),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">1</span><span className="p">)):</span> <span className="p">(),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">2</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">2</span><span className="p">)):</span> <span className="p">(),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">2</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">2</span><span className="p">)):</span> <span className="p">(),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">3</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">3</span><span className="p">)):</span> <span className="p">(),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">3</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">3</span><span className="p">)):</span> <span className="p">(),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>   <span className="p">&#125;</span><br/><br/><span className="k">for</span> <span className="n">k</span> <span className="ow">in</span> <span className="nb">range</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">22</span><span className="p">):</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="nb">print</span><span className="p">(</span><span className="n">k</span><span className="p">)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="c1"># compute S_k</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">]</span> <span className="o">=</span> <span className="n">defaultdict</span><span className="p">(</span><span className="k">lambda</span><span className="p">:</span> <span className="p">((</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">),</span> <span className="p">(</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">)))</span> <span className="c1"># (n,key), (m,key)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">for</span> <span className="n">n</span> <span className="ow">in</span> <span className="nb">range</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span> <span className="n">k</span><span className="o">//</span><span className="mi">2</span><span className="o">+</span><span className="mi">1</span><span className="p">):</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">m</span> <span className="o">=</span> <span className="n">k</span><span className="o">-</span><span className="n">n</span> <span className="c1"># m+n = k</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">for</span> <span className="n">a</span> <span className="ow">in</span> <span className="n">S</span><span className="p">[</span><span className="n">n</span><span className="p">]</span><span className="o">.</span><span className="n">keys</span><span className="p">():</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">for</span> <span className="n">b</span> <span className="ow">in</span> <span className="n">S</span><span className="p">[</span><span className="n">m</span><span className="p">]</span><span className="o">.</span><span className="n">keys</span><span className="p">():</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">if</span> <span className="n">a</span><span className="p">[</span><span className="mi">2</span><span className="p">]</span> <span className="o">==</span> <span className="n">b</span><span className="p">[</span><span className="mi">2</span><span className="p">]:</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">x</span><span className="p">,</span><span className="n">y</span><span className="p">,</span><span className="n">z</span> <span className="o">=</span> <span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span> <span className="n">a</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span><span className="o">+</span><span className="n">b</span><span className="p">[</span><span className="mi">1</span><span className="p">],</span> <span className="n">a</span><span className="p">[</span><span className="mi">2</span><span className="p">])</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">newratios</span> <span className="o">=</span> <span className="nb">list</span><span className="p">(</span><span className="nb">set</span><span className="p">([</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">y</span><span className="o">/</span><span className="n">x</span><span className="p">,</span><span className="n">z</span><span className="o">/</span><span className="n">x</span><span className="p">),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">z</span><span className="o">/</span><span className="n">x</span><span className="p">,</span><span className="n">y</span><span className="o">/</span><span className="n">x</span><span className="p">),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">x</span><span className="o">/</span><span className="n">y</span><span className="p">,</span><span className="n">z</span><span className="o">/</span><span className="n">y</span><span className="p">),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">z</span><span className="o">/</span><span className="n">y</span><span className="p">,</span><span className="n">x</span><span className="o">/</span><span className="n">y</span><span className="p">),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">x</span><span className="o">/</span><span className="n">z</span><span className="p">,</span><span className="n">y</span><span className="o">/</span><span className="n">z</span><span className="p">),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">y</span><span className="o">/</span><span className="n">z</span><span className="p">,</span><span className="n">x</span><span className="o">/</span><span className="n">z</span><span className="p">),</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">]))</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">if</span> <span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">newratios</span><span className="p">[</span><span className="mi">0</span><span className="p">]]</span> <span className="o">==</span> <span className="p">((</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">),(</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">)):</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">if</span> <span className="n">newratios</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span> <span className="o">==</span> <span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">):</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="nb">print</span><span className="p">(</span><span className="sa">f</span><span className="s2">&quot;FOUND CUBE FOR S_</span><span className="si">&#123;</span><span className="n">k</span><span className="si">&#125;</span><span className="s2">&quot;</span><span className="p">)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">for</span> <span className="n">newratio</span> <span className="ow">in</span> <span className="n">newratios</span><span className="p">:</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">newratio</span><span className="p">]</span> <span className="o">=</span> <span className="p">((</span><span className="n">n</span><span className="p">,</span><span className="n">a</span><span className="p">),(</span><span className="n">m</span><span className="p">,</span><span className="n">b</span><span className="p">))</span><br/><br/><span className="k">def</span> <span className="nf">print_construction</span><span className="p">(</span><span className="n">k</span><span className="p">,</span> <span className="n">r</span><span className="p">,</span> <span className="n">depth</span><span className="p">):</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">if</span> <span className="n">k</span> <span className="o">==</span> <span className="mi">1</span><span className="p">:</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="c1"># terminal nodes displayed with a colon</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="nb">print</span><span className="p">(</span><span className="s2">&quot;  &quot;</span><span className="o">*</span><span className="n">depth</span><span className="p">,</span> <span className="sa">f</span><span className="s2">&quot;:(</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">, </span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">, </span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">2</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">)&quot;</span><span className="p">)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">return</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="nb">print</span><span className="p">(</span><span className="s2">&quot;  &quot;</span><span className="o">*</span><span className="n">depth</span><span className="p">,</span> <span className="sa">f</span><span className="s2">&quot;(</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">, </span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">, </span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">2</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">)&quot;</span><span className="p">)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="p">((</span><span className="n">n</span><span className="p">,</span><span className="n">a</span><span className="p">),(</span><span className="n">m</span><span className="p">,</span><span className="n">b</span><span className="p">))</span> <span className="o">=</span> <span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">r</span><span className="p">]</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">print_construction</span><span className="p">(</span><span className="n">n</span><span className="p">,</span> <span className="n">a</span><span className="p">,</span> <span className="n">depth</span><span className="o">+</span><span className="mi">1</span><span className="p">)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">print_construction</span><span className="p">(</span><span className="n">m</span><span className="p">,</span> <span className="n">b</span><span className="p">,</span> <span className="n">depth</span><span className="o">+</span><span className="mi">1</span><span className="p">)</span><br/><br/><span className="n">r</span> <span className="o">=</span> <span className="p">(</span><span className="mi">1</span><span className="p">,</span> <span className="mi">1</span><span className="p">,</span> <span className="mi">1</span><span className="p">)</span><br/><br/><span className="k">for</span> <span className="n">k</span> <span className="ow">in</span> <span className="n">S</span><span className="o">.</span><span className="n">keys</span><span className="p">():</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">if</span> <span className="n">k</span><span className="o">==</span><span className="mi">1</span><span className="p">:</span> <span className="k">continue</span> <br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">if</span> <span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">r</span><span className="p">]</span> <span className="o">!=</span> <span className="p">((</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">),(</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">)):</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="nb">print</span><span className="p">(</span><span className="sa">f</span><span className="s2">&quot;found </span><span className="si">&#123;</span><span className="n">r</span><span className="si">&#125;</span><span className="s2"> in S_</span><span className="si">&#123;</span><span className="n">k</span><span className="si">&#125;</span><span className="s2">:&quot;</span><span className="p">)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">print_construction</span><span className="p">(</span><span className="n">k</span><span className="p">,</span> <span className="n">r</span><span className="p">,</span> <span className="mi">0</span><span className="p">)</span><br/></code></pre>
</div>

<p>If the program finds <Latex>$(1,1,1)$</Latex> in <Latex>$S_k$</Latex> (i.e. a cube, although you can search for any ratio you want by changing r), then it will print out the way it found to construct it, in a tree-like manner using the recursive <code>print_construction</code> function.</p>

<p><strong>The program found the following construction</strong>, proving that 18 is lucky:</p>

<p><Image src='/images/cubetilings7.svg' width='600' height='800' alt='construction'/></p>

<p>Thus, 18+7=25 is also lucky, and so <strong><Latex>$C \leq 18$</Latex></strong>.</p>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths/research">
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
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#getting-a-foothold" className="text-link">Getting a foothold</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#constructive-lemmas" className="text-link">Constructive Lemmas</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#finding-a-base-case" className="text-link">Finding a base case</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#reducing-the-bound-with-code" className="text-link">Reducing the bound with code</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    