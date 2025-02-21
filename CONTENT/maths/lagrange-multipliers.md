20/12/2024 23:30
created 14/07/2023 17:00
[TAGS] olympiad purple, analysis-intro indigo
# Revenge of Analysis: Using Lagrange Multipliers to Destroy Olympiad Inequalities

Goal: learn how to use Lagrange multipliers in olympiads.

Lagrange multipliers are a nice tool to solve inequalities, but they are rarely seen in olympiad solutions. Once you are comfortable with it, it can be an overpowered way smash open inequalities without much insight. (So economists love them!) For this reason, we need to approach it rigorously, to ensure we can justify earning marks.

I really recommend watching <ProminentLink href='https://youtu.be/5A39Ht9Wcu0'>this video</ProminentLink> to get some intuition first.

## Background Theory

All of this is covered in my <ProminentLink href="/maths/Analysis-Topology" internal>course notes for IB Analysis and Topology</ProminentLink>, in the relevant sections. The results and definitions in this article are correct only for $\mathbb{R}^n$ (e.g. compactness is something different, but the Heine-Borel theorem says that in $\mathbb{R}^n$ it's equivalent to being closed and bounded). For the more general definitions and a deeper understanding, check out the course notes.

<Defn>
Consider a set $M$ together with a function $d : M \times M \to \mathbb{R}$.

$(M, d)$ is a **metric space** if:

- $d(x,y) \geq 0$, equality if and only if (*"iff"*) $x=y$ ("positive semi-definite")
- $d(x,y) = d(y,x)$ ("symmetric")
- $d(x,y) + d(y,z) \geq d(x,z)$ ("triangle inequality")
</Defn>

<Example>
$(\mathbb{R}^n, d)$ is a metric space, where:

$$\mathbb{R}^n = \{(x_1, \cdots, x_n) \mid x_i \in \mathbb{R}\}$$
$$d(x,y) = \sqrt{\sum_{i=1}^n (x_i-y_i)^2}$$
</Example>

<br/>

<Defn name="balls">
The **open ball** in $\mathbb{R}^n$ with centre $p \in \mathbb{R^n}$ and radius $r$ is
$$B(p,r) := \{x \in \mathbb{\mathbb{R}^n} \mid d(p,x) \lt r \}$$

Similarly, the **closed ball** $B[p,r]$ is[^1] the set:
$$\{x \in \mathbb{R}^n \mid d(p,x) \leq r\}$$
</Defn>
[^1]: $B[p,r]$ is a closed set.

<Example plural>
- Any finite open interval in $\mathbb{R}$ is an open ball ($n=1$), because for any open interval $(a,b) \subset \mathbb{R}$, it is equal to $B(\frac{a+b}{2}, \frac{b-a}{2})$.
- <div class='flex flex-wrap items-center space-x-4'><p>$B[0,1]$ in $\mathbb{R}^2$ is</p> <Image src='/__IMAGES__/lagrange-mult/1-closedBall-0-1.svg' width='100' height='100' alt='diagram' /></div>
</Example>

<Defn>$U \subseteq \mathbb{R}^n$ is **open** iff for every $p \in U$, $\exists r\gt 0$ s.t. $B(p,r) \subset U$.

<div class='flex flex-wrap justify-center space-x-8'>
    <Image src='/__IMAGES__/lagrange-mult/2-openSet.svg' width='150' height='160' alt='diagram' />
    <Image src='/__IMAGES__/lagrange-mult/3-notOpenSet.svg' width='150' height='160' alt='diagram' />
</div>
</Defn>

Informally: an 'open set' is a set such that for any point $x$ in the set, we can fit a ball ball around $x$, while staying inside the set.

<br/>

<Defn name="limits">Let $(x_k)_{k=1}^\infty$ be a sequence in $\mathbb{R}^n$.

The sequence **converges** to the point $x_\infty$ iff $\forall \epsilon \gt 0, \exists n_0 \in \mathbb{N}$ such that:

$$n \geq n_0 \implies d(x_n, x_\infty) \lt \epsilon$$
Then $x_\infty$ is denoted $\lim_{n \to \infty}(x_n)$.
</Defn>

<Example plural>
- Let $x_n = \left(\frac{1}{n}, \frac{1}{n}\right)$, then $\lim_{n \to \infty} x_n = (0,0)$.
- $\lim_{n \to \infty} \left(1-\frac{1}{n}\;,\; \frac{1}{n^2}\right) = (1,0)$
</Example>

<br/>

<Defn> Let $S \subseteq \mathbb{R}^n$. $S$ is **closed** iff for every sequence of points $(x_k)_{k=1}^\infty$ that satisfies $x_k \in S \;\forall\; k$, we have $\left( \lim_{k \to \infty} x_k \right) \in S$.</Defn>

<Example plural>
- $B(0,1)$ is not closed because we can take $x_k = (1 - \frac{1}{k}, 0, \cdots, 0).$
- Any open ball together with one point on the boundary, is neither closed nor open.
</Example>

<br/>

<Defn>Let $A \in \mathbb{R}^n$. The **closure** of $A$, denoted $\bar A$, is the smallest closed set containing $A$.

<div class='w-full flex justify-center'>
    <Image src='/__IMAGES__/lagrange-mult/4-closure.svg' width='250' height='125' alt='diagram'/>
</div>
</Defn>

<br/><hr/>

<Thm type="Fact">$A \subseteq \mathbb{R}^n$ is closed if and only if $\mathbb{R}^n \setminus A$ is open.
<div class='w-full flex justify-center'>
    <Image src='/__IMAGES__/lagrange-mult/5-closedOpenComplement.svg' width='300' height='150' alt='diagram'/>
</div>
</Thm>

<Thm type="Fact">Let $U,V$ be open sets. Then $U \cap V$ and $U \cup V$ are also open sets. This extends to finite intersections[^2] and infinite unions.
<div class='w-full flex justify-center'>
    <Image src='/__IMAGES__/lagrange-mult/6-openIntAndUnion.svg' width='150' height='150' alt='diagram'/>
</div>
</Thm>

[^2]: If $U_n = \left(-\frac{1}{n}, \frac{1}{n}\right)$, then $\bigcup_{n=1}^\infty U_n = \{0\}$ which is not open.

<Thm type="Fact"> Let $S,T$ be closed sets. Then $S \cap T$ and $S \cup T$ are also closed sets. This extends to infinite intersections and finite unions.
<div class='w-full flex justify-center'>
    <Image src='/__IMAGES__/lagrange-mult/7-closedIntAndUnion.svg' width='150' height='150' alt='diagram'/>
</div>
</Thm>

<br/><hr/>

<Defn>$A \subseteq \mathbb{R}^n$ is **bounded** iff $\exists\, R \in \mathbb{R}, R\gt 0$ such that $A \subseteq B(0, R)$.
<div class='w-full flex justify-center mt-2'>
    <Image src='/__IMAGES__/lagrange-mult/8-bounded.svg' width='150' height='150' alt='diagram'/>
</div>
</Defn>

<Defn> A subset $K \subseteq \mathbb{R}^n$ is **compact** if it is closed and bounded.
<div class='flex flex-wrap justify-around'><Image src='/__IMAGES__/lagrange-mult/9-notCompact.svg' width='200' height='200' alt='diagram' /> <Image src='/__IMAGES__/lagrange-mult/10-compact.svg' width='200' height='200' alt='diagram' /></div>
</Defn>

<Defn>
Let $D \subseteq \mathbb{R}^n$ and let $f : D \to \mathbb{R}$.

$f$ is **continuous at the point** $p \in D$ iff $\forall \epsilon \gt 0$, $\exists \delta \gt 0$ such that $\forall x \in D$ we have:

$$d(p,x) \lt \delta \implies \lvert f(x) - f(p) \rvert \lt \epsilon$$

$f$ is **continuous** iff it is continuous at every point.
</Defn>

Informally, no matter how small $\epsilon$ you pick, I can always find a region around $p$ where the change in $f$ is smaller than $\epsilon$. So, a small change in input causes a small change in ouput.

<Example> $f : \mathbb{R}^n \to \mathbb{R}$, $f(x_1, \cdots, x_n) = x_1 + \cdots + x_n$ </Example>

<br/><hr/>

<Thm name="extreme value thm" outofline> Let $f : K \to \mathbb{R}$ be a continuous function, where $K \subseteq \mathbb{R}^n$ is a nonempty compact set.

Then $f$ has both a global maximum value and a global minimum value[^3]:
$$\exists\, x \in K \text{ s.t. } f(x) \geq f(y) \;\forall\, y \in K$$
$$\exists\, x' \in K \text{ s.t. } f(x') \leq f(y) \;\forall\, y \in K$$
</Thm>

<Example outofline>
<div class='flex flex-wrap space-x-4 justify-start'>
    <div class='flex-[1_1_200px] min-w-[200px] space-y-2'>
        <p>Let $K$ be a closed ball in $\mathbb{R}^2$, then $K$ is compact. Let $f : K \to \mathbb{R}, f(x) = d(x,(0,0))$ which is continuous.</p>
        <p>Then the theorem says that there is a point(s) on $K$ which is closest to $(0,0)$, and a point(s) which is furthest.</p>
    </div>
    <Image src='/__IMAGES__/lagrange-mult/11-closedBall.svg' width='200' height='200' alt='diagram'/>
</div>
</Example>

Note: We need to assume $K$ is closed for this theorem, else we can construct a counterexample where $f$ increases to infinity the closer you get to the edge.

[^3]: This is not true in the reverse direction, for example consider $B(0,1)$ and $f(x) = d(x,0)$, then there is a global min at 0.

<Thm type="Fact">
Let $g : \mathbb{R}^n \to \mathbb{R}$ be continuous. Then for a fixed $c \in \mathbb{R}$, the set

$$\{ x \in \mathbb{R}^n \mid g(x) = c \}$$

is closed in $\mathbb{R}^n$.
</Thm>

## Partial Derivatives

I'm assuming you've already met these, so I'll recap.

<Example plural>

- $f : \mathbb{R}^3 \to \mathbb{R}, f(x,y,z) = x^2 + y^2 + z^2$
$$\frac{\delta f}{\delta x} = 2x, \frac{\delta f}{\delta y} = 2y, \frac{\delta f}{\delta z} = 2z, \nabla f = (2x,2y,2z)$$
- $f : (0, +\infty) \times (0, +\infty) \to \mathbb{R}, f(x,y) = \sqrt{xy}$.
$$\nabla f = (\frac{\sqrt y}{2 \sqrt x}, \frac{\sqrt x}{2 \sqrt y})$$
</Example>


## The Big Theorem

Finally!

<Thm name='Lagrange Multipliers, "LM"' outofline>
Let $U \subset \mathbb{R}^n$ be an open set[^4] and let $f,g : U \to \mathbb{R}$ be continuous functions with continuous partial derivatives of the first order.

Let $c \in \mathbb{R}$ and $S = \{x \in U \mid g(x) = c\}$. (Note: $S$ doesn't have to be open or closed, that's $U$!)

Then, if $x_0 \in S$ is a local max or min, then either:
$$\left( \frac{\delta g}{\delta x}, \frac{\delta g}{\delta y}, \frac{\delta g}{\delta z},\cdots\right) = (0,0,0,\cdots)$$
Or $\exists \lambda \in \mathbb{R}$ such that:
$$\frac{\delta f}{\delta x}(x_0) = \lambda \frac{\delta g}{\delta x}(x_0),$$
$$\frac{\delta f}{\delta y}(x_0) = \lambda \frac{\delta g}{\delta y}(x_0),$$
$$\frac{\delta f}{\delta z}(x_0) = \lambda \frac{\delta g}{\delta y}(x_0),$$
$$\text{etc.}$$
</Thm>

[^4]: This is so that partial derivatives are defined.

## Example Problem 1

> Let $x,y,z \geq 0$ such that $x+y+z = 1$. Find the min and max of $xyz$.

<Proof type="Solution" outofline unquoted>
Let $f(x,y,z) = xyz$ and $g(x,y,z)=x+y+z$; these are polynomial functions and so are continuous. We are maximizing and minimizing $f$, subject to a condition on $g$.

$0 \leq x,y,z \leq 1$ so we're only interested in the cube $[0,1] \times [0,1] \times [0,1]$.

<div class='flex flex-wrap justify-center items-center space-x-4'>
    <Image src='/__IMAGES__/lagrange-mult/12-cube.svg' width='250' height='200' alt='diagram'/><p>$x+y+z=1$ is a plane (coloured green)</p>
</div>

Let $U = (0,1)^3$, then $\bar U = [0,1]^3$.

Let $S = \{x \in U \mid g(x)=1\}$, then $\bar S$ is bounded hence compact.

Hence $f$ has a global max and min in $\bar S$.

The global extrema might be on the boundary of $\bar S$. If so then we cannot apply LM, because the extrema will not be in $S$.

- If we are on the boundary, then one of $x,y,z$ is $0$, so $f(x,y,z) = xyz = 0$. Thus $f$ is zero everywhere on the boundary, so $0$ would be an extremum.

- If we are not on the boundary, then we are in $S$, so we can apply LM.
$$\frac{\delta g}{\delta x} = 1, \frac{\delta g}{\delta y} = 1, \frac{\delta g}{\delta z} = 1$$
So we are in the second case of the theorem, because $(1,1,1) \neq (0,0,0)$.
$$\frac{\delta f}{\delta x} = yz, \frac{\delta f}{\delta y} = xz, \frac{\delta f}{\delta z} = xy$$
So $yz = \lambda \cdot 1$, $xz = \lambda \cdot 1$, $xy = \lambda \cdot 1$.  
This implies $xy = yz = zx$ so $x=y=z$, and finally $x+y+z = 1$ $\implies$ $x=y=z=\frac{1}{3}$, so an extremal value of $f$ is $\frac{1}{27}$.

Overall, all extreme values of $f$ on $\bar S$ are $0$ or $\frac{1}{27}$.
$$\therefore 0 \leq xyz \leq \frac{1}{27}$$
</Proof>

## Example Problem 2

> Let $x,y,z \geq 0$ such that $x+y+z = 1$. Show that
> $$0 \leq yz+zx+xy-2xyz \leq \frac{7}{27}$$

<Proof type="Solution" unquoted>
Note $0 \leq x,y,z \leq 1$.

Let $U = (0,1)^3$ and $S = \{ x \in U \mid g(x) = 1\}$.

Let $f(x,y,z) = yz+zx+xy-2xyz$ and $g(x,y,z) = x+y+z$, where $f,g : U \to \mathbb{R}$. Then $f,g$ are continuous and have continous partial derivatives (because polynomial on open set).

Now, $\bar U = [0,1]^3$ and $\bar S = \bar U \cap \{x \in \mathbb{R}^3 \mid g(x)=1\}$ which is closed and bounded hence compact.

Hence $f$ has a global max and min on $\bar S$.

Let $x_0 = (x,y,z)$ be a global extremum.

- If $x_0$ is on the boundary:  
Then one of $x,y,z$ is $0$, WLOG $z=0$. Then $x+y=1$ and we wish to show that $0 \leq xy \leq \frac{7}{27}$.
$$x \geq 0, y \geq 0 \implies xy \geq 0$$
$$xy \leq \left(\frac{x+y}{2}\right)^2 = \frac{1}{4} \lt \frac{7}{27} \;\;\checkmark$$

Else, $x_0$ is not on the boundary.

Then $S$ has a global extremum in $f$, namely $x_0$. So I can apply LM.  
$$g(x,y,z)=x+y+z$$
$$\nabla g = \left(\frac{\delta g}{\delta x}, \frac{\delta g}{\delta y}, \frac{\delta g}{\delta z}\right)=(1,1,1)$$
Since $\nabla g \neq (0,0,0)$, the only possibility is $\nabla f = \lambda \cdot \nabla g$.
$$f(x,y,z) = yz + zx + xy - 2xyz$$
$$\frac{\delta f}{\delta x} = z+y-2yz$$
$$\frac{\delta f}{\delta y} = x+z-2xz$$
$$\frac{\delta f}{\delta z} = y+x-2yx$$
So, $z+y-2yz = \lambda \cdot 1$,  
$x+z-2xz = \lambda \cdot 1$,  
$y+x-2yx = \lambda \cdot 1$

Solving for $x,y,z$:

> *First case* : $x,y,z \neq \frac{1}{2}$
>
> - $z+y-2yz=\lambda$ $\implies y(1-2z) = \lambda - z$ $\implies y = \frac{\lambda - z}{1-2z}$
> - Similarly, $x = \frac{\lambda - z}{1-2z}$
> - So $x=y$, and similarly $x=y=z$.
> - $x+y+z = 1$ $\implies x=y=z=\frac{1}{3}$
>
> *Second case* : one of $x,y,z$ is $\frac{1}{2}$
>
> - WLOG $z = \frac{1}{2}$, then $\frac{1}{2} + y - 2y\cdot \frac{1}{2} = \lambda$ $\implies \lambda = \frac{1}{2}$
> - $x+y = 1-z$ $\implies x+y=\frac{1}{2}$
> - $x+y-2xy = \lambda$ $\implies \frac{1}{2} - 2xy = \frac{1}{2}$ $\implies xy = 0$, but this cannot happen in the interior.
>

Thus overall, The extremum $x_0$ must equal $(\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$.

$$f\left(\frac{1}{3}, \frac{1}{3}, \frac{1}{3}\right) = \frac{1}{9} + \frac{1}{9} + \frac{1}{9} - \frac{2}{27} = \frac{7}{27} \;\; \checkmark$$
</Proof>

## Example problem 3

> Given that $x,y \in \mathbb{R}$ with $x^2 + y^2 = 1$, Find the max and min values of $8x^2 - 2y$.

Note: the "normal" way to do this would be to write it as $8(1-y^2)-2y$ and bound this quadratic. But we can do it with LM too. I'll let you decide which way is easier.

<Proof type="Solution" unquoted>
Let $f,g : \mathbb{R}^2 \to \mathbb{R}$ with:

$$f(x,y) = 8x^2-2y$$
$$g(x,y) = x^2 + y^2$$
Then $f,g$ are continuous and have continuous partial derivatives.

$$U := \mathbb{R}^2$$

$$S := \{x \in U \mid g(x) = 1\}$$

$S$ is closed and bounded, hence $S$ is compact.

Hence $f$ attains a global max and min on $S$.

We can apply LM, because there is no boundary case to check[^5].

[^5]: Note that we could have also let $U$ be something like $\{(x,y) \in \mathbb{R}^2 \mid x^2+y^2 \lt 1000\}$, so that $U$ actually has a boundary, and when we check that case, we would conclude impossibility by "if on the boundary, then $x^2 + y^2$ would have to be $1$ and $1000$ at the same time". But it is nicer to let $U = \mathbb{R}^2$, because then $\bar S = S$ so we get that the global extrema are in $S$ straight away.

$$\nabla g = (2x,2y)$$

So $\nabla g \neq (0,0)$ since $x^2 + y^2 = 1$.

Hence we are in the second case:

$$\nabla f = \lambda \nabla g$$
$$\implies \begin{bmatrix} 16x \\ -2 \end{bmatrix} = \lambda \begin{bmatrix} 2x \\ 2y \end{bmatrix}$$

Thus we need to solve the following 3 simultaneous equations:

> $$16x = 2x\lambda$$
> $$-2 = 2y\lambda$$
> $$x^2 + y^2 = 1$$

- If $x=0$, then $y^2 = 1$, so $(x,y) = (0,1)$ or $(0,-1)$.

- If $x\neq 0$, then $\lambda = 8$, so $-2 = 16y$. Hence $y=-\frac{1}{8}$ and so $x^2 = 1 - \frac{1}{64}$, so $x = \pm \frac{\sqrt{63}}{8}$.

Hence we need to check $(0,1)$,$(0,-1)$, $(\frac{\sqrt{63}}{8}, -\frac{1}{8})$, $(-\frac{\sqrt{63}}{8}, -\frac{1}{8})$.

$$f(0, \pm 1) = \mp 2$$
$$f(\pm \frac{\sqrt{63}}{8}, -\frac{1}{8}) = \frac{65}{8}$$
$$\therefore -2 \leq 8x^2 - 2y \leq \frac{65}{8}$$
</Proof>

## Homogenous Trick

Suppose we want to prove some inequality, but there are no constraints.

If the inequality is homogenous, then we can impose a condition e.g. $a+b+c=1$ or $abc = 1$ or $a^2+b^2+c^2=1$, because we can scale each variable to make the condition true.

<Example>
Prove that $\forall a,b,c \in \mathbb{R}$,
$$a^2 + b^2 + c^2 \geq ab + bc + ca$$
</Example>

<Proof type="Solution" unquoted>
If $a=b=c=0$, the result is obvious.  

Otherwise, let $k = \sqrt{a^2 + b^2 + c^2} \gt 0$. The inequality is equivalent to:
$$\left(\frac{a}{k}\right)^2 + \left(\frac{b}{k}\right)^2 + \left(\frac{c}{k}\right)^2 \geq \frac{a}{k} \cdot \frac{b}{k} + \frac{b}{k}\cdot \frac{c}{k} + \frac{c}{k} \cdot \frac{a}{k}$$

And so, letting $x=\frac{a}{k}$, $y = \frac{b}{k}$, $z = \frac{c}{k}$, we have that $x^2 + y^2 + z^2 = 1$.

So it is enough to prove that $xy + yz + zx \leq 1$ when $x^2 + y^2 + z^2 = 1$ (we chose this condition because of compactness).

We can now solve this as in the examples above, using Lagrange multipliers.
</Proof>

## Practice problem (JBMO)

> For $x,y \in \mathbb{R}, (x,y) \neq (0,0)$, prove that:
> $$\frac{x+y}{x^2-xy+y^2} \leq \frac{2\sqrt 2}{\sqrt {x^2 + y^2}}$$

(Note: much easier to fix $y$ and use normal derivatives, but we want to solve with LM)

<Spoiler>

<Proof type="Solution" unquoted outofline>
The inequality is homogenous, so we can impose the condition $x^2 + y^2 = 1$ by scaling the variables. Thus it is sufficient to show that $\frac{x+y}{x^2-xy+y^2} \leq 2\sqrt 2$ when $x^2 + y^2 = 1$.

$$\text{Goal: } \frac{x+y}{x^2-xy+y^2} \leq 2\sqrt 2$$
$$\iff 0 \leq 2\sqrt2(x^2-xy+y^2) -x - y$$
$$\iff 0 \leq 2\sqrt2(1-xy) -x - y$$

Note that we didn't have to clear the $x^2 + y^2$ term, but it makes the computation easier - always look for tricks!

Now as usual, define:
$$f,g: \mathbb{R}^2 \to \mathbb{R}$$
$$f(x,y) = 2\sqrt2(1-xy)-x-y$$
$$g(x,y) = x^2 + y^2$$
$$S = \{x \in \mathbb{R}^2 \mid g(x,y) = 1\}$$
Then $S$ is closed. Since $S$ is also bounded, we have that $S$ is compact.

Also $f,g$ are continuous with continuous partial derivatives, since they are polynomials.

Hence $f$ has a global max and min on $S$.

$\nabla g = (2x,2y) \neq (0,0)$ since $a^2 + b^2 = 1$.

$$\therefore \nabla f = \lambda \nabla g$$
$$\implies \begin{bmatrix} -2\sqrt2 y - 1 \\ -2\sqrt2 x - 1\end{bmatrix} = \lambda \begin{bmatrix} 2x \\ 2y\end{bmatrix}$$

Hence,

$$-2y\sqrt2 - 1 = 2x\lambda$$
$$-2x\sqrt2 - 1 = 2y\lambda$$
$$x^2 + y^2 = 1$$

Solving these to find $f(x,y)$:

$$y(-2y\sqrt2 - 1) = 2xy\lambda$$
$$x(-2x\sqrt2 - 1) = 2yx\lambda$$
$$\therefore -2y^2\sqrt2 - y = -2x^2\sqrt2 - x$$
$$\implies 2\sqrt2(x^2 - y^2) + (x-y) = 0$$

Thus either $x=y$ or $2\sqrt2(x+y) + 1 = 0$.

- If $x = y$:  
Then, since $x^2 + y^2 = 1$, we have that $x = y = \pm \frac{1}{\sqrt2}$. In this case:
$$f(x,y) = f\left(\pm \frac{1}{\sqrt2}, \pm \frac{1}{\sqrt2}\right)$$
$$= 2\sqrt2(1 - \frac{1}{2}) - (\pm \sqrt 2)$$
$$= \sqrt2 \mp \sqrt2$$
$$= 0, 2\sqrt2$$

- If $2\sqrt2(x+y) + 1 = 0$:  
Then $x + y = -\frac{1}{2\sqrt2}$.  
$$\implies (x+y)^2 = \frac{1}{8}$$
$$\implies 2xy = \frac{1}{8} - (x^2+y^2) = \frac{1}{8} - 1$$
$$\implies xy = -\frac{7}{16}$$
So in this case:
$$f(x,y) = 2\sqrt2(1-xy)-(x+y)$$
$$= 2\sqrt2\left(1+ \frac{7}{16}\right) + \frac{1}{2\sqrt2}$$
$$= \frac{25\sqrt2}{8}$$

Overall, the possible extremal values of $f$ are $0, 2\sqrt2, \frac{25\sqrt2}{8}$.

$$\therefore 0 \leq f(x,y) \leq \frac{25\sqrt2}{8}$$

In particular, $f(x,y) \geq 0$ as required.
</Proof>

</Spoiler>

## When It Fails

> Let $a,b,c \gt 0$ such that $a+b+c=3$. Find the minimum value of:
> $$f(a,b,c) = \frac{2-a^3}{a} + \frac{2-b^3}{b} + \frac{2-c^3}{c}$$

If we attempt to use LM:

<div class='flex justify-center'>
    <Image src='/__IMAGES__/lagrange-mult/13-notBoundary.svg' width='250' height='200' alt='diagram'/>
</div>

The problem is that $f$ is not defined on the boundary, so we cannot say $f$ has a global max and min in the area we're looking at (indeed $f$ can be arbitrarily large if we let $a$ approach zero for example). Boo, we can't use LM.

Actually, in this specific case we can fix it with the following approach:

<Spoiler>

Make the triangle a bit smaller on all sides, then it is compact and we can use LM. For the region of that we didn't consider, we can assume that "one of the variables is at least this small", so "$f$ is at least this large", and get it to be larger than a value we already know.
</Spoiler>

## Conclusion

As you've seen, it takes careful consideration and background knowledge to use Lagrange multipliers in olympiads correctly. Best of luck!