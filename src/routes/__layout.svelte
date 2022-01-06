<script lang="ts">
</script>

<slot />

<style>
	:root {
		--background: #16161a;
		--background-secondary: #242629;
		--headline: #fffffe;
		--paragraph: #94a1b2;
		--primary: #7f5af0;
		--secondary: #2cb67d;
	}
	:global(body) {
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
	:global(.section) {
		padding: 8rem 0;
	}
	:global(.highlight) {
		background-color: var(--primary);
		padding: 2px;
		color: var(--headline);
	}
</style>
