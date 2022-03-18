import React           from 'react'
import { FC }          from 'react'

import { useHover }    from '@ui/utils'

import { Container }   from './container'
import { InnerCircle } from './inner-circle'
import { KnobProps }   from './knob.interface'
import { OuterCircle } from './outer-circle'

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
