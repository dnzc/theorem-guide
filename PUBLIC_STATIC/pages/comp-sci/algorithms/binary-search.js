
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


export default function BinarySearch () {
    return (
        <Layout>
            <Head>
                <title>Binary Search | Daniel C</title>
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
                            theme='dark'
                        />
    
                    <div className="relative w-full 2xl:max-w-[90%] flex h-full"> {/* whole thing (including large-screen left space filler, which is 10%) is max 90%; so 10% each side */}
    <Sidebar>

        <ul className="dirtree px-4 pt-1 border-elevated scrollbar-thin scrollbar-thumb-elevated scrollbar-track-body overflow-y-scroll w-full md:w-[calc(300px-2px)] h-full md:h-auto md:max-h-[calc(100vh-15rem)] break-all">
            <li className="relative bottom-0 pl-4">
                <div className="text-primary mb-0.5">
                    <Link href="/" className="flex items-center space-x-1.5 max-w-fit">
                        <FaBook/>
                        <span>root</span>
                    </Link>
                </div>
                <ul className="mb-4 md:mb-0">
                    
                        
                            <Accordion title="comp-sci" href="/comp-sci" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="algorithms" href="/comp-sci/algorithms" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="binary-search" href="/comp-sci/algorithms/binary-search" isFolder={false} isSelected={ true } />
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="web-dev" href="/comp-sci/web-dev" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="story-of-the-site" href="/comp-sci/web-dev/story-of-the-site" isFolder={false} isSelected={ false } />
                        
                    
                                
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

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/comp-sci">comp-sci</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/comp-sci/algorithms">algorithms</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-4">Last modified on 27 Jul 2023</p>
        

        
            <div className="mb-4">
                <CopyButton text="Everyone has performed a binary search without realizing: if you look for the word &quot;gerontology&quot; in the dictionary, you wouldn&#x27;t go flip through every page until you found it. Instead you&#x27;d check the middle, and if you overshot then you&#x27;d check the middle of the first chunk, then if you if undershot you&#x27;d check the middle of the remaining chunk, and so on, until you find the word. In programmer terms, we can use binary search to search for an item in a sorted array. We keep track of a left pointer and a right poiner. Then we check the middle index by (left + right) / 2 (rounding down). For example, if we were wanted to find the index of 8 in the array [1, 2, 5, 7, 8, 9, 10], we&#x27;d start by setting the left and right pointer to index 0 and index 6 respectively. [1, 2, 5, 7, 8, 9, 10] ^ ^ ^ left=0 mid=3 right=6 Then, since the item we&#x27;re looking for (8) is larger than the item at the middle, we know that it has to lie to the right of the middle pointer, thus we can update the left pointer to be mid+1. [1, 2, 5, 7, 8, 9, 10] ^ ^ l=4 r=6 Now the middle pointer is at index 5, and points to 9. This is more than 8, so we can update the right pointer to be mid-1: [1, 2, 5, 7, 8, 9, 10] ^ l=r=4 Now the left and right pointer point to the same thing, so we&#x27;ve found the index of 8: it&#x27;s 4. Well actually, we need one more check that the item that&#x27;s being pointed to is actually 8 - for example, if it was 7.5 instead, we&#x27;d still end up with left = right = 4. The time complexity of binary search is $O(\log n)$ , because each comparison halves the search space, so it takes a logarithmic number of operations (and $\log_2(n) = \frac&#123;\log n&#125;&#123;\log 2&#125;$). Pseudocode I like to define the left pointer as the one you know it&#x27;s definitely greater than or equal to, and the right pointer as the one you know it&#x27;s definitely less than. So, $l \leq x \lt r$. function search(arr, length, target) l := 0 r := n-1 while l+1 &lt; r do m := floor((l+r) / 2) if arr[m] &gt; target then r := m else if arr[m] &lt; target then l := m+1 else return m end end end Example problem: Minimum excludant Given a sorted array of distinct positive integers, find the smallest positive integer that is not in the array. Examples Input: [1, 2, 3, 5, 9, 12, 13] Output: 4 Input: [3, 5, 7, 10] Output: 1 Input: [1, 2, 3, 4] Output: 5 Solution Considering the smallest missing element from the array, we must have that the items before it are the positive integers in order, with no gaps. So the smallest missing element is the smallest element whose value is not equal to its index (indexing from 1). We can use binary search to find this. #!/usr/bin/python3 def solve(array): l = 0 r = len(array) while l != r: m = (l+r) // 2 if array[m] != m+1: r = m else: l = m+1 return l+1 Harder problem: Ntarsis&#x27; Set View problem on codeforces Ntarsis has been given a set $S$, initially containing the integers $1, 2, 3 \cdots, 10^&#123;1000&#125;$ in sorted order. Every day, he removes the $a_1$-th, $a_2$-th, $\cdots$, $a_n$-th smallest numbers in $S$ simultaneously. What is the smallest element in $S$ after $k$ days? Input The first line contains the number of testcases $t \;(1 \leq t \leq 10^5)$. The description of the testcases follows. The first line of each testcase consists of two integers $n$ and $k$ ($1 \leq n, k \leq 2 \cdot 10^5$) - the length of $a$ and the number of days. The following line of each testcase consists of $n$ integers $a_1, a_2, \cdots, a_n$ ($1 \leq a_i \leq 10^9$) - the elements of array $a$. It is guaranteed that: the sum of $n$ over all testcases does not exceed $2 \cdot 10^5$ the sum of $k$ over all testcases does not exceed $2 \cdot 10^5$ $a_1 \lt a_2 \lt \cdots \lt a_n$ for all testcases. Output For each testcase, print an integer that is the smallest element in $S$ after $k$ days. Example Input: 7 5 1 1 2 4 5 6 5 3 1 3 5 6 7 4 1000 2 3 4 5 9 1434 1 4 7 9 12 15 17 18 20 10 4 1 3 5 7 9 11 13 15 17 19 10 6 1 4 7 10 13 16 19 22 25 28 10 150000 1 3 4 5 10 11 12 13 14 15 Output: 3 9 1 12874 16 18 1499986 Solution Let&#x27;s simulate backwards instead of forwards. Instead of deleting the positions $a_1, a_2, \cdots, a_n$ each time then checking the first number after $k$ operations, let&#x27;s start with the number $1$ at the front and insert zeroes at positions $a_1 - 1, a_2 - 2, \cdots, a_n - n$ so that the zeroes will occupy positions $a_1, a_2, \cdots, a_n$ after insertion. After $k$ insertions, we check what position $1$ is in. If the current position of $1$ is $x$, then we need to find how many of $a_1, a_2, \cdots, a_n$ (note this is a nondecreasing sequence) are less than or equal to $x$. We can do this by binary searching on $a_1, a_2, \cdots, a_n$ to find the rightmost occurence of the largest number less than or equal to $x$. The index of that item is how many items will be inserted before the 1; thus we add it to $x$ to get the new position of the 1. If $a_1 \\neq 1$, then the answer is 1. Otherwise, we start with $x=0$ and perform the process described above $k$ times. The time complexity is $O(n + k \log n)$. C++ solution: #include &lt;bits/stdc++.h&gt; #define ll long long using namespace std; int n, k, a[200010]; void solve() &#123; cin &gt;&gt; n &gt;&gt; k; for(int i=0; i&lt;n; ++i) &#123; cin &gt;&gt; a[i]; a[i] -= i+1; &#125; if(a[0] != 0) &#123; cout &lt;&lt; &quot;1\\n&quot;; return; &#125; ll x = 0; for(int i=0; i&lt;k; ++i) &#123; int l=0, r=n; int m; while(r-l&gt;1) &#123; m = (l+r)/2; if(a[m] &gt; x) r=m; else l=m; &#125; x += (ll)(l+1); &#125; cout &lt;&lt; x+1 &lt;&lt; &#x27;\\n&#x27;; &#125; int main() &#123; ios::sync\_with\_stdio(0); cin.tie(nullptr); int t; cin &gt;&gt; t; while(t--) solve(); &#125;">Copy article plaintext</CopyButton>
            </div>
        

        <div className="article mb-4">
            <h1 id="binary-search-an-intuitive-algorithm">Binary Search: an Intuitive Algorithm</h1>

<p>Everyone has performed a binary search without realizing: if you look for the word "gerontology" in the dictionary, you wouldn't go flip through every page until you found it. Instead you'd check the middle, and if you overshot then you'd check the middle of the first chunk, then if you if undershot you'd check the middle of the remaining chunk, and so on, until you find the word.</p>

<p>In programmer terms, we can use binary search to search for an item in a sorted array.
We keep track of a left pointer and a right poiner. Then we check the middle index by <code>(left + right) / 2</code> (rounding down).</p>

<p>For example, if we were wanted to find the index of 8 in the array [1, 2, 5, 7, 8, 9, 10], we'd start by setting the left and right pointer to index 0 and index 6 respectively.</p>

<pre><code>[1, 2, 5, 7, 8, 9, 10]<br/> ^<span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>^<span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>^<br/>left=0   mid=3   right=6<br/></code></pre>

<p>Then, since the item we're looking for (8) is larger than the item at the middle, we know that it has to lie to the right of the middle pointer, thus we can update the left pointer to be <code>mid+1</code>.</p>

<pre><code>[1, 2, 5, 7, 8, 9, 10]<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> ^<span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> ^<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> l=4   r=6<br/></code></pre>

<p>Now the middle pointer is at index 5, and points to 9. This is more than 8, so we can update the right pointer to be <code>mid-1</code>:</p>

<pre><code>[1, 2, 5, 7, 8, 9, 10]<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> ^<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span> l=r=4<br/></code></pre>

<p>Now the left and right pointer point to the same thing, so we've found the index of 8: it's 4. Well actually, we need one more check that the item that's being pointed to is actually 8 - for example, if it was 7.5 instead, we'd still end up with <code>left = right = 4</code>.</p>

<p>The time complexity of binary search is <Latex>$O(\log n)$</Latex> , because each comparison halves the search space, so it takes a logarithmic number of operations (and <Latex>$\log_2(n) = \frac&#123;\log n&#125;&#123;\log 2&#125;$</Latex>).</p>

<h2 id="pseudocode" className="group flex">Pseudocode&nbsp;<Link href="#pseudocode" onClick={() => copyToClipboard("https://blog.danielc.rocks/comp-sci/algorithms/binary-search#pseudocode", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>I like to define the left pointer as the one you know it's definitely <em>greater than or equal to</em>, and the right pointer as the one you know it's definitely <em>less than</em>. So, <Latex>$l \leq x \lt r$</Latex>.</p>

<pre className="relative">
<div className="absolute top-2 right-2"><CopyButton text="function search(arr, length, target)\n    l := 0\n    r := n-1\n    while l+1 &lt; r do\n        m := floor((l+r) / 2)\n        if arr[m] &gt; target then\n            r := m\n        else if arr[m] &lt; target then\n            l := m+1\n        else\n            return m\n        end\n    end\nend"/></div>
<code>function search(arr, length, target)<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>l := 0<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>r := n-1<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>while l+1 &lt; r do<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>m := floor((l+r) / 2)<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>if arr[m] &gt; target then<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>r := m<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>else if arr[m] &lt; target then<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>l := m+1<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>else<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>return m<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>end<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>end<br/>end<br/></code></pre>

<h2 id="example-problem-minimum-excludant" className="group flex">Example problem: Minimum excludant&nbsp;<Link href="#example-problem-minimum-excludant" onClick={() => copyToClipboard("https://blog.danielc.rocks/comp-sci/algorithms/binary-search#example-problem-minimum-excludant", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<blockquote>
  <p>Given a sorted array of distinct positive integers, find the smallest positive integer that is not in the array.</p>
</blockquote>

<p><strong>Examples</strong></p>

<blockquote>
  <p>Input: <code>[1, 2, 3, 5, 9, 12, 13]</code> <CopyButton text='[1, 2, 3, 5, 9, 12, 13]'/></p>
  
  <p>Output: <code>4</code></p>
</blockquote>

<blockquote>
  <p>Input: <code>[3, 5, 7, 10]</code> <CopyButton text='[3, 5, 7, 10]'/></p>
  
  <p>Output: <code>1</code></p>
</blockquote>

<blockquote>
  <p>Input: <code>[1, 2, 3, 4]</code> <CopyButton text='[1, 2, 3, 4]'/></p>
  
  <p>Output: <code>5</code></p>
</blockquote>

<p><strong>Solution</strong></p>

<Spoiler>

<p>Considering the smallest missing element from the array, we must have that the items before it are the positive integers in order, with no gaps. So the smallest missing element is the smallest element whose value is not equal to its index (indexing from 1). We can use binary search to find this.</p>

<pre className="relative">
<div className="absolute top-2 right-2"><CopyButton text="#!/usr/bin/python3\n\ndef solve(array):\n    l = 0\n    r = len(array)\n    while l != r:\n        m = (l+r) // 2\n        if array[m] != m+1:\n            r = m\n        else:\n            l = m+1\n    return l+1"/></div>
<code>#!/usr/bin/python3<br/><br/>def solve(array):<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>l = 0<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>r = len(array)<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>while l != r:<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>m = (l+r) // 2<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>if array[m] != m+1:<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>r = m<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>else:<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>l = m+1<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>return l+1<br/></code></pre>

</Spoiler>

<h2 id="harder-problem-ntarsis-set" className="group flex">Harder problem: Ntarsis' Set&nbsp;<Link href="#harder-problem-ntarsis-set" onClick={() => copyToClipboard("https://blog.danielc.rocks/comp-sci/algorithms/binary-search#harder-problem-ntarsis-set", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

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

<p><strong>Example</strong></p>

<p>Input:</p>

<pre className="relative">
<div className="absolute top-2 right-2"><CopyButton text="7\n5 1\n1 2 4 5 6\n5 3\n1 3 5 6 7\n4 1000\n2 3 4 5\n9 1434\n1 4 7 9 12 15 17 18 20\n10 4\n1 3 5 7 9 11 13 15 17 19\n10 6\n1 4 7 10 13 16 19 22 25 28\n10 150000\n1 3 4 5 10 11 12 13 14 15"/></div>
<code>7<br/>5 1<br/>1 2 4 5 6<br/>5 3<br/>1 3 5 6 7<br/>4 1000<br/>2 3 4 5<br/>9 1434<br/>1 4 7 9 12 15 17 18 20<br/>10 4<br/>1 3 5 7 9 11 13 15 17 19<br/>10 6<br/>1 4 7 10 13 16 19 22 25 28<br/>10 150000<br/>1 3 4 5 10 11 12 13 14 15<br/></code></pre>

<p>Output:</p>

<pre className="relative">
<div className="absolute top-2 right-2"><CopyButton text="3\n9\n1\n12874\n16\n18\n1499986"/></div>
<code>3<br/>9<br/>1<br/>12874<br/>16<br/>18<br/>1499986<br/></code></pre>

<p><strong>Solution</strong></p>

<Spoiler>

<p>Let's simulate backwards instead of forwards. Instead of deleting the positions <Latex>$a_1, a_2, \cdots, a_n$</Latex> each time then checking the first number after <Latex>$k$</Latex> operations, let's start with the number <Latex>$1$</Latex> at the front and insert zeroes at positions <Latex>$a_1 - 1, a_2 - 2, \cdots, a_n - n$</Latex> so that the zeroes will occupy positions <Latex>$a_1, a_2, \cdots, a_n$</Latex> after insertion. After <Latex>$k$</Latex> insertions, we check what position <Latex>$1$</Latex> is in.</p>

<p><br/></p>

<p>If the current position of <Latex>$1$</Latex> is <Latex>$x$</Latex>, then we need to find how many of <Latex>$a_1, a_2, \cdots, a_n$</Latex> (note this is a nondecreasing sequence) are less than or equal to <Latex>$x$</Latex>. We can do this by binary searching on <Latex>$a_1, a_2, \cdots, a_n$</Latex> to find the rightmost occurence of the largest number less than or equal to <Latex>$x$</Latex>. The index of that item is how many items will be inserted before the 1; thus we add it to <Latex>$x$</Latex> to get the new position of the 1.</p>

<p><br/></p>

<p>If <Latex>$a_1 \neq 1$</Latex>, then the answer is 1. Otherwise, we start with <Latex>$x=0$</Latex> and perform the process described above <Latex>$k$</Latex> times. The time complexity is <Latex>$O(n + k \log n)$</Latex>.</p>

<p><br/></p>

<p>C++ solution:</p>

<pre className="relative">
<div className="absolute top-2 right-2"><CopyButton text="#include <bits/stdc++.h>\n\n#define ll long long\n\nusing namespace std;\n \nint n, k, a[200010];\n \nvoid solve() &#123;\n    cin &gt;&gt; n &gt;&gt; k;\n    for(int i=0; i<n; ++i) &#123;\n        cin &gt;&gt; a[i];\n        a[i] -= i+1;\n    &#125;\n    if(a[0] != 0) &#123;\n        cout &lt;&lt; &quot;1\\n&quot;;\n        return;\n    &#125;\n \n    ll x = 0;\n    for(int i=0; i<k; ++i) &#123;\n        int l=0, r=n;\n        int m;\n        while(r-l>1) &#123;\n            m = (l+r)/2;\n            if(a[m] &gt; x) r=m;\n            else l=m;\n        &#125;\n        x += (ll)(l+1);\n    &#125;\n    cout &lt;&lt; x+1 &lt;&lt; '\\n';\n&#125;\n \nint main() &#123;\n    ios::sync\_with\_stdio(0);\n    cin.tie(nullptr);\n  \n    int t; cin &gt;&gt; t;\n    while(t--) solve();\n&#125;"/></div>
<code>#include &lt;bits/stdc++.h&gt;<br/><br/>#define ll long long<br/><br/>using namespace std;<br/><br/>int n, k, a[200010];<br/><br/>void solve() &#123;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>cin &gt;&gt; n &gt;&gt; k;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>for(int i=0; i&lt;n; ++i) &#123;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>cin &gt;&gt; a[i];<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>a[i] -= i+1;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>&#125;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>if(a[0] != 0) &#123;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>cout &lt;&lt; "1\n";<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>return;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>&#125;<br/><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>ll x = 0;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>for(int i=0; i&lt;k; ++i) &#123;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>int l=0, r=n;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>int m;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>while(r-l&gt;1) &#123;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>m = (l+r)/2;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>if(a[m] &gt; x) r=m;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>else l=m;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>&#125;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>x += (ll)(l+1);<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>&#125;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>cout &lt;&lt; x+1 &lt;&lt; '\n';<br/>&#125;<br/><br/>int main() &#123;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>ios::sync\_with\_stdio(0);<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>cin.tie(nullptr);<br/><br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>int t; cin &gt;&gt; t;<br/><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>while(t--) solve();<br/>&#125;<br/></code></pre>

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
                <h1 className="font-bold text-xl">In this Article</h1>
                <ul className="text-elevated">
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#pseudocode" className="text-link [@media(hover:hover)]:hover:underline">Pseudocode</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#example-problem-minimum-excludant" className="text-link [@media(hover:hover)]:hover:underline">Example problem: Minimum excludant</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#harder-problem-ntarsis-set" className="text-link [@media(hover:hover)]:hover:underline">Harder problem: Ntarsis' Set</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    