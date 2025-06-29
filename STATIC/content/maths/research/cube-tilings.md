17/07/2023 17:00
[TAGS] coding blue, diagrams green
# Filling a cube with 1:2:3 Cuboids

> A positive integer $n$ is 'lucky' if it is possible to fill a cube with $n$ cuboids, each of whom has side ratio 1:2:3. Which numbers are lucky?

I encountered this problem while applying to <DiscreetLink href='https://mathsbeyondlimits.eu/'>MBL-Balkans 2023</DiscreetLink>. It's essentially a 3D version of the problem discussed in <DiscreetLink href='https://youtu.be/VZ25tZ9z6uI'>this numberphile video</DiscreetLink>.

It's more interesting to ask this version of the question:
> Let $C$ be the minimal positive integer such that all integers $ \geq C$ are lucky. Find an upper bound on $C$.

For example, if we managed to show that all integers greater than 100 are lucky, then an upper bound on $C$ would be 101. Of course, it might be very hard to find the actual value of $C$.

Below is the best upper bound on $C$ that I could get - do try the problem yourself and <MailLink>let me know</MailLink> your result.

<Spoiler>

$$C \leq 18$$

</Spoiler>

## Getting a foothold

Before we actually find a lucky number, we can try to find some rules of inference, for example "if $n$ is lucky then so is $n+1000$". If we can find lots of these, and at least one lucky number, then hopefully we can mark many integers as lucky.

We might first notice that if we have a filling of a cube with $n$  cuboids of side ratio 1:2:3, then we can split one of them into 8 new cuboids by halving along each edge. The new number of cuboids is $n+8-1 = n+7$ (minus one because of the cuboid we replaced). So we have that:

> If $n$ is lucky, then so is $n+7$.

This sort of feels like trying to build a cube out of wooden blocks, but the only blocks we have access to are cubes and 1:2:3 cuboids.

With this mental imagery, we can find another construction:

<AUTOSVG src='cubetilings/cubetilings1.svg' width='320' height='240'/>

We used 2 cubes and 3 cuboids, thus if $n$ and $m$ are lucky, we can scale two cubes tiled with $n$ and $m$ cuboids to fit inside this construction. Hence we know that:

> If $n$ and $m$ are lucky, then so is $n+m+3$.

We can continue to try constructions like this.

## Construction Tools

<Thm type="Claim" num="1">
If $n$ is lucky, then so is $n+7$.
<Proof>
See above.
</Proof>
</Thm>

<Thm type="Claim" num="2">
If $n$ and $m$ are lucky, then so is $n+m+3$.
<Proof>
See above.
</Proof>
</Thm>

<Thm type="Claim" num="3">
If $n$ and $m$ are lucky, then so is $n+m+8$.
<Proof>
<AUTOSVG src='cubetilings/cubetilings2.svg' width='280' height='300'/>
</Proof>
</Thm>

<Thm type="Claim" num="4">
If $n$ is lucky, then so is $n+15$.
<Proof>
<AUTOSVG src='cubetilings/cubetilings3.svg' width='240' height='300'/>

We can make a 6x6x3 cuboid with eleven 1:2:3 cuboids, as shown. Then, we can make another 6x6x3 cuboid using the same construction as in the proof of claim 3, where we wrap 4 cuboids around a cube. Thus we can combine these two 6x6x3 cuboids to form a 6x6x6 cube, using fifteen 1:2:3 cuboids and one smaller cube.
</Proof>
</Thm>

<Thm type="Claim" num="5">
If $n$ is lucky, then so is $n+13$.
<Proof>
<AUTOSVG src='cubetilings/cubetilings4.svg' width='288' height='400'/>
</Proof>
</Thm>

<Thm type="Claim" num="6">
If $n$ is lucky, then so is $n+12$.
<Proof>
<AUTOSVG src='cubetilings/cubetilings5.svg' width='300' height='300'/>
</Proof>
</Thm>

## Finding a base case

To actually find a lucky number, we remove cubes from our lego building blocks and only use 1:2:3 cuboids.

<Thm type="Claim" num="7">
8 is lucky.
<Proof>
<AUTOSVG src='cubetilings/cubetilings6.svg' width='200' height='200'/>
</Proof>
</Thm>

Now, let's see what numbers we can conquer with what we have so far.

By Claim 1, we know that 8, 15, 22, 29, 36 etc. are all lucky.

|| 1 || 2 || 3 || 4 || 5 || 6 || 7 || <p className="font-bold text-text-emph">8</p> || 9 || 10 ||
|| 11 || 12 || 13 || 14 || <p className="font-bold text-text-emph">15</p> || 16 || 17 || 18 || 19 || 20 ||
|| 21 || <p className="font-bold text-text-emph">22</p> || 23 || 24 || 25 || 26 || 27 || 28 || <p className="font-bold text-text-emph">29</p> || 30 ||
|| 31 || 32 || 33 || 34 || 35 || <p className="font-bold text-text-emph">36</p> || 37 || 38 || 39 || 40 ||
|| etc. ||

Now we can use Claim 2 to conquer 8+8+3=19, 8+15+3=26, 15+15+3=33, 15+22+3=40, etc.

|| 1 || 2 || 3 || 4 || 5 || 6 || 7 || <p className="font-bold text-text-emph">8</p> || 9 || 10 ||
|| 11 || 12 || 13 || 14 || <p className="font-bold text-text-emph">15</p> || 16 || 17 || 18 || <p className="font-bold text-text-emph">19</p> || 20 ||
|| 21 || <p className="font-bold text-text-emph">22</p> || 23 || 24 || 25 || <p className="font-bold text-text-emph">26</p> || 27 || 28 || <p className="font-bold text-text-emph">29</p> || 30 ||
|| 31 || 32 || <p className="font-bold text-text-emph">33</p> || 34 || 35 || <p className="font-bold text-text-emph">36</p> || 37 || 38 || 39 || <p className="font-bold text-text-emph">40</p> ||
|| etc. ||

And so on, utilising all of the Claims. In the end, we conquer the following numbers up to 40:

|| 1 || 2 || 3 || 4 || 5 || 6 || 7 || <p className="font-bold text-text-emph">8</p> || 9 || 10 ||
|| 11 || 12 || 13 || 14 || <p className="font-bold text-text-emph">15</p> || 16 || 17 || 18 || <p className="font-bold text-text-emph">19</p> || <p className="font-bold text-text-emph">20</p> ||
|| <p className="font-bold text-text-emph">21</p> || <p className="font-bold text-text-emph">22</p> || <p className="font-bold text-text-emph">23</p> || <p className="font-bold text-text-emph">24</p> || 25 || <p className="font-bold text-text-emph">26</p> || <p className="font-bold text-text-emph">27</p> || <p className="font-bold text-text-emph">28</p> || <p className="font-bold text-text-emph">29</p> || <p className="font-bold text-text-emph">30</p> ||
|| <p className="font-bold text-text-emph">31</p> || <p className="font-bold text-text-emph">32</p> || <p className="font-bold text-text-emph">33</p> || <p className="font-bold text-text-emph">34</p> || <p className="font-bold text-text-emph">35</p> || <p className="font-bold text-text-emph">36</p> || <p className="font-bold text-text-emph">37</p> || <p className="font-bold text-text-emph">38</p> || <p className="font-bold text-text-emph">39</p> || <p className="font-bold text-text-emph">40</p> ||
|| etc. ||

OK - great! Now we have seven consecutive numbers (26 to 32) all being lucky. Since $n \implies n+7$ (Claim 1), this means every integer greater than or equal to 26 is lucky. So $C$ is at most 26.

## Reducing the bound with code

Have you noticed that in the table above, 25 sticks out like a sore thumb? If we could just show that 25 is lucky, we could add the numbers from 19 to 24 to our chain of consecutive numbers... and C would be at most $19$ - and that would be a good place to stop, because conquering 25 feels like such a bargain (we would reduce C by a lot, not just by 1). But 25 = 18 + 7, so can we show that 18 is lucky? Then we'd have $C \leq 18$. 18 feels too big to manually try and search for, so can we write some code to brute force it?

Yes we can - if we assume that we can build up tilings by repeatedly joining two cuboids at a time into a larger cuboid, then we can store the side ratios that can be constructed like this.

The side ratio is stored as a 3-tuple $(x,y,z)$ with x always equal to 1. To see if we can combine two ratios, we check if the $z$-values are the same, and if so we add their $y$-values (assuming we always join them by placing one cuboid on top of the other - thus for each 3-tuple, we must store all of its 6 permutations). For example, $(1,2,3) + (1,2,3) = (1,4,3)$.

We can denote by $S_k$ the set of all side ratios that can be constructed using exactly $k$ 1:2:3 cuboids. We generate $S_k$ by trying to comine all aspect ratios which have $k$ total cuboids, which we can do dynamically (i.e. generate $S_1$, then $S_2$, then $S_3$, etc.). Then, we look at which $S_k$ contain $(1,1,1)$.

```py
#!/usr/bin/python3

from fractions import Fraction as F
from collections import defaultdict

S = {}

# normalized fractions: x := 1
S[1] = {
        (F(1,1),F(2,1),F(3,1)): (),
        (F(1,1),F(3,1),F(2,1)): (),
        (F(1,1),F(1,2),F(3,2)): (),
        (F(1,1),F(3,2),F(1,2)): (),
        (F(1,1),F(1,3),F(2,3)): (),
        (F(1,1),F(2,3),F(1,3)): (),
       }

for k in range(2,22):
    print(k)
    # compute S_k
    S[k] = defaultdict(lambda: ((0,0), (0,0))) # (n,key), (m,key)
    for n in range(1, k//2+1):
        m = k-n # m+n = k
        for a in S[n].keys():
            for b in S[m].keys():
                if a[2] == b[2]:
                    x,y,z = (F(1,1), a[1]+b[1], a[2])
                    newratios = list(set([
                        (F(1,1),y/x,z/x),
                        (F(1,1),z/x,y/x),
                        (F(1,1),x/y,z/y),
                        (F(1,1),z/y,x/y),
                        (F(1,1),x/z,y/z),
                        (F(1,1),y/z,x/z),
                        ]))
                    if S[k][newratios[0]] == ((0,0),(0,0)):
                        if newratios[0] == (1,1,1):
                            print(f"FOUND CUBE FOR S_{k}")
                        for newratio in newratios:
                            S[k][newratio] = ((n,a),(m,b))

def print_construction(k, r, depth):
    if k == 1:
        # terminal nodes displayed with a colon
        print("  "*depth, f":({r[0]}, {r[1]}, {r[2]})")
        return
    print("  "*depth, f"({r[0]}, {r[1]}, {r[2]})")
    ((n,a),(m,b)) = S[k][r]
    print_construction(n, a, depth+1)
    print_construction(m, b, depth+1)

r = (1, 1, 1)

for k in S.keys():
    if k==1: continue 
    if S[k][r] != ((0,0),(0,0)):
        print(f"found {r} in S_{k}:")
        print_construction(k, r, 0)
```

If the program finds $(1,1,1)$ in $S_k$ (i.e. a cube, although you can search for any ratio you want by changing r), then it will print out the way it found to construct it, in a tree-like manner using the recursive `print_construction` function.

**The program found the following construction**, proving that 18 is lucky:

<AUTOSVG src='cubetilings/cubetilings7.svg' width='480' height='640'/>

Thus, 18+7=25 is also lucky, and so **$C \leq 18$**.