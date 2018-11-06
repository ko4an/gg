$(document).ready(function(){
	var t=60;
	var i=0;
	$(".start").click(function(){
			$(".ball1").css({"display":"block"})
			$(".time").css({"display":"block"})
			$(".timer").css({"display":"block"})
			$(".start").css({"display":"none"})
			setInterval(function() {
				$(".start").css({"display":"block"})
				$(".start").css({"right":"840px"})
				$(".start").css({"top":"350px"})
				$(".tstart").css({"margin":"5px"})
				$(".tstart").html("Restart")
           		$(".start").click(function(){
            	location.reload();
            	})
           	},62000);  
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
    			$(".ttimer").css({"font-size":"140%"})
    			$(".ttimer").css({"margin":"10px"})
    		    $(".ttimer").html("Time Out")	
    		}
    	},1000);
    });
    	$(".ball").click(function(){
    	var top=Math.random()*(446-0)+0;
    	var left=Math.random()*(446-0)+0;
    	    i=i+1;
    	setTimeout(function() {
    		$(".ttime").html(i)
    		$(".res").css({"display":"block"})
            },60000);
    	$(".ball").css({"top":top});
    	$(".ball").css({"left":left})
    	return;
    });
});
