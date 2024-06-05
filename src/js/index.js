// const imageSlides = document.querySelectorAll(".slide");
// const previewArrow = document.querySelector(".preview-arrow"); // Alterado para querySelector
// const nextArrow = document.querySelector(".next-arrow"); // Alterado para querySelector

// let currentImage = 0;

// nextArrow.addEventListener("click", () => {
//     if (currentImage === imageSlides.length - 1) {
//         return;
//     }

//     hideImage();

//     currentImage++;
//     imageSlides[currentImage].classList.add("show");

//     addingOpacityArrow();
// });

// previewArrow.addEventListener("click", () => {
//     if (currentImage === 0) {
//         return;
//     }

//     hideImage();

//     currentImage--;
//     imageSlides[currentImage].classList.add("show");

//     addingOpacityArrow();
// });

// function hideImage() {
//     const openImage = document.querySelector(".show");
//     openImage.classList.remove("show");
// }

// function addingOpacityArrow() {
//     const notTheFirstImg = currentImage !== 0;
//     if (notTheFirstImg) {
//         previewArrow.classList.remove("opacity");
//     } else {
//         previewArrow.classList.add("opacity");
//     }

//     const lastImg = currentImage !== 0 && currentImage === imageSlides.length - 1;
//     if (lastImg) {
//         nextArrow.classList.add("opacity");
//     } else {
//         nextArrow.classList.remove("opacity");
//     }
// }

const imageSlides = document.querySelectorAll(".slide");
const previewArrow = document.querySelector(".preview-arrow"); // querySelector
const nextArrow = document.querySelector(".next-arrow"); // querySelector

let currentImage = 0;

nextArrow.addEventListener("click", () => {
    hideImage();

    if (currentImage === imageSlides.length - 1) {
        currentImage = 0; // Volta para a primeira imagem
    } else {
        currentImage++;
    }
    
    imageSlides[currentImage].classList.add("show");

    addingOpacityArrow();
});

previewArrow.addEventListener("click", () => {
    hideImage();

    if (currentImage === 0) {
        currentImage = imageSlides.length - 1; // Volta para a última imagem
    } else {
        currentImage--;
    }

    imageSlides[currentImage].classList.add("show");

    addingOpacityArrow();
});

function hideImage() {
    const openImage = document.querySelector(".show");
    openImage.classList.remove("show");
}

function addingOpacityArrow() {
    const notTheFirstImg = currentImage !== 0;
    if (notTheFirstImg) {
        previewArrow.classList.remove("opacity");
    } else {
        previewArrow.classList.add("opacity");
    }

    const lastImg = currentImage !== 0 && currentImage === imageSlides.length - 1;
    if (lastImg) {
        nextArrow.classList.add("opacity");
    } else {
        nextArrow.classList.remove("opacity");
    }
}
