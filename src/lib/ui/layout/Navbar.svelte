<script lang="ts">
	const navItems = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Blog',
			href: '/blog'
		},
		{
			name: 'Games',
			href: '/games'
		}
	];
</script>

<nav class="border-b-2 border-b-primary sticky">
	<ul class="flex flex-row pl-16 py-3">
		{#each navItems as navItem}
			<li class="list-none mx-2">
				<a
					class="no-underline transition text-primary text-lg font-semibold hover:text-headline"
					href={navItem.href}>{navItem.name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
