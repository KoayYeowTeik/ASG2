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
    like = JSON.parse(localStorage.getItem("Likes"));
    res = response;
    for (var i = 0;i<5;i++){
    var listing = response[Math.floor(Math.random() * response.length)]

    var key2;
    if (listing.listing_type != "Part"){
        key2 = listing.listing_id;
    }
    else{
        key2 = listing.listing_id+"_"+listing.listing_color
    }
    if (like[key2] == undefined){
        $("div.foryou-listing-container").append($('\
    <div class="listing-container">\
                <a href="#">\
                    <div class="listing-details">\
                        <p class="listing-name">'+listing.listing_name+'</p>\
                        <p class="listing-price">$'+listing.listing_price+'</p>\
                        <img class = "listing-pic" src="'+listing.listing_pic+'" alt="">\
                    </div>\
                </a>\
                <i class = "fa fa-heart-o" style = "padding-top:10px;padding-bottom:10px;"></i>\
    </div>'))
    }
    else{
        $("div.foryou-listing-container").append($('\
    <div class="listing-container">\
                <a href="#">\
                    <div class="listing-details">\
                        <p class="listing-name">'+listing.listing_name+'</p>\
                        <p class="listing-price">$'+listing.listing_price+'</p>\
                        <img class = "listing-pic" src="'+listing.listing_pic+'" alt="">\
                    </div>\
                </a>\
                <i class = "fa fa-heart" style = "padding-top:10px;padding-bottom:10px;"></i>\
    </div>'))
    }
   
    $("div.listing-container").css("background-color", "yellow");
    }
    $("div.foryou").on("click", "a", function() {
        for (let i = 0;i<res.length;i++){
            if (res[i].listing_name == this.children[0].children[0].innerText){
                sessionStorage.setItem("listing_data",JSON.stringify(res[i]));
                window.location.href = "listing.html";
            }
        }
    });
    $("div.listing-container").on("click","i",function (e) {
        e.preventDefault();
        console.log(this);
        var Likes = JSON.parse(localStorage.getItem("Likes"));
        for (var i = 0;i<res.length;i++){
            if (res[i].listing_name == this.previousElementSibling.children[0].children[0].innerText){
                var key;
                if(res[i].listing_type == "Part"){
                    key = res[i].listing_id+"_"+res[i].listing_color;
                }
                else{
                    key = res[i].listing_id
                }
                if (this.className == "fa fa-heart-o"){
                    this.className = "fa fa-heart";
                    Likes[key] = res[i];
                }
                else{//if it is liked alr
                    this.className = "fa fa-heart-o";
                    delete Likes[key]; 
                }
                localStorage.setItem("Likes",JSON.stringify(Likes));
                var jsondata = {"username":localStorage.getItem("username"),"password":localStorage.getItem("password"),"email":localStorage.getItem("email"),"DOB":localStorage.getItem("DOB"),"Likes_listing":Likes,"Buy_listing":localStorage.getItem("Buy_listing"),"Discount_Listing":JSON.parse(localStorage.getItem("Discount_Listing"))};
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
                });
            }
        }
    });

  });