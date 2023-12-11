function countDown(limit:number){
    let count=limit
    console.log('CountDown of '+limit+' sec Starts....');
    
    function timeout(){
        setTimeout(()=>{
            console.log(count,' sec remaining');
            count-=1
          },1000)
          if(count==1){
            clearInterval(x)
        }    
  
    }
    let x=setInterval(timeout,1000)
    setTimeout(()=>{console.log("CountDown Finished");
    },(limit+2)*1000)
}

countDown(10)