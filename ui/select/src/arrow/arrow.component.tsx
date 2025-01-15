import type { ArrowSprinkles }      from './arrow.css.js'
import type { ArrowContainerProps } from './arrow.interface.js'

import { memo }                     from 'react'
import React                        from 'react'

import { DropDownIcon }             from '@ui/icons'

import { arrowSprinkles }           from './arrow.css.js'
import { baseContainerStyles }      from './arrow.css.js'

export const Arrow = memo(({ isOpen, ...props }: ArrowContainerProps & ArrowSprinkles) => {
  const { className, style, otherProps } = arrowSprinkles({
    transform: `rotate(${isOpen ? 180 : 0}deg)`,
    ...props,
  })
  return (
    <div className={`${baseContainerStyles} ${className}`} style={style} {...otherProps}>
      <DropDownIcon width={16} height={16} />
    </div>
  )
})
