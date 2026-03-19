const arr = new Uint32Array(2);
arr[0] = 50000;
arr[1] = 40000;

const buf1 = Buffer.from(arr);
console.log(buf1);

const buf2 = Buffer.from(arr.buffer);  // 共享内存。
console.log(buf2);

arr[1] = 9000;

console.log(buf1);
console.log(buf2);


let buf3 = Buffer.from([1,2,3,45,6])
for (const [key, value] of buf3.entries()) {
  console.log(`${key} : ${value}`);
}


let source = new Blob(['hello world']);
console.log(source);

console.log(source.arrayBuffer().then(buffer => console.log(buffer)));

console.log(source.bytes().then((byte) => console.log(byte)));

console.log(source.slice(0,4,"utf8"));

source.text().then(console.log);