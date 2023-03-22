<?php
require_once("/var/www/html/bootstrap.php");

require_once(APP_ROOT . "/controllers/Recipes.php");

$r = new Recipes();

$r->index();
