export default function makeSlider(img1, img2, img3) {
  let sliderSection = document.querySelector(".slider-wrap");
  sliderSection.innerHTML = `
  <ul class='slider'>
        <li class='slider-item'><img class="item-img" src="${img1}" alt=""></li>
        <li class='slider-item'><img class="item-img" src="${img2}" alt=""></li>
        <li class='slider-item'><img class="item-img" src="${img3}" alt=""></li>
  </ul>
  <div class='slider-arrow'>
    <button id='prev' class='arrow'><</button>
    <button id='next' class='arrow'>></button>
  </div>
 `;

  const slider = document.querySelector(".slider").children;
  let currentSlide = 0;
  slider[currentSlide].style.display = "block";

  const nextBtn = document.getElementById("next");
  function nextSlide() {
    currentSlide += 1;
    currentSlide >= slider.length ? (currentSlide = 0) : false;
    for (let i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
    }
    slider[currentSlide].style.display = "block";
  }
  nextBtn.addEventListener("click", nextSlide);

  function prevSlide() {
    currentSlide -= 1;
    currentSlide < 0 ? (currentSlide = slider.length - 1) : false;
    for (let i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
    }
    slider[currentSlide].style.display = "block";
  }
  const prevBtn = document.getElementById("prev");
  prevBtn.addEventListener("click", prevSlide);

}
