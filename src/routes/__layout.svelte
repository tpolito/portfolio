<script lang="ts">
	import { initClient } from '@urql/svelte';
	import { variables } from '../utils';

	initClient({
		url: 'https://graphql.datocms.com/preview',
		fetchOptions: () => {
			return {
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${variables.viteDatoCms}`
				}
			};
		}
	});
</script>

<slot />

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style>
	:root {
		--background: #16161a;
		--background-secondary: #242629;
		--headline: #fffffe;
		--paragraph: #94a1b2;
		--primary: #7f5af0;
		--secondary: #2cb67d;
	}
	:global(body) {
		background-color: var(--background);
		font-family: 'Roboto', sans-serif;
		margin: 0;
		padding: 0;
		font-size: 16px;
	}
	:global(p) {
		color: var(--paragraph);
		font-size: 1.2rem;
		font-weight: 500;
	}
	:global(h1) {
		color: var(--headline);
	}
	:global(h2) {
		font-size: 3rem;
		color: var(--headline);
		margin: 0;
	}
	:global(button) {
		height: 2.5rem;
		width: 12rem;
		background-color: var(--primary);
		color: var(--headline);
		font-weight: 700;
		border-radius: 3px;
		cursor: pointer;
		border: none;
	}
	:global(.section) {
		padding: 8rem 0;
	}
	:global(.highlight) {
		background-color: var(--primary);
		padding: 2px;
		color: var(--headline);
	}

	:global(.post img) {
		display: block;
		height: 10rem;
		margin: 0 auto;
	}

	:global(.post) {
		width: 50%;
		padding: 2rem;
		margin: 2rem auto;
		background-color: var(--background-secondary);
		border-radius: 4px;
		color: var(--paragraph);
		line-height: 1.6rem;
	}
	:global(.post p) {
		font-size: 1rem;
	}
	:global(.post h3) {
		color: var(--headline);
	}
	:global(.post a) {
		color: var(--primary);
		padding: 2px;
		font-weight: 500;
	}
	:global(.post pre) {
		background-color: var(--background);
		padding: 0.8rem;
		border-radius: 3px;
	}
</style>
