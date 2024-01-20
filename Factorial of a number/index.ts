function Factorial(num:number):number{
    let total:number=1
    for(let i = 1; i<=num ; i++){
        total*=i
    }
    return total
}

let factorial=Factorial(5)
console.log(factorial);
