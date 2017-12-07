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
        $copy['id'] = $db_row['id'];
        $copy['firstName'] = $db_row['firstName'];
        $copy['lastName'] = $db_row['lastName'];
        $copy['nickName'] = $db_row['nickName'];
        $copy['scoreChallenges'] = $db_row['scoreChallenges'];
        return $copy;
    }

    static function copyChallenge($db_row) {
        $copy = array();
        $copy['id'] = $db_row['id'];
        $copy['creatorId'] = $db_row['creatorId'];
        $copy['executerId'] = $db_row['executerId'];
        $copy['title'] = $db_row['title'];
        $copy['description'] = $db_row['description'];
        $copy['created'] = $db_row['created'];
        $copy['started'] = $db_row['started'];
        $copy['finished'] = $db_row['finished'];
        $copy['statusId'] = $db_row['statusId'];
        $copy['score'] = $db_row['score'];
        $copy['durationSec'] = $db_row['durationSec'];
        $copy['difficultyId'] = $db_row['difficultyId'];
        if ($db_row['started']) {
            date_default_timezone_set("Europe/Prague");
            $started = strtotime($db_row['started']);
            $duration = (int) $copy['durationSec'];
            $nowTime = time();
            $timeToFinish = $started + $duration - $nowTime;
            $copy['timeToFinishSec'] = $timeToFinish;
        }
        return $copy;
    }

}

?>
