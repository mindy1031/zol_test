/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports =function(){
	function hide(obj1,obj2){
		var object1=obj1;
		var object2=obj2;
		object1.hover(function(){
			object2.css({"display":"block"});
		},function(){
			object2.css({"display":"none"});
		})
	}
	return {
		"hide":hide
	}
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var show=__webpack_require__(0);
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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

//放大镜
var $main_inner=$(".main_inner");
var $innpic=$(".inn_pic");
var $innpicimg=$(".inn_pic img");
var $smalllist=$(".inn_small ul li");
var $innshade=$(".inn_shade");
var $shade=$(".shade");
var $innbig=$(".inn_big");
var $innbigimg=$(".inn_big img");
var $glass_index=0;
$smalllist.click(function(){
	var $small_img_index=$(this).index();
	$(this).addClass("pic_click").siblings().removeClass("pic_click");
	$innpicimg.eq($small_img_index).addClass("picfirst").siblings().removeClass("picfirst");
	$innbigimg.eq($small_img_index).addClass("big_first").siblings().removeClass("big_first");
	$glass_index=$small_img_index;
})
$innpic.hover(function(){
	$innshade.css({"display":"block"});
	$innbig.css({"display":"block"});
},function(){
	$innshade.css({"display":"none"});
	$innbig.css({"display":"none"});
})

$innpic.mousemove(function(e){
	e=e||event;
	var scY=document.body.scrollTop || document.documentElement.scrollTop;
	var cx=e.clientX-$main_inner.offset().left-$shade.width()/2;
	var cy=e.clientY-$main_inner.offset().top+scY-$shade.height()/2;
	var ow=$innshade.width()-$shade.width();
	var oh=$innshade.height()-$shade.height();
	if(cx<=0){
		cx=0;
	}else if(cx>=ow){
		cx=ow;
	}
	if(cy<=0){
		cy=0;
	}else if(cy>=oh){
		cy=oh;
	}
	var proX=cx/ow;
	var proY=cy/oh;
	$shade.css({"left":cx});
	$shade.css({"top":cy});
	$innbigimg.eq($glass_index).css({"marginLeft":proX*($innbig.width()-$innbigimg.width())});
	$innbigimg.eq($glass_index).css({"marginTop":proY*($innbig.height()-$innbigimg.height())});
})
$innpic.mouseout(function(){
	$shade.mousemove=null;
})

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var $unfold=$(".unfold");
$unfold.click(function(){
	$(this).children().eq(1).toggle()
})












/***/ }),
/* 5 */
/***/ (function(module, exports) {

//吸顶盒
var $zstab=$(".zs-tab")
var $zstabTop=2000;
var $zsbuybtn=$(".zs-buy-btn");
$(window).scroll(function(e){
	e=e||event;
	var scroll=document.body.scrollTop||document.documentElement.scrollTop;
	if(scroll>=$zstabTop){
		$zstab.addClass("fixed");
		$zsbuybtn.css({"display":"block"});
	}else if(scroll<=$zstabTop){
		$zstab.removeClass("fixed");
		$zsbuybtn.css({"display":"none"})
	}
})

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var show=__webpack_require__(0);

//top下拉框
show().hide($(".hover_box_phone"),$(".top_box_p"));
show().hide($(".hover_box_font"),$(".box_font_cont"));
show().hide($(".hover_box"),$(".top_qr_code"));

//二级菜单  显隐
var $banner_abs=$(".banner_abs");
var $banner_left=$(".banner_left");
show().hide($banner_abs,$banner_left);

//选择手机颜色
var className=__webpack_require__(9);
var $zs_options_list=$(".zs_options li");
className().addclassfn($zs_options_list,"li_cur");

//返回顶部
var call=__webpack_require__(8);
var $collBack=$(".collBack");
call().back($collBack);



/***/ }),
/* 7 */
/***/ (function(module, exports) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

//返回顶部
module.exports = function(){
	function back(obj){
		var timer=null;
		clearInterval(timer);
		obj.click(function(){
			timer=setInterval(callBacks(),14);
			var $index=100;
			function callBacks(){
				document.body.scrollTop-=$index;
				if(document.body.scrollTop<=0){
					document.body.scrollTop=0;
					clearInterval(timer);
				}
			}
		})
	}
	return{
		"back":back
	}
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports =function(){
	function addclassfn(obj,classname){
		obj.click(function(){
			$(this).addClass(classname).siblings().removeClass(classname);
		})
	}
	return {
		"addclassfn":addclassfn
	}
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(4);
__webpack_require__(5);





/***/ })
/******/ ]);