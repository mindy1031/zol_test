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