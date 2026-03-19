const blob = new Blob(["hello world hello world"], { type: "text/plain" });

const stream = blob.stream();
const reader = stream.getReader();

async function read() {
  while (true) {
    const { value, done } = await reader.read();

    if (done) break;

    console.log("chunk:", value);
  }
}

read();

console.log(blob.type);

const buf = Buffer.from("hello world");
let json = JSON.stringify(buf);
console.log(`转成json的数据:${json}`);

let obj = JSON.parse(json);
console.log(`转成对象:${obj}`);

const buf2 = Buffer.from(obj);
console.log(`从对象转成buffer:${buf2}`);