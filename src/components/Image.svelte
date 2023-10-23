<script lang="ts">
	import { css } from 'styled-system/css';
	export let imgUrl: string;
	export let caption: string;
	export let alt: string | null = null;

	const imgContainer = css({});

	const imgCaption = css({
		color: 'text',
		textAlign: 'center',
		fontSize: '14px'
	});
</script>

<div class={imgContainer}>
	<picture>
		<source srcset={imgUrl} />
		<img src={imgUrl} alt={alt ?? caption} />
	</picture>
	{#if caption}
		<p class={imgCaption}>{caption}</p>
	{/if}
</div>
