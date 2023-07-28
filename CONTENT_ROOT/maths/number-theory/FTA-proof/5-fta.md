# The Fundamental Theorem of Arithmetic: Our Journey's End

**tl;dr:** A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.

This is part 5, where we stand on what we've built from axioms so far, and finally prove the <DiscreetLink href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic">fundamental theorem of arithmetic</DiscreetLink> (technically, the generalized version). In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.

## Existence of a prime factorization

Armed with everything we've done so far, we're ready to prove that every integer greater than 1 can be written as a product of primes (or is prime). Note: this doesn't imply that factorizations are unique, but we'll prove this later.

Intitively, we want to be able to use induction: if $n$ is prime we're done, and if it's not then $n = ab$ with $a,b \lt n$ - but by inductive hypothesis, $a$ and $b$ can both be written as a product of primes, thus $ab$ is a product of primes.

We can flip this to use the well-ordering principle, because I think it's nicer (and we haven't actually proved that induction works).

> *Claim.* Every integer greater than 1 is a prime or a product of primes.
>
> *Proof.* Suppose not, we will show a contradiction.  
> Then the set $\{n \in \mathbb{N} \mid n\gt 1$ and $n$ is not prime or a product of primes $\}$ is nonempty. But this set is also a subset of $\mathbb{N}$, by definition. Hence by the **well-ordering principle**, it has a least element, say $e$. Then $e \gt 1$ and $e$ is not prime of a product of primes.
>
> Since $e$ is not prime, there exist integers $a,b$ such that $e = ab$ and $1 \lt a \leq b \lt n$.
>
> Now, becase $e$ is minimal, $a$ and $b$ must both be prime or a product of primes (else they would be in the set). Hence we can write $a = p_1p_2\cdots p_k$ and $b = q_1q_2\cdots q_j$ where these are all primes[^1].
>
>But, then $e = ab = (p_1p_2\cdots p_k)(q_1q_2\cdots q_j)$, thus $e$ is a product of primes, contradiction.

[^1]: You might object that the "$\cdots$" is not well-defined, since it's mentioned nowhere in our axioms. You'd be right!

But wait: there's a small problem here, can you spot it?

The problem is that, using our definition of prime, it's not entirely obvious that if $e$ is not prime then has a factor strictly between $1$ and $e$. This needs some justification - try to see if you can prove it. Recall that our defintion was:
> *p* is **"prime"** iff for all ways of writing $p = u \cdot v$ with $u,v \in \mathbb{Z}$, exactly one of $u,v$ is 1 or -1.

Here's the fix:
<Spoiler>

*Claim.* If $n \in \mathbb{N}$ is not prime, then $\exists a,b \in \mathbb{N}$ with $n = ab$ and $1 \lt a \lt n$ and $1 \lt b \lt n$.

*Proof.* Suppose $n \in \mathbb{N}$ is not prime, and that there do not exist $a,b \in \mathbb{N}$ with $n = ab$ and $1 \lt a \lt n$ and $1 \lt b \lt n$. We will show a contradiction.

Consider the set $S = \{(a,b) \in \mathbb{N}^2\mid n = ab\}$. Since $n = 1 \cdot n$, this set is nonempty.

Now take an arbitrary element $(x,y)$ of $S$. Then $n = xy$, so by assumption, it is not true that both $1 \lt x \lt n$ and $1 \lt y \lt n$.

> *Sub-claim:* $x = 1$ or $y = 1$  
> *Proof:* Suppose $x \neq 1$ and $y \neq 1$, we will show a contradiction. Then $1 \lt x$ and $1 \lt y$, by **Lemma 17** in part 1.  
> However, note that $x \leq n$ and $y \leq n$ (**Lemma 19**). But $x$ cannot be equal to $n$, else $y = 1$ (**Lemma 20**), and similarly $y \neq n$. Thus $x \lt n$ and $y \lt n$.  
> Hence overall, $1 \lt x \lt n$ and $1 \lt y \lt n$; contradiction.

Now by the sub-claim, for all elements $(x,y)$ of $S$, we have that $x = 1$ or $y = 1$. Hence $n$ is prime, by definition. Contradiction.

</Spoiler>

## Uniqueness

So, we've shown that every integer greater than 1 can be factored into primes.

But can we show that it can be factored *in only one way* (up to permutation) ?

Well we can try the same thing as above: use minimality.

If there's an integer that has two distinct factorizations, then take the minimal example, use Euclid's Lemma to cancel a common prime factor from both factorizations to obtain a smaller example, and we have a contradiction.

> *Claim.* Every integer greater than 1 can be factored into primes in exactly one way, up to permutations.
>
> *Proof.* First, note that we showed every integer  greater than 1 can be factored into primes.  
> Suppose there is an integer greater than 1 with two distinct factorizations. Then the set of natural numbers greater than 1 with two distinct factorizations is nonempty, so by the **well-ordering principle**, the set has a least element, say $e$.  
> Write $e = p_1 p_2 \cdots p_k = q_1 q_2 \cdots q_j$ as two distinct prime factorizations of $e$ (up to permutation). Note that $k \gt 1$, else $e = p_1$ and $j=1$ (since a prime cannot have two prime factors) so $e = p_1 = q_1$ and the factorizations would be the same. Similarly $j \gt 1$.
> Then, $p_1$ divides $q_1 \cdots q_j$, so by **Euclid's Lemma**, $p_1$ divides some $q_i$ [^2], say $q_n$. Without loss of generality (because of permutation), let $n = 1$.
> So, there exists some integer $x$ such that $q_1 = x \cdot p_1$ (by **defn. of "divides"**).  
> However, by **defn. of prime**, we have that $x = \pm 1$ (because $p_1 \neq \pm 1$).  
> By **Lemma 12**, $x \in \mathbb{N}$, and so $x = 1$ (**Lemma 9** and **Trichotomy**). So $q_1 = p_1$.
> Thus, we may cancel[^3] this common prime factor from both factorizations to obtain  
> $p_2 \cdots p_k = q_2 \cdots q_j$
Which are two distinct factorizations of an integer that is strictly smaller than $e$.
Also recall that $k \gt 1$ and $j \gt 1$, thus this new integer is bigger than 1. This contradicts the minimality of $e$, and we are done.

[^2]: We could do this more rigorously, but essentially $p_1 \mid q_1(q_2\cdots q_j) \implies p_1 \mid q_1$ or $p_1 \mid q_2q_3 \cdots q_j$, and so on. Have a go at proving this rigorously with the well-ordering principle (with $j$ fixed) if you want.

[^3]: Why can we cancel? We need to prove the lemma that if $ac = bc$, then $a = b$ (true for all $a,b,c \in \mathbb{Z}, c \neq 0$). But this is doable, because if $ac = bc$, then $c(a-b) = 0$, so $c=0$ or $a-b=0$, so $a=b$.


Woop woop, we've finally proved the fundamental theorem of arithmetic! To recap, our path to the proof was:

*Division algorithm => Bezout's lemma => Euclid's lemma => FTA*

Do you think you can remember it all?