<?php

// connect to database
$connection = Connection::connectForRead();

//$person_row = mysqli_fetch_array(mysqli_query($connection, "SELECT * FROM Person"));
//call query
$query = mysqli_query($connection, "SELECT * FROM Person");

$result = array();
while ($row = mysqli_fetch_array($query)) {
    $item = ApiHelper::copyUser($row);
    
    $has_challenge_query = mysqli_fetch_array(mysqli_query($connection, "SELECT id FROM Challenge WHERE executerId = ".$item['id']));
    if ($has_challenge_query) {
        $item['hasChallenge'] = true;
    } else {
        $item['hasChallenge'] = false;
    }
    
    array_push($result, $item);
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($result);

?>