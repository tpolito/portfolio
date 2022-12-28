<script lang="ts">
	export let images: string[];
	let imgIndex = 0;

	const prev = () => {
		imgIndex = imgIndex - 1 >= 0 ? imgIndex - 1 : images.length - 1;
	};

	const next = () => {
		imgIndex = (imgIndex + 1) % images.length;
	};

	// TODO: Consider using this transition on the images
</script>

<div class="slider-container">
	{#each [images[imgIndex]] as src (imgIndex)}
		<div class="image" style="background-image: url({src});" />
	{/each}
</div>
<div class="controls">
	<button on:click={prev}>Prev</button>
	<button on:click={next}>Next</button>
</div>

<style>
	.slider-container {
		height: 500px;
	}

	.image {
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
		height: 100%;
	}

	.controls {
		display: flex;
		justify-content: space-between;
	}

	.controls button {
		padding: 2px;
		background: var(--bg-tint);
		border: 1px solid var(--purple-tint);
		border-radius: 4px;
		margin-top: 3px;
		color: var(--text-light);
		transition: all 200ms;
	}

	.controls button:hover {
		border: 1px solid var(--purple);
	}
</style>
