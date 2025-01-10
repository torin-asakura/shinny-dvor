import type { FC }            from 'react'

import type { Sprinkles }     from './container/container.css.js'
import type { KnobProps }     from './knob.interface.js'

import { useState }           from 'react'
import React                  from 'react'

import { useHover }           from '@ui/utils'
import { usePopover }         from '@ui/utils'

import { Container }          from './container/index.js'
import { KnobDesktopVariant } from './knob-dektop-variant/index.js'
import { KnobMobileVariant }  from './knob-mobile-variant/index.js'

export const Knob: FC<KnobProps & Sprinkles> = ({ text, ...props }) => {
  const [hover, hoverProps] = useHover()
  const [card, setCard] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  const { layerProps, triggerProps, render } = usePopover('right-center', 12, 'hover')

  return (
    <Container {...hoverProps} {...props}>
      <KnobDesktopVariant
        triggerProps={triggerProps}
        hover={hover}
        render={render}
        layerProps={layerProps}
        text={text}
      />
      <KnobMobileVariant
        card={card}
        setCard={setCard}
        active={active}
        setActive={setActive}
        text={text}
      />
    </Container>
  )
}
