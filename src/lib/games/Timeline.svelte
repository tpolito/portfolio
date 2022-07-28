<script lang="ts">
	import { onMount } from 'svelte';
	const nodes: Array<{ name: string; date: string }> = [
		{
			name: 'Crystal Project',
			date: 'July 2022'
		},
		{
			name: 'Elden Ring',
			date: 'June 2022'
		},
		{
			name: 'Ember Knights',
			date: 'May 2022'
		},
		{
			name: 'Crystal Project',
			date: 'July 2022'
		},
		{
			name: 'Elden Ring',
			date: 'June 2022'
		},
		{
			name: 'Ember Knights',
			date: 'May 2022'
		},
		{
			name: 'Crystal Project',
			date: 'July 2022'
		},
		{
			name: 'Elden Ring',
			date: 'June 2022'
		},
		{
			name: 'Ember Knights',
			date: 'May 2022'
		}
	];

	let timeline;
	let distanceToTop = 177;
	onMount(() => {
		timeline = document.querySelector('#timeline');
		distanceToTop = window.pageYOffset + timeline.getBoundingClientRect().top;
	});
</script>

<main>
	<ol id="timeline" class="relative border-l border-primary">
		{#each nodes as node, i}
			<li class="mb-10 ml-4">
				<div class="absolute w-4 h-4 bg-primary rounded-full mt-1.5 -left-2 border border-bg" />
				<time class="mb-1 text-lg font-normal leading-none text-paragraph">{node.date}</time>
				<h3 class="text-xl font-semibold text-headline">{node.name}</h3>
			</li>
		{/each}
	</ol>
</main>
