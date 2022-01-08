<script lang="ts">
	import { marked } from 'marked';
	export let post: string;

	let markdown = marked.parse(post);
</script>

<div class="post">
	<a href="/blog">Back to posts</a>
	{@html markdown}
</div>

<style>
</style>
