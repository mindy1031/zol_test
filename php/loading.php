<?php
	$con=mysqli_connect("localhost","root","591031","zol") or die("连接服务器失败");
	mysqli_query($con,"set names 'utf8'");
	$sql="SELECT * FROM `list2`";
	$rest = $con->query($sql);
    $arr = array();
    if($rest->num_rows > 0){
        while($row = $rest->fetch_assoc()){
            $arr[] = $row;
        }
    }
    echo json_encode($arr);	
?>