//吸顶盒
var $zstab=$(".zs-tab")
var $zstabTop=2000;
var $zsbuybtn=$(".zs-buy-btn");
$(window).scroll(function(e){
	e=e||event;
	var scroll=document.body.scrollTop||document.documentElement.scrollTop;
	if(scroll>=$zstabTop){
		$zstab.addClass("fixed");
		$zsbuybtn.css({"display":"block"});
	}else if(scroll<=$zstabTop){
		$zstab.removeClass("fixed");
		$zsbuybtn.css({"display":"none"})
	}
})