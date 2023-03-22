<?php
require_once(APP_ROOT . "/librairies/Controller.php");

class Recipes extends Controller
{
    private $RecipeModel;

    public function __construct()
    {
        $this->RecipeModel = $this->loadModel('Recipe');
    }

    public function index()
    {
        if (count($_GET) == 0)
            return $this->render("index", []);

        $params = [];



        $params["size"] = isset($_GET['size']) ? $_GET['size'] : 'M';
        $params["suppQty"] = isset($_GET['supp_count']) ? $_GET['supp_count'] : 0;
        $params["gratFromage"] = isset($_GET['grat_fromage']) && $_GET['grat_fromage'] == 'on' ? 1 : 0;
        $params["gratGarniture"] = $params["gratFromage"] == 1 && isset($_GET['grat_garniture']) && $_GET['grat_garniture'] == 'on' ? 1 : 0;

        $blackList = [];
        if (!isset($_GET["dPoulet"]) && $_GET["dPoulet"] != "o")
            $blackList[] = "Poulet mariné";

        if (!isset($_GET["tenders"]) && $_GET["tenders"] != "o")
            $blackList[] = "Tenders poulet";

        if (!isset($_GET["falafel"]) && $_GET["falafel"] != "o")
            $blackList[] = "Falafel";

        $params["viandeBlackList"] = implode(",", $blackList);


        $data = $this->RecipeModel->getRecipe($params);

        $data['gratinage'] = [];

        if (isset($data["gratFromage"])) {
            $data['gratinage'][] = $data["gratFromage"];
            unset($data["gratFromage"]);
        }

        if (isset($data["gratGarniture"])) {
            $data['gratinage'][] = $data["gratGarniture"];
            unset($data["gratGarniture"]);
        }

        $this->render("index", $data);
    }
}
