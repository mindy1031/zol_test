<?php
	header("Content-Type:text/html;charset=utf-8");
	@mysql_connect("localhost","root","591031") or die("链接服务器失败！");
	@mysql_select_db("zol");
	@mysql_query("set names 'utf8'");
?>