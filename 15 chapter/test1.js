/* 
过滤数组中的唯一元素
重要程度: 5
定义 arr 为一个数组。

创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组。

例如：
*/

function unique(arr) {
    return [new Set(arr).keys()];
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O