---
created: 27/07/2023 11:00
pagename: 4. Euclid's Lemma
tags:
  - "number-theory pink"
---
# Proving Euclid's Lemma

**tl;dr:** A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.

This is part 4, where we use what we have so far to finally prove <DiscreetLink href="https://brilliant.org/wiki/bezouts-identity/">Euclid's Lemma</DiscreetLink> (technically, the generalized version). In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.

## What? It's... argh!

Ask anyone to prove this:

> If $2x$ is divisible by $3$, then so is $x$.

I bet that almost everyone would attempt to use prime factorization: "in the prime factorization of $2x$, there must be a 3. But 2 is a prime, thus the 3 must occur in the prime factorization of $x$."

Ok... but we're trying to prove prime factorization, so we can't use it!

Actually, we can do something smart in this case: if $3 \mid 2x$, then $3 \mid (3x - x)$. But $3 \mid 3x$, therefore $3 \mid x$, by Lemma 4 in part 1 (i.e. that if $a \mid b, a \mid c$ then $a$ divides any linear combination of $b$ and $c$). In other words, if $2x$ is divisible by 3 then so is $-2x$, therefore so is $-2x + 3x$.

Now ask them to prove the generalized version:

> If $a \mid bc$ and $gcd(a,b) = 1$, then $a \mid c$.

Here's where most people would *really* like to appeal to prime factorization: "the set of prime factors of b must be completely different to the set of prime factors of a, else they would share a common factor. So in the prime factorization of bc, removing the factorization of b will not affect any primes that divide a. So a divides c."

So, how do we prove this using only the things we've built out of axioms?

We can actually *generalize the trick* from before!

In the "if $3 \mid 2x$ then $3 \mid x$" case, the trick was to write 1 (the desired coefficient of $x$) as a *linear combination* of 2 and 3:

$$x = (3-2)x = 3x-2x$$

And this let us deduce that if $3 \mid 2x$, then $3 \mid 3x - 2x$ because both $3x$ and $2x$ are divisible by 3.

Let's try with a different pair of numbers.

> If $51 \mid 28x$, does $51 \mid x$ ?
>
> TRICK: Try to write 1 as a linear combination of 51 and 28. But we know we can do this, by Bezout's Lemma, which we proved in the last part! To find a concrete solution, use the magic box (see the last part if you are unfamiliar):
>
> ||    ||     || 1 || 1 || 4 || 1 || 1 || 2 ||
> || 0  ||  1  || 1 || 2 || 9 ||11 ||20 ||51 ||
> || 1  ||  0  || 1 || 1 || 5 || 6 ||11 ||28 ||
>
> So, $11 \cdot 51 - 20 \cdot 28 = 1$.
> Now to use the trick:
> $$x = (11 \cdot 51 - 20 \cdot 28)x$$
> $$ = 51 \cdot (11x) + 28x \cdot (-20)$$
>
> Hence, if $51 \mid 28x$, then $51 \mid x$, because we wrote $x$ as a linear combination of things that were divisible by 51.

I think we're ready to generalize now.

<Lemma type="Proposition">
If $a \mid bc$ and $gcd(a,b)=1$, then $a \mid c$. True in $\mathbb{Z}$.
<Proof>
Suppose $a \mid bc$ and $gcd(a,b) = 1$.  

Then by **Bezout's Lemma**, there exist integers $x,y$ such that $ax + by = 1$.

Hence, $c = (ax+by)c = a(cx) + y(bc)$.  

Since $a \mid bc$ and $a \mid a(cx)$, we have that $a \mid a(cx) + y(bc)$, so $a \mid c$, as required.
</Proof>
</Lemma>

Nice - surprisingly simple proof, right?

## The actual Euclid's Lemma

Actually, Euclid's Lemma states that if $p$ is a prime and $p \mid ab$ (where $a,b$ are two integers), then $p \mid a$ or $p \mid b$. But what we've already proved is pretty much a generalized version of this: the only extra thing we need to prove is that if $p$ doesn't divide $a$, then $gcd(p, a) = 1$. But this is true by definition of prime - if $gcd(p,a) > 1$ then $p$ has a factor that isn't $1$ or $p$ (namely, this factor is $gcd(p,a)$); contradiction.