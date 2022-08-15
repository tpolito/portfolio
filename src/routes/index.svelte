<script lang="ts">
	import { gql, operationStore, query } from '@urql/svelte';
	import PostCard from '$lib/ui/layout/PostCard.svelte';
	import Spinner from '$lib/ui/layout/Spinner.svelte';
	import BlinkingCursor from '$lib/ui/animations/BlinkingCursor.svelte';

	const recentPostQuery = gql`
		query {
			allBlogPosts(orderBy: published_DESC) {
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

<main class="h-full" id="home">
	<section class="flex flex-col items-center pt-8">
		<h2 class="text-headline text-5xl flex items-center mt-auto mb-10 text-center">
			Hi, I'm Tyler.
		</h2>
		<h1 class="text-headline text-5xl flex items-center mt-auto mb-10 text-center">
			A Software Engineer and Game Developer.<BlinkingCursor />
		</h1>
	</section>

	<section class="flex justify-center items-center p-0 flex-col">
		<h3 class="my-4 text-3xl felx items-center text-center text-headline">Latest posts</h3>
		{#if $posts.fetching}
			<Spinner />
		{:else if $posts.error}
			<p>An error</p>
		{:else}
			{#each $posts.data.allBlogPosts as post}
				<PostCard {post} />
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
