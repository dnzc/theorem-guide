
import Layout from '../../../../components/layout'
import Head from 'next/head'
import Accordion from '../../../../components/accordion'
import Link from 'next/link'
import ProminentLink from '../../../../components/prominentLink'
import DiscreetLink from '../../../../components/discreetLink'
import MailLink from '../../../../components/mailLink'

import { FaChevronRight } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Spoiler from '../../../../components/spoiler'
import IncompleteMessage from '../../../../components/incompleteMessage'
import Image from 'next/image'
import { copyToClipboard, CopyButton } from '../../../../components/copyButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function IntegerAxioms () {
    return (
        <Layout>
            <Head>
                <title>Integer Axioms | Daniel C</title>
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
                                
                                    
                        
                            <Accordion title="algorithms" href="/comp-sci/algorithms" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="binary-search" href="/comp-sci/algorithms/binary-search" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="maths" href="/maths" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="number-theory" href="/maths/number-theory" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="FTA-proof" href="/maths/number-theory/FTA-proof" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="1-integer-axioms" href="/maths/number-theory/FTA-proof/1-integer-axioms" isFolder={false} isSelected={ true } />
                        
                    
                        
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
                    <p className="text-lg font-bold text-secondary"><Link href="/maths">maths</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths/number-theory">number-theory</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths/number-theory/FTA-proof">FTA-proof</Link></p>
                
            </div>
        

        
            <p className="text-elevated mb-3">Last modified on 27 Jul 2023</p>
        

        <div className="article mb-4">
            <h1 id="developing-the-axioms">Developing the Axioms</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p>This is part 1, where we develop the basic axioms of the integers and some definitions. In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.</p>

<h2 id="axioms-as-properties" className="group flex">Axioms as Properties&nbsp;<Link href="#axioms-as-properties" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/1-integer-axioms#axioms-as-properties", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Over the integers, we need a set of reduced axioms from which all the known theorems can be derived using the rules of logical inference. <em>Reduced</em> meaning that if an axiom can be proven using other axioms, then it should not be an axiom. And philosophically, our axioms should be as simple as possible. The modern approach to axiomatic proof is for our list of axioms to be the <em>properties</em> that we want our system to have; but, it's not clear what these fundamental properties of the integers should be.</p>

<p>For example, it is well known that if a prime divides a product, then it divides one of the constituents (<DiscreetLink href="https://en.wikipedia.org/wiki/Euclid%27s_lemma">Euclid's Lemma</DiscreetLink>). Should this be one of our fundamental properties? It certainly feels "obvious", in the sense that proving it would not get you any extra points on an olympiad question. But does it follow from some other fundamental properties? How do you even <em>define</em> prime? In my experience, people often try to justify Euclid's lemma by using prime factorization. The problem with this is that it feels <em>backwards</em> - the fact that every integer can be uniquely prime factorized is an extremely powerful result (hence the name <strong>fundamental theorem of arithmetic</strong> (FTA)), and so using it feels like overkill and may even be circular reasoning.</p>

<p>We <em>could</em> have FTA as an axiom. But if we can prove it from simpler axioms, then why bother?</p>

<h2 id="how-deep-do-we-go" className="group flex">How deep do we go?&nbsp;<Link href="#how-deep-do-we-go" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/1-integer-axioms#how-deep-do-we-go", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>At some point, we need to stop our search for rigor - otherwise we will get too far out of the math world and into philosophy. For example, what does it mean for two things to be equal? And so, we will <em>assume</em> some basic notions:</p>

<ul>
<li>Equality is reflexive (<Latex>$a=a$</Latex>), symmetric (<Latex>$a=b$</Latex> means <Latex>$b=a$</Latex>) and transitive (if <Latex>$a=b$</Latex> and <Latex>$b=c$</Latex> then <Latex>$a=c$</Latex>)</li>
<li>If <Latex>$a=b$</Latex> then we may substitute <Latex>$a$</Latex> for <Latex>$b$</Latex> and vice versa, in any expression containing them</li>
<li>Properties of logic and basic set theory</li>
<li>Order of operations</li>
</ul>

<h2 id="basic-properties" className="group flex">Basic properties&nbsp;<Link href="#basic-properties" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/1-integer-axioms#basic-properties", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>We are working with the integers (whole numbers, <Latex>$\mathbb&#123;Z&#125;$</Latex>) and naturals (positive whole numbers, <Latex>$\mathbb&#123;N&#125;$</Latex>), under two basic operations: addition and multiplication (<Latex>$+, \cdot$</Latex>). More technically, it is an underlying assumption that <Latex>$\mathbb&#123;Z&#125;$</Latex> is <em>closed</em> under two well-defined binary operations <Latex>$+, \cdot$</Latex>, i.e. that adding or multiplying two integers always gives an integer. (This is not the case for division!)</p>

<p>Let's add the first items to our "inventory" of fundamental properties<sup className="footnote-ref" id="fnref-1"><a href="#fn-1">2</a></sup>.</p>

<ul>
<li><p><strong>Commutativity</strong>: the order of multiplication and addition does not matter. In symbols:
<Latex>$$\forall a,b \in \mathbb&#123;Z&#125;, \; a \cdot b = b \cdot a, \; a+b=b+a$$</Latex></p></li>
<li><p><strong>Associativity</strong>: in repeated addition or multiplication, the brackets do not matter. In symbols:
<Latex>$$\forall a,b,c \in \mathbb&#123;Z&#125;, \; (a \cdot b) \cdot c = a \cdot (b \cdot c),$$</Latex>
<Latex>$$(a+b)+c = a+(b+c)$$</Latex></p></li>
<li><p><strong>Distributivity</strong>: multiplication is distributive over addition. In symbols:
<Latex>$$\forall a,b,c \in \mathbb&#123;Z&#125;, \; a\cdot(b+c) = a\cdot b + a \cdot c$$</Latex></p></li>
</ul>

<p>I hope you agree that these properties seem pretty fundamental. Let's add some more:</p>

<ul>
<li><p><strong>Additive Identity</strong>: there exists an integer we call <Latex>$0$</Latex>, which when added to any integer, does nothing:
<Latex>$$\exists \, 0 \in \mathbb&#123;Z&#125; \; s.t. \; \forall a \in \mathbb&#123;Z&#125;, a+0=a$$</Latex></p></li>
<li><p><strong>Additive Inverse</strong>: for every integer <Latex>$a$</Latex>, there is another integer that when added to <Latex>$a$</Latex>, gives 0.
<Latex>$$\forall a \in \mathbb&#123;Z&#125;, \exists \, a' \in \mathbb&#123;Z&#125; \; s.t.\;  a + a' = 0$$</Latex></p></li>
<li><p><strong>Multiplicative Identity</strong>: there exists an integer we call <Latex>$1$</Latex>, which when multiplying by any integer, does nothing:
<Latex>$$\exists \, 1 \in \mathbb&#123;Z&#125; \; s.t. \; \forall a \in \mathbb&#123;Z&#125;, a\cdot 1=a$$</Latex></p></li>
</ul>

<p>Note that we <em>don't</em> have multiplicative inverses, because then we would have to include reciprocals of integers.</p>

<p>Furthermore, we can use the commutative property to extend some of the above axioms:</p>

<ul>
<li>Distributivity: As well as <Latex>$a \cdot (b+c) = a\cdot b + a \cdot c$</Latex>, we also have <Latex>$(b+c)\cdot a = b \cdot a + c \cdot a $</Latex></li>
<li>Additive identity: <Latex>$a+0 = 0+a = 0$</Latex> instead of just <Latex>$a+0=a$</Latex></li>
<li>Additive inverse: <Latex>$a+a'=a'+a=0$</Latex> instead of just <Latex>$a+a'=0$</Latex></li>
<li>Multiplicative identity: <Latex>$a\cdot 1 = 1 \cdot a = a$</Latex> instead of just <Latex>$a \cdot 1 = a$</Latex></li>
</ul>

<p>If we don't do this then whenever we cite these axioms, we would have to remember the way round we wrote it, which is utter hell.</p>

<h2 id="uniqueness-theorems" className="group flex">Uniqueness Theorems&nbsp;<Link href="#uniqueness-theorems" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/1-integer-axioms#uniqueness-theorems", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>We haven't explicitly stated that 0, 1 and additive inverses are unique.
Again, this feels intuitive - if a+b = a, then b=0, right? And -1 is <em>the</em> additive inverse of 1, right? Maybe we should add uniqueness as an axiom. </p>

<p>Actually, we can prove it from what we already have. I encourage you to try and do so.</p>

<blockquote>
  <p><em>Theorem.</em> <Latex>$0$</Latex> is unique, i.e. the only additive identity of <Latex>$\mathbb&#123;Z&#125;$</Latex>.</p>
  
  <p><em>Proof</em>.
  Suppose that <Latex>$0$</Latex> and <Latex>$0'$</Latex> are two additive identities of <Latex>$\mathbb&#123;Z&#125;$</Latex>. We will show that <Latex>$0' = 0$</Latex>.</p>
  
  <p>Note that <Latex>$0 + 0' = 0$</Latex>, by <strong>+ive id.</strong></p>
  
  <p>But also <Latex>$0 + 0' = 0'$</Latex>, by <strong>+ive id.</strong></p>
  
  <p>Thus <Latex>$0 = 0 + 0' = 0'$</Latex>, so <Latex>$0 = 0'$</Latex>, as required.</p>
</blockquote>

<p>The proof for the uniqueness of <Latex>$1$</Latex> is completely analogous, so it is left to the reader.</p>

<blockquote>
  <p><em>Theorem.</em> Additive inverses are unique.</p>
  
  <p><em>Proof</em>.
  Let <Latex>$a$</Latex> be an arbitrary integer. Let <Latex>$b,c$</Latex> be two additive inverses of a. We will show that <Latex>$b = c$</Latex>.</p>
  
  <p>Consider <Latex>$(a+b)+c$</Latex>.</p>
  
  <p>One one hand:</p>
  
  <p><Latex>$(a+b)+c = 0+c$</Latex> by <strong>+ive inv.</strong></p>
  
  <p><Latex>$= c$</Latex> by <strong>+ive id.</strong></p>
  
  <p>On the other hand:</p>
  
  <p><Latex>$(a+b)+c = a+(b+c)$</Latex> by <strong>assoc.</strong></p>
  
  <p><Latex>$=a+(c+b)$</Latex> by <strong>comm.</strong></p>
  
  <p><Latex>$=(a+c)+b$</Latex> by <strong>assoc.</strong></p>
  
  <p><Latex>$ = 0+b$</Latex> by <strong>+ive inv.</strong></p>
  
  <p><Latex>$= b$</Latex> by <strong>+ive id.</strong></p>
  
  <p>Thus, <Latex>$b = (a+b)+c = c$</Latex>, so <Latex>$b=c$</Latex>, as required.</p>
</blockquote>

<p>Now we can introduce <em>negative signs</em> as the way to refer an integer's unique additive inverse: for each integer <Latex>$n$</Latex>, we denote its unique additive inverse as <Latex>$-n$</Latex>. Then, we can define <Latex>$a-b$</Latex> to be shorthand for <Latex>$a+(-b)$</Latex>, which is a nice way to avoid having to define subtraction as another operation.</p>

<h2 id="ordering-of-z" className="group flex">Ordering of Z&nbsp;<Link href="#ordering-of-z" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/1-integer-axioms#ordering-of-z", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>What we have so far is good, but we need more. For example we haven't axiomatized the naturals yet, and what about proof techniques?</p>

<ul>
<li><strong>Z is ordered</strong>: There exists a <em>non-empty</em> subset <Latex>$\mathbb&#123;N&#125;$</Latex> of <Latex>$\mathbb&#123;Z&#125;$</Latex> that is <em>closed</em> under <Latex>$+,\cdot$</Latex> and satisfies <em>Trichotomy</em>: for all <Latex>$a \in \mathbb&#123;Z&#125;$</Latex>, exactly one of <Latex>$a \in \mathbb&#123;N&#125;, a=0, -a \in \mathbb&#123;N&#125;$</Latex> is true<sup className="footnote-ref" id="fnref-2"><a href="#fn-2">1</a></sup>.</li>
<li><strong>Well-ordering principle</strong>: Every non-empty subset of the integers has a <em>least element</em>, defined as an element <Latex>$e$</Latex> of the subset such that for all elements <Latex>$x$</Latex> of the subset, <Latex>$e\leq x$</Latex>.</li>
</ul>

<p>The importance of the well-ordering principle<sup className="footnote-ref" id="fnref-3"><a href="#fn-3">3</a></sup> cannot be understated, because it will let us finish off proofs by assuming minimality and showing a contradiction (i.e. infinite descent).</p>

<h2 id="definitions" className="group flex">Definitions&nbsp;<Link href="#definitions" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/1-integer-axioms#definitions", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Let's make a list of things we'll probably need to explicitly define if we want to have hope of proving FTA:</p>

<ul>
<li>divisibility and primality</li>
<li>inequalities, notion of positive/negative</li>
<li>common divisors, gcd and lcm (greatest common divisor, lowest common multiple)</li>
</ul>

<p>So, let's try to define these rigorously.</p>

<blockquote>
  <p><em>Definitions.</em> Let <Latex>$a,b,c,p \in \mathbb&#123;Z&#125;$</Latex>, <Latex>$S \subset \mathbb&#123;Z&#125;$</Latex>.</p>
  
  <ul>
  <li><p><strong><Latex>$a \mid b$</Latex></strong> ("a divides b", "b is divisible by a") if and only if ("iff") <Latex>$\exists k \in \mathbb&#123;Z&#125; \; s.t. \; b = a \cdot k$</Latex>. Then <Latex>$a$</Latex> is a "factor" or "divisor" of <Latex>$b$</Latex> and <Latex>$b$</Latex> is a "multiple" of <Latex>$a$</Latex>.</p></li>
  <li><p><strong><Latex>$a-b$</Latex></strong> is shorthand for <Latex>$a + -b$</Latex>.</p></li>
  <li><p><strong><Latex>$a \gt b$</Latex></strong> iff <Latex>$a-b \in \mathbb&#123;N&#125;$</Latex>.</p></li>
  <li><p><strong><Latex>$a \lt b$</Latex></strong> iff <Latex>$b \gt a$</Latex>.</p></li>
  <li><p><strong><Latex>$a \geq b$</Latex></strong> iff <Latex>$a \gt b$</Latex> or <Latex>$a=b$</Latex>.</p></li>
  <li><p><strong><Latex>$a \leq b$</Latex></strong> iff <Latex>$b \geq a$</Latex>.</p></li>
  <li><p><strong><Latex>$a \gt b \gt c$</Latex></strong> iff <Latex>$a \gt b$</Latex> and <Latex>$b \gt c$</Latex>; in this case <Latex>$b$</Latex> is "strictly between" <Latex>$a$</Latex> and <Latex>$c$</Latex>. Vice versa for <Latex>$a \lt b \lt c$</Latex>.</p></li>
  <li><p><em>a</em> is <strong>"positive"</strong> iff <Latex>$a \gt 0$</Latex>, and "negative" iff <Latex>$a \lt 0$</Latex>.</p></li>
  <li><p><em>p</em> is <strong>"prime"</strong> iff for all ways of writing <Latex>$p = u \cdot v$</Latex> with <Latex>$u,v \in \mathbb&#123;Z&#125;$</Latex>, exactly one of <Latex>$u,v$</Latex> is 1 or -1.</p></li>
  <li><p><Latex>$a$</Latex> is a <strong>"gcd"</strong> of <Latex>$b,c$</Latex> if for all common divisors <Latex>$a'$</Latex> of <Latex>$b,c$</Latex>, <Latex>$a \geq a'$</Latex>.</p></li>
  <li><p><Latex>$a$</Latex> is a <strong>"lcm"</strong> of <Latex>$b,c$</Latex> if for all common multiples <Latex>$a'$</Latex> of <Latex>$b,c$</Latex>, <Latex>$a \leq a'$</Latex></p></li>
  </ul>
</blockquote>

<p>Note: in the definition of prime, mathematicians like to define another thing called a <em>unit</em>, which is a factor of 1; in the case of the integers, the only factors of 1 are 1 and -1 (<a href="https://math.stackexchange.com/questions/1031174/prove-1-and-1-are-the-only-units-in-mathbbz">why?</a>).</p>

<p>Also, for the sake of brevity, we will skip the proofs that gcds and lcms <em>exist and are unique</em>, and that <em>all common divisors divide the greatest common divisor</em> (left as an exercise). Thus we can refer to the unique gcd of <Latex>$a,b$</Latex> as <Latex>$gcd(a,b)$</Latex> or <Latex>$(a,b)$</Latex>, and the unique lcm of <Latex>$a,b$</Latex> as <Latex>$lcm(a,b)$</Latex> or <Latex>$[a,b]$</Latex>.</p>

<h2 id="structuring-logic-building-lemmas" className="group flex">Structuring logic, building lemmas&nbsp;<Link href="#structuring-logic-building-lemmas" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/1-integer-axioms#structuring-logic-building-lemmas", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>So, what's the point of all these axioms and definitions? It means we can start to inch towards our goal by building lemmas. For example:</p>

<blockquote>
  <p><em>Lemma.</em> <Latex>$\forall a \in \mathbb&#123;Z&#125;, \; 0 \cdot a = a \cdot 0 = 0$</Latex>.</p>
  
  <p><em>Proof.</em> Let <Latex>$a$</Latex> be an arbitrary integer.</p>
  
  <p><Latex>$0 \cdot a = (0 + 0) \cdot a$</Latex> by <strong>+ive id.</strong></p>
  
  <p><Latex>$ = 0 \cdot a + 0 \cdot a$</Latex> by <strong>dist.</strong></p>
  
  <p>Thus, <Latex>$(0 \cdot a) + -(0 \cdot a) = (0 \cdot a + 0 \cdot a) + -(0 \cdot a)$</Latex></p>
  
  <p>The left hand side equals <Latex>$0$</Latex>, by <strong>+ive inv.</strong></p>
  
  <p>The right hand side is:</p>
  
  <p><Latex>$(0 \cdot a + 0 \cdot a) + -(0 \cdot a)$</Latex></p>
  
  <p><Latex>$= 0 \cdot a + (0 \cdot a + -(0 \cdot a))$</Latex> by <strong>assoc.</strong></p>
  
  <p><Latex>$= 0 \cdot a + 0$</Latex> by <strong>+ive inv.</strong></p>
  
  <p><Latex>$= 0 \cdot a$</Latex> by <strong>+ive id.</strong></p>
  
  <p>Therefore, equating the RHS and LHS, we obtain <Latex>$0 = 0\cdot a$</Latex>. Thus by <strong>comm.</strong>, <Latex>$0 \cdot a = a \cdot 0 = 0$</Latex>, as required.</p>
</blockquote>

<p>Wow, that seemed tedious! But the point is, even though the fact that 0 times anything is 0 seems fundamental, we don't actually need it as an axiom, because we can prove it from the axioms we already have.</p>

<p>I will give one more lemma with full proof, so that you get the idea (referring to axioms at each step, etc). Then, i'll give the list of lemmas that can be built up, and the main ideas for how to prove them, but not the whole proofs.</p>

<blockquote>
  <p><em>Lemma.</em> In <Latex>$Z$</Latex>, if <Latex>$d \mid a, d\mid b$</Latex> then <Latex>$d \mid (a \cdot r+b \cdot s)$</Latex> for any <Latex>$r,s \in \mathbb&#123;Z&#125;$</Latex></p>
  
  <p><em>Proof.</em> Suppose <Latex>$d \mid a, d \mid b$</Latex>. Let <Latex>$r,s \in \mathbb&#123;Z&#125;$</Latex>, we will show that <Latex>$d \mid (a\cdot r+b\cdot s)$</Latex>.</p>
  
  <p><Latex>$d \mid a \implies a = d \cdot k$</Latex> for some <Latex>$k \in \mathbb&#123;Z&#125;$</Latex></p>
  
  <p>And, <Latex>$d \mid b \implies b = d \cdot j$</Latex> for some <Latex>$j \in \mathbb&#123;Z&#125;$</Latex></p>
  
  <p>Thus, <Latex>$a\cdot r + b \cdot s = (d \cdot k) \cdot r + (d \cdot j) \cdot s$</Latex></p>
  
  <p><Latex>$ = d \cdot (k \cdot r) + (d \cdot j) \cdot s$</Latex> by <strong>assoc.</strong></p>
  
  <p><Latex>$ = d \cdot (k \cdot r) + d \cdot (j \cdot s)$</Latex> by <strong>assoc.</strong></p>
  
  <p><Latex>$ = d \cdot (k \cdot r + j \cdot s)$</Latex> by <strong>dist.</strong></p>
  
  <p>But <Latex>$k\cdot r + j \cdot s$</Latex> is an integer because of closure, thus <Latex>$\exists \, x \in \mathbb&#123;Z&#125; \;s.t.\; (a\cdot r + b \cdot s) = d \cdot x$</Latex>, namely <Latex>$x = k\cdot r + j\cdot s$</Latex>. Thus by <strong>defn. of "divides"</strong>, <Latex>$d \mid (a \cdot r + b \cdot s)$</Latex>, as required.</p>
</blockquote>

<h2 id="lemma-list" className="group flex">Lemma List&nbsp;<Link href="#lemma-list" onClick={() => copyToClipboard("https://wiki.danielc.rocks/maths/number-theory/FTA-proof/1-integer-axioms#lemma-list", true)} className="hidden group-hover:block text-primary">¶</Link></h2>

<p>Now for the list of lemmas that can be built up. To prevent circular reasoning, if lemma A is used to prove lemma B, then A will have a lower lemma number than B. Feel free to fill out the details of each proof (it's a good exercise!).</p>

<blockquote>
  <p><em>Lemma 1.</em> <Latex>$\forall a \in \mathbb&#123;Z&#125;, -(-a) = a$</Latex>  </p>
  
  <p><em>Proof outline.</em> <Latex>$a + (-a) = 0$</Latex> and <strong>uniqueness of +ive inv</strong>.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 2.</em> <Latex>$\forall a,b,c \in \mathbb&#123;Z&#125;, a=b \iff a+c=b+c$</Latex>  </p>
  
  <p><em>Proof outline.</em> Forward direction is immediate, backwards direction follows from adding <Latex>$-c$</Latex> to both sides.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 3.</em> <Latex>$-0 = 0$</Latex>  </p>
  
  <p><em>Proof outline.</em> Consider <Latex>$0 + -0$</Latex>, show it equals both <Latex>$-0$</Latex> and <Latex>$0$</Latex>.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 4.</em> If <Latex>$d \mid a, d \mid b$</Latex> then <Latex>$d \mid (a\cdot r+b \cdot s)$</Latex>  </p>
  
  <p><em>Proof outline.</em> We fully proved this in the last section.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 5.</em> <Latex>$0 \cdot a = a \cdot 0 = 0$</Latex>  </p>
  
  <p><em>Proof outline.</em> We fully proved this in the last section.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 6.</em> <Latex>$a\gt b,b \gt c \implies a \gt c$</Latex>  </p>
  
  <p><em>Proof outline.</em> If <Latex>$a \gt b,b \gt c$</Latex> then <Latex>$a-b$</Latex> and <Latex>$b-c$</Latex> are naturals by <strong>defn. of "<Latex>$\gt$</Latex>"</strong>. Thus <Latex>$(a-b)+(b-c)$</Latex> is natural by <strong>closure</strong>, which simplifies and implies the result.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 7.</em> <Latex>$-a = (-1)\cdot a$</Latex>  </p>
  
  <p><em>Proof outline.</em> By <strong>Lemma 2</strong>, <Latex>$0 = 0\cdot a$</Latex>, which equals <Latex>$(1+(-1))\cdot a = a + (-1)\cdot a$</Latex>. So <Latex>$0 = (-1)\cdot a + a$</Latex>. Add <Latex>$-a$</Latex> to both sides for the result.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 8.</em> <Latex>$a \gt 0 \iff a \in \mathbb&#123;N&#125;$</Latex>  </p>
  
  <p><em>Proof outline.</em> If <Latex>$a\gt 0$</Latex> then <Latex>$a-0 \in \mathbb&#123;N&#125;$</Latex> by <strong>defn of "<Latex>$\gt$</Latex>"</strong>. But <Latex>$a-0 = a+(-0) = a+0 = a$</Latex>, using <strong>Lemma 3</strong> and <strong>+ive id.</strong></p>
</blockquote>

<blockquote>
  <p><em>Lemma 9.</em> <Latex>$1 \in \mathbb&#123;N&#125;$</Latex>  </p>
  
  <p><em>Proof outline.</em> Use Trichotomy and eliminate the other two cases by contradiction.  </p>
  
  <p>If <Latex>$1=0$</Latex>, then since <strong><Latex>$\mathbb&#123;N&#125;$</Latex> is nonempty</strong>, pick a natural <Latex>$x$</Latex>, then we have <Latex>$x = 1\cdot x = 0 \cdot x = 0$</Latex> (by <strong>*ive id</strong>. and <strong>Lemma 5</strong>) So <Latex>$0$</Latex> is natural, which contradicts Trichotomy.  </p>
  
  <p>If <Latex>$-1$</Latex> is natural, then so is <Latex>$(-1)\cdot(-1)$</Latex> by <strong>closure</strong>, but <Latex>$(-1)\cdot (-1) = -(-1) = 1$</Latex> by <strong>Lemma 7</strong> and <strong>Lemma 1</strong>. So -1 and 1 are both natural, contradicting Trichotomy.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 10.</em> <Latex>$-(a-b) = b-a$</Latex>  </p>
  
  <p><em>Proof outline.</em> Use <strong>Lemma 7</strong> and <strong>Lemma 1</strong>: <Latex>$-(a-b) = (-1) \cdot (a-b)$</Latex>, which distributes to <Latex>$(-1) \cdot a + (-1) \cdot (-b)$</Latex>, which simplifies to <Latex>$-a + -(-b) = -a + b = b-a$</Latex>.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 11.</em> <Latex>$a\gt b \implies a+c\gt b+c$</Latex>  </p>
  
  <p><em>Proof outline.</em> Use <strong>Lemma 7</strong>, and <Latex>$a-b = (a+c)-(b+c)$</Latex>.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 12.</em> <Latex>$\forall a,b \in \mathbb&#123;N&#125;, c \in \mathbb&#123;Z&#125;$</Latex>, if <Latex>$a=b\cdot c$</Latex> then <Latex>$c \in \mathbb&#123;N&#125;$</Latex>  </p>
  
  <p><em>Proof outline.</em> Use Trichotomy.  </p>
  
  <p>If <Latex>$c=0$</Latex>, then <Latex>$a=0$</Latex> by <strong>Lemma 2</strong>, so <Latex>$0$</Latex> is natural, contradicting Trichotomy.  </p>
  
  <p>If <Latex>$-c \in \mathbb&#123;N&#125;$</Latex> then after applying <strong>Lemma 7</strong> (and basic axioms) we get that <Latex>$-a \in \mathbb&#123;N&#125;$</Latex>, contradicting Trichotomy.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 13.</em> <Latex>$a\lt b$</Latex> and <Latex>$c \lt 0 \implies a\cdot c \lt b \cdot c$</Latex>  </p>
  
  <p><em>Proof outline.</em> If <Latex>$a\lt b$</Latex> then <Latex>$b-a \in \mathbb&#123;N&#125;$</Latex> and so by <strong>Lemma 8</strong> and <strong>closure</strong>, <Latex>$(b-a)\cdot c \in \mathbb&#123;N&#125;$</Latex>. This can be rearranged to <Latex>$b\cdot c - (a \cdot c)$</Latex>, implying the result.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 14.</em> There are no integers strictly between <Latex>$0$</Latex> and <Latex>$1$</Latex>.  </p>
  
  <p><em>Proof outline.</em> Suppose there is an integer <Latex>$a$</Latex> between <Latex>$0$</Latex> and <Latex>$1$</Latex>. By <strong>Lemma 8</strong>, <Latex>$a \in \mathbb&#123;N&#125;$</Latex>, and so by the <strong>well-ordering principle</strong>, let <Latex>$e$</Latex> be the smallest such integer. More precisely, we are considering the set <Latex>$&#123;n \in \mathbb&#123;N&#125; \mid n \lt 1&#125;$</Latex>.  </p>
  
  <p>Now, <Latex>$e \cdot e \lt 1 \cdot e$</Latex> (<strong>Lemma 13</strong>) and so <Latex>$e \cdot e$</Latex> is a smaller element of the set, contradiction.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 15.</em> Exactly one of <Latex>$a\lt b, a=b, a\gt b$</Latex> is true.  </p>
  
  <p><em>Proof outline.</em> Trichotomy on <Latex>$a-b$</Latex>.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 16.</em> Exactly one of <Latex>$a\geq b, a\lt b$</Latex> is true.  </p>
  
  <p><em>Proof outline.</em> Follows from <strong>Lemma 15</strong>.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 17.</em> <Latex>$\forall a \in \mathbb&#123;Z&#125;,\; a \in \mathbb&#123;N&#125; \iff a \geq 1$</Latex>  </p>
  
  <p><em>Proof outline.</em> Forward direction: suppose <Latex>$a \in \mathbb&#123;N&#125;$</Latex> is true and <Latex>$a \geq 1$</Latex> is false, we will show a contradiction. By <strong>Lemma 16</strong>, we have <Latex>$a\lt 1$</Latex>. But also <Latex>$a\gt 0$</Latex> by <strong>Lemma 8</strong> so a is an integer strictly between <Latex>$0$</Latex> and <Latex>$1$</Latex>, contradicting <strong>Lemma 14</strong>.  </p>
  
  <p>Backward direction: suppose <Latex>$a \geq 1$</Latex>, then <Latex>$a\gt 1$</Latex> or <Latex>$a=1$</Latex>. If <Latex>$a=1$</Latex> then <strong>Lemma 9</strong> finishes. If <Latex>$a \gt 1$</Latex> then since <Latex>$1 \in \mathbb&#123;N&#125;$</Latex> (<strong>Lemma 9</strong>), we have <Latex>$1\gt 0$</Latex> (<strong>Lemma 8</strong>), so <Latex>$a \gt 1, 1 \gt 0$</Latex>, so <Latex>$a\gt 0$</Latex> (<strong>Lemma 3</strong>), then <strong>Lemma 8</strong> to finish.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 18.</em> <Latex>$a \geq b \iff a \gt b-1$</Latex>  </p>
  
  <p><em>Proof outline.</em> <br />
     - Forward direction: <br />
  First case: if <Latex>$a\gt b$</Latex> then <Latex>$a-b \in \mathbb&#123;N&#125;$</Latex>, thus so is <Latex>$(a-b)+1$</Latex> by <strong>Lemma 9</strong> and <strong>Closure</strong>. This can be rewritten as <Latex>$a-(b-1)$</Latex>, which implies the result by <strong>defn. of "<Latex>$\gt$</Latex>"</strong>. <br />
  Second case: if <Latex>$a=b$</Latex>, then by <strong>Lemma 9</strong>, <Latex>$0+1 \in \mathbb&#123;N&#125;$</Latex>, which equals <Latex>$b-(b-1)$</Latex>, and so <Latex>$b\gt b-1$</Latex>. Substitue for the result.
      - Backward direction: <br />
  If <Latex>$a\gt b-1$</Latex>, then <Latex>$a-(b-1) \in \mathbb&#123;N&#125;$</Latex>, which can be rearranged to <Latex>$1-(b-a)$</Latex>, so <Latex>$b-a\lt 1$</Latex>. I claim that <Latex>$a \geq b$</Latex>, because if not then we get a contradiction by <strong>Lemma 16</strong>: under contradictive assumption, <Latex>$a\lt b$</Latex> so <Latex>$0 \lt b-a$</Latex> (<strong>Lemma 8</strong>), so <Latex>$b-a$</Latex> is an integer strictly between <Latex>$0$</Latex> and <Latex>$1$</Latex>, contradicting <strong>Lemma 14</strong>.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 19.</em> <Latex>$\forall m,n \in \mathbb&#123;N&#125;, m \mid n \implies m \leq n$</Latex>  </p>
  
  <p><em>Proof outline.</em> Write <Latex>$n = m \cdot k$</Latex> and show that <Latex>$k \geq 1$</Latex>; thus <Latex>$k=1$</Latex> or <Latex>$1\lt k$</Latex> and we can multiply both sides of the inequality by <Latex>$m$</Latex> (<strong>Lemma 13</strong>) which gives the result. We can show that <Latex>$k \geq 1$</Latex> because otherwise, <Latex>$k \lt 1$</Latex> (<strong>Lemma 16</strong>) and so <Latex>$k \in \mathbb&#123;N&#125;$</Latex> with <Latex>$k \lt 1$</Latex> (<strong>Lemma 12</strong>). This gives a contradiction by <strong>Lemma 8</strong> and <strong>Lemma 14</strong>.</p>
</blockquote>

<blockquote>
  <p><em>Lemma 20.</em> <Latex>$\forall n,x \in \mathbb&#123;N&#125;$</Latex>, if <Latex>$n = x \cdot n$</Latex> then <Latex>$x = 1$</Latex></p>
  
  <p><em>Proof outline.</em> First note that we can't appeal to uniqueness of the multiplicative inverse, because <Latex>$n$</Latex> is fixed. So suppose <Latex>$x \neq 1$</Latex>, we'll show a contradiction. <br />
  <Latex>$x \in \mathbb&#123;N&#125; \implies x \gt 1$</Latex> (<strong>Lemma 17</strong> and <strong>defn. of "<Latex>$\geq$</Latex>"</strong>), and so <Latex>$1 \cdot n \lt x \cdot n$</Latex> (<strong>defn. of "<Latex>$\lt$</Latex>"</strong> and <strong>Lemma 13</strong>), so <Latex>$n \lt n$</Latex>, so <Latex>$n -n \in \mathbb&#123;N&#125;$</Latex>, so <Latex>$0 \in \mathbb&#123;N&#125;$</Latex>, contradicting <strong>Trichotomy</strong>.</p>
</blockquote>

<p>Phew, that was a lot of lemmas! But I hope you agree they're all very fundamental.</p>

<p>In the next part, we'll look at proving our first important theorem - the division algorithm.</p>

<div className="footnotes">
<hr />
<ol>
<li id="fn-2">
<p>I'm gonna skip over the whole "is 0 a natural number" thing.&#160;<a href="#fnref-2" className="footnoteBackLink" title="Jump back to footnote 1 in the text.">&#8617;</a></p>
</li>

<li id="fn-1">
<p>These six properties come from the fact that <Latex>$\mathbb&#123;Z&#125;$</Latex> is a <DiscreetLink href="https://mathworld.wolfram.com/Ring.html">ring (mathematical structure)</DiscreetLink>.&#160;<a href="#fnref-1" className="footnoteBackLink" title="Jump back to footnote 2 in the text.">&#8617;</a></p>
</li>

<li id="fn-3">
<p>The well-ordering principle is actually <DiscreetLink href="https://proofwiki.org/wiki/Equivalence_of_Well-Ordering_Principle_and_Induction">equivalent to induction</DiscreetLink>!&#160;<a href="#fnref-3" className="footnoteBackLink" title="Jump back to footnote 3 in the text.">&#8617;</a></p>
</li>
</ol>
</div>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths/number-theory/FTA-proof">
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
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#axioms-as-properties" className="text-primary">Axioms as Properties</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#how-deep-do-we-go" className="text-primary">How deep do we go?</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#basic-properties" className="text-primary">Basic properties</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#uniqueness-theorems" className="text-primary">Uniqueness Theorems</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#ordering-of-z" className="text-primary">Ordering of Z</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#definitions" className="text-primary">Definitions</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#structuring-logic-building-lemmas" className="text-primary">Structuring logic, building lemmas</Link></li>
                    
                        <li className="pt-2 list-inside list-disc"><Link href="#lemma-list" className="text-primary">Lemma List</Link></li>
                    
                </ul>
            </div>
        </nav>
    
</div>
                </>
        </Layout>
    )
}
    