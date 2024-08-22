let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let slidesToShow = window.innerWidth > 600 ? 3 : 1;

  if (n > slides.length - slidesToShow + 1) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length - slidesToShow + 1}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < slidesToShow; i++) {
    slides[(slideIndex - 1 + i) % slides.length].style.display = "flex";
  }
}

window.addEventListener('resize', () => {
  showSlides(slideIndex);
});
