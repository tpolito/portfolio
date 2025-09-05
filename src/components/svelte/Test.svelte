<script lang="ts">
	import { onMount } from 'svelte';

	let count = $state(0);
	let canvas: HTMLCanvasElement | null = $state(null);
	let ctx: CanvasRenderingContext2D | null = $state(null);
	onMount(() => {
		canvas = document.getElementById('canvas') as HTMLCanvasElement;
		ctx = canvas.getContext('2d');

		if (ctx) {
			ctx.fillStyle = 'lightblue';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}
	});
</script>

<button onclick={() => (count += 1)}>Click me</button>
<button
	onclick={() => {
		if (ctx) {
			ctx.fillStyle = 'red';
			ctx.fillRect(20 * count, 20 * count, 50, 50);
		}
	}}>Click me</button
>
<p>{count}</p>
<canvas width="200" height="200" id="canvas"></canvas>
