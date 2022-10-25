import React        from 'react'
import { FC }       from 'react'

import { MapProps } from './map.interface'

const Map: FC<MapProps> = ({ width, height }) => (
  <iframe
    title='map'
    loading='lazy'
    src='https://yandex.ru/map-widget/v1/?z=12&amp;ol=biz&amp;oid=1068222259'
    width={width}
    height={height}
    frameBorder='0'
  />
)

export { Map }
