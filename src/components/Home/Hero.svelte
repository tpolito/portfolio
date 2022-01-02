<script lang="ts">
  import FlipWord from '../UI/FlipWord.svelte';
  import BlinkingCursor from '../UI/BlinkingCursor.svelte';
  import LearnMore from '../UI/LearnMore.svelte';
</script>

<section class="section" id="hero">
  <h1>Hi, I'm Tyler. A Fullstack Software Engineer.<BlinkingCursor /></h1>
  <h2>I design and build software for people using <FlipWord words={['Typescript', 'React', 'Node.js', 'Go', 'C#', 'Godot']} /></h2>
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
  }
  h2 {
    color: var(--paragraph);
  } 
</style>