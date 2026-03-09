let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // 星期二，应该显示 2

function getLocalDay(date){
    let day = date.getDay();
    if(day == 0){
        return 7;
    }
    return date.getDay();
}