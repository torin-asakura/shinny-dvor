import type { ContainerProps } from './container.interface.js'

import { memo }                from 'react'
import React                   from 'react'

import { baseStyles }          from './container.css.js'
import { shapeStyles }         from './container.css.js'
import { appearanceStyles }    from './container.css.js'

export const Container = memo(({ checked, children, ...props }: ContainerProps) => (
  <div className={`${baseStyles} ${shapeStyles} ${appearanceStyles({ checked })}`} {...props}>
    {children}
  </div>
))
