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

$sql_difficulty = '';
if (isset($jsonRequest['difficultyId'])) {
    $difficultyId = $jsonRequest['difficultyId'];
    $sql_difficulty = ' AND difficultyId='.$difficultyId;
}

$sql = 'SELECT COUNT(*) FROM Challenge WHERE executerId IS NULL'.$sql_difficulty;

error_log($sql);

$query = mysqli_query($connection, $sql);
$count = (int) mysqli_fetch_array($query)[0];
if ($count === 0) {
    ApiHelper::exitWithError(ErrorBean::$NO_FREE_CHALLENGE);
}
error_log('count is '.$count);

$sql = 'SELECT * FROM Challenge WHERE executerId IS NULL'.$sql_difficulty;
error_log($sql);
$query = mysqli_query($connection, $sql);

$existingChallenges = array();
while ($row = mysqli_fetch_array($query)) {
    array_push($existingChallenges, $row);
}

$index = rand(0, $count-1);

$chosenChallengeId = $existingChallenges[$index]['id'];

$sql = 'UPDATE Challenge SET executerId='.$PERSON_ID.',started=now(),statusId=2 WHERE id='.$chosenChallengeId;

$query = mysqli_query($connection, $sql);

if (!$query) {
    ApiHelper::exitWithError(ErrorBean::$CANNOT_UPDATE_CHALLENGE);
}

// success
$sql = 'SELECT * FROM Challenge WHERE id='.$chosenChallengeId;
$query = mysqli_query($connection, $sql);
$row = mysqli_fetch_array($query);
$result = ApiHelper::copyChallenge($row, $connection);
ApiHelper::printJsonResult($result);

?>