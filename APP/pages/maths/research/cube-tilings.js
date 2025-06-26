
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

        
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] min-h-10 h-[40vh] md:h-[40vh] xl:h-[calc(100vh-8.5rem)] break-all bg-background pt-3 md:pt-0 md:border-y-2 border-border-subtle">
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

    
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] min-h-10 h-[30vh] md:h-[calc(60vh-8.5rem)] xl:hidden shrink-0 px-4 py-2 border-t-2 md:border-t-0 md:border-b-2 border-border-subtle">
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

<span className="scrollshadow-horizontal-blockquote latex-display-wrapper"><Latex>$$C \leq 18$$</Latex></span>

</Spoiler>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="getting-a-foothold" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Getting a foothold</h2><Link href="#getting-a-foothold" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/research/cube-tilings#getting-a-foothold", true)} className="hidden relative bottom-0.5 group-hover:block text-linkanchor">¶</Link></div>

<p>Before we actually find a lucky number, we can try to find some rules of inference, for example "if <Latex>$n$</Latex> is lucky then so is <Latex>$n+1000$</Latex>". If we can find lots of these, and at least one lucky number, then hopefully we can mark many integers as lucky.</p>

<p>We might first notice that if we have a filling of a cube with <Latex>$n$</Latex>  cuboids of side ratio 1:2:3, then we can split one of them into 8 new cuboids by halving along each edge. The new number of cuboids is <Latex>$n+8-1 = n+7$</Latex> (minus one because of the cuboid we replaced). So we have that:</p>

<blockquote>
  <p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+7$</Latex>.</p>
</blockquote>

<p>This sort of feels like trying to build a cube out of wooden blocks, but the only blocks we have access to are cubes and 1:2:3 cuboids.</p>

<p>With this mental imagery, we can find another construction:</p>

<p><svg
    xmlns="http://www.w3.org/2000/svg"
    width={320}
    height={240}
    viewBox="0 0 105.83 79.375"
    
  >
    <defs>
      <marker
        id="cubetilings1_svg__b"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          d="M8.719 4.034-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
          style={{
            stroke: "var(--Svg-gray)",
            fillRule: "evenodd",
            fill: "var(--Svg-gray)",
            strokeWidth: 0.625,
            strokeLinejoin: "round",
          }}
          transform="rotate(180)scale(.6)"
        />
      </marker>
    </defs>
    <g fill="none" strokeLinejoin="bevel" strokeWidth={0.397}>
      <path
        stroke="#abb2bf"
        d="M44.893 20.794h9.406V30.2h-9.406zM54.299 30.2l4.703-4.703v-9.406"
        style={{
          stroke: "var(--Svg-gray)",
        }}
      />
      <g
        stroke="#61afef"
        style={{
          stroke: "var(--Svg-line-highlight-1)",
        }}
      >
        <path
          id="cubetilings1_svg__a"
          d="M44.893 16.091h9.406v4.703h-9.406z"
          style={{
            stroke: "var(--Svg-line-highlight-1)",
          }}
        />
        <path
          d="M12.904 20.823h9.406v9.406h-9.406zM12.904 20.823l4.703-4.703h9.406l-4.703 4.703"
          style={{
            stroke: "var(--Svg-line-highlight-1)",
          }}
        />
        <path
          d="m22.31 30.229 4.703-4.703V16.12M44.893 16.091l7.054-7.054h9.406L54.3 16.09zM54.299 20.794l7.054-7.054V9.037"
          style={{
            stroke: "var(--Svg-line-highlight-1)",
          }}
        />
      </g>
      <g
        stroke="#abb2bf"
        style={{
          stroke: "var(--Svg-gray)",
        }}
      >
        <path
          d="M76.783 20.894h9.406V30.3h-9.406z"
          style={{
            stroke: "var(--Svg-gray)",
          }}
        />
        <path
          d="m86.189 30.3 4.703-4.703v-9.406M76.783 16.192h9.406v4.703h-9.406z"
          style={{
            stroke: "var(--Svg-gray)",
          }}
        />
        <path
          d="m76.783 16.192 7.054-7.054h9.406l-7.054 7.054zM86.189 20.894l7.054-7.054M93.244 9.137v4.703"
          style={{
            stroke: "var(--Svg-gray)",
          }}
        />
      </g>
      <g
        stroke="#61afef"
        style={{
          stroke: "var(--Svg-line-highlight-1)",
        }}
      >
        <path
          d="m95.595 16.192 2.337-2.337h-4.703l-2.352 2.352zM97.932 13.855v9.406l-2.337 2.337"
          style={{
            stroke: "var(--Svg-line-highlight-1)",
          }}
        />
        <path
          d="M90.892 25.598h4.703v-9.406"
          style={{
            fill: "none",
            stroke: "var(--Svg-line-highlight-1)",
            strokeWidth: 0.353748,
            strokeLinejoin: "bevel",
          }}
        />
      </g>
      <g
        stroke="#abb2bf"
        style={{
          stroke: "var(--Svg-gray)",
        }}
      >
        <path
          d="M66.573 58.67h9.406v9.406h-9.406zM75.979 68.076l4.703-4.703v-9.406"
          style={{
            stroke: "var(--Svg-gray)",
          }}
        />
        <path
          d="M66.573 53.968h9.406v4.703h-9.406zM66.573 53.968l7.054-7.054h9.406l-7.054 7.054zM80.682 53.968v9.406h4.703v-9.406z"
          style={{
            stroke: "var(--Svg-gray)",
          }}
        />
      </g>
      <path
        stroke="#61afef"
        d="m85.392 49.257 2.337-2.337h-4.703l-2.352 2.352z"
        style={{
          stroke: "var(--Svg-line-highlight-1)",
        }}
      />
      <path
        stroke="#abb2bf"
        d="M87.722 51.631v9.406l-2.337 2.337M80.682 53.968l-4.703 4.703"
        style={{
          stroke: "var(--Svg-gray)",
        }}
      />
      <path
        stroke="#61afef"
        d="m80.675 49.272.007 4.696h4.703l2.337-2.337.007-4.71-2.337 2.336-.007 4.71"
        style={{
          stroke: "var(--Svg-line-highlight-1)",
        }}
      />
      <g
        stroke="#abb2bf"
        style={{
          stroke: "var(--Svg-gray)",
        }}
      >
        <path
          d="M23.739 58.778h9.406v9.406h-9.406z"
          style={{
            stroke: "var(--Svg-gray)",
          }}
        />
        <path
          d="M23.739 54.075h9.406v4.703h-9.406zM23.739 54.075l7.054-7.054H40.2l-7.054 7.054z"
          style={{
            stroke: "var(--Svg-gray)",
          }}
        />
        <path
          d="m42.557 49.365 2.337-2.337H40.19l-2.352 2.352zM44.887 51.739v9.406L42.55 63.48"
          style={{
            stroke: "var(--Svg-gray)",
          }}
        />
      </g>
      <path
        stroke="#61afef"
        d="M33.144 54.075h4.703l4.71-4.71-.007 14.116-4.703 4.703h-4.703M37.847 54.075v14.109"
        style={{
          stroke: "var(--Svg-line-highlight-1)",
        }}
      />
      <path
        stroke="#abb2bf"
        d="m42.55 54.075 2.337-2.337.007-4.71"
        style={{
          stroke: "var(--Svg-gray)",
        }}
      />
      <path
        stroke="#61afef"
        d="M33.145 68.184V54.075l4.695-4.696 4.718-.014"
        style={{
          stroke: "var(--Svg-line-highlight-1)",
        }}
      />
      <path
        d="M30.99 22.023h8.24"
        style={{
          fill: "var(--Svg-gray)",
          stroke: "var(--Svg-gray)",
          strokeWidth: 0.396999,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          markerEnd: "url(#cubetilings1_svg__b)",
        }}
      />
      <path
        d="M63.813 20.495h8.2"
        style={{
          fill: "var(--Svg-gray)",
          stroke: "var(--Svg-gray)",
          strokeWidth: 0.396999,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          markerEnd: "url(#cubetilings1_svg__b)",
        }}
      />
      <path
        d="M81.519 34.106v8.53"
        style={{
          fill: "var(--Svg-gray)",
          stroke: "var(--Svg-gray)",
          strokeWidth: 0.396999,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          markerEnd: "url(#cubetilings1_svg__b)",
        }}
      />
      <path
        d="M61.29 57.502H50.887"
        style={{
          fill: "var(--Svg-gray)",
          stroke: "var(--Svg-gray)",
          strokeWidth: 0.396999,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          markerEnd: "url(#cubetilings1_svg__b)",
        }}
      />
    </g>
  </svg></p>

<p>We used 2 cubes and 3 cuboids, thus if <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, we can scale two cubes tiled with <Latex>$n$</Latex> and <Latex>$m$</Latex> cuboids to fit inside this construction. Hence we know that:</p>

<blockquote>
  <p>If <Latex>$n$</Latex> and <Latex>$m$</Latex> are lucky, then so is <Latex>$n+m+3$</Latex>.</p>
</blockquote>

<p>We can continue to try constructions like this.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="construction-tools" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Construction Tools</h2><Link href="#construction-tools" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/research/cube-tilings#construction-tools", true)} className="hidden relative bottom-0.5 group-hover:block text-linkanchor">¶</Link></div>

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

<p><svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={280}
    height={300}
    viewBox="0 0 74.083 79.375"
    
  >
    <defs>
      <path id="cubetilings2_svg__b" d="M250.381 114.185h14.653V150h-14.653z" />
      <path
        id="cubetilings2_svg__a"
        d="M337.855 428.058h78.049v32.39h-78.049z"
      />
      <marker
        id="cubetilings2_svg__c"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          d="M8.719 4.034-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
          style={{
            stroke: "var(--Svg-gray)",
            fillRule: "evenodd",
            fill: "var(--Svg-gray)",
            strokeWidth: 0.625,
            strokeLinejoin: "round",
          }}
          transform="rotate(180)scale(.6)"
        />
      </marker>
    </defs>
    <path
      d="M11.55 26.56H6.847V12.453h4.703v14.109M6.847 12.452V7.749h14.108v4.703H6.847M6.847 7.75l4.703-4.704M20.955 7.75l4.703-4.704M20.955 12.452l4.703-4.703M11.55 3.046h14.108V7.75"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M48.658 26.42h-4.703V12.312h4.703V26.42"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M43.955 12.312V7.609h14.109v4.703h-14.11"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M48.658 26.42v-4.702h14.108v4.702H48.658"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m43.955 7.609 4.703-4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m62.766 7.609 4.703-4.703M62.766 26.42l4.703-4.702M48.658 2.906h18.811v18.812"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M48.658 2.906h14.108"
      style={{
        fill: "#ccc",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M58.064 7.609v14.109h4.702V7.608h-4.702M62.766 2.906l-4.702 4.703M48.658 21.718v-9.406h9.406"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M43.558 72.97h-4.703V58.863h4.703V72.97M38.855 58.862v-4.703h14.109v4.703H38.855"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M43.558 72.97v-4.702h14.109v4.703h-14.11M38.855 54.159l4.703-4.703M57.667 54.159l4.703-4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M43.558 49.456H62.37v18.812"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M48.26 44.753h18.811999999999998v18.812M43.558 49.456h14.109"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M52.964 54.159v14.109h4.703V54.159h-4.703M57.667 49.456l-4.703 4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m43.558 49.456 4.703-4.703M62.37 49.456l4.702-4.703M48.26 44.753h14.11M62.37 44.753l-4.703 4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M43.558 68.268v-9.406h9.406M57.667 72.97l4.703-4.702"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m67.072 63.565-4.702 4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <text
      xmlSpace="preserve"
      x={57.525}
      y={36.326}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.23333px",

        InkscapeFontSpecification: "&quot",
        fill: "var(--Svg-gray)",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
      }}
    >
      <tspan>{"x2"}</tspan>
    </text>
    <path
      d="m11.52 26.642 4.703-4.703v-9.405"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M27.318 16.97H38.53"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings2_svg__c)",
      }}
    />
    <path
      d="M55.315 30.144v11.058"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings2_svg__c)",
      }}
    />
  </svg></p>

</Proof>

</Thm>

<Thm type="Claim" num="4">

<p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+15$</Latex>.</p>

<Proof unquoted unbolded>

<p><svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={240}
    height={300}
    viewBox="0 0 84.667 105.833"
    
  >
    <defs>
      <path id="cubetilings3_svg__b" d="M250.381 114.185h14.653V150h-14.653z" />
      <path
        id="cubetilings3_svg__a"
        d="M337.855 428.058h78.049v32.39h-78.049z"
      />
      <marker
        id="cubetilings3_svg__c"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          d="M8.719 4.034-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
          style={{
            stroke: "var(--Svg-gray)",
            fillRule: "evenodd",
            fill: "var(--Svg-gray)",
            strokeWidth: 0.625,
            strokeLinejoin: "round",
          }}
          transform="rotate(180)scale(.6)"
        />
      </marker>
    </defs>
    <path
      d="m68.842 11.468 4.703-4.703M20.074 6.703V20.81h9.406V6.703ZM10.668 6.703V20.81h9.406V6.703ZM10.668 20.811v14.11h9.406V20.81ZM20.074 20.811v14.11h9.406V20.81ZM29.48 20.811l2.322-2.27M20.014 6.763l2.323-2.27M29.48 6.763l2.322-2.27M29.48 34.92l2.322-2.27M10.668 6.703l2.203-2.21h9.466"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m73.545 20.813 2.323-2.27M64.08 6.765l2.322-2.27M73.545 6.765l2.323-2.27M66.402 4.555h9.466v14.049M73.545 34.922l2.323-2.27M75.868 18.604v14.048"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m54.783 6.765 2.203-2.21h9.465"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M54.614 6.765h18.931v28.157"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m68.842 39.625 4.703-4.703M50.08 11.468l4.703-4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M50.08 11.468h18.762v28.157l-18.902.14.14-28.297"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m32.325 62.34 2.203-2.21h9.465"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m41.79 62.34 2.203-2.21h9.466M27.622 67.043l4.703-4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M27.622 67.043h18.762V95.2l-18.903.14.14-28.297"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m46.42 67.008-.07 28.227 9.45-.07V67.008zM31.802 32.65V4.493h-9.465M55.8 67.008l6.99-6.938M55.8 76.449l6.99-6.938M55.8 85.855l6.99-6.938M55.8 95.165l6.99-6.938"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M32.325 62.34h18.762"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m46.384 67.043 7.075-6.912 9.332-.06v28.156"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m58.125 60.1-7.015 6.908-.035 28.192M46.384 76.449h9.417M46.384 85.855h9.417"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M34.45 21.625h12.268"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings3_svg__c)",
      }}
    />
    <path
      d="M59.04 43.964v11.668"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings3_svg__c)",
      }}
    />
  </svg></p>

<p>We can make a 6x6x3 cuboid with eleven 1:2:3 cuboids, as shown. Then, we can make another 6x6x3 cuboid using the same construction as in the proof of claim 3, where we wrap 4 cuboids around a cube. Thus we can combine these two 6x6x3 cuboids to form a 6x6x6 cube, using fifteen 1:2:3 cuboids and one smaller cube.</p>

</Proof>

</Thm>

<Thm type="Claim" num="5">

<p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+13$</Latex>.</p>

<Proof unquoted unbolded>

<p><svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={288}
    height={400}
    viewBox="0 0 95.25 132.292"
    
  >
    <defs>
      <path id="cubetilings4_svg__b" d="M250.381 114.185h14.653V150h-14.653z" />
      <path
        id="cubetilings4_svg__a"
        d="M337.855 428.058h78.049v32.39h-78.049z"
      />
      <marker
        id="cubetilings4_svg__c"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          d="M8.719 4.034-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
          style={{
            stroke: "var(--Svg-gray)",
            fillRule: "evenodd",
            fill: "var(--Svg-gray)",
            strokeWidth: 0.625,
            strokeLinejoin: "round",
          }}
          transform="rotate(180)scale(.6)"
        />
      </marker>
    </defs>
    <path
      d="m73.53 31.765 4.703-4.703M68.828 36.468l4.702-4.703M64.125 41.171l4.703-4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M7.565 27.337V13.23h14.108v14.108z"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m7.565 13.229 7.231-7.232h14.109l-7.232 7.232v14.108l7.232-7.23V5.996M50.016 41.171V27.062h14.109v14.11z"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m64.125 12.954 7.23-7.232h14.11l-7.232 7.232v14.108l7.232-7.23V5.721"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M64.125 12.954h14.108L64.125 27.062h-14.11l14.11-14.108M73.53 31.765V17.657"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M68.828 36.468V22.36h-14.11M73.53 17.657H59.422M68.828 12.954l-14.11 14.108M59.422 27.062 73.53 12.954M54.719 27.062v14.11M59.422 27.062v14.11M78.233 12.954v14.108"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M40.787 107.274h-4.703V93.165h4.703v14.109"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#abb2bf",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M45.49 107.274h-4.703V93.165h4.703v14.109M50.193 107.274H45.49V93.165h4.703v14.109"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M85.641 57.717v42.326M43.315 57.717h42.326M21.975 121.383V79.056h42.326v42.327zM64.301 121.383l21.34-21.34M21.975 79.056l21.34-21.34M64.301 79.056l21.34-21.34M50.193 79.056l21.34-21.34M50.193 107.274V79.056M50.193 93.165H21.975M36.084 93.165v28.218M36.084 107.274h28.217M64.301 107.274l21.34-21.34"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M34.312 20.794h10.392"
      style={{
        fill: "var(--Svg-line-highlight-1)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings4_svg__c)",
      }}
    />
    <path
      d="M57.07 44.223v9.771"
      style={{
        fill: "var(--Svg-line-highlight-1)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings4_svg__c)",
      }}
    />
  </svg></p>

</Proof>

</Thm>

<Thm type="Claim" num="6">

<p>If <Latex>$n$</Latex> is lucky, then so is <Latex>$n+12$</Latex>.</p>

<Proof unquoted unbolded>

<p><svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={300}
    height={300}
    viewBox="0 0 105.833 105.833"
    
  >
    <defs>
      <path id="cubetilings5_svg__b" d="M250.381 114.185h14.653V150h-14.653z" />
      <path
        id="cubetilings5_svg__a"
        d="M337.855 428.058h78.049v32.39h-78.049z"
      />
      <marker
        id="cubetilings5_svg__c"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          d="M8.719 4.034-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
          style={{
            stroke: "var(--Svg-gray)",
            fillRule: "evenodd",
            fill: "var(--Svg-gray)",
            strokeWidth: 0.625,
            strokeLinejoin: "round",
          }}
          transform="rotate(180)scale(.6)"
        />
      </marker>
    </defs>
    <path
      d="M18.101 18.75H8.695v4.704h9.406V18.75M8.695 18.75l7.055-7.054h28.217M18.101 18.75l7.054-7.054M27.507 18.75l7.054-7.054M27.507 18.75l7.054-7.054M36.939 18.75l7.054-7.054"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M18.101 18.75h9.406v4.704H18.1M27.533 18.75h9.406v4.704h-9.406"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M43.967 11.696V16.4l-7.054 7.055"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M15.698 85.904H6.292v4.703h9.406v-4.703M34.535 85.904l7.055-7.055"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M15.698 85.904h9.406v4.703h-9.406M25.104 85.904h9.431v4.703H25.13"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M41.564 78.85v4.702l-7.055 7.055"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M41.564 60.038v18.811M41.59 78.85l-4.703 4.702M8.643 83.552V64.741"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m25.104 85.904 2.351-2.352M15.698 85.904l2.351-2.352M6.292 85.904l2.351-2.352"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M8.643 83.552h28.244M41.564 41.226v18.812M41.59 60.038l-4.703 4.703M13.346 41.226 8.643 45.93M13.346 41.226h28.218M8.643 64.74V45.93M36.887 45.93H8.643M36.887 64.74V45.93l4.677-4.704M8.643 64.74h28.244M36.887 64.74v18.812"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M72.062 86.08h-9.405v4.704h9.405V86.08M90.9 86.08l7.054-7.054M72.062 86.08h9.406v4.704h-9.406M81.468 86.08H90.9v4.704h-9.406"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M97.928 79.026v4.703l-7.054 7.055M97.928 60.215v18.811M97.928 41.403v18.812M97.954 60.215l-4.703 4.703M69.71 41.403l-4.702 4.703M69.71 41.403h28.218M93.251 64.918V46.106l4.677-4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M76.778 48.457v37.624M93.251 46.106v37.623M62.657 48.457H90.9V86.08H62.657zM65.008 46.106h28.243M90.9 67.269H62.657"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M62.657 48.457v9.406H90.9M62.657 67.269v9.406H90.9M62.657 48.457l2.351-2.351M90.9 48.457l2.351-2.351M90.9 57.863l2.351-2.351M76.778 48.457l2.352-2.351M90.9 67.269l2.351-2.351M90.9 76.675l2.351-2.352M93.251 83.73 90.9 86.08"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M22.892 26.716v10.49"
      style={{
        fill: "var(--Svg-line-highlight-1)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings5_svg__c)",
      }}
    />
    <path
      d="M46.22 65.649h11.946"
      style={{
        fill: "var(--Svg-line-highlight-1)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings5_svg__c)",
      }}
    />
  </svg></p>

</Proof>

</Thm>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="finding-a-base-case" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Finding a base case</h2><Link href="#finding-a-base-case" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/research/cube-tilings#finding-a-base-case", true)} className="hidden relative bottom-0.5 group-hover:block text-linkanchor">¶</Link></div>

<p>To actually find a lucky number, we remove cubes from our lego building blocks and only use 1:2:3 cuboids.</p>

<Thm type="Claim" num="7">

<p>8 is lucky.</p>

<Proof unquoted unbolded>

<p><svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={200}
    height={200}
    viewBox="0 0 52.917 52.917"
    
  >
    <defs>
      <path id="cubetilings6_svg__b" d="M250.381 114.185h14.653V150h-14.653z" />
      <path
        id="cubetilings6_svg__a"
        d="M337.855 428.058h78.049v32.39h-78.049z"
      />
    </defs>
    <path
      d="M10.03 28.822v-9.406H5.327v9.406h4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M14.733 28.822v-9.406H10.03v9.406h4.703M5.327 19.416l7.054-7.054M12.381 12.362l7.055-7.055M19.436 5.307h28.243"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M5.327 19.416H33.57v28.217H5.327z"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m33.57 47.633 4.703-4.703M38.273 42.93l4.703-4.702M42.976 38.228l4.703-4.703"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.396875,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M47.679 33.525V5.307L33.57 19.416M24.138 5.307 10.03 19.416M28.841 5.307 14.733 19.416M12.381 12.362h9.406"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M14.733 28.822H33.57L47.68 14.713M38.273 42.93V24.12M42.976 38.228V19.416"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.353748,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
  </svg></p>

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
            <td><p className="font-bold text-text-emph">8</p></td>
            <td>9</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td><p className="font-bold text-text-emph">15</p></td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
        </tr>
        <tr>
            <td>21</td>
            <td><p className="font-bold text-text-emph">22</p></td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td><p className="font-bold text-text-emph">29</p></td>
            <td>30</td>
        </tr>
        <tr>
            <td>31</td>
            <td>32</td>
            <td>33</td>
            <td>34</td>
            <td>35</td>
            <td><p className="font-bold text-text-emph">36</p></td>
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
            <td><p className="font-bold text-text-emph">8</p></td>
            <td>9</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td><p className="font-bold text-text-emph">15</p></td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td><p className="font-bold text-text-emph">19</p></td>
            <td>20</td>
        </tr>
        <tr>
            <td>21</td>
            <td><p className="font-bold text-text-emph">22</p></td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td><p className="font-bold text-text-emph">26</p></td>
            <td>27</td>
            <td>28</td>
            <td><p className="font-bold text-text-emph">29</p></td>
            <td>30</td>
        </tr>
        <tr>
            <td>31</td>
            <td>32</td>
            <td><p className="font-bold text-text-emph">33</p></td>
            <td>34</td>
            <td>35</td>
            <td><p className="font-bold text-text-emph">36</p></td>
            <td>37</td>
            <td>38</td>
            <td>39</td>
            <td><p className="font-bold text-text-emph">40</p></td>
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
            <td><p className="font-bold text-text-emph">8</p></td>
            <td>9</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td><p className="font-bold text-text-emph">15</p></td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td><p className="font-bold text-text-emph">19</p></td>
            <td><p className="font-bold text-text-emph">20</p></td>
        </tr>
        <tr>
            <td><p className="font-bold text-text-emph">21</p></td>
            <td><p className="font-bold text-text-emph">22</p></td>
            <td><p className="font-bold text-text-emph">23</p></td>
            <td><p className="font-bold text-text-emph">24</p></td>
            <td>25</td>
            <td><p className="font-bold text-text-emph">26</p></td>
            <td><p className="font-bold text-text-emph">27</p></td>
            <td><p className="font-bold text-text-emph">28</p></td>
            <td><p className="font-bold text-text-emph">29</p></td>
            <td><p className="font-bold text-text-emph">30</p></td>
        </tr>
        <tr>
            <td><p className="font-bold text-text-emph">31</p></td>
            <td><p className="font-bold text-text-emph">32</p></td>
            <td><p className="font-bold text-text-emph">33</p></td>
            <td><p className="font-bold text-text-emph">34</p></td>
            <td><p className="font-bold text-text-emph">35</p></td>
            <td><p className="font-bold text-text-emph">36</p></td>
            <td><p className="font-bold text-text-emph">37</p></td>
            <td><p className="font-bold text-text-emph">38</p></td>
            <td><p className="font-bold text-text-emph">39</p></td>
            <td><p className="font-bold text-text-emph">40</p></td>
        </tr>
        <tr>
            <td>etc.</td>
        </tr>
    </tbody>
</table>

<p>OK - great! Now we have seven consecutive numbers (26 to 32) all being lucky. Since <Latex>$n \implies n+7$</Latex> (Claim 1), this means every integer greater than or equal to 26 is lucky. So <Latex>$C$</Latex> is at most 26.</p>

<div className="text-2xl font-bold group flex space-x-1 pt-6 pb-2"><h2 id="reducing-the-bound-with-code" className="scroll-m-[calc(2.25rem+2*1rem+0.5rem)] md:scroll-m-[0.5rem] text-articleh2">Reducing the bound with code</h2><Link href="#reducing-the-bound-with-code" onClick={() => copyToClipboard("https://notes.danielc.rocks/maths/research/cube-tilings#reducing-the-bound-with-code", true)} className="hidden relative bottom-0.5 group-hover:block text-linkanchor">¶</Link></div>

<p>Have you noticed that in the table above, 25 sticks out like a sore thumb? If we could just show that 25 is lucky, we could add the numbers from 19 to 24 to our chain of consecutive numbers... and C would be at most <Latex>$19$</Latex> - and that would be a good place to stop, because conquering 25 feels like such a bargain (we would reduce C by a lot, not just by 1). But 25 = 18 + 7, so can we show that 18 is lucky? Then we'd have <Latex>$C \leq 18$</Latex>. 18 feels too big to manually try and search for, so can we write some code to brute force it?</p>

<p>Yes we can - if we assume that we can build up tilings by repeatedly joining two cuboids at a time into a larger cuboid, then we can store the side ratios that can be constructed like this.</p>

<p>The side ratio is stored as a 3-tuple <Latex>$(x,y,z)$</Latex> with x always equal to 1. To see if we can combine two ratios, we check if the <Latex>$z$</Latex>-values are the same, and if so we add their <Latex>$y$</Latex>-values (assuming we always join them by placing one cuboid on top of the other - thus for each 3-tuple, we must store all of its 6 permutations). For example, <Latex>$(1,2,3) + (1,2,3) = (1,4,3)$</Latex>.</p>

<p>We can denote by <Latex>$S_k$</Latex> the set of all side ratios that can be constructed using exactly <Latex>$k$</Latex> 1:2:3 cuboids. We generate <Latex>$S_k$</Latex> by trying to comine all aspect ratios which have <Latex>$k$</Latex> total cuboids, which we can do dynamically (i.e. generate <Latex>$S_1$</Latex>, then <Latex>$S_2$</Latex>, then <Latex>$S_3$</Latex>, etc.). Then, we look at which <Latex>$S_k$</Latex> contain <Latex>$(1,1,1)$</Latex>.</p>

<div className="codehilite">
<pre><span></span><code><span className="ch">#!/usr/bin/python3</span><br/><br/><span className="kn">from</span>&nbsp;<span className="nn">fractions</span>&nbsp;<span className="kn">import</span>&nbsp;<span className="n">Fraction</span>&nbsp;<span className="k">as</span>&nbsp;<span className="n">F</span><br/><span className="kn">from</span>&nbsp;<span className="nn">collections</span>&nbsp;<span className="kn">import</span>&nbsp;<span className="n">defaultdict</span><br/><br/><span className="n">S</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">&#123;&#125;</span><br/><br/><span className="c1">#&nbsp;normalized&nbsp;fractions:&nbsp;x&nbsp;:=&nbsp;1</span><br/><span className="n">S</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">&#123;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">1</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">1</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">2</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">2</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">3</span><span className="p">,</span><span className="mi">2</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">2</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">3</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">3</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">3</span><span className="p">),</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">3</span><span className="p">)):</span>&nbsp;<span className="p">(),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">&#125;</span><br/><br/><span className="k">for</span>&nbsp;<span className="n">k</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="nb">range</span><span className="p">(</span><span className="mi">2</span><span className="p">,</span><span className="mi">22</span><span className="p">):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="n">k</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c1">#&nbsp;compute&nbsp;S_k</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">]</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">defaultdict</span><span className="p">(</span><span className="k">lambda</span><span className="p">:</span>&nbsp;<span className="p">((</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">),</span>&nbsp;<span className="p">(</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">)))</span>&nbsp;<span className="c1">#&nbsp;(n,key),&nbsp;(m,key)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">for</span>&nbsp;<span className="n">n</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="nb">range</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span>&nbsp;<span className="n">k</span><span className="o">//</span><span className="mi">2</span><span className="o">+</span><span className="mi">1</span><span className="p">):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">m</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">k</span><span className="o">-</span><span className="n">n</span>&nbsp;<span className="c1">#&nbsp;m+n&nbsp;=&nbsp;k</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">for</span>&nbsp;<span className="n">a</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">n</span><span className="p">]</span><span className="o">.</span><span className="n">keys</span><span className="p">():</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">for</span>&nbsp;<span className="n">b</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">m</span><span className="p">]</span><span className="o">.</span><span className="n">keys</span><span className="p">():</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">a</span><span className="p">[</span><span className="mi">2</span><span className="p">]</span>&nbsp;<span className="o">==</span>&nbsp;<span className="n">b</span><span className="p">[</span><span className="mi">2</span><span className="p">]:</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">x</span><span className="p">,</span><span className="n">y</span><span className="p">,</span><span className="n">z</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span>&nbsp;<span className="n">a</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span><span className="o">+</span><span className="n">b</span><span className="p">[</span><span className="mi">1</span><span className="p">],</span>&nbsp;<span className="n">a</span><span className="p">[</span><span className="mi">2</span><span className="p">])</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">newratios</span>&nbsp;<span className="o">=</span>&nbsp;<span className="nb">list</span><span className="p">(</span><span className="nb">set</span><span className="p">([</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">y</span><span className="o">/</span><span className="n">x</span><span className="p">,</span><span className="n">z</span><span className="o">/</span><span className="n">x</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">z</span><span className="o">/</span><span className="n">x</span><span className="p">,</span><span className="n">y</span><span className="o">/</span><span className="n">x</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">x</span><span className="o">/</span><span className="n">y</span><span className="p">,</span><span className="n">z</span><span className="o">/</span><span className="n">y</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">z</span><span className="o">/</span><span className="n">y</span><span className="p">,</span><span className="n">x</span><span className="o">/</span><span className="n">y</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">x</span><span className="o">/</span><span className="n">z</span><span className="p">,</span><span className="n">y</span><span className="o">/</span><span className="n">z</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">(</span><span className="n">F</span><span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">),</span><span className="n">y</span><span className="o">/</span><span className="n">z</span><span className="p">,</span><span className="n">x</span><span className="o">/</span><span className="n">z</span><span className="p">),</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">]))</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">newratios</span><span className="p">[</span><span className="mi">0</span><span className="p">]]</span>&nbsp;<span className="o">==</span>&nbsp;<span className="p">((</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">),(</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">)):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">newratios</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span>&nbsp;<span className="o">==</span>&nbsp;<span className="p">(</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">,</span><span className="mi">1</span><span className="p">):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="sa">f</span><span className="s2">&quot;FOUND&nbsp;CUBE&nbsp;FOR&nbsp;S_</span><span className="si">&#123;</span><span className="n">k</span><span className="si">&#125;</span><span className="s2">&quot;</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">for</span>&nbsp;<span className="n">newratio</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="n">newratios</span><span className="p">:</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">newratio</span><span className="p">]</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">((</span><span className="n">n</span><span className="p">,</span><span className="n">a</span><span className="p">),(</span><span className="n">m</span><span className="p">,</span><span className="n">b</span><span className="p">))</span><br/><br/><span className="k">def</span>&nbsp;<span className="nf">print_construction</span><span className="p">(</span><span className="n">k</span><span className="p">,</span>&nbsp;<span className="n">r</span><span className="p">,</span>&nbsp;<span className="n">depth</span><span className="p">):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">k</span>&nbsp;<span className="o">==</span>&nbsp;<span className="mi">1</span><span className="p">:</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c1">#&nbsp;terminal&nbsp;nodes&nbsp;displayed&nbsp;with&nbsp;a&nbsp;colon</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="s2">&quot;&nbsp;&nbsp;&quot;</span><span className="o">*</span><span className="n">depth</span><span className="p">,</span>&nbsp;<span className="sa">f</span><span className="s2">&quot;:(</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">,&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">,&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">2</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">)&quot;</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">return</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="s2">&quot;&nbsp;&nbsp;&quot;</span><span className="o">*</span><span className="n">depth</span><span className="p">,</span>&nbsp;<span className="sa">f</span><span className="s2">&quot;(</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">,&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">1</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">,&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="p">[</span><span className="mi">2</span><span className="p">]</span><span className="si">&#125;</span><span className="s2">)&quot;</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="p">((</span><span className="n">n</span><span className="p">,</span><span className="n">a</span><span className="p">),(</span><span className="n">m</span><span className="p">,</span><span className="n">b</span><span className="p">))</span>&nbsp;<span className="o">=</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">r</span><span className="p">]</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">print_construction</span><span className="p">(</span><span className="n">n</span><span className="p">,</span>&nbsp;<span className="n">a</span><span className="p">,</span>&nbsp;<span className="n">depth</span><span className="o">+</span><span className="mi">1</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">print_construction</span><span className="p">(</span><span className="n">m</span><span className="p">,</span>&nbsp;<span className="n">b</span><span className="p">,</span>&nbsp;<span className="n">depth</span><span className="o">+</span><span className="mi">1</span><span className="p">)</span><br/><br/><span className="n">r</span>&nbsp;<span className="o">=</span>&nbsp;<span className="p">(</span><span className="mi">1</span><span className="p">,</span>&nbsp;<span className="mi">1</span><span className="p">,</span>&nbsp;<span className="mi">1</span><span className="p">)</span><br/><br/><span className="k">for</span>&nbsp;<span className="n">k</span>&nbsp;<span className="ow">in</span>&nbsp;<span className="n">S</span><span className="o">.</span><span className="n">keys</span><span className="p">():</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">k</span><span className="o">==</span><span className="mi">1</span><span className="p">:</span>&nbsp;<span className="k">continue</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">if</span>&nbsp;<span className="n">S</span><span className="p">[</span><span className="n">k</span><span className="p">][</span><span className="n">r</span><span className="p">]</span>&nbsp;<span className="o">!=</span>&nbsp;<span className="p">((</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">),(</span><span className="mi">0</span><span className="p">,</span><span className="mi">0</span><span className="p">)):</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="nb">print</span><span className="p">(</span><span className="sa">f</span><span className="s2">&quot;found&nbsp;</span><span className="si">&#123;</span><span className="n">r</span><span className="si">&#125;</span><span className="s2">&nbsp;in&nbsp;S_</span><span className="si">&#123;</span><span className="n">k</span><span className="si">&#125;</span><span className="s2">:&quot;</span><span className="p">)</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="n">print_construction</span><span className="p">(</span><span className="n">k</span><span className="p">,</span>&nbsp;<span className="n">r</span><span className="p">,</span>&nbsp;<span className="mi">0</span><span className="p">)</span><br/></code></pre>
</div>

<p>If the program finds <Latex>$(1,1,1)$</Latex> in <Latex>$S_k$</Latex> (i.e. a cube, although you can search for any ratio you want by changing r), then it will print out the way it found to construct it, in a tree-like manner using the recursive <code>print_construction</code> function.</p>

<p><strong>The program found the following construction</strong>, proving that 18 is lucky:</p>

<p><svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={480}
    height={640}
    viewBox="0 0 198.437 264.583"
    
  >
    <defs>
      <path id="cubetilings7_svg__b" d="M250.381 114.185h14.653V150h-14.653z" />
      <path
        id="cubetilings7_svg__a"
        d="M337.855 428.058h78.049v32.39h-78.049z"
      />
      <marker
        id="cubetilings7_svg__c"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          d="M8.719 4.034-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
          style={{
            stroke: "var(--Svg-gray)",
            fillRule: "evenodd",
            fill: "var(--Svg-gray)",
            strokeWidth: 0.625,
            strokeLinejoin: "round",
          }}
          transform="rotate(180)scale(.6)"
        />
      </marker>
    </defs>
    <g
      style={{
        strokeWidth: 0.529167,
        strokeDasharray: "none",
        stroke: "var(--Svg-line-highlight-1)",
      }}
    >
      <path
        d="M30.637 33.259H11.826M11.826 47.38V19.137M30.637 19.137h-9.406V47.38"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "var(--Svg-line-highlight-1)",
          strokeWidth: 0.529167,
          strokeLinejoin: "bevel",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        transform="translate(-.275 .078)"
      />
      <path
        d="M30.637 19.137V47.38H11.826V19.137z"
        style={{
          fill: "none",
          stroke: "var(--Svg-line-highlight-1)",
          strokeWidth: 0.529167,
          strokeLinejoin: "bevel",
          strokeDasharray: "none",
        }}
        transform="translate(-.275 .078)"
      />
      <path
        d="m30.637 47.38 2.352-2.351M11.826 19.137l2.351-2.351M21.231 19.137l2.352-2.351M30.637 19.137l2.352-2.351M30.637 33.259l2.352-2.352M32.989 45.029l4.703-4.703M37.692 40.326l4.703-4.703"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "var(--Svg-line-highlight-1)",
          strokeWidth: 0.529167,
          strokeLinejoin: "bevel",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        transform="translate(-.275 .078)"
      />
      <path
        d="M32.989 45.029V16.786H14.177"
        style={{
          fill: "none",
          stroke: "var(--Svg-line-highlight-1)",
          strokeWidth: 0.529167,
          strokeLinejoin: "bevel",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(-.275 .078)"
      />
      <path
        d="M37.692 40.326V12.083H18.88"
        style={{
          fill: "none",
          stroke: "var(--Svg-line-highlight-1)",
          strokeWidth: 0.529167,
          strokeLinejoin: "bevel",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(-.275 .078)"
      />
      <path
        d="M42.395 35.623V7.38H23.583M14.177 16.786l9.406-9.406M42.395 7.38l-9.406 9.406"
        style={{
          fill: "none",
          stroke: "var(--Svg-line-highlight-1)",
          strokeWidth: 0.529167,
          strokeLinejoin: "bevel",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(-.275 .078)"
      />
    </g>
    <path
      d="M87.416 33.259H68.604M68.604 47.38V19.137M87.416 19.137H78.01V47.38"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M87.416 19.137V47.38H68.604V19.137z"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m68.604 19.137 2.352-2.351M78.01 19.137l2.352-2.351"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m70.956 16.786 9.406-9.406"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M87.416 33.259h9.406V47.38h-9.406z"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M70.956 16.786h18.811M94.47 12.083H75.66M99.173 7.38H80.362"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M87.416 19.137h9.406v14.122h-9.406zM96.822 19.137 108.579 7.38M96.822 47.38l11.757-11.757M99.173 7.38h9.406v28.243"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M89.767 16.786h9.406v28.243M96.822 33.259l2.351-2.352M87.416 19.137 99.173 7.38"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m145.818 19.137 2.351-2.351"
      style={{
        fill: "var(--Svg-gray)",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m155.223 19.137 2.352-2.351"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m148.17 16.786 9.405-9.406M148.17 16.786h18.81M171.684 12.083h-18.812M176.386 7.38h-18.811M174.035 19.137 185.792 7.38M174.035 47.38l11.757-11.757M176.386 7.38h9.406v28.243M166.98 16.786h9.406v28.243"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m174.035 33.259 2.351-2.352"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M164.63 19.137 176.385 7.38"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M145.818 19.137h28.217V47.38M145.818 19.137l-9.406 9.406M174.035 47.38l-9.406 9.406"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M136.412 28.543h28.217v28.243h-28.217zM174.035 19.137l-9.406 9.406M164.63 19.137h9.405M155.223 28.543l9.406-9.406M155.223 28.543v28.243M141.115 23.84h18.811"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m145.74 93.427 2.352-2.352M155.146 93.427l2.351-2.352"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m148.092 91.075 9.405-9.406M148.092 91.075h18.811M171.606 86.372h-18.812M176.309 81.67h-18.812M173.957 93.427l11.758-11.758M173.957 121.67l11.758-11.757M176.309 81.67h9.406v28.243M166.903 91.075h9.406v28.244M173.957 107.548l2.352-2.351M164.552 93.427l11.757-11.758"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M145.74 93.427h28.217v28.243M145.74 93.427l-9.406 9.406M173.957 121.67l-9.405 9.406M173.957 93.427l-9.405 9.406M164.552 93.427h9.405M155.146 102.833l9.406-9.406M141.037 98.13h18.812"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M115.171 123.996h28.217v28.243h-28.217zM136.334 102.833h28.218v28.243M143.389 123.996l21.163-21.163M136.334 102.833l-21.163 21.163M143.389 152.239l21.163-21.163"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M115.171 138.117h28.218l21.163-21.163"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m24.231 108.73 1.175-1.176M28.932 108.73l1.176-1.176"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529169,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m25.406 107.554 4.702-4.7M25.406 107.554h9.403M37.16 105.204h-9.403M39.51 102.854h-9.402M33.634 108.73l5.876-5.876M24.231 108.73l-4.701 4.7M33.634 108.73h4.7M28.932 113.43l4.702-4.7M21.88 111.08h9.403M19.53 113.43 8.952 124.003M8.952 131.06h14.104M23.056 124.004H8.952v14.113h14.104M19.53 113.43h14.104M34.809 107.554h4.701M39.51 102.854h4.701M33.634 108.73H24.23"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529169,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M23.056 138.117h28.207M23.056 124.004v14.113M23.056 124.004h28.207M23.056 124.004l21.155-21.15M44.211 102.854H72.42M51.263 124.004l21.156-21.15M51.263 138.117l21.156-21.15M51.263 124.004v14.113M72.42 102.854v14.113"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529169,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M8.952 229.883h14.104M23.056 222.825H8.952v14.117h14.104M23.056 236.942h28.207M23.056 222.825v14.117M23.056 222.825h28.207"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m23.056 222.825 21.155-21.156"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M44.211 201.669H72.42M51.263 222.825l21.156-21.156M51.263 236.942l21.156-21.156M51.263 222.825v14.117M72.42 201.669v14.117"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M194.617-23.069h28.208v14.117h-28.208z"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="rotate(90)"
    />
    <path
      d="m8.952 194.617 21.143-21.156H44.21L23.07 194.617M44.211 173.461v28.208"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <text
      xmlSpace="preserve"
      x={355.353}
      y={35.623}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 700,
        fontStretch: "normal",
        fontSize: "6.35px",

        InkscapeFontSpecification: "&quot",
        fill: "#abb2bf",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.529167,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={355.353}
        y={35.623}
        style={{
          strokeWidth: 0.529167,
        }}
      >
        {"b"}
      </tspan>
    </text>
    <path
      d="M110.466 229.883h14.104M124.57 222.825h-14.104v14.117h14.104M124.57 236.942h28.208M124.57 222.825v14.117"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M124.57 222.825h28.208"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m152.778 236.942 21.156-21.156M152.778 222.825v14.117"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M173.934 201.669v14.117"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M194.617-124.583h28.208v14.117h-28.208z"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="rotate(90)"
    />
    <path
      d="m110.466 194.617 21.143-21.156h14.117l-21.143 21.156"
      style={{
        fill: "none",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M124.583 194.617h14.104v28.208h-14.104z"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M194.617-152.804h28.208v14.117h-28.208z"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="rotate(90)"
    />
    <path
      d="m152.804 194.617 21.156-21.156M152.804 222.825l21.156-21.156M173.96 201.669V173.46h-28.234l-21.143 21.156"
      style={{
        fill: "none",
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.529166,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m138.687 194.617 21.156-21.156"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "var(--Svg-line-highlight-1)",
        strokeWidth: 0.52916666,
        strokeLinejoin: "bevel",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M50.333 28.33h8.432"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings7_svg__c)",
      }}
    />
    <path
      d="M118.74 28.278h8.432"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings7_svg__c)",
      }}
    />
    <path
      d="M160.059 66.005v8.432"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings7_svg__c)",
      }}
    />
    <path
      d="M98.152 116.263H89.72"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings7_svg__c)",
      }}
    />
    <path
      d="M31.082 151.305v8.431"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings7_svg__c)",
      }}
    />
    <path
      d="M86.878 208.727h8.432"
      style={{
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#cubetilings7_svg__c)",
      }}
    />
    <text
      xmlSpace="preserve"
      x={78.617}
      y={112.081}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 700,
        fontStretch: "normal",
        fontSize: "5.64444px",

        InkscapeFontSpecification: "&quot",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        fill: "var(--Svg-gray)",
        stroke: "var(--Svg-gray)",
        strokeWidth: 0.396999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    >
      <tspan
        x={78.617}
        y={112.081}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontSize: "5.64444px",

          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          fill: "var(--Svg-gray)",
          stroke: "none",
          strokeWidth: 0.397,
        }}
      >
        {"zoom *= 0.5"}
      </tspan>
    </text>
  </svg></p>

<p>Thus, 18+7=25 is also lucky, and so <strong><Latex>$C \leq 18$</Latex></strong>.</p>

        </div>

        
            <div className="border-t-2 border-border-subtle pt-4 flex items-top justify-between">
                
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
    