


//arrow slide
const btnLeft =document.querySelector('[data-arrow-left]');
const btnRight =document.querySelector('[data-arrow-right]');
const card = document.querySelectorAll('[data-item]');



const btnsReview = document.querySelectorAll('[data-arrow]')
const review = document.querySelector('[data-itemContainer]');


let currentTestim = 0;
const size = card[0].clientWidth;

//Menu button click - show and hide 
const btn = document.querySelector('.hamburger');
const btnItems = document.querySelectorAll('.hamburger__line');
const navList = document.querySelector('.header__navigation');
const listItem = document.querySelector('.header__list--second');
const subList = document.querySelector('.header__listContainer--sublistOff');

//btns for card
const btns = Array.from(document.querySelectorAll('.courses__btn'))

btnItems.forEach((e) => {
    btn.addEventListener("click", () => {
        navList.classList.toggle('header__navigation--open');
       e.classList.toggle('hamburger__line1--opened');
        e.classList.toggle('hamburger__line2--opened');
         e.classList.toggle('hamburger__line3--opened');

    })
  })

listItem.addEventListener("click", () => {
subList.classList.toggle('header__listContainer--sublistOff--opened');
})


console.log(btns)

const clicked = () => {
    btns.forEach(button =>{
        button.addEventListener('click', () =>{
const card = button.previousElementSibling;
card.classList.toggle('courses__text--show');
        })
    })
}
clicked()

//arrow slide
    btnRight.addEventListener('click', () =>{
        
        currentTestim++;
        // review.style.transform = `translateX(${-100 * currentTestim}%)`;
        review.style.transform = `translateX(${-size * currentTestim}px)`
        console.log('klik w prawo')
    });

    btnLeft.addEventListener('click', () =>{
        currentTestim--;
        // review.style.transform = `translateX(${-100 * currentTestim}%)`;
        review.style.transform = `translateX(${-size * currentTestim}px)`
console.log('klik w lewo')
    });