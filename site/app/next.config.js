/* eslint-disable */

import { join } from 'path'
import { dirname } from 'path'

import { fileURLToPath } from 'url'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default withVanillaExtract(nextConfig)
