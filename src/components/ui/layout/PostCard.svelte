<script lang="ts">
	import { truncateString } from '../../../utils';
	interface iPost {
		title: string;
		description: string;
		published: string;
		slug: string;
	}

	export let post: iPost;

	const { title, description, published, slug } = post;
</script>

<a href={`/blog/${slug}`}>
	<div class="card">
		<div class="card-top">
			<h4>{title}</h4>
			<p>{published}</p>
		</div>
		<p>{description}</p>
	</div>
</a>

<style>
	h4 {
		font-size: 1.5rem;
		color: var(--headline);
		margin: 0;
	}
	a {
		text-decoration: none;
	}
	.card {
		background-color: var(--background-secondary);
		padding: 1.5rem;
		border-radius: 3px;
		cursor: pointer;
		transition: 0.3s;
		margin: 1rem 2rem;
		max-width: 37.5rem;
	}
	.card:hover {
		transform: translateY(-4px);
	}
	.card-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
	.card-top p {
		margin: 0;
		font-size: 0.8rem;
	}
</style>
