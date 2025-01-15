import type { BoxProps } from './box.interface.js'

import { memo }          from 'react'
import React             from 'react'

import { box }           from './box.css.js'

const Box = memo(({ checked = false, size = 'medium', children, ...props }: BoxProps) => (
  <div className={box({ checked, size })} {...props}>
    {children}
  </div>
))

export { Box }
