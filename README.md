# Nahathai Wonganawat · Portfolio

Personal portfolio built with Jekyll and hosted on GitHub Pages.
Live: https://nahathaiw.github.io

- Rules for adding pages and content (for humans and AI): [AGENTS.md](AGENTS.md)
- Run locally: `gem install jekyll` then `jekyll serve`, open http://localhost:4000

## Where to put photos

All photos live in `assets/img/`, one folder per page:

```
assets/img/
  home/portrait.jpg        your photo on the home page (4:5, < 400 KB)
  about/                   photos for the About page
  journey/                 photos for Journey milestones
  contact/                 photos for the Contact page
  gallery/                 extra photos (future gallery page)
  projects/<slug>/         one folder per project; cover.jpg = card + page image
                           (1600x900, < 300 KB), plus any screenshots
```

A photo only shows on the site once its path is set in the matching file:
`_config.yml` → `owner.photo` for the portrait, or `cover:` in `_projects/<slug>.md`.
