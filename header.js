
$("body").prepend($("<header class = 'header'></header>"));
$("header").append($("<div class = 'container'></div>"));

$("div.container").append($("<nav class = 'navbar'></nav>"))
$("nav.navbar").append($("<a href = '#'     class = 'toggle-button'></a>"));
for (let i = 0;i<3;i++){
    $("a.toggle-button").append($("<span class = 'bar'></span>"));
}
$("nav.navbar").append($("<div class = 'navbar-links'></div>"));
$("div.navbar-links").append($("<ul></ul>"));
$("ul:first").append($("<img src = 'Images/FACZ-BRICKS-ICON.png' class = 'logoimg'>"));
$("ul:first").append($("<li><a href = 'Login.html' class = 'login'><i class='fa fa-sign-in' aria-hidden='true'></i><span class = 'navtext'>Login</span></a></li>"));
if (localStorage.getItem("isLoggedIn") == "true"){
    $("a.login").hide();
}
else{$("a.login").show()}
$("ul:first").append($("<li><a href = 'community.html'><i class='fa fa-users' aria-hidden='true'></i><span class = 'navtext'>Community</span></a></li>"));
$("ul:first").append($("<li><a href='account.html'><i class='fa fa-user' aria-hidden='true'></i><span class = 'navtext'>Account</span></a></li>"));
$("ul:first").append($("<li><a href='like.html'><i class='fa fa-heart' aria-hidden='true'></i><span class = 'navtext'>Likes</span></a></li>"));
$("ul:first").append($("<li><a href='cart.html'><i class='fa fa-shopping-cart' aria-hidden='true'></i><span class = 'navtext'>Cart</span></a></li>"));

$("img.logoimg").click(function (e) { 
    e.preventDefault();
    window.location.href = "homepage.html";
});
if (localStorage.getItem("isLoggedIn") == "true"){
    $("i.fa fa-heart").innerText = localStorage.getItem("Name");
}






/*//if login == false:
var headernavbutton = headernav.appendChild(document.createElement("button"))
headernavbutton.className =  "headernavbutton";
headernavbutton.appendChild(document.createTextNode("Sign up / Login"));
headernavbutton.addEventListener("click",gologinpage);
headernavbutton.className = "Login";
var headernavbutton = headernav.appendChild(document.createElement("button"));
headernavbutton.appendChild(document.createTextNode("Likes"));
headernavbutton.addEventListener("click",golikepage);
headernavbutton.className = "Likes";
var headernavbutton = headernav.appendChild(document.createElement("button"));
headernavbutton.appendChild(document.createTextNode("Account"));
headernavbutton.addEventListener("click",goaccountpage);
headernavbutton.className = "account";
var headernavbutton = headernav.appendChild(document.createElement("button"));
headernavbutton.appendChild(document.createTextNode("Cart"));
headernavbutton.addEventListener("click",gocartpage);
headernavbutton.className = "cart";

var headernotice2 = header.appendChild(document.createElement("div"));
headernotice2.className = "headernotice2";
headernotice2.appendChild(document.createTextNode(notice2));


*/
var footer = document.querySelector(".footer");
var footer1 = footer.appendChild(document.createElement("div"));
footer1.className = "footer1";
var p = footer1.appendChild(document.createElement("p"));
p.appendChild(document.createTextNode("FACZ BRICKS.COM"));
p.className = "footertitle";
var p = footer1.appendChild(document.createElement("p"));
p.appendChild(document.createTextNode("address"));
p.className = "footeraddress";
for (i = 0;i<5;i++){
var span = footer1.appendChild(document.createElement("span"));
span.className = "fa fa-star checked";}
footer1.appendChild(document.createElement("br"));
var a = footer1.appendChild(document.createElement("a"));
a.href = "reviewpage.html";
a.appendChild(document.createTextNode("See all reviews"));
footer1.appendChild(document.createElement("br"));
var a = footer1.appendChild(document.createElement("a"));
a.href = "#";
a.className = "fa fa-instagram";
var a = footer1.appendChild(document.createElement("a"));
a.href = "#";
a.className = "fa fa-youtube";
var a = footer1.appendChild(document.createElement("a"));
a.href = "#";
a.className = "fa fa-facebook";
footer1.appendChild(document.createElement("br"));
var footer2 = footer.appendChild(document.createElement("div"));
footer2.className = "footer2";
var img = footer2.appendChild(document.createElement("img"));
img.src = "Images/Paynow.png";
img.className = "footerimg";
var img = footer2.appendChild(document.createElement("img"));
img.src = "Images/Paypal.png";
img.className = "footerimg";
var img = footer2.appendChild(document.createElement("img"));
img.src = "Images/Visa.png";
img.className = "footerimg";
var img = footer2.appendChild(document.createElement("img"));
img.src = "Images/Mastercard.png";
img.className = "footerimg";
var p = footer2.appendChild(document.createElement("p"));
p.appendChild(document.createTextNode("Warning! Choking Hazard! Some parts may be too small and not suitable for children under age 4!"));
p.className = "Warning";

var p = footer.appendChild(document.createElement("p"));
p.appendChild(document.createTextNode("This website is not legitamate, it is for a school project that uses LEGO as a marketing idea"));
p.className = "Warning";





