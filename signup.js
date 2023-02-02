$(document).ready(function () {
    $("div.signup").show();
    $("p.warningtext").hide();
    $("p.warningpassword").hide();
    $("p.warningdate").hide();
    $("div.TOC").hide();
});
function checkemail(e){
    if (($("input#email").val()).match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        $("p.warningtext").hide();
    }
    else{$("p.warningtext").show();}
}
function checkpassword(e){
    if (($("input#password").val()).length >= 8 && ($("input#password").val()).length <= 16){
        $("p.warningpassword").hide();
    }
    else {$("p.warningpassword").show();}
}
$("button.next").click(function (e) { 
    e.preventDefault();
    if (($("input#email").val()).match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        if (($("input#password").val()).length >= 8 && ($("input#password").val()).length <= 16){
            var DOB = new Date($("input#DOB").val());
            var today = new Date();
            if (Math.floor((today-DOB)/1000/60/60/24/365) >= 18){
                $("div.signup").hide();
                $("div.TOC").show();
                $("p.warningcheckbox").hide();
                $("button.createacc").click(function (e) { 
                    e.preventDefault();
                    if ($("input#TOC").is(":checked")){
                        $("p.warningcheckbox").hide();
                        var jsondata = {"username":$("input#username").val(),"password":$("input#password").val(),"email":$("input#email").val(),"DOB":$("input#DOB").val()};
                        var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://faczbricksdata-e1b3.restdb.io/rest/userdata",
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json",
                            "x-apikey": "63dbc5043bc6b255ed0c458e",
                            "cache-control": "no-cache"
                        },
                        "processData": false,
                        "data": JSON.stringify(jsondata)
                        }

                    $.ajax(settings).done(function (response) {
                    console.log(response);
                    });
                    }
                    else{$("p.warningcheckbox").show();}
                    
                    
                });
            }
            else {$("p.warningdate").show();}
        }
        else {$("p.warningpassword").show();}
    }
    else{$("p.warningtext").show();}
});
























