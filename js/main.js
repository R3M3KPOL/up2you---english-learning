


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
const body =document.querySelector('[data-body]')
//btns for card - courses
const btns = document.querySelectorAll('[data-btns]')
const text = document.querySelector('[data-modal]')
const closeBtns = document.querySelectorAll('[data-close]')


btnItems.forEach((e) => {
    btn.addEventListener("click", () => {
        navList.classList.toggle('header__navigation--open');
       e.classList.toggle('hamburger__line1--opened');
        e.classList.toggle('hamburger__line2--opened');
         e.classList.toggle('hamburger__line3--opened');

         if(navList.classList.contains('header__navigation--open'))
         {console.log('git')
             body.classList.add('body__blockedScroll')
         }
        else{
    body.classList.remove('body__blockedScroll')
            }
    })
  })

listItem.addEventListener("click", () => {
subList.classList.toggle('header__listContainer--sublistOff--opened');
})



btns.forEach(btnsOpen => {
    btnsOpen.addEventListener('click', () =>{
        const card = btnsOpen.nextElementSibling;
card.classList.add('courses__overlay--active')
if(card.classList.contains('courses__overlay--active'))
{
closeBtns.forEach(closeButton =>{
    closeButton.addEventListener('click', () =>{
     const closeCard = closeButton.closest('[data-modal]')
    closeCard.classList.remove('courses__overlay--active')
})
})   
}

    })
})


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