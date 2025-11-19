import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

export function useParticleScene() {
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  let scene: THREE.Scene
  let camera: THREE.PerspectiveCamera
  let renderer: THREE.WebGLRenderer
  let particles: THREE.Points
  let animationId: number

  const init = (canvas: HTMLCanvasElement) => {
    canvasRef.value = canvas

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00FFF0,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    const ambientLight = new THREE.AmbientLight(0x0066FF, 0.5)
    scene.add(ambientLight)

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
  }

  const handleResize = () => {
    if (!canvasRef.value) return

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!particles) return

    const mouseX = (event.clientX / window.innerWidth) * 2 - 1
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

    particles.rotation.x = mouseY * 0.1
    particles.rotation.y = mouseX * 0.1
  }

  const animate = () => {
    animationId = requestAnimationFrame(animate)

    if (particles) {
      particles.rotation.y += 0.001
      particles.rotation.x += 0.0005
    }

    renderer.render(scene, camera)
  }

  const cleanup = () => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)

    if (animationId) {
      cancelAnimationFrame(animationId)
    }

    if (particles) {
      particles.geometry.dispose()
      ;(particles.material as THREE.Material).dispose()
    }

    if (renderer) {
      renderer.dispose()
    }
  }

  return { init, animate, cleanup }
}

export function useHeroGeometry() {
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  let scene: THREE.Scene
  let camera: THREE.PerspectiveCamera
  let renderer: THREE.WebGLRenderer
  let geometry: THREE.Mesh
  let animationId: number

  const init = (canvas: HTMLCanvasElement) => {
    canvasRef.value = canvas

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 3

    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100)
    const material = new THREE.MeshStandardMaterial({
      color: 0x0066FF,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    })

    geometry = new THREE.Mesh(torusGeometry, material)
    scene.add(geometry)

    const pointLight = new THREE.PointLight(0x00FFF0, 1)
    pointLight.position.set(2, 3, 4)
    scene.add(pointLight)

    const ambientLight = new THREE.AmbientLight(0x7B2FFF, 0.5)
    scene.add(ambientLight)

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
  }

  const handleResize = () => {
    if (!canvasRef.value) return

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!geometry) return

    const mouseX = (event.clientX / window.innerWidth) * 2 - 1
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

    geometry.rotation.y = mouseX * 0.5
    geometry.rotation.x = mouseY * 0.5
  }

  const animate = () => {
    animationId = requestAnimationFrame(animate)

    if (geometry) {
      geometry.rotation.x += 0.01
      geometry.rotation.y += 0.01
    }

    renderer.render(scene, camera)
  }

  const cleanup = () => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)

    if (animationId) {
      cancelAnimationFrame(animationId)
    }

    if (geometry) {
      geometry.geometry.dispose()
      ;(geometry.material as THREE.Material).dispose()
    }

    if (renderer) {
      renderer.dispose()
    }
  }

  return { init, animate, cleanup }
}
