// scripts/copy-pagefind.mjs
import { rm, cp, mkdir } from "node:fs/promises";
import path from "node:path";

const from = path.resolve("dist", "pagefind");
const to = path.resolve("public", "pagefind");

await rm(to, { recursive: true, force: true });
await mkdir(path.dirname(to), { recursive: true });
await cp(from, to, { recursive: true });

console.log(`[pagefind] Copied ${from} -> ${to}`);