import test from "node:test";
import assert from "node:assert/strict";

import { buildManifest } from "../scripts/generate-media-manifest.mjs";

test("buildManifest groups supported media by capability folder", () => {
  const files = [
    "assets/media/embodied-intelligence/TR3.mp4",
    "assets/media/embodied-intelligence/IMG_8614.JPG",
    "assets/media/robotics-simulation/demo.webm",
    "assets/media/robotics-simulation/isaacsim-original.mp4",
    "assets/media/ignore.txt",
  ];

  const manifest = buildManifest(files);

  assert.deepEqual(Object.keys(manifest), [
    "embodied-intelligence",
    "robotics-simulation",
  ]);
  assert.equal(manifest["embodied-intelligence"][0].type, "image");
  assert.equal(manifest["embodied-intelligence"][1].type, "video");
  assert.equal(
    manifest["robotics-simulation"][0].path,
    "assets/media/robotics-simulation/demo.webm",
  );
  assert.equal(manifest["robotics-simulation"].length, 1);
});
