/**
 * Swaps the current texture based on its slug.
 * @param {string} slug - The slug of the texture to be swapped to.
 * @param {Array} images - The array of image data containing slugs and textures.
 * @param {THREE.ShaderMaterial} material - The material whose texture should be swapped.
 * @returns {void}
 */
export const swapTexture = (slug, images, material) => {
  if (images.length === 0) {
    setTimeout(() => {
      swapTexture(slug, images, material);
    }, 100);
    return;
  }

  const findTextureBySlug = (s) => {
    const img = images.find((i) => i.slug === s);
    return img && img.texture ? img.texture : null;
  };

  let texture = findTextureBySlug(slug);

  if (!texture) {
    texture = findTextureBySlug('default');
  }

  if (texture) {
    material.uniforms.u_texture.value = texture;
  }
};
