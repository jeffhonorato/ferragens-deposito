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

const pisoCard3 = () => {
    const pisoCores = document.querySelectorAll(".js-img-cor-piso-3");
    const pisoGrande = document.querySelector(".js-piso-img-card-3");

    pisoCores.forEach((cor) => {
        cor.addEventListener("click", () => {
            pisoGrande.src = cor.src;
        });
    });
};

pisoCard1();
pisoCard2();
pisoCard3();