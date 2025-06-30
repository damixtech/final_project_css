import { defineConfig } from 'vite';

export default defineConfig({
  base: "/final_project_css/",
  
  build: {
    outDir: 'dist', // Carpeta donde se generarán los archivos de producción
    rollupOptions: {
      input: {
        main: 'index.html',
        quienes_somos: 'quienes_somos.html',
        contacto: 'contacto.html',
        aviso_legal: 'aviso_legal.html',
        blog: 'blog.html',
        curso_css: 'curso_css.html',
        curso_html: 'curso_html.html',
        cursos: 'cursos.html',
        login: 'login.html',
        post_css: 'post_css.html',
        post_html: 'post_html.html',
        registro: 'registro.html'
      },
    },
  },

  
});