import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/",
    server: {
        strictPort: true,  // looking at Capitalise, it kept the port the same - kill any processes using the port if the server fails to start.
        port: 8080
    }
});