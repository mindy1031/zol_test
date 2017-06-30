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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

var list_timer=null;
var $goods_list=$(".goods li");
//clearTimeout(list_timer);
//list_timer=setTimeout(settime,1000);
//
//function settime(){
//	$.ajax({
//		url:"http://127.0.0.1/js-job-zol-2017-4-9/php/loading.php",
//		dataType:"json",
//		success:function(res){
//			console.log(res)
//			var str="";
//			for(var i=0;i<$goods_list.length;i++){
//				str="<div class='pic'>\
//						<img class='pic-img' src='"+res[i].img+"'/>\
//						<div class='show-time'>\
//							<div class='shadow'></div>\
//							<p class='time'>\
//	                            <span class='countdown'>剩余：<em class='hour'>3</em>天<em class='hour'>02</em>时<em class='minute'>53</em>分<em class='second'>32</em>秒</span>\
//	                        </p>\
//						</div>\
//					</div>\
//					<h4>\
//	                    <a href='detailpage.html'>"+res[i].title+"</a>\
//	                </h4>\
//	                <span class='msg'>"+res[i].remark+"</span>\
//	                <div class='price-box clear'>\
//	                	<span class='now-price l'>"+res[i].price+"</span>\
//	                	<div class='price-info l'>\
//	                        <p class='old-price'>"+res[i].ori_price+"</p>\
//	                        <span class='discount'>"+res[4].concessions+"</span>\
//	                	</div>\
//	                	<span class='now-rob r'>马上抢</span>\
//	                </div>";
//				$goods_list.eq(i).html(str);
//			}
//		}
//	});
//}

$.ajax({
		url:"http://127.0.0.1/js-job-zol-2017-4-9/php/loading.php",
		dataType:"json",
		success:function(res){
			console.log(res)
			var str="";
			for(var i=0;i<$goods_list.length;i++){
				str="<div class='pic'>\
						<img class='pic-img' src='"+res[i].img+"'/>\
						<div class='show-time'>\
							<div class='shadow'></div>\
							<p class='time'>\
	                            <span class='countdown'>剩余：<em class='hour'>3</em>天<em class='hour'>02</em>时<em class='minute'>53</em>分<em class='second'>32</em>秒</span>\
	                        </p>\
						</div>\
					</div>\
					<h4>\
	                    <a href='detailpage.html'>"+res[i].title+"</a>\
	                </h4>\
	                <span class='msg'>"+res[i].remark+"</span>\
	                <div class='price-box clear'>\
	                	<span class='now-price l'>"+res[i].price+"</span>\
	                	<div class='price-info l'>\
	                        <p class='old-price'>"+res[i].ori_price+"</p>\
	                        <span class='discount'>"+res[4].concessions+"</span>\
	                	</div>\
	                	<span class='now-rob r'>马上抢</span>\
	                </div>";
				$goods_list.eq(i).html(str);
			}
		}
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

//top下拉框
var className =__webpack_require__(3);
var show=__webpack_require__(6);
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



var banner=__webpack_require__(4);
//banner切换
banner().bnr($(".banner_imgs"),$(".scroll_img"),$("#banner_left_bnt"),$("#banner_right_bnt"),$("span",$(".banner_point")));




/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(0);


/***/ }),
/* 6 */
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

/***/ })
/******/ ]);