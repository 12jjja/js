/* 
计算属性数量
重要程度: 5
写一个函数 count(obj)，该函数返回对象中的属性的数量：
*/
let user = {
  name: 'John',
  age: 30
};

alert( countNumber(user) ); // 2

function countNumber(obj){
    return Object.keys(obj).reduce((sum, current) => sum += 1, 0);
}