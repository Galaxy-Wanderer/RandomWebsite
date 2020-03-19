/*const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.transition = '1s ease';
            entry.target.style.color = 'blue';
        }
    });
}, {
    threshold: 0.7
});
observer.observe(document.querySelector('h1'));*/
const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', () => {
    links.classList.toggle('links-active');
    burger.classList.toggle('burger-active');
});