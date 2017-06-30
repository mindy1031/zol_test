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