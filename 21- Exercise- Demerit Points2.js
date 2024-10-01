///////////
// Option 2
///////////

checkSpeed(130);

function checkSpeed(speed){
    const SPEED_LIMIT = 70;
    const KM_PER_PTS = 5;

    if(speed < SPEED_LIMIT + KM_PER_PTS){
        console.log("OK");
        return;
    }
    const POINTS = Math.floor((speed-SPEED_LIMIT)/ KM_PER_PTS)
    if (POINTS >= 12)
        console.log("License Suspended.");
    else
        console.log("Points "+POINTS);

}