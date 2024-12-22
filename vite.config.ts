import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'es2015'
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
				additionalData: `
          @use '$lib/css/mixins.scss' as *;
        `
			}
		}
	}
});
