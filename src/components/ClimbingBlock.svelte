<script lang="ts">
	export let imageSrc: string;
	export let title: string;
	export let mtProjectUrl: string;
	export let pros: string[] = [];
	export let cons: string[] = [];
</script>

<div>
	<div>
		<h3><a href={mtProjectUrl} target="_blank" rel="noreferrer">{title}</a></h3>
		<img class="image" src={imageSrc} alt="location" />
	</div>

	<div class="split-col">
		<div>
			<p>Pros</p>
			<ul>
				{#each pros as pro}
					<li>{pro}</li>
				{/each}
			</ul>
		</div>

		<div>
			<p>Cons</p>
			<ul>
				{#each cons as con}
					<li>{con}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.image {
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
		object-fit: cover;
		width: 100%;
		height: 250px;
	}

	.split-col {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	/* var(--tablet-breakpoint) */
	@media (max-width: 768px) {
		.split-col {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}

	h3 a {
		color: var(--purple);
		font-size: 22px;
	}

	h3 a:hover {
		color: var(--purple-tint);
	}

	p {
		color: var(--purple);
		font-size: 20px;
	}
</style>
