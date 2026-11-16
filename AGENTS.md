# AGENTS.md — Nahathai Wonganawat Portfolio

This file is the rulebook for any AI agent (or human) working on this repository.
Read it fully before you change anything. If a request conflicts with these rules,
follow the rules and tell the owner which rule blocked the request.

---

## 0. Workflow for every request (read this first)

1. **Classify the request** with the table in §6 (project, journey milestone,
   job, skill, photo, link, new page…). The table names the one file to edit.
2. **Edit content, not code.** Almost every request is solved by editing
   `_config.yml`, a file in `_data/`, or a file in `_projects/`. Touch layouts,
   CSS or JS only when a field must be *displayed in a new way*, and then add it
   as an **optional** field so old entries keep working (see §6 examples).
3. **Check the facts.** Use only the owner's words (§4). Missing info → leave the
   field empty and report `TODO for owner:`. Rewrite pasted text to the house
   style (§4.4) and say what you shortened.
4. **Preview** with `jekyll serve --livereload` (§2) and open the changed page.
5. **Run the checklist** in §9.
6. **Report** what changed, where (file path), and any TODOs or rule conflicts.
7. **Commit and push only when the owner asks.** Message: short imperative
   title ("Add …", "Update …") + bullet list of changes.

If the owner explicitly overrides a rule, do it, then record the exception in
§12 so the next agent keeps it.

---

## 1. Purpose

A personal portfolio for **Nahathai Wonganawat** (GitHub: `nahathaiw`), an EECS
undergraduate at National Tsing Hua University. It is used for **internship and
job applications**, so the reader is usually a recruiter or engineer who skims for
30–60 seconds.

The home page is a **bento dashboard**: one screen of tiles that answers, at a glance,
1. Who is she? (hero tile + photo)
2. Is she available, and for what? (status tile)
3. What has she built? (work, key projects & research tiles)
4. How do I contact her? (say-hello tile, hero links)

Every tile with a ↗ button opens a **full page** with the details.

## 2. Tech stack (do not change without the owner's approval)

- **Jekyll**, built by **GitHub Pages** from the `main` branch root. No GitHub
  Actions, no npm, no build step, no extra plugins.
- One stylesheet: `assets/css/main.css`. One script: `assets/js/main.js`
  (vanilla JS, no frameworks, no CDN scripts).
- One font: **IBM Plex Mono** from Google Fonts, loaded in `_includes/head.html`.
- Tool logos are inline SVGs in `_includes/icons/` (from Simple Icons, CC0).
  Never hot-link images from other sites.

Preview locally: `jekyll serve --livereload` → http://localhost:4000 (no `baseurl`;
the repo is `nahathaiw.github.io`, live at https://nahathaiw.github.io).
On macOS use Homebrew Ruby (`brew install ruby`, then `gem install jekyll`); the
system Ruby 2.6 is too old. Restart the server after editing `_config.yml`.
GitHub Pages builds with Jekyll 3.10, so use only basic Liquid features.

## 3. File map

```
AGENTS.md                ← this rulebook (CLAUDE.md points here)
_config.yml              ← owner profile: name, hero lines, status, links, about
_data/
  timeline.yml           ← Journey entries (home tile shows the newest 3)
  experience.yml         ← research, work and leadership entries (About page)
  skills.yml             ← skill groups (About page)
  stack.yml              ← logos in the "Tools I use" tile
  gallery.yml            ← photos (reserved for a future gallery page)
_projects/<slug>.md      ← ONE file per project (the main thing you will add)
_layouts/
  default.html           ← black frame + top bar + footer around every page
  page.html              ← inner page: header tile, then content tiles
  project.html           ← project detail page
_includes/               ← reusable pieces: head, topbar, footer, monogram,
                           arrow (↗ button), theme-icon, icons/*.svg
index.html               ← home bento grid
projects/index.html      ← Work page: featured cards + archive
journey.html             ← /journey/
about.html               ← /about/   (bio, skills, experience)
contact.html             ← /contact/
assets/css/main.css      ← all styles; tokens at the top, bento grid in "§ Bento"
assets/js/main.js        ← all interactions
assets/img/projects/<slug>/   ← images for one project (cover.jpg + screenshots)
assets/img/home/portrait.jpg  ← owner photo (set owner.photo in _config.yml)
assets/img/about|journey|contact|gallery/  ← photos for those pages
assets/files/resume.pdf       ← CV (set owner.resume in _config.yml)
assets/files/<event>-<year>-poster.pdf ← posters / slides linked from pages
../original-photos/           ← full-size originals, OUTSIDE the repo (never commit)
```

**Never** put content (text about her) inside layouts, includes, CSS or JS. Content
lives only in `_projects/`, `_data/`, `_config.yml` and the front matter of pages.
Layouts only render it.

## 4. Content rules (most important)

1. **Never invent facts.** No made-up projects, numbers, dates, awards, employers,
   skills, quotes, or links. Use only what the owner provided or what already exists
   in the repo. If something is missing, leave the field empty and list it in your
   reply as `TODO for owner:`.
2. **Never publish private data:** phone number, home address, student ID, or
   anything the owner marks as private.
3. Be honest about status. If a project is planned or in progress, say so
   (`status: in-progress`) and do not describe planned features as working.
4. English only. Short, active sentences. Bullets start with a past-tense verb
   ("Built…", "Profiled…", "Led…"); an ongoing role may use present tense
   ("Lead…", "Plan…"). "I" is used only in "What I did",
   "What I learned" and the About text.
5. Numbers keep their original context (e.g. "~6.3× less per-frame data in the
   evaluated foreground-only scene", not "6× faster").
6. **No emoji anywhere.** No buzzwords ("passionate", "cutting-edge",
   "revolutionary").

## 5. How to add a new project (the common task)

1. Choose a **slug**: lowercase, words joined by hyphens, max 4 words,
   e.g. `rxnorm-medication-app`. The file is `_projects/<slug>.md`; the URL becomes
   `/projects/<slug>/` automatically.
2. Copy `_projects/_template.md` (excluded from the build) and fill in the front
   matter exactly in this order:

   ```yaml
   ---
   title: "Real-Time Chat Application"   # max ~40 characters
   summary: "One sentence, max 140 characters: what it does and for whom."
   period: "2024"                       # "2024", "2025 – Present", "Jul – Sep 2026"
   year: 2024                           # number, start year, used for sorting
   category: fullstack                  # research | ai | fullstack | foundations | web
   role: "Independent developer"        # her role, short
   tech: [React, Firebase, Firestore]   # 2–6 items, official capitalization
   status: concluded                    # published | deployed | in-progress | concluded
   featured: false                      # true = card on the Work page + home thumbnail
   order: 99                            # featured order, 1 = first; 99 if not featured
   cover: ""                            # "/assets/img/projects/<slug>/cover.jpg" or ""
   links:                               # "" if none; never guess URLs
     repo: ""
     demo: ""
     paper: ""
     poster: ""                         # PDF in /assets/files/
   ---
   ```

3. Write the body with **these headings, in this order** (skip one only if there
   is truly nothing to say; never add filler):

   ```markdown
   ## Overview        ← 2–3 sentences: the problem and why it matters
   ## What I did      ← 2–5 bullets of her own contribution
   ## How it works    ← short explanation or numbered pipeline steps
   ## Results         ← only measured results; otherwise "Not yet measured."
   ## What I learned  ← 1–3 bullets; ask the owner, do not invent
   ```

4. **At most 4** projects may be `featured: true`. The home "Key projects &
   research" tile shows the first 3 by `order`. If a 5th would be featured, ask
   the owner which one to un-feature.
5. Images go in `assets/img/projects/<slug>/`. `cover.jpg` is landscape,
   1600×900, < 300 KB. Every image needs alt text. Without a cover, the layout
   shows a striped "Screenshot coming soon" placeholder automatically. No stock
   photos and no AI-generated images of her.
6. Do **not** edit `index.html` or `projects/index.html` to add a project; they
   read the collection automatically.

## 6. How to add other content

| I want to add…                | Edit this file                 | Format / rule |
|-------------------------------|--------------------------------|---------------|
| A job, research role, club    | `_data/experience.yml`         | `kind` (research \| work \| leadership), `role`, `org`, optional `logo` (square image in `assets/img/about/`), `period`, `place`, `points` (2–4) |
| A journey milestone           | `_data/timeline.yml`           | `year`, `place`, `title` (≤ 40 chars), `text` (≤ 30 words), optional `photos` (list of `src` + `alt`, files in `assets/img/journey/`), optional `links` (list of `label` + `url`). Newest first. |
| A skill                       | `_data/skills.yml`             | add to the right `group`; no ratings or percentages |
| A tool logo                   | `_includes/icons/<name>.svg` + `_data/stack.yml` | SVG from Simple Icons with `aria-hidden="true" fill="currentColor"` added to `<svg>` |
| Status / availability         | `_config.yml` → `owner.status`, `owner.status_detail` | one word + one short line |
| Hero text                     | `_config.yml` → `owner.hero_lines` | max 3 lines, each ≤ 24 characters |
| Photo or CV                   | `assets/img/home/portrait.jpg`, `assets/files/resume.pdf` + the path in `_config.yml` | portrait 4:5, < 400 KB |
| Contact links                 | `_config.yml` → `owner.links`  | empty value = link hidden |

### Copy-ready examples

```yaml
# _data/timeline.yml  (newest first; photos and links are optional)
- year: "2026"
  place: "Austin, Texas"
  title: "Presenting at ACM MobiCom 2026, ImmerCom 2026"
  text: "One or two sentences, max 30 words, facts from the owner only."
  links:
    - label: "Paper"            # external URL → opens in a new tab
      url: "https://doi.org/10.1145/..."
    - label: "Project"          # internal path → same tab
      url: "/projects/text-to-3dgs-avatars/"
  photos:
    - src: "/assets/img/journey/mobicom-poster.jpg"
      alt: "Nahathai presenting her research poster at ACM MobiCom 2026"

# _data/experience.yml  (newest first; logo is optional)
- kind: work                    # research | work | leadership
  role: "Equity Analyst Intern"
  org: "Syrius Systematica Ltd."
  logo: "/assets/img/about/syrius-logo.png"
  period: "Mar – Aug 2022"
  place: "Hong Kong"
  points:
    - "Wrote monthly, weekly and daily technical analysis of U.S. and Chinese equities."
    - "Produced quarterly fund factsheets and weekly risk/exposure reports."
```

### Adding a photo (recipe)

1. Keep the owner's original in `../original-photos/` (outside the repo) and add
   one line to its `README.txt`: `<original name> -> <path in assets/img>`.
2. Convert HEIC to JPEG, rotate upright (EXIF), crop to the target ratio, resize:
   portrait 4:5 at 800×1000 · project cover 16:9 at 1600×900 · Journey photo 3:4
   at 750×1000 · logo square at 240×240 (PNG, trim white space).
3. Re-save **without metadata** (removes GPS location). Stay under the size limits.
4. Name files `<topic>-<detail>.jpg` in lowercase with hyphens, in the page's
   folder (`assets/img/<page>/` or `assets/img/projects/<slug>/`).
5. Write alt text that says who/what is in the photo; set the path in the data file.
6. Look at the cropped result before committing; heads must not be cut off.

### Adding a new page
A new full page (e.g. "Photography") needs the owner's approval. Then:
1. Create `<name>.html` with front matter `layout: page`, `title`, `permalink: /<name>/`,
   `kicker`, `heading`, `summary`. Put its data in `_data/<name>.yml`, not in the HTML.
2. Build the content from `.tile` blocks, reusing classes from §7.
3. Add a link in `_includes/topbar.html`.
4. If it needs a home tile, follow §7 "Adding a home tile".

## 7. Visual style — "bento dashboard"

Inspired by device widgets: rounded gray tiles packed in a grid inside a thick
black frame, all text in monospace, headings in UPPERCASE. Black, white and gray
only. Calm, technical, a little playful.

**Colors** — only these tokens from `:root` in `main.css`. Never hard-code colors.
Light is the default; dark comes from the toggle (`data-theme="dark"`).

| Token        | Light     | Dark      | Use                              |
|--------------|-----------|-----------|----------------------------------|
| `--page`     | `#E6E6E6` | `#0A0A0A` | area outside the frame           |
| `--frame`    | `#0E0E0E` | `#000000` | black bezel around all tiles     |
| `--tile-a`   | `#DADADA` | `#1E1E1E` | tile gradient start              |
| `--tile-b`   | `#C9C9C9` | `#161616` | tile gradient end                |
| `--sheen`    | `#F2F2F2` | `#2A2A2A` | soft highlight on tiles          |
| `--ink`      | `#111111` | `#EAEAEA` | main text                        |
| `--ink-2`    | `#4D4D4D` | `#9B9B9B` | labels, secondary text           |
| `--line`     | `#B5B5B5` | `#333333` | borders and rules inside tiles   |
| `--solid`    | `#6A6A6A` | `#CFCFCF` | the single filled tile (theme)   |
| `--on-solid` | `#F5F5F5` | `#111111` | text on `--solid`                |
| `--frame-ink`| `#8A8A8A` | `#8A8A8A` | footer text on the frame         |

**Type** — IBM Plex Mono only. Use these classes, do not invent new sizes:
`.kicker` (13px label, sentence case, top-left of a tile) · `.small` (13px) ·
`.lede` (16px) · `.h-md` (16–19px, UPPERCASE) · `.h-lg` (20–26px, UPPERCASE) ·
`.h-xl` (28–48px, UPPERCASE, page titles only).

**Tiles**
- Everything sits in a `.tile` (radius 20px, padding 22px, gray gradient + sheen).
- A clickable tile is an `<a class="tile link-tile">` with a `.kicker`, a heading,
  and `{% include arrow.html %}` (the round ↗ button, bottom-right).
- Gap between tiles is always `var(--gap)` (10px). The black frame shows in the gaps.
- Only one tile per page may use `--solid` (the theme switch on home).
- Images inside tiles are grayscale (`filter: grayscale(1)`), except Journey
  photos (`.timeline-photos`), which keep their original color (owner request).

**Adding a home tile** (rare; ask the owner first)
1. Add the tile in `index.html` with a new `data-area="<name>"`.
2. In `main.css` § Bento, add `<name>` to `grid-template-areas` for all three
   breakpoints (1 column < 680px, 2 columns, 12 columns ≥ 1024px) and add the
   `[data-area="<name>"] { grid-area: <name>; }` line.
3. Keep every row of the 12-column template full — no empty cells.

**Layout** — max width 1240px. Works from 360px wide with no horizontal scroll.
Below 680px all tiles stack in this order: hero, photo, status, theme, hello,
work, about, journey, research, stack.

## 8. Interaction rules

- Allowed: tile lift on hover, ↗ button rotating on hover, the live clock
  (`data-clock`, owner's time zone), the pulsing status dot, the scrolling logo
  rail, the light/dark toggle (`data-theme-toggle`), filter chips
  (`.filters` + `data-filter-list`), copy buttons (`data-copy`), and fade-in on
  scroll (`data-reveal`).
- Reuse these data attributes; do not write new JS for the same behavior.
- Every animation uses `transform`/`opacity` only, ≤ 700ms (the logo rail and
  pulse loop slowly), and is **off** under `prefers-reduced-motion: reduce`.
- Pages must be readable with JavaScript off.
- No autoplay audio/video, no scroll hijacking, no custom cursor, no popups.

## 9. Quality checklist (run before you finish)

- [ ] `jekyll build` finishes with no errors or warnings.
- [ ] New page opens at the expected URL and appears in the right list.
- [ ] No invented facts, no emoji; every TODO is reported to the owner.
- [ ] Only color tokens and the type classes above are used.
- [ ] Checked at 390px and 1280px, light and dark.
- [ ] Images have alt text and stay under the size limits.
- [ ] External links use `target="_blank" rel="noopener"`.

## 10. What not to do

- Do not rename or move existing files or change URLs.
- Do not add analytics, trackers, cookies, or third-party embeds.
- Do not delete the owner's content; if something looks outdated, ask.
- Do not edit `AGENTS.md` unless the owner asks; propose changes instead.

## 11. Reusing this system

The rules are written so the same repo can grow or be copied:
- **New content of an existing type** (project, milestone, job, link, photo):
  one file edit following §5–§6, no code.
- **New field** (like `links`, `photos`, `logo`, `poster` were added): make it
  optional in the layout (`{% if x.field %}`), document it in §5/§6 and the
  examples, and add it empty to `_projects/_template.md` if it is a project field.
- **New page** (e.g. Photography, Talks): §6 "Adding a new page" — one HTML file
  + one `_data/<name>.yml`, reusing `.tile` classes; no new CSS colors.
- **Another person's portfolio:** keep layouts, CSS, JS and this file; replace
  `_config.yml → owner`, the files in `_data/`, `_projects/` and `assets/img/`,
  and update §1 and the URL in §2.

## 12. Owner decisions (exceptions to the rules above)

- Journey photos keep their original color (§7).
- Two Journey titles exceed 40 characters at the owner's request
  ("Presenting at ACM MobiCom 2026, ImmerCom 2026",
  "Summer research intern on 3DGS compression").
- Ongoing roles use present tense in bullets (§4.4).
- The main contact email is `nahathai.wong@gmail.com`; the MobiCom poster PDF
  shows the university email and is left as published.
