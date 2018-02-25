<?php

ApiHelper::allowOnlyPOST();

$requestBody = file_get_contents("php://input");
error_log('requestBody: '.$requestBody);
$jsonRequest = json_decode($requestBody, true);

if (!$jsonRequest) {
    $jsonRequest = array();
}

if (!isset($jsonRequest['id']) || !is_numeric($jsonRequest['id'])) {
    ApiHelper::exitWithError(ErrorBean::$WRONG_PARAMETER);
}
$idParam = $jsonRequest['id'];

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
$sql = $sql . addToQuery($jsonRequest, $connection, 'title', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'description', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'score', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'durationSec', $sql, false);
$sql = $sql . addToQuery($jsonRequest, $connection, 'difficultyId', $sql, false);
$sql = 'UPDATE Challenge SET ' . $sql . ' WHERE id = ' . mysqli_real_escape_string($connection, $idParam);

error_log('sql: ' . $sql);

$query = mysqli_query($connection, $sql);

if (!$query) {
    ApiHelper::exitWithError(ErrorBean::$CANNOT_UPDATE_CHALLENGE);
}

// success
$sql = 'SELECT * FROM Challenge WHERE id='.$idParam;
$query = mysqli_query($connection, $sql);
$row = mysqli_fetch_array($query);
$result = ApiHelper::copyChallenge($row, $connection);
ApiHelper::printJsonResult($result);

?>