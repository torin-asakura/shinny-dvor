import type { FC }                      from 'react'

import type { KnobDesktopVariantProps } from './knob-desktop-variant.interface.js'

import React                            from 'react'

import { Box }                          from '@ui/layout'
import { Layout }                       from '@ui/layout'
import { Column }                       from '@ui/layout'
import { Text }                         from '@ui/text'

import { InnerCircle }                  from '../inner-circle/index.js'
import { OuterCircle }                  from '../outer-circle/index.js'

export const KnobDesktopVariant: FC<KnobDesktopVariantProps> = ({
  triggerProps,
  hover,
  render,
  layerProps,
  text,
}) => (
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
)
