import adapter from 'sveltekit-adapter-chrome-extension';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(),
		appDir: 'app',
	}
};

export default config;