<script lang="ts">
	import GithubFeed from '../ui/layout/GithubFeed.svelte';
	import ProjectCard from '../ui/layout/ProjectCard.svelte';
</script>

<section class="section" id="activity">
	<div class="container">
		<div class="activity">
			<div class="project-cards">
				<h2>What I'm working on</h2>
				<ProjectCard
					link={'https://github.com/tpolito/ror2-graphql'}
					title="Risk of Rain API"
					desc="A GraphQL API for Risk of Rain 2"
				/>
				<ProjectCard
					link={'https://dndtoolkit.app/'}
					title="DnD Toolkit"
					desc="A light-weight digital toolset for Dungeons and Dragons"
				/>
				<ProjectCard
					link={'https://poetril.itch.io/slimey-towers'}
					title="Slimey Towers"
					desc="A trickey, phsyics, tetris-like game made for Ludam Dare 49"
				/>
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
		height: 500px;
	}
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
		}
		h2 {
			text-align: center;
		}
	}
</style>
