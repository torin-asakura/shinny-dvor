import React            from 'react'
import { FC }           from 'react'

import { Box }          from '@ui/layout'

import { DividerProps } from './divider.interface'

const Divider: FC<DividerProps> = ({ weight = 1 }) => (
  <Box height={weight} width='100%' backgroundColor='black' />
)

export { Divider }
