var show=require("./showHidefn");

//top下拉框
show().hide($(".hover_box_phone"),$(".top_box_p"));
show().hide($(".hover_box_font"),$(".box_font_cont"));
show().hide($(".hover_box"),$(".top_qr_code"));

//二级菜单  显隐
var $banner_abs=$(".banner_abs");
var $banner_left=$(".banner_left");
show().hide($banner_abs,$banner_left);

//选择手机颜色
var className=require("./addclassfn");
var $zs_options_list=$(".zs_options li");
className().addclassfn($zs_options_list,"li_cur");

//返回顶部
var call=require("./CallBackfn");
var $collBack=$(".collBack");
call().back($collBack);

