/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import type { ContainerProps } from './container.interfaces.js'

import { memo }                from 'react'
import React                   from 'react'

import { baseStyles }          from './container.css.js'
import { shapeStyles }         from './container.css.js'

const Container = memo(({ children, onClick }: ContainerProps) => (
  <div className={`${baseStyles} ${shapeStyles}`} onClick={onClick}>
    {children}
  </div>
))

export { Container }
