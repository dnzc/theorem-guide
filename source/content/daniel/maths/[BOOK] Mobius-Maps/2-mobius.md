---
pagename: 2. Möbius Maps
created: 31/08/2025 18:00
---

# Introducing Möbius Maps

So far, we've introduced inversion, found some key properties, and used it to solve a geometry problem.

As a recap, the two key properties of inversion are that it is a *conformal map* (preserves angles at the meeting point of two curves) and *sends clines to clines*.

Just to hammer it home:

<KeyIdea>
Inversion is a conformal map that sends clines to clines.

<p className="text-sm mt-4"> <em>The above sentence is the ONLY thing about inversion we care about; if any other map is conformal and sends clines to clines, then it is just as overpowered as inversion.</em> </p>
</KeyIdea>


In this article, we'll view the 2D plane instead as the complex plane, and use our inversion intuition to derive Möbius maps. Then in the next and final part, we'll leverage all the intuition we've built, to finally solve some Möbius map questions.

## Why are Complex Numbers Relevant?

So far we've been working with the 2D plane (with $P_\infty$ added). But as you might already know, we can describe 2D planes with complex numbers, using the <DiscreetLink href="https://www.mathsisfun.com/algebra/complex-plane.html">complex plane</DiscreetLink>, denoted $\mathbb{C}$.

Thus, we can view inversion as a *function* (i.e. transformation) that acts on the complex plane (with $P_\infty$ added). We write this in shorthand by saying inversion is a function on $\mathbb{C} \cup \{P_\infty\}$.

Can we find this function explicitly? Recall the definition of inversion, in which we scale points along a ray from the origin:

> <div className="flex justify-center items-center"> <AUTOSVG src='mobius/inversion/defn.svg' width='350' height='200'/> <div className="ml-8"> <p className="mb-4">The point $A$ is sent to the point $A^*$, where $OA \cdot OA^* = r^2$.</p> <p className="text-sm"><em>Since we're reframing in terms of the complex plane, we replace the above sentence with:</em></p> <p className="mb-4">The complex number $A$ is sent to the complex number $A^*$, where $|A| \cdot |A^*| = r^2$.</p> <p>Here, in the complex plane, $O$ is zero (the origin), so that length $OA$ equals the magnitude of the complex number $A$ (which we denoted $|A|$).</p> </div> </div>

<Thm type="Claim"> In the complex plane, inversion about the origin with radius 1, is described by the function $z \mapsto \overline{ 1/z }$, where the line on top represents complex conjugation (i.e. reflection in the x-axis).

<Proof outofline>
For any (nonzero) complex number $z$, we can decompose it into $|z| \cdot \frac{z}{|z|}$, that is, its magnitude, multiplied by a direction of unit length.

Now for inversion, we keep the direction the same, but we modify the magnitude from $|z|$ to $\frac{1}{|z|}$. Therefore the inversion of the complex number $z$, is $\frac{1}{|z|} \cdot \frac{z}{|z|}$ (the new magnitude, times the same direction as before).

This simplifies to $\overline{1/z}$ as required, using the fact that $|z|^2 = z \overline{z}$.
</Proof>
</Thm>


## The Reciprocal map

We've just seen that inversion is described by the map $z \mapsto \overline{1/z}$, i.e. the map $1/z$, followed by reflection in the x-axis.

Well, we can flip this on its head, to discover a new map called the *reciprocal map* $z \mapsto 1/z$; which is just inversion followed by reflection in the x-axis!

"Why is this special?", you ask. Well, taking the reciprocal of a complex number is a very elementary / philosophically basic thing to do (as opposed to inversion; $\overline{1/z}$ looks so ugly compared to $1/z$). What we've just done is given a *geometrical interpretation* of this reciprocal map, as a composition of transformations of the plane: again, it is inversion followed by reflection in the x-axis.


> **EVEN BETTER THAN A MERE GEOMETRICAL INTERPRETATION:**
>
> <br/>
>
>Recall the point I hammered home at the top of this page: inversion is a conformal map that sends clines to clines. (I'm about to write "conformal map that sends clines to clines" so many freaking times, that I'll temporarily abbreviate it to "CCC". So inversion is CCC.)
>
> <br/>
>
>Guess what else is CCC? Reflection! (Proof: reflection preserves angles, circles and lines, because it preserves basically everything.)
>
> <br/>
>
>Therefore, the reciprocal map, which again, is inversion (which is CCC) composed with reflection (which is also CCC), is also CCC! Let's write this important statement out in full:
> <KeyIdea>The reciprocal map is a conformal map that sends clines to clines.</KeyIdea>

## Pop Quiz

<Quiz multi>
Which of these functions on the complex plane (with $P_\infty$ added) are conformal maps that send clines to clines?

- [x] Reflection; $z \mapsto \overline{z}$
- [x] Rotation; $z \mapsto cz$ where $c \in \mathbb{C}, |c|=1$
- [x] Translation; $z \mapsto a + z$ where $a \in \mathbb{C}$
- [x] Scaling; $z \mapsto cz$ where $c \in \mathbb{R}, c \neq 0$
- [x] Reciprocal; $z \mapsto 1/z$
- [x] $z \mapsto 1 + 1/z$
- [x] $z \mapsto \frac{1 + 2z}{3 + 4z}$
</Quiz>

(Hint for the last one: can you rewrite the fraction as the composition of a bunch of functions that you already know are conformal maps that sends clines to clines?) View the spoiler below if you're stuck:

<Spoiler>
For example,
$$\frac{1 + 2z}{3 + 4z} = \frac{1}{2} \left( 1 - \frac{1}{4z+3} \right)$$
So to send $z$ to $\frac{1+2z}{3+4z}$, we perform the following transformations in order:

- scale by scale factor 4
- translate by 3+0i
- apply reciprocal map
- rotate by 180deg (i.e. multiply by -1)
- translate by 1+0i
- scale by scale factor 1/2
</Spoiler>


## Finally, Möbius Maps

<Defn name="Möbius Maps"> We define **Möbius Maps**, or **Möbius Transformations**, to be those of the form
$$z \mapsto \frac{az+b}{cz+d}$$
where $ad-bc \neq 0$.
</Defn>

<Warning>
We require $ad-bc \neq 0$ so that the map is actually bijective: if $ad=bc$ then $\frac{az+b}{cz+d} = \frac{a}{c}$ sends every complex number $z$ to the same output.
</Warning>

Now, I could've led with this definition at the very start of everything. But the *ENTIRE POINT* of all of what I've written up to this definition, is to motivate the following key property of Möbius maps:

<KeyIdea>
Möbius maps are conformal maps that send clines to clines.
</KeyIdea>

<Proof>
To prove this, we need to show $z \mapsto \frac{az+b}{cz+d}$ is a conformal map that sends clines to clines. But, I hope you've done the pop quiz above - this is just a generalisation!

More specifically, it's an exercise for you to show that we can deconstruct $\frac{az + b}{cz + d}$ into the composition of translations, reciprocals, rotations and scaling. All of these component functions are conformal maps that send clines to clines, hence so is their composition.
</Proof>

## Example Question

We've now covered ALL OF THE THEORY, whoop whoop. Now, we should be ready to solve Möbius map problems using the "conformal map that sends clines to clines" property. I'll end our journey by hinting at an example.

<Example>
Find a Möbius map that takes the region between the circles $\{|z|=1\}$ and $\{|z − 1| = 5/2\}$ to an annulus $\{1 < |z| < R\}$; you may choose the value of $R$.

<div className="flex justify-center space-x-4 items-center mt-2"> <AUTOSVG src='mobius/readme/nonconcentricannulus.svg' width='200' height='200'/> <AUTOSVG/ src='mobius/readme/arrow.svg' width='100' height='100'/> <AUTOSVG src='mobius/readme/concentricannulus.svg' width='200' height='200'/> </div>
</Example>

Since I am very mysterious, I won't provide the full solution here. But, here's a hint on how to approach it[^1]:

[^1]: If you're savvy with your olympiad geometry, alternatively you could try to use Circles of Apollonius :)

<Spoiler>
To construct a Möbius map, let's invert the left diagram about -1.5 (which lies on the outer circle), and invert the right diagram about -2 (which lies on the outer circle).

<br/>

Each of these inversions transform the coloured regions to an infinite region between a line and a circle. These two regions will be related by a translation and scaling.

<br/>

If we chain together all these transformations, we will get the final Möbius map. It actually comes out to be quite nice.

</Spoiler>

If you think you have the answer, or if you hate the fact that I didn't spoon-feed you the answer, feel free to <DiscreetLink href="https://admonymous.co/chen">admonish me</DiscreetLink>.

## Conclusion

Just to check that you're still alive, so far we've covered the following:

- Intuition behind circle inversion, and a practice problem. This gave you a taste of what it's like to use the "conformal map that sends clines to clines" property to solve problems.
- Derivation of defintion of a Möbius map, and the fact that Möbius maps are conformal maps that send clines to clines.
- A practice Möbius maps problem.

This is where I'll be ending our journey. I hope you enjoy Mobius map questions as much as me now! If you liked this content, you might like to self-study the <DiscreetLink href="https://zb260.user.srcf.net/notes/IB/comana.pdf">Complex Analysis</DiscreetLink> Tripos course, which covers most of what I've told you (specifically, look for the section on conformal equivalence).