//获取焦点边框变色
var $login_bulr=$(".focur");
$login_bulr.focus(function(){
	$(this).css({"borderColor":"#c30"});
}).blur(function(){
	$(this).css({"borderColor":"#ccc"});
})

var $login_btn=$(".login_btn");
var $mes_err=$(".mes_err");

$login_btn.click(function(){
	if($login_bulr.eq(0).val()=="" || $login_bulr.eq(1).val()==""){
		$mes_err.text("用户名/密码不能为空");
		$mes_err.css({ "display": "block"});
	}else{
		$mes_err.text("");
		$mes_err.css({ "display": "none"});
		$.ajax({
			type:"post",
			data:"status=login&phone="+$login_bulr.eq(0).val()+"&pwd="+$login_bulr.eq(1).val(),
			url:"http://127.0.0.1/js-job-zol-2017-4-9/php/reg.php",
			success:function(res){
				console.log(res)
				if(res==3){
					$mes_err.text("请输入正确的用户名/密码");
					$mes_err.css({ "display": "block"});
				}else if(res==2){
					$mes_err.css({ "display": "block"});
					$mes_err.text("密码错误");
				}else if(res==0){
					$mes_err.css({ "display": "block"});
					$mes_err.text("用户名不存在");
				}else{
					alert("登录成功！");
					$login_bulr.eq(0).val("");
					$login_bulr.eq(1).val("");
					window.location.href="index.html";
				}
			}
		});
	}
})
