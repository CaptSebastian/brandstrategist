// Downloadt alle case-afbeeldingen van de oude WordPress-site naar public/images/cases
// en past de frontmatter aan naar lokale paden.
// Gebruik: npm run images   (draai dit voordat de oude site offline gaat)
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const dir = new URL('../src/content/cases/', import.meta.url);
const out = new URL('../public/images/cases/', import.meta.url);
await mkdir(out, { recursive: true });

for (const file of await readdir(dir)) {
  if (!file.endsWith('.md')) continue;
  const fileUrl = new URL(file, dir);
  const text = await readFile(fileUrl, 'utf8');
  // Alle http(s)-URL's achter `image:` of `src:` (carousel) worden gedownload.
  const re = /^(\s*(?:-\s+)?(?:image|src):\s*)"?(https?:\/\/[^\s"]+)"?\s*$/gm;
  const slug = file.replace(/\.md$/, '');
  const seen = new Map();
  let next = text;
  let n = 0;
  for (const m of text.matchAll(re)) {
    const remote = m[2];
    if (seen.has(remote)) { next = next.replace(m[0], `${m[1]}"${seen.get(remote)}"`); continue; }
    n += 1;
    const ext = path.extname(new URL(remote).pathname) || '.jpg';
    const name = `${slug}-${n}${ext}`;
    const res = await fetch(remote);
    if (!res.ok) { console.error(`MISLUKT ${res.status}: ${remote}`); continue; }
    await writeFile(new URL(name, out), Buffer.from(await res.arrayBuffer()));
    seen.set(remote, `/images/cases/${name}`);
    next = next.replace(m[0], `${m[1]}"/images/cases/${name}"`);
    console.log(`OK  ${name}`);
  }
  if (next !== text) await writeFile(fileUrl, next);
}
