# Personal Portfolio Website Design Specification

**Date:** June 1, 2026  
**Author:** JiaHuan Yan  
**Status:** Approved  

---

## Overview

Personal portfolio website for JiaHuan Yan, a Senior AI Engineer and Co-founder at an embodied intelligence startup. The website serves as a professional showcase for job-seeking purposes, targeting both large tech companies and AI-focused startups.

**Goals:**
- Showcase professional expertise and credibility
- Highlight core technical skills with real-world applications
- Present projects, research, and work experience
- Enable recruiters to quickly understand background and capabilities
- Provide easy contact access

---

## Design Philosophy

- **Visual Style:** Physical Intelligence-inspired aesthetic
  - Low saturation, neutral color palette
  - Elegant simplicity with ample whitespace
  - Soft, professional appearance without high contrast
  
- **Layout:** Grid-based card system (Microsoft Fluent style)
  - Responsive, modern design
  - Clear visual hierarchy
  - Consistent spacing and typography

- **Content Strategy:** Ability-first with project validation
  - Core skills are the primary focus
  - Projects and work examples validate each skill
  - Education and experience provide credibility context

- **Language:** English only

---

## Color Scheme

**Base Palette (Physical Intelligence Style):**
- Background: `#faf9f7` (soft off-white)
- Card Background: `#f0ede9` (light warm-gray)
- Text Primary: `#2a2a2a` (dark gray)
- Text Secondary: `#6b6b6b` (medium gray)
- Accent/Border: `#d4ccc4` (muted taupe)

**Principles:**
- Low contrast, elegant appearance
- No bright colors or high saturation
- Hover states use subtle transitions (background shift, slight lift effect)

---

## Page Structure

### 1. Navigation Bar
- **Logo:** "JY" (initials)
- **Navigation Links:** Skills | Projects | Publications
- **Styling:** Minimal, matching page background
- **Sticky:** Not required, simple scroll

### 2. Hero Section (Above Fold)
**Content:**
- Large heading: "JiaHuan Yan"
- Subtitle: "AI Engineer | Roboticist | AI Infrastructure"
- Overview paragraph (2-3 sentences about current role and mission)
- **Education section (bullet points):**
  - M.S. in Intelligent Systems, NUS (2022-2023)
  - B.S. in Electrical Engineering (2018-2022)
- **Working Experience section (bullet points):**
  - Senior AI Engineer & Co-founder role (May 2024-Present) — brief description
  - A*STAR internship (Apr 2023-Aug 2023) — brief description
- **Contact Links:** Email | LinkedIn | GitHub

**Styling:**
- Centered layout
- Large typography for name (48px)
- Subtitle in secondary color (18px)
- Bullet points for education and experience
- Contact links as simple text links with underlines
- Generous padding (80px vertical)

### 3. Core Skills Section
**Content:**
- Section title: "Core Skills"
- Grid of skill cards (6 total, responsive)

**Skill Cards:**
Each card contains:
- Skill name (16px, bold)
- Brief description of what's included (13px)
- "Applied in:" section with real project examples (12px, subtle background)

**Skills to showcase:**
1. Embodied Intelligence — Imitation Learning, VLA, WMA, robot teleoperation
2. Training Optimization — DDP, DeepSpeed, LoRA fine-tuning, distributed training
3. LLM & Pre-training — Large language model pre-training, prompt engineering
4. AI Infrastructure — Server management, cluster setup, compute optimization
5. Robotics & ROS2 — Robot programming, ROS2 ecosystem, hardware integration
6. Simulation & Tools — Isaac Sim, specialized tools development

**Styling:**
- Card grid: 3 columns on desktop, 2 on tablet, 1 on mobile (CSS Grid with `repeat(auto-fit, minmax(280px, 1fr))`)
- Border-left accent: 3px solid in accent color
- Hover effect: background color shift, subtle translate up

### 4. Projects & Work Section
**Content:**
- Section title: "Projects & Work"
- Grid of project cards (responsive)

**Project Cards:**
Each card contains:
- Placeholder for image/video (160px height, gradient background)
- Project name (14px, bold)
- Date or timeframe (12px, gray)
- Tags (technology/category labels in small pills)

**Projects to display (6 total):**
1. Toilet Cleaning Robot (TR3) — 2024-Present — Embodied AI, Hardware, Production
2. Data & Training Platform — 2024-Present — Infrastructure, ML Ops
3. GPU Cluster Monitoring Tool — Open Source — Infrastructure, Python, Monitoring
4. Simulation Environment Development — Research — Isaac Sim, Robotics
5. LLM-based Text-to-SQL System — A*STAR 2023 — LLM, Prompt Engineering, LoRA
6. Poetry Semantic Segmentation — Master's Research 2022-2023 — NLP, Pre-training, EMNLP

**Media Handling:**
- Images: Display in placeholder area; if multiple images exist for a project, implement auto-rotating carousel
- Videos: Auto-play in muted loop mode within the card
- Fallback: Gradient placeholder with project name overlay

**Styling:**
- Card grid: Similar responsive behavior to skills (300px min-width)
- Hover effect: background shift, translate up

### 5. Publications & Research Section
**Content:**
- Section title: "Publications & Research"
- List of publication items

**Publication Items:**
Each item contains:
- Publication title (14px, bold)
- Venue/conference (12px, gray)
- Link to paper/resource (with arrow icon or "View →")

**Publications to feature:**
- Whole Word Masking for Poetry Semantic Understanding (EMNLP 2023)
- Recent LLM Research Work (ArXiv 2025)
- Multiple papers across various venues
- Link to Google Scholar profile

**Styling:**
- Vertical list with card-like styling
- Border-left accent (3px solid)
- Links with subtle underline hover effect

### 6. Footer
- Copyright notice: "© 2024 JiaHuan Yan. Built with care."
- Simple, minimal styling
- Background uses accent card color

---

## Responsive Behavior

- **Desktop (1200px+):** Full 3-column grids for skills, 2-3 column for projects
- **Tablet (768px-1199px):** 2-column grids, slightly reduced padding
- **Mobile (<768px):** 1-column layout, adjusted typography sizes
- **Navigation:** Remains horizontal but with reduced gap on mobile

---

## Typography

- **Font Family:** System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif)
- **Page Heading (h1):** 48px, bold, dark gray
- **Section Title (h2):** 32px, bold, dark gray
- **Card Heading (h3):** 16px, bold
- **Body Text:** 14px, secondary gray
- **Small Text:** 12px, light gray (dates, venues)
- **Line Height:** 1.6 base, 1.8 for larger blocks

---

## Interactions & Animations

- **Hover Effects:**
  - Skill/Project cards: subtle background color change + 2px upward translate
  - Links: color change to primary dark gray + border-bottom color change
  - Smooth 0.3s transitions

- **Media (Future Implementation):**
  - Image carousel: Auto-rotate through multiple images (if available) on 5-second interval
  - Video: Auto-play, muted, looped, no controls initially (show on hover)

---

## Content Management

All content is currently hardcoded in HTML. Future enhancements could include:
- Dynamic content from JSON/CMS
- Admin panel for updating projects and publications
- Integration with GitHub and Google Scholar APIs for auto-updating

---

## Accessibility Considerations

- Semantic HTML structure (nav, section, footer)
- Sufficient color contrast ratios (WCAG AA)
- Responsive design for all screen sizes
- Clear navigation structure

---

## Technical Stack

- **Frontend:** HTML5, CSS3
- **Hosting:** GitHub Pages
- **Build/Deployment:** Git push to GitHub repository

---

## File Structure

```
selfie/
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-06-01-personal-portfolio-design.md (this file)
├── index.html (main page)
├── styles.css (optional, if separated)
├── assets/
│   ├── images/ (project images and videos)
│   └── logos/ (social media icons if needed)
├── .github/
│   └── workflows/ (CI/CD for deployment)
└── README.md
```

---

## Deployment

**Platform:** GitHub Pages  
**Repository:** https://github.com/[username]/[username].github.io  
**Domain:** https://[username].github.io  

**Steps:**
1. Create/use GitHub Pages repository
2. Add HTML and assets
3. Push to main/master branch
4. GitHub Pages automatically deploys

---

## Next Steps

1. ✅ Design approved
2. ⏳ Create implementation plan (writing-plans skill)
3. ⏳ Build HTML structure and CSS
4. ⏳ Add actual project images and content
5. ⏳ Implement media carousel/video features
6. ⏳ Deploy to GitHub Pages
7. ⏳ Test responsiveness and cross-browser compatibility

---

## Notes

- All text content is in English
- Physical Intelligence color palette is intentionally subtle and sophisticated
- Design prioritizes clarity and professionalism over visual flashiness
- Layout is mobile-first approach with progressive enhancement
