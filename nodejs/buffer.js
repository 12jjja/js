const { Buffer } = require("node:buffer");
const buf1 = Buffer.alloc(10, 'jack');
console.log(buf1);

const buf2 = Buffer.from([1,2,3]);
console.log(buf2);

const buf5 = Buffer.from([257, 257.5, -255, "1"]);
console.log(buf5);

const buf3 = Buffer.from("hello world");
console.log(buf3);

const buf4 = Buffer.from("hello world", "utf-8");
console.log(buf4);

const buf6 = Buffer.from("hello world", "utf-16le");
console.log(buf6);

const buf7 = Buffer.from("hello world", "base64");
console.log(buf7);

console.log(buf1.toString("hex"));
console.log(buf1.toString("base64"));


let buf8 = Buffer.from([1,2,3]);
let unit32array = new Uint32Array(buf8);
console.log(unit32array);


const buf9 = Buffer.from('hello', 'utf16le');
const uint16array = new Uint16Array(
  buf9.buffer,
  buf9.byteOffset,
  buf9.length / Uint16Array.BYTES_PER_ELEMENT,
);

console.log(uint16array);

// Prints: Uint16Array(5) [ 104, 101, 108, 108, 111 ]


