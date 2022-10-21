const porcelanatoCard1 = () => {
    const porcelaImg1 = document.querySelector(".js-porcelnato-img-card-1");
    const porceCores1 = document.querySelectorAll(".js-img-cor-porcelanato-1");

        porceCores1.forEach((cor) => {
            cor.addEventListener("click", (e) => {
                e.stopPropagation();
                porcelaImg1.src = cor.src;
            });
        });
};

const porcelanatoCard2 = () => {
    const porcelaImg2 = document.querySelector(".js-porcelnato-img-card-2");
    const porceCores2 = document.querySelectorAll(".js-img-cor-porcelanato-2");

        porceCores2.forEach((cor) => {
            cor.addEventListener("click", (e) => {
                e.stopPropagation();
                porcelaImg2.src = cor.src;
            });
        });
};

const porcelanatoCard3 = () => {
    const porcelaImg3 = document.querySelector(".js-porcelnato-img-card-3");
    const porceCores3 = document.querySelectorAll(".js-img-cor-porcelanato-3");

        porceCores3.forEach((cor) => {
            cor.addEventListener("click", (e) => {
                e.stopPropagation();
                porcelaImg3.src = cor.src;
            });
        });
};

const porcelanatoCard4 = () => {
    const porcelaImg4 = document.querySelector(".js-porcelnato-img-card-4");
    const porceCores4 = document.querySelectorAll(".js-img-cor-porcelanato-4");

        porceCores4.forEach((cor) => {
            cor.addEventListener("click", (e) => {
                e.stopPropagation();
                porcelaImg4.src = cor.src;
            });
        });
};

const porcelanatoCard5 = () => {
    const porcelaImg5 = document.querySelector(".js-porcelnato-img-card-5");
    const porceCores5 = document.querySelectorAll(".js-img-cor-porcelanato-5");

        porceCores5.forEach((cor) => {
            cor.addEventListener("click", (e) => {
                e.stopPropagation();
                porcelaImg5.src = cor.src;
            });
        });
};



porcelanatoCard1();
porcelanatoCard2();
porcelanatoCard3();
porcelanatoCard4();
porcelanatoCard5();