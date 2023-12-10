// var text = document.querySelector("a.text");
var left = document.getElementById("left");
let tbody = document.querySelector(".tbody");
tbody.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    var id = e.target.getAttribute("id");
    var input = document.getElementById(id);
    input.removeAttribute("disabled");
    input.focus();
  }
  // if (input.blur()) {
  //   input.setAttribute("disabled", "false");
  // }
  /////////
  // input.blur = function () {
  //   input.setAttribute("disabled", "false");
  // };
});

var text=document.querySelectorAll(".text")

left.addEventListener("click", function (e) {
  if (e.target.classList.contains("text")) {
    text.forEach((ele) => ele.classList.remove("activ"));
    e.target.classList.add("activ");
  }

});


let btn1=document.getElementById("btn1");
btn1.onclick=function(){
  document.querySelector(".btn1").setAttribute("class","none") 
 
}
let btn2=document.getElementById("btn2");
btn2.onclick=function(){
  document.querySelector(".btn2").setAttribute("class","none") 
 
}
let btn3=document.getElementById("btn3");
btn3.onclick=function(){
  document.querySelector(".btn3").setAttribute("class","none") 
 
}
let btn4=document.getElementById("btn4");
btn4.onclick=function(){
  document.querySelector(".btn4").setAttribute("class","none") 
}
let btn5=document.getElementById("btn5");
btn5.onclick=function(){
  document.querySelector(".btn5").setAttribute("class","none") 
}
let btn6=document.getElementById("btn6");
btn6.onclick=function(){
  document.querySelector(".btn6").setAttribute("class","none") 
}
let btn7=document.getElementById("btn7");
btn7.onclick=function(){
  document.querySelector(".btn7").setAttribute("class","none") 
}
let btn8=document.getElementById("btn8");
btn8.onclick=function(){
  document.querySelector(".btn8").setAttribute("class","none") 
}

// function handelColor() {
//   text.classList.add("activ");
// }


var product=document.querySelectorAll('.click')

product.forEach(element => {
    element.addEventListener('click',function(e) {
        e.preventDefault()
        // e.target.setAttribute('href','singleProduct.html')
        window.location.href = "singleProduct.html";
        // console.log(e.target.className);

    })
    
});