import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      sourcemap: true,
      format: 'es',
    },
    {
      file: pkg.main,
      sourcemap: true,
      format: 'umd',
      name,
    },
  ],
  plugins: [
    svelte(),
    resolve()
  ],
}
