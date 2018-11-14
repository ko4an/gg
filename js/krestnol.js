var i=-1;
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    f=0;
    g=0;
    h=0;
    j=0;
$(document).ready(function(){
	$(".kv1").click(function(){
		
		if (i==0 || i==2 || i==4 || i==6 || i==8){
			$(".in1").removeClass("in1").addClass("i1");
			i=i+1
			a=a+1;
			console.log(a)
		}
		else {
            $(".ik1").removeClass("ik1").addClass("i1");
            i=i+1
            a=a+2;
            console.log(a)
		}
	});
	$(".kv2").click(function(){
		
		if (i==0 || i==2 || i==4 || i==6 || i==8){
			$(".in2").removeClass("in2").addClass("i1");
			i=i+1
			b=b+1;
			console.log(b)
		}
		else {
            $(".ik2").removeClass("ik2").addClass("i1");
            i=i+1
            b=b+2;
            console.log(b)
		}
	});
	$(".kv3").click(function(){
		
		if (i==0 || i==2 || i==4 || i==6 || i==8){
			$(".in3").removeClass("in3").addClass("i1");
			i=i+1
			c=c+1;
			console.log(c)
		}
		else {
            $(".ik3").removeClass("ik3").addClass("i1");
            i=i+1
            c=c+2;
            console.log(c)
		}
	});
	$(".kv4").click(function(){
		
		if (i==0 || i==2 || i==4 || i==6 || i==8){
			$(".in4").removeClass("in4").addClass("i1");
			i=i+1
			d=d+1;
			console.log(d)
		}
		else {
            $(".ik4").removeClass("ik4").addClass("i1");
            i=i+1
            d=d+2;
            console.log(d)
		}
	});
	$(".kv5").click(function(){
		
		if (i==0 || i==2 || i==4 || i==6 || i==8){
			$(".in5").removeClass("in5").addClass("i1");
			i=i+1
			e=e+1;
			console.log(e)
		}
		else {
            $(".ik5").removeClass("ik5").addClass("i1");
            i=i+1
            e=e+2;
            console.log(e)
		}
	});
	$(".kv6").click(function(){
		
		if (i==0 || i==2 || i==4 || i==6 || i==8){
			$(".in6").removeClass("in6").addClass("i1");
			i=i+1
			f=f+1;
			console.log(f)
		}
		else {
            $(".ik6").removeClass("ik6").addClass("i1");
            i=i+1
            f=f+2;
            console.log(f)
		}
		
	});
	$(".kv7").click(function(){
		
		if (i==0 || i==2 || i==4 || i==6 || i==8){
			$(".in7").removeClass("in7").addClass("i1");
			i=i+1
			g=g+1;
			console.log(g)
		}
		else {
            $(".ik7").removeClass("ik7").addClass("i1");
            i=i+1
            g=g+2;
            console.log(g)
		}
	});
	$(".kv8").click(function(){
		
		if (i==0 || i==2 || i==4 || i==6 || i==8){
			$(".in8").removeClass("in8").addClass("i1");
			i=i+1
			h=h+1;
			console.log(h)
		}
		else {
            $(".ik8").removeClass("ik8").addClass("i1");
            i=i+1
            h=h+2;
            console.log(h)
		}
	});
	$(".kv9").click(function(){
		
		if (i==0 || i==2 || i==4 || i==6 || i==8){
			$(".in9").removeClass("in9").addClass("i1");
			i=i+1
			j=j+1;
			console.log(j)
		}
		else {
            $(".ik9").removeClass("ik9").addClass("i1");
            i=i+1
            j=j+2;
            console.log(j)
		}
	});
	$(".kv1, .kv2, .kv3, .kv4, .kv5, .kv6, .kv7, .kv8, .kv9").click(function(){
		if(a==1 && b==1 && c==1){
			console.log("уху");
		}
		else if(c==1 && f==1 && j==1){
			console.log("уху");
		}
		else if(a==1 && d==1 && g==1){
			console.log("уху");
		}
		else if(a==1 && e==1 && j==1){
			console.log("уху");
		}
		else if(b==1 && e==1 && h==1){
			console.log("уху");
		}
		else if(c==1 && e==1 && g==1){
			console.log("уху");
		}
		else if(d==1 && e==1 && f==1){
			console.log("уху");
		}
		else if(g==1 && h==1 && j==1){
			console.log("уху");
		}
		});
	$(".kv1, .kv2, .kv3, .kv4, .kv5, .kv6, .kv7, .kv8, .kv9").click(function(){
		if(a==2 && b==2 && c==2){
			console.log("уху1");
		}
		else if(c==2 && f==2 && j==2){
			console.log("уху1");
		}
		else if(a==2 && d==2 && g==2){
			console.log("уху1");
		}
		else if(a==2 && e==2 && j==2){
			console.log("уху1");
		}
		else if(b==2 && e==2 && h==2){
			console.log("уху1");
		}
		else if(c==2 && e==2 && g==2){
			console.log("уху1");
		}
		else if(d==2 && e==2 && f==2){
			console.log("уху1");
		}
		else if(g==2 && h==2 && j==2){
			console.log("уху1");
		}
		})
});
	/*$(".kv1, .kv2, .kv3, .kv4, .kv5, .kv6, .kv7, .kv8, .kv9").click(function(){
		if(a,b,c==1 || c,f,j==1 || a,d,g==1 || a,e,j==1 || b,e,h==1 || c,e,g==1 || d,e,f==1 || g,h,j==1 ){
			console.log("уху");
		}
		else if(a,b,c==2 || c,f,j==2 || a,d,g==2 || a,e,j==2 || b,e,h==2 || c,e,g==2 || d,e,f==2 || g,h,j==2){
			console.log("уху22");
		}
	});
});
$(".kv1, .kv2, .kv3, .kv4, .kv5, .kv6, .kv7, .kv8, .kv9").click(function(){
			if(a==1 && b==1 && c==1){
				console.log("уху");
			}
			else if(c==1 && f==1 && j==1){
				console.log("уху");
			}
			else if(a==1 && d==1 && g==1){
				console.log("уху");
			}
		})
*/
//((a=1 && b=1 && c=1)||(a=1 && d=1 && g=1)||(a=1 && d=1 && g=1)||(a=1 && e=1 && j=1)||(b=1 && e=1 && h=1)||(c=1 && e=1 && g=1)||(d=1 && e=1 && f=1)||(g=1 && h=1 && j=1))//
