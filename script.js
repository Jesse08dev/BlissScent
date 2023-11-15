document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.pg-txt-container');
    const images = document.querySelectorAll('.pg-img');
  
    let currentIndex = 0;
  
    function showImage(index) {
      const transformValue = -index * 100 + '%';
      carousel.style.transform = 'translateX(' + transformValue + ')';
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    setInterval(nextImage, 5000);
  });
  