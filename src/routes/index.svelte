<script lang="ts">
	import About from '../components/home/About.svelte';
	import Activity from '../components/home/Activity.svelte';
	import Contact from '../components/home/Contact.svelte';
	import Hero from '../components/home/Hero.svelte';
	import Footer from '../components/home/Footer.svelte';
</script>

<Hero />
<About />
<Activity />
<Contact />
<Footer />

<style>
	.section {
		padding: 8rem 0;
	}
	.highlight {
		background-color: var(--primary);
		padding: 2px;
		color: var(--headline);
	}
</style>
