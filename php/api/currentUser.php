<?php

// connect to database
$connection = Connection::connectForRead();

$person_row = mysqli_fetch_array(mysqli_query($connection, "SELECT * FROM Person WHERE id = '$PERSON_ID'"));
$challenge_row = mysqli_fetch_array(mysqli_query($connection, "SELECT * FROM Challenge WHERE executerId = '$PERSON_ID'"));

$result = ApiHelper::copyUser($person_row);
if ($challenge_row) {
    $currentChallenge = ApiHelper::copyChallenge($challenge_row);
    $result['currentChallenge'] = $currentChallenge;
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($result);

?>