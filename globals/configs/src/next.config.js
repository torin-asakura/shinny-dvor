// import { withSentryConfig } from '@sentry/nextjs'
// import { resolve } from 'dns'

import { join } from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    externalDir: true,
    outputFileTracingRoot: join(__dirname, './src'),
    esmExternals: 'loose',
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (webpackConfig, { webpack, isServer }) => {
    webpackConfig.plugins.push(
      new webpack.NormalModuleReplacementPlugin(new RegExp(/^(\.{1,2}\/)+\S*\.js$/), function (
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

// const sentryConfig = withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options
// Suppresses source map uploading logs during build
// silent: true,
// org: 'atlantis',
// project: 'shdvor',
// authToken: '74f2c677e43f7f147ab8c797b7bcd28dede5c229334ac16e88129ee4962f3cea',
// url: 'https://logger.atls.tech/',
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
// Upload a larger set of source maps for prettier stack traces (increases build time)
// widenClientFileUpload: true,
//
// // Transpiles SDK to be compatible with IE11 (increases bundle size)
// transpileClientSDK: true,
//
// // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
// tunnelRoute: '/monitoring',
//
// // Hides source maps from generated client bundles
// hideSourceMaps: true,
//
// // Automatically tree-shake Sentry logger statements to reduce bundle size
// disableLogger: true,
//
// // Enables automatic instrumentation of Vercel Cron Monitors.
// // See the following for more information:
// // https://docs.sentry.io/product/crons/
// // https://vercel.com/docs/cron-jobs
// automaticVercelMonitors: true,
// })

// export default sentryConfig
export { nextConfig }
