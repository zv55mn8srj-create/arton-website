import { copyFile, mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = resolve(projectRoot, "client", "src");
const publicRoot = resolve(projectRoot, "client", "public");
const storageRoot = resolve(publicRoot, "manus-storage");
const assetsRoot = resolve(publicRoot, "assets");

const textExtensions = new Set([".tsx", ".ts", ".css", ".html", ".json"]);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else if (textExtensions.has(extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

const sourceFiles = [resolve(projectRoot, "client", "index.html"), ...(await collectFiles(sourceRoot))];
for (const filePath of sourceFiles) {
  const original = await readFile(filePath, "utf8");
  const updated = original
    .replaceAll("/manus-storage/", "/assets/")
    .replaceAll("wall-label-main-frame_29b103b3.jpg", "wall-label-main-frame_29b103b3_c7a949c0.jpg");
  if (updated !== original) {
    await writeFile(filePath, updated, "utf8");
    console.log(`Updated ${relative(projectRoot, filePath)}`);
  }
}

await mkdir(assetsRoot, { recursive: true });
const storageEntries = await readdir(storageRoot, { withFileTypes: true });
for (const entry of storageEntries) {
  if (!entry.isFile()) continue;
  const sourcePath = join(storageRoot, entry.name);
  const targetPath = join(assetsRoot, entry.name);
  await stat(sourcePath);
  await copyFile(sourcePath, targetPath);
  console.log(`Copied ${relative(projectRoot, sourcePath)} -> ${relative(projectRoot, targetPath)}`);
}

console.log(`Localized ${storageEntries.filter((entry) => entry.isFile()).length} website assets under /assets/`);
