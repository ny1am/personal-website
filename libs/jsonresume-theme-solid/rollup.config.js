import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { string } from 'rollup-plugin-string';

const extensions = ['.ts', '.tsx'];
const inputFile = 'main.tsx';
const outputDir = 'dist';

export default [
  {
    input: inputFile,
    output: { dir: outputDir, format: 'esm' },
    plugins: [
      postcss({
        config: { path: './postcss.config.cjs' },
        extensions: ['.css'],
      }),
      alias({
        entries: [{ find: /^(.*)\.(html)\?raw$/, replacement: '$1.$2' }],
      }),
      string({ include: '**/*.{html}' }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['babel-preset-solid', { generate: 'ssr', hydratable: false }],
          '@babel/preset-typescript',
        ],
      }),
      nodeResolve({ extensions, exportConditions: ['node'] }),
      typescript({
        include: inputFile,
        outDir: outputDir,
        declaration: true,
        declarationMap: true,
        jsx: 'preserve',
      }),
    ],
  },
];
