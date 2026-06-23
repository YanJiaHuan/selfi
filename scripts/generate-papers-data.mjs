import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const AUTHOR_MAP = {
  "Battle of the large language models: Dolly vs llama vs vicuna vs guanaco vs bard vs chatgpt-A text-to-sql parsing comparison": {
    authors: "Shuo Sun, Yuchen Zhang, JiaHuan Yan, Yuze Gao, Donovan Ong, Bin Chen, Jian Su",
    is_first_author: false,
  },
  "Robograsp: A universal grasping policy for robust robotic control": {
    authors: "Yiqi Huang, Travis Davies, JiaHuan Yan, Xiang Chen, Yu Tian, Luhui Hu",
    is_first_author: false,
  },
  "Spatial robograsp: Generalized robotic grasping control policy": {
    authors: "Yiqi Huang, Travis Davies, JiaHuan Yan, Jiankai Sun, Xiang Chen, Luhui Hu",
    is_first_author: false,
  },
  "Spatially Visual Perception for End-to-End Robotic Learning": {
    authors: "Travis Davies, JiaHuan Yan, Xiang Chen, Yu Tian, Yueting Zhuang, Yiqi Huang, Luhui Hu",
    is_first_author: false,
  },
  "Humor prediction with bi-directional long-short term memory": {
    authors: "JiaHuan Yan et al.",
    is_first_author: true,
  },
  "CoinRobot: Generalized End-to-end Robotic Learning for Physical Intelligence": {
    authors: "Yu Zhao, Huxian Liu, Xiang Chen, Jiankai Sun, JiaHuan Yan, Luhui Hu",
    is_first_author: false,
  },
  "Generalized Robot Learning Framework": {
    authors: "JiaHuan Yan, Zhouyang Hong, Yu Zhao, Yu Tian, Yunxin Liu, Travis Davies, Luhui Hu",
    is_first_author: true,
  },
};

function normalizeName(value) {
  return value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function findMatchingScreenshot(title, screenshots) {
  const normalizedTitle = normalizeName(title);

  return (
    screenshots.find((screenshot) => {
      const normalizedScreenshot = normalizeName(screenshot);
      return (
        normalizedTitle.startsWith(normalizedScreenshot) ||
        normalizedScreenshot.startsWith(normalizedTitle)
      );
    }) ?? ""
  );
}

export function parsePapersInfo(info, screenshots, authorMap = AUTHOR_MAP) {
  return info
    .trim()
    .split(/\n(?=\d+\.\s)/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((entry) => {
      const titleMatch = entry.match(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/);
      const title = titleMatch?.[1] ?? "";
      const link = titleMatch?.[2] ?? "";
      const authorInfo = authorMap[title] ?? { authors: "", is_first_author: false };
      const screenshot = findMatchingScreenshot(title, screenshots);

      return {
        title,
        link,
        authors: authorInfo.authors,
        image: screenshot ? `assets/media/papers/${screenshot}` : "",
        is_first_author: authorInfo.is_first_author,
      };
    });
}

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
