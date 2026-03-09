/* 
arr 是一个数组。

创建一个函数 unique(arr)，返回去除重复元素后的数组 arr。
*/


function unique(arr) {
    let result = [];
    for(item of arr){
        if(!result.includes(item)){
            result.push(item);
        }
    }
    return result; 
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O