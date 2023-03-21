const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const itemsContainer = document.querySelector(".slider-items-container")

//Aggiunta dinamica degli elementi nello slider
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
    <div class="item">
        <img src=${currentImage} alt="photo ${i}">
    </div>`;

    itemsContainer.innerHTML += sliderItem;
}

//Logica scorrimento immagini automatico a tempo
const itemsArray = document.getElementsByClassName("item");
let activeItemIndex = 0;

itemsArray[activeItemIndex].classList.add("active");
console.log(activeItemIndex + 1);           // Inizio numerazione foto

const nextPhotoTimer = setInterval(function () {
    console.log(activeItemIndex + 2);       // Aggiornamento numerazione foto

    itemsArray[activeItemIndex].classList.remove("active");
    activeItemIndex++;

    document.querySelector(".prev").classList.remove("hidden")
    itemsArray[activeItemIndex].classList.add("active");

    if (activeItemIndex === itemsArray.length - 1) {
        document.querySelector(".next").classList.add("hidden")
        clearInterval(nextPhotoTimer);

        setTimeout(() => {
            console.log("Presentazione terminata");
        }, 2000);

        setTimeout(() => {
            alert("La presentazione si è conclusa, ricaricare la pagina per visionarla nuovamente.");
        }, 3000);
    }
}, 3000);

//Logica nextBtn
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", function () {
    prevBtn.classList.remove("hidden")

    if (activeItemIndex < (itemsArray.length - 1)) {
        itemsArray[activeItemIndex].classList.remove("active");

        activeItemIndex++;

        itemsArray[activeItemIndex].classList.add("active");

        if (activeItemIndex === itemsArray.length - 1) {
            nextBtn.classList.add("hidden");
        }
    }
});

//Logica prevBtn
prevBtn.classList.add("hidden");

prevBtn.addEventListener("click", function () {
    nextBtn.classList.remove("hidden");

    if (activeItemIndex > 0) {
        itemsArray[activeItemIndex].classList.remove("active");

        activeItemIndex--;

        itemsArray[activeItemIndex].classList.add("active");
        if (activeItemIndex === 0) {
            prevBtn.classList.add("hidden")
        }
    }
});