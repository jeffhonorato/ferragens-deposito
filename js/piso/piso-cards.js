const pisoCard1 = () => {
    const pisoCores1 = document.querySelectorAll(".js-img-cor-piso-1");
    const pisoGrande1 = document.querySelector(".js-piso-img-card-1");

    pisoCores1.forEach((cor) => {
        cor.addEventListener("click", (e) => {
            e.stopPropagation();
            pisoGrande1.src = cor.src;            
        });
    });
};

const pisoCard2 = () => {
    const pisoCores2 = document.querySelectorAll(".js-img-cor-piso-2");
    const pisoGrande2 = document.querySelector(".js-piso-img-card-2");

    pisoCores2.forEach((cor) => {
        cor.addEventListener("click", (e) => {
            e.stopPropagation();
            pisoGrande2.src = cor.src;
        });
    });
};

const pisoCard3 = () => {
    const pisoCores3 = document.querySelectorAll(".js-img-cor-piso-3");
    const pisoGrande3 = document.querySelector(".js-piso-img-card-3");

    pisoCores3.forEach((cor) => {
        cor.addEventListener("click", (e) => {
            e.stopPropagation();
            pisoGrande3.src = cor.src;          
        });
    });
};

const pisoCard4 = () => {
    const pisoCores4 = document.querySelectorAll(".js-img-cor-piso-4");
    const pisoGrande4 = document.querySelector(".js-piso-img-card-4");

    pisoCores4.forEach((cor) => {
        cor.addEventListener("click", (e) => {
            e.stopPropagation();
            pisoGrande4.src = cor.src;
        });
    });
};

const pisoCard5 = () => {
    const pisoCores5 = document.querySelectorAll(".js-img-cor-piso-5");
    const pisoGrande5 = document.querySelector(".js-piso-img-card-5");

    pisoCores5.forEach((cor) => {
        cor.addEventListener("click", (e) => {
            e.stopPropagation();
            pisoGrande5.src = cor.src;
        });
    });
};

const pisoCard6 = () => {
    const pisoCores6 = document.querySelectorAll(".js-img-cor-piso-6");
    const pisoGrande6 = document.querySelector(".js-piso-img-card-6");

    pisoCores6.forEach((cor) => {
        cor.addEventListener("click", (e) => {
            e.stopPropagation();
            pisoGrande6.src = cor.src;
        });
    });
};

const pisoCard7 = () => {
    const pisoCores7 = document.querySelectorAll(".js-img-cor-piso-7");
    const pisoGrande7 = document.querySelector(".js-piso-img-card-7");

    pisoCores7.forEach((cor) => {
        cor.addEventListener("click", (e) => {
            e.stopPropagation();
            pisoGrande7.src = cor.src;
            
        });
    });
};

const pisoCard8 = () => {
    const pisoCores8 = document.querySelectorAll(".js-img-cor-piso-8");
    const pisoGrande8 = document.querySelector(".js-piso-img-card-8");

   

    pisoCores8.forEach((cor) => {
        cor.addEventListener("click", (e)  => {
            e.stopPropagation();
            pisoGrande8.src = cor.src;
        });
    });
};

const pisoCard9 = () => {
    const pisoCores9 = document.querySelectorAll(".js-img-cor-piso-9");
    const pisoGrande9 = document.querySelector(".js-piso-img-card-9");

    pisoCores9.forEach((cor) => {
        cor.addEventListener("click", (e) => {
            e.stopPropagation();
            pisoGrande9.src = cor.src;
            console.log(pisoCores9);
        });
    });
};

const pisoCard10 = () => {
    const pisoCores10 = document.querySelectorAll(".js-img-cor-piso-10");
    const pisoGrande10 = document.querySelector(".js-piso-img-card-10");

    pisoCores10.forEach((cor) => {
        cor.addEventListener("click", (e) => {
            e.stopPropagation();
            pisoGrande10.src = cor.src;
            console.log(pisoCores10);
        });
    });
};


pisoCard1();
pisoCard2();
pisoCard3();
pisoCard4();
pisoCard5();
pisoCard6();
pisoCard7();
pisoCard8();
pisoCard9();
pisoCard10();