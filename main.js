// main.js
import { registerApplication, start } from "single-spa";

registerApplication(
  "mf-login",
  () => import("./src/login/main.app.js"), 
  (location) => (location.pathname === "/" ? true : false) 
);

registerApplication(
  "footer",
  () => import("./src/footer/main.app.js"),
  () => true
);

registerApplication(
  "mf-gallery",
  () => import("./src/gallery-cats/vue.app.js"),
  () => location.pathname === "/cats" ? true: false
)

start();
