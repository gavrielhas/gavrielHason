<?php

$conn = mysqli_connect('localhost','gavriel1','Gavriel2908','FormData'); //Adresses is the database name

if(!$conn){
    echo 'Connection error:'. mysqli_connect_error();
}
?>