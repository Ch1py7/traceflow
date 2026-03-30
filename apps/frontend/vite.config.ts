import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	root: './',
	publicDir: './public',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
		},
	},
	plugins: [react(), tailwindcss()],
})
