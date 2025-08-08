import { packPath } from '@sonolus/free-pack'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import arraybuffer from 'vite-plugin-arraybuffer'

export default defineConfig({
    plugins: [vue(), arraybuffer()],
    base: '/sonolus-pjsekai-extended-level-packer',

    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },

    resolve: {
        alias: {
            '@sonolus/free-pack/pack': packPath,
        },
    },
})
