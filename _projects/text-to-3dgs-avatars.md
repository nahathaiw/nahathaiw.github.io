---
title: "Text-to-3DGS Avatar Pipeline"
summary: "A six-stage research pipeline that turns text or speech into an animated 3D Gaussian Splatting avatar."
period: "2025 – Present"
year: 2025
category: research
role: "Research Assistant, co-author"
tech: [Python, Whisper, Llama 3.2, HUGS, 3DGS]
status: published
featured: true
order: 1
cover: ""
links:
  repo: ""
  demo: ""
  paper: "https://doi.org/10.1145/3842656.3843821"
  poster: "/assets/files/mobicom-2026-poster.pdf"
---

## Overview

Immersive communication needs avatars that can be generated and animated quickly
from what a person says. At the AIINS Lab (advisor: Prof. Cheng-Hsin Hsu), our team
built a modular pipeline that goes from text or speech to an animated 3D Gaussian
Splatting (3DGS) avatar. The work was accepted at **ACM ImmerCom 2026**, co-located
with ACM MobiCom 2026 in Austin, Texas.

## What I did

- Co-developed the six-stage pipeline and supported integration and testing between modules on GPU machines.
- Implemented and validated motion-to-avatar coordinate-conversion scripts, including SMPL parameter alignment and rotation adjustments.
- Profiled 120-frame runs to find runtime bottlenecks.
- Helped with the objective performance evaluation and a 24-participant user study.
- Co-authored the paper and presented the research at ACM MobiCom 2026.

## How it works

<!-- TODO owner: confirm the exact six stages and their order. -->

1. **Speech to text** with Whisper (skipped when the input is already text).
2. **Prompt normalization** with Llama 3.2, so motion prompts have a consistent form.
3. **Motion generation** with a diffusion-based motion model.
4. **Coordinate conversion** from the motion format to the avatar's SMPL parameters.
5. **Avatar animation** with HUGS human avatars.
6. **Rendering** of the animated avatar as Gaussian splats.

## Results

In the evaluated foreground-only scene representation, per-frame data fell from
**637 MB to 101.7 MB (~6.3× smaller)**, and the Gaussian count dropped from about
2.5 million to about 400,000.

> N. Leesaksakul, N. Wonganawat, S. Wutinarongtrakul, B. Kaewchuay, and C.-H. Hsu,
> “Modular Neural Pipelines for Text-to-3DGS Avatar Generation: System Implementation
> and Preliminary Optimization.” ACM ImmerCom 2026.

<!-- TODO owner: add "What I learned" in your own words. -->
