/*
Array of Multiples
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
*/

function arrayOfMultiples(num:number,arrayLength:number):number[]{
    let resultArray=[]
    for(let i=1;i<=arrayLength;i++){
        let multiple=i*num
        resultArray.push(multiple)
    }
    return resultArray
}

let func=arrayOfMultiples(12,10)
console.log(func);
