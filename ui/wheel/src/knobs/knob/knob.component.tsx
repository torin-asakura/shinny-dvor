import React           from 'react'
import { FC }          from 'react'

import { Card }        from '@ui/card'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Text }        from '@ui/text'
import { useHover }    from '@ui/utils'
import { usePopover }  from '@ui/utils'

import { Container }   from './container'
import { InnerCircle } from './inner-circle'
import { KnobProps }   from './knob.interface'
import { OuterCircle } from './outer-circle'

const Knob: FC<KnobProps> = ({ text, ...props }) => {
  const [hover, hoverProps] = useHover()

  const { layerProps, triggerProps, render } = usePopover('right-center', 12, 'hover')

  return (
    <Container {...hoverProps} {...props}>
      <Layout display={['none', 'none', 'flex']}>
        <Layout {...triggerProps}>
          <OuterCircle hover={hover}>
            <InnerCircle hover={hover} />
          </OuterCircle>
        </Layout>
        {render(
          <Box
            backgroundColor='white'
            width={304}
            boxShadow='transparentBlack'
            borderRadius='extra'
            {...layerProps}
          >
            <Layout flexBasis={12} flexShrink={0} />
            <Column fill>
              <Layout flexBasis={10} />
              <Text fontSize='small' lineHeight='default'>
                {text}
              </Text>
              <Layout flexBasis={10} />
            </Column>
            <Layout flexBasis={12} flexShrink={0} />
          </Box>
        )}
      </Layout>
      <Layout display={['flex', 'flex', 'none']}>
        <Card backdrop container={<Text lineHeight='default'>{text}</Text>}>
          <Layout>
            <OuterCircle hover={hover}>
              <InnerCircle hover={hover} />
            </OuterCircle>
          </Layout>
        </Card>
      </Layout>
    </Container>
  )
}

export { Knob }
