import type { GtagProps }        from './gtag.interfaces.js'
import type { FC }               from 'react'

import React                     from 'react'
// @ts-ignore:next-line
import { default as BaseScript } from 'next/script'
import { memo }                  from 'react'

const Script = BaseScript as unknown as FC<any>

export const Gtag: FC<GtagProps> = memo(({ gaTrackingId }) => {
  const gtagRawString = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gaTrackingId}');
	`

  return (
    <Script
      id='show-banner'
      dangerouslySetInnerHTML={{
        __html: gtagRawString,
      }}
    />
  )
})
