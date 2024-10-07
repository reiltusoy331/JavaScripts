
const marks = [80,80,50];

function calculateGrade(marks){    

    const average=calculateAverage(marks)     
       
    if(average <60)
        return "F";
    else if(average <=70)
        return "D";
    else if(average <=80)
        return "C";
    else if(average <=90)
        return "B";
    else if(average <=100)
        return "A";
    else
        return "Error!" 
}


function calculateAverage(array){    
    let total_score=0;
    for(let value of array)
        total_score+=value
    
    let total_avg=total_score/array.length;

    return total_avg

}

console.log(calculateGrade(marks))