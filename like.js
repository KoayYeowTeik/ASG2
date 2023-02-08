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
    console.log(Likes);
})
    $("div.listings").on("click", "a", function() {
        for (let i = 0;i<res.length;i++){
            if (res[i].listing_name == this.children[0].children[0].innerText){
                sessionStorage.setItem("listing_data",JSON.stringify(res[i]));
                window.location.href = "listing.html";
            }
        }
    });