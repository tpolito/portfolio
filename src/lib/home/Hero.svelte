<script lang="ts">
	import FlipWord from '../ui/animations/FlipWord.svelte';
	import BlinkingCursor from '../ui/animations/BlinkingCursor.svelte';
	import LearnMore from '../ui/layout/LearnMore.svelte';
</script>

<section class="bg-bg h-[calc(100vh-52px)] flex justify-center items-center p-0 flex-col" id="hero">
	<h1 class="text-headline text-5xl flex items-center mt-auto mb-10 text-center">
		Hi, I'm Tyler. A Fullstack Software Engineer.<BlinkingCursor />
	</h1>
	<h2 class="text-xl text-paragraph text-center font-thin" id="sub-title">
		I design and build software for people using <FlipWord
			words={['Typescript', 'React', 'Node.js', 'Go', 'C#', 'Godot']}
		/>
	</h2>
	<LearnMore />
</section>

<style>
	#hero {
		background-image: url('../../assets/animated-shapes.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
