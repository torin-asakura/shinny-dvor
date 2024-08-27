import type { ItemProps } from './services-list.interface.js'
import type { FC }        from 'react'

import React              from 'react'

import { Service }        from './service/index.js'

const ServicesList: FC<ItemProps> = ({ services }) => (
  <>
    {services.map((
      // @ts-expect-error not exist
      { uri, servicesParams: { title, description, price } }
    ) => (
      <Service key={uri} uri={uri} title={title} description={description} price={price} />
    ))}
  </>
)

export { ServicesList }
