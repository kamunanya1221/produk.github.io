//toggle 
const menutoggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menutoggle.onclick = function () {
    menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

//slider
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slides');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    prev.addEventListener('click', function () {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    next.addEventListener('click', function () {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    // Auto slide
    setInterval(function () {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds
});


// function for next btn
next.addEventListener('click', function () {
    if (i == slides.length - 1) {
        i = 0;
        ActiveSlide(i);
    }
    else {
        i++;
        ActiveSlide(i);
    }
})

// function for prev btn
prev.addEventListener('click', function () {
    if (i == 0) {
        i = slides.length - 1;
        ActiveSlide(i);
    }
    else {
        i--;
        ActiveSlide(i);
    }
})