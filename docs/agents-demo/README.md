# Demo: adding a page by following AGENTS.md

Evidence that an AI agent can extend this site using only the rules in
[`AGENTS.md`](../../AGENTS.md). This folder is excluded from the published site
(`_config.yml → exclude: docs`).

## The prompt

> Following AGENTS.md, add a project page for my NTHU campus game
> (repo: https://github.com/nahathaiw/final_nthu).

Screenshot of the prompt: `prompt.png` (added by the owner).

## What the agent did, rule by rule

| Step | Rule in AGENTS.md | Result |
|------|-------------------|--------|
| Classified the request as "new project" | §0 step 1, §6 table | edit `_projects/` only |
| Chose slug `nthu-campus-game` (lowercase, hyphens, ≤ 4 words) | §5.1 | URL `/projects/nthu-campus-game/` |
| Copied `_projects/_template.md`, filled front matter in the fixed order | §5.2 | `_projects/nthu-campus-game.md` |
| Took facts only from the repo README and commit history; the repo has 4+ contributors, so "What I did" lists only the owner's own commits | §4.1 | no invented facts |
| Left out student IDs that appear in the repo's git history | §4.2 | no private data |
| Wrote the body headings in order; Results = "Not yet measured."; skipped "What I learned" instead of inventing it | §5.3 | |
| `featured: false`, because 4 projects are already featured | §5.4 | |
| No cover yet, so the layout shows the "Screenshot coming soon" placeholder | §5.5 | |
| Did not edit `index.html` or `projects/index.html`; the Work page lists the project automatically | §5.6 | see `result-work-page.png` |
| Ran the quality checklist | §9 | see below |

No layout, CSS or JS was changed: the style (tokens, type classes, tiles) came
from the existing templates.

## §9 checklist

- [x] `jekyll build` finishes with no errors or warnings.
- [x] Page opens at `/projects/nthu-campus-game/` and appears on the Work page.
- [x] No invented facts, no emoji, no buzzwords (checked by script); TODOs reported.
- [x] Only color tokens and type classes used (no CSS changed).
- [x] Checked at 1280px and 390px with no horizontal scroll (`result-desktop-1280.png`, `result-phone-390.png`).
- [x] External link uses `target="_blank" rel="noopener"` (Code button).

## TODO for owner

- Live demo URL (Firebase Hosting), if still online → `links.demo`.
- "What I learned" (1–3 bullets).
- A gameplay screenshot → `assets/img/projects/nthu-campus-game/cover.jpg`.
