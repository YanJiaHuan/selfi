# Portrait And Papers Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a right-side hero portrait and replace the bottom publications cards with a horizontal papers list driven by local metadata and screenshots.

**Architecture:** Keep the site as a static single-page HTML app, but move paper content into a structured local JSON file generated from the existing `assets/media/papers/info` and screenshot directory. Update `index.html` to render the hero portrait directly and fetch the generated papers metadata for the bottom list so future content edits stay local and predictable.

**Tech Stack:** HTML, CSS, vanilla JavaScript modules, Node.js scripts, `node:test`

---

## File Structure

- Modify: `index.html`
  - Add hero portrait layout and render a new horizontal papers section
- Create: `scripts/generate-papers-data.mjs`
  - Parse `assets/media/papers/info` and emit structured paper metadata
- Create: `assets/media/papers/papers-data.json`
  - Generated structured paper data consumed by the frontend
- Create: `tests/generate-papers-data.test.mjs`
  - Verify parsing and first-author highlighting metadata generation
- Modify: `README.md`
  - Document how to update portrait and paper data
- Modify: `.github/workflows/deploy.yml`
  - Ensure paper metadata generation runs during deployment

## Task 1: Add a failing papers-data parser test

**Files:**
- Create: `tests/generate-papers-data.test.mjs`
- Create: `scripts/generate-papers-data.mjs`

- [ ] **Step 1: Write the failing test**

```js
import test from "node:test";
import assert from "node:assert/strict";

import { parsePapersInfo } from "../scripts/generate-papers-data.mjs";

test("parsePapersInfo extracts title, url, screenshot, and first-author flag", () => {
  const info = `
1. [Example Paper Title](https://example.com/paper)
   1. 地址：https://example.com/pdf
   2. 作者：JiaHuan Yan, Alice Smith
`;

  const screenshots = ["Example Paper Title.png"];
  const papers = parsePapersInfo(info, screenshots);

  assert.equal(papers.length, 1);
  assert.equal(papers[0].title, "Example Paper Title");
  assert.equal(papers[0].link, "https://example.com/paper");
  assert.equal(papers[0].image, "assets/media/papers/Example Paper Title.png");
  assert.equal(papers[0].is_first_author, true);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/generate-papers-data.test.mjs`

Expected: FAIL because `parsePapersInfo` is not implemented yet.

- [ ] **Step 3: Write the minimal implementation**

```js
export function parsePapersInfo(info, screenshots) {
  const entries = info
    .trim()
    .split(/\n(?=\d+\.\s)/)
    .map((block) => block.trim())
    .filter(Boolean);

  return entries.map((entry, index) => {
    const titleMatch = entry.match(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/);
    const authorMatch = entry.match(/作者[:：]\s*(.+)/);
    const title = titleMatch?.[1] ?? "";
    const link = titleMatch?.[2] ?? "";
    const authorLine = authorMatch?.[1] ?? "";
    const screenshot = screenshots[index] ?? "";

    return {
      title,
      link,
      authors: authorLine,
      image: screenshot ? `assets/media/papers/${screenshot}` : "",
      is_first_author: authorLine.startsWith("JiaHuan Yan"),
    };
  });
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/generate-papers-data.test.mjs`

Expected: PASS

## Task 2: Generate real papers metadata

**Files:**
- Modify: `scripts/generate-papers-data.mjs`
- Create: `assets/media/papers/papers-data.json`

- [ ] **Step 1: Add filesystem-backed generation**

```js
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export async function collectPaperScreenshots(papersDir) {
  const entries = await readdir(papersDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && /\.(png|jpg|jpeg|webp)$/i.test(entry.name))
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
}

async function main() {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const projectRoot = path.resolve(scriptDir, "..");
  const papersDir = path.join(projectRoot, "assets", "media", "papers");
  const info = await readFile(path.join(papersDir, "info"), "utf8");
  const screenshots = await collectPaperScreenshots(papersDir);
  const papers = parsePapersInfo(info, screenshots);

  await writeFile(
    path.join(papersDir, "papers-data.json"),
    `${JSON.stringify(papers, null, 2)}\n`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await main();
}
```

- [ ] **Step 2: Run the generator**

Run: `node scripts/generate-papers-data.mjs`

Expected: `assets/media/papers/papers-data.json` exists.

- [ ] **Step 3: Verify generated content**

Run: `sed -n '1,240p' assets/media/papers/papers-data.json`

Expected: each paper entry includes title, link, authors, image, and `is_first_author`.

## Task 3: Add hero portrait layout

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Write a failing structure expectation**

Manual expectation after change:
- Hero becomes two-column on desktop
- `assets/media/me.JPG` appears in the hero right column
- On mobile the portrait stacks cleanly below the intro block

- [ ] **Step 2: Add portrait markup to the hero**

```html
<section class="hero">
  <div class="hero-layout">
    <div class="hero-copy">
      <!-- existing hero copy -->
    </div>
    <div class="hero-portrait">
      <img src="assets/media/me.JPG" alt="JiaHuan Yan speaking at an event">
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add portrait styling**

```css
.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.7fr);
  gap: 40px;
  align-items: start;
}

.hero-portrait {
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 8px;
}

.hero-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
```

- [ ] **Step 4: Verify layout intent**

Run: inspect `index.html` and confirm the hero still contains name, intro, education, experience, contacts, and the new portrait block.

Expected: hero structure remains intact with a new right-side portrait.

## Task 4: Replace the publications section with horizontal paper rows

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace hardcoded publications cards with a render target**

```html
<section class="content-section" id="publications">
  <h2 class="section-title">Papers</h2>
  <div class="papers-list" id="papers-list"></div>
</section>
```

- [ ] **Step 2: Add horizontal row styling**

```css
.papers-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.paper-row {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 20px;
  align-items: start;
}

.paper-thumb img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 4px;
}
```

- [ ] **Step 3: Add frontend rendering logic**

```js
async function loadPapersData() {
  const response = await fetch("assets/media/papers/papers-data.json");
  if (!response.ok) throw new Error("Failed to load papers data");
  return response.json();
}

function renderAuthors(paper) {
  return paper.is_first_author
    ? paper.authors.replace("JiaHuan Yan", "<strong>JiaHuan Yan</strong>")
    : paper.authors;
}
```

- [ ] **Step 4: Render rows into `#papers-list`**

```js
function renderPapers(papers) {
  const list = document.getElementById("papers-list");
  if (!list) return;

  list.replaceChildren(...papers.map((paper) => {
    const row = document.createElement("article");
    row.className = "paper-row";
    row.innerHTML = `
      <div class="paper-thumb">
        <img src="${paper.image}" alt="${paper.title}">
      </div>
      <div class="paper-body">
        <h3><a href="${paper.link}" target="_blank" rel="noreferrer">${paper.title}</a></h3>
        <p class="paper-authors">${renderAuthors(paper)}</p>
      </div>
    `;
    return row;
  }));
}
```

- [ ] **Step 5: Verify papers display requirements**

Manual expectation:
- one row per paper
- thumbnail left, text right
- title is linked
- author line is visible
- first-author papers bold `JiaHuan Yan` only

## Task 5: Update deployment and docs

**Files:**
- Modify: `.github/workflows/deploy.yml`
- Modify: `README.md`

- [ ] **Step 1: Generate paper data during deployment**

```yaml
- name: Generate papers data
  run: node scripts/generate-papers-data.mjs
```

Place it before the Pages artifact upload step.

- [ ] **Step 2: Document update workflow**

Add to `README.md`:
- portrait image path
- paper screenshots location
- paper metadata source file
- regenerate command:

```bash
node scripts/generate-media-manifest.mjs
node scripts/generate-papers-data.mjs
```

- [ ] **Step 3: Verify docs reflect reality**

Run: `sed -n '1,260p' README.md`

Expected: README explains both media and paper update workflows.

## Task 6: Final verification

**Files:**
- Test: `tests/generate-papers-data.test.mjs`
- Test: `tests/generate-media-manifest.test.mjs`
- Test: `tests/media-layout.test.mjs`
- Test: `tests/index-structure.test.mjs`

- [ ] **Step 1: Run papers parser test**

Run: `node --test tests/generate-papers-data.test.mjs`

Expected: PASS

- [ ] **Step 2: Run existing regression tests**

Run: `node --test tests/generate-media-manifest.test.mjs tests/media-layout.test.mjs tests/index-structure.test.mjs`

Expected: PASS

- [ ] **Step 3: Rebuild generated data**

Run:

```bash
node scripts/generate-media-manifest.mjs
node scripts/generate-papers-data.mjs
```

Expected: both JSON files regenerate without errors.

- [ ] **Step 4: Verify page source contains new anchors**

Run: `rg -n "hero-portrait|papers-list|papers-data.json" index.html`

Expected: all three anchors exist.

## Self-Review

- Spec coverage: covers hero portrait placement, bottom horizontal papers section, title link behavior, and first-author bolding.
- Placeholder scan: no TODO/TBD placeholders remain.
- Type consistency: `parsePapersInfo`, `collectPaperScreenshots`, `loadPapersData`, and `renderPapers` naming is consistent across the plan.

Plan complete and saved to `docs/superpowers/plans/2026-06-23-portrait-and-papers-implementation.md`.
