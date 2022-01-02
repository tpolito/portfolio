<script lang="ts">
  import About from '../components/Home/About.svelte'
  import Activity from '../components/Home/Activity.svelte'
  import Contact from '../components/Home/Contact.svelte'
  import Hero from '../components/Home/Hero.svelte'
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