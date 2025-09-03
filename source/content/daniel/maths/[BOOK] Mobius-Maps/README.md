---
created: 31/08/2025 17:00
pagename: Möbius Maps (SoME4)
tags:
  - "complex-analysis green"
  - "geometry cyan"
---

# Using Möbius Maps to Manipulate the Complex Plane

As with all olympiad addicts, when I started university maths, I had to deal with a massive wave of depression when I realised that all those years I spent learning olympiad tricks, theorems and techniques, were *useless*. "I'll never need cyclic quadrilaterals again", I thought.

Even worse, Euclidean geometry was my favourite subject - but it seems to vanish off the face of the earth as soon as high school finishes.

Well, this all changed in my second year of university, when I took a complex analysis course that BLEW MY MIND. It made me realise that *olympiad geometry has a use after all!* There's a beautiful concept in complex analysis called a Möbius map, and it turns out to be very similar to olympiad inversion (if you know what that is). Today I'll do my best to build the intuition from the ground up.

I'm going to teach you how to use Möbius maps to beat up the complex plane like it owes you money.

<div className='w-full flex justify-center pt-4'>
  <AUTOSVG src='mobius/readme/waltuh.svg' width='400' height='200'/>
</div>

More concretely, I'm going to give you the tools to solve questions like this:

> Find a bijective differentiable function taking the region between the circles $\{|z|=1\}$ and $\{|z − 1| = 5/2\}$ to an annulus $\{1 < |z| < R\}$; you may choose the value of $R$.
> <div className="flex justify-center space-x-4 items-center mt-2"> <AUTOSVG src='mobius/readme/nonconcentricannulus.svg' width='200' height='200'/> <AUTOSVG/ src='mobius/readme/arrow.svg' width='100' height='100'/> <AUTOSVG src='mobius/readme/concentricannulus.svg' width='200' height='200'/> </div>

We care about questions like this, because you can think of "differentiable bijection" as meaning a "smooth deformation" of one shape into another; these turn out to preserve certain properties (for example, the fact that the region has a hole). So if we can find such maps, then the two shapes are "basically the same" - if you've ever heard of the "a mug is the same as a donut" joke, it's the same thing.

## Prerequisites

You should be comfortable with the idea of a complex number, and know what the <DiscreetLink href="https://www.mathsisfun.com/algebra/complex-plane.html">complex plane</DiscreetLink> is. Any kind of background from olympiad geometry is good as well, but don't worry; I'll try my best to fill in any holes.

## Here from SoME4?

Welcome! I'd recommend viewing this content on desktop. Please read the guide below, then <ProminentLink href="mobius-maps/1-inversion" internal>dive in</ProminentLink> to the first page of this book.