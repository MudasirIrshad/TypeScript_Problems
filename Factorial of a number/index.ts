function Factorial(num:number):number{
    let total:number=1
    for(let i = 1; i<=num ; i++){
        total*=i
    }
    return total
}

let factorial=Factorial(5)
console.log(factorial);



function FactorialOfEvenNumbers(num:number):number{
    let total = 1
    for(let i=1 ; i<=num ; i++){
        if(i%2==0){
            total*=i
        }
    }
    return total
}

let res=FactorialOfEvenNumbers(6)
console.log(res);
