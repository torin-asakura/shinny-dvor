import type { PropsWithChildren } from 'react'

import { memo }                   from 'react'
import React                      from 'react'

import { baseStyles }             from './checkmark.css.js'
import { appearanceStyles }       from './checkmark.css.js'
import { shapeStyles }            from './checkmark.css.js'

const Checkmark = memo(({ children }: PropsWithChildren) => (
  <div className={`${baseStyles} ${appearanceStyles} ${shapeStyles}`}>{children}</div>
))

export { Checkmark }
