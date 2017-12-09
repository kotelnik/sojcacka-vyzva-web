<?php

// connect to database
$connection = Connection::connectForRead();

// get parameters
$sql = '';
if (isset($_GET['executerId'])
    && (is_numeric($_GET['executerId']) || $_GET['executerId'] === 'null')) {
    if (is_numeric($_GET['executerId'])) {
        $executerId = mysqli_real_escape_string($connection, $_GET['executerId']);
        $sql = $sql.' executerId = '.$executerId;
    } else {
        $sql = $sql.' executerId IS NULL';
    }
}
if (isset($_GET['creatorId']) && is_numeric($_GET['creatorId'])) {
    if (!empty($sql)) {
        $sql = $sql . ' AND';
    }
    $creatorId = mysqli_real_escape_string($connection, $_GET['creatorId']);
    $sql = $sql.' creatorId = '.$creatorId;
}
$sql = $sql . ApiHelper::getSqlPartForNumberParameter('statusId', $connection, $sql);
$sql = $sql . ApiHelper::getSqlPartForNumberParameter('score', $connection, $sql);
$sql = $sql . ApiHelper::getSqlPartForNumberParameter('difficultyId', $connection, $sql);
$sql = $sql . ApiHelper::getSqlPartForNumberParameter('durationSec', $connection, $sql);
$allowed_orderBy = ['executerId', 'difficultyId', 'score', 'duration', 'creatorId', 'created', 'started', 'finished', 'id'];
if (!empty($_GET['orderBy']) && in_array($_GET['orderBy'], $allowed_orderBy)) {
    $orderBy = mysqli_real_escape_string($connection, $_GET['orderBy']);
    $sql = $sql.' ORDER BY '.$orderBy;
    if (isset($_GET['ordering']) && $_GET['ordering'] === 'desc') {
        $sql = $sql.' DESC';
    }
}


if (!empty($sql)) {
    $sql = ' WHERE'.$sql;
}

$sql = 'SELECT * FROM Challenge'.$sql;
error_log($sql);
$challenge_query = mysqli_query($connection, $sql);

$result = array();
while ($row = mysqli_fetch_array($challenge_query)) {
    $item = ApiHelper::copyChallenge2($row, $connection);
    array_push($result, $item);
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($result);

?>
