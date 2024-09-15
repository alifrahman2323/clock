function clock() {
    var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daynames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    var today = new Date();
    document.getElementById('Date').innerHTML = (daynames[today.getDay()] + " " + today.getDate() + ' ' + monthnames[today.getMonth()] + ' ' + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h >= 12 ? 'PM' : 'AM';

    h = h % 12;
    h = h ? h : 12; // If the hour is 0, set it to 12
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
}

var inter = setInterval(clock, 400);