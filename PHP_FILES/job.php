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
$title=$data['title'];
$field=$data['field'];
$budget=$data['budget'];
$duration=$data['duration'];
$lastdate=$data['lastdate'];
$vacancy=$data['vacancy'];
$city=$data['city'];
$address=$data['address'];

//$id=11;

 
$sql = "insert into jobdata(phnum, title, field, budget, duration, lastdate, vacancy, city, address) values('$phnum','$title','$field','$budget','$duration','$lastdate','$vacancy','$city','$address')";
 
$res = mysqli_query($con,$sql);

mysqli_close($con);
?>
	