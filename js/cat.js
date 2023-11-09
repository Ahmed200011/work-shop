var links = document.querySelectorAll(".link");
var is = document.querySelectorAll("i");

links.forEach(link => {
    link.addEventListener("mouseover",function(e){
        is.forEach(i=>{
            i.classList.remove("inline")
        })

        if(e.target.classList.contains("a")){
           var id= e.target.getAttribute("id");
           var i=document.getElementById(id)
           i.classList.add("inline")

        }

    })
    
});
const range = document.getElementById("range");
const range2 = document.getElementById("range2");
const minPriceValue = document.getElementById("minPriceValue");
const maxPriceValue = document.getElementById("maxPriceValue");

range.addEventListener("input", updateRange);
range2.addEventListener("input", updateRange);

function updateRange() {
    const minValue = parseInt(range.value);
    const maxValue = parseInt(range2.value);
    minPriceValue.textContent = minValue;
    maxPriceValue.textContent = maxValue;
}