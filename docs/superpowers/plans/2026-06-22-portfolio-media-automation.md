# Portfolio Media Automation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace placeholder media blocks with real media, auto-generate a media manifest from `assets/media`, and shorten `isaacsim.mp4` to roughly 15 seconds for the portfolio.

**Architecture:** A small Node script will scan `assets/media/` and write a `media-manifest.json` file that maps each capability folder to a list of media assets. `index.html` will fetch that manifest at runtime, render mixed image/video carousels per capability, and auto-rotate items when multiple assets exist. The robotics simulation video will be replaced in-place with a sped-up version while preserving an original backup.

**Tech Stack:** Static HTML/CSS/JavaScript, Node.js, built-in `node:test`, FFmpeg

---

## File Structure

- Modify: `index.html`
  - Replace placeholder gallery markup with manifest-driven containers
  - Add carousel styles and runtime media rendering logic
- Create: `scripts/generate-media-manifest.mjs`
  - Scan `assets/media/*` and emit deterministic JSON manifest
- Create: `assets/media/media-manifest.json`
  - Generated source of truth for the frontend
- Create: `tests/generate-media-manifest.test.mjs`
  - Verify manifest generation groups folders and filters supported media types
- Modify: `README.md`
  - Document the manifest generation step and supported media behavior
- Modify: `assets/media/robotics-simulation/isaacsim.mp4`
  - Replace with sped-up portfolio version
- Create: `assets/media/robotics-simulation/isaacsim-original.mp4`
  - Backup the original video before rewriting

## Task 1: Add a failing manifest-generation test

**Files:**
- Create: `tests/generate-media-manifest.test.mjs`
- Create: `scripts/generate-media-manifest.mjs`

- [ ] **Step 1: Write the failing test**

```js
import test from "node:test";
import assert from "node:assert/strict";
import { buildManifest } from "../scripts/generate-media-manifest.mjs";

test("buildManifest groups supported media by capability folder", async () => {
  const files = [
    "assets/media/embodied-intelligence/TR3.mp4",
    "assets/media/embodied-intelligence/IMG_8614.JPG",
    "assets/media/robotics-simulation/demo.webm",
    "assets/media/ignore.txt",
  ];

  const manifest = buildManifest(files);

  assert.deepEqual(Object.keys(manifest), [
    "embodied-intelligence",
    "robotics-simulation",
  ]);
  assert.equal(manifest["embodied-intelligence"][0].type, "image");
  assert.equal(manifest["embodied-intelligence"][1].type, "video");
  assert.equal(manifest["robotics-simulation"][0].path, "assets/media/robotics-simulation/demo.webm");
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/generate-media-manifest.test.mjs`

Expected: FAIL because `buildManifest` is not implemented yet.

- [ ] **Step 3: Write the minimal implementation**

```js
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm"]);

export function buildManifest(files) {
  return files.reduce((manifest, file) => {
    const parts = file.split("/");
    if (parts.length !== 4) return manifest;

    const capability = parts[2];
    const filename = parts[3];
    const extension = filename.slice(filename.lastIndexOf(".")).toLowerCase();
    const type = IMAGE_EXTENSIONS.has(extension)
      ? "image"
      : VIDEO_EXTENSIONS.has(extension)
        ? "video"
        : null;

    if (!type) return manifest;

    manifest[capability] ??= [];
    manifest[capability].push({ path: file, type });
    manifest[capability].sort((a, b) => a.path.localeCompare(b.path));
    return manifest;
  }, {});
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/generate-media-manifest.test.mjs`

Expected: PASS

## Task 2: Generate the real manifest from `assets/media`

**Files:**
- Modify: `scripts/generate-media-manifest.mjs`
- Create: `assets/media/media-manifest.json`

- [ ] **Step 1: Add filesystem-backed manifest generation**

```js
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export async function collectMediaFiles(mediaRoot) {
  const entries = await readdir(mediaRoot, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const capabilityDir = path.join(mediaRoot, entry.name);
    const capabilityEntries = await readdir(capabilityDir, { withFileTypes: true });

    for (const capabilityEntry of capabilityEntries) {
      if (!capabilityEntry.isFile()) continue;
      files.push(path.posix.join("assets/media", entry.name, capabilityEntry.name));
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const mediaRoot = path.join(projectRoot, "assets", "media");
const outputPath = path.join(mediaRoot, "media-manifest.json");

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const files = await collectMediaFiles(mediaRoot);
  const manifest = buildManifest(files);
  await writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
}
```

- [ ] **Step 2: Run the generator**

Run: `node scripts/generate-media-manifest.mjs`

Expected: `assets/media/media-manifest.json` created with four capability keys.

- [ ] **Step 3: Verify the generated manifest**

Run: `sed -n '1,200p' assets/media/media-manifest.json`

Expected: Each capability folder lists all images/videos under that folder.

## Task 3: Render manifest-driven media in the portfolio

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Write a failing DOM-level test description**

Manual expectation to validate after change:
- Opening `index.html` should show real media instead of `+ Add media`
- Capabilities with multiple assets should auto-rotate
- Mixed image/video folders should rotate between both media types

- [ ] **Step 2: Replace placeholder HTML with empty carousel containers**

```html
<div class="media-gallery" data-skill="embodied-intelligence"></div>
```

Apply the same pattern to each capability block so the script owns all media rendering.

- [ ] **Step 3: Add minimal runtime rendering**

```js
async function loadMediaManifest() {
  const response = await fetch("assets/media/media-manifest.json");
  if (!response.ok) throw new Error("Failed to load media manifest");
  return response.json();
}

function createMediaElement(item, label) {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.path;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute("aria-label", label);
    return video;
  }

  const image = document.createElement("img");
  image.src = item.path;
  image.alt = label;
  image.loading = "lazy";
  return image;
}
```

- [ ] **Step 4: Add auto-rotation for multiple assets**

```js
function mountGallery(gallery, items) {
  if (!items.length) return;

  const frame = document.createElement("div");
  frame.className = "media-frame";
  gallery.appendChild(frame);

  let index = 0;

  const render = () => {
    frame.replaceChildren(createMediaElement(items[index], gallery.dataset.skill));
  };

  render();

  if (items.length > 1) {
    window.setInterval(() => {
      index = (index + 1) % items.length;
      render();
    }, 3500);
  }
}
```

- [ ] **Step 5: Verify in the browser**

Run: open `index.html` via local server and inspect the four capability sections.

Expected: All four sections render real media and rotate where multiple assets exist.

## Task 4: Shorten `isaacsim.mp4`

**Files:**
- Create: `assets/media/robotics-simulation/isaacsim-original.mp4`
- Modify: `assets/media/robotics-simulation/isaacsim.mp4`

- [ ] **Step 1: Back up the original video**

Run: `cp assets/media/robotics-simulation/isaacsim.mp4 assets/media/robotics-simulation/isaacsim-original.mp4`

Expected: Backup file exists.

- [ ] **Step 2: Generate a sped-up 15-second version**

Run: `ffmpeg -y -i assets/media/robotics-simulation/isaacsim-original.mp4 -filter:v setpts=0.1666667*PTS -an assets/media/robotics-simulation/isaacsim.mp4`

Expected: New `isaacsim.mp4` duration is about 15 seconds.

- [ ] **Step 3: Verify output duration**

Run: `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 assets/media/robotics-simulation/isaacsim.mp4`

Expected: Output close to `15`.

## Task 5: Document the workflow

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Document media behavior**

Add a short section that explains:
- Media is sourced from `assets/media/<capability>/`
- Run `node scripts/generate-media-manifest.mjs` after adding or removing files
- Supported image types: jpg, jpeg, png, gif, webp
- Supported video types: mp4, mov, webm

- [ ] **Step 2: Verify docs are accurate**

Run: `sed -n '1,220p' README.md`

Expected: README matches the actual workflow and directory structure.

## Self-Review

- Spec coverage: Covers real media replacement, mixed-media rotation, future media additions, and video shortening.
- Placeholder scan: No TBD/TODO placeholders remain.
- Type consistency: `buildManifest`, `collectMediaFiles`, manifest key names, and supported media types remain consistent across tasks.

Plan complete and saved to `docs/superpowers/plans/2026-06-22-portfolio-media-automation.md`. Defaulting to inline execution for this request.
