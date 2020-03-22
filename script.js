// burger navigation
const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', () => {
    links.classList.toggle('links-active');
    burger.classList.toggle('burger-active');
    if(links.classList.contains('links-active')) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflowY = 'auto';
    }
});
const anchors = document.querySelectorAll('.links a');
anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
        links.classList.toggle('links-active');
        burger.classList.toggle('burger-active');
    });
});

// counter
const counters = document.querySelectorAll('.counter');
const speed = 2000;
const updateCount = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increase = target / speed;
        if(count < target) {
            counter.innerText = count + increase;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    });
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            updateCount();
        }
    });
}, {
    threshold: 0.1
});
observer.observe(document.querySelector('.stats'));

// form preventer
document.querySelector('form').addEventListener('submit', e => e.preventDefault());

// scroll animations
let scrollAnim = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(entry.target.className === 'cards') {
                document.querySelectorAll('.card').forEach((card, index) => {
                    card.style.animation = `fade 1s ease forwards ${index/5}s`; 
                });
            }
            if(entry.target.className === 'home-content') {
                document.querySelector('.home-content img').style.animation = 'move-up 0.7s ease forwards';
                document.querySelector('.home-text').style.animation = 'move-right 0.7s ease forwards 0.7s';
            }
            if(entry.target.id === 'about') {
                document.querySelector('#about img').style.animation = 'move-up 0.7s ease forwards';
                document.querySelector('.about-content').style.animation = 'move-right 0.7s ease forwards 0.7s';       
            }
            if(entry.target.className === 'projects') {
                document.querySelectorAll('.project').forEach((project, index) => {
                    project.style.animation = `fade 1s ease forwards ${index/5}s`; 
                });  
            }
            if(entry.target.id === 'contact') {
                document.querySelector('form').style.animation = 'move-right 0.7s ease forwards 0.7s';
                document.querySelector('.contact-image').style.animation = 'move-up 0.7s ease forwards';
            }
        }
    });
}, {
    threshold: 0.1
});
function myFunction(x) {
    if (x.matches) {
        scrollAnim = false;  
    } else {
        scrollAnim = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    if(entry.target.className === 'cards') {
                        document.querySelectorAll('.card').forEach((card, index) => {
                            card.style.animation = `fade 1s ease forwards ${index/5}s`; 
                        });
                    }
                    if(entry.target.className === 'home-content') {
                        document.querySelector('.home-content img').style.animation = 'move-up 0.7s ease forwards';
                        document.querySelector('.home-text').style.animation = 'move-right 0.7s ease forwards 0.7s';
                    }
                    if(entry.target.id === 'about') {
                        document.querySelector('#about img').style.animation = 'move-up 0.7s ease forwards';
                        document.querySelector('.about-content').style.animation = 'move-right 0.7s ease forwards 0.7s';       
                    }
                    if(entry.target.className === 'projects') {
                        document.querySelectorAll('.project').forEach((project, index) => {
                            project.style.animation = `fade 1s ease forwards ${index/5}s`; 
                        });  
                    }
                    if(entry.target.id === 'contact') {
                        document.querySelector('form').style.animation = 'move-right 0.7s ease forwards 0.7s';
                        document.querySelector('.contact-image').style.animation = 'move-up 0.7s ease forwards';
                    }
                }
            });
        }, {
            threshold: 0.1
        });
    }
}

const x = window.matchMedia("(max-width: 1100px)");
myFunction(x);
x.addListener(myFunction);
if(scrollAnim !== false) {
    scrollAnim.observe(document.querySelector('.cards'));
    scrollAnim.observe(document.querySelector('.home-content'));
    scrollAnim.observe(document.getElementById('about'));
    scrollAnim.observe(document.querySelector('.projects'));
    scrollAnim.observe(document.getElementById('contact'));
}