function hasUniqueCharacters(str:string){
    let a:string[]=[]
    a=str.split('')
    let newarr:string[]=[]
    a.sort()
    let ctr=0
    for(let i of a){
        if(!newarr.includes(i)){
            newarr.push(i)
        }
        else{
            ctr+=1
        }
    }

    if(ctr!=0){
        return (false);
    }    
    else{
        return true        
    }
    
}
console.log(hasUniqueCharacters("unique"));     