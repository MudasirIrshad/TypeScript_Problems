function fizzBuzz(limit:number):(string | number)[] {
	let arr:(number|string)[]=[]
    for(let i=1;i<=limit;i++){
        if (i % 5 == 0 && i % 3 == 0  ) {
            arr.push('FizzBuzz'); 
            continue
        }
        else if (i % 5 == 0) {
            arr.push("Buzz");
            continue;
        }
        else if(i % 3 == 0) {
            arr.push('Fizz');
            continue;
        }
        arr.push(i);
        
    }
    return arr
}

console.log(fizzBuzz(16));
