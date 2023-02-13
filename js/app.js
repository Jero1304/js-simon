console.log('ciao');

let pcNumber = [];
let userNumber = [];

randomNumber(pcNumber);
userNum(userNumber);


function randomNumber(randomNum){
    while (randomNum.length < 5 ) {
        let num = Math.floor(Math.random()* 100);
        randomNum.push(num);
    } 
    console.log(randomNum);
}

function userNum(num){
    for (let i = 0; i < pcNumber.length; i++) {
        num[i] = parseInt(prompt('inserisci',i,'numero'));
        console.log(num); 
    }
}