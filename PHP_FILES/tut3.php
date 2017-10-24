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

 
$sql = "select * from otpdata where id= (select count(*) from otpdata)";//track
 
$res = mysqli_query($con,$sql);
 
$result = array();
 
while($row = mysqli_fetch_array($res)){
array_push($result,
array('phone'=>$row[0],
    'otp'=>$row[1]
));
}
 
echo json_encode(array("records"=>$result));
 
mysqli_close($con);
 
?>