---
title: Q-recycle Admin Tool
description: An internal administrative tool for a non-profit organization
pubDate: 2026-09-14
cover: './cover.png'
coverAlt: "A screenshot of the administrative dashboard"
technologies: [
  'React',
  'Supabase'
]
links: [
  {
    url: "https://github.com/MaVirgil/MaVirgil.com",
    name: "GitHub"
  }
]
finished: false
---

This group project was made as part of the third semester of my studies, and involved working with an actual customer to develop a proof-of-concept solution to their specifications. In our case we found a small non-profit organization that collects used bottles and cans from participating restaurants, and utilizes the bottle deposit system to raise money for a variety of charity projects.

The organization wanted an internal tool to manage restaurants and drivers, track expenses, plan routes on bottle pick-up days, and access statistics.

Our solution consisted of a React frontend using Supabase as our backend service and persistence layer, and Mapbox to solve the GPS navigation and route calculation requirements.

As the system needed to accommodate both administrators, drivers and participating restaurants, I took the opportunity to focus on implementing a reliable and robust role system using JWTs and RLS. Focusing on security because we were working with a real customer was a nice change of pace for me, since I'd often felt this was an area of little concern in previous semesters.

Aside from the navigation and GPS functionality and security concerns, most other requirements were solved with fairly straightforward CRUD implementations, giving me a little more time to focus on UX considerations — like recognizing that the cooperating restaurants had very little stake in the non-profit project, and could possibly be deterred from continuing to participate when faced with suddenly having to interface with a new, unknown web solution instead of just sending a text message to a phone number once a week.

To alleviate this, I developed a pin-based login system specifically for restaurants in order to remove some of the friction that comes with having to remember — or write down — a username and password combination, and while this inherently was less secure, the restaurant did not have access to any internal data and could only write to a single table in the database, so it was decided that the trade-off was worth it.

I ended up being fairly satisfied with how this project turned out, but very happy with the experience of working in a more modern stack and getting to solve real problems for real people. The customer was also happy with the solution we had developed, and while it wasn't entirely production-ready just yet, it did represent a meaningful optimization and streamlining of their workflow.