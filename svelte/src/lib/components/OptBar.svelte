<script>
	// @ts-nocheck

	export let inputs;

	export let values;
</script>

<div class="optBar">
	{#each Object.entries(inputs) as [title, inputData]}
		{#if inputData.type == 'checkbox'}
			<div class="optItem">
				<input {...inputData} type="checkbox" bind:checked={values[inputData.id]} />
				<label for={inputData.id}>{title}</label>
			</div>
		{:else}
			<div class="optItem">
				<label for={inputData.id}>{title}</label>
				<input {...inputData} bind:value={values[inputData.id]} />
			</div>
		{/if}
	{/each}
</div>

<style>
	/* ============== */
	/* = OPTION BAR = */
	/* ============== */

	.optBar {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		/* padding: 10px 0; */
	}

	.optItem {
		display: flex;
		border: 2px solid var(--oorange);
		border-radius: 6.2px;

		overflow: none;
	}

	.optItem label {
		padding: 3px 6px;

		color: var(--oorange);
		font-size: 12px;
		white-space: nowrap;

		cursor: pointer;
	}

	.optItem input[type='number'] {
		width: 21px;

		background-color: var(--oorange);
		border: none;
		outline: none;

		color: #fff;
		text-align: center;

		appearance: textfield;
	}

	/* Chrome */
	.optItem input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Opéra*/
	.optItem input[type='number']::-o-inner-spin-button {
		-o-appearance: none;
		margin: 0;
	}

	.optItem input[type='checkbox'] {
		display: none;
	}

	.optItem input[type='checkbox']:checked + label {
		background-color: var(--oorange_lower);
	}
</style>
