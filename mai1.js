
function limpiar() {
    clearInterval(cronometer);
    cargo();
}
function cargo() {
    var segundos = 0;
    var s = document.getElementById("S");
    var m = document.getElementById("M");
    var cronometer = setInterval(function() {
        segundos++;
        var secs = segundos;
        var mins = 0;
        while (secs >= 60) {
            mins++;
            secs -= 60;
        }
        if (mins < 10)
            m.innerHTML = mins;
        else
            m.innerHTML = mins;
        if (secs < 10)
            s.innerHTML = secs;
        else
            s.innerHTML = secs;
        Total_s = secs;
        Total_m = mins;
        if (mins == 1) {

            clearInterval(cronometer);
            lost++;
            if(lost == 1)
            {
                location.href='lost.html';
            }
            cargo();
        }
    }, 1000);
}