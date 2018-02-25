<?php

ApiHelper::allowOnlyGET();

// connect to database
$connection = Connection::connectForRead();

$result = ApiHelper::loadPerson($PERSON_ID, $connection);

ApiHelper::printJsonResult($result);

?>