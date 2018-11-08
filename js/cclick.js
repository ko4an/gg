$(document).ready(function(){
	var t=60;
	var i=0;
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    var f=0;
	$(".start").click(function(){
			$(".ball").css({"display":"block"})
			$(".time").css({"display":"block"})
			$(".timer").css({"display":"block"})
			$(".start").css({"display":"none"})			  
	});
    $(".ball").click(function(){
    	$(".ball").css({"display":"none"})
        $(".ball1").css({"top":Math.random()*(446-0)+0});
        $(".ball1").css({"left":Math.random()*(446-0)+0});
        $(".ball2").css({"top":Math.random()*(446-0)+0});
        $(".ball2").css({"left":Math.random()*(446-0)+0});
        $(".ball3").css({"top":Math.random()*(446-0)+0});
        $(".ball3").css({"left":Math.random()*(446-0)+0});
        $(".ball4").css({"top":Math.random()*(446-0)+0});
        $(".ball4").css({"left":Math.random()*(446-0)+0});
        $(".ball5").css({"top":Math.random()*(446-0)+0});
        $(".ball5").css({"left":Math.random()*(446-0)+0});
        $(".ball1, .ball2, .ball3, .ball4, .ball5").css({"display":"block"})
            $(".ball1").click(function(){
                a++
                $(".ball1").css({"display":"none"})
                $(".ball1").css({"top":Math.random()*(446-0)+0});
                $(".ball1").css({"left":Math.random()*(446-0)+0});
                if(a==1 && b==1 && c==1 && d==1 && f==1){
                i++;
                t++;
                $(".ball1, .ball2, .ball3, .ball4, .ball5").css({"display":"block"})
                a=0;
                b=0;
                c=0;
                d=0;
                f=0;
            };
            });
            $(".ball2").click(function(){
                b++
                $(".ball2").css({"display":"none"})
                $(".ball2").css({"top":Math.random()*(446-0)+0});
                $(".ball2").css({"left":Math.random()*(446-0)+0});
                if(a==1 && b==1 && c==1 && d==1 && f==1){
                i++;
                t++;
                $(".ball1, .ball2, .ball3, .ball4, .ball5").css({"display":"block"})
                a=0;
                b=0;
                c=0;
                d=0;
                f=0;
            };
            });
            $(".ball3").click(function(){
                c++
                $(".ball3").css({"display":"none"})
                $(".ball3").css({"top":Math.random()*(446-0)+0});
                $(".ball3").css({"left":Math.random()*(446-0)+0});
                if(a==1 && b==1 && c==1 && d==1 && f==1){
                i++;
                t++;
                $(".ball1, .ball2, .ball3, .ball4, .ball5").css({"display":"block"})
                a=0;
                b=0;
                c=0;
                d=0;
                f=0;
            };
            });
            $(".ball4").click(function(){
                d++
                $(".ball4").css({"display":"none"})
                $(".ball4").css({"top":Math.random()*(446-0)+0});
                $(".ball4").css({"left":Math.random()*(446-0)+0});
                if(a==1 && b==1 && c==1 && d==1 && f==1){
                i++;
                t++;
                $(".ball1, .ball2, .ball3, .ball4, .ball5").css({"display":"block"})
                a=0;
                b=0;
                c=0;
                d=0;
                f=0;
            };
            });
            $(".ball5").click(function(){
                f++
                $(".ball5").css({"display":"none"})
                $(".ball5").css({"top":Math.random()*(446-0)+0});
                $(".ball5").css({"left":Math.random()*(446-0)+0});
                if(a==1 && b==1 && c==1 && d==1 && f==1){
                i++;
                t++;
                $(".ball1, .ball2, .ball3, .ball4, .ball5").css({"display":"block"})
                a=0;
                b=0;
                c=0;
                d=0;
                f=0;
            };
            });
           
        });
            setInterval(function() {
                if(t>1){
                    t=t-1;
                    $(".ttimer").html(t)
                }
                else {
                    $(".ttimer").css({"font-size":"140%"})
                    $(".ttimer").css({"margin":"10px"})
                    $(".ttimer").html("Time Out")
                    $(".res").css({"display":"block"})
                    $(".start").css({"display":"block"})
                    $(".start").css({"top":"350px"})
                    $(".tstart").css({"margin":"5px"})
                    $(".tstart").html("Restart")
                    $(".ttime").html(i)
                    $(".start").click(function(){
                    location.reload();
                    })
                }
            },1000);
        });






/*
setInterval(function() {
                $(".start").css({"display":"block"})
                $(".start").css({"top":"350px"})
                $(".tstart").css({"margin":"5px"})
                $(".tstart").html("Restart")
                $(".start").click(function(){
                location.reload();
                })
            },62000);




                    setTimeout(function() {
            $(".ttime").html(i)
            $(".res").css({"display":"block"})
            },60000);
*/