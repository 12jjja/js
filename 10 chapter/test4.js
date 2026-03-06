// 在调用之前
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj){
    // 通过typeof来判断数据的类型
    let type;
    for(key in obj){
        type = typeof(obj[key]);
        if(type == "number"){
            obj[key] *= 2;
        }
    }
}

// 调用函数之后
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
