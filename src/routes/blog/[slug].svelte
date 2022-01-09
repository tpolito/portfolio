<script context="module">
	export const load = async ({ params }) => {
		const { slug } = params;

		return { props: { slug } };
	};
</script>

<script lang="ts">
	import { gql, operationStore, query } from '@urql/svelte';
	import Spinner from '../../lib/ui/layout/Spinner.svelte';
	import Post from '../../lib/blog/Post.svelte';

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
	console.log(post);
</script>

{#if $post.fetching}
	<Spinner />
{:else if $post.error}
	<p>An error</p>
{:else}
	<Post post={$post.data.blogPost.post} />
{/if}

<style>
</style>
