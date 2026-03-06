function calculate(num1, num2){
    // 局部变量
    let temp = 1;
    console.log(num1 + num2 + temp);
};

calculate(1,2); // 1 + 2 + 1 = 4
console.log(temp); // 报错,提示未定义


// 全局变量
let global = 2;
function calculate2(num1, num2){
    console.log(num1 - num2 - global);
}

calculate2(5,1); // 5-1-2 = 2

