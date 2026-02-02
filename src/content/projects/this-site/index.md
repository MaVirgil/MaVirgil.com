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
---
## The Goal
I had a couple of different goals in mind when I started thinking out this project, the most important being that
I actually felt it was something I needed. So many times when building stuff (especially through my studies), I've been 
in a situation where I recognized the learning potential of a project and enjoyed building it, but where the product it self was... ...well, _useless_.

These kinds of project have their merit, of course, and if all I wanted to do was build stuff that I really needed in my life, I would hardly have learned
anything at all. That being said, I was very excited to jump on the opportunity to work on something that felt _real_, and like I would actually
be interfacing with it 2 months from now.

At this point I had decided that I wanted a website that could:

 - Display my portfolio of finished projects/work
 - Act as a digital business card of sorts, with contact details and a summary of my profile
 - Give me a place to write about stuff I learn/find while working on projects, that isn't necessarily a project in itself

With these goals in mind, I hit the first bump in the road: figuring out _what_ to build my site on. <br />

My requirements were simple but strict:
1.  **Performance:** The site had to be as fast as possible
2.  **Maintainability:** Writing content should be as easy as pushing a Markdown file
3.  **Infrastructure:** It had to be self-hosted on a Linux VPS to practice DevOps skills

## The Tech Stack

### Frontend: Astro
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


