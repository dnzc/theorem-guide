25/07/2023 17:00
# Discovering Division

**tl;dr:** A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.

This is part 2, where we use the rigorous foundation we developed in part 1 to establish the <DiscreetLink href="https://brilliant.org/wiki/division-algorithm/">division algorithm</DiscreetLink>. In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.

## Back to School

Children tend to get taught division as *repeated subtraction* - for example, 14 divided by 3 is 4 remainder 2, because:

$14 - 3 = 11$

$11 - 3 = 8$

$8 - 3 = 5$

$5 - 3 = 2$

And we stop because if we subtract again, the remainder becomes negative.
In particular, 2<3, and in general the remainder is always less than the divisor, because if it was at least as big then we could always subtract off another copy.

That would definitely be enough justification to any high schooler as to why the division algorithm works.[^1] But, how do we prove it from our axioms and lemmas that we've developed so far? How do we make infinite descent *rigorous*?

[^1]: Can you come up with an analogous division algorithm for the complex numbers? Can you prove that it works?

Let's first formalize the statement we want to prove:

> *Division Algorithm.* For any $a \in \mathbb{Z}, b \in \mathbb{N}$, there exist integers $q,r$ such that $a = bq + r$, and $0 \leq r \lt b$.

Now... how do we attempt a proof?

The key is the *well-ordering principle* that we introduced, stating that every non-empty subset of the naturals has a least element.

To use this, we can consider the set of all possible remainders, i.e. all the possible numbers we can obtain by starting with $a$ and adding or subtracting $b$. Then we can consider those remainders that are natural, and take the smallest element. If it's at least $b$, then we can subtract $b$ again to get a smaller element of the set, contradiction. In other words, "choose the smallest possible remainder, if it's at least $b$ then subtract $b$". Do you see how this is equivalent to the infinite descent argument?

> *Proof of the Division Algorithm.*
>
> Let $a$ be a fixed integer and $b$ be a fixed natural. Consider the set:
>
> $$S = \{n \in \mathbb{N} \mid n = a - bq + 1, q \in \mathbb{Z}\}$$
>
> Then S is a subset of the naturals. Furthermore, it is nonempty, because:
>
> - if $a \in \mathbb{N}$ or $a=0$, then when $q=0$, $n = a - b \cdot 0 + 1 = a+1$ which is natural and so it is an element of S.  
>
> - if $-a \in \mathbb{N}$, then when $q = -a$, $n = a-b(-a) + 1$ $ = (-a)(b-1) + 1$ which is natural since $(-a), (b-1)$ are nonnegative, and so it is an element of S.
>
> By Trichotomy, we considered all cases, thus S is always non-empty.
>
> Hence by the well-ordering principle, S has a least element (say $e$), occuring when $q = q_0$, so that $e = a - bq_0+1$.
>
> *Claim*: $e \leq b$
>
> *P.f.*: Suppose not, we will show a contradiction. Then $e\gt b$, so $e-b \in \mathbb{N}$ (**defn. "$\gt$"**). But $e-b = (a-bq_0+1)-b$ $ = a-b(q_0+1)+1$, and so $e-b \in S$. But $e-b \lt e$, contradicting the minimality of $e$.
>
> Now at last, letting $r = e-1$, we have $a = bq_0 + r$ (since $e = a-bq_0+1$). Since $0 \lt e \leq b$, we have $0 \leq r \lt b$, which is what we wanted, and we are done.

Note that I stopped writing the multiply symbol in between two letters, as per normal convention. Also, I stopped being as rigorous as in part 1 (for example writing "$a-bq+1$" instead of "$(a-bq)+1$" due to associativity), because I don't think anyone would want to read such a long tedious proof. BUT, it should be clear (if not monotonous) how to fill out this proof into one as rigorous as in part 1.

And that's it! We've now proved the division algorithm. High schoolers would be very impressed (not).