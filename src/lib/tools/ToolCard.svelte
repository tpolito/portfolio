<script lang="ts">
	export let title: string;
	export let link: string;
</script>

<a href={link}>
	<h3>{title}</h3>
</a>

<style>
	h3 {
		margin: 0;
		color: var(--headline);
		text-align: center;
	}
	a {
		background-color: var(--background-secondary);
		padding: 1.5rem;
		border-radius: 3px;
		transition: 200ms;
		width: 12rem;
		text-decoration: none;
		transition: all 200ms ease-in-out;
	}
	a:hover {
		transform: translateY(-2px);
	}
</style>
