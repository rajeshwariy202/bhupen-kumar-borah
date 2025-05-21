const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

const slider = document.getElementById('slider');
const totalSlides = slider.children.length;
let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop to first after last
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to last from first
  updateSlider();
}
