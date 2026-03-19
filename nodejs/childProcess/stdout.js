import {spawn} from "node:child_process"
const child = spawn("node", ["child.js"]);

child.stdout.on("data", (data) => {
  console.log("子进程说:", data.toString());
});


child.stdin.write("你好\n");

let map = new Map();
map.set(2, 'jack');
console.log(map.get(2));