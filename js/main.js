




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
const btnLeft =document.querySelector('[data-arrow-left]');
const btnRight =document.querySelector('[data-arrow-right]');
const card = document.querySelectorAll('[data-item]');
const btnsReview = document.querySelectorAll('[data-arrow]')
const review = document.querySelector('[data-itemcontainer]');
let currentTestim = 1;
const size = card[0].clientWidth;

//arrow slide
//             btnRight.addEventListener('click', () =>{
//         if(currentTestim >= 10) {return}
//                 currentTestim++;
//                 // review.style.transform = `translateX(${-100 * currentTestim}%)`;
//                 review.style.transform = `translateX(${-size * currentTestim * '2'}px)`
//                 console.log('klik w prawo')
//             });
        
//     btnLeft.addEventListener('click', () =>{
//         currentTestim--;
//         // review.style.transform = `translateX(${-100 * currentTestim}%)`;
//         review.style.transform = `translateX(${-size * currentTestim * '2'}px)`
// console.log('klik w lewo')

//     });




// review.style.transform = 'translateX(' + (- size * currentTestim ) + 'px)'


              btnRight.addEventListener('click', () =>{
                  review.style.transition = "transform 0.4s ease-in-out";
                  currentTestim++;
                  review.style.transform = 'translateX(' + (- size * currentTestim ) + 'px)';
                console.log('klik w prawo')
        //       if (currentTestim = card.id ==='last') {
           
        //     console.log('jo')
        // }
            });
        
    btnLeft.addEventListener('click', () =>{
        review.style.transition = "transform 0.4s ease-in-out";
        currentTestim--;
        review.style.transform = 'translateX(' + (- size * currentTestim) + 'px)';
console.log('klik w lewo')
        //  if (currentTestim = card.id ==='first') {
           
        //     console.log('jo')
        // }
    });

review.addEventListener('transitionend', () => {
           if (currentTestim = card.id ==='last') {
            review.style.transition = "none";
            currentTestim = card.length - 2;
        review.style.transform = 'translateX(' + (- size * currentTestim) + 'px)'   
       console.log('fired') }

            if (currentTestim = card.id ==='first') {
            review.style.transition = "none";
            currentTestim = card.length - currentTestim;
        review.style.transform = 'translateX(' + (- size * currentTestim) + 'px)'   
        console.log('fired222')}
})



    // review.addEventListener('transitionend', () =>{
    //     // console.log('fired')
    //     if(card[currentTestim].id === 'last'){
    //         review.style.transition = "none";
    //         currentTestim = card.length - 1;
    //     review.style.transform = 'translateX(' + (- size * currentTestim *'2') + 'px)'
    //     }
    //    if(card[currentTestim].id === 'first'){
    //         review.style.transition = "none";
    //         currentTestim = card.length - currentTestim - 1;
    //     review.style.transform = 'translateX(' + (- size * currentTestim *'2') + 'px)'
    //     }
    // })

