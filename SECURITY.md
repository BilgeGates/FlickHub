# Security Policy

## 🔐 Overview

FlickHub is a client-side only application with no backend server. All functionality runs entirely in the browser, significantly reducing the attack surface.

---

## 🛡️ Security Architecture

### Client-Side Only

- ✅ No server-side data storage
- ✅ No user authentication or accounts
- ✅ No database or backend services
- ✅ All data stored locally in browser (localStorage)

### Data Privacy

- ✅ No cookies, trackers, or fingerprinting
- ✅ No third-party analytics or telemetry
- ✅ No user data is collected, stored, or transmitted
- ✅ Favorites stored only in your browser's localStorage

### API Communication

- ✅ HTTPS only communication with TMDB API
- ✅ API keys stored in environment variables (not exposed in client)
- ✅ No sensitive data transmitted

---

## 📋 Supported Versions

| Version | Supported              |
| ------- | ---------------------- |
| 2.x.x   | ✅ Currently supported |
| 1.x.x   | ❌ No longer supported |

---

## 🐛 Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

1. **Do NOT** create a public GitHub issue for security vulnerabilities
2. Send an email to **darkdeveloperassistant@gmail.com** with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (optional)

### What to Expect

| Timeframe   | Action                                |
| ----------- | ------------------------------------- |
| 24-48 hours | Initial acknowledgment of your report |
| 7 days      | Assessment and initial response       |
| 30 days     | Resolution timeline provided          |

### After Resolution

- You will be credited in the changelog (if desired)
- Security advisory will be published if applicable

---

## 🔒 Security Best Practices for Users

### Environment Variables

```bash
# Never commit your .env file
# Use .env.example as a template
VITE_TMDB_API_KEY=your_api_key_here
```

### Local Development

- Keep dependencies updated: `npm update`
- Review dependency vulnerabilities: `npm audit`
- Use HTTPS in production

---

## 📦 Dependency Security

We use the following tools to maintain security:

- **Dependabot** - Automated dependency updates
- **npm audit** - Vulnerability scanning
- **CodeQL** - Static code analysis

### Updating Dependencies

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Update all dependencies
npm update
```

---

## 🚫 Known Limitations

Since FlickHub is client-side only:

1. **API Key Exposure**: The TMDB API key may be visible in browser developer tools. This is acceptable for public APIs with rate limiting.

2. **localStorage Security**: Data in localStorage is not encrypted. Do not store sensitive information.

3. **Third-party Embeds**: Video player embeds from third-party sources are beyond our control.

---

## 📞 Contact

For security concerns:

- **Email**: darkdeveloperassistant@gmail.com
- **GitHub**: [Create a private security advisory](https://github.com/BilgeGates/FlickHub/security/advisories/new)

---

**Thank you for helping keep FlickHub secure!**
