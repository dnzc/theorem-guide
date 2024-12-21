19/12/2024 10:00
# The Fundamental Theorem of Arithmetic: Our Journey's End

**tl;dr:** A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.

This is part 5, where we stand on what we've built from axioms so far, and finally prove the <DiscreetLink href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic">fundamental theorem of arithmetic</DiscreetLink> (technically, the generalized version). In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.

## Existence of a prime factorization

Armed with everything we've done so far, we're ready to prove that every integer greater than 1 can be uniquely written as a product of positive primes.

Intitively, we want to be able to use induction: if $n$ is prime we're done, and if it's not then $n = ab$ with $a,b \lt n$ - but by inductive hypothesis, $a$ and $b$ can both be written as a product of primes, thus $ab$ is a product of primes.

We can flip this to use the well-ordering principle, because I think it's nicer (and we haven't actually proved that induction works).

<Lemma>
Every integer greater than 1 is a prime or a product of positive primes.
<Proof>
Suppose not, we will show a contradiction.  

Then the set $\{n \in \mathbb{N} \mid n\gt 1$ and $n$ is not prime or a product of positive primes$\}$ is nonempty. But this set is also a subset of $\mathbb{N}$, by definition. Hence by the **well-ordering principle**, it has a least element, say $e$. Then $e \gt 1$ and $e$ is not prime of a product of positive primes.

Since $e$ is not prime, there exist integers $a,b$ such that $e = ab$ and $1 \lt a \leq b \lt n$.[^1]

Now, because $e$ is minimal, $a$ and $b$ must both be positive primes or a product of positive primes (else they would be in the set). Hence we can write $a = p_1 p_2\cdots p_k$ and $b = q_1 q_2\cdots q_j$ where these are all positive primes.

But, then $e = ab = (p_1p_2\cdots p_k)(q_1q_2\cdots q_j)$, thus $e$ is a product of positive primes, contradiction.
</Proof>
</Lemma>

[^1]: Proof: not prime and $>1$ means there is a factorization with neither being $\pm 1$.

## Uniqueness

So, we've shown that every integer greater than 1 can be factored into positive primes.

But can we show that it can be factored *in only one way* (up to permutation) ? This is where we need to use what we've built up (i.e. Euclid's Lemma).

Let's try using minimality again.

If there's an integer that has two distinct factorizations, then take the minimal example, use Euclid's Lemma to cancel a common prime factor from both factorizations to obtain a smaller example, and we have a contradiction.

<Thm name="Fundamental Theorem of Arithmetic" outofline>
Every integer greater than 1 can be factored into positive primes in exactly one way, up to permutations.
<Proof outofline>
First, note that we showed every integer greater than 1 can be factored into positive primes.

Suppose there is an integer greater than 1 with two distinct factorizations. Then the set of natural numbers greater than 1 with two distinct factorizations is nonempty, so by the **well-ordering principle**, the set has a least element, say $e$.  

Write $e = p_1 p_2 \cdots p_k = q_1 q_2 \cdots q_j$ as two distinct factorizations of $e$ (up to permutation).<br/>

Note that $k \gt 1$, else $e = p_1$ and $j=1$ (since a prime cannot have two prime factors) so $e = p_1 = q_1$ and the factorizations would be the same. Similarly $j \gt 1$.

Then, $p_1$ divides $q_1 \cdots q_j$, so by **Euclid's Lemma**, $p_1$ divides some $q_i$ [^2], say $q_n$. Without loss of generality (because of permutation), let $n = 1$. Since $q_1$ is prime, we have that $q_1 = p_1$.

Thus, we may cancel[^3] this common prime factor from both factorizations to obtain  

$$p_2 \cdots p_k = q_2 \cdots q_j$$

which are two distinct factorizations of an integer that is strictly smaller than $e$.

Also recall that $k \gt 1$ and $j \gt 1$, thus this new integer is bigger than 1. This contradicts the minimality of $e$, and we are done.
</Proof>
</Thm>

[^2]: We could do this more rigorously, but essentially $p_1 \mid q_1(q_2\cdots q_j) \implies p_1 \mid q_1$ or $p_1 \mid q_2q_3 \cdots q_j$, and so on. Have a go at proving this rigorously with the well-ordering principle (with $j$ fixed) if you want.

[^3]: Why can we cancel? We need to prove the lemma that if $ac = bc$, then $a = b$ (true for all $a,b,c \in \mathbb{Z}, c \neq 0$). But this is doable, because if $ac = bc$, then $c(a-b) = 0$, so $c=0$ or $a-b=0$, so $a=b$.


Woop woop, we've finally proved the fundamental theorem of arithmetic! To recap, our path to the proof was:

*Division algorithm => Bezout's lemma => Euclid's lemma => FTA*

Do you think you can remember it all?