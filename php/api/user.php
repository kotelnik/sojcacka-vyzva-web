<?php

ApiHelper::allowOnlyGET();

$sql = 'SELECT id,nickName,scoreChallenges FROM Person';
$idParamIsset = isset($_GET['id']);
if ($idParamIsset) {
    $sql = 'SELECT id,firstName,lastName,nickName,scoreChallenges FROM Person';
}

$wrapper = function($row, $connection) use($idParamIsset) {
    if ($idParamIsset) {
        $item = ApiHelper::copyUser($row);
    } else {
        $item = ApiHelper::copyUserReduced($row);
    }
    return ApiHelper::loadHasChallenge($row['id'], $connection, $item);
};

ApiHelper::performOneOrAll($sql, $wrapper);

?>