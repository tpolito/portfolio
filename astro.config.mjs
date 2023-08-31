import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import pandacss from '@pandacss/dev/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), pandacss()]
});
