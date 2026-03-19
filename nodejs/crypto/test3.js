import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");

const hash = createHash("sha256");

const input = createReadStream(
  "D:\\first month summary\\first week\\nodejs\\crypto\\test1.js",
);
input.pipe(hash).setEncoding("hex").pipe(stdout);
  