const images = [
    'images/moment1.jpg',
    'images/moment2.jpg',
    // Add more images as needed
];

let currentIndex = 0;
const carouselImage = document.getElementById('carousel-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Function to update the displayed image
function updateImage() {
    carouselImage.src = images[currentIndex];
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Set the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Function to scroll back to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Show the button when scrolling down
window.onscroll = function() {
    const button = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Show button
    } else {
        button.style.display = "none"; // Hide button
    }
};
