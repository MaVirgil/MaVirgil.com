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
---
## The Goal
As a Computer Science student, I wanted a space to document my learning and showcase my projects. While platforms like Medium or WordPress exist, I wanted full ownership of my stack to learn the underlying infrastructure of modern web deployment.

My requirements were simple but strict:
1.  **Performance:** The site had to be blazingly fast (scoring 100 on Lighthouse).
2.  **Maintainability:** Writing content should be as easy as pushing a Markdown file.
3.  **Infrastructure:** It had to be self-hosted on a Linux VPS to practice DevOps skills.

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


