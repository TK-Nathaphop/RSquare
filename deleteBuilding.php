<?php
require_once ('class/databaseConnection.php');
$rawpost = file_get_contents('php://input');
$buildingId =  $rawpost;

$con = new databaseConnection();
$con->connect();

//Query user data
$sql = "UPDATE `building` SET `flag`= false WHERE `building_id` = ".$buildingId;
echo $sql;
$ret = $con->query($sql);
if(!$ret)
	echo 'Failed!';
//Query department data
$sql = "UPDATE `floor` SET `flag` = false WHERE `building_id` = '" . $buildingId. "'";
echo $sql;
$ret = $con->query($sql);
if(!$ret)
	echo 'Failed!';

$sql = "SELECT * FROM `floor` WHERE `building_id` = '" . $buildingId . "'";
$query = $con->query($sql);
while($floor = $query -> fetch_object())
{
	$floorId = $floor->floor_id;
	$sql = "UPDATE `place` SET `flag` = false WHERE `floor_id` = '" . $floorId. "'";
	echo $sql;
	$ret = $con->query($sql);
	if(!$ret)
		echo 'Failed!';
}
$con->disconnect();
?>