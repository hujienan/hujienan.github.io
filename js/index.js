$(function(){
    $("#loader").fadeOut();
    //get client height and width
    var h = document.body.clientHeight;
    var w = document.body.clientWidth;
    //Based on the real height to reset elements' attr
    var secArr = $(".section");
    for(var i=0; i<secArr.length; i++){
        $(secArr[i]).height(setByH(1));
        $(secArr[i]).css("top", setByH(i));
    }
    //get sections length and give a initial value for index
    var index = 0;
    var secLen = $(".section").length; 
    //get picItems
    var imgItems = $(".picItem");
    var imgIndex = 0;
    //let the first img show
    $(imgItems[imgIndex]).show();
    var typeHint = 0;
    var startTop = 0;
    if(w >= 1200 && w <= 3000 && h >= 740 && h <= 2500  ){
        //for computer
        //delete junk elements
        $("#contactDetail").remove();
        $("#contactHint").remove();
        //Canvas navBar
        for(var i=0; i<secLen; i++ ){
            var eCan = document.createElement("canvas");
            $(eCan).css({"width": "100","height": "50"});
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
        //set intro's attrs
        $(".intro1").css({
            "top": setByH(0.2),
            "height": setByH(0.13),
            "line-height": setByH(0.13),
            "font-size": setByH(0.07),
            "width": "36%",
            "margin-left": "-18%"
        });
        $(".intro2").css({
            "top": setByH(0.7),
            "height": setByH(0.17),
            "line-height": setByH(0.17),
            "font-size": setByH(0.07),
            "width": "46%",
            "margin-left": "-23%",
            "border-width": setByH(0.01)
        });
        //animate the intros
        $(".intro1").animate({top: setByH(0.31)});
        $(".intro2").animate({top: setByH(0.4)});
        // down arrow
        $(".downArrow").css({
            "width": setByH(0.04),
            "height": setByH(0.05),
            "margin-left": setByH(-0.02)
        });
        //set section2
        $(".meIcon").css({
            "width": setByH(0.15),
            "height": setByH(0.15),
            "margin-top": setByH(0.15)
        })
        $(".meIcon img").css({
            "width": setByH(0.15),
            "height": setByH(0.2)
        });
        $(".textDiv").css({
            "width": "50%",
            "margin-top": setByH(0.08),
            "padding": setByH(0.05),
            "border-top-width": setByH(0.005)
        });
        $(".typeP").css("font-size", setByH(0.031));
        //section3
        $(".rotateLink").css({
            "width": setByH(0.18),
            "height": setByH(0.18),
            "margin-top": setByH(0.18),
            "margin-bottom": setByH(0.18),
            "font-size": setByH(0.04)
        });
        $(".rotateLink p").css({
            "line-height": setByH(0.18)
        });
        //section4
        $("#showPic").css({
            "width": "65%",
            "height": "75%",
            "top": "10%"
        });
        $(".picItem").css("border-radius", "1%");
        //contact
        $("#contactBar").css({
            "width": setByH(0.05),
            "right": setByH(0.01)
        });
        $(".contact").css({
            "width": setByH(0.05),
            "height": setByH(0.05),
            "margin-bottom": setByH(0.03)
        });
        var canRun  = true;
        //mousewheel event 
        $(window).on('mousewheel', function(e){
            if(!canRun){
                return;
            }
            canRun = false;
            if(e.deltaY>0){
                if(index != 0){
                    toUp();
                    //repaint navBar
                    repaint(index, false);
                }
            }else{
                if(index != (secLen-1)){
                    toDown();
                    //repaint navBar
                    repaint(index, true);
                }
            }
            setTimeout(function(){
                canRun = true;
            }, 2000);
        });
    }else if(w > 3000 || h > 2500){
        //for super big device
        //delete junk elements
        $("#contactDetail").remove();
        $("#contactHint").remove();
        $(".downArrow").remove();
        //show all
        $("body").css("overflow", "scroll");
        //delete navBar
        $("#navBar").remove();
        //set intro's attrs
        $(".intro1").css({
            "top": setByH(0.2),
            "height": setByH(0.13),
            "line-height": setByH(0.13),
            "font-size": setByH(0.07),
            "width": "36%",
            "margin-left": "-18%"
        });
        $(".intro2").css({
            "top": setByH(0.7),
            "height": setByH(0.17),
            "line-height": setByH(0.17),
            "font-size": setByH(0.07),
            "width": "46%",
            "margin-left": "-23%",
            "border-width": setByH(0.01)
        });
        //animate the intros
        $(".intro1").animate({top: setByH(0.31)});
        $(".intro2").animate({top: setByH(0.4)});
        //set section2
        $(".meIcon").css({
            "width": setByH(0.15),
            "height": setByH(0.15),
            "margin-top": setByH(0.15)
        })
        $(".meIcon img").css({
            "width": setByH(0.15),
            "height": setByH(0.2)
        });
        $(".textDiv").css({
            "width": "50%",
            "margin-top": setByH(0.08),
            "padding": setByH(0.05),
            "border-top-width": setByH(0.005)
        });
        $(".typeP").css("font-size", setByH(0.031));
        //section3
        $(".rotateLink").css({
            "width": setByH(0.18),
            "height": setByH(0.18),
            "margin-top": setByH(0.18),
            "margin-bottom": setByH(0.18),
            "font-size": setByH(0.04)
        });
        $(".rotateLink p").css({
            "line-height": setByH(0.18)
        });
        //section4
        $("#showPic").css({
            "width": "65%",
            "height": "75%",
            "top": "10%"
        });
        $(".picItem").css("border-radius", "1%");
        //contact
        $("#contactBar").css({
            "width": setByH(0.05),
            "right": setByH(0.01)
        });
        $(".contact").css({
            "width": setByH(0.05),
            "height": setByH(0.05),
            "margin-bottom": setByH(0.03)
        });
        //get me pic
        if($(".meIcon img")[0].getAttribute('src') === ''){
            $(".meIcon img")[0].src = $(".meIcon img")[0].getAttribute('data-src');
        }
        //typing automatically
        if(typeHint == 0){
            typeHint++;
            //delay 1s
            setTimeout(function(){
                autoType();
            }, 2000);
        }
        //lazy loading
        if(imgItems[0].getAttribute('src') === '') {
            imgItems[0].src = imgItems[0].getAttribute('data-src');
        }
    }else{
        //for mobile device
        $("#navBar").remove();
        $("#contactBar").remove();
        //set intro's attrs
        $(".intro1").css({
            "top": setByH(0.15),
            "height": setByH(0.1),
            "line-height": setByH(0.1),
            "font-size": setByH(0.045),
            "width": setByW(0.7),
            "margin-left": setByW(-0.35)
        });
        $(".intro2").css({
            "top": setByH(0.7),
            "height": setByH(0.14),
            "line-height": setByH(0.14),
            "font-size": setByH(0.045),
            "width": setByW(0.9),
            "margin-left": setByW(-0.45),
            "border-width": setByH(0.008)
        });
        //animate the intros
        $(".intro1").animate({top: setByH(0.33)});
        $(".intro2").animate({top: setByH(0.4)});
        //down arrow
        $(".downArrow").css({
            "width": setByH(0.04),
            "height": setByH(0.05),
            "margin-left": setByH(-0.02)
        });
        //set section2
        $(".meIcon").css({
            "width": setByH(0.18),
            "height": setByH(0.18),
            "margin-top": setByH(0.08)
        })
        $(".meIcon img").css({
            "width": setByH(0.18),
            "height": setByH(0.24)
        });
        $(".textDiv").css({
            "width": "70%",
            "margin-top": setByH(0.05),
            "padding": setByH(0.015),
            "border-top-width": setByH(0.005)
        });
        $(".typeP").css("font-size", setByH(0.031));
        //section3
        $(".rotateLink").css({
            "width": setByH(0.2),
            "height": setByH(0.2),
            "margin-top": setByH(0.2),
            "margin-bottom": setByH(0.2),
            "font-size": setByH(0.04)
        });
        $(".rotateLink p").css({
            "line-height": setByH(0.2)
        });

        $("#showPic").css({
            "width": setByW(1),
            "height": setByH(0.5),
            "top": setByH(0.1)
        });
        $(".arrow").remove();
        var swipeHint = document.createElement("p");
        $(swipeHint).text("[ Swipe on photo to see more ]");
        $(swipeHint).css({
            "text-align": "center",
            "color": "white",
            "font-size": setByH(0.02)
        });
        swipeHint.id = "swipeHint";
        $("#showPic").append(swipeHint);
        $("#contactDetail").css({
            "bottom": setByH(0.2),
            "left": setByW(-0.3),
            "width": setByW(0.5),
            "height": setByW(0.1)
        });
        $("#contactDetail a").css({
            "width": setByW(0.07),
            "height": setByW(0.07),
            "margin-left": setByW(0.01),
            "display": "inline-block",
            "background-size": "cover"
        });
        $("#contactHint").css({
            "bottom": setByH(0.2),
            "width": setByW(0.07),
            "right": "0",
            "height": setByW(0.1)
        });
        $("#contactHint span").css({
            "width": setByW(0.07),
            "height": setByW(0.07),
            "display": "inline-block",
            "background-size": "cover"
        })
        $(".closeContact").hide();
        var openTar = $(".openContact")[0];
        var openCon = new Hammer(openTar);
        openCon.on("tap", function(){
            $(openTar).hide();
            $(closeTar).show();
            $("#contactDetail").animate({"left": "0"});
        });
        var closeTar = $(".closeContact")[0];
        var closeCon = new Hammer(closeTar);
        closeCon.on("tap", function(){
            $("#contactDetail").animate({"left": setByW(-0.3)});
            $(closeTar).hide();
            $(openTar).show();
        });

        var target = $("body")[0];
        var mobile = new Hammer(target);
        mobile.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
        mobile.on("swipeup", function(){
            if(index != (secLen-1)){
                toDown();
            }
        });
        mobile.on("swipedown", function(){
            if(index != 0){
                toUp();
            }
        });
    }
    
    //when swipeHint exist, delete it when swipe occurred
    function checkHint(){
        $("#swipeHint").remove();
    } 
    //change img
    var changeImg = function(index){
        for(var i=0; i<imgItems.length; i++){
            $(imgItems[i]).hide();
        }
        if(imgItems[index].getAttribute('src') === ""){
            imgItems[index].src = imgItems[index].getAttribute('data-src');
        }
        $(imgItems[index]).show();
    }
    var showPicTarget = document.getElementById("showPic");
    var picG = new Hammer(showPicTarget);
    picG.on("swipeleft",function(){
        checkHint();
        toLeft();
    });
    //pic change to left
    function toLeft(){
        imgIndex--;
        if(imgIndex == -1){
            imgIndex = imgItems.length-1;
        }
        changeImg(imgIndex);
    }
    //pic change to right
    function toRight(){
        imgIndex++;
        if(imgIndex == imgItems.length){
            imgIndex = 0;
        }
        changeImg(imgIndex);
    }
    picG.on("swiperight",function(){
        checkHint();
        toRight();
    });
   
    $(".leftArrow").click(function(){
        toLeft();
    });
    $(".rightArrow").click(function(){
        toRight();
    });
    //set value function
    function setByH(x){
        return h*x + 'px';
    }
    function setByW(x){
        return w*x + 'px';
    }
    var sentences = "As a highly-motivated, enthusiastic and responsible person who had 3 years’ web development experience, I love to study new technologies, and I am keen on taking challenges. With excellent communication skills, I can shorten the development time by 20% with teammates. Always be the active and useful person in company.";
    var len = sentences.length;
    var end = 0;
    var tempSen = '';
    var autoType = function(){  
        tempSen = sentences.substring(0, end);
        $("#typing").html(tempSen);
        if(end == len){
            setTimeout(function(){
            $(".tail").remove();
            },1500)
        }else{
            end++;
            setTimeout(autoType, 100)
        }
    }
    //repaint navBar
    function repaint(index, direction){
        //down
        if(direction){
            var notCur = $("canvas")[index-1].getContext("2d"); 
        }else{
        //up    
            var notCur = $("canvas")[index+1].getContext("2d");
        }
        var cur = $("canvas")[index].getContext("2d");
        notCur.clearRect(0,0,300,300);
        cur.clearRect(0,0,300,300);
        notCur.lineWidth = 5;
        notCur.strokeStyle = "white";
        notCur.beginPath();
        notCur.arc(100,50,20,0,2*Math.PI);
        notCur.stroke();
        cur.fillStyle = "white";
        cur.beginPath();
        cur.arc(100,50,25,0,2*Math.PI);
        cur.fill();
    }
    //toUp change section
    function toUp(){
        index--;
        startTop = startTop + h;
        var reTop = startTop + 'px';
        //change section
        $("#container").animate({top: reTop}, function(){
            if(index == 0){
                $(".intro1").animate({top: setByH(0.33)});
                $(".intro2").animate({top: setByH(0.4)});
            }    
        });
    }
    //toDown change section
    function toDown(){
        index++;
        startTop = startTop - h;
        var reTop = startTop + 'px';
        //change section
        $("#container").animate({top: reTop}, function(){
            if(index == 1){
                //reset intros
                $(".intro1").css("top", setByH(0.2));
                $(".intro2").css("top", setByH(0.7));
                //get me pic
                if($(".meIcon img")[0].getAttribute('src') === ''){
                    $(".meIcon img")[0].src = $(".meIcon img")[0].getAttribute('data-src');
                }
                //typing automatically
                if(typeHint == 0){
                    typeHint++;
                    //delay 1s
                    setTimeout(function(){
                        autoType();
                    }, 1000);
                }
            }
            if(index == 3){
                //lazy loading
                if(imgItems[0].getAttribute('src') === '') {
                    imgItems[0].src = imgItems[0].getAttribute('data-src');
                }
            }
        });
    }
})