<script lang="ts">
  import About from '../components/home/About.svelte'
  import Activity from '../components/home/Activity.svelte'
  import Contact from '../components/home/Contact.svelte'
  import Hero from '../components/home/Hero.svelte'
  import Footer from '../components/home/Footer.svelte'
  import { theme } from '../stores/themeStore'
  import { lightTheme, darkTheme } from '../theme'

  let rootElement: HTMLDivElement;
  let themeValue = true; 
  $: currentTheme = themeValue ? darkTheme : lightTheme;

  const unsubscribe = theme.subscribe(value => {
    console.log(value)
    themeValue = value
  })
  // Ugly but I couldn't find a better way when searching
  $:rootElement && Object.keys(currentTheme).forEach(prop => {
    rootElement.style.setProperty(`--${prop}`, currentTheme[prop])
  })

  function handleThemeToggle() {
    theme.update(value => !value)
  }
</script>

<div bind:this={rootElement}>
  <button style="position: fixed;" on:click={handleThemeToggle} >Change theme</button>
  <Hero />
  <About />
  <Activity />
  <Contact />
  <Footer />
</div>

<style>
  /* Globals */
  :root {
    --background: inherit;
    --background-secondary: inherit; 
    --headline: inherit;
    --paragraph: inherit;
    --primary: inherit;
    --secondary: inherit;
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
  :global(button) {
    height: 2.5rem;
    width: 12rem;
    background-color: var(--primary);
    color: var(--headline);
    font-weight: 700;
    border-radius: 3px;
    cursor: pointer;
    border: none;
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