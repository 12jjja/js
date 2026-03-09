let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // 应该输出 "TU"

function getWeekDay(date){
    let result = null;
    switch(date.getDay()){
        case 1: 
            result = "MO";
            break;
        case 2: 
            result = "TU";
            break;
        case 3: 
            result = "WE";
            break;
        case 4: 
            result = "TH";
            break;
        case 5: 
            result = "FR";
            break;
        case 6: 
            result = "SA";
            break;
        case 7: 
            result = "SU";
            break;
    }
    return result;
}