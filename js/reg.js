//验证码
var $change_code=$(".hover_red");
var $code=$("#code");
randomCode();
$change_code.click(function(){
	randomCode();
})
function randomCode(){
	var str="";
	var arr=new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
	for(var i=0;i<4;i++){
		str+=arr[parseInt(Math.random()*arr.length)];
	}
	$code.text(str);
}
//验证验证码
var $codes=$(".codes");
var $messege_sty_two=$(".messege_styl2");
$codes.blur(function(){
	var val=$codes.val();
	if(!val){
		$messege_sty_two.addClass("mes_erro");
		$messege_sty_two.text("信息不能为空");
	}else{
		if($code.text().toLocaleLowerCase()==val.toLocaleLowerCase()){
			$messege_sty_two.removeClass("mes_erro");
			$messege_sty_two.text("");
			$messege_sty_two.addClass("corrent");
		}else{
			$messege_sty_two.addClass("mes_erro");
			$messege_sty_two.text("请输入正确的验证码");
		}
	}
})
//获取焦点时边框变色
var $reg_bulr=$(".borc6");
$reg_bulr.focus(function(){
	$(this).css({"borderColor":"#c30"});
}).blur(function(){
	$(this).css({"borderColor":"#ccc"});
})
//验证手机
var $phones=$(".phones");
var $messege_sty_one=$(".messege_styl1");
$phones.blur(function(){
	reg($phones,$messege_sty_one,"请输入有效的手机号码",/^1[345789]\d{9}$/)
})
//验证短信
var $massages=$(".massages");
var $messege_sty_three=$(".messege_styl3");
$massages.blur(function(){
	reg($massages,$messege_sty_three,"校验错误,请重新输入",/^\d{6}$/)
})
//验证密码
var $pwds=$(".pwds");
var $messege_sty_four=$(".messege_styl4");
$pwds.blur(function(){
	reg($pwds,$messege_sty_four,"请输入正确的密码",/^[0-9a-zA-Z]{6,16}$/)
})
function reg(obj,obj2,message,regs){
	var reg=regs;
	var val=obj.val();
	if(val){
		var a=reg.test(val);
		if(!a){
			obj2.addClass("mes_erro");
			obj2.text(message);
		}else{
			obj2.removeClass("mes_erro");
			obj2.text("");
			obj2.addClass("corrent");
		}	
	}
	else{
		obj2.addClass("mes_erro");
		obj2.text("信息不能为空");
	}
}
//验证第二次密码
var $pwd2s=$(".pwd2s");
var $messege_sty_five=$(".messege_styl5");
$pwd2s.blur(function(){
	var val=$pwd2s.val();
	var val2=$pwds.val();
	if(!val){
		$messege_sty_five.addClass("mes_erro");
		$messege_sty_five.text("信息不能为空");
	}else{
		if(val==val2){
			$messege_sty_five.removeClass("mes_erro");
			$messege_sty_five.text("");
			$messege_sty_five.addClass("corrent");
		}else{
			$messege_sty_five.addClass("mes_erro");
			$messege_sty_five.text("密码不一致");
		}
	}
})
var $chekBox=$("#chekbox");
var $regbotton=$("#regbotton");
$regbotton.click(function(){
	empty($phones,$messege_sty_one);
	empty($codes,$messege_sty_two);
	empty($massages,$messege_sty_three);
	empty($pwds,$messege_sty_four);
	empty($pwd2s,$messege_sty_five);
	if(empty($phones,$messege_sty_one) && empty($codes,$messege_sty_two) && empty($massages,$messege_sty_three) && empty($pwds,$messege_sty_four) && empty($pwd2s,$messege_sty_five)){
		$phones.reg=/^1[345789]\d{9}$/;
		$pwds.reg=/^[0-9a-zA-Z]{6,16}$/;
		$massages.reg=/^\d{6}$/;
		var val=$phones.reg.test($phones.val());
		var val1=$pwds.reg.test($pwds.val());
		var val2=$pwd2s.val()==$pwds.val()?true:false;
		var val3=$code.text().toLocaleLowerCase()==$codes.val().toLocaleLowerCase()?true:false;
		var val4=$massages.reg.test($massages.val());
		var val5=$chekBox.is(':checked');
		if(val&&val1&&val2&&val3&&val4&&val5){
			$.ajax({
				type:"post",
				data:"status=register&phone="+$phones.val()+"&pwd="+$pwds.val(),
				url:"http://127.0.0.1/js-job-zol-2017-4-9/php/reg.php",
				success:function(res){
					console.log(res)
					if(res==0){
						alert("注册成功！");
						for(var i=0;i<$reg_bulr.length;i++){
							$reg_bulr.text("");
						}
						window.location.href="http://127.0.0.1/js-job-zol-2017-4-9/login.html";
						randomCode();
					}else{
						$messege_sty_one.addClass("mes_erro")
						$messege_sty_one.text("已注册");
						randomCode();
					}
				}
			});
		}
	}
})
function empty(obj,obj2){
	if(obj.val()==""){
		obj2.addClass("mes_erro");
		obj2.text("信息不能为空");
		return false;
	}else{
		return true;	
	}
}