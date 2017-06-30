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