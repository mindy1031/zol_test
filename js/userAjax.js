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
