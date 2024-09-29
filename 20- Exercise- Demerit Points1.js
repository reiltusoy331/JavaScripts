///////////
// Option 1
///////////

console.log(checkSpeed(80));

function checkSpeed(speed) {
    const speedLimit = 70; 
    const kmPerPoint = 5
    let result; 
    

    if (speed > speedLimit+kmPerPoint && speed <= 130){
        result = (speed - speedLimit) / kmPerPoint;
        return "Point: " + Math.floor(result);
    } 
    else if (speed < speedLimit+kmPerPoint) { 
        return "OK"; 
    } 
    else if (speed >= 130) { 
        return "License Suspended";
    } 
    else {
        return "Invalid Input";
    }
}
