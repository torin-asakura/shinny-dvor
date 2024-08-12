import Script from 'next/script'
import React  from 'react'
import { FC } from 'react'

// TODO interfaces
export const Gtag: FC<any> = ({ gaTrackingId = 'GTM-TPXQGZP' }) => {
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
}
