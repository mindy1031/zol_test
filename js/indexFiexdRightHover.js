//右定位 鼠标滑过显示
var $fixed_right_top_li=$(".fixed_right_top li");
var $fixed_right_top_a=$(".fixed_right_top a");
var $fixed_right_top_hide=$(".fixed_right_top span");
var $fixed_right_ico_index=0;
$fixed_right_top_li.hover(function(){
	$fixed_right_ico_index=$(this).index();
		$fixed_right_top_a.eq($fixed_right_ico_index).addClass("fixed_color").siblings().removeClass("fixed_color");
		$fixed_right_top_hide.eq($fixed_right_ico_index).animate({"right":"37"},400);
	
},function(){
		$fixed_right_top_a.eq($fixed_right_ico_index).removeClass("fixed_color");
		$fixed_right_top_hide.eq($fixed_right_ico_index).animate({"right":"-100px"},10);
	
})