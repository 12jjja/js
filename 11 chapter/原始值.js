let a = {
    name: "jack",
    age: 19,
    toString(){
        return this.age;
    }
}

let b = {
    name: "tom",
    age: 20,
    toString(){
        return this.age;
    }
}

alert(a - b);
