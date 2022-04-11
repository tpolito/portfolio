<script lang="ts">
	import Button from '$lib/ui/layout/Button.svelte';
	import { marked } from 'marked';
	export let post: string;
	let markdown = marked.parse(post);
</script>

<Button link="/blog" text="Back" />
<div class="post">
	{@html markdown}
</div>
