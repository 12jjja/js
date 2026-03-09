/* 将 border-left-width 转换成 borderLeftWidth
重要程度: 5
编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。

即：删除所有短横线，并将短横线后的每一个单词的首字母变为大写。 */

function camelize(str){
    // 根据下划线转成数组
    let arr = str.split("-");
    for(let i = 1; i< arr.length;i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
}


camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';