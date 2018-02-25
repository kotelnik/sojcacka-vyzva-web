<?php

ApiHelper::allowOnlyGET();

// connect to database
$connection = Connection::connectForRead();

$idParam = ApiHelper::getNumberParameter('id', true);

$sql = 'SELECT id,title,started,statusId,finishStatusId,difficultyId FROM Challenge WHERE statusId = 3 AND executerId='.$idParam.' ORDER BY finished DESC';
error_log($sql);
$challenge_query = mysqli_query($connection, $sql);

$result = array();
while ($row = mysqli_fetch_array($challenge_query)) {
    $item = ApiHelper::copyChallengeReduced($row, $connection);
    array_push($result, $item);
}

ApiHelper::printJsonResult($result);

?>
