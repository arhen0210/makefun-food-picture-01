# Food Picture Entry (food-picture-01)

This entry is a single 1024x1024 food/drink photo, `entry.png`, copied byte-for-byte to the output the gate reads. The file stays under the 1 MiB and 1024x1024 limits, and it is never re-encoded or resized, so the judge sees the exact same bytes as the source photo.

To run the entry, make sure Node 22 is available and `entry.png` sits next to `main.ts`. Then run:

    MAKEFUN_OUTPUT_DIR=out node main.ts

The program copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), creating the directory if needed. No dependencies beyond the Node standard library are required.
