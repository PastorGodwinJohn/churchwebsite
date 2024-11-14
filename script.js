document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  // Show the first slide
  slides[currentSlide].classList.add('active');

  // Function to show the next slide
  function goToNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide after the last one
    slides[currentSlide].classList.add('active');
  }

  // Function to show the previous slide
  function goToPrevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide if at the first one
    slides[currentSlide].classList.add('active');
  }

  // Event Listeners for navigation buttons
  document.getElementById('next').addEventListener('click', goToNextSlide);
  document.getElementById('prev').addEventListener('click', goToPrevSlide);

  // Optional: Auto slide every 7 seconds
  setInterval(goToNextSlide, 7000);
});
