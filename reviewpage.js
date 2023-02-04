function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
$(document).ready(function () {
    $("div.userreview").hide();
});
$("button.leavereview").click(function (e) { 
    e.preventDefault();
    $("div.reviewdata").hide();
    $("reviewhead").hide();
    $("div.userreview").show();
    $("p.warning").hide();
});
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://userreview-ddda.restdb.io/rest/userreview",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63dd29053bc6b255ed0c4609",
      "cache-control": "no-cache"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    let loopcount = 0;
    if (response.length < 10){
        loopcount = response.length;
    }
    else{
        loopcount = 10;
    }
    for (var i = 0;i<loopcount;i++){    
        var a = document.querySelector("div.reviewdata");
        var div = document.createElement("div");
        div.className = "reviewcontainer";
        var p = div.appendChild(document.createElement("p"));
        p.appendChild(document.createTextNode(response[i].description));
        p = div.appendChild(document.createElement("p"));
        p.appendChild(document.createTextNode(response[i].name));
        p = div.appendChild(document.createElement("p"));
        p.appendChild(document.createTextNode(response[i].reviewdate.slice(0,10)));
        for (let ii = 0;ii<5;ii++){
            var span = div.appendChild(document.createElement("span"));
            span.className ="fa fa-star";
            if (ii+1<=response[i].score){
                span.className += " checked";
            }

        }
        a.appendChild(div);
    }
  });
$("button.submitreview").click(function (e) { 
    e.preventDefault();
    if ($("input#name").val() != ""){
        $("p.name").hide();
        if ($("input#description").val() != ""){
            $("p.description").hide()
            var today = new Date();
            today = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
            var jsondata = {"name": $("input#name").val(),"score": $("select#score").val(),"description":$("input#description").val(),"reviewdate":today};
            var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://userreview-ddda.restdb.io/rest/userreview",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "63dd29053bc6b255ed0c4609",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
            }

            $.ajax(settings).done(function (response) {
                $("div.userreview").hide();
                alert("Thank you for leaving a review");
                location.reload();
            });
        }
        else{$("p.description").show()}
    }
    else{$("p.name").show();}
    
});


  	