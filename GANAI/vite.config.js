import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000, // use a different port like 3000
        strictPort: true, // force it to use the chosen port
        allowedHosts: [
            'localhost',
            '127.0.0.1',
            'd61e49f1342f.ngrok-free.app', // <-- your ngrok domain
        ],
        cors: true,
    },
});
