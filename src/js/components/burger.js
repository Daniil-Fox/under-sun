const burgerBtn = document.querySelector('.header__burger')

if(burgerBtn){
  const menu = document.querySelector('.menu')
  const menuClose = document.querySelector('.menu__close')
  const menuItems = document.querySelectorAll('.nav__link')
  burgerBtn.addEventListener('click', e => {
    menu.classList.add('active')
  })
  menuClose.addEventListener('click', e => {
    menu.classList.remove('active')
  })

  menuItems.forEach(link => {
    link.addEventListener('click', e => {
      menu.classList.remove('active')
    })
  })
}
