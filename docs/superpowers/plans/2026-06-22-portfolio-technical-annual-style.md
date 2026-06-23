# Portfolio Technical Annual Style Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the four capability sections so the portfolio reads like a technical annual rather than generic skill cards.

**Architecture:** Keep the existing single-file static site and manifest-driven media system, but reshape the capability section markup into editorial chapters with section numbering, metadata columns, stronger type hierarchy, and a more deliberate media-led layout. Use a small HTML structure test plus script syntax checks as regression protection.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js `node:test`

---

## File Structure

- Modify: `index.html`
  - Replace generic skill-card presentation with technical-annual chapter layout
  - Update CSS variables, type hierarchy, metadata layout, and media framing
- Create: `tests/index-structure.test.mjs`
  - Verify the capability section exposes four chapter blocks and expected data-skill bindings

## Task 1: Add a failing structure test

**Files:**
- Create: `tests/index-structure.test.mjs`

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run `node --test tests/index-structure.test.mjs` and confirm failure**
- [ ] **Step 3: Update `index.html` to satisfy the test**
- [ ] **Step 4: Re-run the test and confirm pass**

## Task 2: Restyle capability chapters

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace generic skill item styling with annual-report chapter styling**
- [ ] **Step 2: Add chapter numbering, timeframe, and role/stack/impact metadata rows**
- [ ] **Step 3: Tune media layout so the gallery feels like the visual anchor of each chapter**
- [ ] **Step 4: Verify inline script syntax still passes**

## Task 3: Produce a local preview artifact

**Files:**
- Create: `.superpowers/brainstorm/2220554-1782116410/content/technical-annual-preview-04.html`

- [ ] **Step 1: Mirror the updated page styling into a visual-companion preview**
- [ ] **Step 2: Share the local URL with the user for review**
