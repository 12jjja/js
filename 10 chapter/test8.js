let user = {
    name: "jack",
    sayHi(){
        let name =  "boby";  // 无效的
        let arrow =  ()=>{
            let name = 'tom';  // 不会使用箭头函数的this
            return this.name; // 这里访问的name是外面的Name，因为箭头函数不会有this实体
        }
        return arrow();
    }
};
alert(user.sayHi());


let admin = {
    name: "tom",
    sayHi(){
        alert(this.name);
    }
}
admin.sayHi();