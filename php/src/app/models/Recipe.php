<?php
require_once(APP_ROOT . "/librairies/API.php");

class Recipe
{
    private $api;

    public function __construct()
    {
        $this->api = new API();
    }

    public function getRecipe($params)
    {
        return $this->api->get('/random', $params);
    }
}
