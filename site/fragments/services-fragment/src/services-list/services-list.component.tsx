import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'

import { radiusVar }      from '@store/chosen-radius'

import { Service }        from './service'
import { ItemProps }      from './services-list.interface'

const ServicesList: FC<ItemProps> = ({ isSizeChosen, services }) => {
  const radius = useReactiveVar<string>(radiusVar)

  return (
    <>
      {services.map(({
        title,
        description,
        variant,
        addon,
        price,
        workexamples,
        additionalservice,
      }) => (
        <Service
          radius={radius}
          isSizeChosen={isSizeChosen}
          title={title}
          description={description}
          variant={variant}
          addon={addon}
          price={price}
          workexamples={workexamples}
          additionalservice={additionalservice}
        />
      ))}
    </>
  )
}

export { ServicesList }
