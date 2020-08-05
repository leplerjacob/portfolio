// Scrollbar
document.querySelector('.nav-container').addEventListener('wheel', () => {
    const scroll = document.querySelector('.nav-container');

    scroll.className = 'nav-container';

    setTimeout(() => {
        scroll.className += ' scroll-off';
    }, 500)
})