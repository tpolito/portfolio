<script context="module">
	export const load = async ({ params }) => ({
		props: {
			key: params.path
		}
	});
</script>

<script lang="ts">
	import { initClient } from '@urql/svelte';
	import { variables } from '../utils';
	import PageTransition from '../lib/ui/animations/PageTransition.svelte';
	import Navbar from '$lib/ui/layout/Navbar.svelte';
	import '../tailwind.css';

	export let key;

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

<PageTransition refresh={key}>
	<Navbar />
	<slot />
</PageTransition>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<!-- <link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
		rel="stylesheet"
	/> -->
</svelte:head>
