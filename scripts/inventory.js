

var display = JSON.parse(localStorage.getItem("data"));

display.forEach(function (e,i) {
   var div = document.createElement("div");
   var image = document.createElement("img");
   image.src = e.image;
   var brand = document.createElement("p");
   brand.innerText = e.brand;
   var name = document.createElement("p");
   name.innerText = e.name;
   var price = document.createElement("p");
   price.innerText = e.price;
   var remove = document.createElement("button");
   remove.innerText = "Remove";
   remove.addEventListener("click", function () {
      remove(e, i);
   })

   div.append(image, brand, name, price,remove)
   
   document.querySelector("#products_data").append(div);


})

function remove(e, i) {
   display.splice(1, i);
   localStorage.setItem("data",JSON.stringify(display))
}

document.querySelector("#add_product").addEventListener("click", myFun2);
function myFun2() {
   window.location.href="\index.html"
}