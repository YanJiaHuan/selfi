import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("index exposes four technical annual capability chapters", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const chapterMatches = html.match(/class="skill-item"/g) ?? [];
  const annualHeaderMatches = html.match(/class="skill-kicker"/g) ?? [];

  assert.equal(chapterMatches.length, 4);
  assert.equal(annualHeaderMatches.length, 4);
  assert.match(html, /data-skill="embodied-intelligence"/);
  assert.match(html, /data-skill="robotics-simulation"/);
  assert.match(html, /data-skill="foundation-models-training"/);
  assert.match(html, /data-skill="ai-infrastructure"/);
  assert.match(html, /class="hero-portrait"/);
  assert.match(html, /id="papers-list"/);
  assert.match(html, /papers-data\.json/);
});
