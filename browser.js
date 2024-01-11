let currentSlide = 0;

function showSlide(index) {
    const track = document.getElementById("carouselTrack");
    const slides = document.getElementsByClassName("carouselItem");
    const totalSlides = slides.length;

    currentSlide = (index + totalSlides) % totalSlides;

    const newPosition = -currentSlide * 100 + "%";
    track.style.transform = `translateX(${newPosition})`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Initialize the first slide
showSlide(currentSlide);