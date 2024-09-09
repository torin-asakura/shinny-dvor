import { join } from 'path'
import { dirname } from 'path'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
export default {
  experimental: {
    externalDir: true,
    outputFileTracingRoot: join(__dirname, './'),
    esmExternals: 'loose',
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (webpackConfig, { webpack }) => {
    webpackConfig.plugins.push(
      new webpack.NormalModuleReplacementPlugin(new RegExp(/\.js$/), function (
        /** @type {{ request: string }} */
        resource
      ) {
        resource.request = resource.request.replace('.js', '')
      })
    )
    return webpackConfig
  },
  output: 'standalone',
}
