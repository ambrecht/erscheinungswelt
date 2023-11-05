import React, { useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import {
  ShaderMaterial,
  TextureLoader,
  PlaneGeometry,
  Mesh,
  Vector2,
} from 'three';
import styled from 'styled-components';
import { fragment as fragmentShader } from './fragment';
import { vertex as vertexShader } from './vertex';
import { createUniforms } from './uniform';

const BackgroundCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

function ResizableCanvas() {
  const { camera, gl } = useThree();
  useEffect(() => {
    const handleResize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [camera, gl]);

  return null; // Render nichts, da dies nur eine Hilfskomponente ist
}

const ShaderPlane = ({ imagePath }) => {
  const { scene, camera, gl } = useThree();
  const [material, setMaterial] = useState(null);
  const [delta, setDelta] = useState(0.0);
  const [flash_val, setFlashVal] = useState(0.0);
  const texture = useMemo(
    () => new TextureLoader().load(imagePath),
    [imagePath],
  );

  useEffect(() => {
    const material = new ShaderMaterial({
      uniforms: createUniforms(Vector2),
      vertexShader,
      fragmentShader,
    });
    setMaterial(material);
  }, []);

  useFrame(() => {
    setDelta((oldDelta) => oldDelta + 0.1);
    setFlashVal((oldFlashVal) =>
      oldFlashVal > 0.0 ? oldFlashVal - 0.15 : 0.0,
    );

    material &&
      Object.assign(material.uniforms, {
        u_time: { value: delta },
        u_flash: { value: flash_val },
        u_texture: { value: texture },
      });

    gl.render(scene, camera);
  });

  return (
    material && (
      <mesh material={material}>
        <planeGeometry args={[5, 2, 128, 128]} />
      </mesh>
    )
  );
};

const Scene = ({ imagePath }) => (
  <BackgroundCanvas>
    <Canvas
      camera={{
        position: [0, 0, 2],
        fov: 45,
        near: 1,
        far: 10000,
        aspect: window.innerWidth / window.innerHeight,
      }}
      onCreated={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ResizableCanvas />
      <ShaderPlane imagePath={imagePath} />
    </Canvas>
  </BackgroundCanvas>
);

export default Scene;
