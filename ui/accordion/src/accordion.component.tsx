import type { AccordionProps } from './accordion.interface.js'

import { memo }                from 'react'
import { useState }            from 'react'
import React                   from 'react'

import { Condition }           from '@ui/condition'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'

import { Arrow }               from './arrow/index.js'
import { TriggerContainer }    from './trigger-container/index.js'

export const Accordion = memo(({ children, text }: AccordionProps) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <Column width='100%'>
      <TriggerContainer
        onClick={() => {
          setActive(!active)
        }}
      >
        <Box
          width='100%'
          height={40}
          borderRadius='$medium.default'
          justifyContent='space-between'
          alignItems='center'
        >
          <Layout>
            <Text fontWeight='$medium' fontSize='$large' color='$black'>
              {text}
            </Text>
          </Layout>
          <Layout flexBasis={6} />
          <Arrow isOpen={active} />
        </Box>
      </TriggerContainer>
      <Condition match={active}>
        <Layout flexBasis={24} flexShrink={0} />
        <Row justifyContent='space-between'>{children}</Row>
      </Condition>
    </Column>
  )
})
