import { Config } from '@stencil/core';

export const config: Config = {
  devServer: {
    openBrowser: false,
    port: 4444,
  },
  namespace: 'standard-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
