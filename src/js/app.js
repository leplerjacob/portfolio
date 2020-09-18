
// @Desc    Applies a class to nav pane container. This class temporarily makes scrollbar visible after mouse wheel event occurs
document.querySelector(".nav-container").addEventListener("wheel", () => {

  const scroll = document.querySelector(".nav-container");

  scroll.className = "nav-container";

  setTimeout(() => {
      if(!scroll.classList.contains('scroll-off')){
          scroll.className += " scroll-off";
      }
  }, 500);

});


// @Desc    Upon window load, based on the size and present images, will the container of the floating box effect be given its position on the webpage
window.addEventListener("DOMContentLoaded", () => {

    const navWidth = document.querySelector(".nav-content").offsetWidth;
    
    const boxArea = document.querySelector(".box-area");
    
    boxArea.style.width = navWidth + "px";

    // Grab Image
    // const rightImg = document.querySelector(".right-image")

    const rightImg = window.getComputedStyle(document.querySelector('.right-image'))

    if(rightImg.display == 'none') {
        const boxArea = document.querySelector('.box-area');

        boxArea.style.right = '0';

    }
})



// @Desc    Retrieves size of middle section dynamically and applies the same size to the floating box container overlay
window.addEventListener("resize", () => {
  const navWidth = document.querySelector(".nav-content").offsetWidth;

  const boxArea = document.querySelector(".box-area");

  boxArea.style.width = navWidth + "px";


  // Grab css variable
  document.documentElement.style.setProperty('--variable', '200px');



});


