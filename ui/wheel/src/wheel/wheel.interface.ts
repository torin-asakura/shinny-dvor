import { ReactNode } from 'react'

import { WheelImg }  from '../wheel.interface'

export interface WheelProps extends WheelImg {
  children: ReactNode
}
