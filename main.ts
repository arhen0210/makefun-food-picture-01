// Entry for make.fun competition food-picture-01.
// Copies the dish photo entry.png to the output directory the gate reads.
// The picture is a 1024x1024 food/drink shot already sized for the gate
// (under 1 MiB, under 1024x1024), chosen as-is because the rules say the
// judge picks whatever photo makes them hungriest and this is the
// provided entry image, unmodified.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// The judge sees exactly these bytes — do not re-encode or resize.
copyFileSync('entry.png', join(outDir, 'entry.png'));
