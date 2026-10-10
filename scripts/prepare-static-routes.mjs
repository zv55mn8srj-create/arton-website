import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = resolve(projectRoot, "dist", "public");
const indexPath = resolve(publicDir, "index.html");

const routeNames = ["start", "b2b", "curator", "privacy", "terms"];
const apacheFallback = `# ArtON React SPA fallback for Apache hosting\nOptions -MultiViews\nRewriteEngine On\n\nRewriteCond %{REQUEST_FILENAME} -f [OR]\nRewriteCond %{REQUEST_FILENAME} -d\nRewriteRule ^ - [L]\n\nRewriteRule ^ index.html [L]\n`;
const redirectsFallback = `/*    /index.html   200\n`;

await readFile(indexPath);

for (const routeName of routeNames) {
  const routeDir = resolve(publicDir, routeName);
  await mkdir(routeDir, { recursive: true });
  await copyFile(indexPath, resolve(routeDir, "index.html"));
}

// Some shared-hosting configurations serve this file when a request misses.
await copyFile(indexPath, resolve(publicDir, "404.html"));
await writeFile(resolve(publicDir, ".htaccess"), apacheFallback, "utf8");
await writeFile(resolve(publicDir, "_redirects"), redirectsFallback, "utf8");

console.log(`Prepared static SPA fallbacks for: ${routeNames.map((route) => `/${route}`).join(", ")}`);
