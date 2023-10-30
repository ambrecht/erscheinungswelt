import { useState, useEffect } from 'react';

/**
 * React hook for loading a texture.
 * @param {string} path - The texture path.
 * @returns {THREE.Texture | null} - The loaded texture, or null if not yet loaded.
 */
export const useTextureLoader = (path, THREE) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    // The omnipotent loader of textures
    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(
      path,
      (loadedTexture) => {
        // Eureka! We've captured the aesthetic essence in binary form.
        setTexture(loadedTexture);
      },
      undefined,
      (err) => {
        // What a tragic existence; an error!
        console.error('An error occurred while loading texture:', err);
      },
    );
  }, [path]);

  return texture;
};
