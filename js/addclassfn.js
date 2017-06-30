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