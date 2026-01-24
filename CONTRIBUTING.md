# Contributing Guide

Thank you for your interest in contributing to **FlickHub**! 🎬

We appreciate all contributions, whether it's fixing bugs, adding features, improving documentation, or suggesting ideas.

---

## 📖 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How to Contribute](#-how-to-contribute)
- [Development Setup](#-development-setup)
- [Project Structure](#-project-structure)
- [Making Changes](#-making-changes)
- [Commit Message Guidelines](#-commit-message-guidelines)
- [Submitting a Pull Request](#-submitting-a-pull-request)
- [Style Guidelines](#-style-guidelines)
- [Documentation](#-documentation)
- [Questions or Need Help?](#-questions-or-need-help)

---

## 📜 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

---

## 🤝 How to Contribute

### Reporting Bugs

1. **Search existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/OS information
   - Screenshots (if applicable)

### Suggesting Features

1. **Check existing issues** for similar suggestions
2. **Open a feature request** with:
   - Clear description of the feature
   - Use case / problem it solves
   - Possible implementation approach (optional)

### Contributing Code

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 🧑‍💻 Development Setup

### Prerequisites

Before you begin, ensure you have:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **yarn**
- **Git** for version control
- **TMDB API Key** (free at [themoviedb.org](https://www.themoviedb.org/))

### Installation

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:

```bash
git clone https://github.com/YOUR_USERNAME/FlickHub.git
cd FlickHub
```

3. **Install dependencies:**

```bash
npm install
```

4. **Set up environment variables:**

```bash
cp .env.example .env
# Add your TMDB API key to .env
```

5. **Start the development server:**

```bash
npm run dev
```

6. **Open your browser** at `http://localhost:3000`

---

## 📁 Project Structure

```
FlickHub/
│
├── src/
│   ├── assets/                # Static assets
│   │   ├── icons/             # SVG icons
│   │   └── images/            # Images
│   │
│   ├── components/            # React components
│   │   ├── common/            # Shared/reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   └── Loading.jsx
│   │   │
│   │   ├── layout/            # Layout components
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── movie/             # Movie-specific components
│   │   │   ├── MovieCard.jsx
│   │   │   └── MovieGrid.jsx
│   │   │
│   │   └── search/            # Search components
│   │       ├── GenreFilter.jsx
│   │       └── SearchBar.jsx
│   │
│   ├── context/               # React Context providers
│   │   └── MovieContext.jsx
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useFavorites.js
│   │   ├── useMovies.js
│   │   └── useSearch.js
│   │
│   ├── pages/                 # Page components
│   │   ├── FavoritesPage.jsx
│   │   ├── Home.jsx
│   │   ├── MovieDetailPage.jsx
│   │   ├── PlayerPage.jsx
│   │   ├── SearchPage.jsx
│   │   ├── TrendingPage.jsx
│   │   └── UpcomingPage.jsx
│   │
│   ├── services/              # API services
│   │   ├── api.js
│   │   └── tmdb.js
│   │
│   ├── styles/                # CSS files
│   │   ├── animations.css
│   │   └── index.css
│   │
│   ├── utils/                 # Utility functions
│   │   ├── constants.js
│   │   ├── embedUrls.js
│   │   └── helpers.js
│   │
│   ├── App.jsx                # Root component
│   └── main.jsx               # Entry point
│
├── docs/                      # Documentation
├── public/                    # Public assets
└── [config files]             # Configuration files
```

---

## 🔧 Making Changes

### Workflow

1. **Create a new branch** for your changes:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

2. **Make your changes** with clear, focused commits

3. **Follow coding standards:**
   - Use consistent formatting (Prettier)
   - Follow ESLint rules
   - Write clear, descriptive names
   - Add comments for complex logic
   - Keep functions small and focused

4. **Test your changes** thoroughly:
   - Verify functionality works as expected
   - Check for console errors
   - Test on different screen sizes
   - Test in different browsers

5. **Push to your fork:**

```bash
git push origin feature/your-feature-name
```

---

## 📝 Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

| Type       | Description             | Example                        |
| ---------- | ----------------------- | ------------------------------ |
| `feat`     | New feature             | `feat: add genre filter`       |
| `fix`      | Bug fix                 | `fix: resolve search lag`      |
| `docs`     | Documentation           | `docs: update README`          |
| `style`    | Code style (formatting) | `style: format with prettier`  |
| `refactor` | Code refactoring        | `refactor: simplify MovieCard` |
| `perf`     | Performance improvement | `perf: optimize image loading` |
| `test`     | Tests                   | `test: add unit tests`         |
| `chore`    | Maintenance             | `chore: update dependencies`   |
| `ci`       | CI/CD changes           | `ci: add GitHub Actions`       |
| `build`    | Build system            | `build: update vite config`    |

### Valid Examples

```bash
feat: add dark mode toggle
feat(search): implement autocomplete suggestions
fix: resolve infinite scroll memory leak
fix(player): handle video loading errors
docs: add API documentation
docs(readme): update installation steps
style: apply prettier formatting
refactor(hooks): simplify useMovies logic
perf: lazy load movie images
test: add MovieCard unit tests
chore: update React to v18.2
```

### Invalid Examples

```bash
❌ Added new feature          # Missing type
❌ FEAT: add dark mode        # Type must be lowercase
❌ feat:add dark mode         # Missing space after colon
❌ feat: Add dark mode.       # No period at end
❌ feat: Added dark mode      # Use imperative mood
```

---

## 🚀 Submitting a Pull Request

1. **Ensure your branch is up to date:**

```bash
git fetch upstream
git rebase upstream/master
```

2. **Push your changes:**

```bash
git push origin feature/your-feature-name
```

3. **Open a pull request** on GitHub with:
   - Clear, descriptive title
   - Description of changes
   - Related issue numbers (use `Fixes #123`)
   - Screenshots (for UI changes)

4. **Wait for review** — maintainers will review your PR

5. **Address feedback** — make requested changes and push updates

### Pull Request Checklist

Before submitting, ensure:

- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] No console errors or warnings
- [ ] Changes are responsive (mobile-friendly)
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow guidelines
- [ ] Branch is up to date with master

---

## 🎨 Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Use arrow functions for components
- Destructure props and state
- Use meaningful variable names
- Keep components small and focused
- Use React.memo for performance when needed

```jsx
// ✅ Good
const MovieCard = memo(({ movie, onFavorite }) => {
  const { title, posterPath, rating } = movie;

  return (
    <div className="movie-card">
      <img src={posterPath} alt={title} />
      <h3>{title}</h3>
      <span>{rating}</span>
    </div>
  );
});

// ❌ Avoid
function MovieCard(props) {
  return (
    <div>
      <img src={props.movie.posterPath} />
      <h3>{props.movie.title}</h3>
    </div>
  );
}
```

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first approach
- Group related utilities logically
- Extract repeated patterns to components

```jsx
// ✅ Good - Organized and readable
<button className="
  px-4 py-2
  bg-blue-500 hover:bg-blue-600
  text-white font-medium
  rounded-lg
  transition-colors
">

// ❌ Avoid - Unorganized
<button className="text-white bg-blue-500 rounded-lg px-4 font-medium py-2 hover:bg-blue-600 transition-colors">
```

### File Organization

- One component per file
- Use PascalCase for components
- Use camelCase for utilities/hooks
- Group related files in folders
- Export from index files when appropriate

---

## 📚 Documentation

Good documentation helps everyone! You can contribute by:

- Improving README clarity
- Adding code comments
- Creating usage examples
- Writing tutorials or guides
- Fixing typos or formatting

---

## ❓ Questions or Need Help?

- **Open a discussion** on [GitHub Discussions](https://github.com/BilgeGates/FlickHub/discussions)
- **Ask in issues** with the `question` label
- **Check existing issues** for similar questions

---

## 🙏 Thank You!

Your contributions make FlickHub better for everyone. We appreciate your time and effort!

Happy coding! 🎬

---

**Project Repository:**  
https://github.com/BilgeGates/FlickHub

**Report Issues:**  
https://github.com/BilgeGates/FlickHub/issues
