import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import scss from "rollup-plugin-scss";
import externalGlobals from "rollup-plugin-external-globals";
 


const name = require('./package.json').main.replace(/\.js$/, '')

const bundle = config => ({
  ...config,
  input: 'src/ts/index.ts'
})

export default [
  bundle({
    plugins: [
        externalGlobals({
            jQuery: "$"
        }),
        esbuild(),
        scss()
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      }
    ],
  }),
  bundle({
    plugins: [dts(), scss()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
]