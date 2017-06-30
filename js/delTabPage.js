var show=require("./showHidefn");
//商品详情  点击切换
var $tab_change=$(".tab_change");
var $zs_parameter=$(".zs_parameter");
var $zs_service_guarantee=$(".zs_service_guarantee");
var $tab_change_ul_list=$(".det_list");
$tab_change_ul_list.click(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
})
$tab_change_ul_list.eq(0).click(function(){
	for(var i=0;i<$tab_change.length;i++){
		$tab_change.eq(i).css({"display":"block"});
	}
	$zs_parameter.css({"display":"none"});
	$zs_service_guarantee.css({"display":"none"});
})
$tab_change_ul_list.eq(1).click(function(){
	$zs_parameter.css({"display":"block"});
	for(var i=0;i<$tab_change.length;i++){
		$tab_change.eq(i).css({"display":"none"});
		$zs_service_guarantee.css({"display":"none"});
	}
})
$tab_change_ul_list.eq(2).click(function(){
	$zs_parameter.css({"display":"none"});
	for(var i=0;i<$tab_change.length;i++){
		$tab_change.eq(i).css({"display":"none"});
		$zs_service_guarantee.css({"display":"none"});
	}
	$tab_change.eq(1).css({"display":"block"});
})
$tab_change_ul_list.eq(3).click(function(){
	$zs_parameter.css({"display":"none"});
	$zs_service_guarantee.css({"display":"none"});
	for(var i=0;i<2;i++){
		$tab_change.eq(i).css({"display":"none"});
	}
	for(var i=2;i<$tab_change.length;i++){
		$tab_change.eq(i).css({"display":"block"});
	}
})
$tab_change_ul_list.eq(4).click(function(){
	$zs_parameter.css({"display":"none"});
	$zs_service_guarantee.css({"display":"none"});
	for(var i=0;i<3;i++){
		$tab_change.eq(i).css({"display":"none"});
	}
	for(var i=3;i<$tab_change.length;i++){
		$tab_change.eq(i).css({"display":"block"});
	}
})
$tab_change_ul_list.eq(5).click(function(){
	$zs_parameter.css({"display":"none"});
	$zs_service_guarantee.css({"display":"block"});
	for(var i=0;i<$tab_change.length;i++){
		$tab_change.eq(i).css({"display":"none"});
	}
})

var $side_right_list=$(".side_right_c a");
$side_right_list.eq(0).click(function(){
	for(var i=0;i<$tab_change.length;i++){
		$tab_change.eq(i).css({"display":"block"});
	}
	$zs_parameter.css({"display":"none"});
	$zs_service_guarantee.css({"display":"none"});
	$tab_change_ul_list.eq(0).addClass("cur").siblings().removeClass("cur");
});
$side_right_list.eq(1).click(function(){
	$zs_parameter.css({"display":"none"});
	$zs_service_guarantee.css({"display":"block"});
	for(var i=0;i<$tab_change.length;i++){
		$tab_change.eq(i).css({"display":"none"});
	}
	$tab_change_ul_list.eq(5).addClass("cur").siblings().removeClass("cur");
})

//滑过显示二维码
var $phonecode=$(".phone_purchase");
show().hide($phonecode,$(".code"));
