<?php
	require_once('db.php');

	if($link){
		$newsid = $_POST['newsid'];
		$sql = "DELETE FROM news WHERE id={$newsid}";
		mysqli_query($link,'set names utf8');
		$result = mysqli_query($link,$sql);
		echo json_encode(array('success'=>'ok'));
	}else{
		echo json_encode(array('success'=>'none'));
	}
	mysqli_close($link);
?>