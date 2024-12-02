import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    define: {
        languages: JSON.stringify(fs.readdirSync(path.resolve(__dirname, 'public', 'locales'))),
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@lib': path.resolve(__dirname, './src/lib/'),
            '@types': path.resolve(__dirname, './src/types/'),
            '@api': path.resolve(__dirname, './src/api/'),
            '@config': path.resolve(__dirname, './src/config/'),
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@providers': path.resolve(__dirname, './src/providers/'),
        },
    },
    plugins: [react(), svgr()],
    server: {
        host: '0.0.0.0',
        watch: {
            usePolling: true,
        },
        hmr: {
            protocol: 'ws',
            host: 'localhost',
        },
    },
});
