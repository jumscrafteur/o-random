<div id="recipeContainer" style="display: block;">
    <?php
    $bars = [
        "viandeContentBar" => [
            "title" => "Viandes",
            "data" => $data["viandes"],
        ],
        "sauceContentBar" => [
            "title" => "Sauces",
            "data" => $data["sauces"],
        ]
    ];

    foreach ($bars as $id => $bar) { ?>

        <h2><?= $bar['title'] ?></h2>
        <div class="contentBar" id="<?= $id ?>">

            <?php foreach ($bar['data'] as $item) { ?>

                <div class="contentItem"><img src="<?= $item['img'] ?>">
                    <p><?= $item['name'] ?></p>
                </div>

            <?php } ?>
        </div>

    <?php } ?>

    <?php
    $bars = [
        "suppContentBar" => [
            "title" => "Suppléments",
            "data" => $data['supp'],
        ],
        "gratContentBar" => [
            "title" => "Gratinage",
            "data" => $data['gratinage'],
        ]
    ];

    foreach ($bars as $id => $bar) { ?>

        <h2><?= $bar['title'] ?></h2>
        <div class="contentBar" id="<?= $id ?>">

            <?php
            if (count($bar['data']) == 0) { ?>
                <div class="textItem">
                    <p>Pas de <?= strtolower($bar['title']) ?> 💸</p>
                </div>
            <?php
            }

            foreach ($bar['data'] as $item) { ?>
                <div class="textItem">
                    <p><?= $item['name'] ?></p>
                </div>
            <?php } ?>
        </div>

    <?php } ?>

</div>