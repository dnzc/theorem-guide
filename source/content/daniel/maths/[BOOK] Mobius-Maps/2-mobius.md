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
</KeyIdea>

In this article, we'll view the 2D plane instead as the complex plane, and use our inversion intuition to derive Möbius maps, before solving some questions.

## Why are Complex Numbers Relevant?

So far we've been working with the 2D plane (with $P_\infty$ added). But as you might already know, we can describe 2D planes with complex numbers, using the <DiscreetLink href="https://www.mathsisfun.com/algebra/complex-plane.html">complex plane</DiscreetLink>, denoted $\mathbb{C}$.

Thus, we can view inversion as a *function* applied to $\mathbb{C} \union \{P_\infty\}$ - that is, inversion is a function that acts on the complex plane (with $P_\infty$ added). Can we find this function explicitly? Recall the definition of inversion, in which we scale points along a ray from the origin.

<Thm type="Exercise"> Show that inversion about the origin, with radius 1, is described by the function $z \mapsto \overline{ 1/z }$, where the line on top represents complex conjugation (i.e. reflection in the x-axis).
</Thm>

Here's the proof:

<Spoiler>

For any (nonzero) complex number $z$, we can decompose it into $|z| \cdot \frac{z}{|z|}$, that is, its magnitude, multiplied by a direction of unit length.

Now for inversion, we keep the direction the same, but we modify the magnitude from $|z|$ to $\frac{1}{|z|}$. Therefore the inversion of the complex number $z$, is $\frac{1}{|z|} \cdot \frac{z}{|z|}$ (the new magnitude, times the same direction as before).

This simplifies to $\overline{1/z}$, using the fact that $|z|^2 = z \overline{z}$.

</Spoiler>

## The Reciprocal map

We've just seen that inversion is described by the map $z \mapsto \overline{1/z}$, i.e. the map $1/z$, followed by reflection in the x-axis.

Therefore, the map $z \mapsto 1/z$ is inversion followed by reflection in the x-axis!

Why is this special? Well, recall the point I hammered home before: inversion is a conformal map that sends clines to clines. Guess what? Reflection is *also* a conformal map that sends clines to clines! (It shouldn't be too much effort to convince yourself of this). Therefore, when we do a reflection after inversion, we don't change the "conformal map that sends clines to clines" property.

Therefore, the *reciprocal map* $z \mapsto 1/z$ is also a conformal map that sends clines to clines!

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

(Hint for the last one: can you rewrite the fraction as the composition of a bunch of functions that you already know are conformal maps that sends clines to clines?)


## Finally, Möbius Maps

<Defn name="Möbius Maps"> We define **Möbius Maps**, or **Möbius Transformations**, to be those of the form
$$z \mapsto \frac{az+b}{cz+d}$$
where $ad-bc \neq 0$.

We require $ad-bc \neq 0$ so that the map is actually bijective: if $ad=bc$ then $\frac{az+b}{cx+d} = \frac{a}{c}$ sends every complex number $z$ to the same output.
</Defn>

Now, I could've led with this definition at the very start of this book. But the *ENTIRE POINT* of all of the content up to this definition, is to motivate the following key property of Möbius maps:

<KeyIdea>
Möbius maps are conformal maps that send clines to clines.
</KeyIdea>

To prove this, it's an exercise for you to show that we can deconstruct $\frac{az + b}{cz + d}$ into the composition of translations, reciprocals, rotations and scaling. All of these component functions are conformal maps that send clines to clines, hence so are their composition.