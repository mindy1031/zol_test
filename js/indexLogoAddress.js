//logo地址
var $logo_local_hover=$(".logo_local_hover");
var $logo_local_ul=$(".logo_local_ul");
var $logo_h4=$(".logo_h4");
$logo_local_hover.hover(function(){
	$logo_h4.css({
		"background":"#fff",
        "border":"1px solid #ccc",
        "borderBottom":0
	});
	$logo_local_ul.css({"display":"block"});
},function(){
	$logo_h4.css({
		"background":"#fff",
        "border":"1px solid #fff",
        "borderBottom":0
	});
	$logo_local_ul.css({"display":"none"});
})