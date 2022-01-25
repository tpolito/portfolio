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

<div class="bg-bgSecondary rounded p-6 flex  {loading ? 'center' : null}">
	{#if loading}
		<Spinner />
	{:else}
		<div class="border-2 border-solid border-paragraph" />
		<div>
			{#each commits as commit}
				<CommitCard commitData={commit} />
			{/each}
		</div>
	{/if}
</div>
