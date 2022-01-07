<script context="module">
	export const load = async ({ params }) => {
		const { slug } = params;

		return { props: { slug } };
	};
</script>

<script lang="ts">
	import { gql, operationStore, query } from '@urql/svelte';
	import { variables } from '../../utils';
	import Spinner from '../../components/ui/layout/Spinner.svelte';

	export let slug;

	const postQuery = gql`
		query Post($slug: String!) {
			blogPost(filter: { slug: { eq: $slug } }) {
				id
				title
				post
			}
		}
	`;

	const post = operationStore(postQuery, { slug });

	query(post);
</script>

<div id="feed">
	{#if $post.fetching}
		<Spinner />
	{:else if $post.error}
		<p>An error</p>
	{:else}
		<pre />
	{/if}
</div>

<style>
</style>
