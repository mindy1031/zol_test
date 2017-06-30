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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

//banner 商品触动
var $banr_cent_foot_img=$("img",$(".banr_cent_foot"));
$banr_cent_foot_img.hover(function(){
	$(this).animate({"marginRight":"6px"})
},function(){
	$(this).animate({"marginRight":"0"})
})

/***/ }),
/* 2 */
/***/ (function(module, exports) {

//全国团购
var $country_li=$("li",$(".country"));
$country_li.hover(function(){
	$(this).css({"borderBottom":"2px solid #cc3300"});
	
},function(){
	$(this).css({"borderBottom":"1px solid #eeeeee"});
})

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

//logo地址
var $logo_local_hover=$(".logo_local_hover");
var $logo_local_ul=$(".logo_local_ul");
var $logo_h4=$(".logo_h4");
$logo_local_hover.hover(function(){
	$logo_h4.css({
		"background":"#fff",
        "border":"1px solid #ccc",
        "borderBottom":0
	});
	$logo_local_ul.css({"display":"block"});
},function(){
	$logo_h4.css({
		"background":"#fff",
        "border":"1px solid #fff",
        "borderBottom":0
	});
	$logo_local_ul.css({"display":"none"});
})

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var changes=__webpack_require__(11);
var time=__webpack_require__(12);
var banner=__webpack_require__(10);
var tab=__webpack_require__(15);
var call=__webpack_require__(9);
var show=__webpack_require__(14);

//banner切换
banner().bnr($(".banner_imgs"),$(".scroll_img"),$("#banner_left_bnt"),$("#banner_right_bnt"),$("span",$(".banner_point")));
banner().bnr($(".f1_imgs"),$(".f1_img"),$(".f1_left"),$(".f1_right"),$("span",$(".f1_point")));
banner().bnr($(".f2_imgs"),$(".f2_img"),$(".f2_left"),$(".f2_right"),$("span",$(".f2_point")));
banner().bnr($(".f3_imgs"),$(".f3_img"),$(".f3_left"),$(".f3_right"),$("span",$(".f3_point")));

//1f边框变色
changes().change_border_color($("a",$(".main_1F_list")),0,"#cc3300","#eeeeee");
changes().change_border_color($("li",$(".hot_ul")),0,"#cc3300","#eeeeee");
changes().change_border_color($("li",$(".main_foot_ul")),1,"#eeeeee","#ffffff");
changes().change_border_color($("li",$(".brands-list")),1,"#eeeeee","#ffffff");

//切换1f-3f的title详情
tab().title($("a",$(".type1")),$(".f1_li"));
tab().title($("a",$(".type2")),$(".f2_li"));
tab().title($("a",$(".type3")),$(".f3_li"));

//倒计时
var $last_time=$(".last_time");
var $hour=$(".hour",$last_time);
var $minute=$(".minute",$last_time);
var $ms=$(".ms",$last_time);
var oDate2 = new Date("2017/4/16 00:00:00");
time().times($hour,$minute,$ms,oDate2);

//top下拉框
show().hide($(".hover_box_phone"),$(".top_box_p"));
show().hide($(".hover_box_font"),$(".box_font_cont"));
show().hide($(".hover_box"),$(".top_qr_code"));

var $collBack=$(".collBack");
call().back($collBack);




/***/ }),
/* 8 */
/***/ (function(module, exports) {

$.ajax({
	url: "http://127.0.0.1/js-job-zol-2017-4-9/php/section.php",
	success: function(res){
		console.log(res)
		if (res!=0) {
			var $usernames=$(".usernames");
			var $out=$(".out");
			$usernames.html(res);
			$out.html("退出");
//			$(".myepet-content").show();
//			$(".username").html(res);
//			$(".newMess").show();
//			$(".unlogin").html(res);
//			$(".logout").children("a").html("[退出]").attr("href","./logout.php");
		}
	}
})


/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

//banner切换封装
module.exports = function(){
	function bnr(father,img,left,right,point){
		var $father=father;
		var $width=$father.width();
		var $point=point;
		var $img=img;
		var $img_s=$("img",$img);
		var $left=left;
		var $right=right;
		var $point_index=0;
		var $img_index=0;
		var onOff=true;
		var timer=null;
		clearInterval(timer);
		$father.hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(timer_off,5000);
		})
		timer=setInterval(timer_off,5000);
		$point.mouseover(function(){
			if(onOff){
				onOff=false;
				$img_index=$(this).index();
				$point_index=$(this).index();
				banr_move_img();
			}
		})
		$right.click(function(){
			timer_off();
		})
		$left.click(function(){
			if(onOff){
				onOff=false;
				$img_index--;
				if($img_index<0){
					$img_index=$img_s.length-2;
					$img.css({"left":(($img_index)+1)*-$width});
				}
				$point_index--;
				if($point_index<0){
					$point_index=$point.length-1;
				}
				banr_move_img();
			}
		})
		function banr_btn_img(){
			$img_index++;
			if($img_index>$img_s.length-1){
				$img_index=1;
				$img.css({"left":0});
			}
			$point_index++;
			if($point_index>$point.length-1){
				$point_index=0;
			}
			banr_move_img();
		}
		function banr_move_img(){
			$point.eq($point_index).addClass("first").siblings().removeClass("first");
			$img.animate({"left":$img_index*-$width},1000,function(){
				onOff=true;
			});
		}
		function timer_off(){
			if(onOff){
				onOff=false;
				banr_btn_img();
			}
		}
	}
	return {
		"bnr":bnr
	}
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports =function(){
	function change_border_color(obj,val,curcolor,color2){
		var $obj=obj;
		if(val){
			$obj.hover(function(){
				$(this).css({"borderColor":curcolor});
			},function(){
				$(this).css({"borderColor":color2});
			})
		}else{
			$obj.hover(function(){
				$(this).css({"borderColor":curcolor,"z-index":10});
			},function(){
				$(this).css({"borderColor":color2,"z-index":1});
			})
		}
	}
	return {
		"change_border_color":change_border_color
	}
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports =function(){
	function times(hour,minute,ms,userDefinedDate){
		var last_time_timer=null;
		clearInterval(last_time_timer);
		last_time_timer=setInterval(last_time,1000);
		function last_time(){
			var oDate =userDefinedDate.getTime()-(new Date());
			hour.text(last_time_number(parseInt(oDate/1000/60/60)))
			minute.text(last_time_number(parseInt(oDate/1000/60%60)))
			ms.text(last_time_number(parseInt(oDate/1000%60)))
			if(oDate<0){
				hour.text("00");
				minute.text("00");
				ms.text("00");
				clearInterval(last_time_timer);
			}
		}
		function last_time_number(t){
			if(t<10){
				t="0"+t;
			}
			return t;
		}
	}
	return {
		"times":times,
	}
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(0);
__webpack_require__(4);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);



/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

module.exports =function(){
	function title(obj,obj2){
		var $obj=obj;
		var $obj2=obj2;
		$obj.mouseover(function(){
			$(this).addClass("first").siblings().removeClass("first");
			$obj2.eq($(this).index()).addClass("first").siblings().removeClass("first");
		})
	}
	return {
		"title":title
	}
}

/***/ })
/******/ ]);