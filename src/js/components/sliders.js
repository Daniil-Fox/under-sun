import {Swiper} from 'swiper'
import {Navigation, Pagination} from 'swiper/modules'

new Swiper(".work__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  modules: [Navigation, Pagination],

  navigation: {
    prevEl: '.work__btn--prev',
    nextEl: '.work__btn--next'
  },
  pagination: {
    el: '.work__pagination',
    type: "fraction",
  }
})
