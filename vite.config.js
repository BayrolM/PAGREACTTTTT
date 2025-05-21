import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Cambia esta línea

export default defineConfig({
  plugins: [react()],
  base: '/PAGREACTTTTT/', // Ajusta esto con el nombre de tu repositorio
});
