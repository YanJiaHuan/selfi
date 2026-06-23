import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm"]);

function getMediaType(filename) {
  if (/-original\.[^.]+$/i.test(filename)) {
    return null;
  }

  const extension = path.extname(filename).toLowerCase();

  if (IMAGE_EXTENSIONS.has(extension)) {
    return "image";
  }

  if (VIDEO_EXTENSIONS.has(extension)) {
    return "video";
  }

  return null;
}

export function buildManifest(files) {
  return files.reduce((manifest, file) => {
    const parts = file.split("/");

    if (parts.length !== 4 || parts[0] !== "assets" || parts[1] !== "media") {
      return manifest;
    }

    const capability = parts[2];
    const type = getMediaType(parts[3]);

    if (!type) {
      return manifest;
    }

    manifest[capability] ??= [];
    manifest[capability].push({ path: file, type });
    manifest[capability].sort((left, right) => left.path.localeCompare(right.path));
    return manifest;
  }, {});
}

export async function collectMediaFiles(mediaRoot) {
  const entries = await readdir(mediaRoot, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const capabilityEntries = await readdir(path.join(mediaRoot, entry.name), {
      withFileTypes: true,
    });

    for (const capabilityEntry of capabilityEntries) {
      if (!capabilityEntry.isFile()) {
        continue;
      }

      files.push(path.posix.join("assets/media", entry.name, capabilityEntry.name));
    }
  }

  return files.sort((left, right) => left.localeCompare(right));
}

async function main() {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const projectRoot = path.resolve(scriptDir, "..");
  const mediaRoot = path.join(projectRoot, "assets", "media");
  const outputPath = path.join(mediaRoot, "media-manifest.json");
  const manifest = buildManifest(await collectMediaFiles(mediaRoot));

  await writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await main();
}
