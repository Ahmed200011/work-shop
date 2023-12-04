
var numbers=document.querySelectorAll(".number")
numbers.forEach(number => {
  var plus =document.querySelectorAll(".plus")
  plus.forEach(plus => {
    plus.addEventListener("click",function(){
        number.innerHTML++
    })
  })
  var plus =document.querySelectorAll(".minus")
  plus.forEach(plus => {
    plus.addEventListener("click",function(){
        number.innerHTML--
    })
  })
    
 
});


const navLinks = document.querySelectorAll('nav a');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the 'active' class to the clicked link
    this.classList.add('active');
  });
});