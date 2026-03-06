// 隐藏属性
let user = {
    name: "jack",
}

let age = Symbol("age");

user[age] = 18;

user;