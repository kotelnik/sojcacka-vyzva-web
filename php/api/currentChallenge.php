<?php

ApiHelper::allowOnlyGET();

// connect to database
$connection = Connection::connectForRead();

$sql = 'SELECT id,creatorId,executerId,title,description,created,started,finished,statusId,finishStatusId,score,durationSec,difficultyId FROM Challenge WHERE statusId=2 AND executerId='.$PERSON_ID;
error_log($sql);
$challenge_query = mysqli_query($connection, $sql);

$row = mysqli_fetch_array($challenge_query);
$result = null;
if ($row) {
    $result = ApiHelper::copyChallenge($row, $connection);
}

ApiHelper::printJsonResult($result);

?>
