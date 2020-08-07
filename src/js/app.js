
// Scrollbar
document.querySelector(".nav-container").addEventListener("wheel", () => {

  const scroll = document.querySelector(".nav-container");

  scroll.className = "nav-container";

  setTimeout(() => {
    scroll.className += " scroll-off";
  }, 500);


});



window.addEventListener("DOMContentLoaded", () => {

    const navWidth = document.querySelector(".nav-content").offsetWidth;
    
    const boxArea = document.querySelector(".box-area");
    
    boxArea.style.width = navWidth + "px";

    const rightImg = document.querySelector(".right-image")

    if(rightImg.style.display == 'none') {
        const boxArea = document.querySelector('.box-area');

        boxArea.style.left = 'calc(100vw - 35vw)';

        console.log(boxArea.style.left + 'hi')
    }
})

// Retrieves size of middle section dynamically
window.addEventListener("resize", () => {
  const navWidth = document.querySelector(".nav-content").offsetWidth;

  console.log(navWidth);

  const boxArea = document.querySelector(".box-area");

  boxArea.style.width = navWidth + "px";

  console.log(boxArea.style.width);

  // Grab css variable
  document.documentElement.style.setProperty('--variable', '200px');

  console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--variable'));

});
