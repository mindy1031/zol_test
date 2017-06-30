//倒计时
var $day=$(".day");
var $hour=$(".hour");
var $min=$(".minute");
var $sec=$(".second");
var timesd=null;
timesd=setInterval(timedown,1000);
timedown();
function timedown(){
	var $outTime=new Date("2017/5/16 17:00:00");
	var $nowTime=new Date();
	var $time=$outTime.getTime()-$nowTime.getTime();
	var $days= parseInt( $time / 1000 /60 /60 / 24 );
	var $hours=parseInt($time/1000/60/60-($days*24));
	var $mins=parseInt($time/1000/60%60);
	var $secs=parseInt($time/1000%60);
	if($time<=0){
		$days = 0;
		$hours=0;
		$mins=0;
		$secs=0;
		clearInterval(timesd);
	}
	$day.html($days);
	$hour.html(t($hours));
	$min.html(t($mins));
	$sec.html(t($secs));
}
function t(n){
	if(n<10){
		n="0"+n;
	}
	return n;
}

//地区选择
var $freightarea=$(".freight_area");
var $areaname=$(".area_name");
var $selecttabli=$(".select_tab li");
//三级联动
var $province=$(".area-listall");
var $proa=$(".area-listall a");
var $area=$(".area-list-area");
var $selcur=$(".select-cur");

$freightarea.hover(function(){
	$areaname.addClass("area-cur");
	$(".area-nameselect").css({"display":"block"});
},function(){
	$areaname.removeClass("area-cur");
	$(".area-nameselect").css({"display":"none"});
})
$selecttabli.click(function(){
	$(this).addClass("select-cur").siblings().removeClass("select-cur");
	$province.eq($(this).index()).addClass("a-list").siblings().removeClass("a-list");
	console.log($province.eq($(this).index()).addClass("a-list"))
})

//三级联动
var $province=$(".area-listall");
var $proa=$(".area-listall a");
var $area=$(".area-list-area");
var $selcur=$(".select-cur");
var $selcurspan=$(".select-cur span");
var $pro=[{"name":1,"por":"北京"},{"name":2,"por":"上海"},{"name":3,"por":"安徽"},{"name":4,"por":"浙江"},{"name":5,"por":"天津"},{"name":6,"por":"重庆"},{"name":7,"por":"黑龙江"},{"name":4,"por":"长沙"},];
var $a_pro="<a href='javascript:;'>北京</a>";
for(var i=0;i<$pro.length;i++){
	$a_pro+="<a href='javascript:;' prov='"+$pro[i].name+"'>"+$pro[i].por+"</a>";
}
$province.html($a_pro);

$proa.click(function(){
	var $this=$(this).index();
	$selcurspan.html("才");
})
var $area = {
	"1" : ["朝阳区","海淀区","昌平区","房山区","怀柔区"],
	"2" : ["宝山区","浦东新区","万全区","奉贤区","闵行区"],
	"3" : ["白云区","越秀区","台湾区","荔湾区","番禺区"],
	"4" : ["3021","3022","3023","3024","3025"],
	"5" : ["3031","3032","3033","3034","3035"],
	"6" : ["1","2","3","4","5"],
	"7" : ["朝阳区","海淀区","昌平区","房山区","怀柔区"],
	"8" : ["宝山区","浦东新区","万全区","奉贤区","闵行区"]
}
$province.change(function(){
	var val=$(this).test();
	var $a_pro="<a href='javascript:;'>用哪个</a>";
	for(var i=0;i<$area[val].length;i++){
		$a_pro+="<a href='javascript:;'>"+$area[val][i]+"</a>";
	}
	$area.innerHTML=$a_pro;
})

