<script lang="ts">
	export let name: string;
	export let img: string;
</script>

<div class="contentItem">
	<img src={img} alt={name} />
	<p>{name}</p>
</div>

<style>
	.contentItem {
		width: 100px;
		height: 100px;

		display: flex;
		flex-direction: column;
		align-items: center;
		/* width: max-content; */
		/* flex: 1 0 auto; */
		flex-shrink: 0;

		border: 2px solid var(--oorange);
		border-radius: 7px;

		color: var(--oorange);
		text-align: center;
		font-size: 14px;
	}

	.contentItem img {
		margin-bottom: -6px;
		object-fit: contain;
		width: 80px;
		height: 80px;
	}
</style>
