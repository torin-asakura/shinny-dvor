import type { NextConfig }            from 'next'
import type { NextJsWebpackConfig }   from 'next/dist/server/config-shared.js'

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import { join }                       from 'path'
import { dirname }                    from 'path'
import { fileURLToPath }              from 'url'

const filenamePath = fileURLToPath(import.meta.url)
const dirnamePath = dirname(filenamePath)

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.shdvor.pro',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  experimental: {
    instrumentationHook: true,
    externalDir: true,
    outputFileTracingRoot: join(dirnamePath, './'),
    esmExternals: 'loose',
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (webpackConfig, { webpack }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    webpackConfig.plugins.push(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      new webpack.NormalModuleReplacementPlugin(/\.js$/, (resource: { request: string }) => {
        // eslint-disable-next-line no-param-reassign
        resource.request = resource.request.replace('.js', '')
      })
    )
    return webpackConfig as NextJsWebpackConfig
  },
  output: 'standalone',
}

export default withVanillaExtract(nextConfig)
