<?php

ApiHelper::allowOnlyGET();

// connect to database
$connection = Connection::connectForRead();

$idParamIsset = isset($_GET['id']);

$result = null;

if ($idParamIsset) {

    $sql = 'SELECT id,creatorId,executerId,title,description,created,started,finished,statusId,finishStatusId,score,durationSec,difficultyId FROM Challenge WHERE (statusId=3 OR executerId='.$PERSON_ID.')';
    $sql_id = ApiHelper::getSqlPartForNumberParameter('id', $connection, $sql);
    if ($sql_id == '') {
        ApiHelper::exitWithError(ErrorBean::$WRONG_PARAMETER);
    }
    $sql = $sql . $sql_id;
    error_log($sql);
    $challenge_query = mysqli_query($connection, $sql);

    $row = mysqli_fetch_array($challenge_query);
    if ($row) {
        $result = ApiHelper::copyChallenge($row, $connection);
    } else {
        error_log('no challenge found for id='.$_GET['id'].' for user='.$PERSON_ID);
        ApiHelper::exitWithError(ErrorBean::$WRONG_PARAMETER);
    }
} else {

    $sql = 'SELECT id,title,started,statusId,finishStatusId,difficultyId FROM Challenge WHERE statusId = 3 ORDER BY finished DESC';
    error_log($sql);
    $challenge_query = mysqli_query($connection, $sql);

    $result = array();
    while ($row = mysqli_fetch_array($challenge_query)) {
        $item = ApiHelper::copyChallengeReduced($row, $connection);
        array_push($result, $item);
    }
}

ApiHelper::printJsonResult($result);

?>
