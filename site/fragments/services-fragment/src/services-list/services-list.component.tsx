import React         from 'react'
import { FC }        from 'react'

import { Service }   from './service'
import { ItemProps } from './services-list.interface'

const ServicesList: FC<ItemProps> = ({ services }) => (
  <>
    {services.map(({ uri, servicesParams: { title, description, price } }) => (
      <Service uri={uri} title={title} description={description} price={price} />
    ))}
  </>
)

export { ServicesList }
