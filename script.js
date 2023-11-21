document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.homepage-img');
  
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds

  // Initial slide display
  showSlide(currentIndex);
});


// hamburger menu or slide over menu
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".slide-over-menu-list");

hamburger.addEventListener("click", () => {
    // hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

