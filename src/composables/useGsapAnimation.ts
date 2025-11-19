import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal() {
  const revealElements = (selector: string, options = {}) => {
    const defaults = {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }

    gsap.from(selector, { ...defaults, ...options })
  }

  const staggerReveal = (selector: string, options = {}) => {
    const defaults = {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }

    gsap.from(selector, { ...defaults, ...options })
  }

  return { revealElements, staggerReveal }
}

export function useParallax() {
  const createParallax = (element: string, speed: number = 0.5) => {
    gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }

  return { createParallax }
}

export function useTextAnimation() {
  const splitText = (element: HTMLElement) => {
    const text = element.textContent || ''
    element.innerHTML = text
      .split('')
      .map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('')
  }

  const animateChars = (selector: string, options = {}) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach(el => splitText(el as HTMLElement))

    const defaults = {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }

    gsap.from(`${selector} .char`, { ...defaults, ...options })
  }

  return { animateChars, splitText }
}

export function useCounter() {
  const animateCounter = (element: HTMLElement, target: number, duration: number = 2) => {
    const obj = { val: 0 }

    gsap.to(obj, {
      val: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = Math.round(obj.val).toString()
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }

  return { animateCounter }
}

export function useGsapCleanup() {
  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
}
