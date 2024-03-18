const tabsBtn = document.querySelectorAll('.tabs__btn')
const tabsContent = document.querySelectorAll('.tabs__pricelist')

tabsBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
    const dataset = btn.dataset.tabsType
    const currentContent = document.querySelector(`.tabs__pricelist--${dataset}`)

    clearAllActive()
    currentContent.classList.add('active')
    btn.classList.add('active')
  })
})

function clearAllActive(){
  tabsBtn.forEach(el => el.classList.remove('active'))
  tabsContent.forEach(el => el.classList.remove('active'))
}
