import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	define: {
		__BUILD_DATE__: JSON.stringify(new Date().toISOString())
	},
	plugins: [
		svelte({
			compilerOptions: {
				runes: true
			}
		})
	],
	server: {
		port: 5175,
		strictPort: false,
		host: true
	},
	preview: {
		port: 5174,
		strictPort: true,
		host: true
	},
	resolve: {
		alias: {
			'$lib': '/src/lib',
			'$src': '/src',
			'$atoms': '/src/components/atoms',
			'$molecules': '/src/components/molecules',
			'$organisms': '/src/components/organisms',
			'$templates': '/src/components/templates',
			'$components': '/src/components',
			'$models': '/src/models',
			'$stores': '/src/stores',
			'$assets': '/src/lib/assets',
			'$data': '/src/data',
			'$types': '/src/types',
			'$constants': '/src/constants',
			'$utils': '/src/utils',
			'$hooks': '/src/hooks',
			'$pages': '/src/pages',
			'$services': '/src/services'
		}
	}
})
