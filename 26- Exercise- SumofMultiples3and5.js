
function sum(limit){
    let total_multiples=0;    

    for(let num=1; num <= limit;num++){
        if(num%3===0 || num%5===0)
            total_multiples+=num;
    }        
    
    return total_multiples;
}

console.log(sum(10));