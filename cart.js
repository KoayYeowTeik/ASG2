var cart = JSON.parse(localStorage.getItem("Buy_listing"));
console.log(cart);
for (var item in cart){
    console.log(cart[item]);
    
}