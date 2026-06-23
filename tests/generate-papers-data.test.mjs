import test from "node:test";
import assert from "node:assert/strict";

import {
  findMatchingScreenshot,
  parsePapersInfo,
} from "../scripts/generate-papers-data.mjs";

test("findMatchingScreenshot matches screenshots by normalized title prefix", () => {
  const screenshots = [
    "Battle of the large language models.png",
    "Spatial robograsp.png",
  ];

  assert.equal(
    findMatchingScreenshot(
      "Battle of the large language models: Dolly vs llama vs vicuna vs guanaco vs bard vs chatgpt-A text-to-sql parsing comparison",
      screenshots,
    ),
    "Battle of the large language models.png",
  );
  assert.equal(
    findMatchingScreenshot(
      "Spatial robograsp: Generalized robotic grasping control policy",
      screenshots,
    ),
    "Spatial robograsp.png",
  );
});

test("parsePapersInfo extracts title, url, screenshot, and author metadata", () => {
  const info = `
1. [Example Paper Title](https://example.com/paper)
\t1. 地址：https://example.com/pdf
`;

  const screenshots = ["Example Paper Title.png"];
  const authorMap = {
    "Example Paper Title": {
      authors: "JiaHuan Yan, Alice Smith",
      is_first_author: true,
    },
  };

  const papers = parsePapersInfo(info, screenshots, authorMap);

  assert.equal(papers.length, 1);
  assert.equal(papers[0].title, "Example Paper Title");
  assert.equal(papers[0].link, "https://example.com/paper");
  assert.equal(papers[0].image, "assets/media/papers/Example Paper Title.png");
  assert.equal(papers[0].authors, "JiaHuan Yan, Alice Smith");
  assert.equal(papers[0].is_first_author, true);
});
