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
	<div
		class="bg-bgSecondary p-6 rounded cursor-pointer transition-all my-4 mx-8 max-w-xl hover:-translate-x-1"
	>
		<div class="flex flex-row justify-between items-start">
			<h4 class="text-2xl text-headline m-0">{title}</h4>
			<p class="m-0 text-sm">{published}</p>
		</div>
		<p>{description}</p>
	</div>
</a>
