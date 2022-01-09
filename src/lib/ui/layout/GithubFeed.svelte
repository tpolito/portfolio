<script lang="ts">
	import { onMount } from 'svelte';
	import CommitCard from './CommitCard.svelte';
	import Spinner from './Spinner.svelte';
	import { fetchRecentRepos } from '../../../utils';

	let loading = true;
	let commits;

	fetchRecentRepos().then((data) => {
		commits = data;
		loading = false;
	});
</script>

<div class="container {loading ? 'center' : null}">
	{#if loading}
		<Spinner />
	{:else}
		<div class="line" />
		<div>
			{#each commits as commit}
				<CommitCard commitData={commit} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.container {
		background-color: var(--background-secondary);
		border-radius: 3px;
		padding: 1.5rem;
		display: flex;
		/* height: 564px;
		width: 460px; */
	}
	.center {
		display: grid;
		place-items: center;
	}
	.line {
		border: 1px solid var(--paragraph);
	}
	@media screen and (max-width: 900px) {
		.container {
			display: none;
		}
	}
</style>
