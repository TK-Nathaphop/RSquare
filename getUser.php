<?php
require_once ('class/databaseConnection.php');
$userId = $_GET['userId'];

$con = new databaseConnection();
$con->connect();
//Query user data
$sql = "SELECT * FROM `user` WHERE `user_id` = '" . $userId."'";
$query = $con->query($sql);
$user = $query -> fetch_object();

//Query department data
$sql = "SELECT * FROM `department` WHERE `department_id` = '" . $user->department_id. "'";
$query = $con->query($sql);
$department = $query -> fetch_object();
$user->department = $department->department;

//Query faculty data
$sql = "SELECT * FROM `faculty` WHERE `faculty_id` = '" . $department->faculty_id."'";
$query = $con->query($sql);
$faculty = $query -> fetch_object();
$user->faculty = $faculty->faculty;

if($user->picture == '')
	$user->picture = 'null-pic.png';

echo json_encode($user);
$con->disconnect();	
?>