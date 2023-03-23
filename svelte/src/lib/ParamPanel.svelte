<script lang="ts">
	import SizeBar from '$lib/components/SizeBar.svelte';
	import OptBar from '$lib/components/OptBar.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ newRecipe: { recipe: Recipe } }>();

	let size: 'M' | 'L' | 'XL';

	let optionsValues = {
		supp_count: 0,
		dPoulet: false,
		tenders: false,
		falafel: false
	};

	let gratinageValues = {
		grat_fromage: false,
		grat_garniture: false
	};

	$: recipeParams = { size, ...optionsValues, ...gratinageValues };

	const sendNewRecipeEvent = async () => {
		let r: Recipe = await cook();

		dispatch('newRecipe', {
			recipe: r
		});
	};

	const cook = async (): Promise<Recipe> => {
		const API_URL = 'http://localhost:3000';
		const url = new URL(`${API_URL}/random`);

		let params: Record<string, any> = {
			size,
			suppQty: recipeParams.supp_count,
			gratFromage: recipeParams.grat_fromage ? 1 : 0,
			gratGarniture: recipeParams.grat_garniture ? 1 : 0
		};

		let viandeBlackList = [];

		if (!recipeParams.dPoulet) viandeBlackList.push('Poulet mariné');
		if (!recipeParams.falafel) viandeBlackList.push('Falafel');
		if (!recipeParams.tenders) viandeBlackList.push('Tenders poulet');

		if (viandeBlackList.length > 0) params.viandeBlackList = viandeBlackList;

		url.search = new URLSearchParams(params).toString();

		const recipe_res = await fetch(url);
		return recipe_res.json();
	};
</script>

<div class="params">
	<div>
		<h2>Tailles</h2>
		<SizeBar bind:value={size} />
	</div>

	<div>
		<h2>Options</h2>
		<OptBar
			inputs={{
				Suppléments: {
					id: 'supp_count',
					type: 'number',
					min: '0',
					max: '14',
					value: 0
				},
				'Double poulet': {
					id: 'dPoulet',
					type: 'checkbox'
				},
				Tenders: {
					id: 'tenders',
					type: 'checkbox'
				},
				Falafels: {
					id: 'falafel',
					type: 'checkbox'
				}
			}}
			bind:values={optionsValues}
		/>
	</div>

	<div>
		<h2>Gratinage</h2>

		<OptBar
			inputs={{
				Fromage: {
					id: 'grat_fromage',
					type: 'checkbox'
				},
				Garniture: {
					id: 'grat_garniture',
					type: 'checkbox'
				}
			}}
			bind:values={gratinageValues}
		/>
	</div>

	<button id="generate_btn" on:click={sendNewRecipeEvent}>GENERATE</button>
</div>

<style>
	.params {
		padding: 1rem;
		background-color: rgba(235, 96, 63, 0.075);
		border-radius: 1rem;
		border: 2px dashed var(--oorange);

		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	button {
		background-color: var(--oorange);
		padding: 0.5rem 1rem;
		width: 100%;

		border: none;
		border-radius: 0.5rem;

		color: #fff;

		cursor: pointer;
	}

	button:disabled {
		background-color: hsl(12, 50%, 80%);
	}
</style>
