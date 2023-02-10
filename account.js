$(document).ready(function () {
    $("div.game").hide();
    document.getElementById("POINTS").innerText = localStorage.getItem("Discount_Listing");
    $("div.accountinfo").append("\
        <p>Your Email: "+localStorage.getItem("email")+"</p>\
        <p>Your Username: "+localStorage.getItem("username")+"</p>\
        <p>Your Password: "+localStorage.getItem("password")+"</p>\
    ")
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
    slidewidth = 400;
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
    var current_left_val = parseFloat($(currentSlider).css("left").slice(0,$(currentSlider).css("left").length-2));
    var current_right_val = current_left_val+parseFloat($(currentSlider).css("width").slice(0,$(currentSlider).css("left").length-2));
    var belowSlider_left_val = parseFloat($(belowSlider).css("left").slice(0,$(belowSlider).css("left").length-2));
    var belowSlider_right_val = belowSlider_left_val+parseFloat($(belowSlider).css("width").slice(0,$(belowSlider).css("left").length-2));
    if (current_left_val >= belowSlider_left_val && current_left_val <= belowSlider_right_val){
        document.getElementById("music").play();
        var new_width = belowSlider_right_val-current_left_val;
        $(currentSlider).css("width",new_width);
        $(aboveSlider).css("width", new_width);
        slidewidth = 400 + (100-new_width);
        document.documentElement.style.setProperty("--width",slidewidth+"px");
        $("span.score")[0].innerText = slider;

    }
    else if (current_right_val >= belowSlider_left_val && current_right_val <= belowSlider_right_val){
        document.getElementById("music").play();
        var new_width = current_right_val-belowSlider_left_val;
        $(currentSlider).css("width",new_width);
        $(currentSlider).css("left",$(belowSlider).css("left"));
        $(aboveSlider).css("width", new_width);
        slidewidth = 400 + (100-new_width);
        console.log(slidewidth);
        document.documentElement.style.setProperty("--width",slidewidth+"px"); 
        console.log($("span.score")); 
        $("span.score")[0].innerText = slider;


    }
    else{
        alert("CONGRATS YOU EARNED "+(slider-1)+"POINTS");
        $("div.accountpage").show();
        $("div.footer").show();
        $("div.game").hide();
        localStorage.setItem("Discount_Listing",slider+parseInt(localStorage.getItem("Discount_Listing"))-1);
        var jsondata = {"username":localStorage.getItem("username"),"password":localStorage.getItem("password"),"email":localStorage.getItem("email"),"Discount_Listing":parseInt(localStorage.getItem("Discount_Listing"))};
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
          location.reload();
        });
        };

    
    currentSlider.classList.remove("animate");
    var stopbtn = document.getElementsByClassName("stop")
    const button = document.querySelector("button.stop");
    $(aboveSlider).css("visibility","visible");
    button.setAttribute("onclick","StopSliding("+(slider+1)+")");
    }