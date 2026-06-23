# Portrait And Papers Design

**Date:** June 23, 2026  
**Author:** JiaHuan Yan / Codex  
**Status:** Draft for review

---

## Overview

This change adds a clear personal anchor to the homepage and redesigns the publications section into a more academic, image-supported layout.

The goals are:

- Introduce a personal portrait into the hero section without weakening the existing technical focus
- Replace the current generic publications cards with a horizontal publication list inspired by the reference site
- Keep the page visually consistent with the existing technical-annual direction
- Use the local paper screenshots and metadata already prepared in `assets/media/papers/`

---

## Scope

This design covers two page areas only:

1. Hero section portrait integration
2. Bottom papers section redesign

It does not include:

- Changes to the four capability chapter layouts
- Changes to media gallery behavior
- Changes to deployment workflow
- A CMS or admin editing interface

---

## Hero Portrait Design

### Placement

The portrait at `assets/media/me.JPG` will be added to the hero section on the right side of the existing intro content.

The hero will become a two-column layout on desktop:

- Left column: name, subtitle, intro, education, work experience, contact links
- Right column: portrait image

On mobile, the layout will collapse to one column, with the portrait placed below the main intro block and above the education / experience detail, unless spacing tests show it is cleaner directly below the name and subtitle.

### Visual Treatment

The portrait is an event-stage photo, not a studio headshot, so it should be treated as an editorial image:

- Crop vertically rather than display full-width
- Preserve the subject clearly while de-emphasizing stage clutter
- Use rounded but restrained corners matching the site language
- Avoid a decorative frame or “profile card” treatment
- Keep the image visually calm so it supports rather than competes with text

### Intent

The portrait should make the site feel personal and authored, not like a project-only archive. It should strengthen identity and credibility while preserving the engineering-first tone.

---

## Papers Section Design

### Section Position

The papers section will remain at the bottom of the page, replacing the existing “Publications & Research” card list.

### Reference Direction

The new layout will follow the reference’s publication-list behavior in spirit:

- one paper per row
- visual preview image on the left
- textual metadata on the right
- clean academic scan-ability

It will not copy the reference’s extra utility links like “Webpage / Paper / Code”. This site will keep a simpler presentation.

### Row Structure

Each paper row will contain:

1. Left thumbnail
   - Screenshot from `assets/media/papers/`
   - Fixed thumbnail region with consistent size
   - Crop to maintain visual consistency across different screenshots

2. Right metadata block
   - Paper title as the primary clickable link
   - Author list below
   - Optional small venue/source line if present or inferable from metadata

### Author Highlighting

If JiaHuan Yan is first author on a paper, their name will be bolded in the author line.

If JiaHuan Yan is not first author, the author line will remain normal weight.

This rule should be driven by the prepared metadata rather than manual per-row HTML edits where possible.

### Link Behavior

Only the paper title needs to be a visible main hyperlink.

No extra `webpage`, `paper`, or `code` badges will be shown in the row.

This keeps the section visually lighter and closer to the user’s intended format.

---

## Content Source Design

### Files

The papers section will use:

- `assets/media/papers/` for thumbnails
- `assets/media/papers/info` for title/link metadata

### Parsing Expectations

The implementation should map:

- screenshot filename
- paper title
- paper link
- author line

The current `info` file contains title/link data but not full author lines for every paper, so the implementation/design must assume one of two outcomes:

1. Author lines are added to the metadata file in a structured format
2. Author lines are temporarily embedded in code for the initial rollout

Preferred direction: use a structured local metadata source instead of hardcoding row content inside `index.html`.

### Matching Strategy

Matching should be deterministic and easy to maintain. The system should not rely on fragile fuzzy logic if a simpler explicit mapping can be stored locally.

---

## Layout And Styling

### Hero

- Maintain the current technical-annual typography
- Use the portrait to balance the text block, not dominate it
- Preserve mobile readability and spacing

### Papers

- Horizontal rows with generous whitespace
- Clear visual hierarchy:
  - title strongest
  - authors secondary
  - venue/source tertiary if used
- Rows should feel more academic than promotional
- Thumbnail and text alignment should remain stable across different image aspect ratios

### Responsiveness

Desktop:

- Paper rows remain horizontal
- Hero remains two-column

Tablet / mobile:

- Paper rows stack vertically
- Thumbnail appears above or beside text depending on available width
- Hero collapses to one column

---

## Implementation Direction

The implementation should avoid making `index.html` a giant hardcoded publications file if possible.

Preferred approach:

- Add a small local metadata file for papers
- Render paper rows from that metadata and local screenshots

This gives the user a sustainable way to update papers later without editing large HTML blocks.

If that feels too large for this pass, a simpler first version can still be acceptable as long as:

- the hero portrait is cleanly integrated
- the paper rows match the approved horizontal structure
- the content source is easy to revise later

---

## Acceptance Criteria

This design is complete when:

- The hero section includes the portrait in a clean right-side editorial layout on desktop
- The portrait collapses gracefully on mobile
- The bottom papers section is replaced by horizontal publication rows
- Each row shows one screenshot, one title link, and an author line
- JiaHuan Yan is bolded only when first author
- The section visually feels closer to an academic publication list than a generic card grid

---

## Self-Review

- Placeholder scan: no TBD/TODO placeholders remain
- Internal consistency: hero placement, paper layout, and metadata strategy are aligned
- Scope check: focused enough for a single implementation plan
- Ambiguity check: the only remaining content dependency is exact author-line sourcing; implementation should prefer a structured metadata file to remove ambiguity
