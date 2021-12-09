import React            from 'react'
import { FC }           from 'react'

import { Box }          from '@ui/layout'

import { DividerProps } from './divider.interface'

const Divider: FC<DividerProps> = ({ weight = 1, color = 'white' }) => (
  <Box height={weight} width='100%' backgroundColor={color} />
)

export { Divider }
