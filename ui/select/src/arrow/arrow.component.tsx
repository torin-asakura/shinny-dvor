import type { ArrowContainerProps } from './arrow.interface.js'

import { memo }                     from 'react'
import React                        from 'react'

import { DropDownIcon }             from '@ui/icons'

import { baseContainerStyles }      from './arrow.css.js'
import { openStyles }               from './arrow.css.js'
import { closedStyles }             from './arrow.css.js'

export const Arrow = memo(({ isOpen }: ArrowContainerProps) => (
  <div className={`${baseContainerStyles} ${isOpen ? openStyles : closedStyles}`}>
    <DropDownIcon width={16} height={16} />
  </div>
))
