window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scrolled', window.scrollY > 0)
})


const textBtns = document.querySelectorAll('.contact__btn');

textBtns.forEach(textBtn => {
    let text = textBtn.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})