<script lang="ts">
	export let value: 'M' | 'L' | 'XL' = 'M';
</script>

<div class="sizeBar">
	<div class="sizeItems">
		<div class="sizeItem">
			<input name="size" type="radio" value="M" id="M" bind:group={value} />
			<label for="M">M</label>
		</div>

		<div class="sizeItem">
			<input name="size" type="radio" value="L" id="L" bind:group={value} />
			<label for="L">L</label>
		</div>

		<div class="sizeItem">
			<input name="size" type="radio" value="XL" id="XL" bind:group={value} />
			<label for="XL">XL</label>
		</div>
	</div>
</div>

<style>
	/* ============ */
	/* = SIZE BAR = */
	/* ============ */

	.sizeBar {
		color: var(--oorange);
	}

	.sizeBar .sizeItems {
		display: flex;
		gap: 10px;
	}

	.sizeBar .sizeItems .sizeItem {
		height: 29px;
		width: 29px;

		display: flex;

		border: 2px solid var(--oorange);
		border-radius: 4.5px;
	}

	.sizeBar .sizeItems .sizeItem input[type='radio'] {
		display: none;
	}

	.sizeBar .sizeItems .sizeItem label {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 25px;

		cursor: pointer;
	}

	.sizeBar .sizeItems .sizeItem input:checked + label {
		background-color: var(--oorange_lower);
	}
</style>
