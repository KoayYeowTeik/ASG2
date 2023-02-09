$(document).ready(function () {
    $("div.game").hide();
});
if (localStorage.getItem("isLoggedIn") != "true"){
    window.location.href = "Login.html";
}
else{
    $("button.mygame").click(function (e){
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
function StopSliding(slider){
    event.preventDefault();
    if (slider >= 26){
        //losing here
        alert("end");
    }
    if (slider == 1){
        var belowSlider = document.getElementById("slider"+slider);
    }
    else{
        var belowSlider = document.getElementById("slider"+(slider-1));
    }
    var currentSlider = document.getElementById("slider"+slider);
    var aboveSlider = document.getElementById("slider"+(slider+1));
    $(currentSlider).css("left",$(currentSlider).css("left"));
    console.log($(currentSlider).css("left"));
    console.log($(currentSlider).css("width"));
    currentSlider.classList.remove("animate");
    var stopbtn = document.getElementsByClassName("stop")
    const button = document.querySelector("button.stop");
    $(aboveSlider).css("visibility","visible");
    button.setAttribute("onclick","StopSliding("+(slider+1)+")");

}

