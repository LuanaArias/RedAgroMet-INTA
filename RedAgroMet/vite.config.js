// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// NOTA: No necesitamos importar ninguna librería externa aquí.

export default defineConfig({
    plugins: [react()],
    
    // 🚨 SOLUCIÓN FINAL PARA EL FALLBACK DE RUTAS (404) 🚨
    server: {
        // La función 'configureServer' te da acceso a la instancia del servidor
        // y es el lugar correcto para inyectar la lógica de fallback de rutas.
        // Si no encuentra el archivo estático, devuelve el index.html.
        
        // Esta es la propiedad que activa la reescritura de URL en desarrollo:
        historyApiFallback: true, 

        // Si lo anterior no funciona por sí solo, puedes intentar esta variante:
        // configureServer(server) {
        //     server.middlewares.use((req, res, next) => {
        //         if (!req.url.includes('.')) { // Si la URL no tiene extensión (no es un archivo estático)
        //             req.url = '/index.html'; // Reescrito
        //         }
        //         next();
        //     });
        // },
    },
    // FIN DE LA CONFIGURACIÓN DEL SERVIDOR

    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@constants': path.resolve(__dirname, './src/constants')
        }
    }
});