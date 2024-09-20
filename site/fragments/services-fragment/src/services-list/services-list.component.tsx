import type { FC }        from 'react'

import type { ItemProps } from './services-list.interface.js'

import React              from 'react'

import { Service }        from './service/index.js'

const ServicesList: FC<ItemProps> = ({ services }) => (
  <>
    {services.map(({
      uri,
      servicesParams: {
        // @ts-expect-error type not exist
        title,
        // @ts-expect-error type not exist
        description,
        // @ts-expect-error type not exist
        price,
      },
    }) => (
      <Service
        key={uri}
        // @ts-expect-error type not assignable
        uri={uri}
        title={title}
        description={description}
        price={price}
      />
    ))}
  </>
)

export { ServicesList }
