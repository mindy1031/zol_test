//banner 二级菜单
var $border_top_bot=$(".border_top_bot");
var $category_menu_content=$(".category_menu_content");
var $border_two_menu_index=0;
$border_top_bot.hover(function(){
	$border_two_menu_index=$(this).index();
	$(this).addClass("first").siblings().removeClass("first");
	$category_menu_content.eq($border_two_menu_index).addClass("first").siblings().removeClass("first");
},function(){
	$(this).removeClass("first");
	$category_menu_content.eq($border_two_menu_index).removeClass("first");
})