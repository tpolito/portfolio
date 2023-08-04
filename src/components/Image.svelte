<script lang="ts">
	export let image: string;
	export let caption: string;
</script>

<div class="image-container">
	<div class="image" style="background-image: url({image});" />
</div>
{#if caption}
	<p>{caption}</p>
{/if}

<style>
	.image-container {
		height: 500px;
	}

	.image {
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
		height: 100%;
	}

	p {
		/* text */
		color: #94a1b2;
		text-align: center;
		font-size: 14px;
	}
</style>
