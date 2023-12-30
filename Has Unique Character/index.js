"use strict";
function hasUniqueCharacters(str) {
    let a = [];
    a = str.split('');
    let newarr = [];
    a.sort();
    console.log(a);
    let ctr = 0;
    for (let i = 0; i < a.length; i++) {
        let bol = a[i] == a[i++];
        let nbol = a[i--] == a[i];
        console.log(a[i++]);
        console.log(nbol);
        if (bol == true && nbol == true) {
            ctr += 1;
        }
        break;
    }
    console.log(ctr);
    if (ctr != 0) {
        console.log("string dont have unique characters");
    }
    else {
        console.log("Has Unique Characters");
    }
}
hasUniqueCharacters("abc");
