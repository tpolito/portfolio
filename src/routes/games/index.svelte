<script lang="ts">
	import Timeline from '$lib/games/Timeline.svelte';
</script>

<section id="games" class="pt-16 h-[calc(100vh-54px)]">
	<h3 class="text-center font-semibold text-3xl text-headline mb-8">
		Currently Playing: <span class="p-1 bg-primary text-headline">Xenoblade Cronicles 3</span>
	</h3>
	<div class="flex flex-col  items-center ml-16">
		<h1 class="text-3xl ml-16 mb-4">Past Games</h1>
		<Timeline />
	</div>
</section>
