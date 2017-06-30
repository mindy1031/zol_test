//放大镜
var $main_inner=$(".main_inner");
var $innpic=$(".inn_pic");
var $innpicimg=$(".inn_pic img");
var $smalllist=$(".inn_small ul li");
var $innshade=$(".inn_shade");
var $shade=$(".shade");
var $innbig=$(".inn_big");
var $innbigimg=$(".inn_big img");
var $glass_index=0;
$smalllist.click(function(){
	var $small_img_index=$(this).index();
	$(this).addClass("pic_click").siblings().removeClass("pic_click");
	$innpicimg.eq($small_img_index).addClass("picfirst").siblings().removeClass("picfirst");
	$innbigimg.eq($small_img_index).addClass("big_first").siblings().removeClass("big_first");
	$glass_index=$small_img_index;
})
$innpic.hover(function(){
	$innshade.css({"display":"block"});
	$innbig.css({"display":"block"});
},function(){
	$innshade.css({"display":"none"});
	$innbig.css({"display":"none"});
})

$innpic.mousemove(function(e){
	e=e||event;
	var scY=document.body.scrollTop || document.documentElement.scrollTop;
	var cx=e.clientX-$main_inner.offset().left-$shade.width()/2;
	var cy=e.clientY-$main_inner.offset().top+scY-$shade.height()/2;
	var ow=$innshade.width()-$shade.width();
	var oh=$innshade.height()-$shade.height();
	if(cx<=0){
		cx=0;
	}else if(cx>=ow){
		cx=ow;
	}
	if(cy<=0){
		cy=0;
	}else if(cy>=oh){
		cy=oh;
	}
	var proX=cx/ow;
	var proY=cy/oh;
	$shade.css({"left":cx});
	$shade.css({"top":cy});
	$innbigimg.eq($glass_index).css({"marginLeft":proX*($innbig.width()-$innbigimg.width())});
	$innbigimg.eq($glass_index).css({"marginTop":proY*($innbig.height()-$innbigimg.height())});
})
$innpic.mouseout(function(){
	$shade.mousemove=null;
})