---
title: Blog/Portfolio with Astro & Coolify
description: My personal portfolio/blog site and how I host it
pubDate: 2026-02-01
updateDate: 2026-02-02
cover: './cover.png'
coverAlt: "A screenshot of my personal blog/portfolio"
technologies: [
  'JavaScript',
  'Astro.JS',
  'HTML',
  'CSS',
]
links: [
  {
    url: "https://github.com",
    name: "Github"
  }
]
finished: true
---

## The Goal
I had a couple of different goals in mind when I started planning this project, the most important being that
I actually felt it was something I needed. So many times when building stuff (especially through my studies), I've been 
in a situation where I recognized the learning potential of a project and enjoyed building it, but where the product itself was... well, _useless_,
so I was very excited to jump on the opportunity to work on something that felt _real_, and like I would actually
be using it two months from now.

At this point I had decided that I wanted a website that could:

 - Display my portfolio of finished projects and work
 - Act as a digital business card of sorts, with contact details and a summary of my profile
 - Give me a place to write about interesting stuff I learn while working on projects, that isn't necessarily a project in itself

```js
function outOne(output) {
    console.log(output);
}

const outTwo = output => {
    console.log(output);
}

outTwo('test');
// => test
```

In addition to these more functional requirements, I also had some technical concerns regarding performance, hosting, and especially my
workflow for writing and pushing posts. As this was to be a continuously updated site, I not only had to consider the developer experience of actually building it,
but also the future workflow of updating it with posts and projects. Here the goal was to be able to push new posts to the site without having to touch code,
and _especially_ not individual HTML files.

I also knew that I wanted the site to be as lightweight as possible, and while I'm _sure_ that it's possible to create a blazingly fast and modern SPA with React, I'm also _sure_ that my
very first experience with those technologies would be anything but that. As such, I decided that for this project, simple & responsive was better than flashy & janky.


Going in, I already had some cursory experience with hosting an earlier project on Azure with a free _Azure for Students_ account. I found this to be
— rather paradoxically — both a very seamless and automatic process, and an incredibly finicky and frustrating one; creating a resource and connecting it
to my CI/CD workflow using _GitHub Actions_ for automatic deployment was made trivial by a very helpful user interface, however, that very same interface proved to be the 
main source of my later frustrations due to inconsistent navigation, confusing user-flow, and general unresponsiveness.

While I understand the utility of hyperscalers like Azure or AWS for enterprise applications, and I valued the learning experience, the complexity felt disproportionate to 
the project's scope, and I ultimately fel like I was using a bulldozer to pick up a dime.

Instead, I decided that this was my chance to get some experience with self-hosting; that way, I could have full control over what was happening on the server, 
and I would not depend (directly, at least) on big tech companies. Setting up my own VPS proved a great learning experience, and the savings were surprisingly substantial: 
for a setup like the server I ended up renting from [Hetzner](https://www.hetzner.com) (4vCPU | 8GB ram) I would have to pay up to [10x the amount](https://cloudcompare.xyz) on a provider like Digital Ocean.


## The Tech

### Astro
As luck would have it, the [Astro.JS](https://astro.build/) framework does pretty much exactly what I needed for this project, generating static pages with no JavaScript
shipped to the client out of the box (I use it minimally in this project). It also features a type-safe content management API, allowing me to easily define collections
like `project` and `post`, and publish new entries as simple `.md` files.

Even as someone with little JavaScript experience, getting started using Astro was a pretty seamless experience
(it doesn't hurt that they have amazing [docs](https://docs.astro.build/en/getting-started/) as well), and I found myself up and running very quickly, spending minimal time
getting bogged down by unfamiliar syntax or new patterns. For a project like this, the time it took until I was making key decisions about layout, design, and content was
just about perfect, although I did periodocially have to take a step back, and stop myself from implementing needless, flashy components just for the sake of it.

### Infrastructure
Instead of using managed hosting (Vercel/Netlify), I rented a VPS from Hetzner and set it up with Ubuntu, with the plan to use Docker to run all my different services in isolated
containers. Setting up the firewall rules, and generating SSH keys turned out to be fairly straight-forward, even with my limited knowledge of both linux and networking

### CI/CD & Coolify
To manage deployments, I installed [Coolify](https://coolify.io), an open-source, self-hosted Heroku alternative. Using a GitHub webhook I was able to set up a barebones CD workflow
with near instant deployment on a push to the production branch of my GitHub repository. All in all I continue to be very impressed with Coolify, bringing the experience of deploying
and managing my projects up to par (for the most part) with many small-to-medium scale PaaS providers, and it is definitely a tool I plan to continue using for the foreseeable future.


