/*start at top every refresh*/
window.onload = () => {
    window.scrollTo(0, 0);
};

/*nav links */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


/*****FAQS */
document.addEventListener('DOMContentLoaded', function () {
    const questionContainers = document.querySelectorAll('.question-container');

    questionContainers.forEach(container => {
        const question = container.querySelector('.question');
        const answer = container.querySelector('.answer');

        question.addEventListener('click', function () {
            container.classList.toggle('active');
        });
    });
});

/*smooth scroll*/ 
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

/*Observer API */

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.0
});

sections.forEach((section) => {
    observer.observe(section);
});


/* Scroll To Top */
const scrollToTopLink = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopLink.style.display = 'block';
    } else {
        scrollToTopLink.style.display = 'none';
    }
});

scrollToTopLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//pre loader code

var loader = document.getElementById("pre-loader");

window.addEventListener("load",function(){
this.setTimeout(function(){
    loader.style.display = "none";
    },2000);

})