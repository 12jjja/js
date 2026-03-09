/* 
从数组创建键（值）对象
重要程度: 4
假设我们收到了一个用户数组，形式为：{id:..., name:..., age:... }。

创建一个函数 groupById(arr) 从该数组创建对象，以 id 为键（key），数组项为值。
*/

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// 调用函数后，我们应该得到：

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

function groupById(arr){
    let obj = {};
    arr.forEach(item => {
        obj[item.id] = item;
    });
    return obj;
}