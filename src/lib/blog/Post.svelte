<script lang="ts">
	import hljs from 'highlight.js';
	import { marked } from 'marked';
	export let post: string;

	marked.setOptions({
		renderer: new marked.Renderer(),
		highlight: function (code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	});

	let markdown = marked.parse(post);
	console.log(markdown);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/solarized-light.min.css"
	/>
</svelte:head>

<div class="post">
	{@html markdown}
</div>
