# Sakura — Static Restaurant Website

This is a small static website for a Japanese restaurant (Sakura). It uses a simple architecture:
- index.html — markup and sections (hero, about, menu, reservations)
- styles.css — responsive styles
- scripts.js — lightweight interactivity (mobile nav, modal, form)

Menu items are pre-filled and use Unsplash's random-image queries for Japanese food:
e.g. `https://source.unsplash.com/600x500/?sushi` — these return varied photos on each request.

## Quick start

1. Place the files (`index.html`, `styles.css`, `scripts.js`) at your repository root (or in a `docs/` folder).
2. Push to GitHub.
3. Enable GitHub Pages:
   - Go to repository Settings → Pages.
   - Choose the branch (`main` or `gh-pages`) and folder (`/ (root)` or `/docs`) where files live.
   - Save. Your site will be published at `https://<your-username>.github.io/<repo>/` or via a custom domain.

## Customize

- Replace menu items in `index.html` with your real menu and prices.
- Replace Unsplash image URLs with committed images in an `assets/` folder to avoid image rotation.
- Update contact details and opening hours in the contact section.
- Add analytics, accessibility improvements, or a real reservation backend if needed.

## Deployment options

- GitHub Pages (recommended for this repository).
- Netlify / Vercel: drag-and-drop or connect the repo for automatic builds (no build step required for static files).

## License

Use and modify freely. Consider adding a LICENSE file to the repo.

```