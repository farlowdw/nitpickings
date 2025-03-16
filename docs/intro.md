---
title: Introduction
hide_title: true
sidebar_label: Introduction
description: Docs introduction
draft: false
tags: 
  - Introduction
keywords: 
  - introduction
hide_table_of_contents: true
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Link from '@docusaurus/Link';
import DocsLink from '@site/src/components/DocsLink';
import ArrowRight from '@site/static/icons/arrow_right.svg';
import Asterisk from '@site/src/components/Asterisk';
import BibRef from '@site/src/components/BibRef';
import TOCInline from '@theme/TOCInline';

# At a glance

<TOCInline 
  toc={[
    {id: 'why-nitpickings', level: 2, value: 'Why "nitpickings"?'},
    {id: 'the-daybook', level: 2, value: 'The daybook'},
    {id: 'notable-core-content', level: 3, value: 'Notable core content'},
    {id: 'notable-blog-posts', level: 3, value: 'Notable blog posts'},
    {id: 'notable-external-resources', level: 3, value: 'Notable external resources'},
    {id: 'preliminary-terrors', level: 2, value: 'Site inspirtation and delivery from preliminary terrors'},
    {id: 'admonitions-site-specific', level: 2, value: 'Site-specific admonitions'},
    {id: 'admonitions-general', level: 2, value: 'General admonitions'},
  ]}
/>

### Why "nitpickings"? {#why-nitpickings}

Some years ago I asked [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth), known by some as [the Yoda of silicon valley](https://www.nytimes.com/2018/12/17/science/donald-knuth-computers-algorithms-programming.html), for any advice he might have in my pursuit of mathematics. His response was heartwarming, especially given the context.<Asterisk cursor='help' symbol='[*]' >I was submitting a correction to one of his books, hoping to obtain a <a href="https://en.wikipedia.org/wiki/Knuth_reward_check">reward check</a>. I lucked out and am now the proud owner of a non-zero account balance in <a href="https://www-cs-faculty.stanford.edu/~knuth/boss.html">The Bank of San Serriffe</a>!</Asterisk>:

<div align='center' className='centeredImageDiv'>
  <img width='1000px' src={require('@site/static/img/knuth.jpg').default} />
</div>

In type:

> Hey, what can I say? Keep up with reading, loving, and especially writing. [Do you really like the word "oftentimes"?] Keep up nitpicking too.<br/>don knuth
>
> \* Thank goodness for the existence of difficulties, except when we can't surmount them.

I appreciated his advice throughout undergrad as well as my first years of teaching mathematics. And I now appreciate his advice all the more as a software engineer. Why? Because it encourages an often undervalued practice: *nitpicking*.

Nitpicking on its own usually has a pejorative connotation, as its [Wiki entry](https://en.wikipedia.org/wiki/Nitpicking) makes clear:

> Nitpicking is a term, first attested in 1956, that describes the action of giving too much attention to unimportant detail. A person who nitpicks is termed as a nitpicker. [...] As nitpicking inherently requires fastidious attention to detail, the term has become appropriated to describe the practice of meticulously searching for minor, even trivial errors in detail.

But isn't it such attention to detail that leads to myriad innovations in the arts and sciences (e.g., software development and mathematics)? It is perhaps more useful, especially in technical fields, to think of "nitpicking" as *a form of curiosity* in service of improving whatever nit is being picked. Said another way, the kind of ideal nitpicker I have in mind is one who asks seemingly simple questions but seeks potentially profound answers. The nitpicker's favorite question is simple: *Why?*

### The daybook {#the-daybook}

Suppse you've been fortunate enough to discover that one of your seemingly simple questions was not, in fact, so simple after all, and the process of trying to answer your question has led you to identify some profound truth. What should you do with your newfound truth? You should record it! Where? In a *daybook*! What's a daybook? 

The idea of an "engineering daybook" is explored more in <BibRef id='DT2019' pages='pp. 100-101'></BibRef>, but the relevant excerpt is reproduced below for the sake of clarity:

> Dave once worked for a small computer manufacturer, which meant working alongside electronic and sometimes mechanical engineers.
>
> Many of them walked around with a paper notebook, normally with a pen stuffed down the spine. Every now and then when we were talking, they'd pop the notebook open and scribble something.
>
> Eventually Dave asked the obvious question. It turned out that they'd been trained to keep an engineering *daybook*, a kind of journal in which they recorded what they did, things they'd learned, sketches of ideas, readings from meters: basically anything to do with their work. When the notebook became full, they'd write the date range on the spine, then stick it on the shelf next to previous daybooks. There may have been a gentle competition going on for whose set of books took the most shelf space.
>
> We use daybooks to take notes in meetings, to jot down what we're working on, to note variable values when debugging, to leave reminders where we put things, to record wild ideas, and sometimes just to doodle.
>
> The daybook has three main benefits:
> 
> - It is more reliable than memory. People might ask "What was the name of that company you called last week about the power supply problem?" and you can flip back a page or so and give them the name and number.
> - It gives you a place to store ideas that aren't immediately relevant to the task at hand. That way you can continue to concentrate on what you are doing, knowing that the great idea won't be forgotten.
> - It acts as a kind of rubber duck. When you stop to write something down, your brain may switch gears, almost as if talking to someone a great chance to reflect. You may start to make a note and then suddenly realize that what you'd just done, the topic of the note, is just plain wrong.
> 
> There's an added benefit, too. Every now and then you can look back at what you were doing oh-so-many-years-ago and think about the people, the projects, and the awful clothes and hairstyles.
> 
> So, try keeping an engineering daybook. Use paper, not a file or a wiki: there's something special about the act of writing compared to typing. Give it a month, and see if you're getting any benefits.
>
> If nothing else, it'll make writing your memoir easier when you're rich and famous.

This site comprises my own personal "daybook" of sorts, albeit not the pen-and-paper type described in the excerpt above. How so? Because on this site you'll find many of the things I've learned, sketches of ideas, and basically anything to do with my work. Content is largely presented in one of three flavors:

- Core content: Posts meant to be maintained over time given their perceived significance (e.g., [window functions in SQL](/docs/sql/window-functions))
- [Nit Wits](/blog): Essentially a blog with self-contained posts (e.g., [introduction to monotonic stacks and queues](/blog/2024/04/26/2024/monotonic-stacks-queues))
- [Daily nitpickings](/docs/daily-nitpickings/introduction): Loosely organized accounts of different things I've learned or found notable on different days &#8212; these entries more closely align with the daybook entries discussed in the excerpt above. I should note I also keep separate pen-and-paper journals in the flavor of <BibRef id='JM2012' pages=''></BibRef> and <BibRef id='JM2020' pages=''></BibRef> because I also agree that there is something special about the act of writing compared to typing.

Some notable entries are provided below for ease of reference:

<div className='gallery'>
  <div className='sub-heading'>
    <h3 id='notable-core-content'>Core Content</h3>
  </div>
  <div className='card'>
    <h4>Data Structures Overview</h4>
    <div className='introCardDetails' >
      Check out time and space complexity overviews for various data structures and array sorting algorithms.
    </div>
    <DocsLink to='/docs/dsa-topics/introduction'>See Data Structures Overview <ArrowRight className='arrow' /></DocsLink>
  </div>
  <div className='card'>
    <h4>Window Functions (SQL)</h4>
    <div className='introCardDetails' >An in-depth guide to SQL window/analytic functions. This is not only a guide but also a useful reference to keep handy (e.g., syntax guidance, basic examples, etc.).</div>
    <DocsLink to='/docs/sql/window-functions'>See Window Functions <ArrowRight className='arrow' /></DocsLink>
  </div>
  <div className='card'>
    <h4>Feynman Technique</h4>
    <div className='introCardDetails' >Tired of not being able to learn things quickly? Give the Feynman Technique a try next time.</div>
    <DocsLink to='/docs/templates/feynman-technique'>See Feynman Technique <ArrowRight className='arrow' /></DocsLink>
  </div>
  <div className='card'>
    <h4>Definitions, theorems, and results</h4>
    <div className='introCardDetails' >
      A cumulative list of definitions, theorems, and results can be quite useful, especially when you are in need of a dust-up or review.
    </div>
    <DocsLink to='/docs/definitions-theorems-results'>See Definitions <ArrowRight className='arrow' /></DocsLink>
  </div>
</div>
<br />



<div className='gallery'>
  <div className='sub-heading'>
    <h3 id='notable-blog-posts'>Nit Wits</h3>
  </div>
  <div className='card'>
    <h4>Comments with Giscus</h4>
    <div className='introCardDetails'>
      This blog post details how to enable comment sections on doc pages and blog entries on sites powered by Docusaurus (like this one) using giscus.
    </div>
    <DocsLink to='/blog/2022/10/27/2022/giscus-comments'>Read <ArrowRight className='arrow' /></DocsLink>
  </div>
  <div className='card'>
    <h4>Light/Dark Modes with Material UI and Docusaurus</h4>
    <div className='introCardDetails'>
      This blog post details how to synchronize the default light and dark mode palettes used in Material UI with the light or dark mode being used on a Docusaurus site.
    </div>
    <DocsLink to='/blog/2022/10/28/2022/docusaurus-mui-light-dark'>Read <ArrowRight className='arrow' /></DocsLink>
  </div>
</div>
<br />




<div className='gallery'>
  <div className='sub-heading'>
    <h3 id='notable-external-resources'>External Resources</h3>
  </div>
  <div className='card'>
    <h4>Docusaurus Input-Output Examples</h4>
    <div className='introCardDetails'>
      Collection of input-output examples for use with sites powered by Docusaurus.
    </div>
    <DocsLink to='https://courses.dwf.dev/docs/reference/docusaurus/templates'>Visit <ArrowRight className='arrow' /></DocsLink>
  </div>
  <div className='card'>
    <h4>KaTeX Reference</h4>
    <div className='introCardDetails'>
      Basically the KaTeX documentation site (but everything is ensured to work with Docusaurus).
    </div>
    <DocsLink to='https://courses.dwf.dev/docs/reference/docusaurus/katex'>Visit <ArrowRight className='arrow' /></DocsLink>
  </div>
  <div className='card'>
    <h4>MySQL Reference</h4>
    <div className='introCardDetails'>
      Easy-to-use references to many MySQL functions (e.g., string functions, date functions, etc.).
    </div>
    <DocsLink to='https://courses.dwf.dev/docs/reference/sql/mysql'>Visit <ArrowRight className='arrow' /></DocsLink>
  </div>
  <div className='card'>
    <h4>Postgres Reference</h4>
    <div className='introCardDetails'>
      Easy-to-use references to many Postgres functions (e.g., string functions, date functions, etc.).
    </div>
    <DocsLink to='https://courses.dwf.dev/docs/reference/sql/postgresql'>Visit <ArrowRight className='arrow' /></DocsLink>
  </div>
  <div className='card'>
    <h4>PG Exercises Reference</h4>
    <div className='introCardDetails'>
      Comprehensive reference for the popular online Postgres Exercises tutorial.
    </div>
    <DocsLink to='https://courses.dwf.dev/docs/reference/sql/pg-exercises'>Visit <ArrowRight className='arrow' /></DocsLink>
  </div>
</div>

### Site inspiration and delivery from preliminary terrors {#preliminary-terrors}

Have you ever refrained from asking a question because you were terrified of possibily looking like an idiot? If so, then maybe you can identify with this meme (I know I can):

<div align='center' className='centeredImageDiv'>
  <img width='350px' src={require('@site/static/img/learning-at-school-meme.jpg').default} />
</div>

If you have experience with seeking technical help on the internet (e.g., [Stack Overflow](https://stackoverflow.com/questions) for programming, [Math Stack Exchange](https://math.stackexchange.com/) for math, etc.), then you are probably familiar with the fact that these communities are often less than welcoming. More like [openly hostile](https://news.ycombinator.com/item?id=36184889). A common trope is for users to post answers that serve little more than to stroke their own ego while leaving the person who asked the question more confused (and frustrated) than ever. Carl Linderholm hit on this exact theme as far back as 1971 in the introduction to his satirical book *Mathematics Made Difficult* <BibRef id='CL1971' pages='p. 10'></BibRef>:

> There is no doubt that an absolute ignoramus (not a mere qualified ignoramus, like the author) may become slightly confused on reading this book. Is this bad? On the contrary, it is highly desirable. Mathematicians always strive to confuse their audiences; where there is no confusion there is no prestige.

Even further back, in 1910, Sylvanus Thompson remarked on the tendency of authors in mathematics to make matters unnecessarily difficult in an attempt to appear clever. He had the following to say in the brief prologue to his book *Calculus Made Easy* <BibRef id='ST1910' pages='p. 38'></BibRef>:

> Considering how many fools can calculate, it is surprising that it should be thought either a difficult or a tedious task for any other fool to learn how to master the same tricks.
>
> Some calculus-tricks are quite easy. Some are enormously difficult. The fools who write the text-books of advanced mathematics &#8212; and they are mostly clever fools &#8212; seldom take the trouble to show you how easy the easy calculations are. On the contrary, they seem to desire to impress you with their tremendous cleverness by going about it in the most difficult way.
>
> Being myself a remarkably stupid fellow, I have had to unteach myself the difficulties, and now beg to present to my fellow fools the parts that are not hard. Master these thoroughly, and the rest will follow. What one fool can do, another can.

Thompson makes good on his promise in the first chapter of his book, which is scarcely a page and titled *To Deliver You from the Preliminary Terrors*. Thompson's words are like a breath of fresh air (and effective reminder) for anyone who has ever taken Calculus:

> The preliminary terror, which chokes off most high school students from even attempting to learn how to calculate, can be abolished once for all by simply stating what is the meaning &#8212; in common-sense terms &#8212; of the two principal symbols that are used in calculating.
>
> These dreadful symbols are:
> 
> 1. $d$ which merely means "a little bit of".
> 
>     Thus $dx$ means a little bit of $x$; or $du$ means a little bit of $u$. Ordinary mathematicians think it more polite to say "an element of", instead of "a little bit of". Just as you please. But you will find that these little bits (or elements) may be considered to be infinitely small.
> 
> 2. $\displaystyle\int$ which is merely a long $S$, and may be called (if you like) "the sum of".
> 
> Thus $\int dx$ means the sum of all the little bits of $x$; or $\int dt$ means the sum of all the little bits of $t$. Ordinary mathematicians call this symbol "the integral of". Now any fool can see that if $x$ is considered as made up of a lot of little bits, each of which is called $dx$, if you add them all up together you get the sum of all the $dx$'s (which is the same thing as the whole of $x$). The word "integral" simply means "the whole". If you think of the duration of time for one hour, you may (if you like) think of it as cut up into $3600$ little bits called seconds. The whole of the $3600$ little bits added up together make one hour.
> 
> When you see an expression that begins with this terrifying symbol, you will henceforth know that it is put there merely to give you instructions that you are now to perform the operation (if you can) of totalling up all the little bits that are indicated by the symbols that follow.
> 
> That's all.

What's the purpose of including all of these different excerpts on this site? Because I want this site to be a sort of "[Everyman](https://en.wikipedia.org/wiki/Everyman)" for people learning how to code. Check the ego at the door. Unfettered curiosity is the goal.

### Specific admonitions {#admonitions-site-specific}

Content on this site may be highlighted in various ways depending on context. Specifically, an [admonition](https://docusaurus.io/docs/markdown-features/admonitions) may be used to alert the reader to content of a distinctive type:

:::dwf DWF

This is a **DWF** alert. It's *my* way of making a statement within my own content. These alerts are essentially me talking to myself as if the reader is also present.

:::

:::key Key Idea

This is a **key idea** alert. I'm generally a fan of [TLDR](https://en.wikipedia.org/wiki/TL;DR) ("too long, didn't read"), but sometimes the goal isn't just to summarize something but to really highlight the key idea (e.g., algorithm idea, data structure purpose, etc.).

:::

:::perf Performance

This is a **performance** alert. Such alerts will generally be used in the context of data structures and algorithms content and may point to how to execute some task in a performant manner.

:::

:::extension Extension

This is an **extension** alert. Such alerts are likely to occur in problem-solving contexts in the guise of a "follow-up" or something similar.

:::

:::study Study

This is a **study** alert. Sometimes the best way to learn something is to study original sources, white papers, etc. Links highlighted in these alerts will usually be something more than just a link to refer to but something to actually spend some time with.

:::

:::tool Toolbox Disclaimer

This is a **toolbox disclaimer** alert. This generally means whatever you're looking at is actively under construction and is likely to be changed imminently or in the near future (e.g., unpolished core content, incomplete blog posts, etc.).

:::


### General admonitions {#admonitions-general}

The admonitions above are unique to this site. More general admonitions are defined in a similar vein to [infima alerts](https://infima.dev/docs/components/alert):

:::danger Danger

This is a **danger** alert. Something has either gone wrong or has a high likelihood of going wrong if this alert is not heeded.

:::

:::caution Caution

This is a **caution** or **warning** alert. Ignore at your own risk!

:::

:::info Info

This is an **info** alert. Helpful information is being provided that is not critical to the topic at hand but should probably be read regardless.

:::

:::tip Tip

This is a **success** or **tip** alert. Something good or helpful is being discussed!

:::

:::note Note

This is a secondary **note** alert. Ancillary information is being provided.

:::

