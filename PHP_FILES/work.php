<?php
define('HOST','localhost');
define('USER','root');
define('PASS','');
define('DB','rozagaar');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
header("Content-Type: application/json; charset=ISO-8859-1");
 
$con = mysqli_connect(HOST,USER,PASS,DB);

$data=json_decode(file_get_contents('php://input'),true);

print_r($data);

$phnum=$data['phnum'];
//$name='as';
$field=$data['field'];
//$id=11;

 
$sql = "insert into workdata(phnum, field) values('$phnum','$field')";
 
$res = mysqli_query($con,$sql);

mysqli_close($con);
?>
	