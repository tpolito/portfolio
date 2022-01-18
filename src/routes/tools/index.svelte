<script lang="ts">
	import ToolCard from '$lib/tools/ToolCard.svelte';
	import { toolCards } from '../../data';
</script>

<div class="container">
	<a class="home-link" href="/">Home</a>
	<h1>Tools</h1>
	{#each toolCards as tool}
		<ToolCard title={tool.title} link={tool.link} />
	{/each}
</div>

<style>
	.container {
		background-image: url('../../assets/animated-shapes.svg');
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		height: 100vh;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
	.home-link {
		position: absolute;
		top: 2rem;
		left: 2rem;
		color: var(--headline);
	}
</style>
