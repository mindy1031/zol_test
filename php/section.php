<?php
	session_start();
	  header("Content-Type:text/html;charset=UTF-8");
	if(isset($_SESSION['userPhone'])){ //检测是否有session
		echo $_SESSION['userPhone']; 
	}else{ 
		echo json_encode(0);//未登录
	}
		
	
?>