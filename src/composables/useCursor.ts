import { onMounted, onUnmounted } from 'vue'

export function useCustomCursor() {
  let cursorDot: HTMLElement | null = null
  let cursorOutline: HTMLElement | null = null
  let mouseX = 0
  let mouseY = 0
  let outlineX = 0
  let outlineY = 0

  const init = () => {
    cursorDot = document.createElement('div')
    cursorDot.className = 'cursor-dot'
    document.body.appendChild(cursorDot)

    cursorOutline = document.createElement('div')
    cursorOutline.className = 'cursor-outline'
    document.body.appendChild(cursorOutline)

    window.addEventListener('mousemove', handleMouseMove)

    animate()
  }

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY

    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`
      cursorDot.style.top = `${mouseY}px`
    }
  }

  const animate = () => {
    const delay = 0.1
    outlineX += (mouseX - outlineX) * delay
    outlineY += (mouseY - outlineY) * delay

    if (cursorOutline) {
      cursorOutline.style.left = `${outlineX}px`
      cursorOutline.style.top = `${outlineY}px`
    }

    requestAnimationFrame(animate)
  }

  const cleanup = () => {
    window.removeEventListener('mousemove', handleMouseMove)

    if (cursorDot) {
      document.body.removeChild(cursorDot)
    }

    if (cursorOutline) {
      document.body.removeChild(cursorOutline)
    }
  }

  onMounted(() => {
    if (window.innerWidth > 768) {
      init()
    }
  })

  onUnmounted(cleanup)

  return { init, cleanup }
}
