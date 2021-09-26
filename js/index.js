//Menu button click - show and hide 
const btn = document.querySelector('.hamburger');
const btnItems = document.querySelectorAll('.hamburger__line');
const navList = document.querySelector('.header__navigation');
const listItem = document.querySelector('.header__list--second');
const subList = document.querySelector('.header__listContainer--sublistOff');
const body =document.querySelector('[data-body]')

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
