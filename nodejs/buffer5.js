import {Buffer} from "node:buffer";
let buf = Buffer.alloc(6);
buf.write("abc")
buf.write("def", 3, 2);
console.log(buf.toString());

let buf2 = Buffer.from("hello world");
let concatBuff = Buffer.concat([buf, buf2]);
console.log(concatBuff.toString("utf-8"));


console.log(concatBuff.subarray(0, 5).toString('utf-8'));