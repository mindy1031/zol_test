//fixed头
var $fixed_logo_local_hover=$(".fixed_logo_local_hover");
var $fixed_logo_local_ul=$(".fixed_logo_local_ul");
var $fixed_top_logo_h4=$(".fixed_top_logo_h4");
var $fixed_top_box_triangle=$(".fixed_top_box_triangle");
$fixed_logo_local_hover.hover(function(){
	$fixed_top_logo_h4.css({"borderColor":"#eee"})
	$fixed_logo_local_ul.css({"display":"block"});
	$fixed_top_box_triangle.css({"transform":"rotateZ(180deg)"})
},function(){
	$fixed_top_logo_h4.css({"borderColor":"#fff","borderLeftColor":"#eee"})
	$fixed_logo_local_ul.css({"display":"none"})
	$fixed_top_box_triangle.css({"transform":"rotateZ(0deg)"})
})