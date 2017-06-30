//全国团购
var $country_li=$("li",$(".country"));
$country_li.hover(function(){
	$(this).css({"borderBottom":"2px solid #cc3300"});
	
},function(){
	$(this).css({"borderBottom":"1px solid #eeeeee"});
})