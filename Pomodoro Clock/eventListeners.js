// Break time Event listeners
breakDecrement.addEventListener('click', function () {
    decrement(breakTime);
});
breakIncrement.addEventListener('click', function () {
    increment(breakTime);
});


// Session time Event Listeners
sessionDecrement.addEventListener('click', () => decrement(sessionTime));
});

sessionIncrement.addEventListener('click', () => increment(sessionTime));


// Start, stop and reset button event listeners
start.addEventListener('click', () => startTimer(sessionCounter));

stop.addEventListener('click', () => stopTimer(breakCounter));

reset.addEventListener('click', () => resetTimer());
