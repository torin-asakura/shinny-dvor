import type { FC }                      from 'react'
import type { PropsWithChildren }       from 'react'

import React                            from 'react'

import { RootLayout as BaseRootLayout } from '@site/root-layout-fragment'

import messages                         from '../../locales/ru.json'

export { generateMetadata } from '@site/root-layout-fragment'

const gaTrackingId = process.env.GA_TRACKING_ID || 'GTM-TPXQGZP'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <BaseRootLayout messages={messages} gaTrackingId={gaTrackingId}>
    {children}
  </BaseRootLayout>
)

export default RootLayout
export const revalidate = 3600
