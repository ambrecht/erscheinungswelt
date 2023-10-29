import * as THREE from "three"
import { deferWork } from "./DeferWork"

/**
 * Handles window resize events.
 * @param {Event} ev - The window resize event.
 * @param {State} state
 * @returns {State} - The updated state.
 */
export const handleResize = (ev, state) => {
  deferWork(() => {
    const w = window.innerWidth
    const h = window.innerHeight

    // Ensure the camera aspect is updated
    if (state.camera) {
      state.camera.aspect = w / h
      state.camera.updateProjectionMatrix()
    }

    // Update renderer size
    if (state.renderer) {
      state.renderer.setSize(w, h)
    }

    // Check the existential status of all required entities before proceeding
    if (
      state.material &&
      state.material.uniforms &&
      state.material.uniforms.u_resolution &&
      typeof THREE.Vector2 === "function"
    ) {
      state.material.uniforms.u_resolution.value = new THREE.Vector2(w, h)
    } else {
      console.warn("The cosmic alignment is not favorable for Vector2 instantiation.")
    }

    return state // Return the updated state
  })
}
