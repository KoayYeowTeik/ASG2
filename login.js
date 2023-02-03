$(document).ready(function () {
    $("p.warningtext").hide();
    $("p.warningpassword").hide();
});
function checkemail(e){
    if (($("input#email").val()).match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        $("p.warningtext").hide();
    }
    else{$("p.warningtext").show();}
}
function checkpassword(e){
    if (($("input#password").val()).length >= 7 && ($("input#password").val()).length <= 16){
        $("p.warningpassword").hide();
    }
    else {$("p.warningpassword").show();}
}
$("button.login").click(function (e) { 
    e.preventDefault();
    if (($("input#email").val()).match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        $("p.warningtext").hide();
        if ($("input#password").val().length >= 7 && ($("input#password").val()).length <= 16){
            $("p.warningpassword").hide();
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://faczbricksdata-e1b3.restdb.io/rest/userdata",
                "method": "GET",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": "63dbc5043bc6b255ed0c458e",
                  "cache-control": "no-cache"
                }
              }
              
              $.ajax(settings).done(function (response) {
                console.log(response);
                for (let i = 0;i<response.length;i++){
                    if (response[i].email == $("input#email").val() && response[i].password == $("input#password").val()){
                        localStorage.setItem("email",response[i].email);
                        localStorage.setItem("password",response[i].password);
                        localStorage.setItem("username",response[i].username);
                        localStorage.setItem("isLoggedIn",true);
                        localStorage.setItem("Likes",JSON.stringify(response[i].Likes_listing));
                        localStorage.setItem("Buy_listing",JSON.stringify(response[i].Buy_listing));
                        localStorage.setItem("Discount_Listing",JSON.stringify(response[i].Discount_Listing));
                        window.location.href = "homepage.html";
                        break;
                    }
                }

              });
        }
        else {$($("p.warningpassword")).show();}
    }
    else {$("p.warningtext").show()}
});
/*if (($("input#email").val()).match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    if ($("input#password").val().length >= 7 && ($("input#password").val()).length <= 16){*/