var a = document.querySelector(".myprofile");
a.addEventListener("click",showprofile());
 

function showprofile(){
    $('div.accountcontentmodifier').remove();
    $('div.accountcontent').append($("<div class = 'accountcontentmodifier'></div>"));
    $('div.accountcontentmodifier').append($("<div class = 'content1'></div>"));
    $('div.content1').append($("<p> Coupons</p>"));
    $('div.content1').append($("<p> You available coupons</p>"));
    $('div.accountcontentmodifier').append($("<div class = 'content2'></div>"));
    $('div.accountcontentmodifier').append($("<div class = 'content3'></div>"));

}
/*function showprofile(){
    var b = document.querySelector("div.accountcontent");
    b.removeChild(document.querySelector("div.accountcontentmodifier"));
}*/