14/07/2023 21:00
[TAGS] conjecture purple
# Associated Permutations of Complete Non-Ambiguous Trees

<ProminentLink href="https://arxiv.org/abs/2210.11117">View on arXiV</ProminentLink>

Not much on this page, I just needed somewhere to note down a seemingly magical but random conjecture that we felt wasn't relevant enough to make it into the final paper.

<Thm type="Conjecture">
Let $h(n,k)$ be the number of Prufer sequences ending in $k$ that represent a tree whose adjacency matrix is a valid CNAT of size $n$. Then:

$$h(n,k) = \begin{cases} \frac{(n-1)!}{k(k+1)} & \text{if } 1\leq k < n-1\\0 & \text{if } k=n-1\\(n-2)! & \text{if } k=n \end{cases}$$

We were only able to prove the last two cases.
</Thm>