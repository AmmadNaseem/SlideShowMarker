document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider-image");
  const timelines = document.querySelectorAll(".timeline");
  let currentStep = 0;

  const switchSlide = () => {
    // Remove active class from current elements
    images.forEach((img) => img.classList.remove("active"));
    timelines.forEach((timeline) => timeline.classList.remove("active"));

    // Add active class to the next elements
    images[currentStep].classList.add("active");
    timelines[currentStep].classList.add("active");

    // Move to the next step
    currentStep = (currentStep + 1) % images.length;
  };

  // Auto-switch slides every 3 seconds
  setInterval(switchSlide, 3000);

  //   FAQ functionality
  const faqItems = document.querySelectorAll(".faq-item");

  // Open the first FAQ item by default
  faqItems[0].classList.add("active");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");

    header.addEventListener("click", () => {
      // Toggle active class for the clicked item
      item.classList.toggle("active");

      // Close other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});
