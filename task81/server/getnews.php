<?php
	require_once('db.php');
	if($link){
		 if($_GET['newstype']){
		 	$sql = "SELECT * FROM news WHERE newstype='{$_GET['newstype']}'";
		 }else{
			$sql = "SELECT * FROM news";
		 }
		//正确的设置编码的方式
		mysqli_query($link,'set names utf8');
		$result = mysqli_query($link,$sql);
		$senddata = array();
		while($row=mysqli_fetch_assoc($result)){
			array_push($senddata,array(
				'id'=>$row['id'],
				'newstype'=>$row['newstype'],
				'newstitle'=>$row['newstitle'],
				'newsimg'=>$row['newsimg'],
				'newstime'=>$row['newstime'],
				'newssrc'=>$row['newssrc']
				));
		}
		echo json_encode($senddata);
	}else{
		echo json_encode(array('success'=>'none'));
	}
	mysqli_close($link);
?>