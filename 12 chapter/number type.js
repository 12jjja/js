/* 来自访问者的数字的总和
重要程度: 5
创建一个脚本，提示访问者输入两个数字，然后显示它们的总和。 */
let a = +prompt("请输入第一个数字");
let b = +prompt("请输入第二个数字");
alert(`总和是${a+b}`)



/* 
重复，直到输入的是一个数字
重要程度: 5
创建一个函数 readNumber，它提示输入一个数字，直到访问者输入一个有效的数字为止。

结果值必须以数字形式返回。

访问者也可以通过输入空行或点击“取消”来停止该过程。在这种情况下，函数应该返回 null。
*/
let flag = true;

while(flag){
    alert(readNumber());
}

function readNumber(){
    let input = prompt("请输入一个数字", "");
    if(input == '') {
        return null;
    }
    if(isFinite(input)) {
        flag = false;
        return input;
    }

}

/* 
从 min 到 max 的随机数
重要程度: 2
内建函数 Math.random() 会创建一个在 0 到 1 之间（不包括 1）的随机数。

编写一个 random(min, max) 函数，用以生成一个在 min 到 max 之间的随机浮点数（不包括 max)）。 */
alert( random(1, 5) ); // 1.2345623452
alert( random(2, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

function random(num, num2){
    return Math.random() * (num2 - num) + num
}