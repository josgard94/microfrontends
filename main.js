// main.js
import { registerApplication, start } from 'single-spa';

registerApplication(
  'mi-microfrontend', // Nombre único para tu microfrontend
  () => import('./src/login/main.app.js'), // Ruta relativa al archivo que contiene tu aplicación
  () => location.pathname === "/" ? true : false // Función para determinar cuándo cargar tu microfrontend
);

registerApplication(
  'footer',
  () => import('./src/footer/main.app.js'), 
  () => location.pathname === "/" ? true : false
)

start();
