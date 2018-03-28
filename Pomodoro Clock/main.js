// JavaScript source code
// set counter
var inProgress = false;
var sessionLength = 1;
var breakLength = 1;

var sessionTime = document.querySelector('#sessionTime');
var sessionIncrement = document.querySelector('#sessionIncrement');
var sessionDecrement = document.querySelector('#sessionDecrement');

var breakTime = document.querySelector('#breakTime');
var breakIncrement = document.querySelector('#breakIncrement');
var breakDecrement = document.querySelector('#breakDecrement');

var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var reset = document.querySelector('#reset');


sessionTime.innerHTML = sessionLength;
breakTime.innerHTML = breakLength;




function increment(time) {
    // console.log("...........................");
    // console.log("increment function start...");
    // console.log("time is: ", time);
    // console.log("time innerHtml is:", time.innerHTML);
    var timer = time.innerHTML
    if (timer >= 0 && timer < 59) {
        timer++;
        // console.log("timer is: ", timer);
        time.innerHTML = timer;
        // console.log("time innerHtml is:", time.innerHTML);
    }
    // console.log("increment function end...");
}

function decrement(time) {
    // console.log("...........................");
    // console.log("decrement function start");
    // console.log("time is: ", time);
    // console.log("time innerHtml is:", time.innerHTML);
    var timer = time.innerHTML
    if (timer > 0 && timer <= 59) {
        timer--;
        // console.log("timer is: ", timer);
        time.innerHTML = timer;
        // console.log("time innerHtml is:", time.innerHTML);
    }
    // console.log("decrement function end...");
}






// convert time from minutes to milliseconds???
var sessionLengthMill = sessionLength * 60 * 1000;
var breakLengthMill = breakLength * 60 * 1000;

console.log(sessionLengthMill);
console.log(breakLengthMill);


function displayTime(counter) {
    var mins = Math.floor(counter / 60);
    var seconds = counter % 60;
    if (seconds >= 10) {
        return `${mins} : ${seconds}`;
    } else {
        return `${mins} : 0${seconds}`;
    }

}

function startTimer(time) {
    // find time now
    inProgress = true;
    var workCounter = time * 60;
    var breakCounter = breakTime * 60;
 
     
    setInterval(function() {
        if(inProgress) {
            if(workCounter > 0) {
                workCounter--;
                console.log("workCounter is: ", workCounter);
                console.log(displayTime(workCounter));
                sessionTime.innerHTML = displayTime(workCounter);
            } else if (workCounter <= 0) {
                console.log("else if");
                console.log("breakCounter is: ", breakCounter);
                if(breakCounter > 0) {
                    breakCounter--;
                    console.log(breakCounter);
                    console.log(displayTime(breakCounter));
                    breakTime.innerHTML = displayTime(breakCounter);
                } else {
                    inProgress = !inProgress;
                }
            }
        }
    }, 1000);
}

function stopTimer() {
    inProgress = false;
}

function resetTimer() {
    inProgress = false;
    sessionTime.innerHTML = sessionLength;
    breakTime.innerHTML = breakLength;
}

// function toggleTimer(time) {
//    // find time now
//    inProgress = !inProgress;
//    var workCounter = time * 60;
//    var breakCounter = breakTime * 60;

//     if(inProgress) {
//         setInterval(function() {
//             if(workCounter > 0) {
//                 countdown(workCounter, sessionTime);
//             } else if (workCounter <= 0) {
//                 if(breakCounter > 0) {
//                     countdown(breakCounter, breakTime)
//                 } else {
//                     inProgress = !inProgress;
//                 }
//             }
//         }, 100);
//     } 
// }

// function countdown(counter, selection) {
//     counter--;
//     console.log(counter);
//     console.log(displayTime(counter));
//     counter.innerHTML = displayTime(counter);
// }



breakDecrement.addEventListener('click', function () {
    decrement(breakTime);
});
breakIncrement.addEventListener('click', function () {
    increment(breakTime);
});


sessionDecrement.addEventListener('click', function () {
    decrement(sessionTime);
});

sessionIncrement.addEventListener('click', function () {
    increment(sessionTime);
});

start.addEventListener('click', () => startTimer(sessionLength));

stop.addEventListener('click', () => stopTimer(breakLength));

reset.addEventListener('click', () => resetTimer(breakLength));
