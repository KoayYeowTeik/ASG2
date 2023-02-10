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
                            <button class = "minus">-</button>\
                            <nobr class  ="quantity_value">'+cart[item].buy_quantity+'</nobr>\
                            <button class = "plus">+</button>\
                        </div>\
                    </div>\
                    <p class="listing-total">$'+(parseInt(cart[item].buy_quantity)*response[i].listing_price).toFixed(2)+'</p>\
                    <i class="fa fa-trash" aria-hidden="true"></i>\
                </div>\
                '))
                $("div.cart").css("background-color","yellow");
                $("a.gotolisting").css("text-decoration","none");
                
            }
            
        } 
    }
    UpdateSubtotal();
    //calculte final total here
    function UpdateSubtotal(){
        var Subtotal = 0;
        for(var item in cart){
            listing__id = cart[item]._id;
            for(var i = 0;i<response.length;i++){
                if(response[i]._id == listing__id){
                    listing_data = response[i];
                    break;
                }
            }
            var total = parseFloat(parseFloat(listing_data.listing_price)*parseFloat(cart[item].buy_quantity));
            Subtotal += total;
        } 
        document.querySelector("span.SUBTOTALHERE").innerText =Subtotal.toFixed(2); 
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
    $("button.minus").click(function(e){
        e.preventDefault();

        var listing_name = this.parentElement.parentElement.parentElement.children[1].innerText;
        for(var i = 0;i<response.length;i++){
            if(response[i].listing_name == listing_name){
                listing_data = response[i];
                console.log(listing_data);
                break;
            }
        }
        if(parseInt(this.parentElement.children[1].innerText) <= 1){
            this.parentElement.children[1].innerText = 1;
        }
        else{
            this.parentElement.children[1].innerText = parseInt( this.parentElement.children[1].innerText)-1;
        }
        for(var item in cart){
            if(cart[item]._id == listing_data._id){
                cart[item].buy_quantity = this.parentElement.children[1].innerText;
                localStorage.setItem("Buy_listing",JSON.stringify(cart));
            }
        }
        this.parentElement.parentElement.parentElement.children[4].innerText = "$"+(parseFloat(this.parentElement.children[1].innerText)*parseInt(listing_data.listing_price)).toFixed(2);
        UpdateSubtotal();

        

    })
    $("button.plus").click(function(e){
        e.preventDefault();
        var listing_name = this.parentElement.parentElement.parentElement.children[1].innerText;
        console.log(listing_name);
        for(var i = 0;i<response.length;i++){
            if(response[i].listing_name == listing_name){
                listing_data = response[i];
                break;
            }
        }
        if(parseInt(this.parentElement.children[1].innerText)>= parseInt(response[i].listing_quantity)){
            this.parentElement.children[1].innerText = parseInt(response[i].listing_quantity);
        }
        else{
            this.parentElement.children[1].innerText = parseInt(this.parentElement.children[1].innerText)+1;
        }
        for(var item in cart){
            if(cart[item]._id == listing_data._id){
                cart[item].buy_quantity = this.parentElement.children[1].innerText;
                localStorage.setItem("Buy_listing",JSON.stringify(cart));
            }
        }
        this.parentElement.parentElement.parentElement.children[4].innerText = "$"+(parseFloat(this.parentElement.children[1].innerText)*parseInt(listing_data.listing_price)).toFixed(2);
        UpdateSubtotal();
        
    })
    $("button.updatecart").click(function(e){
        var jsondata = {"username":localStorage.getItem("username"),"password":localStorage.getItem("password"),"email":localStorage.getItem("email"),"Buy_listing":JSON.parse(localStorage.getItem("Buy_listing"))};
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://faczbricksdata-e1b3.restdb.io/rest/userdata/${localStorage.getItem("_id")}`,
        "method": "PUT",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "63dbc5043bc6b255ed0c458e",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
        }

        $.ajax(settings).done(function (response) {
            location.reload();
        });
    })
    $("button.checkout").click(function(e){
        var jsondata = {"username":localStorage.getItem("username"),"password":localStorage.getItem("password"),"email":localStorage.getItem("email"),"Buy_listing":{}};
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": `https://faczbricksdata-e1b3.restdb.io/rest/userdata/${localStorage.getItem("_id")}`,
          "method": "PUT",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "63dbc5043bc6b255ed0c458e",
            "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata)
        }
        
        $.ajax(settings).done(function (response) {
            localStorage.setItem("Buy_listing",JSON.stringify({}));
            alert("Thank you for placing an order, we hope to see you again soon!")
            window.location.href = "homepage.html";
          
        });
    })
   
  });
