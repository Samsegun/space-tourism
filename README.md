# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  <!-- - [Screenshot](#screenshot) -->
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

<!-- ### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above. -->

### Links

- Solution URL: [samsegun space-tourism](https://github.com/Samsegun/space-tourism)
- Live Site URL: [samsegun space-tourism](https://samsegun-space-tourism.netlify.app)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- context api, react portals
- [Framer Motion](https://www.framer.com/motion/) - react library
- CSS custom properties( css modules)
- Flexbox
- Mobile-first workflow

### What I learned

This project made me realise how powerful the react library is. State management is still a huge task for now though. I had no idea what the "explore button" on the homepage is meant to do, so i played around with it by adding animations. Below is a code snippet of the navbar animation.

```js
const listVariants = {
  visible: {
    // y: 0,
    opacity: 1,
    transition: {
      delay: 1.1,
      when: "beforeChildren",
      staggerChildren: 0.6,
      // type: "spring",
      // stiffness: 100,
      // damping: 10,
    },
  },
  hidden: {
    // y: 50,
    opacity: 0,
  },
};

const listItem = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

<motion.ul variants={listVariants} animate="visible" initial="hidden">
  {navLinks.map((link, idx) => (
    <motion.li key={idx} variants={listItem}>
      <NavLink to={`${link === "home" ? "/" : `/${link}`}`}>
        <span className={styles["link-span"]}>0{idx}</span> {link}
      </NavLink>
    </motion.li>
  ))}
</motion.ul>;
```

### Continued development

- Transform the "crew page" into a carousel.
- Style fixes for destination and technology page.

### Useful resources

- [Stackoverflow](https://stackoverflow.com/)
- [Youtube](https://www.youtube.com)

## Author

- Github - [Oyebade Segun](https://github.com/Samsegun)
- Frontend Mentor - [@Samsegun](https://www.frontendmentor.io/profile/Samsegun)
- Twitter - [@datsleumas](https://www.twitter.com/datsleumas)
