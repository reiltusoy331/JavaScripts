
const marks = [80,80,50];

function calculateGrade(marks){    
    let total_score=0;
    let Grade = undefined
    

    for(i in marks)
        total_score+=marks[i];
    
    let total_avg=total_score/marks.length;
   
      
    if(total_avg <=59)
        Grade = "F"
    else if(total_avg >=60 && total_avg <=69)
        Grade = "D"
    else if(total_avg >=70 && total_avg <=79)
        Grade = "C"
    else if(total_avg >=80 && total_avg <=89)
        Grade = "B"
    else if(total_avg >=90 && total_avg <=100)
        Grade = "A"
    else
        Grade = "Error!"

    return Grade
}


console.log(calculateGrade(marks))