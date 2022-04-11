<script lang="ts">
	import { gql, operationStore, query } from '@urql/svelte';
	import PostCard from '../../lib/ui/layout/PostCard.svelte';
	import Spinner from '../../lib/ui/layout/Spinner.svelte';
	import Button from '../../lib/ui/layout/Button.svelte';

	const recentPostQuery = gql`
		query {
			allBlogPosts {
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
	<title>View all posts - TPolito</title>
	<html lang="en" />
</svelte:head>

<div class="flex justify-center items-center p-0 flex-col" id="feed">
	<h1 class="my-4 text-5xl felx items-center text-center">All Posts</h1>
	{#if $posts.fetching}
		<Spinner />
	{:else if $posts.error}
		<p>An error</p>
	{:else}
		<Button text="Back" link="/blog" />
		{#each $posts.data.allBlogPosts as post}
			<PostCard {post} />
		{/each}
	{/if}
</div>

<style>
	#feed {
		background-color: var(--background);
		background-image: url('../../assets/animated-shapes.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
