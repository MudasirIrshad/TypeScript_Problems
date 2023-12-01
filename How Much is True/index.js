"use strict";
/*
How Much is True?
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
*/
function countTrue(boolArray) {
    let countTrue = 0;
    boolArray.map((i) => {
        if (i === true)
            countTrue++;
    });
    return countTrue;
}
console.log(countTrue([true, false, false, true, true, true, true, false]));
