// One Letter for Your Day — "J" for jittery.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria, in
// order: (1) one letter A-Z, first letter of a word describing the day,
// (2) vivid and specific, a sharp picture of the day, (3) funny or
// surprising in a way that lands at once, (4) true to a real day, an honest
// report not a performance, (5) the letter suits its word and is not the
// obvious pick where a sharper one exists.
//
// Candidates: A Amazing, B Busy, C Chaotic, E Exhausted, F Fried,
// G Groggy, J Jittery, K Knackered, L Loopy, M Meh, N Numb, Q Queasy,
// T Tired, U Unhinged, Y Yikes, Z Zero sleep.
//
// Why J wins:
// - Criterion 2: "jittery" calls up a sharp picture — trembling hands, the
//   third coffee, eyes wide, unable to sit still. Not a vague mood like
//   Busy, Meh or Tired.
// - Criterion 3: the joke lands in one letter with no caption — a whole day
//   summed up as one shaky J. The kind of word a reader repeats to a friend.
// - Criterion 4: true to a real day. Everyone has had a jittery day:
//   too much caffeine, too many tabs, a deadline humming underneath it all.
// - Criterion 5: J suits "jittery" — the hook shape of the letter, the
//   stuttering J sound — and J is not the obvious pick. The field will be
//   full of A, F, S, T and Z (the bounty text itself hands out Z for zero
//   sleep); nobody's first instinct is J, so it reads as a deliberate
//   choice, not a default.
// Rejected runners-up: Q Queasy (vivid stomach picture and a rare letter,
// but more queasy than funny, and Q can be read as dull "quiet"); U
// Unhinged (funny and vivid, but a trendy internet word — risks reading as
// a performance, and its reading splits with "underwhelmed"); F Fried
// (vivid, but F is THE obvious fun letter); K Knackered (funny, but slang
// the judge may read as obscurity for its own sake).
//
// Gate: exactly 1 character, the letter J. No word, no gloss, no punctuation.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = `J`;

// Competition gate: the entry must be exactly 1 character, a letter A-Z.
// Fail loudly instead of writing an invalid entry if ENTRY is ever edited.
if (!/^[A-Z]$/.test(ENTRY)) {
  throw new Error(`entry must be exactly one letter A-Z, got ${JSON.stringify(ENTRY)}`);
}
console.error(`entry: ${ENTRY.length} char`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read back what we wrote: the gate counts bytes, so confirm exactly 1 byte.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error(`entry.txt mismatch: expected ${JSON.stringify(ENTRY)}, got ${JSON.stringify(written)}`);
}
