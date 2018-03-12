// JavaScript source code
// set counter
var sessionLength = 25;
var breakLength = 5;

var sessionTime = document.querySelector('#sessionTime');
var sessionIncrement = document.querySelector('#sessionIncrement');
var sessionDecrement = document.querySelector('#sessionDecrement');

var breakTime = document.querySelector('#breakTime');
var breakIncrement = document.querySelector('#breakIncrement');
var breakDecrement = document.querySelector('#breakDecrement');


//function increment(counter, selector) {
//    console.log("...........................");
//    console.log("increment function start...");
//    console.log("counter is: ", counter);
//    console.log("selector is: ", selector);
//    console.log("selector innerHtml is:", selector.innerHTML);
//    if (counter >= 0 && counter < 59) {
//        counter++;
//        console.log("counter is: ", counter);
//        selector.innerHTML = counter;
//        console.log("selector innerHtml is:", selector.innerHTML);
//    }
//    console.log("increment function end...");

//}

function increment(time) {
    console.log("...........................");
    console.log("increment function start...");
    console.log("time is: ", time);
    console.log("time innerHtml is:", time.innerHTML);
    var timer = time.innerHTML
    if (timer >= 0 && timer < 59) {
        timer++;
        console.log("timer is: ", timer);
        time.innerHTML = timer;
        console.log("time innerHtml is:", time.innerHTML);
    }
    console.log("increment function end...");

}

function decrement(time) {
    console.log("...........................");
    console.log("decrement function start");
    console.log("time is: ", time);
    console.log("time innerHtml is:", time.innerHTML);
    var timer = time.innerHTML
    if (timer > 0 && timer <= 59) {
        timer--;
        console.log("timer is: ", timer);
        time.innerHTML = timer;
        console.log("time innerHtml is:", time.innerHTML);

    }
    console.log("decrement function end...");
}

//function decrement(counter, selector) {
//    console.log("...........................");
//    console.log("decrement function start");
//    console.log("counter is: ", counter);
//    console.log("selector is: ", selector);
//    console.log("selector innerHtml is:", selector.innerHTML);
//    if (counter > 0 && counter <= 59) {
//        counter--;
//        console.log("counter is: ", counter);
//        selector.innerHTML = counter;
//        console.log("selector innerHtml is:", selector.innerHTML);

//    }
//    console.log("decrement function end...");
//}




/*
function() {
if(breakLength >= 0 && breakLength < 59) {
breakLength++;
breakTime.innerHTML = breakLength;
}
});
*/



/*function() {
  if(breakLength > 0 && breakLength <= 59) {
    breakLength--;
    breakTime.innerHTML = breakLength;
  }
});*/




// convert time from minutes to milliseconds???
var sessionLengthMill = sessionLength * 60 * 1000;
var breakLengthMill = breakLength * 60 * 1000;

console.log(sessionLengthMill);
console.log(breakLengthMill);


// on click
//var start = document.querySelector('#start');


//function startTimer() {
//    // find time now
//    var startTime = Date.now();
//    console.log("Start is: ", startTime);

//    // subtract the variable from now time
//    var endTime = startTime + sessionLengthMill;
//    console.log("End is: ", endTime);

//    // countdown
//}

//function stopTimer() {

//}

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

//start.addEventListener('click', startTimer);
//stop.addEventListener('click', stopTimer);