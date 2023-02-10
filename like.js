if(localStorage.getItem("isLoggedIn") != "true"){
    window.location.href = "Login.html";
}
else{
    var item = JSON.parse(localStorage.getItem("Likes"));
    for (var list in item){
        var listing = item[list];
        $("div.listings").append($('\
    <div class="listing-container">\
                <a href="#">\
                    <div class="listing-details">\
                        <p class="listing-name">'+listing.listing_name+'</p>\
                        <p class="listing-price">$'+listing.listing_price+'</p>\
                        <img class = "listing-pic" src="'+listing.listing_pic+'" alt="">\
                    </div>\
                </a>\
                <i class = "fa fa-heart" style = "padding-top:10px;padding-bottom:10px;"></i>\
    </div>'));
    $("div.listing-container").css("background-color", "yellow");

    }
}
$("i.fa").click(function(e){
    e.preventDefault();
    var Likes = JSON.parse(localStorage.getItem("Likes"));
    for (var list in item){
        if (item[list].listing_name == this.previousElementSibling.children[0].children[0].innerText){
            var key;
            if(item[list].listing_type == "Part"){
                key = item[list].listing_id+"_"+item[list].listing_color;
            }
            else{
                key = item[list].listing_id
            }
            if (this.className == "fa fa-heart-o"){
                this.className = "fa fa-heart";
                Likes[key] = item[list];
            }
            else{//if it is liked alr
                this.className = "fa fa-heart-o";
                delete Likes[key]; 
            }
            localStorage.setItem("Likes",JSON.stringify(Likes));
            var jsondata = {"username":localStorage.getItem("username"),"password":localStorage.getItem("password"),"email":localStorage.getItem("email"),"DOB":localStorage.getItem("DOB"),"Likes_listing":Likes,"Buy_listing":localStorage.getItem("Buy_listing"),"Discount_Listing":localStorage.getItem("Discount_Listing")};
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
            });        }
    }
})
//next here
$("div.listings").on("click", "a", function() {
    for (var list in item){
        if (item[list].listing_name == this.children[0].children[0].innerText){
            sessionStorage.setItem("listing_data",JSON.stringify(item[list]));
            window.location.href = "listing.html";
        }
    }
});