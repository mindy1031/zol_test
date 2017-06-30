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