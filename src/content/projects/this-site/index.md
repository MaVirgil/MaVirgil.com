---
title: Portfolio/Blog
description: My personal portfolio/blog site
pubDate: 2026-04-22
updateDate: 2026-09-10
cover: './cover.png'
coverAlt: "A screenshot of my personal blog/portfolio"
technologies: [
  'JavaScript',
  'HTML',
  'CSS',
]
links: [
  {
    url: "https://github.com/MaVirgil/MaVirgil.com",
    name: "GitHub"
  }
]
finished: true
---

I had a couple of different goals in mind when I started planning this project, the most important being that it solved a real need for me. Most of my previous small-scale projects, especially those made through my studies, have primarily been useful to me as learning experiences, but the final product itself was always, well... _useless_. This would also be my first real project using JavaScript, having almost exclusively used Java before, and I knew that carried some risk: it would have been easy to end up with a messy and slow solution, so instead of reaching for a framework like React, I wanted to focus on keeping the site as lightweight as possible. Simple & responsive beats flashy & janky.

I wanted a website that could display my portfolio of finished projects and work, act as a digital business card of sorts, and give me a place to write about things I am interested in, even when they are not projects in themselves. I also needed a workflow for writing and publishing posts that was fast and easy, preferably without having to touch any code.

### Astro
Going into this project, I had already heard a lot of good things about the [Astro](https://astro.build/) framework, especially for sites like this, and the more I looked into it, the more it seemed to match what I needed. Using Astro as a static site generator to render pages at build time meant that a simple web server like [Nginx](https://nginx.org/) could quickly serve static pages to the client with no per-request rendering on either the client or the server. Its [Content Collections API](https://docs.astro.build/en/reference/modules/astro-content/), together with Zod, also allowed me to easily define collections like `project` and `post` using schemas, resulting in a type-safe workflow which made the transition from Java to JavaScript much smoother, while posts themselves stayed simple Markdown files with their metadata stored in the frontmatter. Even with little to no JavaScript experience, getting started using Astro was fairly seamless, thanks in part to their excellent [documentation](https://docs.astro.build/en/getting-started/).

### An aside about hosting
Before this project, most of my code never left localhost, and if it did it was hosted on Azure through a free student account with mixed results. I found the process overly complicated, the UI infuriating and it always left me feeling like I was using a bulldozer to pick up a penny. Instead, I decided to use the project as an opportunity to gain some experience with hosting, server administration, and some networking fundamentals, and ended up renting a VPS from [Hetzner](https://www.hetzner.com) (4 vCPUs | 8 GB RAM), with the savings turning out to be surprisingly substantial compared to providers like [DigitalOcean](https://www.digitalocean.com/). This also left me with a fairly capable server, certainly one that can do more than host a simple static site, which gives me a great excuse to find something fun to do with it in the future.

### The end result
Moving away from the comfortable and type-safe world of Java felt a little daunting, but mostly exciting and full of possibilites, and while I *did* occasionally have to take a step back and resist the temptation of adding flashy but unnecessary components just for their own sake, I ended up with a solution that I am very satisfied with, and which is just about as fast and responsive as I had hoped.

![lighthouse_scores.png](assets/lighthouse_scores.png)

I do expect to continue working on this site through small, incremental improvements, and there are still aspects of it that I am less happy with: the styling of these posts, for example, still leaves something to be desired.


