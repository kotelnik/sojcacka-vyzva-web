<?php

ApiHelper::allowOnlyGET();

// connect to database
$connection = Connection::connectForRead();

// get parameters
if (!isset($_GET['term'])) {
    ApiHelper::exitWithError(ErrorBean::$WRONG_PARAMETER);
}

$term = mysqli_real_escape_string($connection, $_GET['term']);
$term = strtolower($term);
if (strlen($term) < 3) {
    ApiHelper::exitWithError(ErrorBean::$WRONG_PARAMETER);
}
error_log('$term='.$term);

function addLikeClause($paramName, $term, $sql_where) {
    $prefix = ' ';
    if (!empty($sql_where)) {
        $prefix = ' OR ';
    }
    return $prefix.'LOWER('.$paramName.') LIKE \'%'.$term.'%\'';
}

// search persons
$sql_where = '';
$sql_where = $sql_where . addLikeClause('nickName', $term, $sql_where);
$sql = 'SELECT id,nickName FROM Person WHERE'.$sql_where;
error_log($sql);
$query = mysqli_query($connection, $sql);
$result = array();
while ($row = mysqli_fetch_array($query)) {
    $item = array();
    $item['id'] = (int) $row['id'];
    $item['title'] = $row['nickName'];
    $item['type'] = 'user';
    array_push($result, $item);
}

// search challenges
$sql_where = '';
$sql_where = $sql_where . addLikeClause('title', $term, $sql_where);
$sql = 'SELECT * FROM Challenge WHERE (executerId='.$PERSON_ID.' OR statusId=3) AND ('.$sql_where.')';
error_log($sql);
$query = mysqli_query($connection, $sql);
while ($row = mysqli_fetch_array($query)) {
    $item = array();
    $item['id'] = (int) $row['id'];
    $item['title'] = $row['title'];
    $item['type'] = 'challenge';
    array_push($result, $item);
}

// sort
$cmp = function ($a, $b) {
    return strcmp($a['title'], $b['title']);
};
usort($result, $cmp);

// provide
ApiHelper::printJsonResult($result);

?>
