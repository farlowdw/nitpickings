import BibRef from '@site/src/components/BibRef';

#### The Lost Art of Logarithms

An [unexpected link](https://news.ycombinator.com/item?id=43356314) on Hacker News led to an online book-in-progress by Charles Petzold's (author of <BibRef id='CP2022' pages=''></BibRef>): [*The Lost Art of Logarithms*](https://www.lostartoflogarithms.com/). Looks like an interesting book in its own right, but some of the comments on the Hacker News post were even more interesting.

Specifically, one comment highlights the so-called [Genetic method](https://en.wikipedia.org/wiki/Genetic_method) of teaching mathematics: 

> The genetic method is a method of teaching mathematics coined by Otto Toeplitz in 1927. As an alternative to the axiomatic system, the method suggests using history of mathematics to deliver excitement and motivation and engage the class.

The method above is *exactly* what I've had in mind in terms of an effective way of going about teaching mathematics. One of my favorite math classes was the history of mathematics &#8212; it's very interesting when technical content is taught with a view towards the cultural influences at the time of its development. It's also good to simply have historical context in terms of what the original thinkers were up against.

Another commenter notes a remark from the famous mathematician, Felix Klein: "On a small scale, a learner naturally and always has to repeat the same developments that the sciences went through on a large scale."

It would be interesting to see such a teaching method applied to computing (e.g., in what contexts were various data structures and algorithms invented, etc.).

#### IO devices and latency

A [Hacker News post](https://planetscale.com/blog/io-devices-and-latency) on IO devices and latency was highly regarded &#8212; the [linked post](https://planetscale.com/blog/io-devices-and-latency) contains a lot of interesting visuals. Something to check out in more detail soon.

#### Recursion kills

A [Hacker News post](https://news.ycombinator.com/item?id=43357687) highlights [an article](https://blog.hartwork.org/posts/expat-2-7-0-released/) that explores how recursion was to blame for a bug in Expat (an XML parser written in C). The author ends the post by asking the reader to please tell your friends:

> Please leave recursion to math and keep it out of (in particular C) software: it kills and will kill again.

This particular story is neat, especially in light of preparing for coding interviews and having to become very comfortable with recursion (e.g., dynamic programming, backtracking, DFS, etc.). Lots of problem-solving strategies use recursion, but recursion can be the source of all sorts of issues in actual software, particularly security problems. See the [billion laughs attack](https://en.wikipedia.org/wiki/Billion_laughs_attack) for an interesting DoS attack aimed at parsers of XML documents.