
import Layout from '../../../components/layout'
import Head from 'next/head'
import Accordion from '../../../components/accordion'
import Link from 'next/link'
import ProminentLink from '../../../components/prominentLink'
import DiscreetLink from '../../../components/discreetLink'
import MailLink from '../../../components/mailLink'

import { FaChevronRight } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '../../../components/spoiler'
import IncompleteMessage from '../../../components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '../../../components/copyButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function BinarySearch () {
    return (
        <Layout>
            <Head>
                <title>Binary Search | Daniel C</title>
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
                                
                                    
                        
                            <Accordion title="algorithms" href="/comp-sci/algorithms" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="binary-search" href="/comp-sci/algorithms/binary-search" isFolder={false} isSelected={ true } />
                        
                    
                                
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
                    <p className="text-lg font-bold text-secondary"><Link href="/comp-sci">comp-sci</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/comp-sci/algorithms">algorithms</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-3">Last modified on 28 Jul 2023</p>
        

        <div className="article mb-4">
            <h1 id="binary-search-an-intuitive-algorithm">Binary Search: an intuitive algorithm</h1>

<p>Everyone has performed a binary search without realizing: if you look for the word "gerontology" in the dictionary, you wouldn't go flip through every page until you found it. Instead you'd check the middle, and if you overshot then you'd check the middle of the first chunk, then if you if undershot you'd check the middle of the remaining chunk, and so on, until you find the word.</p>

<p>In programmer terms, we can use binary search to search for an item in a sorted array.
We keep track of a left pointer and a right poiner. Then we check the middle index by <code>(left + right) / 2</code> (rounding down).</p>

<p>For example, if we were wanted to find the index of 8 in the array [1, 2, 5, 7, 8, 9, 10], we'd start by setting the left and right pointer to index 0 and index 6 respectively.</p>

<div className="codehilite">
<pre><span></span><code><span className="p">[</span><span className="mi">1</span><span className="p">,</span> <span className="mi">2</span><span className="p">,</span> <span className="mi">5</span><span className="p">,</span> <span className="mi">7</span><span className="p">,</span> <span className="mi">8</span><span className="p">,</span> <span className="mi">9</span><span className="p">,</span> <span className="mi">10</span><span className="p">]</span><br/> <span className="o">^</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="o">^</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="o">^</span><br/><span className="n">left</span><span className="o">=</span><span className="mi">0</span>   <span className="n">mid</span><span className="o">=</span><span className="mi">3</span>   <span className="n">right</span><span className="o">=</span><span className="mi">6</span><br/></code></pre>
</div>

<p>Then, since the item we're looking for (8) is larger than the item at the middle, we know that it has to lie to the right of the middle pointer, thus we can update the left pointer to be <code>mid+1</code>.</p>

<div className="codehilite">
<pre><span></span><code><span className="p">[</span><span className="mi">1</span><span className="p">,</span> <span className="mi">2</span><span className="p">,</span> <span className="mi">5</span><span className="p">,</span> <span className="mi">7</span><span className="p">,</span> <span className="mi">8</span><span className="p">,</span> <span className="mi">9</span><span className="p">,</span> <span className="mi">10</span><span className="p">]</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> <span className="o">^</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> <span className="o">^</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> <span className="n">l</span><span className="o">=</span><span className="mi">4</span>   <span className="n">r</span><span className="o">=</span><span className="mi">6</span><br/></code></pre>
</div>

<p>Now the middle pointer is at index 5, and points to 9. This is more than 8, so we can update the right pointer to be <code>mid-1</code>:</p>

<div className="codehilite">
<pre><span></span><code><span className="p">[</span><span className="mi">1</span><span className="p">,</span> <span className="mi">2</span><span className="p">,</span> <span className="mi">5</span><span className="p">,</span> <span className="mi">7</span><span className="p">,</span> <span className="mi">8</span><span className="p">,</span> <span className="mi">9</span><span className="p">,</span> <span className="mi">10</span><span className="p">]</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> <span className="o">^</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> <span className="n">l</span><span className="o">=</span><span className="n">r</span><span className="o">=</span><span className="mi">4</span><br/></code></pre>
</div>

<p>Now the left and right pointer point to the same thing, so we've found the index of 8: it's 4. Well actually, we need one more check that the item that's being pointed to is actually 8 - for example, if it was 7.5 instead, we'd still end up with <code>left = right = 4</code>.</p>

<p>The time complexity of binary search is <Latex>$O(\log n)$</Latex> , because each comparison halves the search space, so it takes a logarithmic number of operations (and <Latex>$\log_2(n) = \frac&#123;\log n&#125;&#123;\log 2&#125;$</Latex>).</p>

<h2 id="pseudocode" className="group flex">Pseudocode&nbsp;<Link href="#pseudocode" onClick={() => copyToClipboard("https://wiki.danielc.rocks/comp-sci/algorithms/binary-search#pseudocode", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>I like to define the left pointer as the one you know it's definitely <em>greater than or equal to</em>, and the right pointer as the one you know it's definitely <em>less than</em>. So, <Latex>$l \leq x \lt r$</Latex>.</p>

<div className="codehilite">
<pre><span></span><code><span className="k">function</span> <span className="n">search</span><span className="o">(</span><span className="n">arr</span><span className="o">,</span> <span className="n">length</span><span className="o">,</span> <span className="n">target</span><span className="o">)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">l</span> <span className="o">:=</span> <span className="mi">0</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">r</span> <span className="o">:=</span> <span className="n">n</span><span className="o">-</span><span className="mi">1</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">while</span> <span className="n">l</span><span className="o">+</span><span className="mi">1</span> <span className="o">&lt;</span> <span className="n">r</span> <span className="k">do</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">m</span> <span className="o">:=</span> <span className="n">floor</span><span className="o">((</span><span className="n">l</span><span className="o">+</span><span className="n">r</span><span className="o">)</span> <span className="o">/</span> <span className="mi">2</span><span className="o">)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">if</span> <span className="n">arr</span><span className="o">[</span><span className="n">m</span><span className="o">]</span> <span className="o">&gt;</span> <span className="n">target</span> <span className="k">then</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">r</span> <span className="o">:=</span> <span className="n">m</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">else</span> <span className="k">if</span> <span className="n">arr</span><span className="o">[</span><span className="n">m</span><span className="o">]</span> <span className="o">&lt;</span> <span className="n">target</span> <span className="k">then</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">l</span> <span className="o">:=</span> <span className="n">m</span><span className="o">+</span><span className="mi">1</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">else</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">return</span> <span className="n">m</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">end</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">end</span><br/><span className="k">end</span><br/></code></pre>
</div>

<h2 id="example-problem-minimum-excludant" className="group flex">Example problem: Minimum excludant&nbsp;<Link href="#example-problem-minimum-excludant" onClick={() => copyToClipboard("https://wiki.danielc.rocks/comp-sci/algorithms/binary-search#example-problem-minimum-excludant", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<blockquote>
  <p>Given a sorted array of distinct positive integers, find the smallest positive integer that is not in the array.</p>
  
  <p><em>Examples.</em></p>
  
  <p>Input: [1, 2, 3, 5, 9, 12, 13] <br />
  Output: 4</p>
  
  <p>Input: [3, 5, 7, 10] <br />
  Output: 1</p>
  
  <p>Input: [1, 2, 3, 4] <br />
  Output: 5</p>
</blockquote>

<p><strong>Solution:</strong></p>

<Spoiler>

<p>Considering the smallest missing element from the array, we must have that the items before it are the positive integers in order, with no gaps. So the smallest missing element is the smallest element whose value is not equal to its index (indexing from 1). We can use binary search to find this.</p>

<div className="codehilite">
<pre><span></span><code><span className="ch">#!/usr/bin/python3</span><br/><br/><span className="k">def</span> <span className="nf">solve</span><span className="p">(</span><span className="n">array</span><span className="p">):</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">l</span> <span className="o">=</span> <span className="mi">0</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">r</span> <span className="o">=</span> <span className="nb">len</span><span className="p">(</span><span className="n">array</span><span className="p">)</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">while</span> <span className="n">l</span> <span className="o">!=</span> <span className="n">r</span><span className="p">:</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">m</span> <span className="o">=</span> <span className="p">(</span><span className="n">l</span><span className="o">+</span><span className="n">r</span><span className="p">)</span> <span className="o">//</span> <span className="mi">2</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">if</span> <span className="n">array</span><span className="p">[</span><span className="n">m</span><span className="p">]</span> <span className="o">!=</span> <span className="n">m</span><span className="o">+</span><span className="mi">1</span><span className="p">:</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">r</span> <span className="o">=</span> <span className="n">m</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">else</span><span className="p">:</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="n">l</span> <span className="o">=</span> <span className="n">m</span><span className="o">+</span><span className="mi">1</span><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span className="k">return</span> <span className="n">l</span><span className="o">+</span><span className="mi">1</span><br/></code></pre>
</div>

</Spoiler>

<h2 id="harder-problem-ntarsis-set" className="group flex">Harder problem: Ntarsis' Set&nbsp;<Link href="#harder-problem-ntarsis-set" onClick={() => copyToClipboard("https://wiki.danielc.rocks/comp-sci/algorithms/binary-search#harder-problem-ntarsis-set", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p><ProminentLink href="https://codeforces.com/contest/1853/problem/C">View problem on codeforces</ProminentLink></p>

<blockquote>
  <p>Ntarsis has been given a set <Latex>$S$</Latex>, initially containing the integers <Latex>$1, 2, 3 \cdots, 10^&#123;1000&#125;$</Latex> in sorted order. Every day, he removes the <Latex>$a_1$</Latex>-th, <Latex>$a_2$</Latex>-th, <Latex>$\cdots$</Latex>, <Latex>$a_n$</Latex>-th smallest numbers in <Latex>$S$</Latex> <strong>simultaneously</strong>.</p>
  
  <p>What is the smallest element in <Latex>$S$</Latex> after <Latex>$k$</Latex> days?</p>
  
  <p><br/></p>
  
  <p><em>Input</em></p>
  
  <p>The first line contains the number of testcases <Latex>$t \;(1 \leq t \leq 10^5)$</Latex>. The description of the testcases follows.</p>
  
  <p>The first line of each testcase consists of two integers <Latex>$n$</Latex> and <Latex>$k$</Latex> (<Latex>$1 \leq n, k \leq 2 \cdot 10^5$</Latex>) - the length of <Latex>$a$</Latex> and the number of days.</p>
  
  <p>The following line of each testcase consists of <Latex>$n$</Latex> integers <Latex>$a_1, a_2, \cdots, a_n$</Latex> (<Latex>$1 \leq a_i \leq 10^9$</Latex>) - the elements of array <Latex>$a$</Latex>.</p>
  
  <p>It is guaranteed that:</p>
  
  <ul>
  <li>the sum of <Latex>$n$</Latex> over all testcases does not exceed <Latex>$2 \cdot 10^5$</Latex></li>
  <li>the sum of <Latex>$k$</Latex> over all testcases does not exceed <Latex>$2 \cdot 10^5$</Latex></li>
  <li><Latex>$a_1 \lt a_2 \lt \cdots \lt a_n$</Latex> for all testcases.</li>
  </ul>
  
  <p><br/></p>
  
  <p><em>Output</em></p>
  
  <p>For each testcase, print an integer that is the smallest element in <Latex>$S$</Latex> after <Latex>$k$</Latex> days.</p>
</blockquote>

<p><strong>Example:</strong></p>

<p><CopyButton text="7\n5 1\n1 2 4 5 6\n5 3\n1 3 5 6 7\n4 1000\n2 3 4 5\n9 1434\n1 4 7 9 12 15 17 18 20\n10 4\n1 3 5 7 9 11 13 15 17 19\n10 6\n1 4 7 10 13 16 19 22 25 28\n10 150000\n1 3 4 5 10 11 12 13 14 15\n">Input:</CopyButton></p>

<pre><code>7<br/>5 1<br/>1 2 4 5 6<br/>5 3<br/>1 3 5 6 7<br/>4 1000<br/>2 3 4 5<br/>9 1434<br/>1 4 7 9 12 15 17 18 20<br/>10 4<br/>1 3 5 7 9 11 13 15 17 19<br/>10 6<br/>1 4 7 10 13 16 19 22 25 28<br/>10 150000<br/>1 3 4 5 10 11 12 13 14 15<br/></code></pre>

<p><CopyButton text="3\n9\n1\n12874\n16\n18\n1\n">Output:</CopyButton></p>

<pre><code>3<br/>9<br/>1<br/>12874<br/>16<br/>18<br/>1499986<br/></code></pre>

<p><strong>Solution:</strong></p>

<Spoiler>

<p>Let's simulate backwards instead of forwards. Instead of deleting the positions <Latex>$a_1, a_2, \cdots, a_n$</Latex> each time then checking the first number after <Latex>$k$</Latex> operations, let's start with the number <Latex>$1$</Latex> at the front and insert zeroes at positions <Latex>$a_1 - 1, a_2 - 2, \cdots, a_n - n$</Latex> so that the zeroes will occupy positions <Latex>$a_1, a_2, \cdots, a_n$</Latex> after insertion. After <Latex>$k$</Latex> insertions, we check what position <Latex>$1$</Latex> is in.</p>

<p><br/></p>

<p>If the current position of <Latex>$1$</Latex> is <Latex>$x$</Latex>, then we need to find how many of <Latex>$a_1, a_2, \cdots, a_n$</Latex> (note this is a nondecreasing sequence) are less than or equal to <Latex>$x$</Latex>. We can do this by binary searching on <Latex>$a_1, a_2, \cdots, a_n$</Latex> to find the rightmost occurence of the largest number less than or equal to <Latex>$x$</Latex>. The index of that item is how many items will be inserted before the 1; thus we add it to <Latex>$x$</Latex> to get the new position of the 1.</p>

<p><br/></p>

<p>If <Latex>$a_1 \neq 1$</Latex>, then the answer is 1. Otherwise, we start with <Latex>$x=0$</Latex> and perform the process described above <Latex>$k$</Latex> times. The time complexity is <Latex>$O(n + k \log n)$</Latex>.</p>

<p><br/></p>

<p>C++ solution:</p>

<div className="codehilite">
<pre><span></span><code><span className="cp">#include</span><span className="w"> </span><span className="cpf">&lt;bits/stdc++.h&gt;</span><br/><br/><span className="cp">#define ll long long</span><br/><br/><span className="k">using</span><span className="w"> </span><span className="k">namespace</span><span className="w"> </span><span className="nn">std</span><span className="p">;</span><br/><br/><span className="kt">int</span><span className="w"> </span><span className="n">n</span><span className="p">,</span><span className="w"> </span><span className="n">k</span><span className="p">,</span><span className="w"> </span><span className="n">a</span><span className="p">[</span><span className="mi">200010</span><span className="p">];</span><br/><br/><span className="kt">void</span><span className="w"> </span><span className="nf">solve</span><span className="p">()</span><span className="w"> </span><span className="p">&#123;</span><br/><span className="w">  </span><span className="n">cin</span><span className="w"> </span><span className="o">&gt;&gt;</span><span className="w"> </span><span className="n">n</span><span className="w"> </span><span className="o">&gt;&gt;</span><span className="w"> </span><span className="n">k</span><span className="p">;</span><br/><span className="w">  </span><span className="k">for</span><span className="p">(</span><span className="kt">int</span><span className="w"> </span><span className="n">i</span><span className="o">=</span><span className="mi">0</span><span className="p">;</span><span className="w"> </span><span className="n">i</span><span className="o">&lt;</span><span className="n">n</span><span className="p">;</span><span className="w"> </span><span className="o">++</span><span className="n">i</span><span className="p">)</span><span className="w"> </span><span className="p">&#123;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span><span className="n">cin</span><span className="w"> </span><span className="o">&gt;&gt;</span><span className="w"> </span><span className="n">a</span><span className="p">[</span><span className="n">i</span><span className="p">];</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span><span className="n">a</span><span className="p">[</span><span className="n">i</span><span className="p">]</span><span className="w"> </span><span className="o">-=</span><span className="w"> </span><span className="n">i</span><span className="o">+</span><span className="mi">1</span><span className="p">;</span><br/><span className="w">  </span><span className="p">&#125;</span><br/><span className="w">  </span><span className="k">if</span><span className="p">(</span><span className="n">a</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span><span className="w"> </span><span className="o">!=</span><span className="w"> </span><span className="mi">0</span><span className="p">)</span><span className="w"> </span><span className="p">&#123;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span><span className="n">cout</span><span className="w"> </span><span className="o">&lt;&lt;</span><span className="w"> </span><span className="s">&quot;1</span><span className="se">\n</span><span className="s">&quot;</span><span className="p">;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span><span className="k">return</span><span className="p">;</span><br/><span className="w">  </span><span className="p">&#125;</span><br/><br/><span className="w">  </span><span className="n">ll</span><span className="w"> </span><span className="n">x</span><span className="w"> </span><span className="o">=</span><span className="w"> </span><span className="mi">0</span><span className="p">;</span><br/><span className="w">  </span><span className="k">for</span><span className="p">(</span><span className="kt">int</span><span className="w"> </span><span className="n">i</span><span className="o">=</span><span className="mi">0</span><span className="p">;</span><span className="w"> </span><span className="n">i</span><span className="o">&lt;</span><span className="n">k</span><span className="p">;</span><span className="w"> </span><span className="o">++</span><span className="n">i</span><span className="p">)</span><span className="w"> </span><span className="p">&#123;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span><span className="kt">int</span><span className="w"> </span><span className="n">l</span><span className="o">=</span><span className="mi">0</span><span className="p">,</span><span className="w"> </span><span className="n">r</span><span className="o">=</span><span className="n">n</span><span className="p">;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span><span className="kt">int</span><span className="w"> </span><span className="n">m</span><span className="p">;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span><span className="k">while</span><span className="p">(</span><span className="n">r</span><span className="o">-</span><span className="n">l</span><span className="o">&gt;</span><span className="mi">1</span><span className="p">)</span><span className="w"> </span><span className="p">&#123;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>  </span><span className="n">m</span><span className="w"> </span><span className="o">=</span><span className="w"> </span><span className="p">(</span><span className="n">l</span><span className="o">+</span><span className="n">r</span><span className="p">)</span><span className="o">/</span><span className="mi">2</span><span className="p">;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>  </span><span className="k">if</span><span className="p">(</span><span className="n">a</span><span className="p">[</span><span className="n">m</span><span className="p">]</span><span className="w"> </span><span className="o">&gt;</span><span className="w"> </span><span className="n">x</span><span className="p">)</span><span className="w"> </span><span className="n">r</span><span className="o">=</span><span className="n">m</span><span className="p">;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>  </span><span className="k">else</span><span className="w"> </span><span className="n">l</span><span className="o">=</span><span className="n">m</span><span className="p">;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span><span className="p">&#125;</span><br/><span className="w"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span><span className="n">x</span><span className="w"> </span><span className="o">+=</span><span className="w"> </span><span className="p">(</span><span className="n">ll</span><span className="p">)(</span><span className="n">l</span><span className="o">+</span><span className="mi">1</span><span className="p">);</span><br/><span className="w">  </span><span className="p">&#125;</span><br/><span className="w">  </span><span className="n">cout</span><span className="w"> </span><span className="o">&lt;&lt;</span><span className="w"> </span><span className="n">x</span><span className="o">+</span><span className="mi">1</span><span className="w"> </span><span className="o">&lt;&lt;</span><span className="w"> </span><span className="sc">&#39;\n&#39;</span><span className="p">;</span><br/><span className="p">&#125;</span><br/><br/><span className="kt">int</span><span className="w"> </span><span className="nf">main</span><span className="p">()</span><span className="w"> </span><span className="p">&#123;</span><br/><span className="w">  </span><span className="n">ios</span><span className="o">::</span><span className="n">sync_with_stdio</span><span className="p">(</span><span className="mi">0</span><span className="p">);</span><br/><span className="w">  </span><span className="n">cin</span><span className="p">.</span><span className="n">tie</span><span className="p">(</span><span className="k">nullptr</span><span className="p">);</span><br/><br/><span className="w">  </span><span className="kt">int</span><span className="w"> </span><span className="n">t</span><span className="p">;</span><span className="w"> </span><span className="n">cin</span><span className="w"> </span><span className="o">&gt;&gt;</span><span className="w"> </span><span className="n">t</span><span className="p">;</span><br/><span className="w">  </span><span className="k">while</span><span className="p">(</span><span className="n">t</span><span className="o">--</span><span className="p">)</span><span className="w"> </span><span className="n">solve</span><span className="p">();</span><br/><span className="p">&#125;</span><br/></code></pre>
</div>

</Spoiler>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/comp-sci/algorithms">
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
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#pseudocode" className="text-primary">Pseudocode</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#example-problem-minimum-excludant" className="text-primary">Example problem: Minimum excludant</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#harder-problem-ntarsis-set" className="text-primary">Harder problem: Ntarsis' Set</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    