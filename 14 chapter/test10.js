/* 

随机排列数组
重要程度: 3
编写函数 shuffle(array) 来随机排列数组的元素。

多次运行 shuffle 可能导致元素顺序的不同。例如：
使用了:Fisher-Yates shuffle算法
*/

function shuffle(array){
    for(let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


let arr = [1, 2, 3];

shuffle(arr);
arr
// arr = [3, 2, 1]

shuffle(arr);
arr
// arr = [2, 1, 3]

shuffle(arr);
arr
// arr = [3, 1, 2]
// ...