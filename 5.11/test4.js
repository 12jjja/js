/* 
某月的最后一天？
重要程度: 5
写一个函数 getLastDayOfMonth(year, month) 返回 month 月的最后一天。有时候是 30，有时是 31，甚至在二月的时候会是 28/29。

参数：

year —— 四位数的年份，比如 2012。
month —— 月份，从 0 到 11。
举个例子，getLastDayOfMonth(2012, 1) = 29（闰年，二月）
*/

function getLastDayOfMonth(year, month){
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

getLastDayOfMonth(2012, 1);