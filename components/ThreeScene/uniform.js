export const createUniforms = (lib) => {
  return {
    u_time: {
      type: '1f',
      value: 1.0,
    },
    u_resolution: {
      type: 'v2',
      value: new lib(window.innerWidth, window.innerHeight),
    },
    u_texture: {
      type: 't',
      value: null,
    },
    u_flash: {
      type: '1f',
      value: 0.0,
    },
  };
};
