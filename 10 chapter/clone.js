// 深层克隆-递归
let user = {
    name: "jack",
    info: {
        address: "广东深圳酷宅",
        floor: 5,
    }
}

let cloneUser = {};
deepClone(cloneUser, user);
alert(cloneUser == user);
alert(cloneUser === user);
function deepClone(target, source){
    for(key in source){
        if(typeof source[key] == 'object'){
            deepClone(source[target]);
        }
        target[key] = source[key];
    }
}