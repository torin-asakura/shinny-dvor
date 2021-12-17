import React           from 'react'
import { FC }          from 'react'

import { useHover }    from '@ui/utils'

import { KnobProps }   from './knob.interface'
import { InnerCircle } from './inner-circle'
import { OuterCircle } from './outer-circle'
import { Container }   from './container'

const Knob: FC<KnobProps> = (props) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container {...hoverProps} {...props}>
      <OuterCircle hover={hover}>
        <InnerCircle hover={hover} />
      </OuterCircle>
    </Container>
  )
}

export { Knob }
