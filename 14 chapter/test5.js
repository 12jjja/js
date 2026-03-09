let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr){
    let newArr = arr.slice(0);
    return newArr.sort((a, b) => a.localeCompare(b));
}