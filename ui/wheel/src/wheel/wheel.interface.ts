import { ReactNode } from 'react'

import { WheelImg }  from '../wheel.interface.js'

export interface WheelProps extends WheelImg {
  children: ReactNode
}
