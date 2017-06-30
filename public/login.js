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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//获取焦点边框变色
var $login_bulr=$(".focur");
$login_bulr.focus(function(){
	$(this).css({"borderColor":"#c30"});
}).blur(function(){
	$(this).css({"borderColor":"#ccc"});
})

var $login_btn=$(".login_btn");
var $mes_err=$(".mes_err");

$login_btn.click(function(){
	if($login_bulr.eq(0).val()=="" || $login_bulr.eq(1).val()==""){
		$mes_err.text("用户名/密码不能为空");
		$mes_err.css({ "display": "block"});
	}else{
		$mes_err.text("");
		$mes_err.css({ "display": "none"});
		$.ajax({
			type:"post",
			data:"status=login&phone="+$login_bulr.eq(0).val()+"&pwd="+$login_bulr.eq(1).val(),
			url:"http://127.0.0.1/js-job-zol-2017-4-9/php/reg.php",
			success:function(res){
				console.log(res)
				if(res==3){
					$mes_err.text("请输入正确的用户名/密码");
					$mes_err.css({ "display": "block"});
				}else if(res==2){
					$mes_err.css({ "display": "block"});
					$mes_err.text("密码错误");
				}else if(res==0){
					$mes_err.css({ "display": "block"});
					$mes_err.text("用户名不存在");
				}else{
					alert("登录成功！");
					$login_bulr.eq(0).val("");
					$login_bulr.eq(1).val("");
					window.location.href="index.html";
				}
			}
		});
	}
})


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

/***/ })
/******/ ]);