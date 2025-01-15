import type { FC }                     from 'react'

import type { KnobMobileVariantProps } from './knob-mobile-variant.interface.js'

import React                           from 'react'

import { Button }                      from '@ui/button'
import { Card }                        from '@ui/card'
import { CloseIcon }                   from '@ui/icons'
import { Layout }                      from '@ui/layout'
import { Box }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Text }                        from '@ui/text'

import { InnerCircle }                 from '../inner-circle/index.js'
import { OuterCircle }                 from '../outer-circle/index.js'

export const KnobMobileVariant: FC<KnobMobileVariantProps> = ({
  card,
  setCard,
  active,
  setActive,
  text,
}) => (
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
)
