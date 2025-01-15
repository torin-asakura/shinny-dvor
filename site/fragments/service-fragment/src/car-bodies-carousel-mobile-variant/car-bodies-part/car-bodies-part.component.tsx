import type { FC }                 from 'react'

import type { CarBodiesPartProps } from './car-bodies-part.interface.js'

import React                       from 'react'

import { CarBodyItem }             from '../car-body-item/index.js'

export const CarBodiesPart: FC<CarBodiesPartProps> = ({ carBodies, onCarBody, setOnCarBody }) => {
  if (carBodies) {
    return carBodies.map(
      (item: string | null, index: number) =>
        item && (
          <CarBodyItem
            // eslint-disable-next-line react/no-array-index-key
            key={`car-bodies-carousel-${index}`}
            item={item}
            setOnCarBody={setOnCarBody}
            onCarBody={onCarBody}
          />
        )
    )
  }

  return null
}
