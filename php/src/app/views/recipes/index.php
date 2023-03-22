<div class="header">
    <img src="/img/logo_text.svg" alt="" class="logo" height="52px">
</div>

<main>
    <h1>Fait ta o'recette</h1>

    <?php
    require_once(APP_ROOT . "/views/inc/form.php");

    if (count($_GET) > 0)
        require_once(APP_ROOT . "/views/inc/recipeContainer.php");
    ?>

</main>

<footer>Made with ❤️ by Jums &amp; Johnny</footer>



<script src="index.js"></script>