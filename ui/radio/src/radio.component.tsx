import React                           from 'react'
import { FC }                          from 'react'
import { useState }                    from 'react'
import styled                          from '@emotion/styled'
import { createCheckBaseStyles }       from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles } from '@atls-ui-parts/checkbox'

import { Layout }                      from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Text }                        from '@ui/text'

import { RadioProps }                  from './radio.interface'
import { Container }                   from './container'
import { getCheckColor }               from './helper'

const Radio: FC<RadioProps> = ({ children, checked }) => {
  const [hover, setHover] = useState<boolean>(false)
  const RadioStyled = styled.div(createCheckBaseStyles())
  const Checkmark = styled.div(
    createCheckBaseStyles(),
    createCheckAppearanceStyles({
      color: getCheckColor(hover, checked),
    })
  )

  return (
    <Column width='100%'>
      <Container
        checked={checked}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Checkmark>
          <Text fontSize='small'>{children}</Text>
        </Checkmark>
        <RadioStyled checked={checked} />
      </Container>
      <Layout flexBasis={12} />
    </Column>
  )
}

export { Radio }
