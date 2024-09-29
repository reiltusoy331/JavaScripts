
const output = fizzbuzz('7');
console.log(output);


function fizzbuzz(input){
    if(input % 3 == 0 && input % 5 == 0){
        return "Fizzbuzz"
    }
    else if (input % 3 == 0){
        return "Fizz"
    }
    else if (input % 5 == 0){
        return "Buzz"
    }
    else if (typeof input !== 'number'){
        return NaN
    }
    else
        return input
}