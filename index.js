let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// let slideIndex = 0;
// const slidesToShow = window.innerWidth > 600 ? 3 : 1;
// const slides = document.getElementsByClassName('mySlides');
// const totalSlides = slides.length;

// function showSlides(n) {
//     const slideWrapper = document.querySelector('.slideshow-wrapper');
//     slideIndex = (n + totalSlides) % totalSlides;
//     slideWrapper.style.transform = `translateX(-${slideIndex * (100 / slidesToShow)}%)`;
// }

// function plusSlides(n) {
//     showSlides(slideIndex + n);
// }

// window.addEventListener('resize', () => {
//     const newSlidesToShow = window.innerWidth > 600 ? 3 : 1;
//     if (newSlidesToShow !== slidesToShow) {
//         location.reload(); // Reload to reset the layout
//     }
// });

// showSlides(slideIndex);