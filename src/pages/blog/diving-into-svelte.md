---
layout: ../../layouts/PostLayout.astro
title: 'Diving Into Svelte'
author: 'Tyler Polito'
date: '19 Jun 2021'
updated: '19 Jun 2021'
tag: 'tech'
---

For those who don't know, I am currently working as a Frontend Engineer and I'm always keeping my eyes out for new technologies. Svelte has been on my radar for a while, but I haven't had the time to dive in and take a look. So I thought I'd document my process of learning about Svelte in comparison to (mostly) React. Which is the library I use day-to-day at work, and the one that most of my projects run on.

### Getting Started

The first thing I did was head over to the [Svelte website](https://svelte.dev/) and start the [interactive tutorial](https://svelte.dev/tutorial/basics). The interactive tutorial gives a very high-level overview and is one of the best interactive tutorials I've ever seen. After that, I set out to build something super simple that _isn't_ a to-do list. I find that the best way to learn a new technology is to use it, which is why building something is usually the first step I take when trying out something new. I decided on a super simple app to look up DnD Spells and then display info about them in a modal. You can find the [repo here](https://github.com/tpolito/svelte-spells).

![](https://www.datocms-assets.com/60736/1641439089-svelte_spells.png)

### Impressions so far

After building the app with Svelte I have my first impressions. I'll go over everything that stood out to me. First off, variables in Svelte are _reactive_ by default. This means when you need a stateful component, you don't need to do anything extra.

```javascript
/* Svelte Example */
let name = 'Tyler';

/* React Example */
import { useState } from 'react';

const [name, setName] = useState('Tyler');
```

In both cases, the variables `name` is stateful and will trigger DOM updates. In my opinion, Svelte's way is cleaner and easier to understand.

> It should be noted that in Svelte DOM updates are only triggered when variables are _assigned_. Meaning if your state includes objects or arrays updating them with built-in methods will not work. They show how to handle this in their [documentation here](https://svelte.dev/tutorial/updating-arrays-and-objects).

Another feature of Svelte I like is the `on:` directive. The `on:` directive is how Svelte listens for DOM events and they can be modified with [event modifiers](https://svelte.dev/tutorial/event-modifiers). I didn't get the chance to dive into those when building my DnD app, but they look very interesting and I can't wait to visit them in the future.

Let's get into something that I wouldn't say its bad, but I found it frustrating. The `{#each}` block. Normally in most cases the format of a `foreach` or `for` loop goes as follows `for(let thing of thingYourInteratingOver)` however in Svelte they flip-flop the `thing` and `thingYourIteratingOver`.

```
{#each thingYourIteratingOver as thing}
  <p>{thing.value}</p>
{/each}
```

I had to revisit the `{#each}` block every time I used it due to the fact my brain was not used to this. While I'm sure I would get used to this if I was working in Svelte more, it was annoying this first time using it.

### 🔥 Rapid Fire Thoughts 🔥

That was everything that stood out to me upon first use. Here are a few more quick thoughts I had just from going through the tutorial, but didn't get a chance to use during the app. I'll be sure to come back and edit this post if these thoughts change or point to a new post where I clear up my thoughts.

- Stores seems easier to use
- Context seems easier to implement but is less powerful than its counterpart React's Context API
- Lifting state is less of a hassle
- Built animation tweening and motion is awesome
- Writing templated HTML as opposed to JSX is a nice refresher
- Lifecycle methods are great
- Dynamic styling is underwhelming and React definitely beats it out in that department

### Conclusion

Exploring Svelte was very fun, and I'm super excited to see how it evolves in the future. I'm not sure I would use it for a large project at the moment. However, it will most likely be my go-to for building small, less complex projects.
