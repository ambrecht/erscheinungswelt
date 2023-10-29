// ====================[ Import Modules ]====================
import { fragment as fragmentShader } from "./fragment"
import { vertex as vertexShader } from "./vertex"
import { createUniforms } from "./uniform"
import { deferWork } from "../utils/DeferWork"
import { loadSingleTexture } from "../utils/loadSingleTexture"
import { loadMultiTextures } from "../utils/multiTextureLoader"
import { handleResize } from "../utils/resizeHandler"
import { setRootTexture } from "../utils/rootTextureSetter"
import { swapTexture } from "../utils/textureSwapper"

let THREE = null

// ================[ Scene Setup ]================
const initializeScene = () => new THREE.Scene()

// ================[ Camera Setup ]================
const initializeCamera = () => {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.z = 2
  return camera
}

// ================[ Renderer Setup ]================
const initializeRenderer = (parent) => {
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  parent.appendChild(renderer.domElement)
  return renderer
}

// ================[ Canvas Main Function ]================
const Canvas = (lib, el, callback, data) => {

   if (data === null) {
    console.warn("Data is null, refusing to render the canvas.");
    return;
  }
 
  THREE = lib

  const state = {
    parent: el,
    callback,
    renderer: initializeRenderer(el),
    scene: initializeScene(),
    camera: initializeCamera(),
    material: null,
    mesh: null,
    delta: 0.0,
    images: [],
    isOne: true,
    flash_val: 0.0
  }

  const init = async () => {
    state.images = await loadMultiTextures({
      THREE: THREE,
      loadSingleTexture: loadSingleTexture,
      data: data
    })
    addMaterial()
    setRootTexture(state.images, state.material)
    render()
    window.addEventListener("resize", (ev) => handleResize(ev, state, deferWork, THREE), false)
  }

  const addMaterial = () => {
    const geometry = new THREE.PlaneGeometry(5, 2, 128, 128)
    state.material = new THREE.ShaderMaterial({
      uniforms: createUniforms(THREE),
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    })
    state.mesh = new THREE.Mesh(geometry, state.material)
    state.mesh.position.z = 0
    state.scene.add(state.mesh)
    callback()
  }

  const render = () => {
    requestAnimationFrame(render)
    state.delta += 0.1
    if (state.flash_val > 0.0) {
      state.flash_val -= 0.15
    } else {
      state.flash_val = 0.0
    }
    state.material.uniforms.u_time.value = state.delta
    state.material.uniforms.u_flash.value = state.flash_val
    state.renderer.render(state.scene, state.camera)
  }

  init()

  return {
    ...state,
    swapTexture: (slug) => swapTexture(slug, state.images, state.material)
  }
}

export default Canvas
