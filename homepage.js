
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
    for (let i = 0;i<response.length;i++){
        res = response;
        var ul = document.querySelector("ul.searchresult");
        var li = ul.appendChild(document.createElement("li"));
        li.className = "result"
        li.style.display = "none";
        var a = li.appendChild(document.createElement("a"));
        a.href = "#";
        a.appendChild(document.createTextNode(response[i].listing_name));
    }
});
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
$(document).on("click", "a", function() {
    for (let i = 0;i<res.length;i++){
        if (res[i].listing_name == this.innerText){
            sessionStorage.setItem("listing_data",JSON.stringify(res[i]));
            window.location.href = "listing.html";
        }
    }
});




