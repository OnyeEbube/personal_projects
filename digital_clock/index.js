const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }
    

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl, (innerText = ampm);

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var curWeekDay = days[new Date().getDay()];
        var curDay = new Date().getDate();
        var curMonth = months[new Date().getMonth()];
        var curYear = new Date().getFullYear();
        var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
        document.getElementById("date").innerHTML = date;
        
        var time = setTimeout(function(){ startTime() }, 500);
    setTimeout(()=>{updateClock()}, 1000);
}
updateClock();