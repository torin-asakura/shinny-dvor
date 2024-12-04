import type { FC }          from 'react'

import type { GtagProps }   from './gtag.interfaces.js'

/* eslint-disable */
import { GoogleTagManager } from '@next/third-parties/google'
import { memo }             from 'react'
import React                from 'react'

export const Gtag: FC<GtagProps> = memo(({ gaTrackingId }) => {
  return <GoogleTagManager gtmId={gaTrackingId} />
})
