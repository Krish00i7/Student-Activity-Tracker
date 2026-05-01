# 🎓 Student Activity Tracker

> 🏆 **Built for a Hackathon** — designed and developed end-to-end during a hackathon sprint.

A gamified, single-page web app to help students track their learning activities, earn XP, and stay motivated.

---

## 🌐 Live Demo

> Open `index.html` in any browser — no installation, no server needed.

---

## ✨ Features

- **📋 Activity Management** — Add, complete, and delete learning activities with a name, description, category, duration, and XP reward
- **⚡ XP Rewards System** — Earn XP points for completing activities, with customizable rewards (5–500 XP)
- **🔥 Streak Tracking** — Maintains a live streak count as you complete activities
- **📊 Progress Dashboard** — Visual progress bar, completion rate, and total XP earned at a glance
- **🗂️ Category Breakdown** — Activities organized into Web Dev, Programming, Tools, Design, Data Science, and Other — with per-category progress bars
- **📁 Activity Log** — Full log of all activities with status indicators on the Progress page
- **🎉 Confetti Celebration** — Confetti animation fires when all activities are completed
- **🔔 Toast Notifications** — Instant feedback on every action (add, complete, undo, delete)
- **🔍 Filter Tabs** — View All, Pending, or Completed activities with live counts
- **⌨️ Keyboard Shortcuts** — `Escape` closes modals; `Enter` submits the Add Activity form

---

## 🖥️ Pages

### 🏠 Home
Quick-glance dashboard showing Total Activities, Completed, Pending, and XP Earned in stat cards.

### 📝 Activities
The main workspace — browse activity cards, toggle completions, add new activities via modal, and delete ones you no longer need. Filter by All / Pending / Completed.

### 📈 Progress
A detailed progress report with overall completion percentage, per-category bars, and a full activity log.

---

## 🗂️ Project Structure

```
Student-Activity-Tracker/
│
├── index.html    # App structure, modals, nav, and all three page layouts
├── script.js     # All app logic — state, rendering, XP, streaks, modals, confetti
└── style.css     # Full custom styling with CSS variables and animations
```

---

## 🚀 Getting Started

No dependencies, no build step — just clone and open.

```bash
git clone https://github.com/Krish00i7/Student-Activity-Tracker.git
cd Student-Activity-Tracker
```

Then open `index.html` in your browser.

---

## 🧠 How It Works

The app is entirely client-side with no backend or database. State is managed in a JavaScript array (`DATA`) in memory, with all rendering done by vanilla DOM manipulation.

**Default activities pre-loaded:**

| Activity | Category | Duration | XP |
|---|---|---|---|
| Introduction to HTML & CSS | Web Dev | 2 hrs | 50 |
| JavaScript Fundamentals | Programming | 3 hrs | 80 |
| Git & Version Control | Tools | 1.5 hrs | 40 |
| Responsive Design | Web Dev | 2 hrs | 60 |
| API Integration Basics | Programming | 2.5 hrs | 90 |
| UI/UX Design Fundamentals | Design | 2 hrs | 70 |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Page structure and modals |
| **CSS3** | Custom variables, animations, responsive layout |
| **Vanilla JavaScript** | App state, rendering, XP logic, confetti |
| **Google Fonts** | Plus Jakarta Sans typeface |

> Zero frameworks. Zero dependencies. Pure HTML, CSS, and JS.

---

## 🎨 Design Highlights

- Dark theme with vibrant neon accent colors per category
- Animated activity cards with a colored left-line indicator per category
- Smooth modal open/close transitions
- Responsive layout that works on desktop and mobile
- Confetti particle system built from scratch in JS

---

## 📌 Notes

- Activity data **resets on page refresh** (no localStorage or backend)
- XP values are capped between **5 and 500**
- Streak count increments on each completion and decrements on undo/delete

---

## 👨‍💻 Author

**Krish**

## 🏆 Hackathon

This project was **built entirely during a hackathon** — conceived, designed, and coded from scratch under time constraints as a fully functional, zero-dependency web app. No frameworks, no libraries, just pure HTML, CSS, and JavaScript delivered under pressure. 🚀
