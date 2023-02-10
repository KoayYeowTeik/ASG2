var cart = JSON.parse(localStorage.getItem("Buy_listing"));
console.log(cart);
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://faczbricksdata-e1b3.restdb.io/rest/listingdata",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63dbc5043bc6b255ed0c458e",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    for (var item in cart){
        for (var i = 0;i<response.length;i++){
            if (cart[item]._id == response[i]._id){
                $("div.cart").prepend($('\
                <div class="listing">\
                    <img src="'+response[i].listing_pic+'" alt="">\
                    <p class="listing-name">'+response[i].listing_name+'</p>\
                    <p class="listing-ppu">$'+response[i].listing_price.toFixed(2)+'</p>\
                    <div class="listing-quantity">\
                        <div class="listing-quantity-adjust">\
                            <button onclick = "DecrementValue()">-</button>\
                            <nobr>'+cart[item].buy_quantity+'</nobr>\
                            <button onclick = "IncrementValue()">+</button>\
                        </div>\
                        <p class="quantity-warning">Insufficient Quantity</p>\
                    </div>\
                    <p class="listing-total">'+(parseInt(cart[item].buy_quantity)*response[i].listing_price)+'</p>\
                    <i class="fa fa-trash" aria-hidden="true"></i>\
                </div>'))
                $("div.cart").css("background-color","yellow");
                
            }
            
        } 
    }
    $("i.fa-trash").click(function (e) { 
        e.preventDefault();
        var listing_name = this.parentElement.children[1].innerText;
        for(var i = 0;i<response.length;i++){
            if(response[i].listing_name == listing_name){
                if(response[i].listing_type != "Part"){
                    delete cart[response[i].listing_id];
                }
                else{
                    delete cart[response[i].listing_id+"_"+response[i].listing_color];
                }
                localStorage.setItem("Buy_listing",JSON.stringify(cart));
                location.reload();

            }

        }
    });
  });
