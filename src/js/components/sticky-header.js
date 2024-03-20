window.onscroll = function() {myFunction()};


var header = document.querySelector('.header');
var sticky = 0;
let pageContainer = document.querySelector('.site-container')
function myFunction() {
  let headerHeight = header.scrollHeight

  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    pageContainer.style.paddingTop = headerHeight + 'px'
  } else {
    header.classList.remove("sticky");
    pageContainer.style.paddingTop = null
  }
}
