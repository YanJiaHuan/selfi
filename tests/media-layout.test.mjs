import test from "node:test";
import assert from "node:assert/strict";

import {
  getSlotPlaybackBehavior,
  partitionMediaForGallery,
} from "../scripts/media-layout.mjs";

test("partitionMediaForGallery assigns videos to the primary slot and never duplicates media", () => {
  const items = [
    { path: "assets/media/embodied-intelligence/IMG_8614.JPG", type: "image" },
    { path: "assets/media/embodied-intelligence/JS_demo.mp4", type: "video" },
    { path: "assets/media/embodied-intelligence/TR1.mp4", type: "video" },
    { path: "assets/media/embodied-intelligence/TR3_2.mov", type: "video" },
    { path: "assets/media/embodied-intelligence/TR3.mp4", type: "video" },
  ];

  const layout = partitionMediaForGallery(items);
  const assignedPaths = [
    ...layout.primary.map((item) => item.path),
    ...layout.secondary.flat().map((item) => item.path),
  ];

  assert.deepEqual(layout.primary.map((item) => item.path), [
    "assets/media/embodied-intelligence/JS_demo.mp4",
    "assets/media/embodied-intelligence/TR1.mp4",
    "assets/media/embodied-intelligence/TR3_2.mov",
    "assets/media/embodied-intelligence/TR3.mp4",
  ]);
  assert.deepEqual(layout.secondary, [[items[0]], [], []]);
  assert.equal(new Set(assignedPaths).size, items.length);
});

test("partitionMediaForGallery keeps a single image-only item in the primary slot", () => {
  const items = [
    { path: "assets/media/ai-infrastructure/example.png", type: "image" },
  ];

  const layout = partitionMediaForGallery(items);

  assert.deepEqual(layout.primary, items);
  assert.deepEqual(layout.secondary, [[], [], []]);
});

test("partitionMediaForGallery distributes extra images across fixed secondary slots", () => {
  const items = [
    { path: "assets/media/robotics-simulation/demo.webm", type: "video" },
    { path: "assets/media/robotics-simulation/IMG_7904.JPG", type: "image" },
    { path: "assets/media/robotics-simulation/IMG_7910.JPG", type: "image" },
    { path: "assets/media/robotics-simulation/新单臂侧面.png", type: "image" },
    { path: "assets/media/robotics-simulation/新单臂后面.png", type: "image" },
    { path: "assets/media/robotics-simulation/新单臂正面.png", type: "image" },
  ];

  const layout = partitionMediaForGallery(items);

  assert.deepEqual(layout.primary, [items[0]]);
  assert.deepEqual(layout.secondary, [
    [items[1], items[4]],
    [items[2], items[5]],
    [items[3]],
  ]);
});

test("getSlotPlaybackBehavior uses ended events for multi-video slots", () => {
  const behavior = getSlotPlaybackBehavior([
    { path: "a.mp4", type: "video" },
    { path: "b.mp4", type: "video" },
  ]);

  assert.deepEqual(behavior, {
    showPager: true,
    advanceMode: "video-ended",
    intervalMs: null,
  });
});

test("getSlotPlaybackBehavior uses a 5 second timer for multi-image slots", () => {
  const behavior = getSlotPlaybackBehavior([
    { path: "a.png", type: "image" },
    { path: "b.png", type: "image" },
  ]);

  assert.deepEqual(behavior, {
    showPager: true,
    advanceMode: "interval",
    intervalMs: 5000,
  });
});

test("getSlotPlaybackBehavior disables paging for single-item slots", () => {
  const behavior = getSlotPlaybackBehavior([
    { path: "a.png", type: "image" },
  ]);

  assert.deepEqual(behavior, {
    showPager: false,
    advanceMode: "none",
    intervalMs: null,
  });
});
