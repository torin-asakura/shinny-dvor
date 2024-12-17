import React              from 'react'

import { memo }     from 'react'

import { ContainerProps } from './container.interfaces.js'
import { baseStyles }     from './container.css.js'
import { shapeStyles }    from './container.css.js'

const Container = memo(({ children, onClick }: ContainerProps) => (
  <div onClick={onClick} className={`${baseStyles} ${shapeStyles}`}>
    {children}
  </div>
))

export { Container }
