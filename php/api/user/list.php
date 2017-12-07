<?php

// connect to database
$connection = Connection::connectForRead();

//$person_row = mysqli_fetch_array(mysqli_query($connection, "SELECT * FROM Person"));
//call query
$query = mysqli_query($connection, "SELECT * FROM Person");

$result = array();
while ($row = mysqli_fetch_array($query)) {
    $item = array();
    $item['id'] = $row['id'];
    $item['firstName'] = $row['firstName'];
    $item['lastName'] = $row['lastName'];
    $item['nickName'] = $row['nickName'];
    $item['scoreChallenges'] = $row['scoreChallenges'];
    array_push($result, $item);
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($result);

?>