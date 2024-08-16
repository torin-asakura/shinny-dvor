import type { FC }                      from 'react'
import type { PropsWithChildren }       from 'react'

import React                            from 'react'

import { RootLayout as BaseRootLayout } from '@blog/root-layout-fragment'

import messages                         from '../../locales/ru.json'

const gaTrackingId = process.env.GA_TRACKING_ID || 'GTM-TPXQGZP'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <BaseRootLayout messages={messages} gaTrackingId={gaTrackingId}>
    {children}
  </BaseRootLayout>
)

export { generateMetadata } from '@blog/root-layout-fragment'

export default RootLayout
export const revalidate = 3600
