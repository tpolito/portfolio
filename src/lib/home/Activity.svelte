<script lang="ts">
	import GithubFeed from '../ui/layout/GithubFeed.svelte';
	import ProjectCard from '../ui/layout/ProjectCard.svelte';
	import { projectCards } from '../../data';
</script>

<section id="activity">
	<div class="w-11/12 max-w-5xl mx-auto">
		<div class="flex justify-center items-start">
			<div class="mr-12">
				<h2>What I'm working on</h2>
				{#each projectCards as card}
					<ProjectCard link={card.link} title={card.title} desc={card.desc} />
				{/each}
			</div>
			<GithubFeed />
		</div>
	</div>
</section>

<style>
	#activity {
		background-color: var(--background);
		background-image: url('../../assets/animated-shapes.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	/*
	.container {
		width: 90%;
		max-width: 1040px;
		margin: 0 auto;
	}
	.activity {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.project-cards {
		margin-right: 3rem;
	}
	@media screen and (max-width: 900px) {
		.project-cards {
			padding-bottom: 1rem;
			margin-right: 0;
		}
		h2 {
			text-align: center;
		}
	} */
</style>
