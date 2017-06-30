var changes=require("./changeBorderColorfn");
var time=require("./lastTimefn.js");
var banner=require("./bannerfn");
var tab=require("./titleTabfn");
var call=require("./CallBackfn");
var show=require("./showHidefn");

//banner切换
banner().bnr($(".banner_imgs"),$(".scroll_img"),$("#banner_left_bnt"),$("#banner_right_bnt"),$("span",$(".banner_point")));
banner().bnr($(".f1_imgs"),$(".f1_img"),$(".f1_left"),$(".f1_right"),$("span",$(".f1_point")));
banner().bnr($(".f2_imgs"),$(".f2_img"),$(".f2_left"),$(".f2_right"),$("span",$(".f2_point")));
banner().bnr($(".f3_imgs"),$(".f3_img"),$(".f3_left"),$(".f3_right"),$("span",$(".f3_point")));

//1f边框变色
changes().change_border_color($("a",$(".main_1F_list")),0,"#cc3300","#eeeeee");
changes().change_border_color($("li",$(".hot_ul")),0,"#cc3300","#eeeeee");
changes().change_border_color($("li",$(".main_foot_ul")),1,"#eeeeee","#ffffff");
changes().change_border_color($("li",$(".brands-list")),1,"#eeeeee","#ffffff");

//切换1f-3f的title详情
tab().title($("a",$(".type1")),$(".f1_li"));
tab().title($("a",$(".type2")),$(".f2_li"));
tab().title($("a",$(".type3")),$(".f3_li"));

//倒计时
var $last_time=$(".last_time");
var $hour=$(".hour",$last_time);
var $minute=$(".minute",$last_time);
var $ms=$(".ms",$last_time);
var oDate2 = new Date("2017/4/16 00:00:00");
time().times($hour,$minute,$ms,oDate2);

//top下拉框
show().hide($(".hover_box_phone"),$(".top_box_p"));
show().hide($(".hover_box_font"),$(".box_font_cont"));
show().hide($(".hover_box"),$(".top_qr_code"));

var $collBack=$(".collBack");
call().back($collBack);


