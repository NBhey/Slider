import './style/style.css'
import makeSlider from './js/slider.js'
import Cat from './img/cat.jpg'
import Cat2 from './img/cat-second.jpg'
import Cat3 from './img/cat-third.jpg'

makeSlider(Cat,Cat2,Cat3)
let element = document.querySelector('.feedback-footer')

console.log(element)