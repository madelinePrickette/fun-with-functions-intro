console.log( 'thinking... Im hungry!');

function actualMath( num0 , num1 ){
    console.log('in actualMath:', num0 , num1);
    let answer = num0 * num1;
    return answer;
}
console.log('Math of 4 & 6:', actualMath( 4 , 6 ));
//works, end.


function logger(){
    console.log('in logger');
}
logger();
//works, end.


function mathExample(){
    console.log('in mathExample:', );
    let answer = 4 * 9;
    return answer;
}
console.log('Math of 4 & 9:', mathExample());
//works, end.


function returner(){
    console.log('in returner:');
    return true;
}
//returner();
console.log('running returners:', returner());
//You will see two in returner: 's in the console because the console log runs
//through the block and console logs, then returns true in the console.
// we can make returner(); a comment, ill do that now.
//In the console, now we only see one in returner: and the running returners: true.
//works, end.

function lightCandle( dark , onComputer , candleAvailable ){
    if (dark === true || onComputer === true && candleAvailable === true){
        return 'yay I get to light a candle';
    }
    else{
        return 'i am sad, no candle time :('
    }
}
console.log(lightCandle(true , true , true));