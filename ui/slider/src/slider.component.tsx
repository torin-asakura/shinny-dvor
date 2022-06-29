import { Splide } from '@splidejs/react-splide'

import React      from 'react'
import { FC }     from 'react'

const Slider: FC = ({ children }) => (
  <Splide
    options={{
      perPage: 3,
      gap: 40,
      focus: 'center',
      type: 'loop',
      autoWidth: true,
      arrows: true,
      classes: {
        pagination: 'splide__pagination splide__pagination__custom',
        page: 'splide__pagination__page splide__pagination__page__custom',
        arrow: 'splide__arrow splide__arrow__custom',
        arrows: 'splide__arrows splide__arrows_custom',
      },
    }}
  >
    {children}
  </Splide>
)

export { Slider }
