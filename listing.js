var listing_data = JSON.parse(sessionStorage.getItem("listing_data"))
console.log(listing_data);
$("div.listingdetails").append($("<p class = 'listingheader'>"+listing_data.listing_name+"</p>"))
$("div.listingdetails").append($("<div class = 'listing_description'></div>"));
$("div.listing_description").append($("<img src = '"+listing_data.listing_pic+"'>"));
$("div.listing_description").append($("<div class = 'listing_details'></div>"));
if (parseInt(listing_data.listing_quantity) > 0 ){
    $("div.listing_details").append($("<p class = 'instock'>Still "+parseInt(listing_data.listing_quantity)+" units in stock</p>"));
}   
else{    $("div.listing_details").append($("<p class = 'outstock'>Currently Sold Out</p>"));
}
$("div.listing_details").append($("<ul class = 'details_category'></ul>"));
$("ul.details_category").append($("<li>Category: "+listing_data.listing_category+"</li>"));
$("ul.details_category").append($("<li>ID: "+listing_data.listing_id+"</li>"));
$("ul.details_category").append($("<li>Type: "+listing_data.listing_type+"</li>"));
if (listing_data.listing_color != ""){
    $("ul.details_category").append($("<li>Color: "+listing_data.listing_color+"</li>"));
}
$("div.listing_description").append($("<div class = 'price'></div>"));
$("div.price").append($("<h3>$"+listing_data.listing_price.toFixed(2)+"</h3>"));
$("div.listing_description").append($("<div class = 'quantity'></div>"));
$("div.quantity").append($("<input type='button' onclick='decrementValue()' value='-' >"))//quantity changer here
$("div.quantity").append($("<nobr> </nobr><nobr class = 'quantity_value'>1</nobr><nobr> </nobr>"))
$("div.quantity").append($("<input type='button' onclick='incrementValue()' value='+' >"))//quantity changer here
$("div.listing_description").append($("<button onclick = 'addcart()'><i class = 'fa fa-shopping-cart'></i> Add to cart</button>"));
$("div.listing_description").append($("<p class = 'quantity_warning'>Please input a number</p>"));
$(document).ready(function () {
    $("p.quantity_warning").hide()
});
function decrementValue (){
    var nobr = document.querySelector("nobr.quantity_value");
    if(parseInt(nobr.innerText) <= 1){
        nobr.innerText = 1;
    }
    else{
        nobr.innerText = parseInt(nobr.innerText)-1
    }
}
function incrementValue(){
    var nobr = document.querySelector("nobr.quantity_value");
    if (parseInt(nobr.innerText) >= listing_data.listing_quantity){
        nobr.innerText = listing_data.listing_quantity;
    }
    else{
        nobr.innerText = parseInt(nobr.innerText)+1
    }
   
}
function addcart(){
    console.log(localStorage.getItem("data"));//null
    //where to go after adding to cart
}

