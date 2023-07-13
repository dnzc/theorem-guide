
import Layout from '../../../components/layout'
import Accordion from '../../../components/accordion'
import ProminentLink from '../../../components/prominentLink'
import DiscreetLink from '../../../components/discreetLink'
import Link from 'next/link'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import { FaChevronRight } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'


export default function Numbertheory () {
    return (
        <Layout>
            <div className="relative max-w-screen-xl flex h-full">
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
                                
                                    
                        
                            <Accordion title="FTA" href="/maths/number-theory/FTA" isFolder={false} isSelected={ true } />
                        
                    
                                
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
                
            </div>
        

        
            <p className="text-elevated mb-3">Last modified on 13 Jul 2023</p>
        

        <div className="article mb-4">
            <h1>Proving the Fundamental Theorem of Arithmetic</h1>

<p><strong>tl;dr:</strong> A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.</p>

<p><DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">See here</DiscreetLink> if you don't know what some of the mathematical symbols on this page mean.</p>

<h2>Axioms as Properties</h2>

<p>Over the integers, we need a set of reduced axioms from which all the known theorems can be derived using the rules of logical inference. <em>Reduced</em> meaning that if an axiom can be proven using other axioms, then it should not be an axiom. The modern approach to axiomatic proof is for our list of axioms to be the <em>properties</em> that we want our system to have. But, it's not clear what these fundamental properties of the integers should be.</p>

<p>For example, it is well known that if a prime divides a product, then it divides one of the constituents (<DiscreetLink href="https://en.wikipedia.org/wiki/Euclid%27s_lemma">Euclid's lemma</DiscreetLink>). Should this be one of our fundamental properties? It certainly feels "obvious", in the sense that proving it would not get you any extra points on an olympiad question. But does it follow from some other fundamental properties? How do you even <em>define</em> prime? From my experience, the naive often try to justify Euclid's lemma (and other divisibility theorems) by using prime factorization. The problem with this is that it feels <em>backwards</em> - the fact that every integer can be uniquely prime factorized is an extremely powerful result (hence the name <strong>fundamental theorem of arithmetic</strong> (FTA)), and so using it feels like overkill and may even be circular reasoning.</p>

<p>We <em>could</em> have FTA as an axiom. But if we can prove it from simpler axioms, then why bother?</p>

<h2>How deep do we go?</h2>

<p>At some point, we need to stop our search for rigor - otherwise we will get too far out of the math world and into philosophy. For example, what does it mean for two things to be equal? And so, we will <em>assume</em> some basic notions:</p>

<ul>
<li>Equality is reflexive (<Latex>$a=a$</Latex>), symmetric (<Latex>$a=b$</Latex> means <Latex>$b=a$</Latex>) and transitive (if <Latex>$a=b$</Latex> and <Latex>$b=c$</Latex> then <Latex>$a=c$</Latex>)</li>
<li>If <Latex>$a=b$</Latex> then we may substitute <Latex>$a$</Latex> for <Latex>$b$</Latex> and vice versa, in any expression containing them</li>
<li>Order of operations</li>
<li>Properties of logic and basic set theory</li>
</ul>

<h2>Basic properties</h2>

<p>We are working with the integers (whole numbers, <Latex>$\mathbb&#123;Z&#125;$</Latex>) and naturals (positive whole numbers, <Latex>$\mathbb&#123;N&#125;$</Latex>), under two basic operations: addition and multiplication (<Latex>$+, \cdot$</Latex>). More technically, it is an underlying assumption that <Latex>$\mathbb&#123;Z&#125;$</Latex> is closed under two well-defined binary operations <Latex>$+, \cdot$</Latex>, i.e. that adding or multiplying two integers always gives an integer. (This is not the case for division!)</p>

<p>Let's add the first items to our "inventory" of fundamental properties.</p>

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

<p>These six properties can also be thought of coming from the fact that <Latex>$\mathbb&#123;Z&#125;$</Latex> is a <DiscreetLink href="https://mathworld.wolfram.com/Ring.html">ring</DiscreetLink>.</p>

<p>Note that we <em>don't</em> have multiplicative inverses, because then we would have to include reciprocals of integers.</p>

<p>Furthermore, we can use the commutative property to extend some of the above axioms:</p>

<ul>
<li>Distributivity: As well as <Latex>$a \cdot (b+c) = a\cdot b + a \cdot c$</Latex>, we also have <Latex>$(b+c)\cdot a = b \cdot a + c \cdot a $</Latex></li>
<li>Additive identity: <Latex>$a+0 = 0+a = 0$</Latex> instead of just <Latex>$a+0=a$</Latex></li>
<li>Additive inverse: <Latex>$a+a'=a'+a=0$</Latex> instead of just <Latex>$a+a'=0$</Latex></li>
<li>Multiplicative identity: <Latex>$a\cdot 1 = 1 \cdot a = a$</Latex> instead of just <Latex>$a \cdot 1 = a$</Latex></li>
</ul>

<p>If we don't do this then whenever we cite these axioms, we would have to remember the way round we wrote it, which is utter hell.</p>

<h2>Uniqueness Theorems</h2>

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

<h2>Definitions</h2>

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths/number-theory">
                    <div className="flex items-center justify-center space-x-1 text-elevated">
                        <RiArrowGoBackFill/>
                        <p>up a level</p>
                    </div>
                </Link>
            </div>
        

    </article>
</div>
        </Layout>
    )
}
    