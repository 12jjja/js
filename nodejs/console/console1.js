import {Console} from "node:console"
console.time('test');
console.log("Hello World");
const logger = new console.Console({stdout: process.stdout, stderr: process.stderr});
logger.log('count: %d', 5);
let a = 1;
let b = 2;

console.assert(a > b, 'woops! there is an err')

console.count('jack');
console.countReset('jack');
console.count('jack');
console.debug('测试');

let obj = {
  a: {
    b: {
      c: {
        d: {
          e: 1,
        },
      },
    },
  },
};
console.timeLog('test');
Object.defineProperty(obj, 'hobby', {
  value: 'football',
  enumerable: false,
  writable: true
});
console.trace(obj);
console.dir(obj, {
  depth: null
})
console.log(obj);


console.error('This is an error message');

console.table([{ name: 'Alice', age: 30 }, { time: 'Bob', age: 25 }]);
console.timeEnd('test');