---
pagename: 1. Inversion
created: 31/08/2025 17:00
---

# 1. Circle Inversion

<em className="text-sm">If you're already familiar with inversion, feel free to skip this page.</em>

In this first part, we're going to build up some intuition for a fancy transformation of the plane called "inversion". This will be extremely useful in the next part, when we build on this to derive Möbius maps.

## Background: Interactive Intuition

When solving 2D geometry problems, usually we want to find some transformation of the plane that makes our problem easier to solve.

Most people are familiar with *linear* transformations, like rotation, reflection, or scaling (zooming in/out). Play around with the interactive toy below:

<LinearTransformations/>


<br/>

*Circle Inversion* is another transformation of the plane, but it's *nonlinear*, which means it does some wild things. Drag the slider below to see what it looks like:

<Inversion/>

<KeyIdea>
In the visualisation above, inversion distorts each of the shapes, except for the circle, which only changes size. This is a *key property* of inversion: circles map to circles (or lines). We'll explore this more later.
</KeyIdea>

Notice that points close to the center get mapped very far away, whereas points near the dotted circle stay near it.

Also notice how the lines of the cartesian grid change: the gridlines meet at right angles, and after inverting, although the gridlines have become curved, they still meet at right angles! (Imagine zooming into a meeting point until the curved lines become basically straight)

You can see the angle at the meeting point is also preserved for the edges of the triangle meeting at a vertex (it's 60 degrees initially, and still 60 degrees after you slide the slider all the way to the right). This angle preservation property turns out to be true for *any* two (sufficiently smooth) curves that meet at a point.

Let's state this neatly:

<KeyIdea>
If two curves meet at an angle $\alpha$, then after inversion, the two inverted curves will still meet at an angle $\alpha$. [^1]

<div className="flex justify-center items-center">
    <AUTOSVG src='mobius/inversion/conformalmap.svg' width='300' height='180'/>
</div>

This property, of preserving meeting angles of curves, is called being a *conformal map*. I think it's pretty cool - even though inversion is this crazy operation that flips a plane inside-out, it still preserves angles!
</KeyIdea>

[^1]: This is hard to prove using pure Euclidean geometry, since we need the notion of "tangent lines" to curves, meaning we need the notion of a 2D derivative. This is where complex analysis is useful!

## The Formal Definition

<Defn name="Inversion">
Let $C$ be a reference circle with center $O$ and positive radius $r$.

We define **inversion about $C$** to be the transformation of the plane that does the following:

- for any point $A$, we send $A$ to the point $A^*$ lying on ray $OA$ such that length $OA^* = \frac{r^2}{OA}$.

<div className="flex justify-center items-center mt-2">
    <AUTOSVG src='mobius/inversion/defn.svg' width='200' height='200'/>
</div>

You can visualise this as follows: in the diagram above, as $A$ moves closer and closer to $O$ along the green line, the point $A^*$ will slide rapidly further and further away along the green line.

<br/>

This alludes to an issue: our definition does not work when $A=O$, since $A^*$ would have to be infinitely far away. To fix this, we add a special **point at infinity** to the plane, denoted $P_\infty$, and define that $O$ is sent to $P_\infty$ and vice versa. You can think of this as saying "$\frac{r^2}{0} = \infty$" and "$\frac{r^2}{\infty} = 0$".
</Defn>

<Example>
Points on the reference circle stay fixed under inversion. (Try to show this using the formal definition, then go back to the interactive visualisation to check it looks plausible!)
</Example>

<Example>
The value of $r$ is actually irrelevant - since, in the diagram above, we have $OA^* = r^2 \cdot \frac{1}{OA}$, doing an inversion about a circle of radius $r$ is equivalent to inverting with radius 1, and then scaling with scale factor $r^2$. So, up to zooming in/out, all inversions about $O$ are the same.
</Example>

<KeyIdea>
Just like reflection, inversion is *self-inverse* - if you do it twice, the second transformation undoes the first one. In other words, inversion swaps pairs of points (e.g. in the diagram above, $A$ gets sent to $A^*$, and $A^*$ gets sent to $A$).
</KeyIdea>

## Where Do Circles Go?

As we mentioned earlier, it's an interesting fact that inversion sends circles to circles. Let's try to look at this in more detail.

<InversionCircle/>

As you can see, it looks like inversion sends circles to circles! However, sometimes something interesting happens...

<Quiz>
Try moving the solid circle so that it passes through the center of inversion (that is, the center of the gray dotted circle). What happens to the inversion result, and why?

- [ ] The result of inversion is a circle, because inversion sends circles to circles.
- [x] The result of inversion is a line, because it's a circle that passes through $P_\infty$ (since the inversion center is sent to $P_\infty$).
- [ ] The result of inversion is a square, because my eyes have gone square from reading this article.
</Quiz>

<Defn name="cline">Instead of saying "circles and lines" all the time, we define a **cline** to be a circle or a line.

By now, hopefully your intuition agrees that: a line is just a circle with infinite radius. Every ordinary line passes through our special "point at infinity", $P_\infty$, and no circle passes through it. In other words, a cline is a line if and only if it passes through $P_\infty$.
</Defn>

Now we can phrase our observation as:
<KeyIdea>
Inversion sends clines to clines.
</KeyIdea>

This property is what makes inversion *so powerful* for solving problems - inversion lets us turn circles (which are tricky to deal with) into lines (which are easy to deal with).

## Example Problem

Just for fun, let's use inversion to destroy this maths olympiad problem from EGMO.

> Let $\triangle ABC $ be a right triangle with $\angle C = 90^{\circ}$ and let $X$ and $Y$ be points in the interiors of $CA$ and $CB$, respectively.
> Construct four circles passing through $C$, centered at $A, B, X, Y$ . Prove that the four points lying on at exactly two of these four circles are concyclic (i.e. lie on a common circle).
> <div className="flex justify-center items-center mt-2"> <AUTOSVG src='mobius/inversion/exampleproblem.svg' width='300' height='300'/> </div>

<Proof type="Solution" unquoted>
Since $C$ has a lot of circles passing through it, we will invert about $C$ (so that all those circles turn into lines).

<Spoiler>

Let's invert around $C$, with arbitrary radius. Can you figure out what the gray circles turn into?

<div className="flex justify-center items-center mt-2"> <AUTOSVG src='mobius/inversion/exampleinverted.svg' width='300' height='300'/> </div>

<Thm type="Claim">
Under inversion, the two circles with centers on segment BC, become two lines that are perpendicular to $BC$ (i.e., horizontal lines).
<Proof outofline>
We know the two circles in question both invert to lines, because they pass through the center of inversion $C$. Now we need to show these lines meet ray $CB$ at right angles. Remember the *conformal map* property? Let's use it as follows.

The two circles in question, meet ray $CB$ at right angles at two points (one of which is $C$). Since inversion is a conformal map, the inversion of each circle (which we already know is a line), meets the inversion of ray $CB$, which is ray $CB$ itself, at right angles. So we're done.
</Proof>
</Thm>

Similarly to the Claim, the other two circles with centers on segment AC, become two lines that are perpendicular to $AC$ (i.e., vertical lines).

<br/>

Now in the original diagram, consider the four points lying on exactly two of these four circles. They form a quadrilateral that we wish to show is concyclic. Well, under inversion, these points go to the intersection of our four created horizontal/vertical lines (see the diagram). But these inverted points form a *rectangle*!

Since rectangles are definitely concyclic, our four inverted intersection points lie on a common circle. But inversion *sends clines to clines*, therefore the original four points must also lie on a common circle, as required. Done.

</Spoiler>

This problem is a good demonstration of how powerful inversion can be, when you have a lot of circles passing through a single point. We've also found a use for the key properties of inversion that we discussed earlier.

</Proof>


## Key Properties: Pop Quiz

Here's a little test of everything we've learned so far - there are also a couple of unseen statements, so if you're not sure about any of the statements, go back to the interactive displays and experiment away!

<Quiz multi>
Select all statements that are true:

- [x] Inversion is self-inverse - that is, it swaps pairs of points.
- [ ] Inversion sends circles to circles.
- [x] Inversion sends circles and lines, to circles and lines.
- [ ] Inversion is not a conformal map - that is, it does not preserve angles at the meeting point of two curves.
- [x] If the original circle is tangent to the circle of inversion, then so is the inverted circle, because points on the circle of inversion are fixed.
- [x] It is possible for inversion to send a circle to itself. (Hint: in the interactive display above, can you get the two coloured circles to overlap?)
</Quiz>

<br/>
<hr/>
<br/>

Hopefully you now love inversion as much as I do. In the next part, we're going to neatly frame inversion using the complex plane, and use it to derive Möbius maps.