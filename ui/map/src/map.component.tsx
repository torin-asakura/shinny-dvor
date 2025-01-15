import type { FC }       from 'react'

import type { MapProps } from './map.interface.js'

import { memo }          from 'react'
import React             from 'react'

const Map: FC<MapProps> = memo(({ width, height }) => (
  <iframe
    title='map'
    loading='lazy'
    src='https://yandex.ru/map-widget/v1/?z=12&amp;ol=biz&amp;oid=1068222259'
    width={width}
    height={height}
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    frameBorder='0'
  />
))

export { Map }
