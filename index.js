
var button = document.getElementById("button-roll");

function rollDice(){


var number1 =Math.floor( (Math.random() * 6)) + 1;

var number2 =Math.floor( (Math.random() * 6)) + 1;


document.querySelectorAll('img')[0].setAttribute("src","images/dice" + number1 + ".png");
document.querySelectorAll('img')[1].setAttribute("src","images/dice" + number2 + ".png");


var message = "";
if(number1 > number2){
    message = "Player1 is The Winner!";
    document.querySelectorAll('img')[0].style.transition ="all ease-in-out 0.5s";
    document.querySelectorAll('img')[0].style.transform ="rotate(135deg)";
    document.querySelectorAll('img')[0].style.width ="70%";
    document.querySelectorAll('img')[1].style.transition ="all ease-in-out 0.5s";
    document.querySelectorAll('img')[1].style.transform ="rotate(135deg)";
    document.querySelectorAll('img')[1].style.width ="50%";

}
else if(number1 < number2){
    message = "Player2 is The Winner!";
    document.querySelectorAll('img')[0].style.transition ="all ease-in-out 0.5s";
    document.querySelectorAll('img')[0].style.transform ="rotate(135deg)";
    document.querySelectorAll('img')[0].style.width ="50%";
    document.querySelectorAll('img')[1].style.transition ="all ease-in-out 0.5s";
    document.querySelectorAll('img')[1].style.transform ="rotate(135deg)";
    document.querySelectorAll('img')[1].style.width ="70%";
    
   
}
else{
    message = "Draw!!!";
    document.querySelectorAll('img')[0].style.transition ="all ease-in-out 0.5s";
   
    document.querySelectorAll('img')[0].style.width ="50%";
    document.querySelectorAll('img')[1].style.transition ="all ease-in-out 0.5s";
    document.querySelectorAll('img')[1].style.width ="50%";
}

document.querySelector('.messages p').innerHTML = message;

}


button.addEventListener("click", rollDice);

