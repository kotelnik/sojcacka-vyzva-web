<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(400);
    echo 'The only supported method is POST.';
    exit();
}

$requestBody = file_get_contents("php://input");
error_log('requestBody: '.$requestBody);
$jsonRequest = json_decode($requestBody, true);

if (!$jsonRequest) {
    $jsonRequest = array();
}

// connect to database
$connection = Connection::connectForReadWrite();

$sql = 'SELECT COUNT(*) FROM Challenge WHERE executerId IS NULL';
if (isset($jsonRequest['difficultyId'])) {
    $difficultyId = $jsonRequest['difficultyId'];
    $sql = $sql.' AND difficultyId='.$difficultyId;
}
error_log($sql);

$query = mysqli_query($connection, $sql);
$count = (int) mysqli_fetch_array($query)[0];
if ($count === 0) {
    http_response_code(404);
    echo 'No free challenge found.';
    exit();
}

$sql = 'SELECT * FROM Challenge WHERE executerId IS NULL';
if (isset($jsonRequest['difficultyId'])) {
    $difficultyId = $jsonRequest['difficultyId'];
    $sql = $sql.' AND difficultyId='.$difficultyId;
}
error_log($sql);
$query = mysqli_query($connection, $sql);

$existingChallenges = array();
while ($row = mysqli_fetch_array($query)) {
    array_push($existingChallenges, $row);
}

$index = rand(0, $count);

$chosenChallenge = $existingChallenges[$index];
$chosenChallengeId = $chosenChallenge['id'];

$sql = 'UPDATE Challenge SET executerId='.$PERSON_ID.', started=now() WHERE id='.$chosenChallengeId;

$query = mysqli_query($connection, $sql);

if (!$query) {
    http_response_code(400);
    echo 'Unable to update chosen challenge.';
    exit();
}

// success
$result = ApiHelper::copyChallenge($chosenChallenge, $connection);
header('Content-Type: application/json; charset=UTF-8');
echo json_encode($result);

?>