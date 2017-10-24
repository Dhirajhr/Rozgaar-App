<?php
define('HOST','localhost');
define('USER','root');
define('PASS','');
define('DB','dhiraj');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect(HOST,USER,PASS,DB);
 

$result = $conn->query("select * from test");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"name":"'  . $rs["name"] . '",';
    $outp .= '"id":"'   . $rs["id"]        . '",';
    
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>