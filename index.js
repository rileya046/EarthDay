//countdown

var countDown = new Date("April 22, 2025 00:00:00").getTime()

var count = setInterval(function() {
    var now = new Date().getTime();

    //distance between now and Earth Day
    var distance = countDown - now;

    //calculate
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display result
    //document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    //if (distance < 0) {
    //clearInterval(x);
    //document.getElementById("demo").innerHTML = "EXPIRED";
    //}
    //}, 1000);
