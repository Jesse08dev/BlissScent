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
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.style.overflow = "hidden";
})


// best seller carousel

var scrollContainer = document.querySelector(".best-seller-products-container");
var backBtn = document.getElementById("backBtn");
var nextBtn = document.getElementById("nextBtn");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY

// })

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 500;
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 500;
})


//send email section
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("send-email-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
        // insert css for thanks message
        
      status.innerHTML = "Thanks for your submission!";
      form.reset()
      
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    // insert css for error message
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}

form.addEventListener("submit", handleSubmit);
