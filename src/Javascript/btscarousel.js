document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".btsimage");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
  });
  