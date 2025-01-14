import type { BoxProps }      from '@ui/layout'

import React                  from 'react'
import { memo }               from 'react'

import { baseBackdropStyles } from './backdrop.css.js'

export const Backdrop = memo(({ ...props }: BoxProps) => (
  <div className={`${baseBackdropStyles}`} {...props} />
))
