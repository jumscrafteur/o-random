<script lang="ts">
	import ContentItem from '$lib/components/ContentItem.svelte';
	import TextItem from '$lib/components/TextItem.svelte';

	import ContentBar from '$lib/components/ContentBar.svelte';

	export let recipe: Recipe;

	$: gratinages = [recipe?.gratFromage!, recipe?.gratGarniture!].filter((el) => el != undefined);
</script>

<div id="recipeContainer">
	<h2>Viandes</h2>

	<ContentBar items={recipe.viandes} />

	<h2>Sauces</h2>

	<ContentBar items={recipe.sauces} />

	<h2>Suppléments</h2>

	<ContentBar items={recipe.supp}>
		<TextItem name="Pas de suppléments 💸" />
	</ContentBar>

	<h2>Gratinage</h2>

	<ContentBar items={gratinages}>
		<TextItem name="Pas de Gratinage 💸" />
	</ContentBar>
</div>
