<?php
	
	#header('Content-type: text/javascript')
	$servername = 'localhost';
	$db = 'media';
	$uname = 'root';
	$pass = '';
	
	$conn = new mysqli($servername,$uname,$pass,$db) or die("connection failed" . mysql_error());

	//if($conn){
	//	echo 'Connection Established';
	//}

	$method = $_SERVER['REQUEST_METHOD'];
	//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

	//echo "\n".$method."\n".$request;

	//echo "Hello";

	$sql = "select name,address,city,contact,rates,stay,rent from handr";
	$result = mysqli_query($conn,$sql);

	$data = array();

	while($row = mysqli_fetch_assoc($result)){
		$data[] = $row;
	}

	$json = json_encode(array('media'=>$data), true);

	echo $json;

	mysqli_close($conn);
?>