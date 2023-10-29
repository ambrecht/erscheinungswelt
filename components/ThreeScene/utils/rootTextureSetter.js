/**
 * Sets the root texture.
 * @param {Array} images - The array of image data containing names and textures.
 * @param {THREE.ShaderMaterial} material - The material whose texture should be set.
 * @returns {void}
 */
export const setRootTexture = (images, material) => {
  if (images.length === 0) {
    setTimeout(() => {
      setRootTexture(images, material);
    }, 100);
    return;
  }

  const defaultImage = images.find((i) => i.name === 'default');

  if (defaultImage && defaultImage.texture) {
    material.uniforms.u_texture.value = defaultImage.texture;
  }
};
