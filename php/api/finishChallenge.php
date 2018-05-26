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

if (!isset($jsonRequest['id'])) {
    ApiHelper::exitWithError(ErrorBean::$WRONG_PARAMETER);
}
$idParam = $jsonRequest['id'];
if (!isset($jsonRequest['finishStatusId'])) {
    ApiHelper::exitWithError(ErrorBean::$WRONG_PARAMETER);
}
$finishStatusIdParam = $jsonRequest['finishStatusId'];

$sql_where = ' WHERE statusId=2 AND id='.$idParam.' AND executerId='.$PERSON_ID;

$sql = 'SELECT COUNT(*) FROM Challenge'.$sql_where;
error_log($sql);
$query = mysqli_query($connection, $sql);
$count = (int) mysqli_fetch_array($query)[0];
if ($count === 0) {
    ApiHelper::exitWithError(ErrorBean::$CANNOT_UPDATE_CHALLENGE);
}

$sql = 'UPDATE Challenge SET statusId=3, finished=now(), finishStatusId='.$finishStatusIdParam.$sql_where;
$query = mysqli_query($connection, $sql);
if (!$query) {
    ApiHelper::exitWithError(ErrorBean::$CANNOT_UPDATE_CHALLENGE);
}

$sql = 'SELECT score FROM Challenge WHERE id='.$idParam;
$query = mysqli_query($connection, $sql);
$score = (int) mysqli_fetch_array($query)[0];

//TODO jen když je passed
$sql = 'UPDATE Person SET scoreChallenges=(scoreChallenges+'.$score.') WHERE id='.$PERSON_ID;
$query = mysqli_query($connection, $sql);
if (!$query) {
    ApiHelper::exitWithError(ErrorBean::$CANNOT_UPDATE_PERSON);
}

// success
$result = array();
$result['result'] = 'success';
ApiHelper::printJsonResult($result);

?>