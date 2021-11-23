import { terser } from 'rollup-plugin-terser';
import svelte from 'rollup-plugin-svelte';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import sveltePreprocess from './svelte.config.js';

const svelteComponents = () => {
  return {
    input: { component: 'src/app.js'},
    output: [
      {
        dir: 'dist',
        format: 'esm', // ES Modules
      },
    ],
    plugins: [
      svelte({
        emitCss: false,
        preprocess: sveltePreprocess.preprocess,
        compilerOptions: {
          customElement: true,
          sourcemap: true,
        },
        include: /\.wc\.svelte$/,
      }),
      svelte({
        emitCss: false,
        preprocess: sveltePreprocess.preprocess,
        compilerOptions: {
          customElement: false,
          sourcemap: true,
        },
        exclude: /\.wc\.svelte$/,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      terser(),
      copy({
        targets: [{ src: 'assets/*', dest: 'dist/assets/' }],
      }),
    ],
  };
};

export default () => {
  return [svelteComponents()];
};
