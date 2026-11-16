---
title: "TOCFL Vocab Practice"
summary: "A browser app for learning the official TOCFL word list: 7,517 Traditional Chinese words with flashcards, quizzes, listening and typing."
period: "Oct 2026"
year: 2026
category: web
role: "Independent developer"
tech: [HTML, CSS, JavaScript, Web Speech API]
status: deployed
featured: false
order: 99
cover: "/assets/img/projects/tocfl-vocab-practice/cover.jpg"
links:
  repo: "https://github.com/nahathaiw/TOCFL-Vocab-Practice"
  demo: "https://nahathaiw.github.io/TOCFL-Vocab-Practice/"
  video: ""
  paper: ""
  poster: ""
---

## Overview

Learners preparing for the TOCFL (Test of Chinese as a Foreign Language) need to
work through a long official word list. This app turns the TOCFL 2.0 list into
practice modes that run in any browser, with English meanings for every level.

## What I did

- Built a single-page app with the full TOCFL 2.0 word list (2024-09-23), seven levels from Pre-A1 to C1.
- Added English meanings for all levels, level by level.
- Built four practice modes: flashcards, 4-choice quiz, listening and typing.
- Added Taiwan Mandarin pronunciation with a voice picker, Pinyin or Zhuyin, an English or Chinese interface, and day/dark mode.
- Published it on GitHub Pages as one self-contained file.

## How it works

1. Pick one or more levels, then narrow by topic or part of speech; a counter shows how many words match.
2. Choose a mode: flip flashcards and mark "Know it" or "Still learning", answer 4-choice questions, hear a word and pick the characters, or see the meaning and type the characters.
3. Wrong answers go to a mistakes list that can be quizzed until it is empty; "Skip words I know" hides learned words.
4. Pronunciation uses the browser's speech engine (Web Speech API) and prefers a Taiwan Mandarin voice.
5. Progress and settings are saved in the browser (localStorage), so no account or server is needed.

## Results

Not yet measured.
