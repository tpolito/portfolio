<script lang="ts">
	import hljs from 'highlight.js';
	import { marked } from 'marked';
	import { formatDate } from '../../utils';
	export let post: string;
	export let updatedAt: string;
	export let publishedAt: string;

	marked.setOptions({
		renderer: new marked.Renderer(),
		highlight: function (code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	});

	let markdown = marked.parse(post);
	console.log(updatedAt);
	console.log(publishedAt);
</script>

<svelte:head>
	<!-- We need to load this to enable code highlighting on the post pages  -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/solarized-light.min.css"
	/>
</svelte:head>

<div class="post">
	{@html markdown}
	{#if updatedAt !== publishedAt}
		<hr class="w-1/2 mb-2" />
		<p>Last Updated: {formatDate(updatedAt)}</p>
	{/if}
</div>
