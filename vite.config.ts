import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // Дозволяє використовувати '@' як шляхи до папки 'src'
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "../node_modules/bootstrap-scss/bootstrap";`,
                // Загальні імпорти SCSS

                quietDeps: true, // Вмикає приглушення попереджень про застарілі функції

                includePaths: ["node_modules"], // Додає node_modules в шляхи для імпорту
            },
        },
    },
});