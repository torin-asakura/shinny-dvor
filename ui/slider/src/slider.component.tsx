import React              from 'react'
import { FC }             from 'react'

import { SliderProvider } from './context'

const Slider: FC = ({ children }) => <SliderProvider>{children}</SliderProvider>

export { Slider }
