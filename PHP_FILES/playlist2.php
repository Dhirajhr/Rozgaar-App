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



//tp


$data=json_decode(file_get_contents('php://input'),true);

print_r($data);

$field='Mechanic';



//tp
 
$sql = "select title from jobdata where field='$field'";//track
 
$res = mysqli_query($con,$sql) or die(mysqli_error($con));
$result = array();
 
while($row = mysqli_fetch_array($res)){
array_push($result,
array('title'=>$row[0]
));
}
 
echo json_encode(array("records"=>$result));
 
mysqli_close($con);
?>