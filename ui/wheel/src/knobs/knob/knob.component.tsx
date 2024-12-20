import type { KnobProps } from './knob.interface.js'
import type { FC }        from 'react'

import React              from 'react'
import { useState }       from 'react'

import { Button }         from '@ui/button'
import { Card }           from '@ui/card'
import { CloseIcon }      from '@ui/icons'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'
import { useHover }       from '@ui/utils'
import { usePopover }     from '@ui/utils'

import { Sprinkles }      from './container/container.css.js'
import { Container }      from './container/index.js'
import { InnerCircle }    from './inner-circle/index.js'
import { OuterCircle }    from './outer-circle/index.js'

export const Knob: FC<KnobProps & Sprinkles> = ({ text, ...props }) => {
  const [hover, hoverProps] = useHover()
  const [card, setCard] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

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
            backgroundColor='$white'
            width={304}
            boxShadow='$transparentBlack'
            borderRadius='$extra'
            {...layerProps}
          >
            <Layout flexBasis={12} flexShrink={0} />
            <Column fill>
              <Layout flexBasis={10} />
              <Text fontSize='$small' lineHeight='$default'>
                {text}
              </Text>
              <Layout flexBasis={10} />
            </Column>
            <Layout flexBasis={12} flexShrink={0} />
          </Box>
        )}
      </Layout>
      <Layout display={['flex', 'flex', 'none']}>
        <Layout
          onClick={(): void => {
            setCard(!card)
            setActive(!active)
          }}
        >
          <OuterCircle hover={active}>
            <InnerCircle hover={active} />
          </OuterCircle>
        </Layout>
        <Card
          opened={card}
          onClose={(): void => {
            setCard(false)
            setActive(false)
          }}
        >
          <Box backgroundColor='$white' borderRadius='$topSide' boxShadow='$lightGrey'>
            <Layout flexBasis={20} flexShrink={0} />
            <Column fill>
              <Layout flexBasis={20} />
              <Row>
                <Layout>
                  <Text lineHeight='$medium'>{text}</Text>
                </Layout>
                <Layout flexBasis={8} flexShrink={0} />
                <Layout alignItems='flex-start'>
                  <Button
                    variant='transparent'
                    size='ghost'
                    onClick={(): void => {
                      setActive(false)
                      setCard(false)
                    }}
                  >
                    <CloseIcon color='darkGray' width={24} height={24} />
                  </Button>
                </Layout>
              </Row>
              <Layout flexBasis={20} />
            </Column>
            <Layout flexBasis={20} flexShrink={0} />
          </Box>
        </Card>
      </Layout>
    </Container>
  )
}
