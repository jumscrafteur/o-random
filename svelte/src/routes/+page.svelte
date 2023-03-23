<script lang="ts">
	import Header from '$lib/Header.svelte';
	import ParamPanel from '$lib/ParamPanel.svelte';
	import RecipeContainer from '$lib/RecipeContainer.svelte';
	import Footer from '$lib/Footer.svelte';

	let recipe: Recipe;

	const handlenewRecipe = (event: newRecipeEvent) => {
		recipe = event.detail.recipe;
	};
</script>

<Header />

<main>
	<h1>Fait ta o'recette</h1>
	<ParamPanel on:newRecipe={handlenewRecipe} />

	{#if recipe}
		<RecipeContainer {recipe} />
	{/if}
</main>

<Footer />

<style>
	main {
		padding: 11.6px 11.6px 50px 11.6px;
		margin: 0 auto;
		width: clamp(100px, 600px, 100%);
		min-height: 100%;
	}
</style>
