function averageThreeNumbers(x, y, z) {
    let sum = x + y + z ;
    let avg = sum/ 3;
    return avg;
}

function createSentence(number, noun) {
    let sentence= "On average, a Berkeley student has " + number + " " + noun + "s";
    return sentence;
}


function getRandomNum(max) {

    return Math.floor(Math.random() * max);
}


let y= getRandomNum(5);
let x= getRandomNum(5);
let z= getRandomNum(5);


let avg= averageThreeNumbers(x, y, z);
let sentence= createSentence(avg, "bag");


console.log(sentence);