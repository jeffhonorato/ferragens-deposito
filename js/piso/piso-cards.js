const pisoCard1 = () => {
    const pisoCores = document.querySelectorAll(".js-img-cor-piso");
    const pisoGrande = document.querySelector(".js-piso-img");

    pisoCores.forEach((cor) => {
        cor.addEventListener("click", () => {
            pisoGrande.src = cor.src;
        });
    });
};

pisoCard1();