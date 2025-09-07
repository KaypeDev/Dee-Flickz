# Dee-Flickz website

## Description

This project is a portfolio website I'm building for a close friend who is a cinematographer. He creates videos for events, parties, sports, and even fashion brands. The goal of this site is to design a clean, visually engaging UI that highlights his work, story and also book with him.

## Design

I designed the layout in Figma, with a **mobile-first approach** since most of his clients discover him through Instagram.
Figma link:
https://www.figma.com/design/rLKtFIk57EuOtor6lpvGyP/Untitled?node-id=0-1&p=f&t=ndhDhyGJx66GqkoU-0
Linkedin Link:
https://www.linkedin.com/in/keanu-porral-88a179378/

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer motion

## Progress

- **8/8/25:** 
Folder Structure, Tailwindcss and Framer Motion Install, and built Navbar and Hero section for Home.
- **8/12/25** 
Finished the whole Homepage, no footer yet, made sure all the section also looked good on mobile.
It looks good right now, but I'll go over it later to check for little details I can change.
- **8/19/25** 
About page done, reused some videos but later will put the correct ones when I get the videos from my 
friend.
- **8/25/25** 
I just deployed the project on Vercel and learned two important things:

First, I should’ve deployed from the start. There were a lot of issues that only showed up after deployment — like video files being too large, unexpected horizontal scroll on mobile, broken animations, and more. Everything seemed fine locally, but production exposed the real problems.

Second, web performance matters a lot. I noticed that on a weak network signal, the site barely works. This is my first time handling deployment, so I’ll be keeping a closer eye on performance and reliability from now on — after all, a website isn’t much of a website if it doesn’t work.
### 9/6/25
It's been two weeks since my last commit. I usually don't push code often — I tend to keep everything local until the feature is fully working.
Here’s what I’ve been up to:
#### Page Update
- Reworked the **Contact** page into a **Booking** page, since that made more sense for the app.
#### Week 1: Design
- Spent the first week purely designing the new page layout and flow.
#### Week 2: Development
- Started coding in the second week.
- Finished the layout midweek.
- Integrated **Convex** into the booking form, which took up most of the rest of the week.
#### Built a Multi-Step Form
The form allows users to:
- Pick a date
- Enter client details
- Submit booking info
#### Installed & Configured
- zod
- react-phone-number-input and libphonenumber-js for proper phone number handling
#### Challenges & Wins
This was my first time working with multi-step forms and Convex. It was honestly **pretty frustrating**, especially:
- Defining mutations
- Querying available dates
- Getting `createMutation` to work properly
But in the end, it was also **very rewarding**.

## How to Run
- npm run dev