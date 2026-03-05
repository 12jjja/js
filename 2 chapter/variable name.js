/* 
变量命名规则
1. 只能包含数字，字母，$, _
2. 首字符必须为非数字
3. 名称是多个单词时，使用驼峰命名法
4. 也可以使用中文等别的语言命名，但是不推荐，遵循国际惯例
5. 名称会区分大小写
6. 不能使用保留字作为变量名称，包括但不限于let, function, class, return等
7. 早期可以不使用let或是var来声明变量，直接赋值即可，但是现在如果使用了use strict严格模式就会报错。
*/
let myNameIsMing;
let 铭 = 1;
let tom = 2;
alert(铭+tom);
let TOM = 2;
alert(tom == TOM);
a = 1;