document.addEventListener("DOMContentLoaded", () => {
    const visibles = document.querySelectorAll(".tablaVisible");

    visibles.forEach((visible, index) => {
        visible.style.cursor = "pointer"; // para indicar que se puede hacer clic

        visible.addEventListener("click", () => {
            const oculta = visible.nextElementSibling;

            if (oculta && oculta.classList.contains("tablaOculta")) {
                oculta.style.display = oculta.style.display === "block" ? "none" : "block";
            }
        });
    });
});
    