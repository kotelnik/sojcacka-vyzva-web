<?php

// headers
header('X-Frame-Options: DENY');
header('Strict-Transport-Security: max-age=10886400; includeSubDomains; preload');
header('Access-Control-Allow-Origin: *'); //TODO DELETE!!

$KNOWN_API_PATHS = ['/currentUser', '/user/list', '/search', '/createChallenge', '/updateChallenge'];

if (!isset($_GET['path'])) {
    http_response_code(400);
    echo 'You need to set a path parameter.';
    exit();
}

$api_path = $_GET['path'];

if (!in_array($api_path, $KNOWN_API_PATHS)) {
    http_response_code(404);
    echo 'Unknown path.';
    exit();
}

// start a session (load one)
ini_set('session.cookie_httponly', 1);
session_start();

// includes
include './php/connection.php';
include './php/util.php';

/*
if (!LoginHelper::isLogged()) {
    http_response_code(401);
    echo 'You need to log in.';
    exit();
}

$PERSON_ID = $_SESSION["personId"];
*/
$PERSON_ID = "1";

include "./php/api$api_path.php";

?>