// burger navigation
const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', () => {
    links.classList.toggle('links-active');
    burger.classList.toggle('burger-active');
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
    threshold: 0.3
});
observer.observe(document.querySelector('.stats'));

// form preventer
document.querySelector('form').addEventListener('submit', e => e.preventDefault());