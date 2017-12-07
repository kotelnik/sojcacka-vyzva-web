<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(400);
    echo 'The only supported method is POST.';
    exit();
}

$requestBody = file_get_contents("php://input");
error_log('requestBody: '.$requestBody);
$jsonRequest = json_decode($requestBody);

if (!$jsonRequest) {
    http_response_code(400);
    echo 'Request JSON is not valid.';
    exit();
}

// connect to database
$connection = Connection::connectForReadWrite();

$sql = 'INSERT INTO Challenge (creatorId, title, description, score, durationSec, difficultyId) VALUES (';
$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['creatorId']) . ', ';
$sql = $sql . "'" . mysqli_real_escape_string($connection, $jsonRequest['title']) . '", ';
$sql = $sql . "'" . mysqli_real_escape_string($connection, $jsonRequest['description']) . '", ';
$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['score']) . ', ';
$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['durationSec']) . ', ';
$sql = $sql . mysqli_real_escape_string($connection, $jsonRequest['difficultyId']) . ')';

$query = mysqli_query($connection, $sql);

if ($query) {
    // success
    http_response_code(200);
    echo 'OK';
} else {
    http_response_code(400);
    echo 'error';
}

?>