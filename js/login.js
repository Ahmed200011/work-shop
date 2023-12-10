var product=document.querySelectorAll('.click')

product.forEach(element => {
    element.addEventListener('click',function(e) {
        e.preventDefault()
        // e.target.setAttribute('href','singleProduct.html')
        window.location.href = "singleProduct.html";
        // console.log(e.target.className);

    })
    
});