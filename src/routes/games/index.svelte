<script lang="ts">
	import { gql, operationStore, query } from '@urql/svelte';
	import PostCard from '$lib/ui/layout/PostCard.svelte';
	import Spinner from '$lib/ui/layout/Spinner.svelte';
	import BlinkingCursor from '$lib/ui/animations/BlinkingCursor.svelte';

	const currentGameQuery = gql`
		query {
			currentlyPlaying {
				currentlyPlaying
			}
		}
	`;

	const gamePostsQuery = gql`
		query {
			allGamePosts(orderBy: _firstPublishedAt_DESC) {
				id
				title
				_status
				_firstPublishedAt
				_updatedAt
				slug
				description
			}
		}
	`;

	const currentGame = operationStore(currentGameQuery);
	const gamePosts = operationStore(gamePostsQuery);

	query(currentGame);
	query(gamePosts);
	console.log(gamePosts);
</script>

<svelte:head>
	<title>Games - TPolito</title>
	<html lang="en" />
</svelte:head>

<main class="h-full" id="home">
	<section class="flex flex-col items-center pt-8">
		<h1 class="text-headline text-4xl flex items-center mt-auto mb-10 text-center">
			{#if $currentGame.fetching}
				Currently Playing:
			{:else if $currentGame.error}
				Currently Playing: <span class="text-primary">Path of Exile</span>
			{:else}
				Currently Playing: <span class="pl-2 text-primary">
					{$currentGame.data.currentlyPlaying.currentlyPlaying}</span
				>
			{/if}
		</h1>
	</section>

	<section class="flex items-center p-0 flex-col min-h-screen">
		<h3 class="my-4 text-3xl felx items-center text-center text-headline">Games I've Played</h3>
		{#if $gamePosts.fetching}
			<Spinner />
		{:else if $gamePosts.error}
			<p>An error</p>
		{:else}
			{#each $gamePosts.data.allGamePosts as post}
				<PostCard {post} ref="games" />
			{/each}
		{/if}
	</section>
</main>

<style>
	#home {
		/* background-color: var(--background); */
		background-image: url('../assets/animated-shapes.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
