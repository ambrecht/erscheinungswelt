/**
 * Loads multiple textures asynchronously.
 * @param {THREE} THREE - The Three.js library instance.
 * @param {Function} loadSingleTexture - The function to load a single texture.
 * @param {Array} data - The data array containing the items to be loaded.
 * @returns {Promise} - A promise that resolves when all textures are loaded.
 */
export const loadMultiTextures = ({ THREE, data }) => {

  /**
 * Loads a single texture asynchronously.
 * @param {THREE} THREE - The Three.js library instance.
 * @param {Object} item - The texture item to be loaded.
 * @returns {Promise} - A promise that resolves when the texture is loaded.
 */
 const loadSingleTexture = (THREE, item) => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();

    loader.load(
      item.image,
      (texture) => {
        resolve({
          ...item,
          texture,
        });
      },
      undefined,
      (err) => {
        console.warn('Error loading image', item.image);
        reject(err);
      },
    );
  });
};


  return new Promise(async (resolve, reject) => {
    try {
      const promises = data.map((i) => loadSingleTexture(THREE, i))
      const images = await Promise.all(promises)
      resolve(images)
    } catch (err) {
      reject(err)
    }
  })
}
