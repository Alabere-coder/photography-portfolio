window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scrolled', window.scrollY > 0)
})


const textBtns = document.querySelectorAll('.contact__btn');

textBtns.forEach(textBtn => {
    let text = textBtn.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});