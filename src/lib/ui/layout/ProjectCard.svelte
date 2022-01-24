<script lang="ts">
	export let link: string;
	export let title: string = 'Title';
	export let desc: string =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eos architecto fugiat, minima voluptas.';
</script>

<a href={link} class="decoration-none" target="_blank">
	<div class="bg-bgSecondary p-6 rounded cursor-pointer transition-all my-4 hover:-translate-y-1">
		<h4 class="text-2xl text-headline m-0">{title}</h4>
		<p>{desc}</p>
	</div>
</a>

<style>
	/* h4 {
		font-size: 1.5rem;
		color: var(--headline);
		margin: 0;
	}
	a {
		text-decoration: none;
	}
	.card {
		background-color: var(--background-secondary);
		padding: 1.5rem;
		border-radius: 3px;
		cursor: pointer;
		transition: 0.3s;
		margin: 1rem 0;
	}
	.card:hover {
		transform: translateY(-4px);
	} */
</style>
