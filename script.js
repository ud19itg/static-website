// Slideshow Configuration
let currentSlide = 0;
const slides = document.querySelectorAll('.slide'); // All slideshow slides
const totalSlides = slides.length;
const slideDuration = 5000; // Time between slides in milliseconds

// Function to Show Next Slide
function showNextSlide() {
  if (totalSlides > 0) {
    slides[currentSlide].classList.remove('active'); // Remove 'active' class from current slide
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide (loop back to 0)
    slides[currentSlide].classList.add('active'); // Add 'active' class to new slide
  }
}
window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
});
document.querySelector(".dropdown-toggle").addEventListener("click", () => {
  document.querySelector(".dropdown-menu").classList.toggle("show");
});


// Start Slideshow
if (totalSlides > 0) {
  slides[currentSlide].classList.add('active'); // Set the first slide as active initially
  setInterval(showNextSlide, slideDuration); // Change slides automatically
}

// Smooth Scroll to Contact Form
const contactButtons = document.querySelectorAll('.contact-btn');
contactButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Contact section
    }
    // Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Toggle menu visibility
});

  });
});
