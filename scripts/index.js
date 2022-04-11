//store the products array in localstorage as "data"
function Product(b,n,p,i) {
   this.brand = b;
   this.name = n;
   this.price = p;
   this.image = i;
}



document.querySelector("#submit").addEventListener("click", myFun);

var productArray =JSON.parse(localStorage.getItem("data"))|| [];
function myFun(e) {
   event.preventDefault();
   var form = document.getElementById("product_form");
   let brand = form.product_brand.value;
   let name = form.product_name.value;
   let price = form.product_price.value;
   let image = form.product_image.value;

   let product = new Product(brand, name, price, image);
   console.log(product)
   productArray.push(product);
   localStorage.setItem("data", JSON.stringify(productArray));
}

document.querySelector("#show_products").addEventListener("click", myFun2);
function myFun2() {
  window.location.href = "inventory.html";
}