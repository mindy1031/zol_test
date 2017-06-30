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