<script lang="ts">
  import About from '../components/home/About.svelte'
  import Activity from '../components/home/Activity.svelte'
  import Contact from '../components/home/Contact.svelte'
  import Hero from '../components/home/Hero.svelte'
</script>

<div>
  <Hero />
  <About />
  <Activity />
  <Contact />
</div>

<style>
  /* Globals */
  :root {
    --background: #0f0e17;
    --background-secondary: #242629;
    --background-terirary: #16161a; 
    --headline: #fffffe;
    --paragraph: #94a1b2;
    --primary: #7f5af0;
    --secondary: #2cb67d;
  }
  :global(body){
    /* background-color: var(--background); */
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  :global(p) {
    color: var(--paragraph);
    font-size: 1.2rem;
    font-weight: 500;
  }
  :global(h2) {
    font-size: 3rem;
    color: var(--headline);
    margin: 0;
  }
  :global(.section){
    padding: 8rem 0;
  }
  :global(.highlight) {
    background-color: var(--primary);
    padding: 2px;
    color: var(--headline);
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>