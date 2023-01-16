const mainmenu = function(){
    const body = document.querySelector("body");
    body.appendChild(document.createElement("div")).className = "header";
    body.appendChild(document.createElement("div")).className = "toppage";
    let header = document.querySelector(".toppage");
    var logo = header.appendChild(document.createElement("img"));
    logo.src = "Images/FACZ-BRICKS-ICON.png";
    logo.className = "header-logo";
    //if (login key is null){}  line code below
    header.appendChild(document.createElement("button")).appendChild(document.createTextNode("Log In/Register"));
    var like = header.appendChild(document.createElement("img"));
    like.src = "Images/.png";
    like.className = "header-like";
    like.style.backgroundColor = "red"//test code to see if image is transparent
}   
mainmenu()