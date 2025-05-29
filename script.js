 const menuBtn = document.getElementById('menuBtn');
      const closeBtn = document.getElementById('closeBtn'); // Make sure this button exists in your HTML if you want it
      const mobileMenu = document.getElementById('mobileMenu');

      // Function to open the mobile menu
      function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        // Set a calculated height for the transition to work.
        // You might need to adjust this value based on your content.
        // A better approach for variable height menus is to use `max-height`.
        mobileMenu.style.height = 'auto'; // Let content determine height
        mobileMenu.style.opacity = '1';
        mobileMenu.classList.add('flex'); // Ensure it becomes a flex container
        mobileMenu.classList.remove('hidden'); // Ensure it's not hidden
        // Optionally, hide the hamburger and show the close button
        menuBtn.classList.add('hidden');
        closeBtn.classList.remove('hidden');
      }

      // Function to close the mobile menu
      function closeMobileMenu() {
        mobileMenu.style.height = '0';
        mobileMenu.style.opacity = '0';
        // Use a timeout to hide it completely after the transition
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex'); // Remove flex when hidden
        }, 300); // Match this with your CSS transition duration
        // Optionally, show the hamburger and hide the close button
        menuBtn.classList.remove('hidden');
        closeBtn.classList.add('hidden');
      }

      // Event listeners
      menuBtn.addEventListener('click', openMobileMenu);
      closeBtn.addEventListener('click', closeMobileMenu);

      // Close menu if window is resized to a large screen
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) { // 1024px is Tailwind's 'lg' breakpoint
          closeMobileMenu();
        }
      });

// image slider 

 const slider = document.getElementById('slider');
    const allSlides = document.querySelectorAll('#slider > div');
    const prevButton = document.querySelector('.left-0');
    const nextButton = document.querySelector('.right-0');

    // Number of original unique slides in your content
    const originalSlideCount = 6; // Assuming you will have 6 unique images as before
    // Number of cloned slides at the beginning and end
    const clonesAtEachEnd = 2; // This MUST match the number of cloned divs in your HTML

    // The actual index of the first original slide within the 'allSlides' NodeList
    let currentIndex = clonesAtEachEnd;

    const slideIntervalTime = 3000;
    let slideInterval;
    const transitionDuration = 500; // Match your CSS transition duration

    function setSliderPosition(smoothTransition = true) {
        if (allSlides.length === 0) return;

        const firstSlide = allSlides[0];
        const slideWidth = firstSlide.offsetWidth;
        const gap = parseInt(window.getComputedStyle(slider).gap.split(' ')[0]) || 0;

        const containerWidth = slider.parentElement.offsetWidth;
        const totalSlideShift = slideWidth + gap;
        const offsetToCenter = (containerWidth / 2) - (slideWidth / 2);

        if (!smoothTransition) {
            slider.style.transition = 'none';
        } else {
            slider.style.transition = `transform ${transitionDuration}ms ease-in-out`;
        }

        slider.style.transform = `translateX(-${currentIndex * totalSlideShift - offsetToCenter}px)`;
    }

    function goToSlide(index, smoothTransition = true) {
        currentIndex = index;
        setSliderPosition(smoothTransition);
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    slider.addEventListener('transitionend', () => {
        // If we've transitioned to a cloned slide at the end
        if (currentIndex >= originalSlideCount + clonesAtEachEnd) {
            currentIndex = clonesAtEachEnd; // Jump back to the first original slide
            setSliderPosition(false); // Snap instantly
            startAutomaticSlide(); // Re-start auto-slide
        }
        // If we've transitioned to a cloned slide at the beginning
        else if (currentIndex < clonesAtEachEnd) {
            currentIndex = originalSlideCount + clonesAtEachEnd - 1; // Jump back to the last original slide
            setSliderPosition(false); // Snap instantly
            startAutomaticSlide(); // Re-start auto-slide
        }
    });

    function startAutomaticSlide() {
        stopAutomaticSlide();
        slideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    function stopAutomaticSlide() {
        clearInterval(slideInterval);
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            stopAutomaticSlide();
            goToSlide(currentIndex - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            stopAutomaticSlide();
            goToSlide(currentIndex + 1);
        });
    }

    window.addEventListener('resize', () => {
        setSliderPosition();
    });

    document.addEventListener('DOMContentLoaded', () => {
        setSliderPosition(false);
        startAutomaticSlide();
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

 
