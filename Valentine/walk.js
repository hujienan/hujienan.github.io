var animationEnd = (function() {
    var explorer = navigator.userAgent
    if (~explorer.indexOf('WebKit')) {
        return 'webkitAnimationEnd'
    }
    return 'animationend';
})()
function BoyWalk() {
	var container = $("#content")
	var swipe = new Swipe(container);
	var visualWidth = container.width();
	var visualHeight = container.height();

	function getValue(classname) {
		var $elem = $('' + classname);
		return {
			height : $elem.height(),
			top : $elem.position().top
		}
	}
	var pathY = function() {
		var data = getValue('.a_background_middle');
		return data.top + data.height / 2;
	}()
	var $boy = $("#boy")
	var boyHeight = $boy.height();
	$('#boy').css({
		top : pathY - boyHeight + 25
	});
	function pauseWalk(){
		$boy.addClass('pauseWalk');
	}
	function restoreWalk() {
		$boy.removeClass('pauseWalk');
	}
	function slowWalk() {
		$boy.addClass('slowWalk');
	}
	function calculateDist(direction, proportion) {
		return (direction == "x" ? visualWidth : visualHeight) * proportion;
	}
	function startRun(options, runTime) {
		var dfdPlay = $.Deferred();
		restoreWalk();
		$boy.transition(options, runTime, 'linear', function() {
			dfdPlay.resolve();
		});
		return dfdPlay;
	}
	function walkRun(time, dist, distY) {
		time = time || 3000;
		slowWalk();
		var d1 = startRun({
			'left' : dist + 'px',
			'top' : distY ? (distY + 'px') : undefined
		}, time);
		return d1;
	}
	function walkToShop(runTime) {
		var defer = $.Deferred();
		var doorObj = $('.door');
		var offsetDoor = doorObj.offset();
		var doorOffsetLeft = offsetDoor.left;
		var offsetBoy = $boy.offset();
		var boyOffetLeft = offsetBoy.left;
		var instanceX = (doorOffsetLeft + doorObj.width() / 2)
				- (boyOffetLeft + $boy.width() / 2);
		var walkPlay = startRun({
			transform : 'translateX(' + instanceX + 'px), scale(0.3, 0.3)',
			opcity : 0.1
		}, 2000);
		walkPlay.done(function() {
			$boy.css({
				opacity : 0,
			})
			defer.resolve();
		});
		return defer;
	}
	var instanceX;

	function walkOutShop(runTime){
	var defer = $.Deferred();
	restoreWalk();
	var walkPlay = startRun({
		transform: 'scale(1,1)',
	    opacity: 1
	    }, runTime);
    walkPlay.done(function() {
    defer.resolve();
    });
    return defer; 
	}

	function takeFlower(){
		var defer = $.Deferred();
		setTimeout(function(){
			$boy.addClass('slowFlowerWalk');
			defer.resolve();
		}, 1000);
		return defer;
	}

	var bridgeY = (function(){
		var data = getValue('.c_background_middle');
		return data.top;
	})();
	var girl = {
		elem : $('.girl'),
		getHeight: function(){
			return this.elem.height();
		},
		setOffset: function(){
			this.elem.css({
				left: visualWidth / 2,
				top:bridgeY - this.getHeight()
			})
		},
		getOffset : function(){
			return this.elem.offset();//jquery的方法，返回在document文档中的位置，返回的是top和left
		},
		getWidth: function(){
			return this.elem.width();
		},
		// 转身动作
        rotate: function() {
            this.elem.addClass('girl-rotate')}
	}
	girl.setOffset();


return {
	walkTo : function(time, proportionX, proportionY) {
		var distX = calculateDist('x', proportionX);
		var distY = calculateDist('y', proportionY);
		return walkRun(time, distX, distY);
	},
	stopWalk : function() {
		pauseWalk();
	},
	setColoer : function(value) {
		$boy.css('background-color', value)
	},
	toShop : function() {
		return walkToShop.apply(null, arguments);
	},
	outShop : function() {
		return walkOutShop.apply(null, arguments);
	},
	takeFlower : function(){
		return takeFlower();
	},
	restore : function(){
		this.stopWalk();
		$boy.removeClass('slowWalk slowFlolerWalk').addClass('boyOriginal');
	},
	rotate : function(callback){
		 restoreWalk();
         $boy.addClass('boy-rotate');
         if(callback){
        	 $boy.on(animationEnd, function() {
                 callback();
                 $(this).off();
             }) 
         }
	},
	girl : girl
}
}