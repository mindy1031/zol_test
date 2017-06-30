//加入购物车
var $decrease=$(".zs_decrease");
var $increase=$(".zs_increase");
var $number=$("#zp_goods_number");
var $val=$number.val();
$decrease.click(function(){
	$val==1 || $val--;
	$number.val($val);
})
$increase.click(function(){
	$val==20 || $val++;
	$number.val($val);
})


var $store_buy=$(".store_buy");
var $zs_layer_box=$(".zs_layer_box");
var $zs_close=$(".zs_close");
$store_buy.click(function(){
	$zs_layer_box.css({"display":"block"});
})
$zs_close.click(function(){
	$zs_layer_box.css({"display":"none"});
})