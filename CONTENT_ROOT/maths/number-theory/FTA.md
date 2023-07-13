# Proving the Fundamental Theorem of Arithmetic

**tl;dr:** A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.

[See here](https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols) if you don't know what some of the mathematical symbols on this page mean.

## Axioms as Properties

Over the integers, we need a set of reduced axioms from which all the known theorems can be derived using the rules of logical inference. *Reduced* meaning that if an axiom can be proven using other axioms, then it should not be an axiom. The modern approach to axiomatic proof is for our list of axioms to be the *properties* that we want our system to have. But, it's not clear what these fundamental properties of the integers should be.

For example, it is well known that if a prime divides a product, then it divides one of the constituents ([Euclid's lemma](https://en.wikipedia.org/wiki/Euclid%27s_lemma)). Should this be one of our fundamental properties? It certainly feels "obvious", in the sense that proving it would not get you any extra points on an olympiad question. But does it follow from some other fundamental properties? How do you even *define* prime? From my experience, the naive often try to justify Euclid's lemma (and other divisibility theorems) by using prime factorization. The problem with this is that it feels *backwards* - the fact that every integer can be uniquely prime factorized is an extremely powerful result (hence the name **fundamental theorem of arithmetic** (FTA)), and so using it feels like overkill and may even be circular reasoning.

We *could* have FTA as an axiom. But if we can prove it from simpler axioms, then why bother?

## How deep do we go?

At some point, we need to stop our search for rigor - otherwise we will get too far out of the math world and into philosophy. For example, what does it mean for two things to be equal? And so, we will *assume* some basic notions:

- Equality is reflexive ($a=a$), symmetric ($a=b$ means $b=a$) and transitive (if $a=b$ and $b=c$ then $a=c$)
- If $a=b$ then we may substitute $a$ for $b$ and vice versa, in any expression containing them
- Order of operations
- Properties of logic and basic set theory

## Basic properties

We are working with the integers (whole numbers, $\mathbb{Z}$) and naturals (positive whole numbers, $\mathbb{N}$), under two basic operations: addition and multiplication ($+, \cdot$). More technically, it is an underlying assumption that $\mathbb{Z}$ is closed under two well-defined binary operations $+, \cdot$, i.e. that adding or multiplying two integers always gives an integer. (This is not the case for division!)

Let's add the first items to our "inventory" of fundamental properties.

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

These six properties can also be thought of coming from the fact that $\mathbb{Z}$ is a [ring](https://mathworld.wolfram.com/Ring.html).

Note that we *don't* have multiplicative inverses, because then we would have to include reciprocals of integers.

Furthermore, we can use the commutative property to extend some of the above axioms:

- Distributivity: As well as $a \cdot (b+c) = a\cdot b + a \cdot c$, we also have $(b+c)\cdot a = b \cdot a + c \cdot a $
- Additive identity: $a+0 = 0+a = 0$ instead of just $a+0=a$
- Additive inverse: $a+a'=a'+a=0$ instead of just $a+a'=0$
- Multiplicative identity: $a\cdot 1 = 1 \cdot a = a$ instead of just $a \cdot 1 = a$

If we don't do this then whenever we cite these axioms, we would have to remember the way round we wrote it, which is utter hell.

## Uniqueness Theorems

We haven't explicitly stated that 0, 1 and additive inverses are unique.
Again, this feels intuitive - if a+b = a, then b=0, right? And -1 is *the* additive inverse of 1, right? Maybe we should add uniqueness as an axiom. 

Actually, we can prove it from what we already have. I encourage you to try and do so.

> *Theorem.* $0$ is unique, i.e. the only additive identity of $\mathbb{Z}$.
>
> *Proof*.
> Suppose that $0$ and $0'$ are two additive identities of $\mathbb{Z}$. We will show that $0' = 0$.
> 
> Note that $0 + 0' = 0$, by **+ive id.**
>
> But also $0 + 0' = 0'$, by **+ive id.**
>
> Thus $0 = 0 + 0' = 0'$, so $0 = 0'$, as required.

The proof for the uniqueness of $1$ is completely analogous, so it is left to the reader.

> *Theorem.* Additive inverses are unique.
>
> *Proof*.
> Let $a$ be an arbitrary integer. Let $b,c$ be two additive inverses of a. We will show that $b = c$.
> 
> Consider $(a+b)+c$.
>
> One one hand:
>
> $(a+b)+c = 0+c$ by **+ive inv.**
>
> $= c$ by **+ive id.**
>
> On the other hand:
>
> $(a+b)+c = a+(b+c)$ by **assoc.**
>
> $=a+(c+b)$ by **comm.**
>
> $=(a+c)+b$ by **assoc.**
>
> $ = 0+b$ by **+ive inv.**
>
> $= b$ by **+ive id.**
>
> Thus, $b = (a+b)+c = c$, so $b=c$, as required.

Now we can introduce *negative signs* as the way to refer an integer's unique additive inverse: for each integer $n$, we denote its unique additive inverse as $-n$. Then, we can define $a-b$ to be shorthand for $a+(-b)$, which is a nice way to avoid having to define subtraction as another operation.

## Definitions