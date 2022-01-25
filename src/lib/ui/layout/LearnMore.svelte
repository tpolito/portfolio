<script lang="ts">
	function jumpDown() {
		let aboutSection = document.getElementById('about');
		aboutSection.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<p on:click={jumpDown} class="cursor-pointer mt-auto animate-bounce">👇 Learn more. 👇</p>
