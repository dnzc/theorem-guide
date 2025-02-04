16/12/2024 23:00
# §1 Basics

We want to formalise our intuition about distances in the real world, and try to generalise.

## 1.1 Definitions and Examples

<Defn name="metric space">
Let $X$ be any set.

A **metric** on $X$ is a function $d:X \times X \rightarrow \mathbb{R}$ such that:

- $d(x,y) \geq 0$, equality iff $x=y$ ("positive semi-definite")
- $d(x,y) = d(y,x)$ ("symmetric")
- $d(x,y) + d(y,z) \geq d(x,z)$ ("triangle inequality")
</Defn>

<IncompleteMessage/>