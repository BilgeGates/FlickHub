<h1 align="center">🎬 FlickHub</h1>

<div align="center">

**Movie discovery and streaming platform with TMDB integration**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TMDB API](https://img.shields.io/badge/TMDB_API-Movie_Data-01B4E4?style=flat-square&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)
[![Privacy](https://img.shields.io/badge/privacy-local--only-blue?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[Live Demo](https://flickhub-site.vercel.app/) ·
[Report Bug](https://github.com/BilgeGates/FlickHub/issues) ·
[Request Feature](https://github.com/BilgeGates/FlickHub/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo Screenshots](#-demo--screenshots)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Technology Stack](#-technology-stack)
- [Browser Support](#-browser-support)
- [Movie Data](#-movie-data)
- [Security Privacy](#-security--privacy)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [License](#-license)

---

## 🌟 Overview

Web application for browsing movies with ratings, genres, and streaming options. Built with React and Vite, featuring a dark-themed interface optimized for all devices.

---

## ✨ Features

- Browse trending, upcoming, and popular movies
- View ratings, genres, and movie details
- Add movies to favorites
- Search and filter by title or genre
- View cast, synopsis, and statistics
- Integrated video player with multiple servers
- Responsive design for all devices

---

## 🖼 Demo & Screenshots

> **Live demo:** https://flickhub-site.vercel.app/

<img src='./docs/screenshots/home.png' />

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

# Start development server
npm run dev
```

The application will automatically open at [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
flickhub/
│
├── 📂 public/
│   └── favicon.ico
│
├── 📂 src/
│   │
│   ├── 📂 assets/            # Images, fonts, icons
│   │   ├── 📂 icons/
│   │   └── 📂 images/
│   │
│   ├── 📂 components/
│   │   │
│   │   ├── 📂 common/        # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   └── Loading.jsx
│   │   │
│   │   ├── 📂 layout/        # Layout components
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── 📂 movie/         # Movie components
│   │   │   ├── MovieCard.jsx
│   │   │   └── MovieGrid.jsx
│   │   │
│   │   └── 📂 search/        # Search components
│   │       ├── GenreFilter.jsx
│   │       └── SearchBar.jsx
│   │
│   ├── 📂 context/           # React Context
│   │   └── MovieContext.jsx
│   │
│   ├── 📂 hooks/             # Custom React hooks
│   │   ├── useFavorites.js
│   │   ├── useMovies.js
│   │   └── useSearch.js
│   │
│   ├── 📂 pages/             # Application pages
│   │   ├── FavoritesPage.jsx
│   │   ├── Home.jsx
│   │   ├── MovieDetailPage.jsx
│   │   ├── PlayerPage.jsx
│   │   ├── SearchPage.jsx
│   │   ├── TrendingPage.jsx
│   │   └── UpcomingPage.jsx
│   │
│   ├── 📂 services/          # API services
│   │   ├── api.js
│   │   └── tmdb.js
│   │
│   ├── 📂 styles/            # CSS styles
│   │   ├── animations.css
│   │   └── index.css
│   │
│   ├── 📂 utils/             # Utility functions
│   │   ├── constants.js
│   │   ├── embedUrls.js
│   │   └── helpers.js
│   │
│   ├── App.jsx               # Root component
│   └── main.jsx              # Entry point
│
├── 📄 .env.example           # Environment template
├── 📄 .eslintrc.cjs          # ESLint config
├── 📄 .prettierrc            # Prettier config
├── 📄 .gitignore
├── 📄 index.html
├── 📄 jsconfig.json
├── 📄 postcss.config.cjs
├── 📄 tailwind.config.cjs
├── 📄 vite.config.js
├── 📄 package.json
├── 📄 README.md
├── 📄 CONTRIBUTING.md
├── 📄 CODE_OF_CONDUCT.md
├── 📄 SECURITY.md
└── 📄 LICENSE
```

---

## 🛠️ Technology Stack

### Core Technologies

<table>
<tr>
<td align="center" width="25%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50"/><br>
  <b>React 18.2</b><br>
  <sub>UI Framework</sub>
</td>

<td align="center" width="25%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/><br>
  <b>JavaScript ES6+</b><br>
  <sub>Language</sub>
</td>

<td align="center" width="25%">
  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg" width="50"/><br>
  <b>Tailwind CSS 3.3</b><br>
  <sub>Styling</sub>
</td>

<td align="center" width="25%">
  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vite.svg" width="50"/><br>
  <b>Vite 5.0</b><br>
  <sub>Build Tool</sub>
</td>
</tr>
</table>

### Additional Libraries

- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **localStorage** - User data persistence

---

## 🌐 Browser Support

<div align="center">

| Browser                                                                                                         | Version | Status              |
| --------------------------------------------------------------------------------------------------------------- | ------- | ------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width="20"/> Chrome    | 90+     | ✅ Tested           |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" width="20"/> Firefox | 88+     | ✅ Tested           |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-original.svg" width="20"/> Safari    | 14+     | ✅ Expected to work |
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge.svg" width="20"/> Edge     | 90+     | ✅ Expected to work |
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera.svg" width="20"/> Opera  | 76+     | ✅ Expected to work |

</div>

### Required Browser Features

- ES6+ JavaScript
- CSS Grid & Flexbox
- localStorage API
- Responsive viewport support

---

## 🎬 Movie Data

FlickHub fetches movie data from TMDB (The Movie Database) API.

### Data Features

- Trending and popular movies
- Upcoming releases
- Movie details (cast, crew, synopsis)
- Ratings and vote counts
- Genre information
- Poster and backdrop images

### API Configuration

```bash
# .env file
VITE_TMDB_API_KEY=your_api_key_here
```

Get your free API key at [themoviedb.org](https://www.themoviedb.org/settings/api)

### Data Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB.

---

## 🔐 Security & Privacy

Zero-backend architecture - all functionality runs in the browser.

### 🔒 Security Highlights

- ✅ No server-side data storage
- ✅ Client-side processing only
- ✅ No cookies, trackers, or fingerprinting
- ✅ No third-party analytics or telemetry
- ✅ No user data is collected, stored, or transmitted
- ✅ HTTPS only API communication

### 🛡️ Data Safety

All favorites are stored locally using localStorage.

For security concerns, see [SECURITY.md](SECURITY.md).

---

## 🤝 Contributing

Contributions welcome.

### Quick Contribution Guide

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m 'feat: add amazing feature'

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:

- Code standards and best practices
- Pull request process
- Bug reporting
- Feature requests

### Code of Conduct

This project adheres to the Contributor Covenant [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

### Contributors

<a href="https://github.com/BilgeGates/FlickHub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=BilgeGates/FlickHub" />
</a>

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

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
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

<div align="center">

### Khatai Huseynzada

**Front-End Web Developer | Open Source Contributor**

[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github)](https://github.com/BilgeGates)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/khatai-huseynzada)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:darkdeveloperassistant@gmail.com)

</div>

---

## 🙏 Acknowledgments

<table>
<tr>
<td align="center" width="33%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="100"/><br>
  <b>React Team</b><br>
  <sub>Framework</sub>
</td>
  
<td align="center" width="33%">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" width="100"/><br>
  <b>Tailwind Labs</b><br>
  <sub>CSS Framework</sub>
</td>

<td align="center" width="33%">
  <b>TMDB</b><br>
  <sub>Movie Database</sub>
</td>
</tr>
</table>

---

## 📧 Community & Support

<div align="center">

| Channel                 | Link                                                                     |
| ----------------------- | ------------------------------------------------------------------------ |
| 🐛 **Bug Reports**      | [GitHub Issues](https://github.com/BilgeGates/FlickHub/issues)           |
| 💡 **Feature Requests** | [GitHub Discussions](https://github.com/BilgeGates/FlickHub/discussions) |
| 📧 **Email**            | darkdeveloperassistant@gmail.com                                         |

_Responses on a best-effort basis_

</div>

---

## ❓ FAQ

<details>
<summary><b>How do I report a bug?</b></summary>

1. Check if the issue already exists in [GitHub Issues](https://github.com/BilgeGates/FlickHub/issues)
2. If not, create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser and OS information
   </details>

<details>
<summary><b>Can I use this commercially?</b></summary>

Yes! The source code is MIT licensed and can be used commercially.  
However, movie data from TMDB API is subject to their terms of use. Review TMDB's licensing requirements for commercial applications.

</details>

<details>
<summary><b>How do I get a TMDB API key?</b></summary>

1. Create an account at [themoviedb.org](https://www.themoviedb.org/)
2. Go to Settings → API
3. Request an API key (free for non-commercial use)
4. Add it to your `.env` file
</details>

<details>
<summary><b>Where does the movie data come from?</b></summary>

Movie data is fetched from TMDB (The Movie Database) API at runtime.  
This product uses the TMDB API but is not endorsed or certified by TMDB.

</details>

<details>
<summary><b>How is my data stored?</b></summary>

All user data (favorites) is stored locally in your browser using localStorage.  
No data is sent to any server.

</details>

---

**© 2026 Khatai Huseynzada. Licensed under MIT.**
