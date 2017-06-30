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