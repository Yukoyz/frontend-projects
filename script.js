/* ---------- Efecto: la imagen de la portada desaparece al bajar ---------- */
const heroImg = document.getElementById("hero-img");
const hero = document.getElementById("inicio");

function desvanecerImagen() {
    const limite = hero.offsetHeight * 0.7;
    const progreso = Math.min(window.scrollY / limite, 1);
    heroImg.style.opacity = 1 - progreso;
    heroImg.style.transform = `translateY(${progreso * 60}px) scale(${1 - progreso * 0.08})`;
}

window.addEventListener("scroll", desvanecerImagen, { passive: true });
desvanecerImagen();

/* ---------- Menú de productos: filtrar por categoría ---------- */
const tabs = document.querySelectorAll(".tab");
const tarjetas = document.querySelectorAll(".tarjeta");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("activo"));
        tab.classList.add("activo");

        const filtro = tab.dataset.filtro;
        tarjetas.forEach((tarjeta) => {
            tarjeta.hidden = !(filtro === "todos" || tarjeta.dataset.categoria === filtro);
        });
    });
});