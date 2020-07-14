<?php
require 'db_connect.php';


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

    $request = json_decode($postdata);


    $fname=$request->fname;
    $email=$request->email;
    $SpecialReq=$request->SpecialReq;

}

$query = mysqli_query($con, "INSERT INTO `Adresses` (`id`, `fname`, `email`, `Specialreq`) VALUES (NULL, '{$fname}', '{$email}', '{$SpecialReq}')");
echo "Error: " . mysqli_error($con);


if(mysqli_query($con, $query)){
    http_response_code(201);
}else{
    http_response_code(422);

}