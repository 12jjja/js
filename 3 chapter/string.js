// js中创建string类型的三种方式
let name1 = 'jack';
let name2 = "jack";
let name3 = `jack`;

// 单引号和双引号没区别,反引号可以在字符串中使用${}来嵌套变量或者公式
let name4 = `jack ${10+16} 岁了`;
alert(name4);
let name5 = `jack的信息是:${name4}`;
alert(name5);

// js中没有char这个类型