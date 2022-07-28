<script lang="ts">
	import { gql, operationStore, query } from '@urql/svelte';
	import PostCard from '../../lib/ui/layout/PostCard.svelte';
	import Spinner from '../../lib/ui/layout/Spinner.svelte';

	const recentPostQuery = gql`
		query {
			allBlogPosts(orderBy: published_DESC, first: 4) {
				id
				title
				_status
				published
				updatedAt
				slug
				description
			}
		}
	`;

	const posts = operationStore(recentPostQuery);

	query(posts);
</script>

<svelte:head>
	<title>Blog - TPolito</title>
	<html lang="en" />
</svelte:head>

<main class="h-screen" id="feed">
	<div class="flex justify-center items-center p-0 flex-col">
		<h1 class="my-4 text-5xl felx items-center text-center">Latest posts</h1>
		{#if $posts.fetching}
			<Spinner />
		{:else if $posts.error}
			<p>An error</p>
		{:else}
			{#each $posts.data.allBlogPosts as post}
				<PostCard {post} />
			{/each}
			<a class="text-headline" href="/blog/viewAll">View all</a>
		{/if}
	</div>
</main>

<style>
	#feed {
		background-color: var(--background);
		background-image: url('../../assets/animated-shapes.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
