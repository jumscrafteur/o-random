<script lang="ts">
	import ContentItem from '$lib/components/ContentItem.svelte';
	import TextItem from '$lib/components/TextItem.svelte';

	export let items: (TacosElement | ImagedTacosElement)[];
</script>

<div class="contentBar">
	{#each items as item}
		{#if 'img' in item && item.img != null}
			<ContentItem {...item} />
		{:else}
			<TextItem name={item.name} />
		{/if}
	{/each}
	{#if items.length === 0}
		<slot />
	{/if}
</div>

<style>
	.contentBar {
		display: flex;

		gap: 10px;
		overflow-x: auto;
		overflow-y: none;

		flex-wrap: wrap;

		padding: 0 0 10px 0;

		scrollbar-color: var(--oorange) var(--oorange_lower);
		scrollbar-width: thin;
	}

	.contentBar::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	.contentBar::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px var(--oorange_lower);
		border-radius: 10px;
	}

	.contentBar::-webkit-scrollbar-thumb {
		background: var(--oorange);
		border-radius: 999px;
	}
</style>
