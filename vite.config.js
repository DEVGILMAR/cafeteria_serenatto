import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // <<<<< É APENAS 'src', sem barra inicial ou final.

    css: {
        preprocessorOptions: {
            scss: {
                // configurações específicas do Sass aqui, se tiver
            },
        },
    },
    // plugins: [],
});