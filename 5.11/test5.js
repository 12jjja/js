/* 
今天过去了多少秒？
重要程度: 5
写一个函数 getSecondsToday()，返回今天已经过去了多少秒？

例如：如果现在是 10:00 am，并且没有夏令时转换，那么：
*/

function getSecondsToday(){
    let now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

getSecondsToday()