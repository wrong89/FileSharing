import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
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
        host: '0.0.0.0', // Это важно для доступа к серверу из контейнера
        watch: {
            usePolling: true, // Включаем polling для отслеживания изменений в Docker
        },
        hmr: {
            protocol: 'ws', // Важно для корректной работы WebSocket
            host: 'localhost', // Указываем хост, с которого будет работать HMR
        },
    },
});
