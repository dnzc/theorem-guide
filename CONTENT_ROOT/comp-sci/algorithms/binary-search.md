# Binary Search: an Intuitive Algorithm

Everyone has performed a binary search without realizing: if you look for the word "gerontology" in the dictionary, you wouldn't go flip through every page until you found it. Instead you'd check the middle, and if you overshot then you'd check the middle of the first chunk, then if you if undershot you'd check the middle of the remaining chunk, and so on, until you find the word.

In programmer terms, we can use binary search to search for an item in a sorted array.
We keep track of a left pointer and a right poiner. Then we check the middle index by `(left + right) / 2` (rounding down).

For example, if we were wanted to find the index of 8 in the array [1, 2, 5, 7, 8, 9, 10], we'd start by setting the left and right pointer to index 0 and index 6 respectively.

```py
[1, 2, 5, 7, 8, 9, 10]
 ^        ^        ^
left=0   mid=3   right=6
```

Then, since the item we're looking for (8) is larger than the item at the middle, we know that it has to lie to the right of the middle pointer, thus we can update the left pointer to be `mid+1`.
```py
[1, 2, 5, 7, 8, 9, 10]
             ^     ^
             l=4   r=6
```
Now the middle pointer is at index 5, and points to 9. This is more than 8, so we can update the right pointer to be `mid-1`:
```py
[1, 2, 5, 7, 8, 9, 10]
             ^
             l=r=4
```
Now the left and right pointer point to the same thing, so we've found the index of 8: it's 4. Well actually, we need one more check that the item that's being pointed to is actually 8 - for example, if it was 7.5 instead, we'd still end up with `left = right = 4`.

The time complexity of binary search is $O(\log n)$ , because each comparison halves the search space, so it takes a logarithmic number of operations (and $\log_2(n) = \frac{\log n}{\log 2}$).
## Pseudocode

I like to define the left pointer as the one you know it's definitely *greater than or equal to*, and the right pointer as the one you know it's definitely *less than*. So, $l \leq x \lt r$.

__COPIABLE__
```ocaml
function search(arr, length, target)
    l := 0
    r := n-1
    while l+1 < r do
        m := floor((l+r) / 2)
        if arr[m] > target then
            r := m
        else if arr[m] < target then
            l := m+1
        else
            return m
        end
    end
end
```

## Example problem: Minimum excludant

> Given a sorted array of distinct positive integers, find the smallest positive integer that is not in the array.

**Examples**

> Input: `[1, 2, 3, 5, 9, 12, 13]` <CopyButton text='[1, 2, 3, 5, 9, 12, 13]'/>
>
> Output: `4`

> Input: `[3, 5, 7, 10]` <CopyButton text='[3, 5, 7, 10]'/>
>
> Output: `1`

> Input: `[1, 2, 3, 4]` <CopyButton text='[1, 2, 3, 4]'/>
>
> Output: `5`

**Solution**

<Spoiler>

Considering the smallest missing element from the array, we must have that the items before it are the positive integers in order, with no gaps. So the smallest missing element is the smallest element whose value is not equal to its index (indexing from 1). We can use binary search to find this.

__COPIABLE__
```py
#!/usr/bin/python3

def solve(array):
    l = 0
    r = len(array)
    while l != r:
        m = (l+r) // 2
        if array[m] != m+1:
            r = m
        else:
            l = m+1
    return l+1
```
</Spoiler>

## Harder problem: Ntarsis' Set

<ProminentLink href="https://codeforces.com/contest/1853/problem/C">View problem on codeforces</ProminentLink>

> Ntarsis has been given a set $S$, initially containing the integers $1, 2, 3 \cdots, 10^{1000}$ in sorted order. Every day, he removes the $a_1$-th, $a_2$-th, $\cdots$, $a_n$-th smallest numbers in $S$ **simultaneously**.
>
> What is the smallest element in $S$ after $k$ days?
>
> <br/>
>
> *Input*
>
> The first line contains the number of testcases $t \;(1 \leq t \leq 10^5)$. The description of the testcases follows.
>
> The first line of each testcase consists of two integers $n$ and $k$ ($1 \leq n, k \leq 2 \cdot 10^5$) - the length of $a$ and the number of days.
>
> The following line of each testcase consists of $n$ integers $a_1, a_2, \cdots, a_n$ ($1 \leq a_i \leq 10^9$) - the elements of array $a$.
>
> It is guaranteed that:
>
> - the sum of $n$ over all testcases does not exceed $2 \cdot 10^5$
> - the sum of $k$ over all testcases does not exceed $2 \cdot 10^5$
> - $a_1 \lt a_2 \lt \cdots \lt a_n$ for all testcases.
>
> <br/>
>
> *Output*
>
> For each testcase, print an integer that is the smallest element in $S$ after $k$ days.
>
>

**Example**

Input:

__COPIABLE__
```
7
5 1
1 2 4 5 6
5 3
1 3 5 6 7
4 1000
2 3 4 5
9 1434
1 4 7 9 12 15 17 18 20
10 4
1 3 5 7 9 11 13 15 17 19
10 6
1 4 7 10 13 16 19 22 25 28
10 150000
1 3 4 5 10 11 12 13 14 15
```

Output:

__COPIABLE__
```
3
9
1
12874
16
18
1499986
```

**Solution**
<Spoiler>

Let's simulate backwards instead of forwards. Instead of deleting the positions $a_1, a_2, \cdots, a_n$ each time then checking the first number after $k$ operations, let's start with the number $1$ at the front and insert zeroes at positions $a_1 - 1, a_2 - 2, \cdots, a_n - n$ so that the zeroes will occupy positions $a_1, a_2, \cdots, a_n$ after insertion. After $k$ insertions, we check what position $1$ is in.

<br/>

If the current position of $1$ is $x$, then we need to find how many of $a_1, a_2, \cdots, a_n$ (note this is a nondecreasing sequence) are less than or equal to $x$. We can do this by binary searching on $a_1, a_2, \cdots, a_n$ to find the rightmost occurence of the largest number less than or equal to $x$. The index of that item is how many items will be inserted before the 1; thus we add it to $x$ to get the new position of the 1.

<br/>

If $a_1 \neq 1$, then the answer is 1. Otherwise, we start with $x=0$ and perform the process described above $k$ times. The time complexity is $O(n + k \log n)$.

<br/>

C++ solution:

__COPIABLE__
```c++
#include <bits/stdc++.h>

#define ll long long

using namespace std;
 
int n, k, a[200010];
 
void solve() {
    cin >> n >> k;
    for(int i=0; i<n; ++i) {
        cin >> a[i];
        a[i] -= i+1;
    }
    if(a[0] != 0) {
        cout << "1\n";
        return;
    }
 
    ll x = 0;
    for(int i=0; i<k; ++i) {
        int l=0, r=n;
        int m;
        while(r-l>1) {
            m = (l+r)/2;
            if(a[m] > x) r=m;
            else l=m;
        }
        x += (ll)(l+1);
    }
    cout << x+1 << '\n';
}
 
int main() {
    ios::sync_with_stdio(0);
    cin.tie(nullptr);
  
    int t; cin >> t;
    while(t--) solve();
}
```
</Spoiler>