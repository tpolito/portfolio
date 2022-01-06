<script lang="ts">
	import { initClient, operationStore, query } from '@urql/svelte';

	initClient({
		url: 'https://graphql.datocms.com/preview',
		fetchOptions: () => {
			return {
				headers: {
					'content-type': 'application/json',
					authorization: 'Bearer 8e4b976b32c35a76e44160fb6d0ae7'
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
