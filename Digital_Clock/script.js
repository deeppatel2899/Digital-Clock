function Clock() {


var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();



// AM PM Conversion
if (hour >= 12) {
var am_pm = "PM";
} else {
var am_pm = "AM";
}


// Conversion into 12 hour format
// Can be ommited if fine with 24 hour format
if (hour == 0) {
hour = 12;
} else {
if (hour > 12) {
hour = hour - 12;
}
}



//update hour, minute, seconds 
hour = update(hour);
minute = update(minute);
second = update(second);
// Adding time elements to the div
document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + am_pm;
// Set Timer to 1 sec (1000 ms)
setTimeout(Clock, 1000);
}


//update the func
function update(t) {
if (t < 10) {
return "0" + t;
}
else {
return t;
}
}


Clock();


