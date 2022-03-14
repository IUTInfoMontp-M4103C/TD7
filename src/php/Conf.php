<?php

class Conf {

    private static $database = array(
        'hostname' => 'webinfo.iutmontp.univ-montp2.fr',
        'database' => '',   // le nom de votre base de données (votre login)
        'login'    => '',   // votre login
        'password' => ''    // le mot de passe pour la connexion à la base de données
    );

    static public function getLogin() {
        return self::$database['login'];
    }

    static public function getHostname() {
        return self::$database['hostname'];
    }

    static public function getDatabase() {
        return self::$database['database'];
    }

    static public function getPassword() {
        return self::$database['password'];
    }

}

?>
