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

?>
