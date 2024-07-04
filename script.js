let slideIndex = 0;

function showSlide(index) {
    let slides = document.querySelectorAll(".mySlides");
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? "block" : "none";
    });
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 4000); // Change slide every 3 seconds
}

// Swipe functionality
let startX;

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!startX) return;

    let endX = event.touches[0].clientX;
    let diffX = startX - endX;

    if (Math.abs(diffX) > 50) { // Minimum swipe distance
        if (diffX > 0) {
            changeSlide(1); // Swipe left
        } else {
            changeSlide(-1); // Swipe right
        }
        startX = null; // Reset startX to avoid multiple swipes
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
    setTimeout(autoSlide, 3000); // Start the automatic slide change

    // Add swipe event listeners
    let container = document.querySelector(".slideshow-container");
    container.addEventListener("touchstart", handleTouchStart, false);
    container.addEventListener("touchmove", handleTouchMove, false);
});
