let age = 19;
let isadult = age > 18;
alert(isadult); // 返回true

// 以下这些条件都是false
if (0) { console.log('不会执行'); }
if ("") { console.log('不会执行'); }
if (null) { console.log('不会执行'); }
if (undefined) { console.log('不会执行'); }
if (NaN) { console.log('不会执行'); }

// 除了上面这几个是false,其它所有都是true
if (1) { console.log(' 执行'); }
if ("0") { console.log(' 执行'); }  // 注意：字符串 "0" 是真值！
if ("aslkdjalkjsd") { console.log(' 执行'); } // 注意：字符串 "false" 也是真值！
if ([]) { console.log(' 执行'); }   // 空数组是真值！
if ({}) { console.log(' 执行'); }   // 空对象是真值！
if (function(){}) { console.log(' 执行'); }

// 有一个陷阱, JS 还有一个 Boolean 对象包装器，它不是原始类型. 不要使用这个,直接用true或者false
let b1 = false;             // 原始类型 false
let b2 = new Boolean(false); // Boolean 对象

console.log(b1); // false
console.log(b2); // [Boolean: false]

// 陷阱：对象在 if 中永远为 true！
if (b1) { console.log(' 不执行'); }
if (b2) { console.log(' 执行！因为它是对象'); }

// 类型也不同
typeof b1 // "boolean"
typeof b2 // "object"


// 直接使用构造器创建的变量是正确的
let directBoolean = Boolean(true);
console.log(directBoolean); // 输出true

console.log(typeof 'ajkdsa');
console.log(typeof('ajkdsa'));

