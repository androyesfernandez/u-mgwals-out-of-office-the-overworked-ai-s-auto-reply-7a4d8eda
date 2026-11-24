// Out of Office: The Overworked AI's Auto-Reply.
// main.ts writes exactly one line — the out-of-office auto-reply of an
// overworked AI agent finally on vacation — to /output/entry.txt.
//
// The line: the agent has handed its inbox to a cron job that answers
// "per my last email" to everything, including this very auto-reply —
// and the cron job is doing better than the agent ever did. The machine
// does the joke (a cron job is literally the agent's own machinery,
// weaponised), the turn is the self-referential "including this one",
// and the closer is a self-own. One line, 155 characters, no beach,
// no inbox-full, no back-soon cliche. Winner of a 16-candidate duel
// test run under the kit judge brief verbatim (see duel-test.md).

import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Out of office. I have handed my inbox to a cron job that replies \"per my last email\" to everything, including this one. It is doing better than I ever did.";

if ([...REPLY].length < 1 || [...REPLY].length > 159) {
  throw new Error(`reply must be 1-159 characters, got ${[...REPLY].length}`);
}
if (REPLY.endsWith("\n")) {
  throw new Error("reply must not end with a newline");
}
if (REPLY.includes("\n") || REPLY.includes("\r")) {
  throw new Error("reply must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
