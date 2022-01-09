<script lang="ts">
	export let text = 'Back';
	export let pull = 'left';
	export let link = '/';
</script>

<a href={link} class="btn pull-{pull}">{text}</a>

<style>
	.btn {
		text-decoration: none;
		background-color: var(--primary);
		text-align: center;
		border-radius: 50%;
		height: 4rem;
		width: 4rem;
		transition: 0.3s;
		display: grid;
		place-items: center;
		color: var(--headline);
	}

	.btn:hover {
		transform: translateY(-4px);
	}

	.pull-left {
		position: absolute;
		top: 1rem;
		left: 1rem;
	}

	.pull-right {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
</style>
