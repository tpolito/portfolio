<script lang="ts">
	import { truncateString } from '../../../utils';
	interface iPost {
		title: string;
		description: string;
		published: string;
		updatedAt: string;
		slug: string;
	}

	export let post: iPost;

	const { title, description, published, updatedAt, slug } = post;

	const formatedUpdatedAt = updatedAt.slice(0, 10);
</script>

<a href={`/blog/${slug}`}>
	<div
		class="bg-bgSecondary p-6 rounded cursor-pointer transition-all my-4 mx-8 max-w-xl hover:-translate-y-1"
	>
		<div class="flex flex-col justify-between items-start">
			<h4 class="text-2xl text-primary m-0">{title}</h4>
			<div class="text-headline my-2 text-sm">
				<span class="m-0">Published: {published}</span>
				{#if formatedUpdatedAt !== published}
					<span class="m-0">- Last updated: {formatedUpdatedAt}</span>
				{/if}
			</div>
		</div>
		<p class="text-headline">{truncateString(description, 85)}</p>
	</div>
</a>
