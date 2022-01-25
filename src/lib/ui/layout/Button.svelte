<script lang="ts">
	export let text = 'Back';
	export let pull = 'left';
	export let link = '/';
</script>

<a
	href={link}
	class="bg-primary text-center rounded-full h-16 w-16 transition-all grid place-items-center text-headline absolute top-4 left-4 hover:-translate-y-1"
	>{text}</a
>
