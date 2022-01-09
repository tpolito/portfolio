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
				_updatedAt
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

<div id="feed">
	<h1>All posts</h1>
	{#if $posts.fetching}
		<Spinner />
	{:else if $posts.error}
		<p>An error</p>
	{:else}
		<Button text="Home" />
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
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		flex-direction: column;
	}
	h1 {
		font-size: 3rem;
		display: flex;
		align-items: center;
		text-align: center;
	}

	a {
		color: var(--headline);
	}
</style>
