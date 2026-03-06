// 字符串转换
let result = true;
console.log(typeof result);

let newResult = String(result)

console.log(typeof newResult);


// 数字转换, 如果是字符串,会把引号和空格/换行符/制表符/删除,并且提取其中的数字,如果碰到字符就会出现error返回NaN
let num1 = 'lkajsd10';
let num2 = 'lkajsd5';
let num3 = num1 - num2;
console.log(num3); //输出NaN

let num4 = '       12    ';
console.log(Number(num4));


// 布尔类型转换
// 以下都是false
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
