This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# QurbaniHat

**QurbaniHat** is a livestock booking platform where users can explore animals for Qurbani such 
as cows, goats, buffalos, and sheeps ; viewing featured listings, and reading helpful Qurbani tips. Built with a clean UI and a scalable backend API with user authentication and MongoDB integration.
---

## Live site link: 
- https://qurbanihat-livestock-booking-platfo-one.vercel.app
---

## Users Can:
- Browse available animals for Qurbani
- View featured animals
- Read Qurbani-related tips
- Create an account and manage their profile and book animal for qurbani

The project focuses on clean UI, fast performance, and scalable architecture.
---

## Features

**Authentication System**
- user signup and signin functionality
- secure session handling
- Protected user routes and profile access

**User Profile Management**
- View and update user profile information
- Update name and profile image
- Smooth UX with redirect after successful update

**Animal Listings**
- Browse available Qurbani animals in a clean UI
- View detailed animal information (price, location, description, etc.)
- Well-structured and responsive listing layout

**Sarch Functionality**
- search animals by type and category(type: bull, goat, buffalo, sheep; category: large animal, small animal)
- Fast filtering for quick results

**Sort Functionality**
- sort animal by price(low to high; high to low)
- easier comparison between animals

**Featured Animals**
- Displays selected animals on the homepage
- Helps users quickly find spcific type of animals

**Qurbani Tips**
- Provides useful Qurbani guidance and information
- Educational content for users

**Modern UI/UX**
- Fully responsive design for all devices
- Clean UI using Tailwind CSS + DaisyUI
- Smooth navigation and user-friendly experience

---

## Tech Stack

- Next.js (App Router) – Frontend framework for routing, SSR, and UI development
- React.js – Component-based UI library
- Tailwind CSS – Utility-first CSS framework for responsive design
- DaisyUI – Tailwind CSS component library for prebuilt UI components
- Node.js (ES6+) / Express Custom API Server – REST APIs for animals, featured listings, and Qurbani tips
- Authentication: Better Auth (auth client) – Handles user login, session, and profile management
- MongoDB – Database used to store registered users and authentication-related data
- React Icons – Icon library for UI enhancement
- Vercel / Hosting Platform – Deployment for frontend

---

## Project Structure

```bash
src/
│
├── app/
|   ├── (auth)/
|   |      ├── signin/
|   |      |    ├── page.jsx
|   |      ├── signup/
|   |      |    ├── page.jsx
|   |      ├── layout.jsx   
|   |
|   ├── (home)/
|   |       ├── animals/
|   |       |      ├── [id]/
|   |       |      |      ├── page.jsx
|   |       |      ├── layout.jsx
|   |       |      ├── loading.jsx
|   |       |      ├── page.jsx
|   |       |
|   |       ├── booking/ 
|   |       |       ├── [id]/
|   |       |             ├── page.jsx
|   |       |             ├── layout.jsx
|   |       |
|   |       ├── update-profile
|   |       |        ├── page.jsx
|   |       |
|   |       ├── page.js
|   |       
|   ├── api/
|   |     ├── auth/
|   |     |    ├── [...all]/
|   |     |          ├── route.js/
|   |      
|   |
│   ├── globals.css
│   ├── layout.js
│   ├── loading.jsx
|   ├── not-found.js
|   
├── assets/
|
├── components/
│   ├── form/
│   ├── Shared/
|
├── lib/
|   ├──auth-client.js
|   ├──auth.js
|   ├──data.js
|
├── /proxy.js

```
---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/afia-labonno/qurbanihat-livestock-booking-platform.git
cd qurbanihat
npm install
MONGODB_URI=mongodb_connection_string
API_BASE_URL=backend_api_url
npm run dev
http://localhost:3000

