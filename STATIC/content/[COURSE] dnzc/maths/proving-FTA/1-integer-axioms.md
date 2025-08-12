---
modified: 19/12/2024 11:00
created: 25/07/2023 17:00
pagename: 1. Integer Axioms
tags:
  - "number-theory pink"
  - "pedantic yellow"
---
# Developing the Axioms

**tl;dr:** A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.

This is part 1, where we develop the basic axioms of the integers and some definitions. In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.

## Axioms as Properties

Over the integers, we need a set of reduced axioms from which all the known theorems can be derived using the rules of logical inference. *Reduced* meaning that if an axiom can be proven using other axioms, then it should not be an axiom. And philosophically, our axioms should be as simple as possible. The modern approach to axiomatic proof is for our list of axioms to be the *properties* that we want our system to have; but, it's not clear what these fundamental properties of the integers should be.

For example, it is well known that if a prime divides a product, then it divides one of the constituents (<DiscreetLink href="https://en.wikipedia.org/wiki/Euclid%27s_lemma">Euclid's Lemma</DiscreetLink>). Should this be one of our fundamental properties? It certainly feels "obvious", in the sense that proving it would not get you any extra points on an olympiad question. But does it follow from some other fundamental properties? How do you even *define* prime? In my experience, people often try to justify Euclid's lemma by using prime factorization. The problem with this is that it feels *backwards* - the fact that every integer can be uniquely prime factorized is an extremely powerful result (hence the name **fundamental theorem of arithmetic** (FTA)), and so using it feels like overkill and may even be circular reasoning.

We *could* have FTA as an axiom. But if we can prove it from simpler axioms, then why bother?

## How deep do we go?

At some point, we need to stop our search for rigor - otherwise we will get too far out of the math world and into philosophy. For example, what does it mean for two things to be equal? And so, we will *assume* some basic notions:

- Equality is reflexive ($a=a$), symmetric ($a=b$ means $b=a$) and transitive (if $a=b$ and $b=c$ then $a=c$)
- If $a=b$ then we may substitute $a$ for $b$ and vice versa, in any expression containing them
- Properties of logic and basic set theory
- Order of operations

## Basic properties

We are working with the integers (whole numbers, $\mathbb{Z}$) and naturals (positive whole numbers, $\mathbb{N}$), under two basic operations: addition and multiplication ($+, \cdot$). More technically, it is an underlying assumption that $\mathbb{Z}$ is *closed* under two well-defined binary operations $+, \cdot$, i.e. that adding or multiplying two integers always gives an integer. (This is not the case for division!)

Let's add the first items to our "inventory" of fundamental properties[^1].

[^1]: These six properties come from the fact that $\mathbb{Z}$ is a <DiscreetLink href="https://mathworld.wolfram.com/Ring.html">ring (mathematical structure)</DiscreetLink>.

- **Commutativity**: the order of multiplication and addition does not matter. In symbols:
$$\forall a,b \in \mathbb{Z}, \; a \cdot b = b \cdot a, \; a+b=b+a$$

- **Associativity**: in repeated addition or multiplication, the brackets do not matter. In symbols:
$$\forall a,b,c \in \mathbb{Z}, \; (a \cdot b) \cdot c = a \cdot (b \cdot c),$$
$$(a+b)+c = a+(b+c)$$

- **Distributivity**: multiplication is distributive over addition. In symbols:
$$\forall a,b,c \in \mathbb{Z}, \; a\cdot(b+c) = a\cdot b + a \cdot c$$

I hope you agree that these properties seem pretty fundamental. Let's add some more:

- **Additive Identity**: there exists an integer we call $0$, which when added to any integer, does nothing:
$$\exists \, 0 \in \mathbb{Z} \; s.t. \; \forall a \in \mathbb{Z}, a+0=a$$

- **Additive Inverse**: for every integer $a$, there is another integer that when added to $a$, gives 0.
$$\forall a \in \mathbb{Z}, \exists \, a' \in \mathbb{Z} \; s.t.\;  a + a' = 0$$

- **Multiplicative Identity**: there exists an integer we call $1$, which when multiplying by any integer, does nothing:
$$\exists \, 1 \in \mathbb{Z} \; s.t. \; \forall a \in \mathbb{Z}, a\cdot 1=a$$

Note that we *don't* have multiplicative inverses, because then we would have to include reciprocals of integers.

Furthermore, we can use the commutative property to extend some of the above axioms:

- Distributivity: As well as $a \cdot (b+c) = a\cdot b + a \cdot c$, we also have $(b+c)\cdot a = b \cdot a + c \cdot a $
- Additive identity: $a+0 = 0+a = 0$ instead of just $a+0=a$
- Additive inverse: $a+a'=a'+a=0$ instead of just $a+a'=0$
- Multiplicative identity: $a\cdot 1 = 1 \cdot a = a$ instead of just $a \cdot 1 = a$

If we don't do this then whenever we cite these axioms, we would have to remember the way round we wrote it, which is utter hell.

## Uniqueness

We haven't explicitly stated that 0 (the additive identity), 1 (the multiplicative identity) and additive inverses are unique.
Again, this feels intuitive - if a+b = a, then b=0, right? And -1 is *the* additive inverse of 1, right? Maybe we should add uniqueness as an axiom. 

Actually, we can prove it from what we already have. I encourage you to try and do so.

<Thm type="Claim">
$0$ is unique, i.e. the only additive identity of $\mathbb{Z}$.
<Proof>
Suppose that $0$ and $0'$ are two additive identities of $\mathbb{Z}$. We will show that $0' = 0$.

Note that $0 + 0' = 0$, by **+ive id.**

But also $0 + 0' = 0'$, by **+ive id.**

Thus $0 = 0 + 0' = 0'$, so $0 = 0'$, as required.
</Proof>
</Thm>

The proof for the uniqueness of $1$ is completely analogous, so it is left to the reader.

<Thm type="Claim">
Additive inverses are unique.
<Proof>
Let $a$ be an arbitrary integer. Let $b,c$ be two additive inverses of a. We will show that $b = c$.

Consider $(a+b)+c$.

One one hand:

$(a+b)+c = 0+c$ by **+ive inv.**

$= c$ by **+ive id.**

On the other hand:

$(a+b)+c = a+(b+c)$ by **assoc.**

$=a+(c+b)$ by **comm.**

$=(a+c)+b$ by **assoc.**

$ = 0+b$ by **+ive inv.**

$= b$ by **+ive id.**

Thus, $b = (a+b)+c = c$, so $b=c$, as required.
</Proof>
</Thm>

Now we can introduce *negative signs* as the way to refer an integer's unique additive inverse: for each integer $n$, we denote its unique additive inverse as $-n$. Then, we can define $a-b$ to be shorthand for $a+(-b)$, which is a nice way to avoid having to define subtraction as another operation.

## Ordering of Z

What we have so far is good, but we need more. For example we haven't axiomatized the naturals yet, and what about proof techniques?

- **Z is ordered**: There exists a *non-empty* subset $\mathbb{N}$ of $\mathbb{Z}$ that is *closed* under $+,\cdot$ and satisfies *Trichotomy*: for all $a \in \mathbb{Z}$, exactly one of $a \in \mathbb{N}, a=0, -a \in \mathbb{N}$ is true[^2].
- **Well-ordering principle**: Every non-empty subset of the integers has a *least element*, defined as an element $e$ of the subset such that for all elements $x$ of the subset, $e\leq x$.

The importance of the well-ordering principle[^3] cannot be understated, because it will let us finish off proofs by assuming minimality and showing a contradiction (i.e. infinite descent).

[^2]: I'm gonna skip over the whole "is 0 a natural number" thing.

[^3]: The well-ordering principle is actually <DiscreetLink href="https://proofwiki.org/wiki/Equivalence_of_Well-Ordering_Principle_and_Induction">equivalent to induction</DiscreetLink>!

## Definitions

Let's make a list of things we'll probably need to explicitly define if we want to have hope of proving FTA:

- divisibility and primality
- inequalities, notion of positive/negative
- common divisors, gcd and lcm (greatest common divisor, lowest common multiple)

So, let's try to define these rigorously.

<Defn>
Let $a,b,c,p \in \mathbb{Z}$.

- **$a \mid b$** ("a divides b", "b is divisible by a") if and only if (*"iff"*) $\exists k \in \mathbb{Z} \; s.t. \; b = a \cdot k$. Then $a$ is a "factor" or "divisor" of $b$ and $b$ is a "multiple" of $a$.

- **$a-b$** is shorthand for $a + -b$.

- **$a \gt b$** iff $a-b \in \mathbb{N}$.

- **$a \lt b$** iff $b \gt a$.

- **$a \geq b$** iff $a \gt b$ or $a=b$.

- **$a \leq b$** iff $b \geq a$.

- **$a \gt b \gt c$** iff $a \gt b$ and $b \gt c$; in this case $b$ is "strictly between" $a$ and $c$. Vice versa for $a \lt b \lt c$.
- $a$ is **positive** iff $a \gt 0$, and "negative" iff $a \lt 0$.

- $p$ is **prime** iff for all ways of writing $p = u \cdot v$ with $u,v \in \mathbb{Z}$, exactly one of $u,v$ is 1 or -1.

- $a$ is a **gcd** of $b,c$ if for all common divisors $a'$ of $b,c$, $a \geq a'$.

- $a$ is a **lcm** of $b,c$ if for all common multiples $a'$ of $b,c$, $a \leq a'$
</Defn>

Note: in the definition of prime, mathematicians like to define another thing called a *unit*, which is a factor of 1; in the case of the integers, the only factors of 1 are 1 and -1 (<DiscreetLink href="https://math.stackexchange.com/questions/1031174/prove-1-and-1-are-the-only-units-in-mathbbz">why?</DiscreetLink>).

Also, for the sake of brevity, we will skip the proofs that gcds and lcms *exist and are unique*, and that *all common divisors divide the greatest common divisor* (left as an exercise). Thus we can refer to the unique gcd of $a,b$ as $gcd(a,b)$ or $(a,b)$, and the unique lcm of $a,b$ as $lcm(a,b)$ or $[a,b]$.

## Structuring logic, building lemmas

So, what's the point of all these axioms and definitions? It means we can start to inch towards our goal by building lemmas. For example:

<Lemma>
$\forall a \in \mathbb{Z}, \; 0 \cdot a = a \cdot 0 = 0$.
<Proof>
Let $a$ be an arbitrary integer.

$0 \cdot a = (0 + 0) \cdot a$ by **+ive id.**

$ = 0 \cdot a + 0 \cdot a$ by **dist.**

Thus, $(0 \cdot a) + -(0 \cdot a) = (0 \cdot a + 0 \cdot a) + -(0 \cdot a)$

The left hand side equals $0$, by **+ive inv.**

The right hand side is:

$(0 \cdot a + 0 \cdot a) + -(0 \cdot a)$

$= 0 \cdot a + (0 \cdot a + -(0 \cdot a))$ by **assoc.**

$= 0 \cdot a + 0$ by **+ive inv.**

$= 0 \cdot a$ by **+ive id.**

Therefore, equating the RHS and LHS, we obtain $0 = 0\cdot a$. Thus by **comm.**, $0 \cdot a = a \cdot 0 = 0$, as required.
</Proof>
</Lemma>

Wow, that seemed tedious! But the point is, even though the fact that 0 times anything is 0 seems fundamental, we don't actually need it as an axiom, because we can prove it from the axioms we already have.

I will give one more lemma with full proof, so that you get the idea (referring to axioms at each step, etc). Then, I'll give the list of lemmas that can be built up, and the main ideas for how to prove them, but not the complete proofs.

<Lemma>
In $Z$, if $d \mid a, d\mid b$ then $d \mid (a \cdot r+b \cdot s)$ for any $r,s \in \mathbb{Z}$
<Proof> Suppose $d \mid a, d \mid b$. Let $r,s \in \mathbb{Z}$, we will show that $d \mid (a\cdot r+b\cdot s)$.

$d \mid a \implies a = d \cdot k$ for some $k \in \mathbb{Z}$

And, $d \mid b \implies b = d \cdot j$ for some $j \in \mathbb{Z}$

Thus, $a\cdot r + b \cdot s = (d \cdot k) \cdot r + (d \cdot j) \cdot s$

$ = d \cdot (k \cdot r) + (d \cdot j) \cdot s$ by **assoc.**

$ = d \cdot (k \cdot r) + d \cdot (j \cdot s)$ by **assoc.**

$ = d \cdot (k \cdot r + j \cdot s)$ by **dist.**

But $k\cdot r + j \cdot s$ is an integer because of closure, thus $\exists \, x \in \mathbb{Z} \;s.t.\; (a\cdot r + b \cdot s) = d \cdot x$, namely $x = k\cdot r + j\cdot s$. Thus by **defn. of "divides"**, $d \mid (a \cdot r + b \cdot s)$, as required.</Proof>
</Lemma>

## Lemma List

Now for the list of lemmas that can be built up. To prevent circular reasoning, if lemma A is used to prove lemma B, then A will have a lower lemma number than B. Feel free to fill out the details of each proof (it's a good exercise!).

<Lemma num="1">
$\forall a \in \mathbb{Z}, -(-a) = a$  
<Proof>
Follows from $a + (-a) = 0$ and **uniqueness of +ive inv**.
</Proof>
</Lemma>

<Lemma num="2">
$\forall a,b,c \in \mathbb{Z}, a=b \iff a+c=b+c$  
<Proof>
Forward direction is immediate, backwards direction follows from adding $-c$ to both sides.
</Proof>
</Lemma>

<Lemma num="3">
$-0 = 0$  
<Proof>
Consider $0 + -0$; it equals both $-0$ and $0$.
</Proof>
</Lemma>

<Lemma num="4">
If $d \mid a, d \mid b$ then $d \mid (a\cdot r+b \cdot s)$  
<Proof>
See above.
</Proof>
</Lemma>

<Lemma num="5">
$0 \cdot a = a \cdot 0 = 0$  
<Proof>
See above.
</Proof>
</Lemma>

<Lemma num="6">
$a\gt b,b \gt c \implies a \gt c$  
<Proof>
If $a \gt b,b \gt c$ then $a-b$ and $b-c$ are naturals by **defn. of "$\gt$"**. Thus $(a-b)+(b-c)$ is natural by **closure**, which simplifies and implies the result.
</Proof>
</Lemma>

<Lemma num="7">
$-a = (-1)\cdot a$  
<Proof> By **Lemma 2**, $0 = 0\cdot a$, which equals $(1+(-1))\cdot a = a + (-1)\cdot a$. So $0 = (-1)\cdot a + a$. Add $-a$ to both sides for the result.
</Proof>
</Lemma>

<Lemma num="8">
$a \gt 0 \iff a \in \mathbb{N}$  
<Proof> If $a\gt 0$ then $a-0 \in \mathbb{N}$ by **defn of "$\gt$"**. But $a-0 = a+(-0) = a+0 = a$, using **Lemma 3** and **+ive id.**
</Proof>
</Lemma>

<Lemma num="9">
$1 \in \mathbb{N}$  
<Proof> Use Trichotomy and eliminate the other two cases by contradiction.  

If $1=0$, then since **$\mathbb{N}$ is nonempty**, pick a natural $x$, then we have $x = 1\cdot x = 0 \cdot x = 0$ (by ***ive id**. and **Lemma 5**) So $0$ is natural, which contradicts Trichotomy.  

If $-1$ is natural, then so is $(-1)\cdot(-1)$ by **closure**, but $(-1)\cdot (-1) = -(-1) = 1$ by **Lemma 7** and **Lemma 1**. So -1 and 1 are both natural, contradicting Trichotomy.
</Proof>
</Lemma>

<Lemma num="10">
$-(a-b) = b-a$  
<Proof>
Use **Lemma 7** and **Lemma 1**:

$-(a-b) \\= (-1) \cdot (a-b) \\= (-1) \cdot a + (-1) \cdot (-b) \\= -a + -(-b) \\= -a + b \\= b-a$
</Proof>
</Lemma>

<Lemma num="11">
$a\gt b \implies a+c\gt b+c$  
<Proof> Follows from **Lemma 7**, and that $a-b = (a+c)-(b+c)$.
</Proof>
</Lemma>

<Lemma num="12">
$\forall a,b \in \mathbb{N}, c \in \mathbb{Z}$, if $a=b\cdot c$ then $c \in \mathbb{N}$  
<Proof> Use Trichotomy.  

If $c=0$, then $a=0$ by **Lemma 2**, so $0$ is natural, contradicting Trichotomy.  

If $-c \in \mathbb{N}$ then after applying **Lemma 7** (and basic axioms) we get that $-a \in \mathbb{N}$, contradicting Trichotomy.
</Proof>
</Lemma>

<Lemma num="13">
$a\lt b$ and $c \lt 0 \implies a\cdot c \lt b \cdot c$  
<Proof> If $a\lt b$ then $b-a \in \mathbb{N}$ and so by **Lemma 8** and **closure**, $(b-a)\cdot c \in \mathbb{N}$. This can be rearranged to $b\cdot c - (a \cdot c)$, implying the result.
</Proof>
</Lemma>

<Lemma num="14">
There are no integers strictly between $0$ and $1$.  
<Proof> Suppose there is an integer $a$ between $0$ and $1$. By **Lemma 8**, $a \in \mathbb{N}$, and so by the **well-ordering principle**, let $e$ be the smallest such integer. More precisely, we are considering the set $\{n \in \mathbb{N} \mid n \lt 1\}$.  

Now, $e \cdot e \lt 1 \cdot e$ (**Lemma 13**) and so $e \cdot e$ is a smaller element of the set, contradiction.
</Proof>
</Lemma>

<Lemma num="15">
Exactly one of $a\lt b, a=b, a\gt b$ is true.  
<Proof> Trichotomy on $a-b$.
</Proof>
</Lemma>

<Lemma num="16">
Exactly one of $a\geq b, a\lt b$ is true.  
<Proof> Follows from **Lemma 15**.
</Proof>
</Lemma>

<Lemma num="17">
$\forall a \in \mathbb{Z},\; a \in \mathbb{N} \iff a \geq 1$  
<Proof> Forward direction: suppose $a \in \mathbb{N}$ is true and $a \geq 1$ is false, we will show a contradiction. By **Lemma 16**, we have $a\lt 1$. But also $a\gt 0$ by **Lemma 8** so a is an integer strictly between $0$ and $1$, contradicting **Lemma 14**.  

Backward direction: suppose $a \geq 1$, then $a\gt 1$ or $a=1$. If $a=1$ then **Lemma 9** finishes. If $a \gt 1$ then since $1 \in \mathbb{N}$ (**Lemma 9**), we have $1\gt 0$ (**Lemma 8**), so $a \gt 1, 1 \gt 0$, so $a\gt 0$ (**Lemma 3**), then **Lemma 8** to finish.
</Proof>
</Lemma>

<Lemma num="18">
$a \geq b \iff a \gt b-1$  
<Proof> 
- Forward direction:  
    - First case: if $a\gt b$ then $a-b \in \mathbb{N}$, thus so is $(a-b)+1$ by **Lemma 9** and **Closure**. This can be rewritten as $a-(b-1)$, which implies the result by **defn. of "$\gt$"**.  
    - Second case: if $a=b$, then by **Lemma 9**, $0+1 \in \mathbb{N}$, which equals $b-(b-1)$, and so $b\gt b-1$. Substitue for the result.

- Backward direction: suppose $a\gt b-1$.
    - Then $a-(b-1) \in \mathbb{N}$, which can be rearranged to $1-(b-a)$, so $b-a\lt 1$.
    - We must have $a \geq b$, because if not, then by **Lemma 16** $a\lt b$ so $0 \lt b-a$ (**Lemma 8**) so $b-a$ is an integer strictly between $0$ and $1$, contradicting **Lemma 14**.
</Proof>
</Lemma>

<Lemma num="19">
$\forall m,n \in \mathbb{N}, m \mid n \implies m \leq n$  
<Proof> Write $n = m \cdot k$.

Note that $k \geq 1$; else we would have $k \lt 1$ (**Lemma 16**) and so $k \in \mathbb{N}$ with $k \lt 1$ (**Lemma 12**), so $0\lt k \lt 1$ (**Lemma 8**) contradicting **Lemma 14**.

Thus $k=1$ or $1\lt k$ and we can multiply both sides of the inequality by $m$ (**Lemma 13**) to deduce the result.
</Proof>
</Lemma>

<Lemma num="20">
$\forall n,x \in \mathbb{N}$, if $n = x \cdot n$ then $x = 1$
<Proof> First note that we can't appeal to uniqueness of the multiplicative inverse, because $n$ is fixed. So suppose $x \neq 1$, we'll show a contradiction.  

$x \in \mathbb{N} \implies x \gt 1$ (**Lemma 17** and **defn. of "$\geq$"**)

$\implies 1 \cdot n \lt x \cdot n$ (**defn. of "$\lt$"** and **Lemma 13**)

$\implies n \lt n$

So $n -n \in \mathbb{N}$, so $0 \in \mathbb{N}$, contradicting **Trichotomy**.
</Proof>
</Lemma>

Phew, that was a lot of lemmas! But I hope you agree they're all very fundamental.

In the next part, we'll look at proving our first important theorem - the division algorithm.