import './style/style.css'
const arrowLeft = document.querySelector('.slider-arrow__left');
const arrowRight = document.querySelector('.slider-arrow__right');

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.slider li');
console.log(carouselItems)
console.log(carouselItems.length)

export default function goToSlide(index) {
  if (index < 0) {
    console.log(index)
    index = carouselItems.length - 1;
    console.log(index)

  } else if (index >= carouselItems.length) {
    index = 0;
  }
  currentIndex = index;
  document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}
 
function goToNextSlide() {
  goToSlide(currentIndex + 1);
}
arrowRight.addEventListener('click', goToNextSlide);

function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}
arrowLeft.addEventListener('click', goToPrevSlide);


// setInterval(goToNextSlide, 5000);



