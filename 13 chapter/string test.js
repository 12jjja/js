/* 
首字母大写
重要程度: 5
写一个函数 ucFirst(str)，并返回首字母大写的字符串 str，例如：
*/
ucFirst("john") == "John";

function ucFirst(arg){
    return arg[0].toUpperCase() + arg.slice(1);
}


/* 
检查 spam
重要程度: 5
写一个函数 checkSpam(str)，如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。
*/

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(param){
    if(param.includes("viagra") || param.includes("XXX")){
        return true;
    }else{
        return false;
    }
}
/* 
截断文本
重要程度: 5
创建函数 truncate(str, maxlength) 来检查 str 的长度，如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。

函数的结果应该是截断后的文本（如果需要的话）。
*/
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0, maxlength - 1) + "…";
    }else{
        return str;
    }
}