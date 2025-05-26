const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

// const slider = document.getElementById('slider');
// const totalSlides = slider.children.length;
// let currentIndex = 0;

// function updateSlider() {
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides; // Loop to first after last
//   updateSlider();
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to last from first
//   updateSlider();
// }

 const slider = document.getElementById('slider');
  const slides = slider.children; // Get all immediate children of the slider
  let currentIndex = 0;
  const slideWidth = slides[0].offsetWidth; // Width of a single slide
  const autoScrollInterval = 5000; // 5 seconds

  function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSliderPosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSliderPosition();
  }

  // Auto-scrolling logic
  let autoSlideTimer = setInterval(nextSlide, autoScrollInterval);

  // Optional: Pause auto-scroll on hover
  slider.parentNode.addEventListener('mouseenter', () => {
    clearInterval(autoSlideTimer);
  });

  slider.parentNode.addEventListener('mouseleave', () => {
    autoSlideTimer = setInterval(nextSlide, autoScrollInterval);
  });

  // Re-calculate slideWidth on window resize to ensure responsiveness
  window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth;
    updateSliderPosition(); // Adjust position if screen resizes
  });

  // Initial position update (important for correct alignment on load)
  window.addEventListener('load', () => {
    updateSliderPosition();
  });
