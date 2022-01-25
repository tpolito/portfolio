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
