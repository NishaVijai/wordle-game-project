# Wordle Game Project 🎯

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-success)

---

## 📄 Description

**Wordle Game Project** is a **simple Wordle-style word guessing game** built with **JavaScript, React, HTML, and CSS**.  
It focuses on **core gameplay logic** — allowing users to guess a hidden word within limited attempts and receive visual feedback on letter accuracy. The game mechanics are inspired by the popular online word game *Wordle*, created by Josh Wardle.

---

## Table of Contents

- [Preview](#preview)
- [Screenshot](#screenshot)
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Deployment](#deployment)  
- [License](#license)

---

## Preview

🔗 **Play the game:**  
https://wordle-game-project-week2.netlify.app/

---

## Screenshot
![WordleGame](https://github.com/user-attachments/assets/020a2ac3-7f35-4160-b76a-f40a5d779122)

---

## Features

* 🎯 **Word Guessing Gameplay** — Try to guess the hidden word in limited attempts.
* 🟩🟨⬛ **Color Feedback** — Letters change color to show correct letter/location or presence.
* 🔄 **Interactive UI** — Played directly in the browser.
* 📱 **Responsive Design** — Works across desktop and mobile screens.
* 🚀 **Hosted on Netlify** — Instant deployment from GitHub.

---

## Technologies Used

* **JavaScript** – Core game logic
* **React** – Component-based UI
* **HTML5 & CSS3** – Structure and styles
* **Netlify** – Hosting & deployments

---

## Installation

To run this game locally:

### 1. Clone the repository

```bash
git clone <repository-url>
cd wordle-game-project
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

### 4. Open in your browser

Visit:

```
http://localhost:3000
```

---

## Usage

* Type a **five-letter guess**
* Press **Enter** to submit
* Colored tiles reveal:

  * 🟩 — correct letter in correct position
  * 🟨 — correct letter in wrong position
  * ⬛ — letter not in word

Try to guess the correct word within the allowed attempts!

---

## Project Structure

```
wordle-game-project/
│
├── public/                # Static assets
├── src/                   # React components & game logic
│   ├── assets/            # Images & fonts
│   ├── components/        # UI components
│   ├── App.jsx            # Main component
│   └── index.js           # App entry point
│
├── .gitignore
├── package.json           # Scripts & dependencies
├── README.md              # Project documentation
└── vite.config.js         # Vite config (if using Vite)
```

---

## Deployment

This project is deployed using **Netlify**, with auto-deploys from the GitHub repository.

If you need to redeploy or update:

1. Push changes to GitHub:

   ```bash
   git add .
   git commit -m "Update game"
   git push origin main
   ```
2. Netlify will automatically rebuild and publish.

---

## License

This project is **open source** and free to use for personal or educational purposes.
