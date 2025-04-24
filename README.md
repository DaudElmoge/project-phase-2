# 🚐 Shuttle Booking App (MVP)

A modern, React-based shuttle booking platform built as a student project. This application enables users to view travel routes, submit shuttle bookings, print booking summaries, and locate the shuttle office via an embedded map. It uses a mock JSON server for backend simulation, showcasing essential front-end development skills.

## 🔗 **Repo:** [github.com/DaudElmoge/project-phase-2](https://github.com/DaudElmoge/project-phase-2)

## ✨ Features

### 🔀 Client-Side Routes

- `/` → Home Page
- `/booking` → Booking Page
- `/locate-us` → Locate Us Page
- `/summary` → Booking Summary and Print Page

### 🧭 Navigation

- Header with links for seamless movement between pages

### 🎬 Ad Section

- Hero banner introducing the shuttle service

### 📝 Booking Form

- Users input name, select route and van, then submit

### 🧳 Route Display

- Lists available travel routes from a mock API

### 📍 Location Map

- Google Map embed displaying the shuttle office location

### 🧾 Booking Summary

- Confirmation page with print functionality
- **New:** Each individual booking can now be deleted directly from the summary using a delete button
- **New:** Deleting a booking triggers a SweetAlert2 confirmation prompt with success/cancel feedback

### 📮 Footer

- Contact info and feedback/suggestions form

---

## 👥 User Stories

- I want to see available routes so I can choose my destination.
- I want to book a shuttle to secure my seat in advance.
- I want to receive a confirmation after booking.
- I want to print my booking summary for reference.
- I want to easily navigate through the app.
- I want to locate the company office on a map.
- I want to submit feedback to help improve the service.
- **I want to delete a booking with confirmation so I can correct mistakes or cancel a trip.**

---

## 🧑‍💻 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Mock Backend:** JSON Server
- **Mapping:** Google Maps Embed API
- **Alerts:** SweetAlert2

---

## 🚀 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/shuttle-booking-app.git
cd shuttle-booking-app

# Install dependencies
npm install

# Start mock JSON server
npx json-server --watch db.json --port 3000

# Run the development server
npm run dev


👨‍🎓 Authors
This project was developed collaboratively by:

Daud Elmoge

Ian Sang

Sharon Muchemi

Stephen Magiya

Tabitha Wangechi

Built as part of a learning project to demonstrate React fundamentals, UI/UX design, and basic full-stack simulation using JSON Server.

```
