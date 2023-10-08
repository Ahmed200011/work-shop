
// jQuery(document).ready(function($) {
//     "use strict";
//     $('#customers-testimonials').owlCarousel({
//         loop: true,
//         center: true,
//         items: 3,
//         margin: 0,
//         autoplay: true,
//         dots:true,
//         autoplayTimeout: 8500,
//         smartSpeed: 450,
//         responsive: {
//           0: {
//             items: 1
//           },
//           768: {
//             items: 2
//           },
//           1170: {
//             items: 3
//           }
//         }
//     });
//   });


var coverflow = $("#coverflow").flipster();

var countDownDate = new Date("oct 9, 2023").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("day").innerHTML= days ;
    document.getElementById("hour").innerHTML=  hours;
    document.getElementById("minuts").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds ;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);