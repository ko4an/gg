$(document).ready(function(){
	var t=60;
	var i=0;
	$(".start").click(function(){
        $(".ball1").css({"display":"block"})
	});
    $(".ball1").click(function(){
    	$(".ball1").css({"display":"none"})
        $(".ball").css({"display":"block"})
    	setInterval(function() {
    		if(t>1){
    			t=t-1;
    			$(".ttimer").html(t)
    		}
    		else {
    		    $(".ttimer").html("STOP")	
    		}
    	},1000);
    	
    	});
    	$(".ball").click(function(){
    	var top=Math.random()*(597-150)+150;
    	var left=Math.random()*(1174-728)+728;
    	   i=i+1;
    	setTimeout(function() {
    		$(".ttime").html(i)
            },60000);
    	$(".ball").css({"top":top});
    	$(".ball").css({"left":left})
    });
    });
