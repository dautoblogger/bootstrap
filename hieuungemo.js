var x = 250;
var i = -20;var aa = "inset";
function abc()
{i += 20;
 if(i<50)aa="dotted";else if(i<100)aa="dotted";else if(i<150)aa = "inset";else if(i<220)aa="dotted";else if(i<240)aa="inset";
 $('.some').append("<div style='border-style:"+aa+";height:"+Math.abs(i)+"px;width:"+Math.abs(i)+"px;top:"+(-i/14)+"px;left:"+(-i/2)+"px' class='box1' ></div>");
 if(i<=x)requestAnimationFrame(abc);
}$('body').onload(abc());