let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

function updateGallery() {
    const offset = -currentIndex * 100;
    document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateGallery();
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateGallery();
}
