// one-star entry: print the one-line entry from entry.txt
// The entry is a single line; trailing whitespace is trimmed before printing.
// Output goes to stdout with a trailing newline, exactly one line.
import { readFileSync } from "node:fs";

// Resolve the entry file relative to this module, then read and print it.
const entryPath = new URL("./entry.txt", import.meta.url);
const text = readFileSync(entryPath, "utf8");
const review = text.trim();
console.log(review);
