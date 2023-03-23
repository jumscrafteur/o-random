<script lang="ts">
	export let name: string;
</script>

<div class="textItem">
	<p>{name}</p>
</div>

<style>
	.textItem {
		padding: 0.25rem 0.5rem;
		border: 2px solid var(--oorange);
		border-radius: 7px;

		color: var(--oorange);
		text-align: center;
		width: max-content;
		white-space: nowrap;
		font-size: 14px;
	}
</style>
