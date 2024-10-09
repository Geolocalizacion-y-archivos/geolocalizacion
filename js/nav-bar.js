import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavBar extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-navigation-bar")

  this.innerHTML = /* HTML */`
   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">home</span>
    Inicio
   </a>

   <a ${resaltaSiEstasEn(["/geolocalizacion.html"])} href="geolocalizacion.html">
    <span class="material-symbols-outlined">tabs</span>
    Pestañas
   </a>

   <a ${resaltaSiEstasEn(["/camara.html"])} href="camara.html">
    <span class="material-symbols-outlined">bottom_navigation</span>
    Barra
   </a>

   <a ${resaltaSiEstasEn(["/archivos.html"])} href="archivos.html">
    <span class="material-symbols-outlined">newspaper</span>
    Forma
   </a>
   
  <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">newspaper</span>
    Forma
   </a>
   `

 }

}

customElements.define("nav-bar", NavBar)