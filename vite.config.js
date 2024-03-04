// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

//Код, що тут був при збірці коментуємо, новий з конспекту вставляємо нижче:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
  build: {
    sourcemap: true,
  }
});

