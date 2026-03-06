user = prompt("请输入账号");
if(user == 'Admin'){
    password = prompt("请输入Admin密码");
    if(password == 'TheMaster'){
        alert("Welcome");
    }else if(password == '' || password == undefined){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
}else if(user == '' || user == undefined){
    alert("Canceled");
}else{
    alert("I don’t know you");
}