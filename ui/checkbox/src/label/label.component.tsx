import type { PropsWithChildren } from 'react'

import { memo }                   from 'react'
import React                      from 'react'

import { labelStyles }            from './label.css.js'

const Label = memo(({ children, ...props }: PropsWithChildren) => (
  <div className={labelStyles()} {...props}>
    {children}
  </div>
))

export { Label }
