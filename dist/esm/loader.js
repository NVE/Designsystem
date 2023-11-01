import { p as promiseResolve, b as bootstrapLazy } from './index-25ec8a20.js';
export { s as setNonce } from './index-25ec8a20.js';

/*
 Stencil Client Patch Esm v3.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map