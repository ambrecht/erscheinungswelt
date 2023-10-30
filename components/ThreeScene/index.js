import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { fragment as fragmentShader } from './fragment';
import { vertex as vertexShader } from './vertex';
import { createUniforms } from './uniform';
import { useResize } from './utils/useResize';
import { useTextureLoader } from './utils/useTextureLoader'; // Assuming you also exported the texture loader hook

const BackgroundCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Scene = () => {
  const canvasRef = useRef(null);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [state, setState] = useState({
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    ),
    renderer: null,
    material: null,
    delta: 0.0,
    flash_val: 0.0,
  });

  const texture = useTextureLoader('/Brutalist/work3333.png', THREE);

  // The entire state is passed down, but useResize may only mutate some parts
  useResize(state, THREE);

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new THREE.WebGLRenderer();
    const material = new THREE.ShaderMaterial({
      uniforms: createUniforms(THREE),
      vertexShader,
      fragmentShader,
    });
    state.camera.position.z = 2;

    setState({
      ...state,
      renderer,
      material,
    });
  }, []);

  useEffect(() => {
    if (!state.renderer || !canvasRef.current) return;

    state.renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(state.renderer.domElement);
  }, [state.renderer, canvasRef]);

  useEffect(() => {
    if (!state.material || !texture) return;

    state.material.uniforms.u_texture.value = texture;

    const geometry = new THREE.PlaneGeometry(5, 2, 128, 128);
    const mesh = new THREE.Mesh(geometry, state.material);
    state.scene.add(mesh);

    const render = () => {
      requestAnimationFrame(render);

      state.material.uniforms.u_time.value += 0.01;
      state.delta += 0.1;

      if (state.flash_val > 0.0) {
        state.flash_val -= 0.15;
      } else {
        state.flash_val = 0.0;
      }

      state.material.uniforms.u_flash.value = state.flash_val;

      state.renderer.render(state.scene, state.camera);
    };

    render();
    setBackgroundLoaded(true);
  }, [state, texture]);

  return <BackgroundCanvas ref={canvasRef}></BackgroundCanvas>;
};

export default Scene;
