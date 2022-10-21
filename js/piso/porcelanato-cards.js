const porcelanatoCard1 = () => {
    const porcelaImg1 = document.querySelector(".js-porcelnato-img-card-1");
    const porceCores1 = document.querySelectorAll(".js-img-cor-porcelanato-1");

        porceCores1.forEach((cor) => {
            cor.addEventListener("click", (e) => {
                e.stopPropagation();
                porcelaImg1.src = cor.src;
            });
        });
}



porcelanatoCard1();