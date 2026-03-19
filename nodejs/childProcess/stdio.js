const { spawn } = require("child_process");

const cp = spawn("ls", {
  stdio: ["pipe", "pipe", "pipe"],
});

console.log(cp.stdio);
