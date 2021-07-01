const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.katalog');

    burger.addEventListener('click',()=> {
        nav.classList.toggle('aktivno');
    });
}

navSlide();


gsap.from('.logo,.katalog', {duration: 2, x:'-150%',ease:'circ'})


const tekstovi = document.querySelectorAll('.anim');
const omeni = document.querySelectorAll('.animdva');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim2 1s forwards ease-out`;

        } else {
            entry.target.style.animation = 'none';
        }
           
    })
});
tekstovi.forEach(tekst => {
    observer.observe(tekst)
});

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 1s forwards ease-out`;

        } else {
            entry.target.style.animation = 'none';
        }
           
    })
});

omeni.forEach(anima => {
    observer.observe(anima)
});



