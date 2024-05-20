const currDate = new Date();
let hours = currDate.getHours();
let minutes = currDate.getMinutes();
let seconds = currDate.getSeconds();

function update () {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    if (hours === 24) {
        hours = 0;
    }
}

function display () {
    const printHours = hours < 10 ? `0${hours}` : hours;
    const printMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const printSeconds = seconds < 10 ? `0${seconds}` : seconds;

    if (hours < 12) {
        console.log(`${printHours}:${printMinutes}:${printSeconds} AM`);
    }
    if (hours >= 12) {
        const newHours = hours - 12;
        const printHours = newHours < 10 ? `0${newHours}` : newHours;
        console.log(`${printHours}:${printMinutes}:${printSeconds} PM`);
    }
}


setInterval(() => {
    console.clear();
    update();
    display();
} , 1000);

