---
title: Blog/Portfolio with Astro & Coolify
description: My personal portfolio/blog site and how I host it
pubDate: 2026-02-01
updatedDate: 2026-02-02
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
finished: false
---

## The Goal
I had a couple of different goals in mind when I started planning this project, the most important being that
I actually felt it was something I needed. So many times when building stuff (especially through my studies), I've been 
in a situation where I recognized the learning potential of a project and enjoyed building it, but where the product itself was... well, _useless_.

These kinds of project have their merit, of course, and if all I ever did was build stuff that I truly felt I needed in my life, I would hardly have learned
anything at all. That being said, I was very excited to jump on the opportunity to work on something that felt _real_, and like I would actually
be using it two months from now.

At this point I had decided that I wanted a website that could:

 - Display my portfolio of finished projects and work
 - Act as a digital business card of sorts, with contact details and a summary of my profile
 - Give me a place to write about interesting stuff I learn while working on projects, that isn't necessarily a project in itself

In addition to these more functional requirements, I also had some technical concerns regarding performance, hosting, and especially my
workflow for writing and pushing posts. As this was to be a continuously updated site, I not only had to consider the developer experience of actually building it,
but also the future workflow of updating it with posts and projects. Here the goal was to be able to push new posts to the site without having to touch code,
and _especially_ not individual HTML files.

However unlikely it may be, someone might actually find themselves reading the content of one of my posts one day. When they do I wanted to guarantee that the experience
was as responsive and bloat-free as it could be, and while I'm _sure_ that it's possible to create a blazingly fast and modern SPA with React, I'm also _sure_ that my
very first experience with those technologies would be anything but that.
As such, I decided that for this project, simple & responsive was better than flashy & janky.

Then came the question of hosting.

Going in, I already had some cursory experience with hosting an earlier project on Azure with a free _Azure for Students_ account. I found this to be
— rather paradoxically — both a very seamless and automatic process, and an incredibly finicky and frustrating one; creating a resource and connecting it
to my CI/CD workflow using _GitHub Actions_ for automatic deployment was made trivial by a very helpful user interface, however, that very same interface proved to be the 
main source of my later frustrations due to inconsistent navigation, confusing user-flow, and general unresponsiveness.

While I understand the utility of hyperscalers like Azure or AWS for enterprise applications, and I valued the learning experience, the complexity felt disproportionate to 
the project's scope, and I ultimately fel like I was using a bulldozer to pick up a dime.

Instead of simply using a smaller-scale, more agile PaaS like Vercel or Netlify, I decided that this was my chance to get some experience with self-hosting; that way,
I could have full control over what was happening on the server, and I would not depend (directly, at least) on big tech companies. To my surprise, 
the savings from going with a self-hosted solution were also much bigger than I had expected. While I do understand that you are not just paying for 
raw computing power when using a cloud provider, seeing the price difference reassured me that this was the way to go, even for a small project like this one.
For a setup like the server I ended up renting from [Hetzner](https://www.hetzner.com) (4vCPU | 8GB ram) I would 
have to pay up to [10x the amount](https://cloudcompare.xyz) on a provider like Digital Ocean.


With all this in mind, I wanted a site that:

- Was as fast as possible, with as little bloat as possible
- Made writing and pushing posts easy and seamless, without the need for manually editing or adding HTML pages
- Was self-hosted, and as independent of big-tech as possible

## The Tech

### Frontend: Astro
As luck would have it, the Astro.JS framework excels in pretty much exactly what I needed: it can generate static MPAs which means flexible development and fast deployment and perfomance while being incredibly
user-friendly and simple to get started with for a relative beginner like me. While Astro does use JavaScript (or TypeScript) to generate the static pages, by default it 
does not actually ship any JS to the client.

I chose [Astro](https://astro.build/) over React or Next.js for this specific use case. Since a blog is mostly static content, shipping a heavy JavaScript bundle (React hydration) is unnecessary.
*   **Zero JS by Default:** Astro strips away JavaScript unless explicitly needed.
*   **Content Collections:** I use Astro's type-safe content API to manage my blog posts and project entries as simple `.md` files.
*   **Styling:** Custom CSS variables for a flicker-free Dark/Light mode implementation using a blocking script in the `<head>` to prevent FOUC (Flash of Unstyled Content).

### Infrastructure: Hetzner VPS & Docker
Instead of using managed hosting (Vercel/Netlify), I rented a **CX33** VPS from Hetzner running **Ubuntu 24.04**.
*   **Firewall:** Configured strict ``iptables`` rules (via Hetzner Cloud Firewall) to only allow SSH, HTTP, and HTTPS traffic.
*   **Docker:** All services run in isolated containers.

### CI/CD & Orchestration: Coolify
To manage deployments, I installed [Coolify](https://coolify.io), an open-source, self-hosted Heroku alternative.
*   **Workflow:** When I push code to my GitHub repository, Coolify's webhooks trigger a build.
*   **Reverse Proxy:** It automatically configures Traefik to route traffic from `mavirgil.com` to the correct container.
*   **SSL:** Automatic Let's Encrypt certificate renewal for HTTPS.


