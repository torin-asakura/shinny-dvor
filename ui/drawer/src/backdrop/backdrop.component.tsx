import { memo }               from 'react'
import React                  from 'react'

import { BoxProps }           from '@ui/layout'

import { baseBackdropStyles } from './backdrop.css.js'

export const Backdrop = memo(({ ...props }: BoxProps) => (
  <div className={`${baseBackdropStyles}`} {...props} />
))
