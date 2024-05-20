let time = 0;
setTimeout(log, 10);

function log () {
    console.clear();
    console.log(parseInt(time/100) + ":" + parseInt(time%100));
    time++;
    setTimeout(log, 10);
}