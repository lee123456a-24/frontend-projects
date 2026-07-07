const slides = document.getElementById('slides');
let index = 0;
const totalSlides = slides.children.length;

function showSlide(i) {
  if (i < 0) index = totalSlides - 1;
  else if (i >= totalSlides) index = 0;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
  showSlide(index - 1);
}

function nextSlide() {
  showSlide(index + 1);
}