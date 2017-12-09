<?php

// connect to database
$connection = Connection::connectForRead();

$challenge_row = mysqli_fetch_array(mysqli_query($connection, "SELECT * FROM Challenge WHERE executerId = '$PERSON_ID'"));

$result = ApiHelper::loadPerson($PERSON_ID, $connection);
if ($challenge_row) {
    $currentChallenge = ApiHelper::copyChallenge($challenge_row, $connection);
    $result['currentChallenge'] = $currentChallenge;
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($result);

?>