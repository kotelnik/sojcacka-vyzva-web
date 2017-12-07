<?php

// connect to database
$connection = Connection::connectForRead();

$person_row = mysqli_fetch_array(mysqli_query($connection, "SELECT * FROM Person WHERE id = '$PERSON_ID'"));
$challenge_row = mysqli_fetch_array(mysqli_query($connection, "SELECT * FROM Challenge WHERE executerId = '$PERSON_ID'"));

$result = array();
$result['id'] = $person_row['id'];
$result['firstName'] = $person_row['firstName'];
$result['lastName'] = $person_row['lastName'];
$result['nickName'] = $person_row['nickName'];
$result['scoreChallenges'] = $person_row['scoreChallenges'];
if ($challenge_row) {
    $currentChallenge = array();
    $currentChallenge['title'] = $challenge_row['title'];
    $result['currentChallenge'] = $currentChallenge;
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($result);

?>