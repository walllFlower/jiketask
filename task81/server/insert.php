<?php
	require_once('db.php');
	if($link){
		$newstype = $_POST['newstype'];
		$newstitle = $_POST['newstitle'];
		$newsimg = $_POST['newsimg'];
		$newstime = $_POST['newstime'];
		$newssrc = $_POST['newssrc'];
		$sql = "INSERT INTO news VALUES (null,'{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";
		//正确的设置编码的方式
		mysqli_query($link,'set names utf8');
		$result = mysqli_query($link,$sql);
		echo json_encode(array('success'=>'ok'));	
	}else{
		echo json_encode(array('success'=>'none'));
	}
	mysqli_close($link);
?>