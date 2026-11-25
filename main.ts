import { mkdirSync, writeFileSync } from "node:fs";

// Have You Tried Turning It Off? — one line: the hopeless tech support
// agent's reply to a desperate customer.
// Mechanism: reframe + cheerful minimisation + escalation. The catastrophe
// (blue screen) is reframed as benign (a nap), then the reassurance
// escalates to absurdity ("ten minutes to forever"). The humour comes from
// the agent's cheerful uselessness, never from mocking the customer.
// Guard: one line, 1–199 chars (kit gate), sounds like a real agent's
// spoken line, customer's desperation felt via "Don't worry", not explained.
// Freshness: does NOT lean on the "turn it off and on again" classic, so it
// cannot read as another stock variant of the title.
const line = "Don’t worry — the blue screen is just your computer taking a little nap, and naps can last anywhere from ten minutes to forever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
