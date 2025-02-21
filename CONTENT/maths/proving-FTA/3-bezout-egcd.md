26/07/2023 17:00
[TAGS] number-theory pink, numerical blue
# Bezout's Lemma and the Extended Euclidean Algorithm: Linear Combinations

**tl;dr:** A journey from the ground up in which we use axioms to build a proof that every positive integer can be uniquely prime factored.

This is part 3, where we discover and prove <DiscreetLink href="https://brilliant.org/wiki/bezouts-identity/">Bezout's lemma</DiscreetLink> using the division algorithm. In general, the level of rigor will decrease as the parts go on, so that the reader doesn't get bored to death. But it should be obvious how to fill out everything with complete rigor. <DiscreetLink href="https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols">Here</DiscreetLink> is a glossary of math symbols.

## Puzzle: water-jug problem

You might have heard this one before:

> There are two water jugs A and B, of size 8 and 5 litres respectively. They have no markings, so it is impossible to tell how much water is in a jug unless it is completely full or completely empty. There is a sink with a water tap and a drain. How can exactly one litre of water be obtained from the tap using the two jugs?

It's a fun puzzle - definitely worth playing around with it before reading the solution below.

<Spoiler>
<Proof type="Solution" unquoted>

Let $(a,b)$ denote that there are $a$ litres in jug A, and $b$ litres in jug B.

$(0,0)$ -&gt; $(8,0)$ -&gt; $(3,5)$ -&gt; $(3,0)$ -&gt; $(0,3)$ -&gt; $(8,3)$ -&gt; $(6,5)$ -&gt; $(6,0)$ -&gt; $(1,5)$ -&gt; $(1,0)$
</Proof>
</Spoiler>

Now it's time for every mathematician's favourite question: can we generalize it?

We start in the state $(0,0)$ and want to end in the state $(1,0)$ (goal state)[^1]. Notice how **one jug must always be empty or full**, due to the rules of the question ("it is impossible to tell how much water is in a jug unless it is completely full or empty"). Therefore we can deduce that in a valid solution that uses as few operations as possible[^2], the total amount of water **only changes by 5 or 8**. This is because:

- transferring water from one jug to another does not change the total amount
- filling an empty jug will change the total amount by 5 or 8.
- filling a non-empty but non-full jug is pointless, because the other jug must be empty or full, thus we would obtain the state of both jugs full, or one jug full and one empty, which is backwards progress because those states can be easily reached from $(0,0)$ in 1 or 2 moves.
- filling a full jug does nothing

[^1]: There are technically two goal states: $(0,1)$ and $(1,0)$, but if we reach one of these then we can reach the other by transferring the water, so it doesn't really matter.
[^2]: This assumption is important, because it lets us deduce that we never fill a non-empty but non-full jug (as that would create unnecessary steps).

So now, we have traction on the problem: the total amount of water is initially 0, finally 1, and only changes by 5 or 8. In the general case of the jug capacities being $a$ and $b$, the total must start at 0, end at 1, and change by $a$ or $b$ at each step.

Therefore, if we can solve the problem then *we must be able to write 1 as a linear combination of $a$ and $b$*, i.e. we must be able to find integers $x,y$ such that $ax + by = 1$, because multiplication is repeated addition.

In the case of 5 and 8, we can write $1 = 8 \cdot 2 - 5 \cdot 3$, i.e. $1 = 8 + 8 - 5 - 5 - 5$.

And so, we've motivated the main question:

> Given integers $a,b$, do there exist integers $x,y$ such that $ax+by=1$?

If there do not, then the puzzle can't be solved.[^3]

[^3]: This is the contrapositive statement of "if the puzzle can be solved, then there do exist integers...".

## Numerical Evidence

The first thing we might note is that, $ax+by$ will always by divisible by $gcd(a,b)$, no matter what integers $x$ and $y$ we choose (see Lemma 5 in part 1). For example if $a$ is even (divisible by 2) and $b$ is even, then $ax$ and $by$ will both be even, so $ax+by$ will be even.

Therefore, if we want $ax+by$ to equal 1, we need $gcd(a,b)$ to be 1, i.e. $a$ and $b$ share no common factors (are "**coprime**").

Now what if they *are* coprime, say, a=5 and b=8?

The key is to write 8 = 5+3. Then a linear combination as 8 and 5 can be rewritten as a linear combination of 3 and 5, and vice versa. Because $8\cdot x + 5 \cdot y$ $= (3 + 5) \cdot x + 5 \cdot y$ $= 3 \cdot x + 5 \cdot (x+y)$. Similarly, a linear combination of 3 and 5 can be transformed into a combination of 3 and 2, which can be transformed into a combination of 1 and 2. But we can always write 1 as a linear combination of 1 and 2, i.e. $1 = 1\cdot 1 + 2\cdot 0$. So theoretically, we should be able to "undo" our sequence of transformations to get back to the combination of 5 and 8!

Let's try:

> $$1 = 1\cdot 1 + 2\cdot 0$$
> $$ = (3-2)\cdot 1 + 2\cdot 0$$
> $$ = 3\cdot 1 + 2\cdot (0-1)$$
> $$ = 3\cdot 1 + (5-3)\cdot (-1)$$
> $$ = 3\cdot (1+1) + 5\cdot (-1)$$
> $$ = (8-5)\cdot 2 + 5\cdot (-1)$$
> $$ = 8\cdot 2 + 5\cdot (-1-2)$$
> $$ = 8\cdot 2 - 5\cdot 3$$

Which is a linear combination of 5 and 8!

Now what about $a=155$ and $b=27$?

Let's do the same thing. Note that a linear combination of 155 and 27 is a linear combination of (27*5 + 20) and 27, which is a linear combination of 20 and 27 because $155x + 27y$ $ = (27\cdot 5 + 20)x + 27y$ $= 27(5x+y) + 20x$. And so on, this is a linear combination of 7 and 20, which is a combination of 7 and 6 (because 20 divided by 7 has remainder 6), which is a combination of 7-6=1 and 6. We've hit 1, so we can start building up the desired combination by going backwards.

> $$1 = 1\cdot 1 + 6\cdot 0$$
> $$ = (7-6)\cdot 1 + 6\cdot 0$$
> $$ = 7\cdot 1 + 6\cdot (0-1)$$
> $$ = 7\cdot 1 + (20-2\cdot 7)\cdot (-1)$$
> $$ = 7\cdot (1+2\cdot 1) + 20\cdot (-1)$$
> $$ = (27-20)\cdot 3 + 20\cdot (-1)$$
> $$ = 27\cdot 3 + 20\cdot (-1-3)$$
> $$ = 27\cdot 3 + (155-5\cdot 27)\cdot (-4)$$
> $$ = 27\cdot (3+5\cdot 4) + (155\cdot (-4)$$
> $$ = 27\cdot 23 - 155\cdot 4$$

Are you starting to get the idea? Let's do one more example (I also strongly recommend trying some on your own). This time, we'll write out the divisions that we're doing at the start, as well as the reconstruction steps.

> *$a = 259, b = 443$*
>
> First, our division steps that "reduce" the problem:
>
> $$443 = 259 \cdot 1 + 184 \text{, new pair is (259,184)}$$
>
> $$259 = 184 \cdot 1 + 75 \text{, new pair is (184,75)}$$
>
> $$184 = 75 \cdot 2 + 34 \text{, new pair is (75,34)}$$
>
> $$75 = 34 \cdot 2 + 7 \text{, new pair is (34,7)}$$
>
> $$34 = 7 \cdot 4 + 6 \text{, new pair is (7,6)}$$
>
> $$7 = 6 \cdot 1 + 1 \text{, new pair is (6,1)}$$
>
> $$6 = 1 \cdot 6 + 0 \text{, new pair is (1,0)}$$
>
> We stop once we hit (1,0). Now, $1 = 1\cdot 1 - 0\cdot 0$ so we can start reconstructing, by travelling back up the list of divisions.
>
> $$1 = 1\cdot 1 - 0 \cdot 0$$
>
> $$ = 1\cdot 1 - (6 - 1\cdot 6) \cdot 0 \text{ (see last line of the division list)}$$
>
> $$ = 1\cdot (1+6\cdot 0) - 6 \cdot 0$$
>
> $$ = (7-6 \cdot 1)\cdot 1 - 6 \cdot 0 \text{ (see penultimate line)}$$
>
> $$ = 7\cdot 1 - 6 \cdot (0+1\cdot 1)$$
>
> $$ = 7\cdot 1 - (34 - 7 \cdot 4) \cdot 1 \text{ (see... etc)}$$
>
> $$ = 7\cdot (1+4\cdot 1) - 34 \cdot 1$$
>
> $$ = (75 - 34\cdot 2)\cdot 5 - 34 \cdot 1$$
>
> $$ = 75\cdot 5 - 34 \cdot (1+2\cdot 5)$$
>
> $$ = 75\cdot 5 - (184 - 75 \cdot 2) \cdot 11$$
>
> $$ = 75\cdot (5 + 2\cdot 11) - 184 \cdot 11$$
>
> $$ = (259-184\cdot 1)\cdot 27 - 184 \cdot 11$$
>
> $$ = 259\cdot 27 - 184 \cdot (11 + 1\cdot 27)$$
>
> $$ = 259\cdot 27 - (443 - 259 \cdot 1) \cdot 38$$
>
> $$ = 259\cdot (27 + 1\cdot 38) - 443 \cdot 38$$
>
> $$ = 259\cdot 65 - 443 \cdot 38$$
>
> which is a solution.

Note that I kept the sign in the middle to be negative, which looks like it made all the coefficients positive[^4].

[^4]: Why?

By the way, this repeated division process (not including the reconstructing) is called **Euclid's Algorithm**, and is used to find the gcd of two numbers efficiently[^5]. In our case we were finding the gcd of 259 and 443, which is 1, so we ended up with (1,0). Feel free to experiment with what would happen if we had $gcd(a,b) \gt 1$. If we include the reconstructing, then the process of finding a solution to $ax+by=1$ is called the *extended* Euclidean algorithm (**egcd**). There are different ways to construct the solution, one of which is exactly as we've done here. (Feel free to try and generalize what we've been doing).

[^5]: Why does the repeated division process end up finding the gcd? Isn't that magical? Hint: $gcd(a,b) = gcd(a-b,b)$ because something divides both $a$ and $b$ if and only if it divides both $a-b$ and $b$.

As long as the initial repeated division (Euclid's algorithm) ends with the pair (1,0), we can perform the reconstruction to find a solution to $ax + by = 1$. In general, Euclid's algorithm ends with the pair being $(gcd(a,b),0)$, so if we do the reconstruction process, we will be able to find a solution to $ax + by = gcd(a,b)$.

## Bezout's Lemma: Proof

Let's switch to our axiom world for a second, to formalize the lemma and prove it.

<Thm name="Bezout's Lemma" outofline>
For any two positive integers $a,b$, there exist integers $x,y$ such that $ax + by = gcd(a,b)$.
</Thm>

Given that we want to use the well-ordering principle as a proof technique (since it's one of our axioms), we could try to consider the set of all possible $ax+by$ (a,b fixed, x,y vary) and take the smallest one, $e$. Then, if $e \neq gcd(a,b)$ we somehow want to generate an element of the set that is smaller than $e$, so that we can show a contradiction. 

Let's think about this on the number line. Suppose $a,b$ coprime for simplicity; then we want to show that there is a solution to $ax+by = 1$. If we start at 0 and are allowed to jump left or right by $a$ or $b$, can we get to 1?

Well, if we can't, i.e. if the smallest positive number we could reach was $e$ where $e\gt 1$, then we can essentially think of "going from 0 to e" as one operation. Then we can go from 0 to e, e to 2e, 2e to 3e, etc., until we get close to $a$ on the number line. By the division algorithm, we can always land in the region between $a,a+e-1$ inclusive. But then we can travel left by a, and we will be in the region between $0, e-1$ inclusive, which is a contradiction because we'd be able to reach a smaller number than $e$.

<Proof name="of Bezout's Lemma" outofline>
Let $a,b \in \mathbb{N}$. Consider the set

$$S = \{n \in \mathbb{N} \mid n = ax + by,\; x,y \in \mathbb{Z}\}$$

This set is nonempty (since, for example, $a \in S$) and a subset of the naturals by construction. Thus by the **well-ordering principle**, S has a least element, say $e = ax_0 + by_0$.

<Thm type="Claim" unquoted>
$e \mid a$.
<Proof>
By the **Divison Algorithm**, write $a = qe + r$ with $q \in \mathbb{Z}$ and $0 \leq r \lt e$. Then $r = a - q(ax_0 + by_0)$ is a linear combination of $a$ and $b$. But $0 \leq r \lt e$, thus either $r=0$, or $r \in S$ with $r \lt e$. Since the second option contradicts the minimality of $e$, we must have $r=0$, and so $a = qe + 0$ i.e. $e \mid a$.
</Proof>
</Thm>

Now by the claim, $e \mid a$. Similarly, repeating the above argument analogously for $b$, we have $e \mid b$. Thus $e$ is a common divisor of $a$ and $b$, so $e \leq gcd(a,b)$ by definition of "greatest".

But also, recall that $e = ax_0 + by_0$. Since the gcd of a and b divides the RHS by **Lemma 4** of the lemma list from part 1, we have that $gcd(a,b) \mid e$, and so $e \geq gcd(a,b)$ by **Lemma 19**.

Overall, since $e \leq gcd(a,b)$ and $e \geq gcd(a,b)$, we have $e = gcd(a,b)$. So $gcd(a,b) = e = ax_0 + by_0$, so $gcd(a,b)$ can be written as a linear combination of $a$ and $b$. Done.
</Proof>

## Magic box

Let's try another concrete example: finding a solution to $29x + 11y = 1$.

We could do what we did before, which was the Euclidean Algorithm and then building a solution **in reverse**[^6]. But what if we try the same thing but going forwards?

[^6]: This would be quite inconvenient for a computer algorithm, because we use the quotients in the opposite order to which they are generated, which means we have to store all the quotients rather than working with each quotient as it is generated.

> $$29x + 11y = 1$$
> $$(2\cdot 11 + 7)x + 11y = 1$$
> $$7x + 11(2x+y) = 1$$
> $$7x + (7\cdot 1+4)(2x+y) = 1$$
> $$7(3x+y) + 4(2x+y) = 1$$
> $$(4+3)(3x+y) + 4(2x+y) = 1$$
> $$3(3x+y) + 4(5x+2y) = 1$$
> $$3(3x+y) + (3+1)(5x+2y) = 1$$
> $$3(8x+3y) + 1(5x+2y) = 1$$
> $$(3\cdot 1 + 0)(8x+3y) + 1(5x+2y) = 1$$
> $$0(8x+3y) + 1(29x + 11y) = 1$$

Uh, oh, it looks like we started with $29x + 11y = 1$ and ended up with $0 + 1(29x+11y) = 1$. Did we go in a circle? It certainly looks like it, apart from one thing - why did we get $(8x+3y)$ in that bracket? Surely there's something special about it.

Recall that, when we built up the solution in reverse, we started with "$0\cdot0 + 1\cdot 1 = 1$" then built it up.
So here, looking at the last line of the above, why don't we set $8x + 3y = 0$?[^7] This is easy to find a solution to, e.g. $x=-3, y=8$.

[^7]: Actually, we can set it to be anything, because it's multiplied by 0: and we always get an integer solution $(x,y)$ from the two simultaneous equations, because the matrix $\begin{pmatrix}8 & 3 \\ 29 & 11\end{pmatrix}$ has an integral inverse due to its determinant!

What is $29x+11y$ when $x=3$ and $y=-8$?

It's *one*!!
So could it be that the significance of $(8x+3y)$ is that it gives a solution?

In fact, it looks like something even better is true: for convenience, I'll write a compressed version of what we did again:

> $$29x + 11y = 1$$
> $$7x + 11(2x+y) = 1$$
> $$7(3x+y) + 4(2x+y) = 1$$
> $$3(3x+y) + 4(5x+2y) = 1$$
> $$3(8x+3y) + 1(5x+2y) = 1$$
> $$0(8x+3y) + 1(29x + 11y) = 1$$

Look at the coefficients of $x$ and $y$ in the last line: it fits the pattern that $11\cdot 8 - 29\cdot 3 = 1$

Look at the coefficients in the penultimate line: it fits the pattern that $2\cdot 8 - 5\cdot 3 = 1$

Look at the coefficients in the third-to-last line: it fits the pattern that $3\cdot 2 - 5\cdot 1 = 1$

Etc.: **it's true for all the lines!**

If we look at these brackets, and list them out in order:

$(0x+1y)$, $(1x+0y)$, $(2x+y)$, $(3x+y)$, $(5x+2y)$, $(8x+3y)$, $(29x+11y)$

Let's stop writing the x and y, and put these in a table instead, where each column represents a bracket:

|| 0 || 1 || 2 || 3 || 5 || 8 || 29 ||
|| 1 || 0 || 1 || 1 || 2 || 3 || 11 ||

Then, arranged like this, the <ProminentLink href='https://brilliant.org/wiki/expansion-of-determinants/'>determinant</ProminentLink> of each 2x2 square alternates between 1 and -1.

Now, let's think about how we generated these brackets.

Let's say we have written the line $m(ax+by) + n(cx+dy)$ , with $m \gt n$.
For example, if $m=3$, $a=8$, $b=3$, $n=1$, $c=5$, $d=2$ then we have the penultimate line of the above.

So what's the next line? Well, we reduce: write $m = qn + m'$, so $q$ is the next quotient in the Euclidean algorithm, and $m'$ is the remainder.

$$m(ax + by) + n(cx + dy)$$
$$ = (qn+m')(ax + by) + n(cx + dy)$$
$$ = m'(ax + by) + n(q(ax+by)+(cx + dy))$$
$$ = m'(ax + by) + n((qa+c)x+(qb+d)y)$$

And so, if we have the two brackets $(cx+dy)$ and $(ax+by)$, then the next bracket is $((qa+c)x + (qb+d)y)$.

Writing this in the table form, if we currently have two adjacent columns like this:

|| ... || $c$ || $a$ ||
|| ... || $d$ || $b$ ||

Then the next column is like this:

|| ... || $c$ || $a$ || $qa+c$ ||
|| ... || $d$ || $b$ || $qb+d$ ||

And so, if we put the quotients in a row on top:

||   ||   || $q_0$            || ... || $q_{i-2}$  || $q_{i-1}$ || $q_i$ || ... ||
|| $0$ || $1$ || $q_0\cdot 1 + 0$ || ... || $c$ || $a$ || $q_ia+c$ || ... ||
|| $1$ || $0$ || $q_0 \cdot 0 + 1$ || ... || $d$ || $b$ || $q_ib+d$ || ... ||

Wow, so now we have an efficient, convenient way to compute solutions!

It's almost... *magic!* So magic, it's called the **magic box!**

Let's do a couple of examples. First, let's summarize how we found a solution to $29x + 11y = 1$:
> We first do Euclid's Algorithm to find the quotients:
>
> $29 =$ *$2$* $\cdot 11 + 7$
>
> $11 =$ *$1$* $\cdot 7 + 4$
>
> $7 =$ *$1$* $\cdot 4 + 3$
>
> $4 =$ *$1$* $\cdot 3 + 1$
>
> $3 =$ *$3$* $\cdot 1 + 0$
>
> And so the quotients are $[2, 1, 1, 1, 3]$.
>
> Then we draw out the start of the magic box:
>
> ||     ||     || $2$ || $1$ || $1$ || $1$ || $3$ ||
> || $0$ || $1$ ||   ||   ||   ||   ||   ||
> || $1$ || $0$ ||   ||   ||   ||   ||   ||
>
> Now we fill out each row from left to right: each number is equal to the quotient above it in the top row,  multiplied by the number to the left of it, plus the number two squares to the left of it.
>
> ||     ||     || $2$ || $1$ || $1$ || $1$ || $3$ ||
> || $0$ || $1$ || *$2\cdot1 + 0 = 2$* || *$1\cdot 2 + 1 = 3$*  || etc. ||   ||   ||
> || $1$ || $0$ ||  *$2\cdot 0 + 1 = 1$* || *$1 \cdot 1 + 0 = 1$*  || etc.  ||   ||   ||
>
> Then, when we get the whole magic box:
>
> ||     ||     || $2$ || $1$ || $1$ || $1$ || $3$ ||
> || $0$ || $1$ || $2$ || $3$ || $5$ || $8$ || $29$ ||
> || $1$ || $0$ || $1$ || $1$ || $2$ || $3$ || $11$ ||
>
> The last 2x2 square gives us a solution to $29x - 11y = 1$, namely $x = 3$, $y=8$.

Now try if yourself! Compute the magic box for $121x + 43y = 1$, and hence find an integer solution. Check against the answer below.

<Spoiler>

||     ||     || $2$ || $1$ || $4$ || $2$ || $1$ || $2$ ||
|| $0$ || $1$ || $2$ || $3$ || $14$ || $31$ || $45$ || $121$ ||
|| $1$ || $0$ || $1$ || $1$ || $5$ || $11$ || $16$ || $43$ ||

The determinant of the last 2x2 box is $\pm 1$, and we can figure out which one by counting the number of columns (since the determinant of each 2x2 box *alternates* between 1 and -1). There are 6 columns (excluding the first 2) and so the determinant flips 6 times. It starts at $0\cdot0 = 1\cdot1 = -1$ and so the determinant of the last 2x2 box is $-1$.

Hence $45 \cdot 43 - 121 \cdot 16 = -1$, so $121 \cdot 16 + 43 \cdot (-45) = 1$. We've found our solution, namely $x = 16$, $y = -45$.

</Spoiler>

The magic box also relates to <ProminentLink href="https://brilliant.org/wiki/continued-fractions/">continued fractions</ProminentLink>: we actually computed the convergents of $121/43$, i.e. (best possible) rational approximations using smaller integers. Really, the "magic" of it is that it feels inside-out: originally we were using the quotients in reverse order, but now, we're using them in the same order that we compute them[^8].

[^8]: This is good because a computer can fill in the table at the same time as generating the quotients, so it's very memory efficient.


I won't prove that the magic box works, because this article is quite long already. But feel free to try yourself (hint: induction).

Finally, it will feel satisfying to actually write the magic box in terms of 2x2 matrices, since we're talking about determinants:

> Let's say the list of quotients is $t_1, t_2, \cdots, t_n$ .
>
> Then we build a sequence of matrices (which are the 2x2 squares in the magic box, from left to right): the first is $M_1 = \begin{pmatrix}0 & 1\\1 & 0\end{pmatrix}$, and for any matrix $M_i$ in the sequence with $M_i = \begin{pmatrix} p_i & p_{i+1} \\ q_i & q_{i+1} \end{pmatrix}$, we have that:
> $$M_{i+1} = \begin{pmatrix} p_{i+1} & t_i p_{i+1} + p_i \\ q_{i+1} & t_i q_{i+1} + q_i\end{pmatrix}$$
> Now we can write this in terms of $M_i$ like so:
> $$M_{i+1} = \begin{pmatrix} p_{i+1} &  p_i \\ q_{i+1} & q_i\end{pmatrix} + \begin{pmatrix} 0 & t_i p_{i+1} \\ 0 & t_i q_{i+1}\end{pmatrix}$$
> $$= M_i \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + M_i\begin{pmatrix} 0 & 0 \\ 0 & t_i \end{pmatrix}$$
> $$= M_i \begin{pmatrix} 0 & 1 \\ 1 & t_i \end{pmatrix}$$
>
> Now, using this recurrence, we have that the last 2x2 square in the magic box, the one that gives the solution to $ax + by = \pm 1$, is:
> $$\begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & t_1\end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & t_2\end{pmatrix} (\cdots) \begin{pmatrix} 0 & 1 \\ 1 & t_n\end{pmatrix}$$
> $$ = \prod_{0 \leq i \leq n} \begin{pmatrix} 0 & 1 \\ 1 & t_i\end{pmatrix}$$
> Where we extend the definition of the $t_i$ to include $t_0 = 0$.
>
> Note: this recurrence also justifies that the determinant of each 2x2 square in the magic box alternates between 1 and -1, because:
> $$det(M_{i+1})$$
> $$= det\left(M_i \begin{pmatrix} 0 & 1 \\ 1 & t_i \end{pmatrix}\right)$$
> $$= det(M_i) \, det\left(\begin{pmatrix} 0 & 1 \\ 1 & t_i \end{pmatrix}\right)$$
> $$ = -det(M_i)$$

## Remarks: first unobvious result?

Bezout's lemma is interesting because it is the first thing we've come across that wouldn't be obvious to an average high-school student. Indeed, most people would say, "why so much rigor?" when we're proving things like the division algorithm that just already *feel* obvious to everyone.

But that's what a lot of maths is about - ensuring we have rigorous foundations to stand on. In this case, we are all convinced that what we are trying to prove is true, and it does indeed turn out to be provably true, but what about when we're trying to prove something we believe, and it's *not* true? We need to *ensure* that all proofs are rigorous (enough), otherwise holes could creep in, and one false assumption would render mathematics ostensibly <DiscreetLink href="https://www.ias.edu/video/voevodsky-80th">inconsistent</DiscreetLink>.