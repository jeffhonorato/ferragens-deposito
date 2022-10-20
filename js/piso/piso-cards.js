const pisoCard1 = () => {
    const pisoCores = document.querySelectorAll(".js-img-cor-piso-1");
    const pisoGrande = document.querySelector(".js-piso-img-card-1");

    pisoCores.forEach((cor) => {
        cor.addEventListener("click", () => {
            pisoGrande.src = cor.src;
        });
    });
};

const pisoCard2 = () => {
    const pisoCores = document.querySelectorAll(".js-img-cor-piso-2");
    const pisoGrande = document.querySelector(".js-piso-img-card-2");

    pisoCores.forEach((cor) => {
        cor.addEventListener("click", () => {
            pisoGrande.src = cor.src;
        });
    });
};

pisoCard1();
pisoCard2();