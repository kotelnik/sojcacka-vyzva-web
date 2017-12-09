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
    http_response_code(400);
    echo 'Request JSON is not valid.';
    exit();
}

// connect to database
$connection = Connection::connectForReadWrite();

$sql = 'INSERT INTO Challenge (statusId, created, creatorId, title, description, score, durationSec, difficultyId) VALUES (1,now(),';
$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['creatorId']) . ', ';
$sql = $sql . '\'' . mysqli_real_escape_string($connection, $jsonRequest['title']) . '\', ';
$sql = $sql . '\'' . mysqli_real_escape_string($connection, $jsonRequest['description']) . '\', ';
$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['score']) . ', ';
$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['durationSec']) . ', ';
$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['difficultyId']) . ')';

error_log('sql: ' . $sql);

$query = mysqli_query($connection, $sql);

if ($query) {
    // success

    $id = mysqli_insert_id($connection);
    $sql = 'SELECT * FROM Challenge WHERE id='.$id;
    $query = mysqli_query($connection, $sql);
    $row = mysqli_fetch_array($query);
    $result = ApiHelper::copyChallenge($row, $connection);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($result);

} else {
    http_response_code(400);
    echo 'error';
}

?>