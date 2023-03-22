<form class="params">

    <div>
        <h2>Tailles</h2>

        <div class="sizeBar">

            <div class="sizeItems">

                <?php foreach (["M", "L", "XL"] as $size) { ?>
                    <div class="sizeItem">
                        <input name="size" type="radio" value="<?= $size ?>" id="<?= $size ?>" <?= ($size == 'M' && !isset($_GET['size'])) || (isset($_GET['size']) && $_GET['size']  == $size) ? "checked" : "" ?>>
                        <label for="<?= $size ?>"><?= $size ?></label>
                    </div>
                <?php } ?>

            </div>
        </div>
    </div>


    <div>
        <h2>Options</h2>


        <div class="optBar">

            <div class="optItem">
                <label for="supp_count">Suppléments</label>
                <input id="supp_count" type="number" min="0" max="14" value="<?= isset($_GET['supp_count']) ? $_GET['supp_count'] : 0 ?>" name="supp_count">
            </div>

            <?php
            $checks = [
                "dPoulet" => "Double poulet",
                "tenders" => "Tenders",
                "falafel" => "Falafels"
            ];
            foreach ($checks as $check => $name) { ?>
                <div class="optItem">
                    <input id="<?= $check ?>" name="<?= $check ?>" type="checkbox" <?= isset($_GET[$check]) && $_GET[$check] == 'on' ? "checked" : "" ?>>
                    <label for="<?= $check ?>"><?= $name ?></label>
                </div>
            <?php } ?>

        </div>
    </div>


    <div>
        <h2>Gratinage</h2>

        <div class="optBar">

            <?php
            $checks = [
                "grat_fromage" => "Fromage",
                "grat_garniture" => "Garniture",
            ];
            foreach ($checks as $check => $name) { ?>
                <div class="optItem">
                    <input id="<?= $check ?>" name="<?= $check ?>" type="checkbox" <?= isset($_GET[$check]) && $_GET[$check] == 'on' ? "checked" : "" ?>>
                    <label for="<?= $check ?>"><?= $name ?></label>
                </div>
            <?php } ?>

            <!-- <div class="optItem">
                <input id="grat_fromage" name="grat_fromage" type="checkbox" <?= isset($_GET['grat_fromage']) && $_GET['grat_fromage'] == 'on' ? "checked" : "" ?>>
                <label for="grat_fromage">Fromage</label>
            </div>

            <div class="optItem">
                <input id="grat_garniture" name="grat_garniture" type="checkbox" <?= isset($_GET['grat_garniture']) && $_GET['grat_garniture'] == 'on' ? "checked" : "" ?>>
                <label for="grat_garniture">Garniture</label>
            </div> -->
        </div>

    </div>


    <button id="generate_btn">GENERATE</button>
</form>