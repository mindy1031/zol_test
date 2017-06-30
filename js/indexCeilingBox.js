//吸顶盒
var $scroll_main=$(".scroll_main");
var $fixed_top=$(".fixed_top");
var $mainHeight=$scroll_main.offset().top;
var scrollHeight=$mainHeight-$(window).height();
var docScrollHeight=0;
$(window).scroll(function(){
	docScrollHeight=document.body.scrollTop;
	if(docScrollHeight>=scrollHeight){
		$fixed_top.css({"display":"block"});
	}else{
		$fixed_top.css({"display":"none"});
	}
})