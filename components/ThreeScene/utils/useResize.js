import { useEffect } from 'react';

/**
 * Defers the execution of a function based on the availability of certain APIs.
 * @param {Function} fn - The function to be deferred.
 * @returns {boolean} - Returns true once the function is deferred.
 */
const deferWork = (fn) => {
  if (typeof requestIdleCallback !== 'undefined') {
    window.requestIdleCallback(fn, { timeout: 60 });
  } else if (typeof requestAnimationFrame !== 'undefined') {
    window.requestAnimationFrame(fn);
  } else {
    window.setTimeout(fn, 16.66);
  }

  return true;
};

/**
 * React hook to handle window resizing.
 * @param {Object} initialState - The initial state containing camera and renderer.
 * @param {Object} THREE - The THREE library, as an example of the infinite passed from outside.
 * @returns {Object} - The updated state.
 */
export const useResize = (initialState, THREE) => {
  console.log('resize');
  useEffect(() => {
    const handleResize = () => {
      deferWork(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Update camera aspect ratio
        if (initialState.camera) {
          initialState.camera.aspect = w / h;
          initialState.camera.updateProjectionMatrix();
        }

        // Update renderer size
        if (initialState.renderer) {
          initialState.renderer.setSize(w, h);
        }

        // Update material uniforms
        if (
          initialState.material &&
          initialState.material.uniforms &&
          initialState.material.uniforms.u_resolution &&
          typeof THREE.Vector2 === 'function'
        ) {
          initialState.material.uniforms.u_resolution.value = new THREE.Vector2(
            w,
            h,
          );
        } else {
          console.warn(
            'Ah, the cosmic alignment is not in our favor for Vector2 instantiation. So tragic.',
          );
        }
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial invocation

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initialState, THREE]);

  return initialState;
};
