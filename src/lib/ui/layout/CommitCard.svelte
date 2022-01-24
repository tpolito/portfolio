<script lang="ts">
	import { truncateString } from '../../../utils';
	import type { tCommit } from '../../../types';
	export let commitData: tCommit;

	const { commit } = commitData;
	const { message, committer } = commit;
	const { date } = committer;
	let dateFormatted = new Date(date).toDateString();
</script>

<div class="p-4 my-4 mx-2 flex justify-start items-center relative">
	<div class="absolute w-3 h-1 bg-paragraph -left-2" />
	<img
		src="https://avatars.githubusercontent.com/u/29431348?v=4"
		class="rounded-full w-10 h-10"
		alt="github avatar"
	/>
	<div>
		<p class="leading-4 text-sm ml-2 text-headline"><em>tpolito - {dateFormatted}</em></p>
		<p class="leading-4 text-sm ml-2">{truncateString(message, 60)}</p>
	</div>
</div>

<style>
</style>
