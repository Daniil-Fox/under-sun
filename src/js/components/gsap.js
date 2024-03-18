import {gsap} from 'gsap'

import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const leftItems = document.querySelectorAll('.gsap-animate-left')
const rightItems = document.querySelectorAll('.gsap-animate-right')

leftItems.forEach(el => {
  gsap.fromTo(el, {xPercent: -30, opacity: 0}, {xPercent: 0, opacity: 1, scrollTrigger: {
    trigger: el,
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
    toggleActions: "play none none none",
  }})
})

rightItems.forEach(el => {
  gsap.fromTo(el, {xPercent: 30, opacity: 0}, {xPercent: 0, opacity: 1, scrollTrigger: {
    trigger: el,
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
    toggleActions: "play none none none",
  }})
})
