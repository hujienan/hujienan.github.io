var secs = $(".section");
var index = 0;
var secLen = $(secs).length; //get sections length
//Canvas
for(var i=0; i<secLen; i++ ){
    var eCan = document.createElement("canvas");
    $(eCan).css({"width":"100px","height":"50px"});
    var obj = eCan.getContext("2d");
    if(i==0){
        obj.fillStyle = "white";
        obj.beginPath();
        obj.arc(100,50,25,0,2*Math.PI);
        obj.fill();
    }else{
        obj.lineWidth = 5;
        obj.strokeStyle = "white";
        obj.beginPath();
        obj.arc(100,50,20,0,2*Math.PI);
        obj.stroke();
    }
    $("#navBar").append(eCan);
}

var imgItems = $(".picItem");

//mousewheel
var startTop = 0;
$(document).ready(function(){
    var typeHint = 0; //define when to auto type
    $(".intro1").animate({top: "250px"});
    $(".intro2").animate({top: "320px"});
    var canRun  = true;
    $(window).on('mousewheel', function(e){
    if(!canRun){
        return;
    }
    canRun = false;
    if(e.deltaY>0){
        if(index != 0){
            index--;
            startTop = startTop + 798;
            var reTop = startTop + 'px';
            $("#container").animate({top: reTop}, function(){
                if(index == 0){
                    $(".intro1").animate({top: "250px"});
                    $(".intro2").animate({top: "320px"});
                }    
            });
            var pre = $("canvas")[index+1].getContext("2d");
            var cur = $("canvas")[index].getContext("2d");
            pre.clearRect(0,0,300,300);
            cur.clearRect(0,0,300,300);
            pre.lineWidth = 5;
            pre.strokeStyle = "white";
            pre.beginPath();
            pre.arc(100,50,20,0,2*Math.PI);
            pre.stroke();
            cur.fillStyle = "white";
            cur.beginPath();
            cur.arc(100,50,25,0,2*Math.PI);
            cur.fill();
        }
    }else{
        if(index != (secLen-1)){
            index++;
            startTop = startTop - 798;
            var reTop = startTop + 'px';
            $("#container").animate({top: reTop}, function(){
                if(index == 1){
                    $(".intro1").css("top", "50px");
                    $(".intro2").css("top", "520px");
                     if(typeHint == 0){
                    typeHint++;
                    setTimeout(function(){
                        autoType();
                    }, 1000);
                }
                }
                if(index == 3){
                    if(imgItems[0].getAttribute('src') === '') {
                        imgItems[0].src = imgItems[0].getAttribute('data-src');
                }
                }
            });
            var next = $("canvas")[index-1].getContext("2d");
            var cur = $("canvas")[index].getContext("2d");
            next.clearRect(0,0,300,300);
            cur.clearRect(0,0,300,300);
            next.lineWidth = 5;
            next.strokeStyle = "white";
            next.beginPath();
            next.arc(100,50,20,0,2*Math.PI);
            next.stroke();
            cur.fillStyle = "white";
            cur.beginPath();
            cur.arc(100,50,25,0,2*Math.PI);
            cur.fill();
        }
    }
    setTimeout(function(){
        canRun = true;
    }, 2000);
});
});


var imgIndex = 0;
$(imgItems[imgIndex]).show();

var changeImg = function(index){
    for(var i=0; i<imgItems.length; i++){
        $(imgItems[i]).hide();
    }
    if(imgItems[index].getAttribute('src') === ""){
        imgItems[index].src = imgItems[index].getAttribute('data-src');
    }
    $(imgItems[index]).show();
}

$(".leftArrow").click(function(){
    imgIndex--;
    if(imgIndex == -1){
        imgIndex = imgItems.length-1;
    }
    changeImg(imgIndex);
});
$(".rightArrow").click(function(){
    imgIndex++;
    if(imgIndex == imgItems.length){
        imgIndex = 0;
    }
    changeImg(imgIndex);
});
//auto typing
var autoType = function(){  
    var sentences = "As a highly-motivated, enthusiastic and responsible person who had 3 years’ web development experience, I love to study new technologies, and I am keen on taking challenges. With excellent communication skills, I can shorten the development time by 20% with teammates. Always be the active and useful person in company.";
    var len = sentences.length;
    var end = 0;
    var timer = setInterval(function(){
        end++;
        var tempSen = sentences.substring(0, end);
        $("#typing").html(tempSen);
        if(end == len){
            clearInterval(timer);
            setTimeout(function(){
                $(".tail").hide();
            },1500)
        }
    },100);
}

