<?php

class LoginHelper {

    static function redirectToLoginPage() {
        header("location: index.php?menu=" . PageCheck::$PAGE_LOGIN);
        exit();
    }

    static function isLogged() {
        return !empty($_SESSION['prihlasen']) && $_SESSION['prihlasen'] === 1;
    }

}

class ApiHelper {

    static function loadPerson($id, $connection) {
        if ($id == null) {
            return null;
        }
        $row = mysqli_fetch_array(mysqli_query($connection, 'SELECT * FROM Person WHERE id='.$id));
        return ApiHelper::copyUser($row);
    }

    static function loadStatus($id, $connection) {
        if ($id == null) {
            return null;
        }
        $row = mysqli_fetch_array(mysqli_query($connection, 'SELECT * FROM ChallengeStatus WHERE id='.$id));
        return ApiHelper::copyIdName($row);
    }

    static function loadDifficulty($id, $connection) {
        if ($id == null) {
            return null;
        }
        $row = mysqli_fetch_array(mysqli_query($connection, 'SELECT * FROM ChallengeDifficulty WHERE id='.$id));
        return ApiHelper::copyIdName($row);
    }

    static function copyIdName($db_row) {
        $copy = array();
        $copy['id'] = (int) $db_row['id'];
        $copy['name'] = $db_row['name'];
        return $copy;
    }

    static function copyUser($db_row) {
        $copy = array();
        $copy['id'] = (int) $db_row['id'];
        $copy['firstName'] = $db_row['firstName'];
        $copy['lastName'] = $db_row['lastName'];
        $copy['nickName'] = $db_row['nickName'];
        $copy['scoreChallenges'] = (int) $db_row['scoreChallenges'];
        return $copy;
    }

    static function copyChallenge2($db_row, $connection) {
        $copy = array();
        $copy['id'] = (int) $db_row['id'];
        $copy['creator'] = ApiHelper::loadPerson($db_row['creatorId'], $connection);
        $copy['executer'] = ApiHelper::loadPerson($db_row['executerId'], $connection);
        $copy['title'] = $db_row['title'];
        $copy['description'] = $db_row['description'];
        $copy['created'] = $db_row['created'];
        $copy['started'] = $db_row['started'];
        $copy['finished'] = $db_row['finished'];
        $copy['status'] = ApiHelper::loadStatus($db_row['statusId'], $connection);
        $copy['score'] = (int) $db_row['score'];
        $copy['durationSec'] = (int) $db_row['durationSec'];
        $copy['difficulty'] = ApiHelper::loadDifficulty($db_row['difficultyId'], $connection);
        if ($db_row['started']) {
            date_default_timezone_set("Europe/Prague");
            $started = strtotime($db_row['started']);
            $duration = (int) $copy['durationSec'];
            $dueTime = date("Y-m-d H:i:s", ($started + $duration));
            $copy['dueTime'] = $dueTime;
        }
        return $copy;
    }

    static function getSqlPartForNumberParameter($paramName, $connection, $previous_sql) {
        if (isset($_GET[$paramName]) && is_numeric($_GET[$paramName])) {
            $prefix = '';
            if (!empty($previous_sql)) {
                $prefix = ' AND';
            }
            $numVal = mysqli_real_escape_string($connection, $_GET[$paramName]);
            $paramNameGreater = $paramName.'Greater';
            if (isset($_GET[$paramNameGreater]) && $_GET[$paramNameGreater] === 'true') {
                return $prefix.' '.$paramName.' >= '.$numVal;
            }
            if (isset($_GET[$paramNameGreater]) && $_GET[$paramNameGreater] === 'false') {
                return $prefix.' '.$paramName.' <= '.$numVal;
            }
            return $prefix.' '.$paramName.' = '.$numVal;
        } else {
            return '';
        }
    }

}

?>
