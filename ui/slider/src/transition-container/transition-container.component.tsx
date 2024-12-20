import { memo }                      from 'react'
import React                         from 'react'

import {
  TransitionContainerSprinkles,
  transitionContainerSprinkles,
  transitionContainerStyles
} from './transition-container.css.js'
import {TransitionContainerProps} from "./transition-container.interfaces.js";
import {vars} from "@ui/theme";

export const TransitionContainer = memo(({ isHighlighted, children, ...props }: TransitionContainerProps & TransitionContainerSprinkles) => {
  const { className, style, otherProps } = transitionContainerSprinkles({
    minWidth: isHighlighted ? '22px' : '10px',
    backgroundColor: isHighlighted ? vars.colors.blue : vars.colors.gray,
    ...props,
  })
  return(
      <div className={`${transitionContainerStyles} ${className}`} style={style} {...otherProps}>
        {children}
      </div>
  )
})
