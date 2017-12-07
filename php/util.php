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

    static function copyUser($db_row) {
        $copy = array();
        $copy['id'] = (int) $db_row['id'];
        $copy['firstName'] = $db_row['firstName'];
        $copy['lastName'] = $db_row['lastName'];
        $copy['nickName'] = $db_row['nickName'];
        $copy['scoreChallenges'] = (int) $db_row['scoreChallenges'];
        return $copy;
    }

    static function copyChallenge($db_row) {
        $copy = array();
        $copy['id'] = (int) $db_row['id'];
        $copy['creatorId'] = $db_row['creatorId'] == null ? null : (int) $db_row['creatorId'];
        $copy['executerId'] = $db_row['executerId'] == null ? null : (int) $db_row['executerId'];
        $copy['title'] = $db_row['title'];
        $copy['description'] = $db_row['description'];
        $copy['created'] = $db_row['created'];
        $copy['started'] = $db_row['started'];
        $copy['finished'] = $db_row['finished'];
        $copy['statusId'] = (int) $db_row['statusId'];
        $copy['score'] = (int) $db_row['score'];
        $copy['durationSec'] = (int) $db_row['durationSec'];
        $copy['difficultyId'] = (int) $db_row['difficultyId'];
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
