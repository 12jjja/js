/* 
过滤字谜（anagrams）
重要程度: 4
Anagrams 是具有相同数量相同字母但是顺序不同的单词。
*/
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr){
    let map = new Map();
    for(item of arr){
        let temp = item.toLowerCase().split("").sort().join();
        map.set(temp, item);
    }
    return Array.from(map.values());
}