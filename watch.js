const timer = document.getElementById("timer");
let time = null;
let starttime = 0;
let elapsetime = 0;
let isrunning = false;

function start(){

    if(!isrunning){
        starttime = Date.now() - elapsetime;
        time = setInterval(update, 10);
        isrunning = true;
    }
}

function stop(){

    if(isrunning){
        clearInterval(time);
        elapsetime = Date.now() - starttime;
        isrunning = false;
    }
}

function restart(){
        clearInterval(time);
        starttime = 0;
        elapsetime = 0;
        isrunning = false;

        timer.textContent = (`00:00:00:00`);
}

function update(){

    let currenttime = Date.now();
    elapsetime = currenttime - starttime;

    let hour = Math.floor(elapsetime / (1000 * 60 * 60));
    let minute = Math.floor(elapsetime / (1000 * 60) % 60);
    let second = Math.floor(elapsetime / 1000 % 60);
    let millisecond = Math.floor(elapsetime % 1000 / 10);

    hour = String(hour).padStart(2, 0);
    minute = String(minute).padStart(2, 0);
    second = String(second).padStart(2, 0);
    
    timer.textContent = `${hour}:${minute}:${second}:${millisecond}`;
}