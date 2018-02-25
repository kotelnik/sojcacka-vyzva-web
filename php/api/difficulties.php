<?php

ApiHelper::allowOnlyGET();

// connect to database
$connection = Connection::connectForRead();

$sql = 'SELECT * FROM ChallengeDifficulty';
error_log($sql);
$challenge_query = mysqli_query($connection, $sql);

$result = array();
while ($row = mysqli_fetch_array($challenge_query)) {
    $item = ApiHelper::copyIdName($row);
    array_push($result, $item);
}

ApiHelper::printJsonResult($result);

?>
