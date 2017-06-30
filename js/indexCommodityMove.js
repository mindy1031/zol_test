//banner 商品触动
var $banr_cent_foot_img=$("img",$(".banr_cent_foot"));
$banr_cent_foot_img.hover(function(){
	$(this).animate({"marginRight":"6px"})
},function(){
	$(this).animate({"marginRight":"0"})
})