"use strict";
function hasUniqueCharacters(str) {
    let a = [];
    a = str.split('');
    let newarr = [];
    a.sort();
    let ctr = 0;
    for (let i of a) {
        if (!newarr.includes(i)) {
            newarr.push(i);
        }
        else {
            ctr += 1;
        }
    }
    if (ctr != 0) {
        return (false);
    }
    else {
        return true;
    }
}
console.log(hasUniqueCharacters("unique"));
