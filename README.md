<div align="center">

# 🎬 FlickHub

### Modern Movie Discovery & Streaming Platform

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[Live Demo](https://flickhub-site.vercel.app) ·
[Report Bug](https://github.com/BilgeGates/FlickHub/issues) ·
[Request Feature](https://github.com/BilgeGates/FlickHub/issues)

</div>

---

## 📖 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🖼 Screenshots](#-screenshots)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technology Stack](#️-technology-stack)
- [🌐 Browser Support](#-browser-support)
- [🔐 Security & Privacy](#-security--privacy)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [👨‍💻 Author](#-author)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🌟 Overview

**FlickHub** is a modern, responsive movie discovery and streaming platform built with React and Vite. Browse trending films, discover upcoming releases, search across genres, and manage your personal favorites — all in a sleek, dark-themed interface optimized for all devices.

### Why FlickHub?

- 🎯 **Intuitive UI** — Clean, modern design with smooth animations
- ⚡ **Lightning Fast** — Vite-powered with optimized lazy loading
- 📱 **Fully Responsive** — Seamless experience from mobile to desktop
- 🔍 **Smart Search** — Find movies by title, genre, or keywords
- ❤️ **Favorites System** — Save and manage your movie watchlist
- 🎭 **Genre Filtering** — Browse movies by your preferred genres

---

## ✨ Features

### 🎬 Core Features

| Feature             | Description                                       |
| ------------------- | ------------------------------------------------- |
| **Movie Discovery** | Browse trending, upcoming, and popular movies     |
| **Advanced Search** | Search by title with real-time results            |
| **Genre Filtering** | Filter movies by genre categories                 |
| **Movie Details**   | View cast, ratings, synopsis, and more            |
| **Video Player**    | Integrated streaming with multiple server options |
| **Favorites**       | Save movies to your personal watchlist            |

### 🎨 UI/UX Features

| Feature               | Description                           |
| --------------------- | ------------------------------------- |
| **Dark Theme**        | Eye-friendly dark mode interface      |
| **Responsive Design** | Optimized for all screen sizes        |
| **Smooth Animations** | Framer Motion powered transitions     |
| **Lazy Loading**      | Images load on scroll for performance |
| **Infinite Scroll**   | Seamless content loading              |
| **Glass Morphism**    | Modern frosted glass effects          |

### ⚡ Technical Features

| Feature              | Description                           |
| -------------------- | ------------------------------------- |
| **Fast Refresh**     | Instant development updates with Vite |
| **Code Splitting**   | Optimized bundle chunks               |
| **SEO Ready**        | React Helmet for meta management      |
| **Error Boundaries** | Graceful error handling               |
| **Rate Limiting**    | API request optimization              |

---

## 🖼 Screenshots

<details>
<summary><b>View Screenshots (Click to expand)</b></summary>

### Home Page

![Home Page](docs/screenshots/home.png)

### Movie Details

![Movie Details](docs/screenshots/details.png)

### Search Results

![Search](docs/screenshots/search.png)

### Mobile View

![Mobile](docs/screenshots/mobile.png)

</details>

---

## 🚀 Quick Start

### Prerequisites

```bash
Node.js >= 16
npm >= 8
```

### Installation

```bash
# Clone the repository
git clone https://github.com/BilgeGates/FlickHub.git

# Navigate to project directory
cd FlickHub

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your TMDB API key to .env
# VITE_TMDB_API_KEY=your_api_key_here

# Start development server
npm run dev
```

The application will automatically open at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (requires Vercel CLI)
vercel --prod
```

### Available Scripts

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start development server  |
| `npm run build`        | Create production build   |
| `npm run preview`      | Preview production build  |
| `npm run lint`         | Run ESLint checks         |
| `npm run lint:fix`     | Fix ESLint errors         |
| `npm run format`       | Format code with Prettier |
| `npm run format:check` | Check code formatting     |

---

## 📁 Project Structure

<details>
<summary><b>Complete File Tree (Click to expand)</b></summary>

```
FlickHub/
│
├── 📂 public/
│   └── favicon.ico
│
├── 📂 src/
│   │
│   ├── 📂 assets/
│   │   ├── 📂 icons/              # SVG icons
│   │   └── 📂 images/             # Static images
│   │       └── no-image.jpg       # Placeholder image
│   │
│   ├── 📂 components/
│   │   │
│   │   ├── 📂 common/             # Shared components
│   │   │   ├── Button.jsx         # Reusable button
│   │   │   ├── Card.jsx           # Base card component
│   │   │   ├── ErrorBoundary.jsx  # Error handling
│   │   │   └── Loading.jsx        # Loading states
│   │   │
│   │   ├── 📂 layout/             # Layout components
│   │   │   ├── Footer.jsx         # Site footer
│   │   │   ├── Layout.jsx         # Main layout wrapper
│   │   │   └── Navbar.jsx         # Navigation sidebar
│   │   │
│   │   ├── 📂 movie/              # Movie components
│   │   │   ├── MovieCard.jsx      # Movie card with poster
│   │   │   └── MovieGrid.jsx      # Responsive movie grid
│   │   │
│   │   └── 📂 search/             # Search components
│   │       ├── GenreFilter.jsx    # Genre filter tabs
│   │       └── SearchBar.jsx      # Search input
│   │
│   ├── 📂 context/
│   │   └── MovieContext.jsx       # Global state management
│   │
│   ├── 📂 hooks/
│   │   ├── useFavorites.js        # Favorites management
│   │   ├── useMovies.js           # Movie data fetching
│   │   └── useSearch.js           # Search functionality
│   │
│   ├── 📂 pages/
│   │   ├── FavoritesPage.jsx      # User favorites
│   │   ├── Home.jsx               # Home/discover page
│   │   ├── MovieDetailPage.jsx    # Movie details
│   │   ├── PlayerPage.jsx         # Video player
│   │   ├── SearchPage.jsx         # Search results
│   │   ├── TrendingPage.jsx       # Trending movies
│   │   └── UpcomingPage.jsx       # Upcoming releases
│   │
│   ├── 📂 services/
│   │   ├── api.js                 # API utilities
│   │   └── tmdb.js                # TMDB API integration
│   │
│   ├── 📂 styles/
│   │   ├── animations.css         # CSS animations
│   │   └── index.css              # Global styles
│   │
│   ├── 📂 utils/
│   │   ├── constants.js           # App constants
│   │   ├── embedUrls.js           # Video embed URLs
│   │   └── helpers.js             # Utility functions
│   │
│   ├── App.jsx                    # Root component
│   └── main.jsx                   # Entry point
│
├── 📂 docs/                       # Documentation
│   ├── CHANGELOG.md
│   ├── ARCHITECTURE.md
│   └── screenshots/
│
├── 📄 .env.example                # Environment template
├── 📄 .eslintrc.cjs               # ESLint config
├── 📄 .prettierrc                 # Prettier config
├── 📄 .gitignore
├── 📄 index.html
├── 📄 jsconfig.json
├── 📄 package.json
├── 📄 postcss.config.cjs
├── 📄 tailwind.config.cjs
├── 📄 vite.config.js
├── 📄 README.md
├── 📄 CONTRIBUTING.md
├── 📄 CODE_OF_CONDUCT.md
├── 📄 SECURITY.md
└── 📄 LICENSE
```

</details>

---

## 🛠️ Technology Stack

### Core Technologies

<table>
<tr>
<td align="center" width="20%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50"/><br>
  <b>React 18.2</b><br>
  <sub>UI Framework</sub>
</td>

<td align="center" width="20%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/><br>
  <b>JavaScript ES6+</b><br>
  <sub>Language</sub>
</td>

<td align="center" width="20%">
  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg" width="50"/><br>
  <b>Tailwind CSS 3.3</b><br>
  <sub>Styling</sub>
</td>

<td align="center" width="20%">
  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vite.svg" width="50"/><br>
  <b>Vite 5.0</b><br>
  <sub>Build Tool</sub>
</td>
</tr>
</table>

### Key Libraries

| Library              | Version  | Purpose             |
| -------------------- | -------- | ------------------- |
| **React Router DOM** | 6.20.0   | Client-side routing |
| **Framer Motion**    | 10.16.16 | Animations          |
| **React Icons**      | 4.12.0   | Icon library        |
| **React Toastify**   | 9.1.3    | Toast notifications |
| **React Helmet**     | 6.1.0    | SEO meta tags       |
| **React Lazy Load**  | 1.6.0    | Image lazy loading  |
| **Infinite Scroll**  | 6.1.0    | Infinite scrolling  |

### Development Tools

| Tool             | Purpose             |
| ---------------- | ------------------- |
| **ESLint**       | Code linting        |
| **Prettier**     | Code formatting     |
| **PostCSS**      | CSS processing      |
| **Autoprefixer** | CSS vendor prefixes |

---

## 🌐 Browser Support

| Browser | Support            |
| ------- | ------------------ |
| Chrome  | ✅ Last 2 versions |
| Firefox | ✅ Last 2 versions |
| Safari  | ✅ Last 2 versions |
| Edge    | ✅ Last 2 versions |
| Opera   | ✅ Last 2 versions |

---

## 🔐 Security & Privacy

### Data Handling

- ✅ **No user accounts required** — Use anonymously
- ✅ **Local storage only** — Favorites stored in browser
- ✅ **No tracking** — No analytics or tracking scripts
- ✅ **HTTPS only** — Secure API communication
- ✅ **No cookies** — Privacy-first approach

### API Security

- Environment variables for API keys
- Rate limiting on API requests
- Input sanitization on search queries

For security concerns, see [SECURITY.md](SECURITY.md)

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Quick Contribution Guide

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "feat: add amazing feature"

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
perf: improve performance
test: add tests
chore: maintenance tasks
```

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Khatai Huseynzada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 👨‍💻 Author

<div align="center">

**Khatai Huseynzada**

[![GitHub](https://img.shields.io/badge/GitHub-BilgeGates-181717?style=flat-square&logo=github)](https://github.com/BilgeGates)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=flat-square)](https://bilgegates.github.io)

</div>

---

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) — Movie database API
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [React Icons](https://react-icons.github.io/react-icons/) — Icon library
- [Vite](https://vitejs.dev/) — Next-gen build tool

---

## 📧 Support & Contact

- **Issues:** [GitHub Issues](https://github.com/BilgeGates/FlickHub/issues)
- **Discussions:** [GitHub Discussions](https://github.com/BilgeGates/FlickHub/discussions)
- **Email:** Contact via GitHub profile

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Khatai Huseynzada](https://github.com/BilgeGates)

</div>
