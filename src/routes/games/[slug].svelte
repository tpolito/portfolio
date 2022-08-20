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

	export let slug: string;

	const gamePostQuery = gql`
		query GamePost($slug: String!) {
			gamePost(filter: { slug: { eq: $slug } }) {
				id
				title
				post
				_firstPublishedAt
				_updatedAt
			}
		}
	`;

	const post = operationStore(gamePostQuery, { slug });

	query(post);
</script>

{#if $post.fetching}
	<Spinner />
{:else if $post.error}
	<p>An error</p>
{:else}
	<Post
		post={$post.data.gamePost.post}
		updatedAt={$post.data.gamePost._updatedAt}
		publishedAt={$post.data.gamePost._firstPublishedAt}
	/>
{/if}
