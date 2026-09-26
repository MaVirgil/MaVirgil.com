---
title: Deadline-tracker
description: A small creative exercise using JavaScript Date objects
pubDate: 2026-09-26
cover: './cover.png'
coverAlt: "Thumbnail showing various screenshots from the project"
technologies: [
  'JavaScript',
  'Express.js',
  'HTML/CSS'
]
links: [
  {
    url: "https://mavirgil.com/deadline-tracker",
    name: "Website"
  },
  {
    url: "https://github.com/MaVirgil/deadline-tracker",
    name: "GitHub"
  }
]
finished: true
---

This small project was made as part of my full-stack Node.js course in school. The assignment was to simply make a webpage that uses the Javascript `Date` object in some capacity, and serve it using an Express.js server.

My initial idea was to create a simple countdown tool that you could use to keep track of upcoming deadlines, but then I remembered that calendars exist and felt I had to pivot slightly. As I had already created the countdown logic, and seeing as this was just a short-term weekly assignment for class, I found the idea of scrapping the whole thing and starting over a little dramatic. Instead, I decided to repurpose the project into what can best be described as a little creative writing exercise.

This turned out to be a way more fun idea than the original: I decided to design the page in such a way that I would not have to think about the code at all when creating the contents of the site. As such, all the text sections and timers were defined as Javascript objects in an array, which were automatically parsed and rendered into the HTML on the client:

```js
const screens = [
  {
    type: 'text',
    title: "You've got time...",
  },
  {
    type: 'text',
    title: '...for some perspective',
  },
  {
    type: 'dateTime',
    dateTime: new Date(new Date().getFullYear() + 1, 0, 1, 0, 0),
    title: `Time until you enter ${new Date().getFullYear() + 1}:`,
  },
  {
    type: 'text',
    title: "Hopefully that doesn\'t stress you out...",
  },
]
```

Even though I really do enjoy both the problem-solving creativity of programming and the more classical creativity of creating visual or written content, having to constantly switch between the two modes because the code you've written doesn't *quite* support the content you want to make yet can sometimes be a frustrating experience for me. Even if this was just a small one-off project for a weekly assignment, getting to solve that frustration with proper tooling is a joy that I hope never goes away.