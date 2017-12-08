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

function addToQuery($jsonRequest, $connection, $paramName, $previous_sql, $allowNull) {
    if (!isset($jsonRequest[$paramName])) {
        return '';
    }
    $prefix = '';
    if (!empty($previous_sql)) {
        $prefix = ', ';
    }
    if ($allowNull && $jsonRequest[$paramName] === null) {
        return $prefix . ' ' . $paramName . '=NULL';
    }
    if (empty($jsonRequest[$paramName])) {
        return '';
    }
    if ($paramName === 'title' || $paramName === 'description'
         || $paramName === 'created' || $paramName === 'started' || $paramName === 'finished') {
        // quote
        return $prefix . ' ' . $paramName . '=\'' . mysqli_real_escape_string($connection, $jsonRequest[$paramName]) . '\'';
    }
    return $prefix . ' ' . $paramName . '=' . mysqli_real_escape_string($connection, $jsonRequest[$paramName]);
}

//$sql = 'UPDATE Challenge SET ';
$sql = '';
$sql = $sql . addToQuery($jsonRequest, $connection, 'statusId', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'title', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'description', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'score', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'durationSec', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'difficultyId', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'executerId', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'created', $sql, true);
$sql = $sql . addToQuery($jsonRequest, $connection, 'started', $sql, true);
$sql = $sql . addToQuery($jsonRequest, $connection, 'finished', $sql, true);
$sql = 'UPDATE Challenge SET ' . $sql . ' WHERE id = ' . mysqli_real_escape_string($connection, $jsonRequest['id']);

error_log('sql: ' . $sql);

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