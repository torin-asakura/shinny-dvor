import { Splide } from '@splidejs/react-splide'

import React      from 'react'
import { FC }     from 'react'

import { Arrow }  from './arrow'

const Slider: FC = ({ children }) => (
  <Splide
    options={{
      perPage: 3,
      gap: 40,
      focus: 'center',
      type: 'loop',
      autoWidth: true,
    }}
    renderControls={() => (
      <div className='splide__arrows'>
        <button className='splide__arrow splide__arrow--prev'>
          <Arrow direction='left' />
        </button>
        <button className='splide__arrow splide__arrow--next'>
          <Arrow direction='right' />
        </button>
      </div>
    )}
  >
    {children}
  </Splide>
)

export { Slider }
