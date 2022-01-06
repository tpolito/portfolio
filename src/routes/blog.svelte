<script lang="ts">
	import { initClient, operationStore, query } from '@urql/svelte';
	import { variables } from '../utils';

	initClient({
		url: 'https://graphql.datocms.com/preview',
		fetchOptions: () => {
			return {
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${variables.datoCms}`
				}
			};
		}
	});

	const test = operationStore(`
		query {
			allBlogPosts {
				id
				title
				published
  		}
		}
	`);

	query(test);
</script>

{#if $test.fetching}
	<p>loading...</p>
{:else if $test.error}
	<p style="color: red">error!</p>
{:else}
	<p>We got it! <strong>Check the console</strong></p>
{/if}

<style>
</style>
