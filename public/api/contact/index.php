<?php 

include('db_connect.php');

// write query for all adresses
$sql = 'SELECT ID, email, fname, lname, SpecialReq FROM Addresses'; //Addresses is the table name

// make query & get result
$result = mysqli_query($conn, $sql) or die(mysqli_error($conn));;

// fetch the resulting rows as an array
$Addresses = mysqli_fetch_all($result, MYSQLI_ASSOC);

// free result from memory
mysqli_free_result($result);

// close connection
mysqli_close($conn);

print_r($Addresses);


?>