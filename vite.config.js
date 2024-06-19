import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FXSTREET/", // Asegúrate de que coincide con el nombre del repositorio
  build: {
    outDir: "dist", // El directorio de salida debe coincidir con el especificado en el script de deploy
  },
});
