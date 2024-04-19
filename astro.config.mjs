import { defineConfig, passthroughImageService } from 'astro/config';
import svelte from '@astrojs/svelte';
import pandacss from '@pandacss/dev/astro';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), pandacss(), mdx()],
	image: {
		service: passthroughImageService()
	}
});
