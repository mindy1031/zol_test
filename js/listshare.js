//top下拉框
var className =require("./addclassfn");
var show=require("./showHidefn");
var $guanzhu=$(".guanzhu");
var $code=$(".code");
var $remind=$(".remind");
var $email_box=$(".email-box");
$guanzhu.hover(function(){
	$("i",$guanzhu).addClass("curr");
	$code.css({"display":"block"})
},function(){
	$("i",$guanzhu).removeClass("curr");
	$code.css({"display":"none"})
})
$remind.hover(function(){
	$("i",$remind).addClass("curr");
	$email_box.css({"display":"block"})
},function(){
	$("i",$remind).removeClass("curr");
	$email_box.css({"display":"none"})
})



var banner=require("./bannerfn");
//banner切换
banner().bnr($(".banner_imgs"),$(".scroll_img"),$("#banner_left_bnt"),$("#banner_right_bnt"),$("span",$(".banner_point")));


