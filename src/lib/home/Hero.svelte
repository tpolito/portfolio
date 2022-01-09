<script lang="ts">
	import FlipWord from '../ui/animations/FlipWord.svelte';
	import BlinkingCursor from '../ui/animations/BlinkingCursor.svelte';
	import LearnMore from '../ui/layout/LearnMore.svelte';
	import Button from '../ui/layout/Button.svelte';
</script>

<section class="section" id="hero">
	<Button pull={'right'} text="Blog" link="/blog" />
	<h1>Hi, I'm Tyler. A Fullstack Software Engineer.<BlinkingCursor /></h1>
	<h2 class="subtitle">
		I design and build software for people using <FlipWord
			words={['Typescript', 'React', 'Node.js', 'Go', 'C#', 'Godot']}
		/>
	</h2>
	<LearnMore />
</section>

<style>
	#hero {
		background-color: var(--background);
		background-image: url('../../assets/animated-shapes.svg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		flex-direction: column;
	}
	h1 {
		color: var(--headline);
		font-size: 3rem;
		display: flex;
		align-items: center;
		margin-top: auto;
		text-align: center;
	}
	h2 {
		text-align: center;
	}
	.subtitle {
		font-size: 1.3rem;
		color: var(--paragraph);
	}
</style>
