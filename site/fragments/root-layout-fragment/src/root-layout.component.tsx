import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { RootLayoutProps }   from './root-layout.interfaces.js'

import React                      from 'react'

import { RootLayoutClient }       from './root-layout.client.js'

export const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = ({
  children,
  messages,
  gaTrackingId,
}) => {
  return (
    <html>
      <body>
        <RootLayoutClient children={children} messages={messages} gaTrackingId={gaTrackingId} />
      </body>
    </html>
  )
}
