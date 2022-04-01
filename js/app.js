var check = document.querySelector(".check");

check.addEventListener('click', idioma);

function idioma(){
   let id = check.checked;
   if(id === false){
       location.href="./es/index.html"
   } else {
        location.href="../index.html"
   }
}


/* SLIDER CV WISNY */

(function() {
    const sliders = [...document.querySelectorAll('.slider_body')];
    const arrowNext = document.querySelector('#after');
    const arrowBefore = document.querySelector('#before');

    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider_body-show').dataset.id)

        value = currentElement
        value += change
        
        if(value===0 || value == sliders.length+1) {
            value = value === 0 ? sliders.length : 1
        }

        sliders[currentElement-1].classList.toggle('slider_body-show')

        sliders[value-1].classList.toggle('slider_body-show')
    }

})()

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})