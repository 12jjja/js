
/* 
数组操作。
重要程度: 5
我们试试下面的 5 个数组操作。

创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。
将 “Rock-n-Roll” 从数组末端添加进去。
用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。
去掉数组的第一个值并显示它。
在数组前面添加 Rap 和 Reggae。
*/
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
alert(styles.shift());
styles.unshift('Rap','Reggae');
styles;


/* 

输入数字求和
重要程度: 4
写出函数 sumInput()，要求如下：

使用 prompt 向用户索要值，并存在数组中。
当用户输入了非数字、空字符串或者点击“取消”按钮的时候，问询结束。
计算并返回数组所有项之和。
P.S. 0 是有效的数字，不要因为是 0 就停止问询。
*/
let arr = [];

function sumInput(num){
    arr.push(num);
}

while(true){
    let input = prompt("请输入一个数值");
    if(input == null){
        break;
    }
    sumInput(+input);
}
let sum = 0;
for(item of arr){
    sum += item;
}
sum;