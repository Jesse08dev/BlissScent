// document.addEventListener('DOMContentLoaded', function () {
//     const carousel = document.querySelector('.pg-txt-container');
//     const images = document.querySelectorAll('.pg-img');
  
//     let currentIndex = 0;
  
//     function showImage(index) {
//       const transformValue = -index * 100 + '%';
//       carousel.style.transform = 'translateX(' + transformValue + ')';
//     }
  
//     function nextImage() {
//       currentIndex = (currentIndex + 1) % images.length;
//       showImage(currentIndex);
//     }
  
//     setInterval(nextImage, 5000);
//   });


// DOMContentLoaded - loads all the elements in the DOM before you can access any elements
  
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

// let currentIndex = 0;
//   const items = document.querySelector('.homepage-img-container');
//   const totalItems = document.querySelectorAll('.homepage-img').length;

//   function showNext() {
//     if (currentIndex < totalItems - 1) {
//       currentIndex++;
//     } else {
//       currentIndex = 0;
//     }
//     updateCarousel();
//   }

//   function updateCarousel() {
//     const newTransformValue = -currentIndex * 100 + '%';
//     items.style.transform = 'translateX(' + newTransformValue + ')';
//   }

//   setInterval(showNext, 3000); // Change image every 3 seconds (adjust as needed)
