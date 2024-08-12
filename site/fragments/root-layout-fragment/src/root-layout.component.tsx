import React                from 'react'

import { RootLayoutClient } from './root-layout.client.js'

// TODO interface
export const RootLayout = ({ children, messages, gaTrackingId }) => {
  return (
    <html>
      <body>
        <RootLayoutClient children={children} messages={messages} gaTrackingId={gaTrackingId} />
      </body>
    </html>
  )
}
