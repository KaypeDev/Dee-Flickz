# Dee-Flickz Website

## Description

This project is a portfolio website I’m building for a close friend who is a cinematographer. He creates videos for events, parties, sports, and fashion brands. The goal of this site is to design a clean, visually engaging UI that highlights his work, story, and also enables clients to book with him.

**Live Website:** https://deeflickz.vercel.app/

## Design

I designed the layout in **Figma**, using a **mobile-first approach** since most of his clients discover him through Instagram.  
Figma link: https://www.figma.com/design/rLKtFIk57EuOtor6lpvGyP/Untitled?node-id=0-1&p=f&t=ndhDhyGJx66GqkoU-0  

LinkedIn profile: https://www.linkedin.com/in/keanu-porral-88a179378/

## Tech Stack

- React  
- Vite  
- Tailwind CSS  
- Framer Motion  
- Convex (Serverless backend for data management)  
- Vercel (Deployment and hosting platform)  

## Progress

- **08/08/25**  
  Set up folder structure, installed Tailwind CSS and Framer Motion, built Navbar and Hero section for Home.

- **08/12/25**  
  Finished the entire Homepage (footer pending). Ensured all sections are responsive and look good on mobile devices. Planned to revisit for minor UI refinements.

- **08/19/25**  
  Completed About page. Temporarily reused some videos; will replace with client’s final videos once received.

- **08/25/25**  
  Deployed the project on Vercel and gained valuable insights:  
  1. Early deployment is essential — deployment exposed issues (large video files, horizontal scrolling on mobile, broken animations) not apparent in local development.  
  2. Web performance is critical — the site struggled on weak networks. Prioritizing optimization and reliability moving forward.

- **09/06/25**  
  Two weeks since last commit; typically keep features local until fully functional. Activities include:  
  - **Page Update:** Reworked Contact page into Booking page for better app flow.  
  - **Week 1 (Design):** Crafted new page layout and user flow in detail.  
  - **Week 2 (Development):** Implemented the new layout, integrated **Convex** backend into booking form.  
  - **Multi-Step Booking Form Features:**  
    - Date picker  
    - Client information input  
    - Booking submission functionality  
  - **Libraries Installed:**  
    - `zod` for schema validation  
    - `react-phone-number-input` and `libphonenumber-js` for phone number validation and formatting  
  - **Challenges & Wins:**  
    - First experience with multi-step forms and Convex was challenging (mutation definitions, querying availability, managing `createMutation`).  
    - Resulted in a rewarding learning experience.

- **09/08/25**  
  Added a loading state to the booking form to prevent duplicate submissions and accidental clicks during API calls (selectBooking is ongoing; to be completed alongside the dashboard). Disabled inputs and buttons during loading to improve user experience and reduce errors.

## How to Run

```bash
npm run dev