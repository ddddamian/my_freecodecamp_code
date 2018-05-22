// main.js

// set counter
var inProgress = false;
var sessionLength = 1;
var breakLength = 1;
var currentTime = 0;
var countdown;
var sessionCounter = sessionLength * 60;
var breakCounter = breakLength * 60;

console.log("sessionCounter is: ", sessionCounter);
console.log("breakCounter is: ", breakCounter);


// Select the session elements
var sessionTime = document.querySelector('#sessionTime');
var sessionIncrement = document.querySelector('#sessionIncrement');
var sessionDecrement = document.querySelector('#sessionDecrement');
// Select the break elements
var breakTime = document.querySelector('#breakTime');
var breakIncrement = document.querySelector('#breakIncrement');
var breakDecrement = document.querySelector('#breakDecrement');
// Select the buttons
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var reset = document.querySelector('#reset');

var message = document.querySelector("#message");

console.log("sessionTime is: ", sessionTime);
console.log("breakTime is: ", breakTime);


// Set the HTMl to match the variable
sessionTime.innerHTML = sessionLength;
breakTime.innerHTML = breakLength;



function increment(time) {
    var timer = time.innerHTML;
    if (timer >= 0 && timer < 59) {
        timer++;
        time.innerHTML = timer;
    }
    sessionLength = sessionTime.innerHTML;
    breakLength = breakTime.innerHTML;
}


function decrement(time) {
    var timer = time.innerHTML
    if (timer > 0 && timer <= 59) {
        timer--;
        time.innerHTML = timer;
    }
    sessionLength = sessionTime.innerHTML;
    breakLength = breakTime.innerHTML;
}


function displayTime(counter) {
    var mins = Math.floor(counter / 60);
    var seconds = counter % 60;
    if (seconds >= 10) {
        return `${mins} : ${seconds}`;
    } else {
        return `${mins} : 0${seconds}`;
    }
}


function startTimer(time, sessionOrBreak) {
    clearInterval(countdown);
    console.log("Start the countdown!!!");
    console.log("time is: ", time);
    inProgress = true;
    currentTime = time;
    console.log(currentTime);
    console.log(time);
    
    var workCounter = time;
    console.log("workCounter is: ", workCounter);
     
     
    countdown = setInterval(function() {
        console.log("In setInterval() function");
        console.log("inProgress is: ", inProgress);
        if(inProgress) {
            console.log(workCounter);
            if(workCounter > 0) {
                workCounter--;
                console.log("workCounter is: ", workCounter);
                console.log(displayTime(workCounter));
                sessionTime.innerHTML = displayTime(workCounter);
                message.innerHTML = "Underway... Keep up the good work";                
            } else if (workCounter <= 0) {
                console.log("else if");
                console.log("breakCounter is: ", breakCounter);
                if(breakCounter > 0) {
                    breakCounter--;
                    console.log(breakCounter);
                    console.log(displayTime(breakCounter));
                    breakTime.innerHTML = displayTime(breakCounter);
                    message.innerHTML = "Good work! Take a break";
                } else {
                    inProgress = !inProgress;
                    console.log("inProgress is: ", inProgress);
                    message.innerHTML = "Game over!";                    
                }
            }
        } else {
            sessionCounter = workCounter;
            console.log("inProgress is: ", inProgress);
            
        }
    }, 1000);
}

function stopTimer() {
    console.log("Stop the countdown!!!");
    clearInterval(countdown);
}

function resetTimer() {
    console.log("Reset the countdown!!!");
    inProgress = false;
    // sessionLength = sessionTime.innerHTML;
    // breakLength = breakTime.innerHTML;
    sessionTime.innerHTML = sessionLength;
    breakTime.innerHTML = breakLength;
}
