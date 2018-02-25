<?php

ApiHelper::allowOnlyPOST();

$requestBody = file_get_contents("php://input");
error_log('requestBody: '.$requestBody);
$jsonRequest = json_decode($requestBody, true);

if (!$jsonRequest) {
    $jsonRequest = array();
}

// connect to database
$connection = Connection::connectForReadWrite();

if (!isset($jsonRequest['title']) || !isset($jsonRequest['description']) || !isset($jsonRequest['difficultyId'])) {
    ApiHelper::exitWithError(ErrorBean::$WRONG_PARAMETER);
}
$titleParam = $jsonRequest['title'];
$descriptionParam = $jsonRequest['description'];
$difficultyIdParam = $jsonRequest['difficultyId'];
if (!is_numeric($difficultyIdParam)) {
    ApiHelper::exitWithError(ErrorBean::$WRONG_PARAMETER);
}

$sql = 'INSERT INTO Challenge (statusId, created, creatorId, title, description, score, durationSec, difficultyId) VALUES (1,now(),';
$sql = $sql . $PERSON_ID . ', ';
$sql = $sql . '\'' . mysqli_real_escape_string($connection, $titleParam) . '\', ';
$sql = $sql . '\'' . mysqli_real_escape_string($connection, $descriptionParam) . '\', ';
$sql = $sql . mysqli_real_escape_string($connection, '500') . ', ';
$sql = $sql . mysqli_real_escape_string($connection, '3600') . ', ';
//$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['score']) . ', ';
//$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['durationSec']) . ', ';
$sql = $sql . mysqli_real_escape_string($connection, $difficultyIdParam) . ')';

error_log('sql: ' . $sql);

$query = mysqli_query($connection, $sql);

if (!$query) {
    ApiHelper::exitWithError(ErrorBean::$CANNOT_UPDATE_CHALLENGE);
}

// success
$id = mysqli_insert_id($connection);
$sql = 'SELECT * FROM Challenge WHERE id='.$id;
$query = mysqli_query($connection, $sql);
$row = mysqli_fetch_array($query);
$result = ApiHelper::copyChallenge($row, $connection);
ApiHelper::printJsonResult($result);

?>