function removeSpace(){
    const fs=require('fs')

const file='content.txt'
let str:string=''
fs.readFile(file,'utf8',(err:object,data:string)=>{
    if(err){
        console.log(err);        
    }
    else{
        let darr:string[]=data.split(' ')
        let narr:string[]=[]
        for(let i of darr){
            if(i==''){
                continue
            }
            else{
                narr.push(i)
            }
        }
        str=narr.join(' ')
        console.log(str);
    }
    
fs.writeFileSync('newcontent.txt',str,'utf8',(err:object)=>{
    if(err){console.log(err);}
    else{
        console.log('File Updated');
        
    }
})
})
console.log(str);
}

removeSpace()