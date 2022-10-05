let [milliseconds, seconds, minutes] = [00,00,00]
let timerRef = document.querySelector('.current_display')
let int = null

document.getElementById('start').addEventListener('click', start_timer)
document.getElementById('stop/reset').addEventListener('click', stop_timer);



function start_timer(){
    document.getElementById('stop/reset').className = 'stop';
    document.getElementById('stop/reset').innerHTML = 'Stop';
    if(int!==null){
        clearInterval(int)
    }
    int = setInterval(display_timer,10)
}

function stop_timer(){
    if(document.getElementById('stop/reset').className == 'stop'){
        clearInterval(int);
    document.getElementById('stop/reset').className = 'reset';
    document.getElementById('stop/reset').innerHTML='Reset'
    console.log('logj')
    }
    else(reset_timer())
    
}

function reset_timer(){
    clearInterval(int);
    [milliseconds, seconds, minutes] = [00,00,00];
    timerRef.innerHTML = '00:00,00';
    document.getElementById('stop/reset').className = 'stop';
    document.getElementById('stop/reset').innerHTML = 'Stop';
    
}

function display_timer(){
    milliseconds+=1;
    if(milliseconds == 100){
        milliseconds = 00;
        seconds++;
    }

    if(seconds == 60){
        seconds = 00;
        minutes++
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0"+milliseconds : milliseconds > 99 ? "00" : milliseconds
    timerRef.innerHTML = `${m}:${s}:${ms}`;
}








//https://dev.to/chrislemus/stopwatch-using-javascript-accurate-and-easy-5ado