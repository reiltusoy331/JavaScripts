///////////
// Option 2
///////////

showNumbers(10);


function showNumbers(limit){

    for (let i=0;i<=limit;i++){    
    const message = (i%2!=0) ?"Odd":"Even" 
    console.log(i,message)    
    }
}