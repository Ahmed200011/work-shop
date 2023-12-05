function en(mines) {
  var numbers = document.querySelectorAll(".number");
  numbers.forEach((number) => {
    if (number.innerHTML === "0") {
      console.log(number.innerHTML);
      mines.classList.add("enactive");
    }
  });
}
function ac(mines) {
  var numbers = document.querySelectorAll(".number");
  numbers.forEach((number) => {
    if (number.innerHTML === "1") {
      mines.classList.add("actives");
    }
  });
}

var pluss = document.querySelectorAll(".plus");
pluss.forEach((plus) => {
  // e(plus);
  plus.addEventListener("click", function (e) {
    var id = e.target.getAttribute("id-d");

    var number = document.getElementById(id);

    number.innerHTML++;
  });
});
var miness = document.querySelectorAll(".minus");
miness.forEach((mines) => {
  mines.addEventListener("click", function (e) {
    var id = e.target.getAttribute("id-d");

    var number = document.getElementById(id);
    number.innerHTML--;
    // if (number.innerHTML === "0") {
    //   console.log(number.innerHTML);
    //   e.classList.add("enactive");
    // } else {
    //   e.classList.add("actives");
    // }
  });
});

const navLinks = document.querySelectorAll("nav a");

// Add a click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add the 'active' class to the clicked link
    this.classList.add("active");
  });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
