var header = document.querySelector(".header");
//creating notice
var notice = "notice";
var notice2 = "notice2"
var headernotice2 = header.appendChild(document.createElement("div"));
headernotice2.className = "headernotice";
headernotice2.appendChild(document.createTextNode(notice));

//header nav
header.appendChild(document.createElement("div")).className = "headernav";
var headernav = document.querySelector(".headernav");
var headernavimg = headernav.appendChild(document.createElement("img"));
headernavimg.src = "Images/FACZ-BRICKS-ICON.png";
//if login == false:
var headernavbutton = headernav.appendChild(document.createElement("button"))
headernavbutton.className =  "headernavbutton";
headernavbutton.appendChild(document.createTextNode("Sign up / Login"));
headernavbutton.addEventListener("click",gologinpage);
headernavbutton.className = "Signup/Login";
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
console.log(header);












function gologinpage(event){
    window.location.href = "login.html";
    event.preventDefault();
}
function golikepage(event){
    window.location.href = "like.html";
    event.preventDefault();
}
function goaccountpage(event){
    window.location.href = "account.html";
    event.preventDefault();
}
function gocartpage(event){
    window.location.href = "cart.html";
    event.preventDefault();
}