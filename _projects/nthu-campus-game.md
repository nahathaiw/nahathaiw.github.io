---
title: "NTHU Campus Adventure Game"
summary: "A browser game set on the NTHU campus: explore the map, meet NPCs and play themed mini-games, with Firebase login and leaderboards."
period: "May – Jun 2025"
year: 2025
category: web
role: "Team member, mini-game developer"
tech: [TypeScript, Cocos Creator, Firebase]
status: concluded
featured: false
order: 99
cover: ""
links:
  repo: "https://github.com/nahathaiw/final_nthu"
  demo: ""
  video: "https://www.youtube.com/watch?v=UtH5NtKcpE4"
  paper: ""
  poster: ""
---

## Overview

A team-built 2D adventure game set on the NTHU campus, made as the final project for the Software Studio course. Players walk the campus map,
talk to characters, enter buildings and complete themed mini-games, with accounts,
scores and leaderboards stored in Firebase.

## What I did

- Built the CS-themed mini-game: added its assets, physics and colliders, a practice mode without physics, and letter grades for results.
- Added an in-game guide for the binary challenge.
- Set up the Options page and added an exit button to the nuclear target-shooting game.
- Merged team branches and resolved project-file conflicts before the final build.
- Rewrote the project README to document features, setup and structure.

## How it works

1. Players register and log in with email and password (Firebase Authentication).
2. The campus scene handles character movement, camera following, NPCs and doors; doors switch to mini-game scenes.
3. Mini-games include a flag quiz, nuclear target shooting, PE challenges, a maze and a CS-themed battle.
4. Scores are saved per game to Firebase Realtime Database and shown on per-game leaderboards; players return to their map position afterwards.
5. The web build is configured for Firebase Hosting.

## Results

Not yet measured.
