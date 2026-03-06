let user = {
    name: "jack",
};

function culculate(a, b){
    alert(this.name);
    return a + b;
}

user.cul = culculate;
user.cul();