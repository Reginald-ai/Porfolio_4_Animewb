// const prev = document.querySelector('.btn-left')
// const next = document.querySelector('.btn-right')
// const slider = document.querySelector('.carousel_b_slider')
// var direction;

// next.addEventListener('click',() =>{
//     if(direction === 1){
//         slider.prepend(slider.lastElementChild);

//         direction = -1;

//     }
//     direction = -1

// slider.style.transform = 'translate(-100%)'
// slider.style.justifyContent = 'flex-start'
// })

// prev.addEventListener('click',() =>{
//     if(direction === -1){
//         slider.appendChild(slider.firstElementChild);

//         direction = 1;
//     }
//     direction = 1;

// slider.style.transform = 'translate(100%)'
// slider.style.justifyContent = 'flex-end'

// })

// slider.addEventListener('transitionend',() =>{

//     if(direction === -1){
//         slider.appendChild(slider.firstElementChild)
//     }else if (direction === 1){
//         slider.prepend(slider.lastElementChild)
//     }

//     slider.style.transition = 'none'
//     slider.style.transform = 'translate(0%)'
//     setTimeout(()=>{
//         slider.style.transition = 'all 0.5s ease'
//     })
// })

const prevBtn = document.querySelector(".btn-left");
const nextBtn = document.querySelector(".btn-right");
const slider = document.querySelector(".carousel-c-slider");
const carousel = document.querySelector(".anime-blog-3 .carousel-c");
var sectionIndex = 0;

function reset() {
  for (var i = 0; i < slider.children.length; i++)
    slider.children[sectionIndex].style.zIndex = 0;
  slider.children[sectionIndex].style.opacity = 0;
}
// var intervalId = 0;

// function startShow() {
//     intervalId = setInterval(function () {
//         reset()
//         sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 0;

//         slider.children[sectionIndex].style.zIndex = 1
//         slider.children[sectionIndex].style.opacity = 1
//     }, 3000)
// }
// startShow()
// carousel.addEventListener('mouseover', function () {
//     clearInterval(intervalId)
// })
// carousel.addEventListener('mouseout', function () {
//     startShow()
// })
nextBtn.addEventListener("click", function () {
  reset();
  sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;

  slider.children[sectionIndex].style.zIndex = 1;
  slider.children[sectionIndex].style.opacity = 1;
  slider.children[sectionIndex].style.animation =
    "up-news-1 2s ease 1 forwards";

  // if (sectionIndex > 2 ) {
  //     slider.prepend(slider.firstElementChild);

  //     slider.firstElementChild.style.zIndex = 1
  //     slider.children[sectionIndex].style.opacity = 1

  // }
  // sectionIndex = -1
});
prevBtn.addEventListener("click", function () {
  reset();
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;

  slider.children[sectionIndex].style.zIndex = 1;
  slider.children[sectionIndex].style.opacity = 1;

  // if (sectionIndex === -1) {
  //     slider.appendChild(slider.firstElementChild);

  //     sectionIndex = 1;
  // }
  // sectionIndex = 1;
});

// slider.addEventListener('transitionend', () => {

//     if (sectionIndex === -1) {
//         slider.appendChild(slider.firstElementChild)
//     } else if (sectionIndex === 1) {
//         slider.prepend(slider.lastElementChild)
//     }

//     slider.style.transition = 'none'

//     setTimeout(() => {
//         slider.style.transition = 'all 0.5s ease'
//     })
// })
