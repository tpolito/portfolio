import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import pandacss from '@pandacss/dev/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), svelte(), pandacss()]
});
