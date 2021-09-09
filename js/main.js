


//Menu button click - show and hide 

const btn = document.querySelector('.hamburger');
const btnItems = document.querySelectorAll('.hamburger__line');
const navList = document.querySelector('.header__listContainer')
const listItem = document.querySelector('.header__list--second')
const subList = document.querySelector('.header__listContainer--sublistOff')
const moreBtn = document.querySelectorAll('.courses__btn')
const moreText = document.querySelector('.courses__text--more')
// const parentText = document.querySelector('.courses__textBox')

btnItems.forEach((e) => {
    btn.addEventListener("click", () => {
        navList.classList.toggle('header__listContainer--opened');
       e.classList.toggle('hamburger__line1--opened');
        e.classList.toggle('hamburger__line2--opened');
         e.classList.toggle('hamburger__line3--opened');
   
if(navList.classList.contains('header__listContainer--opened'))
{
  navList.style.top = "0"
  navList.style.height = "78.5vh"
}

else {
  navList.style.top = "-78.5vh"
  navList.style.height = "0"
}

    })
  })

listItem.addEventListener("click", () => {
subList.classList.toggle('header__listContainer--sublistOff--opened');
})


moreBtn.forEach(e => {
e.addEventListener("click", () =>{
  moreText.classList.toggle('courses__text--show')
 
 
//   if (moreText.innerHTML === 'Read More')
//   {
// moreBtn.innerHTML = 'Read Less';
// }
// else {
//  moreBtn.innerHTML = 'Więcej'
// }

  console.log('brum')
})
})


// parentText.addEventListener("click",(e) =>{

//   const current = e.target;
//   const isReadMoreBtn = current.className.includes('courses__btn');

//   if(!isReadMoreBtn) return;

//   const moreText = event.target.parentNode.querySelector('.courses__text--more')

// moreText.classList.toggle('courses__text--show')

// current.textContent = current.textContent.includes('Rozwiń') ? "Zwiń" : "Rozwiń";

// })
