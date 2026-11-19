// News image entry for 18 November 2026 (Node 22, standard library only).
// The finished image already lives next to this file as entry.png, so this
// program simply reads those bytes and writes them, unchanged, to the
// output directory. It uses no network and no randomness, so running it
// twice produces exactly the same file both times. The output directory
// comes from MAKEFUN_OUTPUT_DIR and defaults to /output; it is created
// first when it does not exist yet.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const folder = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(folder, "entry.png");
const outputFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(outputFolder, "entry.png");

mkdirSync(outputFolder, { recursive: true });

const imageBytes = readFileSync(sourcePath);
writeFileSync(targetPath, imageBytes);

console.log(`Wrote ${imageBytes.length} bytes to ${targetPath}`);
