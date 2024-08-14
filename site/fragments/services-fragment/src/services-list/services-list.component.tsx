import { FC }        from 'react'
import React         from 'react'

import { Service }   from './service/index.js'
import { ItemProps } from './services-list.interface.js'

const ServicesList: FC<ItemProps> = ({ services }) => (
  <>
    {services.map(({ uri, servicesParams: { title, description, price } }) => (
      <Service key={uri} uri={uri} title={title} description={description} price={price} />
    ))}
  </>
)

export { ServicesList }
