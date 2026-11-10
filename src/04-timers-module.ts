// settimeout
// setinterval
// clearinterval
// clearTimeout
// setImmediate

function runSetTimeout(): void {
    console.log("Starting timeout...");
    setTimeout(() => {
        console.log("Timeout executed!");
    }, 300);

    console.log("run faster...");
    
}

function runClearTimeout(): void {
    const timerId = setTimeout(() => {
        console.log("This will not be executed because the timeout is cleared.");
    }, 2000);
    clearTimeout(timerId);
}

function runSetInterval(): void {
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        console.log(`Interval executed ${count} times.`);
        if (count >= 5) {
            clearInterval(intervalId);
            console.log("Interval cleared after 5 executions.");
        }
    }, 500);
}

function runTimerDemo(): void {
runSetTimeout();
runClearTimeout();
runSetInterval();
}

runTimerDemo();

// setImmidiate runs after all synchrionous code has been executed and before any timers or I/O events. It is used to schedule a callback to be executed immediately after the current event loop phase.


