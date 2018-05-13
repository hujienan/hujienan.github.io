// window.onload = init;
var isPlay = false;

$("body").click(function(){
	if(!isPlay){
		isPlay = !isPlay;
		init();
	}
})
function init(){
	var boy = BoyWalk();
	var girl = boy.girl;
	var container = $("#content");
	var swipe = new Swipe(container);
	var snow = new Snow(); 
	// 音乐配置
    var audioConfig = {
        enable: true, 
        playURL: './Assets/happy.wav', // 正常播放地址
        cycleURL: './Assets/circulation.wav' // 正常循环播放地址
    };
    function Html5Audio(url, isloop){
    	var audio = new Audio(url);
    	audio.autoPlay = true;
    	audio.loop = isloop || false;
    	audio.play();
    	return {
    		end : function(callback){
    			audio.addEventListener('ended',function(){
    				callback();
    			}, false);
    		}
    	}
    }
	var visualHeight = container.height();
	var visualWidth = container.width();
	function scrollTo(time, proportionX) {
		var distX = container.width() * proportionX;
        swipe.scrollTo(distX, time);
    }
	
	var bird = {
			elem: $('.bird'),
	fly: function(){
		this.elem.addClass('birdFly');
		this.elem.transition({right: container.width()}, 15000, 'linear');
	}
	}
	
	// 动画结束事件
    var animationEnd = (function() {
        var explorer = navigator.userAgent;
        if (~explorer.indexOf('WebKit')) {
            return 'webkitAnimationEnd';
        }
        return 'animationend';
    })();
	
	
	
	var logo = {
	        elem: $('.logo'),
	        run: function() {
	            this.elem.addClass('logolightSpeedIn')
	                .on(animationEnd, function() {
	                    $(this).addClass('logoshake').off();
	                });
	        }
	    };
	
        $("#sun").addClass('rotation');
        $(".cloud:first").addClass('cloud1Anim');
        $(".cloud:last").addClass('cloud2Anim');
        var audio1 = Html5Audio(audioConfig.playURL);
        audio1.end(function(){
        	Html5Audio(audioConfig.cycleURL, true);
        })
		
		boy.walkTo(2000,0.5)
		.then(function(){
			 scrollTo(5000, 1);
			 bird.fly();
		})
		
		
		.then(function(){
			return boy.walkTo(5000,0.5);
		})
		
		.then(function(){
			boy.stopWalk();
		})
		
		.then(function(){
			return openDoor();
		})
		.then(function() {
            lamp.bright()
        })
        .then(function() {
            return boy.toShop(2000)
        })
        .then(function(){
        	return boy.takeFlower();
        })
        .then(function() {
            return boy.outShop(2000)
        })
        .then(function(){
        	return closeDoor();
        })
        .then(function() {
            lamp.dark();
           
        })
        .then(function(){
        	scrollTo(5000, 2);
        })
        .then(function(){
        	return boy.walkTo(5000, 0.15)
        	
        })
        .then(function(){
        	return boy.walkTo(2000, 0.25, (girl.getOffset().top ) / visualHeight);
        })
        .then(function(){
        	var boyWidth = $("#boy").width();
        	var girlLeft = girl.getOffset().left;
        	var pro = ( girlLeft - boyWidth)/visualWidth;        	
        	return boy.walkTo(2500, pro);
        	
        })
        .then(function(){
        	boy.restore();
        })
        .then(function() {
            var d =  $.Deferred();   
        	setTimeout(function() {
                    girl.rotate();
                    boy.rotate(function() {
                        snow.snowflake()
                        d.resolve();
                    });
                }, 1000);
        	return d;
            })
	
}

function doorAction(left, right, time){
	var $door = $(".door");
	var doorLeft = $('.door-left');
    var doorRight = $('.door-right');
    var defer = $.Deferred();
    var count = 2;
    var complete = function(){
    	if(count == 1){
    		defer.resolve();
    		return;
    	}
    	count--;
    }
    doorLeft.transition({
        'left': left
    }, time, complete);
    doorRight.transition({
        'left': right
        }, time, complete);
    return defer;
}

function openDoor(){
	return doorAction('-50%','100%', 2000);
}
function closeDoor(){
	return doorAction('0%','50%', 2000);
}

$('button:eq(2)').click(function(){
	openDoor().then(
	function(){
		lamp.bright();
	}		
	);
});

$('button:eq(3)').click(function(){
	closeDoor().then(
		function(){
			 lamp.dark();
		}
	);
});

var lamp = {
	elem: $('.b_background'),	
	bright: function(){
		this.elem.addClass('lamp-bright');
	},
	dark: function(){
		this.elem.removeClass('lamp-bright');
	}
}




