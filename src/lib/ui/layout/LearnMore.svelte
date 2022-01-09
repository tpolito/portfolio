<script lang="ts">
	function jumpDown() {
		let aboutSection = document.getElementById('about');
		aboutSection.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<p on:click={jumpDown}>👇 Learn more. 👇</p>

<style>
	p {
		color: var(--paragraph);
		font-size: 1.2rem;
		cursor: pointer;
		margin-top: auto;
		animation: 1000ms ease 0ms infinite normal none running bounce;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-12px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
