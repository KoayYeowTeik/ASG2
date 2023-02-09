$(document).ready(function () {
    $("div.game").hide();
});
if (localStorage.getItem("isLoggedIn") != "true"){
    window.location.href = "Login.html";
}
else{
    $("button.mygame").click(function (e){
        console.log("game clicked");
        $("div.game").show();
        $("div.accountpage").hide();
        $("div.footer").hide();
        for (var i = 25;i>0;i--){
            $("div.gamebox").append("<img src = 'Images/gamebrick.png' id = 'slider"+i+"' class = 'animate slider'>")
        }
        //game here
    })
    $("button.logout").click(function (e) { 
        e.preventDefault();
        localStorage.clear();
        window.location.href = "homepage.html";
    });
    $("i.fa-arrow-left").click(function (e){
        e.preventDefault();
        $("div.accountpage").show();
        $("div.footer").show();
        $("div.game").hide();
    })
}
function StopDiv(slider){
    console.log(slider);
}