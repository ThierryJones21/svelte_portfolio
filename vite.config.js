import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    {
      name: 'copy-assets',
      apply: 'build',
      generateBundle(options, bundle) {
        // Define the directory where your images are stored
        const imagesDir = 'static/images';

        // Iterate over the bundle and copy image files to the appropriate location in the build output
        Object.values(bundle).forEach((file) => {
          if (file.type === 'asset' && file.fileName.startsWith(imagesDir)) {
            this.emitFile({
              type: 'asset',
              fileName: path.basename(file.fileName),
              source: file.source,
            });
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      '$components': path.resolve('src/components'),
      '$styles': path.resolve('src/styles'),
      '$data': path.resolve('data'),
      '$types': path.resolve('src/types'),
    },
  },
  server: {
    port: 3000
  },
};

export default config;
