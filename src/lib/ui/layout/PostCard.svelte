<script lang="ts">
	import { truncateString, formatDate } from '../../../utils';

	interface iPost {
		title: string;
		description: string;
		_firstPublishedAt: string;
		_updatedAt: string;
		slug: string;
	}

	export let post: iPost;
	export let ref: 'blog' | 'games';

	const { title, description, _firstPublishedAt, _updatedAt, slug } = post;
</script>

<a href={`/${ref}/${slug}`}>
	<div
		class="bg-bgSecondary p-6 rounded cursor-pointer transition-all my-4 mx-8 max-w-xl min-w-[576px] hover:-translate-y-1"
	>
		<div class="flex flex-col justify-between items-start">
			<h4 class="text-2xl text-primary m-0">{title}</h4>
			<div class="text-headline my-2 text-sm">
				<span class="m-0">{formatDate(_firstPublishedAt)}</span>
			</div>
		</div>
		<p class="text-headline">{truncateString(description, 85)}</p>
	</div>
</a>
