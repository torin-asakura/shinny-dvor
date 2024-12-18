import type { MapProps } from './map.interface.js'

import { FC }            from 'react'
import { memo }          from 'react'
import React             from 'react'

const Map: FC<MapProps> = memo(({ width, height }) => (
  <iframe
    title='map'
    loading='lazy'
    src='https://yandex.ru/map-widget/v1/?z=12&amp;ol=biz&amp;oid=1068222259'
    width={width}
    height={height}
    frameBorder='0'
  />
))

export { Map }
