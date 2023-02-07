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
let res;
$.ajax(settings).done(function (response) {
    var category_list = [];
    for (let i = 0;i<response.length;i++){
        if (category_list.indexOf(response[i].listing_type.toUpperCase()) == -1){
            category_list.push(response[i].listing_type.toUpperCase());
        }
        else{
            continue;
        }
        res = response;
        var ul = document.querySelector("ul.searchresult");
        var li = ul.appendChild(document.createElement("li"));
        li.className = "result"
        li.style.display = "none";
        var a = li.appendChild(document.createElement("a"));
        a.href = "#";
        a.appendChild(document.createTextNode(response[i].listing_name));
    }
    for (var i = 0;i<5;i++){
    var value = Math.floor(Math.random() * response.length);
    $("div.foryou-listing-container").append($('\
    <a href = "#">\
    <div class="listing-container">\
        <p class="listing-name">'+response[value].listing_name+'</p>\
        <img class = "listing-image" src="'+response[value].listing_pic+'" alt="">\
        <p class="listing-price">$'+response[value].listing_price.toFixed(2)+'</p>\
        <p class="view-click">Click To View</p>\
    </div>\
    </a>'))}
});
$("div.foryou-listing-container").on("click","a",function(){
    for(let i = 0;i<res.length;i++){
        if (res[i].listing_name ==this.children[0].children[0].innerText){
            sessionStorage.setItem("listing_data",JSON.stringify(res[i]));
            window.location.href = "listing.html";
        }
    }
})






function Search(){
    let li = document.getElementsByClassName("result");
    for (let i = 0;i<li.length;i++){
        if ($("input#search").val() == ""){
            li[i].style.display = "none";
        }
        else if (((li[i].innerText).toUpperCase()).indexOf(($("input#search").val()).toUpperCase()) > -1){
            li[i].style.display = "block";
        }
        else{
            li[i].style.display = "none";
        }
    } 
}
$("ul.searchresult").on("click", "a", function() {
    for (let i = 0;i<res.length;i++){
        if (res[i].listing_name == this.innerText){
            sessionStorage.setItem("listing_data",JSON.stringify(res[i]));
            window.location.href = "listing.html";
        }
    }
});





