/* eslint-disable */

import { join } from 'path'
import { dirname } from 'path'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
export default {
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
    outputFileTracingRoot: join(__dirname, './'),
    esmExternals: 'loose',
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (webpackConfig, { webpack }) => {
    webpackConfig.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        new RegExp(/\.js$/),
        (
          /** @type {{ request: string }} */
          resource
        ) => {
          resource.request = resource.request.replace('.js', '')
        }
      )
    )
    return webpackConfig
  },
  output: 'standalone',
}
