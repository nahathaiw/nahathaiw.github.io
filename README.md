# Nahathai Wonganawat · Portfolio

Personal portfolio built with Jekyll and hosted on GitHub Pages.
Live: https://nahathaiw.github.io

## How this repo works

The site is designed to be extended by an AI agent (or a person) following one
rulebook: **[AGENTS.md](AGENTS.md)** (`CLAUDE.md` points to it).

- **Content and design are separate.** All text lives in `_config.yml`,
  `_data/*.yml` and `_projects/*.md`; layouts only render it. Adding a project,
  a Journey milestone, a job, a link or a photo is a single data-file edit.
- **AGENTS.md defines** the purpose and audience, file map, content rules
  (no invented facts, no private data), front-matter formats with copy-ready
  examples, the visual system (color tokens, type classes, bento grid), allowed
  interactions, a photo-processing recipe, a quality checklist, how to add a new
  page, and a log of the owner's exceptions.

| Page | URL | Content comes from |
|------|-----|--------------------|
| Home (bento dashboard) | `/` | `_config.yml`, `_data/timeline.yml`, `_data/stack.yml`, `_projects/` |
| Work | `/projects/` | `_projects/<slug>.md` (one file per project) |
| Project detail | `/projects/<slug>/` | the same project file |
| Journey | `/journey/` | `_data/timeline.yml` |
| About | `/about/` | `_config.yml`, `_data/experience.yml`, `_data/skills.yml` |
| Contact | `/contact/` | `_config.yml` → `owner.links` |

## Run locally

```
brew install ruby          # macOS; system Ruby is too old
gem install jekyll
jekyll serve --livereload  # http://localhost:4000
```

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
