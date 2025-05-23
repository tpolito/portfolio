import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), mdx()],
	image: {
		service: passthroughImageService()
	}
});
